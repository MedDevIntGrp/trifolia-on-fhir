import {BaseController, UserSecurityInfo} from './base.controller';
import {All, BadRequestException, Body, Controller, Header, Headers, HttpCode, HttpService, InternalServerErrorException, Param, Post, Query, Res, UseGuards} from '@nestjs/common';
import {buildUrl} from '../../../../libs/tof-lib/src/lib/fhirHelper';
import {Response} from 'express';
import {AuthGuard} from '@nestjs/passport';
import {TofLogger} from './tof-logger';
import {AxiosRequestConfig, AxiosResponse} from 'axios';
import {ApiOAuth2Auth, ApiOperation, ApiUseTags} from '@nestjs/swagger';
import {FhirServerBase, RequestMethod, RequestUrl, User} from './server.decorators';
import {ConfigService} from './config.service';
import {ITofUser} from './models/tof-request';
import {Globals} from '../../../../libs/tof-lib/src/lib/globals';
import {parseFhirUrl} from './helper';
import {Bundle, DomainResource, EntryComponent} from '../../../../libs/tof-lib/src/lib/stu3/fhir';
import nanoid from 'nanoid';

@Controller('fhir')
@UseGuards(AuthGuard('bearer'))
@ApiUseTags('FHIR Proxy')
@ApiOAuth2Auth()
export class FhirController extends BaseController {
  private readonly logger = new TofLogger(FhirController.name);

  constructor(protected httpService: HttpService, protected configService: ConfigService) {
    super(configService, httpService);
  }

  @Post(':resourceType/:id/([\$])change-id')
  @Header('Content-Type', 'text/plain')
  @HttpCode(200)
  @ApiOperation({ title: 'changeid', description: 'Changes the ID of a resource', operationId: 'changeId' })
  async changeId(@FhirServerBase() fhirServerBase: string, @Param('resourceType') resourceType: string, @Param('id') currentId: string, @Query('newId') newId: string, @User() user: ITofUser): Promise<any> {
    if (!newId) {
      throw new BadRequestException('You must specify a "newId" to change the id of the resource');
    }

    const currentOptions = {
      url: buildUrl(fhirServerBase, resourceType, currentId),
      method: 'GET'
    };

    this.logger.log(`Request to change id for resource ${resourceType}/${currentId} to ${newId}`);

    // Get the current state of the resource
    const getResponse = await this.httpService.request(currentOptions).toPromise();
    const resource = getResponse.data;

    if (!resource || !resource.id) {
      throw new Error(`No resource found for ${resourceType} with id ${currentId}`);
    }

    // Make sure the resource can be edited, by the user
    const userSecurityInfo = await this.getUserSecurityInfo(user, fhirServerBase);
    this.assertUserCanEdit(userSecurityInfo, resource);

    // Change the id of the resource
    resource.id = newId;

    const createOptions = {
      url: buildUrl(fhirServerBase, resourceType, newId),
      method: 'PUT',
      data: resource
    };
    const deleteOptions = {
      url: buildUrl(fhirServerBase, resourceType, currentId),
      method: 'DELETE'
    };

    this.logger.log('Sending PUT request to FHIR server with the new resource ID');

    // Create the new resource with the new id
    await this.httpService.request(createOptions).toPromise();

    this.logger.log('Sending DELETE request to FHIR server for original resource');

    // Delete the original resource with the original id
    await this.httpService.request(deleteOptions).toPromise();

    this.logger.log(`Successfully changed the id of ${resourceType}/${currentId} to ${resourceType}/${newId}`);
    return `Successfully changed the id of ${resourceType}/${currentId} to ${resourceType}/${newId}`;
  }

  private async processTransactionEntry(entry: EntryComponent, fhirServerBase: string, userSecurityInfo: UserSecurityInfo) {
    // Make sure the user has permission to edit the pre-existing resource
    if (entry.request.method !== 'POST') {
      const id = entry.resource.id;

      if (!id) {
        throw new BadRequestException('Transaction entry with a request method of PUT must specify Resource.id');
      }

      if (this.configService.server.enableSecurity) {
        let originalResource;
        const getUrl = buildUrl(fhirServerBase, entry.resource.resourceType, entry.resource.id);

        try {
          originalResource = (await this.httpService.get<DomainResource>(getUrl).toPromise()).data;
          this.assertUserCanEdit(userSecurityInfo, originalResource);
        } catch (ex) {
          if (ex.status !== 404) {
            throw ex;
          }
          // Do nothing if the resource is not found... That means this is a create-with-id request
        }

        await this.removePermissions(fhirServerBase, originalResource, entry.resource);
      }

      // Make sure the user has given themselves permissions to edit
      // the resource they are requesting to be updated
      if (entry.resource) {
        this.ensureUserCanEdit(userSecurityInfo, entry.resource);
      }
    }

    if (entry.request.method === 'POST' && !entry.resource.id) {
      entry.resource.id = nanoid(8);
    }

    const url = fhirServerBase +
      (!fhirServerBase.endsWith('/') ? '/' : '') +
      (entry.request.url.startsWith('/') ? entry.request.url.substring(1) : entry.request.url);
    const options = {
      url: url,
      method: entry.request.method,
      data: entry.resource
    };

    return this.httpService.request(options).toPromise();
  }

  private async processTransaction(bundle: Bundle, fhirServerBase: string, userSecurityInfo: UserSecurityInfo) {
    if (!bundle || bundle.resourceType !== 'Bundle' || ['batch', 'transaction'].indexOf(bundle.type) < 0) {
      throw new BadRequestException();
    }

    // Make sure each entry has a request.url
    (bundle.entry || []).forEach((entry) => {
      if (!entry.request || !entry.request.url || !entry.request.method) {
        throw new BadRequestException('Transaction entries must have an request.url and request.method');
      } else if (['GET','POST','PUT','DELETE'].indexOf(entry.request.method) < 0) {
        throw new BadRequestException('Transaction entry\'s method must be GET, POST, PUT or DELETE');
      }
    });

    const promises = (bundle.entry || []).map((entry) => this.processTransactionEntry(entry, fhirServerBase, userSecurityInfo));
    const results = await Promise.all(promises);
    const responseBundle: Bundle = {
      resourceType: 'Bundle',
      type: 'transaction-response'
    };

    if (bundle.type === 'batch') {
      responseBundle.type = 'batch-response';
    }

    responseBundle.entry = results.map((result, index) => {
      const responseEntry = <EntryComponent> {
        request: {
          method: bundle.entry[index].request.method,
          url: bundle.entry[index].request.url
        },
        response: {
          status: result.status.toString() + (result.statusText ? ' ' + result.statusText : ''),
          location: result.headers['content-location']
        }
      };

      if (result.data && result.data.resourceType === 'OperationOutcome') {
        responseEntry.response.outcome = result.data;
      }

      return responseEntry;
    });

    return responseBundle;
  }

  @All()
  public async proxy(
    @RequestUrl() url: string,
    @Headers() headers: {[key: string]: any},
    @RequestMethod() method: string,
    @FhirServerBase() fhirServerBase: string,
    @Res() response: Response,
    @User() user: ITofUser,
    @Body() body?) {

    const userSecurityInfo = await this.getUserSecurityInfo(user, fhirServerBase);
    let proxyUrl = fhirServerBase;

    if (proxyUrl.endsWith('/')) {
      proxyUrl = proxyUrl.substring(0, proxyUrl.length - 1);
    }

    proxyUrl += url;

    const parsedUrl = parseFhirUrl(url);
    const isTransaction = body && body.resourceType === 'Bundle' && body.type === 'transaction';

    if (isTransaction && !parsedUrl.resourceType) {
      // When dealing with a transaction, process each individual resource within the bundle
      const responseBundle = await this.processTransaction(body, fhirServerBase, userSecurityInfo);
      response.status(200);
      response.send(responseBundle);
      return;
    } else if (method === 'GET' && parsedUrl.resourceType && !parsedUrl.id && !parsedUrl.operation) {
      // When searching, add _security query parameter
      if (this.configService.server.enableSecurity) {
        // Security search
        if (userSecurityInfo) {
          const securityTags = [`everyone${Globals.securityDelim}read`];

          if (userSecurityInfo.user) {
            securityTags.push(`user${Globals.securityDelim}${userSecurityInfo.user.id}${Globals.securityDelim}read`);
          }

          userSecurityInfo.groups.forEach((group) => {
            securityTags.push(`group${Globals.securityDelim}${group.id}${Globals.securityDelim}read`);
          });

          const securityQueryValue = securityTags.join(',');

          // Make sure the url deliminates query params
          if (proxyUrl.indexOf('?') < 0) {
            proxyUrl += '?';
          }

          // If there are already query params in the url, add another query param deliminator
          if (!proxyUrl.endsWith('?')) {
            proxyUrl += '&';
          }

          // Add the _security query param to the url
          proxyUrl += '_security=' + encodeURIComponent(securityQueryValue);
        }
      }
    } else if (method === 'POST') {
      // When creating, make sure permissions are assigned to the new resource
      if (this.configService.server.enableSecurity) {
        this.ensureUserCanEdit(userSecurityInfo, body);
      }
    } else if (method === 'PUT' || method === 'DELETE') {
      // When updating, make sure the user can modify the resource in question
      if (this.configService.server.enableSecurity) {
        try {
          const getUrl = buildUrl(fhirServerBase, parsedUrl.resourceType, parsedUrl.id);
          const persistedResource = (await this.httpService.get<DomainResource>(getUrl).toPromise()).data;

          await this.removePermissions(fhirServerBase, persistedResource, body);
          this.assertUserCanEdit(userSecurityInfo, persistedResource);
        } catch (ex) {
          if (ex.status !== 404) {
            throw ex;
          }
          // Do nothing if the resource is not found... That means this is a create-with-id request
        }

        if (body) {
          this.ensureUserCanEdit(userSecurityInfo, body);
        }
      }
    }

    const proxyHeaders = JSON.parse(JSON.stringify(headers));
    delete proxyHeaders['authorization'];
    delete proxyHeaders['fhirserver'];
    delete proxyHeaders['host'];
    delete proxyHeaders['origin'];
    delete proxyHeaders['referer'];
    delete proxyHeaders['user-agent'];
    delete proxyHeaders['content-length'];
    delete proxyHeaders['cookie'];
    delete proxyHeaders['connection'];

    // Make sure that caching is turned off for proxied FHIR requests
    proxyHeaders['Cache-Control'] = 'no-cache';

    const options = <AxiosRequestConfig> {
      url: proxyUrl,
      method: method,
      headers: proxyHeaders,
      encoding: 'utf8',
      gzip: false
    };

    if (method !== 'GET' && method !== 'DELETE' && body) {
      options.data = body;
    }

    const sendResults = (results: AxiosResponse) => {
      if (results.headers['content-type']) {
        response.contentType(results.headers['content-type']);
      }

      response.status(results.status);
      response.send(results.data);
    };

    try {
      const results = await this.httpService.request(options).toPromise();
      sendResults(results);
    } catch (ex) {
      const results = ex.response;

      if (results) {
        sendResults(results);
      } else {
        this.logger.error('Error processing http-error results in proxy', ex);
        throw new InternalServerErrorException();
      }
    }
  }
}

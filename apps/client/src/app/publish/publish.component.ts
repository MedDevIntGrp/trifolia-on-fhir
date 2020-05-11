import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ImplementationGuide } from '../../../../../libs/tof-lib/src/lib/stu3/fhir';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import { ExportOptions, ExportService } from '../shared/export.service';
import { Globals } from '../../../../../libs/tof-lib/src/lib/globals';
import { ConfigService } from '../shared/config.service';
import { CookieService } from 'angular2-cookie/core';
import { ImplementationGuideService } from '../shared/implementation-guide.service';
import { FhirService } from '../shared/fhir.service';
import { HtmlExportStatus, SocketService } from '../shared/socket.service';
import { saveAs } from 'file-saver';
import { ServerValidationResult } from '../../../../../libs/tof-lib/src/lib/server-validation-result';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { getErrorString } from '../../../../../libs/tof-lib/src/lib/helper';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ngbd-typeahead-basic',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.css']
})
export class PublishComponent implements OnInit {
  public selectedImplementationGuide: ImplementationGuide;
  public options = new ExportOptions();
  public searching = false;
  public message: string;
  public validation: ServerValidationResult[];
  public socketOutput = '';
  public autoScroll = true;
  public Globals = Globals;
  public inProgress = false;
  public templateVersions : string[] = [];
  public publisherVersions : any;
  public recentPublisherVersions : any;
  public versionModel: any;
  private packageId;

  @ViewChild('tabs', { static: true })
  private tabs: NgbTabset;

  @ViewChild('outputEle', { static: false })
  private outputEle: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private socketService: SocketService,
    private fhirService: FhirService,
    private implementationGuideService: ImplementationGuideService,
    private cookieService: CookieService,
    public configService: ConfigService,
    private exportService: ExportService,
    private http: HttpClient) {

    this.options.implementationGuideId = !this.route.snapshot.paramMap.get('id') ?
    this.cookieService.get(Globals.cookieKeys.exportLastImplementationGuideId + '_' + this.configService.fhirServer) :
    this.route.snapshot.paramMap.get('id');
    this.options.responseFormat = <any>this.cookieService.get(Globals.cookieKeys.lastResponseFormat) || 'application/json';
    this.options.templateType = <any>this.cookieService.get(Globals.cookieKeys.lastTemplateType) || this.options.templateType;
    this.options.template = <any>this.cookieService.get(Globals.cookieKeys.lastTemplate) || this.options.template;
    this.options.templateVersion = <any>this.cookieService.get(Globals.cookieKeys.lastTemplateVersion) || this.options.templateVersion;
    // Handle intermittent disconnects mid-export by notifying the server that we are currently exporting the given packageId
    this.socketService.onConnected.subscribe(() => {
      if (this.packageId) {
        this.socketService.notifyExporting(this.packageId);
      }
    });
  }

  /**
   * this metehod is called when the user types into the typeahead input box for IG Publisher version
   * @param $e
   */
  typeaheadSelectedVersion($e) {
    $e.preventDefault();
    const item = $e.item;
    this.versionModel = item;
    const version = item.replace(' (Current)', '');
    this.options.version = version;
  }

  /**
   * this method is called when the user selects an item in the IG Publisher top 10 versions drop down
   * @param $event
   */
  dropdownSelectedVersion($event){
    $event.preventDefault();
    const item = $event.target.options[$event.target.options.selectedIndex].text;
    this.versionModel = item;
    const version = item.replace(' (Current)', '');
    this.options.version = version;
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.publisherVersions.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  public implementationGuideChanged(implementationGuide: ImplementationGuide) {
    this.selectedImplementationGuide = implementationGuide;
    this.options.implementationGuideId = implementationGuide ? implementationGuide.id : undefined;
    this.validation = null;

    const cookieKey = Globals.cookieKeys.exportLastImplementationGuideId + '_' + this.configService.fhirServer;

    if (implementationGuide && implementationGuide.id) {
      this.cookieService.put(cookieKey, implementationGuide.id);
    } else if (this.cookieService.get(cookieKey)) {
      this.cookieService.remove(cookieKey);
    }

    if (implementationGuide && implementationGuide.id) {
      this.exportService.validate(implementationGuide.id)
        .subscribe(
          (results) => {
            this.validation = results;
          },
          (err) => this.message = getErrorString(err)
        );
    }

    this.http.get('/api/export/publisher-version')
      .subscribe(data => {
          this.publisherVersions = data;
          this.recentPublisherVersions = this.publisherVersions.splice(0,10);
          this.recentPublisherVersions.splice(0, 0, '10 Most Recent');
        },
        error => {
          console.error(error);
        });
  }

  public searchImplementationGuide = (text$: Observable<string>) => {
    return text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap((term) => {
        return this.implementationGuideService.getImplementationGuides(1, term).pipe(map((bundle) => {
          return (bundle.entry || []).map((entry) => <ImplementationGuide>entry.resource);
        }));
      }),
      tap(() => this.searching = false)
    );
  };

  public searchFormatter = (ig: ImplementationGuide) => {
    return `${ig.name} (id: ${ig.id})`;
  };

  public clearImplementationGuide() {
    const cookieKey = Globals.cookieKeys.exportLastImplementationGuideId + '_' + this.configService.fhirServer;

    this.selectedImplementationGuide =
      this.options.implementationGuideId = null;

    if (this.cookieService.get(cookieKey)) {
      this.cookieService.remove(cookieKey);
    }
  }

  public get publishDisabled(): boolean {
    return !this.options.implementationGuideId || !this.options.responseFormat || this.inProgress;
  }

  public responseFormatChanged() {
    this.cookieService.put(Globals.cookieKeys.lastResponseFormat, this.options.responseFormat);
  }

  public async templateTypeChanged() {
    if (this.options.templateType === 'official') {
      this.options.template = 'hl7.fhir.template';
      this.options.templateVersion = 'current';
    } else if (this.options.templateType === 'custom-uri') {
      this.options.template = '';
    }

    this.cookieService.put(Globals.cookieKeys.lastTemplateType, this.options.templateType);
    await this.templateChanged();
  }

  public async templateChanged() {
    this.cookieService.put(Globals.cookieKeys.lastTemplate, this.options.template);

    if (this.options.templateType === 'official') {
      this.templateVersions = await this.configService.getTemplateVersions(this.options);

      const templateVersionCookie = <any>this.cookieService.get(Globals.cookieKeys.lastTemplateVersion);
      if (this.templateVersions && this.templateVersions.indexOf(templateVersionCookie) >= 0) {
        this.options.templateVersion = templateVersionCookie;
      } else if (this.templateVersions && this.templateVersions.length > 0) {
        this.options.templateVersion = this.templateVersions[0];
      } else {
        this.options.templateVersion = 'current';
      }
    } else {
      this.options.templateVersion = null;
    }

    this.templateVersionChanged();
  }

  public templateVersionChanged() {
    if (!this.options.templateVersion) {
      if (this.cookieService.get(Globals.cookieKeys.lastTemplateVersion)) {
        this.cookieService.remove(Globals.cookieKeys.lastTemplateVersion);
      }
    } else {
      this.cookieService.put(Globals.cookieKeys.lastTemplateVersion, this.options.templateVersion);
    }
  }

  public publish() {
    this.inProgress = true;
    this.socketOutput = '';
    this.tabs.select('status');

    this.exportService.publish(this.options)
      .subscribe((packageId: string) => {
        this.packageId = packageId;
      }, (err) => {
        this.message = getErrorString(err);
        this.inProgress = false;
      });
  }

  public cancel(){
    this.tabs.select('status');

    this.exportService.cancel(this.packageId)
      .subscribe((packageId: string) => {
        this.packageId = packageId;
        this.inProgress = false;
      }, (err) => {
        this.message = getErrorString(err);
    });
  }

  public getPackageId(){
    return this.packageId;
  }

  public ngOnInit() {
    if (this.configService.project) {
      this.options.implementationGuideId = this.configService.project.implementationGuideId;
    }

    if (this.options.implementationGuideId) {
      this.implementationGuideService.getImplementationGuide(this.options.implementationGuideId)
        .subscribe((implementationGuide: ImplementationGuide) => {
          this.implementationGuideChanged(implementationGuide);
        }, (err) => this.message = getErrorString(err));
    }

    this.templateChanged();

    this.socketService.onHtmlExport.subscribe((data: HtmlExportStatus) => {
      if (data.packageId === this.packageId) {
        if (data.status === 'complete') {
          this.message = 'Done exporting';

          this.socketOutput += data.message;

          if (this.options.downloadOutput) {
            const igName = this.selectedImplementationGuide.name.replace(/\s/g, '_');

            this.exportService.getPackage(this.packageId)
              .subscribe((results: any) => {
                saveAs(results.body, igName + '.zip');
              });
          }

          this.inProgress = false;
        } else if (data.status === 'error') {
          this.inProgress = false;
          this.message = 'An error occurred. Please review the status tab.';
        } else {
          let msg = data.message ? data.message.trim() : "";

          if (msg && !msg.endsWith('\n')) {
            msg += '\r\n';
          }

          this.socketOutput += msg;

          if (this.autoScroll && this.outputEle) {
            setTimeout(() => this.outputEle.nativeElement.scrollTop = this.outputEle.nativeElement.scrollHeight, 50);
          }
        }
      }
    }, (err) => {
      this.socketOutput += 'An error occurred while communicating with the server for the export: ' + getErrorString(err);
    });
  }
}

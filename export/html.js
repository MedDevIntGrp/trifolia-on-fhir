const BundleExporter = require('./bundle');
const config = require('config');
const tmp = require('tmp');
const rp = require('request-promise');
const {spawn} = require('child_process');
const Q = require('q');
const _ = require('underscore');
const path = require('path');
const fs = require('fs-extra');
const log4js = require('log4js');

const fhirConfig = config.get('fhir');
const serverConfig = config.get('server');
const log = log4js.getLogger();

function HtmlExporter(fhirServerBase, fhirServerId, fhir, io, socketId, implementationGuideId) {
    this._fhirServerBase = fhirServerBase;
    this._fhirServerId = fhirServerId;
    this._fhir = fhir;
    this._implementationGuideId = implementationGuideId;
    this._io = io;
    this._socketId = socketId;
}

function createTableFromArray(headers, data) {
    let output = '<table>\n<thead>\n<tr>\n';

    _.each(headers, (header) => {
        output += `<th>${header}</th>\n`;
    });

    output += '</tr>\n</thead>\n<tbody>\n';

    _.each(data, (row) => {
        output += '<tr>\n';

        _.each(row, (cell) => {
            output += `<td>${cell}</td>\n`;
        });

        output += '</tr>\n';
    });

    output += '</tbody>\n</table>\n';

    return output;
};

HtmlExporter.prototype._sendSocketMessage = function(packageId, status, message) {
    if (!this._socketId) {
        log.error('Won\'t send socket message for export because the original request did not specify a socketId');
        return;
    }

    if (this._io) {
        this._io.to(this._socketId).emit('message', {
            packageId: packageId,
            status: status,
            message: message
        });
    }
};

HtmlExporter.prototype._packagePage = function(pagesPath, implementationGuide, page) {
    const contentExtension = _.find(page.extension, (extension) => extension.url === 'https://trifolia-on-fhir.lantanagroup.com/StructureDefinition/extension-ig-page-content');

    if (contentExtension && contentExtension.valueReference && contentExtension.valueReference.reference && page.source) {
        const reference = contentExtension.valueReference.reference;

        if (reference.startsWith('#')) {
            const contained = _.find(implementationGuide.contained, (contained) => contained.id === reference.substring(1));

            if (contained && contained.resourceType === 'Binary') {
                const newPagePath = path.join(pagesPath, page.source);
                // noinspection JSUnresolvedFunction
                const content = Buffer.from(contained.content, 'base64').toString();
                fs.writeFileSync(newPagePath, content);
            }
        }
    }

    _.each(page.page, (subPage) => this._packagePage(pagesPath, implementationGuide, subPage));
};

HtmlExporter.prototype._getIgPublisher = function(packageId, useLatest, executeIgPublisher) {
    if (!executeIgPublisher) {
        return Q.resolve();
    }

    const deferred = Q.defer();
    const fileName = 'org.hl7.fhir.igpublisher.jar';
    const defaultPath = path.join(__dirname, '../ig-publisher');
    const defaultFilePath = path.join(defaultPath, fileName);

    if (useLatest === 'true') {
        log.debug('Request to get latest version of FHIR IG publisher. Retrieving from: ' + fhirConfig.latestPublisher);

        this._sendSocketMessage(packageId, 'progress', 'Downloading latest FHIR IG publisher');

        // TODO: Check http://build.fhir.org/version.info first

        rp(fhirConfig.latestPublisher, { encoding: null })
            .then((results) => {
                log.debug('Successfully downloaded latest version of FHIR IG Publisher. Ensuring latest directory exists');

                const latestPath = path.join(defaultPath, 'latest');
                fs.ensureDirSync(latestPath);

                // noinspection JSUnresolvedFunction
                const buff = Buffer.from(results, 'utf8');
                const latestFilePath = path.join(latestPath, fileName);

                log.debug('Saving FHIR IG publisher to ' + latestFilePath);

                fs.writeFileSync(latestFilePath, buff);

                deferred.resolve(latestFilePath);
            })
            .catch((err) => {
                log.error("Error getting latest version of FHIR IG publisher: " + err);
                this._sendSocketMessage(packageId, 'progress', 'Encountered error downloading latest IG publisher, will use pre-loaded/default IG publisher');
                return Q.resolve(defaultFilePath);
            });
    } else {
        log.debug('Using built-in version of FHIR IG publisher for export');
        this._sendSocketMessage(packageId, 'progress', 'Using existing/default version of FHIR IG publisher');
        return Q.resolve(defaultFilePath);
    }

    return deferred.promise;
};

HtmlExporter.prototype._copyExtension = function(destExtensionsDir, extensionFileName, isXml, fhir) {
    const sourceExtensionsDir = path.join(__dirname, '../src/assets/stu3/extensions');
    const sourceExtensionFileName = path.join(sourceExtensionsDir, extensionFileName);
    let destExtensionFileName = path.join(destExtensionsDir, extensionFileName);

    if (!isXml) {
        fs.copySync(sourceExtensionFileName, destExtensionFileName);
    } else {
        const extensionJson = fs.readFileSync(sourceExtensionFileName).toString();
        const extensionXml = fhir.jsonToXml(extensionJson);

        destExtensionFileName = destExtensionFileName.substring(0, destExtensionFileName.indexOf('.json')) + '.xml';
        fs.writeFileSync(destExtensionFileName, extensionXml);
    }
};

HtmlExporter.prototype._getDependencies = function(control, isXml, resourcesDir, fhir, fhirServerConfig) {
    const isStu3 = fhirServerConfig && fhirServerConfig.version === 'stu3';

    // Load the ig dependency extensions into the resources directory
    if (isStu3 && control.dependencyList && control.dependencyList.length > 0) {
        const destExtensionsDir = path.join(resourcesDir, 'structuredefinition');

        fs.ensureDirSync(destExtensionsDir);

        this._copyExtension(destExtensionsDir, 'extension-ig-dependency.json', isXml, fhir);
        this._copyExtension(destExtensionsDir, 'extension-ig-dependency-version.json', isXml, fhir);
        this._copyExtension(destExtensionsDir, 'extension-ig-dependency-location.json', isXml, fhir);
        this._copyExtension(destExtensionsDir, 'extension-ig-dependency-name.json', isXml, fhir);
    }

    return Q.resolve([]);           // This isn't actually needed, since the IG Publisher attempts to resolve these dependency automatically

    /*
    // Attempt to resolve the dependency's definitions and include it in the package
    const deferred = Q.defer();
    const promises = _.map(control.dependencyList, (dependency) => {
        const dependencyUrl =
            dependency.location +
            (dependency.location.endsWith('/') ? '' : '/') + 'definitions.' +
            (isXml ? 'xml' : 'json') +
            '.zip';
        return getDependency(dependencyUrl, dependency.name);
    });

    Q.all(promises)
        .then(deferred.resolve)
        .catch(deferred.reject);

    return deferred.promise;
    */
};

HtmlExporter.prototype._getFhirControlVersion = function(fhirServerConfig) {
    const configVersion = fhirServerConfig ? fhirServerConfig.version : null;

    switch (configVersion) {
        case 'stu3':
            return '3.0.1';
    }
};

HtmlExporter.prototype._updateTemplates = function(rootPath, bundle, implementationGuide) {
    const valueSets = _.chain(bundle.entry)
        .filter((entry) => entry.resource.resourceType === 'ValueSet')
        .map((entry) => entry.resource)
        .value();
    const codeSystems = _.chain(bundle.entry)
        .filter((entry) => entry.resource.resourceType === 'CodeSystem')
        .map((entry) => entry.resource)
        .value();
    const profiles = _.chain(bundle.entry)
        .filter((entry) => entry.resource.resourceType === 'StructureDefinition' && (!entry.resource.baseDefinition || !entry.resource.baseDefinition.endsWith('Extension')))
        .map((entry) => entry.resource)
        .value();
    const extensions = _.chain(bundle.entry)
        .filter((entry) => entry.resource.resourceType === 'StructureDefinition' && entry.resource.baseDefinition && entry.resource.baseDefinition.endsWith('Extension'))
        .map((entry) => entry.resource)
        .value();
    const capabilityStatements = _.chain(bundle.entry)
        .filter((entry) => entry.resource.resourceType === 'CapabilityStatement')
        .map((entry) => entry.resource)
        .value();

    if (implementationGuide) {
        const indexPath = path.join(rootPath, 'source/pages/index.md');

        if (implementationGuide.description) {
            const descriptionContent = '### Description\n\n' + implementationGuide.description + '\n\n';
            fs.appendFileSync(indexPath, descriptionContent);
        }

        if (implementationGuide.contact) {
            const authorsData = _.map(implementationGuide.contact, (contact) => {
                const foundEmail = _.find(contact.telecom, (telecom) => telecom.system === 'email');
                return [contact.name, foundEmail ? `<a href="mailto:${foundEmail.value}">${foundEmail.value}</a>` : ''];
            });
            const authorsContent = '### Authors\n\n' + createTableFromArray(['Name', 'Email'], authorsData) + '\n\n';
            fs.appendFileSync(indexPath, authorsContent);
        }
    }

    if (profiles.length > 0) {
        const profilesData = _.map(profiles, (profile) => {
            return [`<a href="StructureDefinition-${profile.id}.html">${profile.name}</a>`, profile.description || ''];
        });
        const profilesTable = createTableFromArray(['Name', 'Description'], profilesData);
        const profilesPath = path.join(rootPath, 'source/pages/profiles.md');
        fs.appendFileSync(profilesPath, '### Profiles\n\n' + profilesTable + '\n\n');
    }

    if (extensions.length > 0) {
        const extData = _.map(extensions, (extension) => {
            return [`<a href="StructureDefinition-${extension.id}.html">${extension.name}</a>`, extension.description || ''];
        });
        const extContent = createTableFromArray(['Name', 'Description'], extData);
        const extPath = path.join(rootPath, 'source/pages/profiles.md');
        fs.appendFileSync(extPath, '### Extensions\n\n' + extContent + '\n\n');
    }

    if (valueSets.length > 0) {
        let vsContent = '### Value Sets\n\n';
        const vsPath = path.join(rootPath, 'source/pages/terminology.md');

        _.each(valueSets, (valueSet) => {
            vsContent += `- [${valueSet.title || valueSet.name}](ValueSet-${valueSet.id}.html)\n`;
        });

        fs.appendFileSync(vsPath, vsContent + '\n\n');
    }

    if (codeSystems.length > 0) {
        let csContent = '### Code Systems\n\n';
        const csPath = path.join(rootPath, 'source/pages/terminology.md');

        _.each(valueSets, (codeSystem) => {
            csContent += `- [${codeSystem.title || codeSystem.name}](ValueSet-${codeSystem.id}.html)\n`;
        });

        fs.appendFileSync(csPath, csContent + '\n\n');
    }

    if (capabilityStatements.length > 0) {
        const csData = _.map(capabilityStatements, (capabilityStatement) => {
            return [`<a href="CapabilityStatement-${capabilityStatement.id}.html">${capabilityStatement.name}</a>`, capabilityStatement.description || ''];
        });
        const csContent = createTableFromArray(['Name', 'Description'], csData);
        const csPath = path.join(rootPath, 'source/pages/profiles.md');
        fs.appendFileSync(csPath, '### CapabilityStatements\n\n' + csContent);
    }
};

HtmlExporter.prototype._writeFilesForResource = function(rootPath, resource) {
    if (!resource || !resource.resourceType || resource.resourceType === 'ImplementationGuide') {
        return;
    }

    const introPath = path.join(rootPath, `source/pages/_includes/${resource.id}-intro.md`);
    const searchPath = path.join(rootPath, `source/pages/_includes/${resource.id}-search.md`);
    const summaryPath = path.join(rootPath, `source/pages/_includes/${resource.id}-summary.md`);

    fs.writeFileSync(introPath, 'TODO - Intro');
    fs.writeFileSync(searchPath, 'TODO - Search');
    fs.writeFileSync(summaryPath, 'TODO - Summary');
};

HtmlExporter.prototype._getControl = function(extension, implementationGuide, bundle, version) {
    const canonicalBaseRegex = /^(.+?)\/ImplementationGuide\/.+$/gm;
    const canonicalBaseMatch = canonicalBaseRegex.exec(implementationGuide.url);

    if (!canonicalBaseMatch || canonicalBaseMatch.length < 2) {
        throw new Error('The ImplementationGuide.url is not in the correct format. A canonical base cannot be determined.');
    }

    // TODO: Extract npm-name from IG extension.
    // currently, IG resource has to be in XML format for the IG Publisher
    const control = {
        tool: 'jekyll',
        source: 'implementationguide/' + implementationGuide.id + '.xml',
        'npm-name': implementationGuide.id + '-npm',                                // R4: ImplementationGuide.packageId
        license: 'CC0-1.0',                                                         // R4: ImplementationGuide.license
        paths: {
            qa: "generated_output/qa",
            temp: "generated_output/temp",
            output: "output",
            txCache: "generated_output/txCache",
            specification: "http://hl7.org/fhir/STU3",
            pages: [
                "framework",
                "source/pages"
            ],
            resources: [ "source/resources" ]
        },
        pages: ['pages'],
        'extension-domains': ['https://trifolia-on-fhir.lantanagroup.com'],
        'allowed-domains': ['https://trifolia-on-fhir.lantanagroup.com'],
        'sct-edition': 'http://snomed.info/sct/731000124108',
        canonicalBase: canonicalBaseMatch[1],
        defaults: {
            "Location": {"template-base": "ex.html"},
            "ProcedureRequest": {"template-base": "ex.html"},
            "Organization": {"template-base": "ex.html"},
            "MedicationStatement": {"template-base": "ex.html"},
            "SearchParameter": {"template-base": "base.html"},
            "StructureDefinition": {
                "template-mappings": "sd-mappings.html",
                "template-base": "sd.html",
                "template-defns": "sd-definitions.html"
            },
            "Immunization": {"template-base": "ex.html"},
            "Patient": {"template-base": "ex.html"},
            "StructureMap": {
                "content": false,
                "script": false,
                "template-base": "ex.html",
                "profiles": false
            },
            "ConceptMap": {"template-base": "base.html"},
            "Practitioner": {"template-base": "ex.html"},
            "OperationDefinition": {"template-base": "base.html"},
            "CodeSystem": {"template-base": "base.html"},
            "Communication": {"template-base": "ex.html"},
            "Any": {
                "template-format": "format.html",
                "template-base": "base.html"
            },
            "PractitionerRole": {"template-base": "ex.html"},
            "ValueSet": {"template-base": "base.html"},
            "CapabilityStatement": {"template-base": "base.html"},
            "Observation": {"template-base": "ex.html"}
        },
        resources: {}
    };

    if (version) {
        control.version = version;
    }

    // Set the dependencyList based on the extensions in the IG
    const dependencyExtensions = _.filter(implementationGuide.extension, (extension) => extension.url === 'https://trifolia-on-fhir.lantanagroup.com/StructureDefinition/extension-ig-dependency');

    // R4 ImplementationGuide.dependsOn
    control.dependencyList = _.map(dependencyExtensions, (dependencyExtension) => {
        const locationExtension = _.find(dependencyExtension.extension, (extension) => extension.url === 'https://trifolia-on-fhir.lantanagroup.com/StructureDefinition/extension-ig-dependency-location');
        const nameExtension = _.find(dependencyExtension.extension, (extension) => extension.url === 'https://trifolia-on-fhir.lantanagroup.com/StructureDefinition/extension-ig-dependency-name');
        const versionExtension = _.find(dependencyExtension.extension, (extension) => extension.url === 'https://trifolia-on-fhir.lantanagroup.com/StructureDefinition/extension-ig-dependency-version');

        return {
            location: locationExtension ? locationExtension.valueUri : '',
            name: nameExtension ? nameExtension.valueString : '',
            version: versionExtension ? versionExtension.valueString : ''
        };
    });

    // Define the resources in the control and what templates they should use
    if (bundle && bundle.entry) {
        for (let i = 0; i < bundle.entry.length; i++) {
            const entry = bundle.entry[i];
            const resource = entry.resource;

            if (resource.resourceType === 'ImplementationGuide') {
                continue;
            }

            control.resources[resource.resourceType + '/' + resource.id] = {
                base: resource.resourceType + '-' + resource.id + '.html',
                defns: resource.resourceType + '-' + resource.id + '-definitions.html'
            };
        }
    }

    return control;
};

HtmlExporter.prototype.export = function(format, executeIgPublisher, useTerminologyServer, useLatest, downloadOutput, testCallback) {
    const deferred = Q.defer();
    const bundleExporter = new BundleExporter(this._fhirServerBase, this._fhir, this._implementationGuideId);
    const isXml = format === 'xml' || format === 'application/xml' || format === 'application/fhir+xml';
    const extension = (!isXml ? '.json' : '.xml');
    const homedir = require('os').homedir();
    const fhirServerConfig = _.find(fhirConfig.servers, (serverConfig) => {
        return serverConfig.id === this._fhirServerId;
    });
    let control;
    let implementationGuideResource;

    tmp.dir((err, rootPath, cleanup) => {
        if (err) {
            log.error(err);
            return deferred.reject('An error occurred while creating a temporary directory: ' + err);
        }

        const packageId = rootPath.substring(rootPath.lastIndexOf(path.sep) + 1);
        const controlPath = path.join(rootPath, 'ig.json');
        let bundle;
        deferred.resolve(packageId);

        setTimeout(() => {
            this._sendSocketMessage(packageId, 'progress', 'Created temp directory. Retrieving resources for implementation guide.');

            // Prepare IG Publisher package
            bundleExporter.getBundle()
                .then((results) => {
                    bundle = results;
                    const resourcesDir = path.join(rootPath, 'source/resources');

                    this._sendSocketMessage(packageId, 'progress', 'Resources retrieved. Packaging.');

                    for (let i = 0; i < bundle.entry.length; i++) {
                        const resourceType = bundle.entry[i].resource.resourceType;
                        const id = bundle.entry[i].resource.id;
                        const resourceDir = path.join(resourcesDir, resourceType.toLowerCase());
                        let resourcePath;

                        let resourceContent = null;

                        // ImplementationGuide must be generated as an xml file for the IG Publisher in STU3.
                        if (!isXml && resourceType !== 'ImplementationGuide') {
                            resourceContent = JSON.stringify(bundle.entry[i].resource, null, '\t');
                            resourcePath = path.join(resourceDir, id + '.json');
                        } else {
                            resourceContent = this._fhir.objToXml(bundle.entry[i].resource);
                            resourcePath = path.join(resourceDir, id + '.xml');
                        }

                        if (resourceType == 'ImplementationGuide' && id === this._implementationGuideId) {
                            implementationGuideResource = bundle.entry[i].resource;
                        }

                        fs.ensureDirSync(resourceDir);
                        fs.writeFileSync(resourcePath, resourceContent);
                    }

                    if (!implementationGuideResource) {
                        throw new Error('The implementation guide was not found in the bundle returned by the server');
                    }

                    if (implementationGuideResource.page) {
                        const pagesPath = path.join(rootPath, '_pages');
                        fs.ensureDirSync(pagesPath);

                        this._packagePage(pagesPath, implementationGuideResource, implementationGuideResource.page);
                    }

                    control = this._getControl(extension, implementationGuideResource, bundle, this._getFhirControlVersion(fhirServerConfig));

                    return this._getDependencies(control, isXml, resourcesDir, this._fhir, fhirServerConfig);
                })
                .then(() => {
                    // Copy the contents of the ig-publisher-template folder to the export temporary folder
                    const templatePath = path.join(__dirname, '..', 'ig-publisher-template');
                    fs.copySync(templatePath, rootPath);

                    // Write the ig.json file to the export temporary folder
                    const controlContent = JSON.stringify(control, null, '\t');
                    fs.writeFileSync(controlPath, controlContent);

                    // Write the intro, summary and search MD files for each resource
                    _.each(bundle.entry, (entry) => this._writeFilesForResource(rootPath, entry.resource));

                    this._updateTemplates(rootPath, bundle, implementationGuideResource);

                    this._sendSocketMessage(packageId, 'progress', 'Done building package');

                    return this._getIgPublisher(packageId, useLatest, executeIgPublisher);
                })
                .then((igPublisherLocation) => {
                    if (!executeIgPublisher || !igPublisherLocation) {
                        this._sendSocketMessage(packageId, 'complete', 'Done. You will be prompted to download the package in a moment.');

                        if (testCallback) {
                            testCallback(rootPath);
                        }

                        return;
                    }

                    const deployDir = path.resolve(__dirname, '../wwwroot/igs', implementationGuideResource.id);
                    fs.ensureDirSync(deployDir);

                    const igPublisherVersion = useLatest ? 'latest' : 'default';
                    const process = serverConfig.javaLocation || 'java';
                    const jarParams = ['-jar', igPublisherLocation, '-ig', controlPath];

                    if (!useTerminologyServer) {
                        jarParams.push('-tx', 'N/A');
                    }

                    this._sendSocketMessage(packageId, 'progress', `Running ${igPublisherVersion} IG Publisher: ${jarParams.join(' ')}`);

                    log.debug(`Spawning FHIR IG Publisher Java process at ${process} with params ${jarParams}`);

                    const igPublisherProcess = spawn(process, jarParams);

                    igPublisherProcess.stdout.on('data', (data) => {
                        const message = data.toString().replace(tmp.tmpdir, 'XXX').replace(homedir, 'XXX');

                        if (message && message.trim().replace(/\./g, '') !== '') {
                            this._sendSocketMessage(packageId, 'progress', message);
                        }
                    });

                    igPublisherProcess.stderr.on('data', (data) => {
                        const message = data.toString().replace(tmp.tmpdir, 'XXX').replace(homedir, 'XXX');

                        if (message && message.trim().replace(/\./g, '') !== '') {
                            this._sendSocketMessage(packageId, 'progress', message);
                        }
                    });

                    igPublisherProcess.on('error', (err) => {
                        const message = 'Error executing FHIR IG Publisher: ' + err;
                        log.error(message);
                        this._sendSocketMessage(packageId, 'error', message);
                    });

                    igPublisherProcess.on('exit', (code) => {
                        log.debug(`IG Publisher is done executing for ${rootPath}`);

                        this._sendSocketMessage(packageId, 'progress', 'IG Publisher finished with code ' + code);

                        if (code !== 0) {
                            this._sendSocketMessage(packageId, 'progress', 'Won\'t copy output to deployment path.');
                            this._sendSocketMessage(packageId, 'complete', 'Done. You will be prompted to download the package in a moment.');
                        } else {
                            this._sendSocketMessage(packageId, 'progress', 'Copying output to deployment path.');

                            const generatedPath = path.resolve(rootPath, 'generated_output');
                            const outputPath = path.resolve(rootPath, 'output');

                            log.debug(`Deleting content generated by ig publisher in ${generatedPath}`);

                            fs.emptyDirSync(generatedPath);

                            log.debug(`Copying output from ${outputPath} to ${deployDir}`);

                            fs.copy(outputPath, deployDir, (err) => {
                                if (err) {
                                    log.error(err);
                                    this._sendSocketMessage(packageId, 'error', 'Error copying contents to deployment path.');
                                } else {
                                    const finalMessage = 'Done executing the FHIR IG Publisher.' + (downloadOutput ? ' You will be prompted to download the package in a moment.' : '');
                                    this._sendSocketMessage(packageId, 'complete', finalMessage);
                                }

                                if (!downloadOutput) {
                                    log.debug(`User indicated they don't need to download. Removing temporary directory ${rootPath}`);
                                    fs.emptyDirSync(rootPath);
                                    log.debug(`Done removing temporary directory ${rootPath}`);
                                }
                            });
                        }
                    });
                })
                .catch((err) => {
                    log.error(err);
                    this._sendSocketMessage(packageId, 'error', 'Error during export: ' + err);

                    if (testCallback) {
                        testCallback(rootPath, err);
                    }
                });
        }, 1000);
    });

    return deferred.promise;
};

module.exports = HtmlExporter;
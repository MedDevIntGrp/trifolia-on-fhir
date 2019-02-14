"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const FhirHelper = require("../fhirHelper.js");
const authHelper_js_1 = require("../authHelper.js");
const rp = require("request-promise");
const nanoid = require("nanoid");
const controller_1 = require("./controller");
class FhirLogic extends controller_1.BaseController {
    static initRoutes(resourceType, preRouter) {
        const router = preRouter || express.Router();
        router.get('/', authHelper_js_1.checkJwt, (req, res) => {
            FhirLogic.log.trace(`Searching for resource ${resourceType}`);
            const fhirLogic = new this(resourceType, req.fhirServerBase);
            fhirLogic.search(req.query)
                .then((results) => res.send(results))
                .catch((err) => FhirLogic.handleError(err, null, res));
        });
        router.get('/:id', authHelper_js_1.checkJwt, (req, res) => {
            FhirLogic.log.trace(`Retrieving resource ${resourceType}/${req.params.id}`);
            const fhirLogic = new this(resourceType, req.fhirServerBase);
            fhirLogic.get(req.params.id, req.query)
                .then((results) => res.send(results))
                .catch((err) => FhirLogic.handleError(err, null, res));
        });
        router.post('/', authHelper_js_1.checkJwt, (req, res) => {
            FhirLogic.log.trace(`Creating resource ${resourceType}`);
            const fhirLogic = new this(resourceType, req.fhirServerBase);
            fhirLogic.create(req.body, req.query)
                .then((results) => res.send(results))
                .catch((err) => FhirLogic.handleError(err, null, res));
        });
        router.put('/:id', authHelper_js_1.checkJwt, (req, res) => {
            FhirLogic.log.trace(`Updating resource ${resourceType}/${req.params.id}`);
            const fhirLogic = new this(resourceType, req.fhirServerBase);
            fhirLogic.update(req.params.id, req.body, req.query)
                .then((results) => res.send(results))
                .catch((err) => FhirLogic.handleError(err, null, res));
        });
        router.delete('/:id', authHelper_js_1.checkJwt, (req, res) => {
            FhirLogic.log.trace(`Deleting resource ${resourceType}/${req.params.id}`);
            const fhirLogic = new this(resourceType, req.fhirServerBase);
            fhirLogic.delete(req.params.id, req.query)
                .then((results) => res.send(results))
                .catch((err) => FhirLogic.handleError(err, null, res));
        });
        // Note: Express.JS treats paths as a regular express. The dollar sign $ in the route must be treated specially because of this.
        router.post('/:id/([\$])change-id', authHelper_js_1.checkJwt, (req, res) => {
            FhirLogic.log.trace(`Changing id of resource ${resourceType}/${req.params.id} to ${req.query.newId}`);
            const fhirLogic = new this(resourceType, req.fhirServerBase);
            fhirLogic.changeId(req.params.id, req.query.newId)
                .then((results) => res.send(results))
                .catch((err) => FhirLogic.handleError(err, null, res));
        });
        return router;
    }
    constructor(resourceType, baseUrl) {
        super();
        this.resourceType = resourceType;
        this.baseUrl = baseUrl;
    }
    search(query) {
        query = query || {};
        query['_summary'] = true;
        query['_count'] = 10;
        if (query.name) {
            query['name:contains'] = query.name;
            delete query.name;
        }
        if (query.page) {
            if (parseInt(query.page) !== 1) {
                query._getpagesoffset = (parseInt(query.page) - 1) * 10;
            }
            delete query.page;
        }
        const url = FhirHelper.buildUrl(this.baseUrl, this.resourceType, null, null, query);
        const options = {
            url: url,
            method: 'GET',
            json: true,
            headers: {
                'Cache-Control': 'no-cache'
            }
        };
        return rp(options);
    }
    get(id, query) {
        const url = FhirHelper.buildUrl(this.baseUrl, this.resourceType, id, null, query);
        const options = {
            url: url,
            method: 'GET',
            json: true,
            headers: {
                'Cache-Control': 'no-cache'
            }
        };
        return rp(options);
    }
    create(data, query) {
        if (!data.id) {
            data.id = nanoid(8);
        }
        return new Promise((resolve, reject) => {
            const existsOptions = {
                url: FhirHelper.buildUrl(this.baseUrl, this.resourceType, data.id, null, { _summary: true }),
                method: 'GET',
                json: true
            };
            // Make sure the resource doesn't already exist with the same id
            rp(existsOptions)
                .then(() => {
                FhirLogic.log.error(`Attempted to create a ${this.resourceType} with an id of ${data.id} when it already exists`);
                reject(`A ${this.resourceType} already exists with the id ${data.id}`);
            })
                .catch((existsErr) => {
                if (existsErr.statusCode !== 404) {
                    const msg = `An unexpected error code ${existsErr.statusCode} was returned when checking if a ${this.resourceType} already exists with the id ${data.id}`;
                    FhirLogic.log.error(msg);
                    return reject(msg);
                }
                const url = FhirHelper.buildUrl(this.baseUrl, this.resourceType, data.id);
                const createOptions = {
                    url: url,
                    method: 'PUT',
                    json: true,
                    body: data,
                    resolveWithFullResponse: true
                };
                // Create the resource
                rp(createOptions)
                    .then((results) => {
                    const location = results.headers.location || results.headers['content-location'];
                    if (location) {
                        const getOptions = {
                            url: location,
                            method: 'GET',
                            json: true
                        };
                        // Get the saved version of the resource (with a unique id)
                        return rp(getOptions);
                    }
                    else {
                        throw new Error(`FHIR server did not respond with a location to the newly created ${this.resourceType}`);
                    }
                })
                    .then((newImplementationGuide) => resolve(newImplementationGuide))
                    .catch((err) => reject(err));
            });
        });
    }
    update(id, data, query) {
        const url = FhirHelper.buildUrl(this.baseUrl, this.resourceType, id, null, query);
        const options = {
            url: url,
            method: 'PUT',
            json: true,
            body: data
        };
        return rp(options);
    }
    delete(id, query) {
        const url = FhirHelper.buildUrl(this.baseUrl, this.resourceType, id, null, query);
        const options = {
            url: url,
            method: 'DELETE',
            json: true
        };
        return rp(options);
    }
    changeId(currentId, newId) {
        return new Promise((resolve, reject) => {
            if (!newId) {
                return reject({ statusCode: 400, message: 'You must specify a "newId" to change the id of the resource' });
            }
            const currentOptions = {
                url: FhirHelper.buildUrl(this.baseUrl, this.resourceType, currentId),
                method: 'GET',
                json: true
            };
            FhirLogic.log.trace(`Request to change id for resource ${this.resourceType}/${currentId} to ${newId}`);
            // Get the current state of the resource
            rp(currentOptions)
                .then((resource) => {
                if (!resource || !resource.id) {
                    throw new Error(`No resource found for ${this.resourceType} with id ${currentId}`);
                }
                // Change the id of the resource
                resource.id = newId;
                const createOptions = {
                    url: FhirHelper.buildUrl(this.baseUrl, this.resourceType, newId),
                    method: 'PUT',
                    json: true,
                    body: resource
                };
                FhirLogic.log.trace('Sending PUT request to FHIR server with the new resource ID');
                // Create the new resource with the new id
                return rp(createOptions);
            })
                .then(() => {
                const deleteOptions = {
                    url: FhirHelper.buildUrl(this.baseUrl, this.resourceType, currentId),
                    method: 'DELETE',
                    json: true
                };
                FhirLogic.log.trace('Sending DELETE request to FHIR server for original resource');
                // Delete the original resource with the original id
                return rp(deleteOptions);
            })
                .then(() => {
                FhirLogic.log.trace(`Successfully changed the id of ${this.resourceType}/${currentId} to ${this.resourceType}/${newId}`);
                resolve(`Successfully changed the id of ${this.resourceType}/${currentId} to ${this.resourceType}/${newId}`);
            })
                .catch((err) => reject(err));
        });
    }
}
exports.FhirLogic = FhirLogic;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmhpckxvZ2ljLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmhpckxvZ2ljLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQW1DO0FBQ25DLCtDQUErQztBQUMvQyxvREFBMEM7QUFDMUMsc0NBQXNDO0FBR3RDLGlDQUFpQztBQUNqQyw2Q0FBNEM7QUFFNUMsZUFBdUIsU0FBUSwyQkFBYztJQUlsQyxNQUFNLENBQUMsVUFBVSxDQUE4RSxZQUFvQixFQUFFLFNBQWU7UUFDdkksTUFBTSxNQUFNLEdBQUcsU0FBUyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUU3QyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBbUIsd0JBQVEsRUFBRSxDQUFDLEdBQW9CLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDckUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLFlBQVksRUFBRSxDQUFDLENBQUM7WUFFOUQsTUFBTSxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUM3RCxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7aUJBQ3RCLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDcEMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMvRCxDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFtQix3QkFBUSxFQUFFLENBQUMsR0FBb0IsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUN4RSxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsWUFBWSxJQUFJLEdBQUcsQ0FB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Q0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLFNBQVMsQ0FBQztvQkFDcEUsTUFBTSxFQUFFLFFBQVE7b0JBQ2hCLElBQUksRUFBRSxJQUFJO2lCQUNiLENBQUM7Z0JBRUYsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsNkRBQTZELENBQUMsQ0FBQztnQkFFbkYsb0RBQW9EO2dCQUNwRCxPQUFPLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUM3QixDQUFDLENBQUM7aUJBQ0QsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDUCxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxrQ0FBa0MsSUFBSSxDQUFDLFlBQVksSUFBSSxTQUFTLE9BQU8sSUFBSSxDQUFDLFlBQVksSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2dCQUN6SCxPQUFPLENBQUMsa0NBQWtDLElBQUksQ0FBQyxZQUFZLElBQUksU0FBUyxPQUFPLElBQUksQ0FBQyxZQUFZLElBQUksS0FBSyxFQUFFLENBQUMsQ0FBQztZQUNqSCxDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjtBQXpQRCw4QkF5UEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0ICogYXMgRmhpckhlbHBlciBmcm9tICcuLi9maGlySGVscGVyLmpzJztcbmltcG9ydCB7Y2hlY2tKd3R9IGZyb20gJy4uL2F1dGhIZWxwZXIuanMnO1xuaW1wb3J0ICogYXMgcnAgZnJvbSAncmVxdWVzdC1wcm9taXNlJztcbmltcG9ydCB7RXh0ZW5kZWRSZXF1ZXN0LCBSZXN0UmVqZWN0aW9ufSBmcm9tICcuL21vZGVscyc7XG5pbXBvcnQge1JlcXVlc3RIYW5kbGVyfSBmcm9tICdleHByZXNzJztcbmltcG9ydCAqIGFzIG5hbm9pZCBmcm9tICduYW5vaWQnO1xuaW1wb3J0IHtCYXNlQ29udHJvbGxlcn0gZnJvbSAnLi9jb250cm9sbGVyJztcblxuZXhwb3J0IGNsYXNzIEZoaXJMb2dpYyBleHRlbmRzIEJhc2VDb250cm9sbGVyIHtcbiAgICByZWFkb25seSByZXNvdXJjZVR5cGU6IHN0cmluZztcbiAgICByZWFkb25seSBiYXNlVXJsOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgc3RhdGljIGluaXRSb3V0ZXM8VCBleHRlbmRzIEZoaXJMb2dpYz4odGhpczogbmV3IChyZXNvdXJjZVR5cGU6IHN0cmluZywgYmFzZVVybDogc3RyaW5nKSA9PiBULCByZXNvdXJjZVR5cGU6IHN0cmluZywgcHJlUm91dGVyPzogYW55KSB7XG4gICAgICAgIGNvbnN0IHJvdXRlciA9IHByZVJvdXRlciB8fCBleHByZXNzLlJvdXRlcigpO1xuXG4gICAgICAgIHJvdXRlci5nZXQoJy8nLCA8UmVxdWVzdEhhbmRsZXI+IGNoZWNrSnd0LCAocmVxOiBFeHRlbmRlZFJlcXVlc3QsIHJlcykgPT4ge1xuICAgICAgICAgICAgRmhpckxvZ2ljLmxvZy50cmFjZShgU2VhcmNoaW5nIGZvciByZXNvdXJjZSAke3Jlc291cmNlVHlwZX1gKTtcblxuICAgICAgICAgICAgY29uc3QgZmhpckxvZ2ljID0gbmV3IHRoaXMocmVzb3VyY2VUeXBlLCByZXEuZmhpclNlcnZlckJhc2UpO1xuICAgICAgICAgICAgZmhpckxvZ2ljLnNlYXJjaChyZXEucXVlcnkpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdHMpID0+IHJlcy5zZW5kKHJlc3VsdHMpKVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBGaGlyTG9naWMuaGFuZGxlRXJyb3IoZXJyLCBudWxsLCByZXMpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcm91dGVyLmdldCgnLzppZCcsIDxSZXF1ZXN0SGFuZGxlcj4gY2hlY2tKd3QsIChyZXE6IEV4dGVuZGVkUmVxdWVzdCwgcmVzKSA9PiB7XG4gICAgICAgICAgICBGaGlyTG9naWMubG9nLnRyYWNlKGBSZXRyaWV2aW5nIHJlc291cmNlICR7cmVzb3VyY2VUeXBlfS8ke3JlcS5wYXJhbXMuaWR9YCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGZoaXJMb2dpYyA9IG5ldyB0aGlzKHJlc291cmNlVHlwZSwgcmVxLmZoaXJTZXJ2ZXJCYXNlKTtcbiAgICAgICAgICAgIGZoaXJMb2dpYy5nZXQocmVxLnBhcmFtcy5pZCwgcmVxLnF1ZXJ5KVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHRzKSA9PiByZXMuc2VuZChyZXN1bHRzKSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gRmhpckxvZ2ljLmhhbmRsZUVycm9yKGVyciwgbnVsbCwgcmVzKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJvdXRlci5wb3N0KCcvJywgPFJlcXVlc3RIYW5kbGVyPiBjaGVja0p3dCwgKHJlcTogRXh0ZW5kZWRSZXF1ZXN0LCByZXMpID0+IHtcbiAgICAgICAgICAgIEZoaXJMb2dpYy5sb2cudHJhY2UoYENyZWF0aW5nIHJlc291cmNlICR7cmVzb3VyY2VUeXBlfWApO1xuXG4gICAgICAgICAgICBjb25zdCBmaGlyTG9naWMgPSBuZXcgdGhpcyhyZXNvdXJjZVR5cGUsIHJlcS5maGlyU2VydmVyQmFzZSk7XG4gICAgICAgICAgICBmaGlyTG9naWMuY3JlYXRlKHJlcS5ib2R5LCByZXEucXVlcnkpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdHMpID0+IHJlcy5zZW5kKHJlc3VsdHMpKVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBGaGlyTG9naWMuaGFuZGxlRXJyb3IoZXJyLCBudWxsLCByZXMpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcm91dGVyLnB1dCgnLzppZCcsIDxSZXF1ZXN0SGFuZGxlcj4gY2hlY2tKd3QsIChyZXE6IEV4dGVuZGVkUmVxdWVzdCwgcmVzKSA9PiB7XG4gICAgICAgICAgICBGaGlyTG9naWMubG9nLnRyYWNlKGBVcGRhdGluZyByZXNvdXJjZSAke3Jlc291cmNlVHlwZX0vJHtyZXEucGFyYW1zLmlkfWApO1xuXG4gICAgICAgICAgICBjb25zdCBmaGlyTG9naWMgPSBuZXcgdGhpcyhyZXNvdXJjZVR5cGUsIHJlcS5maGlyU2VydmVyQmFzZSk7XG4gICAgICAgICAgICBmaGlyTG9naWMudXBkYXRlKHJlcS5wYXJhbXMuaWQsIHJlcS5ib2R5LCByZXEucXVlcnkpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdHMpID0+IHJlcy5zZW5kKHJlc3VsdHMpKVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBGaGlyTG9naWMuaGFuZGxlRXJyb3IoZXJyLCBudWxsLCByZXMpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcm91dGVyLmRlbGV0ZSgnLzppZCcsIDxSZXF1ZXN0SGFuZGxlcj4gY2hlY2tKd3QsIChyZXE6IEV4dGVuZGVkUmVxdWVzdCwgcmVzKSA9PiB7XG4gICAgICAgICAgICBGaGlyTG9naWMubG9nLnRyYWNlKGBEZWxldGluZyByZXNvdXJjZSAke3Jlc291cmNlVHlwZX0vJHtyZXEucGFyYW1zLmlkfWApO1xuXG4gICAgICAgICAgICBjb25zdCBmaGlyTG9naWMgPSBuZXcgdGhpcyhyZXNvdXJjZVR5cGUsIHJlcS5maGlyU2VydmVyQmFzZSk7XG4gICAgICAgICAgICBmaGlyTG9naWMuZGVsZXRlKHJlcS5wYXJhbXMuaWQsIHJlcS5xdWVyeSlcbiAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0cykgPT4gcmVzLnNlbmQocmVzdWx0cykpXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IEZoaXJMb2dpYy5oYW5kbGVFcnJvcihlcnIsIG51bGwsIHJlcykpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBOb3RlOiBFeHByZXNzLkpTIHRyZWF0cyBwYXRocyBhcyBhIHJlZ3VsYXIgZXhwcmVzcy4gVGhlIGRvbGxhciBzaWduICQgaW4gdGhlIHJvdXRlIG11c3QgYmUgdHJlYXRlZCBzcGVjaWFsbHkgYmVjYXVzZSBvZiB0aGlzLlxuICAgICAgICByb3V0ZXIucG9zdCgnLzppZC8oW1xcJF0pY2hhbmdlLWlkJywgPFJlcXVlc3RIYW5kbGVyPiBjaGVja0p3dCwgKHJlcTogRXh0ZW5kZWRSZXF1ZXN0LCByZXMpID0+IHtcbiAgICAgICAgICAgIEZoaXJMb2dpYy5sb2cudHJhY2UoYENoYW5naW5nIGlkIG9mIHJlc291cmNlICR7cmVzb3VyY2VUeXBlfS8ke3JlcS5wYXJhbXMuaWR9IHRvICR7cmVxLnF1ZXJ5Lm5ld0lkfWApO1xuXG4gICAgICAgICAgICBjb25zdCBmaGlyTG9naWMgPSBuZXcgdGhpcyhyZXNvdXJjZVR5cGUsIHJlcS5maGlyU2VydmVyQmFzZSk7XG4gICAgICAgICAgICBmaGlyTG9naWMuY2hhbmdlSWQocmVxLnBhcmFtcy5pZCwgcmVxLnF1ZXJ5Lm5ld0lkKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHRzKSA9PiByZXMuc2VuZChyZXN1bHRzKSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gRmhpckxvZ2ljLmhhbmRsZUVycm9yKGVyciwgbnVsbCwgcmVzKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByb3V0ZXI7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocmVzb3VyY2VUeXBlOiBzdHJpbmcsIGJhc2VVcmw6IHN0cmluZykge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMucmVzb3VyY2VUeXBlID0gcmVzb3VyY2VUeXBlO1xuICAgICAgICB0aGlzLmJhc2VVcmwgPSBiYXNlVXJsO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZWFyY2gocXVlcnk/OiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBxdWVyeSA9IHF1ZXJ5IHx8IHt9O1xuICAgICAgICBxdWVyeVsnX3N1bW1hcnknXSA9IHRydWU7XG4gICAgICAgIHF1ZXJ5WydfY291bnQnXSA9IDEwO1xuXG4gICAgICAgIGlmIChxdWVyeS5uYW1lKSB7XG4gICAgICAgICAgICBxdWVyeVsnbmFtZTpjb250YWlucyddID0gcXVlcnkubmFtZTtcbiAgICAgICAgICAgIGRlbGV0ZSBxdWVyeS5uYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHF1ZXJ5LnBhZ2UpIHtcbiAgICAgICAgICAgIGlmIChwYXJzZUludChxdWVyeS5wYWdlKSAhPT0gMSkge1xuICAgICAgICAgICAgICAgIHF1ZXJ5Ll9nZXRwYWdlc29mZnNldCA9IChwYXJzZUludChxdWVyeS5wYWdlKSAtIDEpICogMTA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlbGV0ZSBxdWVyeS5wYWdlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXJsID0gRmhpckhlbHBlci5idWlsZFVybCh0aGlzLmJhc2VVcmwsIHRoaXMucmVzb3VyY2VUeXBlLCBudWxsLCBudWxsLCBxdWVyeSk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDYWNoZS1Db250cm9sJzogJ25vLWNhY2hlJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcnAob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldChpZDogc3RyaW5nLCBxdWVyeT86IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IHVybCA9IEZoaXJIZWxwZXIuYnVpbGRVcmwodGhpcy5iYXNlVXJsLCB0aGlzLnJlc291cmNlVHlwZSwgaWQsIG51bGwsIHF1ZXJ5KTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIGpzb246IHRydWUsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NhY2hlLUNvbnRyb2wnOiAnbm8tY2FjaGUnXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBycChvcHRpb25zKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlKGRhdGE6IGFueSwgcXVlcnk/OiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBpZiAoIWRhdGEuaWQpIHtcbiAgICAgICAgICAgIGRhdGEuaWQgPSBuYW5vaWQoOCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZXhpc3RzT3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICB1cmw6IEZoaXJIZWxwZXIuYnVpbGRVcmwodGhpcy5iYXNlVXJsLCB0aGlzLnJlc291cmNlVHlwZSwgZGF0YS5pZCwgbnVsbCwgeyBfc3VtbWFyeTogdHJ1ZSB9KSxcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgIGpzb246IHRydWVcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgcmVzb3VyY2UgZG9lc24ndCBhbHJlYWR5IGV4aXN0IHdpdGggdGhlIHNhbWUgaWRcbiAgICAgICAgICAgIHJwKGV4aXN0c09wdGlvbnMpXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBGaGlyTG9naWMubG9nLmVycm9yKGBBdHRlbXB0ZWQgdG8gY3JlYXRlIGEgJHt0aGlzLnJlc291cmNlVHlwZX0gd2l0aCBhbiBpZCBvZiAke2RhdGEuaWR9IHdoZW4gaXQgYWxyZWFkeSBleGlzdHNgKTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGBBICR7dGhpcy5yZXNvdXJjZVR5cGV9IGFscmVhZHkgZXhpc3RzIHdpdGggdGhlIGlkICR7ZGF0YS5pZH1gKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXhpc3RzRXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChleGlzdHNFcnIuc3RhdHVzQ29kZSAhPT0gNDA0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtc2cgPSBgQW4gdW5leHBlY3RlZCBlcnJvciBjb2RlICR7ZXhpc3RzRXJyLnN0YXR1c0NvZGV9IHdhcyByZXR1cm5lZCB3aGVuIGNoZWNraW5nIGlmIGEgJHt0aGlzLnJlc291cmNlVHlwZX0gYWxyZWFkeSBleGlzdHMgd2l0aCB0aGUgaWQgJHtkYXRhLmlkfWA7XG4gICAgICAgICAgICAgICAgICAgICAgICBGaGlyTG9naWMubG9nLmVycm9yKG1zZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KG1zZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBGaGlySGVscGVyLmJ1aWxkVXJsKHRoaXMuYmFzZVVybCwgdGhpcy5yZXNvdXJjZVR5cGUsIGRhdGEuaWQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjcmVhdGVPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICAgICAgICAgICAgICAgICAganNvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6IGRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlV2l0aEZ1bGxSZXNwb25zZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgcmVzb3VyY2VcbiAgICAgICAgICAgICAgICAgICAgcnAoY3JlYXRlT3B0aW9ucylcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbG9jYXRpb24gPSByZXN1bHRzLmhlYWRlcnMubG9jYXRpb24gfHwgcmVzdWx0cy5oZWFkZXJzWydjb250ZW50LWxvY2F0aW9uJ107XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2V0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogbG9jYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganNvbjogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgc2F2ZWQgdmVyc2lvbiBvZiB0aGUgcmVzb3VyY2UgKHdpdGggYSB1bmlxdWUgaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBycChnZXRPcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZISVIgc2VydmVyIGRpZCBub3QgcmVzcG9uZCB3aXRoIGEgbG9jYXRpb24gdG8gdGhlIG5ld2x5IGNyZWF0ZWQgJHt0aGlzLnJlc291cmNlVHlwZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKG5ld0ltcGxlbWVudGF0aW9uR3VpZGUpID0+IHJlc29sdmUobmV3SW1wbGVtZW50YXRpb25HdWlkZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gcmVqZWN0KGVycikpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKGlkOiBzdHJpbmcsIGRhdGE6IGFueSwgcXVlcnk/OiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCB1cmwgPSBGaGlySGVscGVyLmJ1aWxkVXJsKHRoaXMuYmFzZVVybCwgdGhpcy5yZXNvdXJjZVR5cGUsIGlkLCBudWxsLCBxdWVyeSk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxuICAgICAgICAgICAgYm9keTogZGF0YVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcnAob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlbGV0ZShpZDogc3RyaW5nLCBxdWVyeT86IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IHVybCA9IEZoaXJIZWxwZXIuYnVpbGRVcmwodGhpcy5iYXNlVXJsLCB0aGlzLnJlc291cmNlVHlwZSwgaWQsIG51bGwsIHF1ZXJ5KTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgICAgIGpzb246IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHJwKG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjaGFuZ2VJZChjdXJyZW50SWQ6IHN0cmluZywgbmV3SWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoIW5ld0lkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdCg8UmVzdFJlamVjdGlvbj4geyBzdGF0dXNDb2RlOiA0MDAsIG1lc3NhZ2U6ICdZb3UgbXVzdCBzcGVjaWZ5IGEgXCJuZXdJZFwiIHRvIGNoYW5nZSB0aGUgaWQgb2YgdGhlIHJlc291cmNlJyB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgY3VycmVudE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgdXJsOiBGaGlySGVscGVyLmJ1aWxkVXJsKHRoaXMuYmFzZVVybCwgdGhpcy5yZXNvdXJjZVR5cGUsIGN1cnJlbnRJZCksXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgICAgICBqc29uOiB0cnVlXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBGaGlyTG9naWMubG9nLnRyYWNlKGBSZXF1ZXN0IHRvIGNoYW5nZSBpZCBmb3IgcmVzb3VyY2UgJHt0aGlzLnJlc291cmNlVHlwZX0vJHtjdXJyZW50SWR9IHRvICR7bmV3SWR9YCk7XG5cbiAgICAgICAgICAgIC8vIEdldCB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgcmVzb3VyY2VcbiAgICAgICAgICAgIHJwKGN1cnJlbnRPcHRpb25zKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNvdXJjZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc291cmNlIHx8ICFyZXNvdXJjZS5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyByZXNvdXJjZSBmb3VuZCBmb3IgJHt0aGlzLnJlc291cmNlVHlwZX0gd2l0aCBpZCAke2N1cnJlbnRJZH1gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIENoYW5nZSB0aGUgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlLmlkID0gbmV3SWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3JlYXRlT3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogRmhpckhlbHBlci5idWlsZFVybCh0aGlzLmJhc2VVcmwsIHRoaXMucmVzb3VyY2VUeXBlLCBuZXdJZCksXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICAgICAgICAgICAgICAgICAganNvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6IHJlc291cmNlXG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgRmhpckxvZ2ljLmxvZy50cmFjZSgnU2VuZGluZyBQVVQgcmVxdWVzdCB0byBGSElSIHNlcnZlciB3aXRoIHRoZSBuZXcgcmVzb3VyY2UgSUQnKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgdGhlIG5ldyByZXNvdXJjZSB3aXRoIHRoZSBuZXcgaWRcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJwKGNyZWF0ZU9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWxldGVPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBGaGlySGVscGVyLmJ1aWxkVXJsKHRoaXMuYmFzZVVybCwgdGhpcy5yZXNvdXJjZVR5cGUsIGN1cnJlbnRJZCksXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICAgICAgICAgICAgICAgICAganNvbjogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIEZoaXJMb2dpYy5sb2cudHJhY2UoJ1NlbmRpbmcgREVMRVRFIHJlcXVlc3QgdG8gRkhJUiBzZXJ2ZXIgZm9yIG9yaWdpbmFsIHJlc291cmNlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gRGVsZXRlIHRoZSBvcmlnaW5hbCByZXNvdXJjZSB3aXRoIHRoZSBvcmlnaW5hbCBpZFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcnAoZGVsZXRlT3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIEZoaXJMb2dpYy5sb2cudHJhY2UoYFN1Y2Nlc3NmdWxseSBjaGFuZ2VkIHRoZSBpZCBvZiAke3RoaXMucmVzb3VyY2VUeXBlfS8ke2N1cnJlbnRJZH0gdG8gJHt0aGlzLnJlc291cmNlVHlwZX0vJHtuZXdJZH1gKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShgU3VjY2Vzc2Z1bGx5IGNoYW5nZWQgdGhlIGlkIG9mICR7dGhpcy5yZXNvdXJjZVR5cGV9LyR7Y3VycmVudElkfSB0byAke3RoaXMucmVzb3VyY2VUeXBlfS8ke25ld0lkfWApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHJlamVjdChlcnIpKTtcbiAgICAgICAgfSk7XG4gICAgfVxufSJdfQ==
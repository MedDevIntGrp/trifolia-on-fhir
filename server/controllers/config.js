"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = require("config");
const express = require("express");
const FhirHelper = require("../fhirHelper");
const rp = require("request-promise");
const _ = require("underscore");
const controller_1 = require("./controller");
const modulePackage = require("../../package.json");
const serverConfig = config.get('server');
const fhirConfig = config.get('fhir');
const authConfig = config.get('auth');
const githubConfig = config.get('github');
class ConfigController extends controller_1.BaseController {
    constructor(baseUrl) {
        super();
        this.baseUrl = baseUrl;
    }
    static initRoutes() {
        const router = express.Router();
        router.get('/', (req, res) => {
            const controller = new ConfigController(req.fhirServerBase);
            controller.getConfig()
                .then((results) => res.send(results))
                .catch((err) => ConfigController.handleError(err, null, res));
        });
        router.get('/fhir', (req, res) => {
            const controller = new ConfigController(req.fhirServerBase);
            controller.getFhirCapabilities()
                .then((results) => res.send(results))
                .catch((err) => ConfigController.handleError(err, null, res));
        });
        return router;
    }
    getConfig() {
        return new Promise((resolve, reject) => {
            const retConfig = {
                version: modulePackage.version,
                supportUrl: serverConfig.supportUrl,
                fhirServers: _.map(fhirConfig.servers, (server) => ({ id: server.id, name: server.name, short: server.short })),
                auth: {
                    clientId: authConfig.clientId,
                    scope: authConfig.scope,
                    domain: authConfig.domain
                },
                github: {
                    clientId: githubConfig.clientId
                }
            };
            resolve(retConfig);
        });
    }
    getFhirCapabilities() {
        if (ConfigController.serverMetadata[this.baseUrl]) {
            return Promise.resolve(ConfigController.serverMetadata[this.baseUrl]);
        }
        return new Promise((resolve, reject) => {
            const url = FhirHelper.buildUrl(this.baseUrl, 'metadata');
            const options = {
                url: url,
                method: 'GET',
                json: true
            };
            rp(options)
                .then((results) => {
                ConfigController.serverMetadata[this.baseUrl] = results;
                resolve(results);
            })
                .catch((err) => reject(err));
        });
    }
}
/**
 * For caching the metadata about the FHIR servers to respond more quickly
 */
ConfigController.serverMetadata = {};
exports.ConfigController = ConfigController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQWlDO0FBQ2pDLG1DQUFtQztBQUNuQyw0Q0FBNEM7QUFDNUMsc0NBQXNDO0FBQ3RDLGdDQUFnQztBQUVoQyw2Q0FBNEM7QUFFNUMsb0RBQW9EO0FBRXBELE1BQU0sWUFBWSxHQUFrQixNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3pELE1BQU0sVUFBVSxHQUFnQixNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ25ELE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdEMsTUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUUxQyxNQUFhLGdCQUFpQixTQUFRLDJCQUFjO0lBT2hELFlBQVksT0FBZTtRQUN2QixLQUFLLEVBQUUsQ0FBQztRQUVSLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7SUFFTSxNQUFNLENBQUMsVUFBVTtRQUNwQixNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFaEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBa0IsR0FBb0IsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUMzRCxNQUFNLFVBQVUsR0FBRyxJQUFJLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUM1RCxVQUFVLENBQUMsU0FBUyxFQUFFO2lCQUNqQixJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQ3BDLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxJ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YXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCAqIGFzIEZoaXJIZWxwZXIgZnJvbSAnLi4vZmhpckhlbHBlcic7XG5pbXBvcnQgKiBhcyBycCBmcm9tICdyZXF1ZXN0LXByb21pc2UnO1xuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcbmltcG9ydCB7RXh0ZW5kZWRSZXF1ZXN0LCBGaGlyLCBGaGlyQ29uZmlnLCBTZXJ2ZXJDb25maWd9IGZyb20gJy4vbW9kZWxzJztcbmltcG9ydCB7QmFzZUNvbnRyb2xsZXJ9IGZyb20gJy4vY29udHJvbGxlcic7XG5pbXBvcnQge1JlcXVlc3RIYW5kbGVyfSBmcm9tICdleHByZXNzJztcbmltcG9ydCAqIGFzIG1vZHVsZVBhY2thZ2UgZnJvbSAnLi4vLi4vcGFja2FnZS5qc29uJztcblxuY29uc3Qgc2VydmVyQ29uZmlnID0gPFNlcnZlckNvbmZpZz4gY29uZmlnLmdldCgnc2VydmVyJyk7XG5jb25zdCBmaGlyQ29uZmlnID0gPEZoaXJDb25maWc+IGNvbmZpZy5nZXQoJ2ZoaXInKTtcbmNvbnN0IGF1dGhDb25maWcgPSBjb25maWcuZ2V0KCdhdXRoJyk7XG5jb25zdCBnaXRodWJDb25maWcgPSBjb25maWcuZ2V0KCdnaXRodWInKTtcblxuZXhwb3J0IGNsYXNzIENvbmZpZ0NvbnRyb2xsZXIgZXh0ZW5kcyBCYXNlQ29udHJvbGxlciB7XG4gICAgLyoqXG4gICAgICogRm9yIGNhY2hpbmcgdGhlIG1ldGFkYXRhIGFib3V0IHRoZSBGSElSIHNlcnZlcnMgdG8gcmVzcG9uZCBtb3JlIHF1aWNrbHlcbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXRpYyBzZXJ2ZXJNZXRhZGF0YSA9IHt9O1xuICAgIHByaXZhdGUgYmFzZVVybDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoYmFzZVVybDogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5iYXNlVXJsID0gYmFzZVVybDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGluaXRSb3V0ZXMoKSB7XG4gICAgICAgIGNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbiAgICAgICAgcm91dGVyLmdldCgnLycsIDxSZXF1ZXN0SGFuZGxlcj4gKHJlcTogRXh0ZW5kZWRSZXF1ZXN0LCByZXMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQ29uZmlnQ29udHJvbGxlcihyZXEuZmhpclNlcnZlckJhc2UpO1xuICAgICAgICAgICAgY29udHJvbGxlci5nZXRDb25maWcoKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHRzKSA9PiByZXMuc2VuZChyZXN1bHRzKSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gQ29uZmlnQ29udHJvbGxlci5oYW5kbGVFcnJvcihlcnIsIG51bGwsIHJlcykpO1xuICAgICAgICB9KTtcblxuICAgICAgICByb3V0ZXIuZ2V0KCcvZmhpcicsIDxSZXF1ZXN0SGFuZGxlcj4gKHJlcTogRXh0ZW5kZWRSZXF1ZXN0LCByZXMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQ29uZmlnQ29udHJvbGxlcihyZXEuZmhpclNlcnZlckJhc2UpO1xuICAgICAgICAgICAgY29udHJvbGxlci5nZXRGaGlyQ2FwYWJpbGl0aWVzKClcbiAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0cykgPT4gcmVzLnNlbmQocmVzdWx0cykpXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IENvbmZpZ0NvbnRyb2xsZXIuaGFuZGxlRXJyb3IoZXJyLCBudWxsLCByZXMpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJvdXRlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q29uZmlnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmV0Q29uZmlnID0ge1xuICAgICAgICAgICAgICAgIHZlcnNpb246IG1vZHVsZVBhY2thZ2UudmVyc2lvbixcbiAgICAgICAgICAgICAgICBzdXBwb3J0VXJsOiBzZXJ2ZXJDb25maWcuc3VwcG9ydFVybCxcbiAgICAgICAgICAgICAgICBmaGlyU2VydmVyczogXy5tYXAoZmhpckNvbmZpZy5zZXJ2ZXJzLCAoc2VydmVyKSA9PiAoeyBpZDogc2VydmVyLmlkLCBuYW1lOiBzZXJ2ZXIubmFtZSwgc2hvcnQ6IHNlcnZlci5zaG9ydCB9KSksXG4gICAgICAgICAgICAgICAgYXV0aDoge1xuICAgICAgICAgICAgICAgICAgICBjbGllbnRJZDogYXV0aENvbmZpZy5jbGllbnRJZCxcbiAgICAgICAgICAgICAgICAgICAgc2NvcGU6IGF1dGhDb25maWcuc2NvcGUsXG4gICAgICAgICAgICAgICAgICAgIGRvbWFpbjogYXV0aENvbmZpZy5kb21haW5cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGdpdGh1Yjoge1xuICAgICAgICAgICAgICAgICAgICBjbGllbnRJZDogZ2l0aHViQ29uZmlnLmNsaWVudElkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmVzb2x2ZShyZXRDb25maWcpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RmhpckNhcGFiaWxpdGllcygpOiBQcm9taXNlPEZoaXIuQ2FwYWJpbGl0eVN0YXRlbWVudD4ge1xuICAgICAgICBpZiAoQ29uZmlnQ29udHJvbGxlci5zZXJ2ZXJNZXRhZGF0YVt0aGlzLmJhc2VVcmxdKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKENvbmZpZ0NvbnRyb2xsZXIuc2VydmVyTWV0YWRhdGFbdGhpcy5iYXNlVXJsXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdXJsID0gRmhpckhlbHBlci5idWlsZFVybCh0aGlzLmJhc2VVcmwsICdtZXRhZGF0YScpO1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgIGpzb246IHRydWVcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJwKG9wdGlvbnMpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgQ29uZmlnQ29udHJvbGxlci5zZXJ2ZXJNZXRhZGF0YVt0aGlzLmJhc2VVcmxdID0gcmVzdWx0cztcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHRzKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiByZWplY3QoZXJyKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iXX0=
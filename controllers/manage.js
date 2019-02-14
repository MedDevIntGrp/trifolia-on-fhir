"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const AuthHelper = require("../authHelper");
const _ = require("underscore");
class ManageController {
    static initRoutes() {
        const router = express.Router();
        router.get('/user/active', AuthHelper.checkJwt, (req, res) => {
            const controller = new ManageController();
            controller.getActiveUsers(req.ioConnections)
                .then((results) => res.send(results))
                .catch((err) => res.status(500).send(err));
        });
        return router;
    }
    getActiveUsers(ioConnections) {
        return new Promise((resolve) => {
            const connections = _.map(ioConnections, (connection) => {
                let name;
                if (connection.practitioner && connection.practitioner.name && connection.practitioner.name.length > 0) {
                    name = connection.practitioner.name[0].family;
                    if (connection.practitioner.name[0].given && connection.practitioner.name[0].given.length > 0) {
                        if (name) {
                            name += ', ';
                        }
                        name += connection.practitioner.name[0].given.join(' ');
                    }
                }
                return {
                    socketId: connection.id,
                    userId: connection.userProfile ? connection.userProfile.user_id : null,
                    email: connection.userProfile ? connection.userProfile.email : null,
                    practitionerReference: connection.practitioner ? `Practitioner/${connection.practitioner.id}` : null,
                    name: name
                };
            });
            resolve(connections);
        });
    }
}
exports.ManageController = ManageController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFuYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQW1DO0FBQ25DLDRDQUE0QztBQUU1QyxnQ0FBZ0M7QUFFaEM7SUFDVyxNQUFNLENBQUMsVUFBVTtRQUNwQixNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFaEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQW9CLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDMUUsTUFBTSxVQUFVLEdBQUcsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO1lBQzFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQztpQkFDdkMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUNwQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbkQsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRU0sY0FBYyxDQUFDLGFBQWE7UUFDL0IsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQzNCLE1BQU0sV0FBVyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUMsVUFBd0IsRUFBRSxFQUFFO2dCQUNsRSxJQUFJLElBQUksQ0FBQztnQkFFVCxJQUFJLFVBQVUsQ0FBQyxZQUFZLElBQUksVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLElBQUksVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDcEcsSUFBSSxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztvQkFFOUMsSUFBSSxVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7d0JBQzNGLElBQUksSUFBSSxFQUFFOzRCQUNOLElBQUksSUFBSSxJQUFJLENBQUM7eUJBQ2hCO3dCQUVELElBQUksSUFBSSxVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUMzRDtpQkFDSjtnQkFFRCxPQUFPO29CQUNILFFBQVEsRUFBRSxVQUFVLENBQUMsRUFBRTtvQkFDdkIsTUFBTSxFQUFFLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJO29CQUN0RSxLQUFLLEVBQUUsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUk7b0JBQ25FLHFCQUFxQixFQUFFLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixVQUFVLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJO29CQUNwRyxJQUFJLEVBQUUsSUFBSTtpQkFDYixDQUFDO1lBQ04sQ0FBQyxDQUFDLENBQUM7WUFFSCxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0o7QUEzQ0QsNENBMkNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuaW1wb3J0ICogYXMgQXV0aEhlbHBlciBmcm9tICcuLi9hdXRoSGVscGVyJztcclxuaW1wb3J0IHtFeHRlbmRlZFJlcXVlc3QsIElPQ29ubmVjdGlvbn0gZnJvbSAnLi9tb2RlbHMnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hbmFnZUNvbnRyb2xsZXIge1xyXG4gICAgcHVibGljIHN0YXRpYyBpbml0Um91dGVzKCkge1xyXG4gICAgICAgIGNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcblxyXG4gICAgICAgIHJvdXRlci5nZXQoJy91c2VyL2FjdGl2ZScsIEF1dGhIZWxwZXIuY2hlY2tKd3QsIChyZXE6IEV4dGVuZGVkUmVxdWVzdCwgcmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgTWFuYWdlQ29udHJvbGxlcigpO1xyXG4gICAgICAgICAgICBjb250cm9sbGVyLmdldEFjdGl2ZVVzZXJzKHJlcS5pb0Nvbm5lY3Rpb25zKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdHMpID0+IHJlcy5zZW5kKHJlc3VsdHMpKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHJlcy5zdGF0dXMoNTAwKS5zZW5kKGVycikpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcm91dGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRBY3RpdmVVc2Vycyhpb0Nvbm5lY3Rpb25zKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29ubmVjdGlvbnMgPSBfLm1hcChpb0Nvbm5lY3Rpb25zLCAoY29ubmVjdGlvbjogSU9Db25uZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY29ubmVjdGlvbi5wcmFjdGl0aW9uZXIgJiYgY29ubmVjdGlvbi5wcmFjdGl0aW9uZXIubmFtZSAmJiBjb25uZWN0aW9uLnByYWN0aXRpb25lci5uYW1lLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lID0gY29ubmVjdGlvbi5wcmFjdGl0aW9uZXIubmFtZVswXS5mYW1pbHk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25uZWN0aW9uLnByYWN0aXRpb25lci5uYW1lWzBdLmdpdmVuICYmIGNvbm5lY3Rpb24ucHJhY3RpdGlvbmVyLm5hbWVbMF0uZ2l2ZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSArPSAnLCAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lICs9IGNvbm5lY3Rpb24ucHJhY3RpdGlvbmVyLm5hbWVbMF0uZ2l2ZW4uam9pbignICcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNvY2tldElkOiBjb25uZWN0aW9uLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZDogY29ubmVjdGlvbi51c2VyUHJvZmlsZSA/IGNvbm5lY3Rpb24udXNlclByb2ZpbGUudXNlcl9pZCA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IGNvbm5lY3Rpb24udXNlclByb2ZpbGUgPyBjb25uZWN0aW9uLnVzZXJQcm9maWxlLmVtYWlsIDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBwcmFjdGl0aW9uZXJSZWZlcmVuY2U6IGNvbm5lY3Rpb24ucHJhY3RpdGlvbmVyID8gYFByYWN0aXRpb25lci8ke2Nvbm5lY3Rpb24ucHJhY3RpdGlvbmVyLmlkfWAgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmVzb2x2ZShjb25uZWN0aW9ucyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=
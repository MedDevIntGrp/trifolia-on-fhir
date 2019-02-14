"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FhirHelper = require("../fhirHelper");
const log4js = require("log4js");
class BaseController {
    static handleError(err, body, res, defaultMessage = 'An unknown error occurred') {
        const msg = FhirHelper.getErrorString(err, body, defaultMessage);
        this.log.error(msg);
        if (res) {
            res.status(500).send(msg);
        }
    }
}
BaseController.log = log4js.getLogger();
exports.BaseController = BaseController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw0Q0FBNEM7QUFDNUMsaUNBQWlDO0FBRWpDO0lBR2MsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsSUFBSyxFQUFFLEdBQUksRUFBRSxjQUFjLEdBQUcsMkJBQTJCO1FBQ3ZGLE1BQU0sR0FBRyxHQUFHLFVBQVUsQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxjQUFjLENBQUMsQ0FBQztRQUVqRSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVwQixJQUFJLEdBQUcsRUFBRTtZQUNMLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzdCO0lBQ0wsQ0FBQzs7QUFWZ0Isa0JBQUcsR0FBRyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7QUFEOUMsd0NBWUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBGaGlySGVscGVyIGZyb20gJy4uL2ZoaXJIZWxwZXInO1xyXG5pbXBvcnQgKiBhcyBsb2c0anMgZnJvbSAnbG9nNGpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlQ29udHJvbGxlciB7XHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGxvZyA9IGxvZzRqcy5nZXRMb2dnZXIoKTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGhhbmRsZUVycm9yKGVyciwgYm9keT8sIHJlcz8sIGRlZmF1bHRNZXNzYWdlID0gJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQnKSB7XHJcbiAgICAgICAgY29uc3QgbXNnID0gRmhpckhlbHBlci5nZXRFcnJvclN0cmluZyhlcnIsIGJvZHksIGRlZmF1bHRNZXNzYWdlKTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2cuZXJyb3IobXNnKTtcclxuXHJcbiAgICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuc2VuZChtc2cpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==
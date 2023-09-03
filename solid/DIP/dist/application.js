"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
var Application = /** @class */ (function () {
    function Application(serviceFactory) {
        this.serviceFactory = serviceFactory;
    }
    Application.prototype.start = function () {
        var service = this.serviceFactory.makeSvc();
        service.action();
    };
    return Application;
}());
exports.Application = Application;

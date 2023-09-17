"use strict";
exports.__esModule = true;
exports.Rectangle = void 0;
var Rectangle = /** @class */ (function () {
    function Rectangle() {
    }
    Rectangle.prototype.setWidth = function (width) {
        this.width = width;
    };
    Rectangle.prototype.setHeight = function (height) {
        this.height = height;
    };
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;

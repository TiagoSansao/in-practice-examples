"use strict";
exports.__esModule = true;
var square_1 = require("./square");
function test(rectangle) {
    rectangle.setHeight(3);
    rectangle.setWidth(4);
    var area = rectangle.area();
    console.log(area);
}
var rectangle = new square_1.Square();
test(rectangle);

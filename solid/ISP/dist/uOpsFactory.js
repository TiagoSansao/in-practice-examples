"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UOpsFactory = void 0;
var ops_1 = require("./ops");
var UOpsFactory = /** @class */ (function () {
    function UOpsFactory() {
    }
    UOpsFactory.create = function (uOpsEscolhido) {
        switch (uOpsEscolhido) {
            case 'U1Ops':
                return new ops_1.ops();
        }
        throw Error();
    };
    return UOpsFactory;
}());
exports.UOpsFactory = UOpsFactory;

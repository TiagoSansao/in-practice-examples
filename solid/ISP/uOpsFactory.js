"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UOpsFactory = void 0;
const ops_1 = require("./ops");
class UOpsFactory {
    static create(uOpsEscolhido) {
        switch (uOpsEscolhido) {
            case 'U1Ops':
                return new ops_1.ops();
        }
        throw Error();
    }
}
exports.UOpsFactory = UOpsFactory;

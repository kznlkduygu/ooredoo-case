"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLandlineNumber = void 0;
var validateLandlineNumber = function (number) {
    var landlineRegex = /^4\d{7}$/;
    return landlineRegex.test(number);
};
exports.validateLandlineNumber = validateLandlineNumber;

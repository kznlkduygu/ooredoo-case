"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateMobileNumber = void 0;
var validateMobileNumber = function (number) {
    var mobileNumberRegex = /^[3567]\d{7}$/;
    return mobileNumberRegex.test(number);
};
exports.validateMobileNumber = validateMobileNumber;

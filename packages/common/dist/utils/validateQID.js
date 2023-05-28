"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateQID = void 0;
var validateQID = function (kik) {
    var kikRegex = /^(2|3)\d{10}$/;
    return kikRegex.test(kik);
};
exports.validateQID = validateQID;

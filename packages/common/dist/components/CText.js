"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var colors_1 = require("../constans/colors");
var CText = function (props) {
    var text = props.text, fontSize = props.fontSize;
    return (react_1.default.createElement(react_native_1.Text, { style: { color: colors_1.Colors.primaryBlack, fontSize: fontSize || 12 } }, text));
};
exports.default = CText;

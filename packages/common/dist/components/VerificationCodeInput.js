"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var VerificationCodeInput = function (props) {
    var _a = (0, react_1.useState)(["", "", "", ""]), code = _a[0], setCode = _a[1];
    var inputRefs = (0, react_1.useRef)([]);
    var handleCodeChange = function (index, value) {
        var newCode = __spreadArray([], code, true);
        newCode[index] = value;
        setCode(newCode);
        if (value !== "" && index < 3) {
            inputRefs.current[index + 1].focus();
        }
    };
    var handleCodeKeyPress = function (index, key) {
        if (key === "Backspace" && index > 0 && code[index] === "") {
            inputRefs.current[index - 1].focus();
        }
    };
    return (react_1.default.createElement(react_native_1.View, { style: styles.container }, code.map(function (digit, index) { return (react_1.default.createElement(react_native_1.TextInput, { key: index, style: styles.input, value: digit, onChangeText: function (value) { return handleCodeChange(index, value); }, onKeyPress: function (_a) {
            var key = _a.nativeEvent.key;
            return handleCodeKeyPress(index, key);
        }, keyboardType: "numeric", maxLength: 1, ref: function (ref) { return (inputRefs.current[index] = ref); } })); })));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    input: {
        borderWidth: 1,
        borderRadius: 8,
        width: 60,
        height: 60,
        fontSize: 24,
        textAlign: "center",
    },
});
exports.default = VerificationCodeInput;

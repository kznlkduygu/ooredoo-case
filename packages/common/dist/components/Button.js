"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var colors_1 = require("../constans/colors");
var Button = function (_a) {
    var title = _a.title, onPress = _a.onPress;
    return (react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.button, onPress: onPress },
        react_1.default.createElement(react_native_1.Text, { style: styles.buttonText }, title)));
};
var styles = react_native_1.StyleSheet.create({
    button: {
        width: "80%",
        height: 60,
        backgroundColor: colors_1.Colors.primaryRed,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginBottom: 20,
    },
    buttonText: {
        color: colors_1.Colors.primaryWhite,
        fontSize: 14,
        fontWeight: "bold",
    },
});
exports.default = Button;

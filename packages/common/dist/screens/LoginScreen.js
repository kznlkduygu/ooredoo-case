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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var Button_1 = __importDefault(require("../components/Button"));
var LoginForm = function () {
    var _a = (0, react_1.useState)(""), email = _a[0], setEmail = _a[1];
    var _b = (0, react_1.useState)(""), password = _b[0], setPassword = _b[1];
    var handleEmailChange = function (text) {
        setEmail(text);
    };
    var handlePasswordChange = function (text) {
        setPassword(text);
    };
    var handleSubmit = function () {
        // Giriş işlemlerini burada gerçekleştirin
        console.log("Email:", email);
        console.log("Password:", password);
    };
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.View, { style: { paddingBottom: 16 } },
            react_1.default.createElement(react_native_1.Text, { style: styles.title }, "Login to My Ooredoo \uD83D\uDC4B"),
            react_1.default.createElement(react_native_1.Text, { style: styles.subtitle }, "Login with username and password. Can't remember or don't have a username?"),
            react_1.default.createElement(react_native_1.Text, { style: styles.subtitle }, "Login with a mobile number and OTP")),
        react_1.default.createElement(react_native_1.TextInput, { style: styles.input, placeholder: "Email", value: email, onChangeText: handleEmailChange }),
        react_1.default.createElement(react_native_1.TextInput, { style: styles.input, placeholder: "Password", value: password, onChangeText: handlePasswordChange, secureTextEntry: true }),
        react_1.default.createElement(Button_1.default, { title: "Giri\u015F Yap", onPress: handleSubmit })));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        width: "85%",
        height: 40,
        borderWidth: 1,
        borderColor: "gray",
        marginBottom: 10,
        paddingLeft: 10,
    },
    title: {
        fontSize: 28,
        paddingHorizontal: 8,
        fontWeight: "700",
        fontFamily: "Rubik",
    },
    subtitle: {
        fontSize: 16,
        paddingHorizontal: 8,
        fontWeight: "500",
        fontFamily: "Rubik",
    },
});
exports.default = LoginForm;

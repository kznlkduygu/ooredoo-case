"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var colors_1 = require("../constans/colors");
var Button_1 = __importDefault(require("../components/Button"));
var MobileLoginScreen = function (props) {
    var navigation = props.navigation;
    var _a = (0, react_1.useState)(""), mobileNumber = _a[0], setMobileNumber = _a[1];
    var handleMobileChange = function (text) {
        setMobileNumber(text);
    };
    var handleSubmit = function () {
        var data = {
            serviceNumber: mobileNumber,
        };
        fetch("http://localhost:8080/login/serviceNumber", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(function (response) { return response.json(); })
            .then(function (data) {
            react_native_1.Platform.OS === "web"
                ? (window.location.href = "verification")
                : navigation.navigate("Verification");
            return data; // Promise'in sonucunu data ile döndür
        })
            .catch(function (error) {
            console.log("error", error);
            throw error; // Hatanın yakalanması için Promise'i reddet
        });
    };
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.View, { style: { flex: 1 } },
            react_1.default.createElement(react_native_1.Text, { style: styles.title }, "Login to My Ooredoo \uD83D\uDC4B"),
            react_1.default.createElement(react_native_1.Text, { style: styles.subtitle }, "Login with mobile number. It should start with either 3, 5, 6 or 7. No mobile number?"),
            react_1.default.createElement(react_native_1.View, { style: { flexDirection: "row" } },
                react_1.default.createElement(react_native_1.Text, { style: styles.subtitle }, "Login with a"),
                react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: function () {
                        react_native_1.Platform.OS === "web"
                            ? (window.location.href = "login")
                            : navigation.navigate("Login");
                    } },
                    react_1.default.createElement(react_native_1.Text, { style: __assign(__assign({}, styles.subtitle), { paddingHorizontal: 0, color: colors_1.Colors.primaryRed }) }, "username and password"))),
            react_1.default.createElement(react_native_1.View, { style: styles.inputContainer },
                react_1.default.createElement(react_native_1.TextInput, { style: styles.input, onChangeText: handleMobileChange, placeholder: "Mobile Number" }))),
        react_1.default.createElement(react_native_1.View, { style: styles.buttonContainer },
            react_1.default.createElement(Button_1.default, { title: "Continue", onPress: handleSubmit }))));
};
exports.default = MobileLoginScreen;
var styles = react_native_1.StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        paddingTop: 16,
        backgroundColor: colors_1.Colors.primaryWhite,
        height: "100%",
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
    inputContainer: {
        padding: 8,
    },
    input: {
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
    },
    buttonContainer: {
        alignItems: "center",
    },
});

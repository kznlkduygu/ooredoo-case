"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var VerificationCodeInput_1 = __importDefault(require("../components/VerificationCodeInput"));
var colors_1 = require("../constans/colors");
var Button_1 = __importDefault(require("../components/Button"));
var VerificationScreen = function (props) {
    var navigation = props.navigation;
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.Text, { style: styles.title }, "Enter the 4 - digit code"),
        react_1.default.createElement(react_native_1.Text, { style: styles.subtitle }, "Let\u2019s confirm your identity. Enter the verification code sent to your mobile number ****921."),
        react_1.default.createElement(react_native_1.View, { style: { paddingHorizontal: 50, paddingTop: 20 } },
            react_1.default.createElement(VerificationCodeInput_1.default, null)),
        react_1.default.createElement(react_native_1.View, { style: styles.buttonContainer },
            react_1.default.createElement(Button_1.default, { title: "Continue", onPress: function () {
                    react_native_1.Platform.OS === "web"
                        ? (window.location.href = "registerLast")
                        : navigation.navigate("RegisterLast");
                } }))));
};
exports.default = VerificationScreen;
var styles = react_native_1.StyleSheet.create({
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
    buttonContainer: {
        alignItems: "center",
    },
    container: {
        paddingHorizontal: 8,
        backgroundColor: colors_1.Colors.primaryWhite,
        height: "100%",
    },
});

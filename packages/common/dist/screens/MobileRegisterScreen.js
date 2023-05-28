"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var colors_1 = require("../constans/colors");
var Button_1 = __importDefault(require("../components/Button"));
var MobileRegisterScreen = function (props) {
    var navigation = props.navigation;
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.View, { style: { flex: 1 } },
            react_1.default.createElement(react_native_1.Text, { style: styles.title }, "Welcome to Ooredoo \uD83D\uDC4B"),
            react_1.default.createElement(react_native_1.Text, { style: styles.subtitle }, "Please fill in your information below. Your mobile number should start with either 3, 5, 6, or 7."),
            react_1.default.createElement(react_native_1.View, { style: styles.inputContainer },
                react_1.default.createElement(react_native_1.TextInput, { style: styles.input, placeholder: "Mobile Number" })),
            react_1.default.createElement(react_native_1.View, { style: styles.inputContainer },
                react_1.default.createElement(react_native_1.TextInput, { style: styles.input, placeholder: "Qatar ID or Passport ID" }))),
        react_1.default.createElement(react_native_1.View, { style: styles.buttonContainer },
            react_1.default.createElement(Button_1.default, { title: "Continue", onPress: function () {
                    react_native_1.Platform.OS === "web"
                        ? (window.location.href = "verification")
                        : navigation.navigate("Verification");
                } }))));
};
exports.default = MobileRegisterScreen;
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

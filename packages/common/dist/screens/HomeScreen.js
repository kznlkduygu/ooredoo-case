"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var colors_1 = require("../constans/colors");
var Button_1 = __importDefault(require("../components/Button"));
var HomeScreen = function (props) {
    var navigation = props.navigation;
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(Button_1.default, { title: "Login", onPress: function () {
                return react_native_1.Platform.OS === "web"
                    ? (window.location.href = "login")
                    : navigation.navigate("Login");
            } }),
        react_1.default.createElement(Button_1.default, { title: "Signup", onPress: function () {
                return react_native_1.Platform.OS === "web"
                    ? (window.location.href = "registerfirst")
                    : navigation.navigate("RegisterFirst");
            } })));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: colors_1.Colors.primaryWhite
    },
    buttonContainer: {
        width: "80%",
        height: 60,
        backgroundColor: colors_1.Colors.primaryRed,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginBottom: 20,
    },
    buttonText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    },
});
exports.default = HomeScreen;

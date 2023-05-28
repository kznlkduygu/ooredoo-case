"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var colors_1 = require("../constans/colors");
var RegisterFirst = function (props) {
    var navigation = props.navigation;
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.View, null,
            react_1.default.createElement(react_native_1.Text, { style: styles.title }, "Register with"),
            react_1.default.createElement(react_native_1.Text, { style: styles.subtitle }, "Please select your registration type")),
        react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: function () {
                react_native_1.Platform.OS === "web"
                    ? (window.location.href = "mobileregister")
                    : navigation.navigate("MobileRegister");
            }, style: styles.buttonContainer },
            react_1.default.createElement(react_native_1.Text, { style: styles.buttonText }, "Mobile Number")),
        react_1.default.createElement(react_native_1.View, { style: styles.sectionContainer },
            react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.sectionButton },
                react_1.default.createElement(react_native_1.Text, { style: styles.sectionButtonText }, "Landline Number")),
            react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: function () {
                    react_native_1.Platform.OS === "web"
                        ? (window.location.href = "mobileregister")
                        : navigation.navigate("MobileRegister");
                }, style: [styles.sectionButton, styles.sectionButtonMargin] },
                react_1.default.createElement(react_native_1.Text, { style: styles.sectionButtonText }, "Mobile Broadband Number")))));
};
exports.default = RegisterFirst;
var styles = react_native_1.StyleSheet.create({
    container: {
        padding: 30,
        backgroundColor: colors_1.Colors.primaryWhite,
        height: "100%",
    },
    title: {
        color: colors_1.Colors.primaryBlack,
        fontSize: 24,
        paddingVertical: 16,
    },
    subtitle: {
        color: colors_1.Colors.primaryBlack,
        fontSize: 12,
        paddingBottom: 16,
    },
    buttonContainer: {
        width: "80%",
        height: 40,
        backgroundColor: colors_1.Colors.primaryWhite,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginBottom: 20,
        borderWidth: 1,
    },
    buttonText: {
        color: colors_1.Colors.primaryBlack,
    },
    sectionContainer: {
        width: "80%",
        height: "30%",
        borderRadius: 20,
        backgroundColor: colors_1.Colors.primaryGray,
        justifyContent: "center",
        alignItems: "center",
    },
    sectionButton: {
        width: "80%",
        height: 40,
        backgroundColor: colors_1.Colors.primaryWhite,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginBottom: 20,
        borderWidth: 1,
    },
    sectionButtonText: {
        color: colors_1.Colors.primaryBlack,
    },
    sectionButtonMargin: {
        marginVertical: 20,
    },
});

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
var colors_1 = require("../constans/colors");
var Button_1 = __importDefault(require("../components/Button"));
var validatePassword_1 = __importDefault(require("../hooks/validatePassword"));
var CustomPopup_1 = __importDefault(require("../components/CustomPopup"));
var RegisterLastScreen = function (props) {
    var navigation = props.navigation;
    var _a = (0, validatePassword_1.default)(), password = _a.password, passwordError = _a.passwordError, handlePasswordChange = _a.handlePasswordChange;
    var _b = (0, react_1.useState)(""), mobileNumber = _b[0], setMobileNumber = _b[1];
    var _c = (0, react_1.useState)(""), passportID = _c[0], setPassportID = _c[1];
    var _d = (0, react_1.useState)(""), email = _d[0], setEmail = _d[1];
    var _e = (0, react_1.useState)(false), modalVisible = _e[0], setModalVisible = _e[1];
    var handleOpenModal = function () {
        setModalVisible(true);
    };
    var handleCloseModal = function () {
        setModalVisible(false);
    };
    var handleRegister = function () {
        setModalVisible(true);
    };
    return (react_1.default.createElement(react_native_1.ScrollView, { style: styles.big_container },
        react_1.default.createElement(react_native_1.Text, { style: styles.title }, "You\u2019re nearly there"),
        react_1.default.createElement(react_native_1.Text, { style: styles.subtitle }, "Ahmad, we need some information before completing your registration."),
        react_1.default.createElement(react_native_1.View, { style: styles.container },
            react_1.default.createElement(react_native_1.TextInput, { style: styles.input, placeholder: "Mobile Number", value: mobileNumber, onChangeText: setMobileNumber, keyboardType: "numeric" }),
            react_1.default.createElement(react_native_1.TextInput, { style: styles.input, placeholder: "Passport ID", value: passportID, onChangeText: setPassportID }),
            react_1.default.createElement(react_native_1.TextInput, { style: styles.input, placeholder: "Email Address", value: email, onChangeText: setEmail, keyboardType: "email-address", autoCapitalize: "none" }),
            react_1.default.createElement(react_native_1.TextInput, { style: styles.input, placeholder: "\u015Eifre", value: password, onChangeText: handlePasswordChange, secureTextEntry: true }),
            passwordError !== "" && (react_1.default.createElement(react_native_1.Text, { style: styles.errorText }, passwordError)),
            react_1.default.createElement(react_native_1.View, { style: { alignItems: "center" } },
                react_1.default.createElement(Button_1.default, { title: "Register", onPress: function () { return setModalVisible(true); } }),
                react_1.default.createElement(react_native_1.View, null,
                    react_1.default.createElement(CustomPopup_1.default, { visible: modalVisible, children: "Congratulations", onClose: handleCloseModal }))))));
};
exports.default = RegisterLastScreen;
var styles = react_native_1.StyleSheet.create({
    big_container: {
        paddingHorizontal: 8,
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
    buttonContainer: {
        alignItems: "center",
    },
    container: {
        justifyContent: "center",
        paddingTop: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 10,
        marginBottom: 16,
    },
    errorText: {
        color: "red",
        marginBottom: 16,
    },
});

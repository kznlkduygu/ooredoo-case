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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
    var navigation = props.navigation, useRoute = props.useRoute;
    var _a = (0, validatePassword_1.default)(), password = _a.password, passwordError = _a.passwordError, handlePasswordChange = _a.handlePasswordChange;
    var _b = (0, react_1.useState)(""), email = _b[0], setEmail = _b[1];
    var _c = (0, react_1.useState)(false), modalVisible = _c[0], setModalVisible = _c[1];
    var mobileNumberFinal;
    var qidFinal;
    if (react_native_1.Platform.OS === "web") {
        var params = new URLSearchParams(window.location.search);
        mobileNumberFinal = params.get("serviceNumber");
        qidFinal = params.get("qidFinal");
    }
    else {
        var route = useRoute();
        var _d = route.params, serviceNumber = _d.serviceNumber, qid = _d.qid;
        mobileNumberFinal = serviceNumber;
        qidFinal = qid;
    }
    console.log("LASTmobileNumberFinal", mobileNumberFinal);
    console.log("LASTqidFinal", qidFinal);
    var handleCloseModal = function () {
        setModalVisible(false);
    };
    var handleSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var formData, response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, 3, 4]);
                    formData = {
                        email: email,
                        password: password,
                        qid: qidFinal,
                        serviceNumber: mobileNumberFinal,
                    };
                    return [4 /*yield*/, fetch("http://localhost:8080/registerCustomer", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                Accept: "application/json",
                            },
                            body: JSON.stringify(formData),
                        })];
                case 1:
                    response = _a.sent();
                    if (response.ok) {
                        setModalVisible(true);
                    }
                    return [3 /*break*/, 4];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 4];
                case 3: return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (react_1.default.createElement(react_native_1.ScrollView, { style: styles.big_container },
        react_1.default.createElement(react_native_1.Text, { style: styles.title }, "You\u2019re nearly there"),
        react_1.default.createElement(react_native_1.Text, { style: styles.subtitle }, "Ahmad, we need some information before completing your registration."),
        react_1.default.createElement(react_native_1.View, { style: styles.container },
            react_1.default.createElement(react_native_1.TextInput, { style: styles.input, placeholder: "Mobile Number", value: mobileNumberFinal, editable: false, keyboardType: "numeric" }),
            react_1.default.createElement(react_native_1.TextInput, { style: styles.input, placeholder: "Passport ID", value: qidFinal, editable: false }),
            react_1.default.createElement(react_native_1.TextInput, { style: styles.input, placeholder: "Email Address", value: email, onChangeText: setEmail, keyboardType: "email-address", autoCapitalize: "none" }),
            react_1.default.createElement(react_native_1.TextInput, { style: styles.input, placeholder: "\u015Eifre", value: password, onChangeText: handlePasswordChange, secureTextEntry: true }),
            passwordError !== "" && (react_1.default.createElement(react_native_1.Text, { style: styles.errorText }, passwordError)),
            react_1.default.createElement(react_native_1.View, { style: { alignItems: "center" } },
                react_1.default.createElement(Button_1.default, { title: "Register", onPress: handleSubmit }),
                react_1.default.createElement(react_native_1.View, null,
                    react_1.default.createElement(CustomPopup_1.default, { visible: modalVisible, children: "Congratulations, your registration successfully created.", onClose: handleCloseModal }))))));
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

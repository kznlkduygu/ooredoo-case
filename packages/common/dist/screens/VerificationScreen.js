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
var VerificationCodeInput_1 = __importDefault(require("../components/VerificationCodeInput"));
var colors_1 = require("../constans/colors");
var Button_1 = __importDefault(require("../components/Button"));
var CustomPopup_1 = __importDefault(require("../components/CustomPopup"));
var VerificationScreen = function (props) {
    var navigation = props.navigation, useRoute = props.useRoute;
    var _a = (0, react_1.useState)(["", "", "", ""]), code = _a[0], setCode = _a[1];
    var _b = (0, react_1.useState)(false), modalVisible = _b[0], setModalVisible = _b[1];
    var mobileNumberFinal;
    var qidFinal;
    var isLoginFinal;
    var landline;
    if (react_native_1.Platform.OS === "web") {
        var params = new URLSearchParams(window.location.search);
        mobileNumberFinal = params.get("mobileNumber");
        qidFinal = params.get("qid");
        isLoginFinal = params.get("isLogin");
        landline = params.get("isLandline");
    }
    else {
        var route = useRoute();
        var _c = route.params, serviceNumber = _c.serviceNumber, qid = _c.qid, isLogin = _c.isLogin, isLandline = _c.isLandline;
        mobileNumberFinal = serviceNumber;
        qidFinal = qid;
        isLoginFinal = isLogin;
        landline = isLandline;
    }
    var handleSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var formData, response, url, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!((code === null || code === void 0 ? void 0 : code.length) === 4)) return [3 /*break*/, 4];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    formData = {
                        serviceNumber: mobileNumberFinal,
                        otp: code === null || code === void 0 ? void 0 : code.join(""),
                    };
                    return [4 /*yield*/, fetch("http://localhost:8080/verifyOTP", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                Accept: "application/json",
                            },
                            body: JSON.stringify(formData),
                        })];
                case 2:
                    response = _a.sent();
                    if (response.status === 200) {
                        if (isLoginFinal) {
                            setModalVisible(true);
                        }
                        else {
                            url = "/registerlast?serviceNumber=".concat(mobileNumberFinal, "&qidFinal=").concat(qidFinal);
                            if (react_native_1.Platform.OS !== "web") {
                                navigation.navigate("RegisterLast", {
                                    serviceNumber: mobileNumberFinal,
                                    qid: qidFinal,
                                });
                            }
                            else {
                                window.location.href = url;
                            }
                        }
                    }
                    else if (response.status === 401) {
                        react_native_1.Alert.alert("The entered code is incorrect");
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.Text, { style: styles.title }, "Enter the 4 - digit code"),
        react_1.default.createElement(react_native_1.Text, { style: styles.subtitle }, "Let\u2019s confirm your identity. Enter the verification code sent to your mobile number ****921."),
        react_1.default.createElement(react_native_1.View, { style: { paddingHorizontal: 50, paddingTop: 20 } },
            react_1.default.createElement(VerificationCodeInput_1.default, { setCode: setCode, code: code })),
        react_1.default.createElement(react_native_1.View, { style: styles.buttonContainer },
            react_1.default.createElement(Button_1.default, { title: "Continue", onPress: handleSubmit })),
        react_1.default.createElement(CustomPopup_1.default, { visible: modalVisible, children: "👋 Welcome My Ooredoo 👋 ", onClose: function () { return setModalVisible(false); } })));
};
exports.default = VerificationScreen;
var styles = react_native_1.StyleSheet.create({
    title: {
        fontSize: 28,
        paddingHorizontal: 8,
        fontWeight: "700",
    },
    subtitle: {
        fontSize: 16,
        paddingHorizontal: 8,
        fontWeight: "500",
    },
    buttonContainer: {
        paddingTop: 16,
        alignItems: "center",
    },
    container: {
        paddingHorizontal: 8,
        backgroundColor: colors_1.Colors.primaryWhite,
        height: "100%",
    },
});

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
var Button_1 = __importDefault(require("../components/Button"));
var validateQID_1 = require("../utils/validateQID");
var validateMobileNumber_1 = require("../utils/validateMobileNumber");
var colors_1 = require("../constans/colors");
var MobileRegisterScreen = function (props) {
    var navigation = props.navigation;
    var _a = (0, react_1.useState)(""), mobileNumber = _a[0], setMobileNumber = _a[1];
    var _b = (0, react_1.useState)(""), qatarID = _b[0], setQatarID = _b[1];
    var _c = (0, react_1.useState)(""), errorQID = _c[0], setErrorQID = _c[1];
    var _d = (0, react_1.useState)(""), errorMobileNumber = _d[0], setErrorMobileNumber = _d[1];
    (0, react_1.useEffect)(function () {
        if (qatarID && !(0, validateQID_1.validateQID)(qatarID)) {
            setErrorQID("Invalid Qatar ID");
        }
        else {
            setErrorQID("");
        }
    }, [qatarID]);
    (0, react_1.useEffect)(function () {
        if (mobileNumber && !(0, validateMobileNumber_1.validateMobileNumber)(mobileNumber)) {
            setErrorMobileNumber("Invalid Mobile Nubmer");
        }
        else {
            setErrorMobileNumber("");
        }
    }, [mobileNumber]);
    var handleSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var data, response, url, responseData, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(0, validateMobileNumber_1.validateMobileNumber)(mobileNumber)) {
                        setErrorQID("Invalid Qatar ID");
                        return [2 /*return*/];
                    }
                    if (!(0, validateQID_1.validateQID)(qatarID)) {
                        setErrorMobileNumber("Invalid Mobile Nubmer");
                        return [2 /*return*/];
                    }
                    data = {
                        serviceNumber: mobileNumber,
                        qid: qatarID,
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, , 7]);
                    return [4 /*yield*/, fetch("http://localhost:8080/validateServiceNumberForRegistration", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(data),
                        })];
                case 2:
                    response = _a.sent();
                    if (!response.ok) return [3 /*break*/, 3];
                    url = "/verification?mobileNumber=".concat(mobileNumber, "&qid=").concat(qatarID);
                    if (react_native_1.Platform.OS === "web") {
                        window.location.href = url;
                    }
                    else {
                        navigation.navigate("Verification", {
                            serviceNumber: mobileNumber,
                            qid: qatarID,
                        });
                    }
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, response.json()];
                case 4:
                    responseData = _a.sent();
                    responseData.error;
                    _a.label = 5;
                case 5: return [3 /*break*/, 7];
                case 6:
                    error_1 = _a.sent();
                    console.log("error", error_1);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); };
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.View, { style: { flex: 1 } },
            react_1.default.createElement(react_native_1.Text, { style: styles.title }, "Welcome to Ooredoo \uD83D\uDC4B"),
            react_1.default.createElement(react_native_1.Text, { style: styles.subtitle }, "Please fill in your information below. Your mobile number should start with either 3, 5, 6, or 7."),
            react_1.default.createElement(react_native_1.View, { style: styles.inputContainer },
                react_1.default.createElement(react_native_1.TextInput, { onChangeText: function (text) { return setMobileNumber(text); }, style: styles.input, placeholder: "Mobile Number" }),
                errorMobileNumber ? (react_1.default.createElement(react_native_1.Text, { style: styles.error }, errorMobileNumber)) : null),
            react_1.default.createElement(react_native_1.View, { style: styles.inputContainer },
                react_1.default.createElement(react_native_1.TextInput, { onChangeText: function (text) { return setQatarID(text); }, style: styles.input, placeholder: "Qatar ID or Passport ID" }),
                errorQID ? react_1.default.createElement(react_native_1.Text, { style: styles.error }, errorQID) : null)),
        react_1.default.createElement(react_native_1.View, { style: styles.buttonContainer },
            react_1.default.createElement(Button_1.default, { title: "Continue", onPress: handleSubmit }))));
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
    error: {
        color: "red",
        marginTop: 5,
    },
});

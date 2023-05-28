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
var MobileLoginScreen = function (props) {
    var navigation = props.navigation;
    var _a = (0, react_1.useState)(""), mobileNumber = _a[0], setMobileNumber = _a[1];
    var handleMobileChange = function (text) {
        setMobileNumber(text);
    };
    // const handleSubmit = () => {
    //   const data = {
    //     serviceNumber: mobileNumber,
    //   };
    //   fetch("http://localhost:8080/login/serviceNumber", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   })
    //     .then((response) => response.json())
    //     .then((responseData) => {
    //       const { mobileNumber } = responseData; // responseData'dan mobileNumber değerini al
    //       if (Platform.OS === "web") {
    //         window.location.href = `verification?mobileNumber=${mobileNumber}`; // mobileNumber'ı parametre olarak ekleyerek yönlendir
    //       } else {
    //         navigation.navigate("Verification", { mobileNumber }); // mobileNumber'ı props olarak geçirerek yönlendir
    //       }
    //     })
    //     .catch((error) => {
    //       console.log("error-->", error);
    //       if (Platform.OS === "web") {
    //         window.location.href = "verification";
    //       } else {
    //         navigation.navigate("Verification");
    //       }
    //       throw error;
    //     });
    // };
    var handleSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var formData, response, url, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!mobileNumber) return [3 /*break*/, 5];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    formData = {
                        serviceNumber: mobileNumber,
                    };
                    return [4 /*yield*/, fetch("http://localhost:8080/login/serviceNumber", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(formData),
                        })];
                case 2:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("API request failed");
                    }
                    url = "/verification?mobileNumber=".concat(mobileNumber);
                    if (react_native_1.Platform.OS === "web") {
                        window.location.href = url;
                    }
                    else {
                        navigation.navigate("Verification", { mobileNumber: mobileNumber });
                    }
                    return [3 /*break*/, 5];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 5];
                case 4: return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
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

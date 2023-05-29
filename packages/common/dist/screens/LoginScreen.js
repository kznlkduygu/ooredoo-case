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
var Button_1 = __importDefault(require("../components/Button"));
var colors_1 = require("../constans/colors");
var CustomPopup_1 = __importDefault(require("../components/CustomPopup"));
var LoginScreen = function (props) {
    var navigation = props.navigation;
    var _a = (0, react_1.useState)(""), email = _a[0], setEmail = _a[1];
    var _b = (0, react_1.useState)(""), password = _b[0], setPassword = _b[1];
    var _c = (0, react_1.useState)(false), modalVisible = _c[0], setModalVisible = _c[1];
    var handleEmailChange = function (text) {
        setEmail(text);
    };
    var handlePasswordChange = function (text) {
        setPassword(text);
    };
    var handleCloseModal = function () {
        setModalVisible(false);
    };
    var handleSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var data, response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    data = {
                        email: email,
                        password: password,
                    };
                    return [4 /*yield*/, fetch("http://localhost:8080/login/username", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                Accept: "application/json",
                            },
                            body: JSON.stringify(data),
                        })];
                case 1:
                    response = _a.sent();
                    console.log("response", response);
                    if (response.ok) {
                        setModalVisible(true);
                    }
                    else if (response.status === 403) {
                        react_native_1.Alert.alert("Wrong login");
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.View, { style: { paddingBottom: 16 } },
            react_1.default.createElement(react_native_1.Text, { style: styles.title }, "Login to My Ooredoo \uD83D\uDC4B"),
            react_1.default.createElement(react_native_1.Text, { style: styles.subtitle }, "Login with username and password. Can't remember or don't have a username?"),
            react_1.default.createElement(react_native_1.View, { style: { flexDirection: "row" } },
                react_1.default.createElement(react_native_1.Text, { style: styles.subtitle }, "Login with a"),
                react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: function () {
                        react_native_1.Platform.OS === "web"
                            ? (window.location.href = "mobile-login")
                            : navigation.navigate("MobileLogin");
                    } },
                    react_1.default.createElement(react_native_1.Text, { style: __assign(__assign({}, styles.subtitle), { paddingHorizontal: 0, color: colors_1.Colors.primaryRed }) }, "mobile number and OTP")))),
        react_1.default.createElement(react_native_1.TextInput, { style: styles.input, placeholder: "Email", value: email, onChangeText: handleEmailChange }),
        react_1.default.createElement(react_native_1.TextInput, { style: styles.input, placeholder: "Password", value: password, onChangeText: handlePasswordChange, secureTextEntry: true }),
        react_1.default.createElement(Button_1.default, { title: "Giri\u015F Yap", onPress: handleSubmit }),
        react_1.default.createElement(CustomPopup_1.default, { visible: modalVisible, children: "👋 Welcome My Ooredoo 👋 ", onClose: handleCloseModal })));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors_1.Colors.primaryWhite,
    },
    input: {
        width: "85%",
        height: 40,
        borderWidth: 1,
        borderColor: "gray",
        marginBottom: 10,
        paddingLeft: 10,
    },
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
});
exports.default = LoginScreen;

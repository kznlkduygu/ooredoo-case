"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var usePasswordValidation = function () {
    var minLength = 8;
    var maxLength = 20;
    var _a = (0, react_1.useState)(""), password = _a[0], setPassword = _a[1];
    var _b = (0, react_1.useState)(""), passwordError = _b[0], setPasswordError = _b[1];
    var validatePassword = function (password) {
        var errors = [];
        if (password.length < minLength || password.length > maxLength) {
            errors.push("\u015Eifre en az ".concat(minLength, " karakterden olu\u015Fmal\u0131, en fazla ").concat(maxLength, " karakter olmal\u0131d\u0131r."));
        }
        if (!/\d/.test(password)) {
            errors.push("En az bir sayı içermelidir.");
        }
        if (!/[a-z]/.test(password)) {
            errors.push("En az bir küçük harf içermelidir.");
        }
        if (!/[A-Z]/.test(password)) {
            errors.push("En az bir büyük harf içermelidir.");
        }
        if (!/[!@#.$%]/.test(password)) {
            errors.push("En az bir özel karakter içermelidir (! @ # . $ %).");
        }
        if (/\s/.test(password)) {
            errors.push("Boşluk içermemelidir.");
        }
        setPasswordError(errors.length > 0 ? errors.join("\n") : "");
        return errors.length === 0;
    };
    var handlePasswordChange = function (text) {
        setPassword(text);
        validatePassword(text);
    };
    return {
        password: password,
        passwordError: passwordError,
        handlePasswordChange: handlePasswordChange,
    };
};
exports.default = usePasswordValidation;

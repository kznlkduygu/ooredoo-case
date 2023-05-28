"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var CustomModal = function (_a) {
    var visible = _a.visible, onClose = _a.onClose, children = _a.children;
    return (react_1.default.createElement(react_native_1.Modal, { visible: visible, animationType: "fade", transparent: true, onRequestClose: onClose },
        react_1.default.createElement(react_native_1.View, { style: styles.container },
            react_1.default.createElement(react_native_1.View, { style: styles.modalContainer },
                react_1.default.createElement(react_native_1.Text, null, children),
                react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.closeButton, onPress: onClose },
                    react_1.default.createElement(react_native_1.Text, { style: styles.closeButtonText }, "Close"))))));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContainer: {
        backgroundColor: "white",
        borderRadius: 8,
        padding: 16,
        width: "80%",
    },
    closeButton: {
        marginTop: 16,
        alignSelf: "flex-end",
    },
    closeButtonText: {
        color: "blue",
        fontSize: 16,
    },
});
exports.default = CustomModal;

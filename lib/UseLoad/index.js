"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var prefixCls = 'useLoad';

var UseForm = function UseForm(_ref) {
  var children = _ref.children,
      message = _ref.message,
      _ref$visible = _ref.visible,
      visible = _ref$visible === void 0 ? false : _ref$visible;
  if (!visible) return null;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: prefixCls
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "loader"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "dot"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "dot"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "dot"
  })), message && /*#__PURE__*/_react["default"].createElement("p", {
    className: "loading-msg"
  }, message), /*#__PURE__*/_react["default"].createElement("div", {
    className: "loading-content"
  }, children));
};

var _default = UseForm;
exports["default"] = _default;
//# sourceMappingURL=index.js.map

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react);
    global.index = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _react) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _react = _interopRequireDefault(_react);
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
  _exports["default"] = _default;
});
//# sourceMappingURL=index.js.map

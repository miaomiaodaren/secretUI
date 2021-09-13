var _typeof = require("@babel/runtime/helpers/typeof");

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/slicedToArray", "react", "antd"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/slicedToArray"), require("react"), require("antd"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.slicedToArray, global.react, global.antd);
    global.index = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _slicedToArray2, _react, _antd) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _slicedToArray2 = _interopRequireDefault(_slicedToArray2);
  _react = _interopRequireWildcard(_react);

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  var prefixCls = 'happy-alert';

  var Alert = function Alert(_ref) {
    var text = _ref.text;

    var _useState = (0, _react.useState)(0),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        count = _useState2[0],
        setCount = _useState2[1];

    var testAlert = function testAlert() {
      setCount(count + 1);
    };

    return /*#__PURE__*/_react["default"].createElement("div", {
      className: prefixCls,
      onClick: testAlert
    }, "test Alert", text, /*#__PURE__*/_react["default"].createElement(_antd.Input, {
      value: 1,
      onChange: function onChange(e) {
        return console.log(e.target.value);
      }
    }));
  };

  var _default = Alert;
  _exports["default"] = _default;
});
//# sourceMappingURL=index.js.map

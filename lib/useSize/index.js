"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _resizeObserverPolyfill = _interopRequireDefault(require("resize-observer-polyfill"));

var useSize = function useSize(_ref) {
  var target = _ref.target;

  var _useState = (0, _react.useState)(function () {
    var el = target;
    return {
      width: el.clientWidth,
      height: el.clientHeight
    };
  }),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  (0, _react.useLayoutEffect)(function () {
    if (!target) {
      return function () {};
    }

    var resizeObserver = new _resizeObserverPolyfill["default"](function (entries) {
      entries.forEach(function (entry) {
        var _entry$target, _entry$target2;

        setState({
          width: (_entry$target = entry.target) === null || _entry$target === void 0 ? void 0 : _entry$target.clientWidth,
          height: (_entry$target2 = entry.target) === null || _entry$target2 === void 0 ? void 0 : _entry$target2.clientHeight
        });
      });
    });
    resizeObserver.observe(target);
    return function () {
      resizeObserver.disconnect();
    };
  }, [target]);
  return state;
};

var _default = useSize;
exports["default"] = _default;
//# sourceMappingURL=index.js.map

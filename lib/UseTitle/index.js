"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var useTitle = function useTitle(title) {
  (0, _react.useEffect)(function () {
    document.title = title;
  }, [title]);
};

var _default = useTitle;
exports["default"] = _default;
//# sourceMappingURL=index.js.map

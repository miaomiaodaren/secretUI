import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from "react";
var prefixCls = 'happy-alert';

var Alert = function Alert(_ref) {
  var text = _ref.text;

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1];

  var testAlert = function testAlert() {
    setCount(count + 1);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: prefixCls,
    onClick: testAlert
  }, "test Alert", text);
};

export default Alert;
//# sourceMappingURL=index.js.map

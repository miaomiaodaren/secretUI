import React from 'react';
var prefixCls = 'useLoad';

var UseForm = function UseForm(_ref) {
  var children = _ref.children,
      message = _ref.message,
      _ref$visible = _ref.visible,
      visible = _ref$visible === void 0 ? false : _ref$visible;
  if (!visible) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: prefixCls
  }, /*#__PURE__*/React.createElement("div", {
    className: "loader"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("div", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("div", {
    className: "dot"
  })), message && /*#__PURE__*/React.createElement("p", {
    className: "loading-msg"
  }, message), /*#__PURE__*/React.createElement("div", {
    className: "loading-content"
  }, children));
};

export default UseForm;
//# sourceMappingURL=index.js.map

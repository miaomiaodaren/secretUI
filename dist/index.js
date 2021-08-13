(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./alert", "./useSize"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./alert"), require("./useSize"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.alert, global.useSize);
    global.index = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _alert, _useSize) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "Alert", {
    enumerable: true,
    get: function get() {
      return _alert["default"];
    }
  });
  Object.defineProperty(_exports, "UseSize", {
    enumerable: true,
    get: function get() {
      return _useSize["default"];
    }
  });
  _alert = _interopRequireDefault(_alert);
  _useSize = _interopRequireDefault(_useSize);
});
//# sourceMappingURL=index.js.map

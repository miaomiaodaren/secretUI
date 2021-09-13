(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./index.less"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("./index.less"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.index);
    global.index = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_index) {
  "use strict";
});
//# sourceMappingURL=index.js.map

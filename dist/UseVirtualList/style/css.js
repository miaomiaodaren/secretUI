(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./index.css"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("./index.css"));
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
//# sourceMappingURL=css.js.map

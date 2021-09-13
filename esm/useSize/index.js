import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useLayoutEffect, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

var useSize = function useSize(_ref) {
  var target = _ref.target;

  var _useState = useState(function () {
    var el = target;
    return {
      width: (el || {}).clientWidth,
      height: (el || {}).clientHeight
    };
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  useLayoutEffect(function () {
    if (!target) {
      return function () {};
    }

    var resizeObserver = new ResizeObserver(function (entries) {
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

export default useSize;
//# sourceMappingURL=index.js.map

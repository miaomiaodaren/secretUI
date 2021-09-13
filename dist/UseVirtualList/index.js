(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/slicedToArray", "react", "../useSize"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/slicedToArray"), require("react"), require("../useSize"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.slicedToArray, global.react, global.useSize);
    global.index = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _slicedToArray2, _react, _useSize) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _slicedToArray2 = _interopRequireDefault(_slicedToArray2);
  _useSize = _interopRequireDefault(_useSize);
  var prefixCls = 'UseVirtualList';

  var UseVirtualList = function UseVirtualList(list, options) {
    var containerRef = (0, _react.useRef)();
    var size = (0, _useSize["default"])({
      target: containerRef.current
    });

    var _useState = (0, _react.useState)({
      start: 0,
      end: 10
    }),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        state = _useState2[0],
        setState = _useState2[1];

    var itemHeight = options.itemHeight,
        _options$overscan = options.overscan,
        overscan = _options$overscan === void 0 ? 5 : _options$overscan;

    var getViewCapacity = function getViewCapacity(containerHeight) {
      if (typeof itemHeight === 'number') {
        return Math.ceil(containerHeight / itemHeight);
      }

      var _state$start = state.start,
          start = _state$start === void 0 ? 0 : _state$start;
      var sum = 0;
      var capacity = 0; // eslint-disable-next-line no-plusplus

      for (var i = start; i < list.length; i++) {
        var height = itemHeight(i);
        sum += height;

        if (sum >= containerHeight) {
          capacity = i;
          break;
        }
      }

      return capacity - start;
    };

    var getOffset = function getOffset(scrollTop) {
      if (typeof itemHeight === 'number') {
        return Math.floor(scrollTop / itemHeight) + 1;
      }

      var sum = 0;
      var offset = 0; // eslint-disable-next-line no-plusplus

      for (var i = 0; i < list.length; i++) {
        var height = itemHeight(i);
        sum += height;

        if (sum >= scrollTop) {
          offset = i;
          break;
        }
      }

      return offset + 1;
    };

    var calculateRange = function calculateRange() {
      var element = containerRef.current;

      if (element) {
        var offset = getOffset(element.scrollTop);
        var viewCapacity = getViewCapacity(element.clientHeight);
        var from = offset - overscan;
        var to = offset + viewCapacity + overscan;
        setState({
          start: from < 0 ? 0 : from,
          end: to > list.length ? list.length : to
        });
      }
    };

    (0, _react.useEffect)(function () {
      calculateRange();
    }, [size.width, size.height, list.length]);
    var totalHeight = (0, _react.useMemo)(function () {
      if (typeof itemHeight === 'number') {
        return list.length * itemHeight;
      }

      return list.reduce(function (sum, _, index) {
        return sum + itemHeight(index);
      }, 0);
    }, [list.length]);

    var getDistanceTop = function getDistanceTop(index) {
      // 如果有缓存，优先返回缓存值
      // if (enableCache && distanceCache.current[index]) {
      //   return distanceCache.current[index];
      // }
      if (typeof itemHeight === 'number') {
        var _height = index * itemHeight; // if (enableCache) {
        //   distanceCache.current[index] = height;
        // }


        return _height;
      }

      var height = list.slice(0, index).reduce(function (sum, _, i) {
        return sum + itemHeight(i);
      }, 0); // if (enableCache) {
      //   distanceCache.current[index] = height;
      // }

      return height;
    };

    var scrollTo = function scrollTo(index) {
      if (containerRef.current) {
        containerRef.current.scrollTop = getDistanceTop(index);
        calculateRange();
      }
    };

    var offsetTop = (0, _react.useMemo)(function () {
      return getDistanceTop(state.start);
    }, [state.start]);
    return {
      list: list.slice(state.start, state.end).map(function (ele, index) {
        return {
          data: ele,
          index: index + state.start
        };
      }),
      containerProps: {
        ref: function ref(ele) {
          containerRef.current = ele;
        },
        onScroll: function onScroll(e) {
          e.preventDefault();
          calculateRange();
        },
        style: {
          overflowY: 'auto'
        }
      },
      scrollTo: scrollTo,
      wrapperProps: {
        style: {
          width: '100%',
          height: totalHeight - offsetTop,
          marginTop: offsetTop
        }
      }
    };
  };

  var _default = UseVirtualList;
  _exports["default"] = _default;
});
//# sourceMappingURL=index.js.map

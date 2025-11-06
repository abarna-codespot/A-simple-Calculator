"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMaxTransform = void 0;
var _factory = require("../../utils/factory.js");
var _errorTransform = require("./utils/errorTransform.js");
var _max = require("../../function/statistics/max.js");
var _lastDimToZeroBase = require("./utils/lastDimToZeroBase.js");
const name = 'max';
const dependencies = ['typed', 'config', 'numeric', 'larger', 'isNaN'];
const createMaxTransform = exports.createMaxTransform = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    config,
    numeric,
    larger,
    isNaN: mathIsNaN
  } = _ref;
  const max = (0, _max.createMax)({
    typed,
    config,
    numeric,
    larger,
    isNaN: mathIsNaN
  });

  /**
   * Attach a transform function to math.max
   * Adds a property transform containing the transform function.
   *
   * This transform changed the last `dim` parameter of function max
   * from one-based to zero based
   */
  return typed('max', {
    '...any': function (args) {
      args = (0, _lastDimToZeroBase.lastDimToZeroBase)(args);
      try {
        return max.apply(null, args);
      } catch (err) {
        throw (0, _errorTransform.errorTransform)(err);
      }
    }
  });
}, {
  isTransformFunction: true
});
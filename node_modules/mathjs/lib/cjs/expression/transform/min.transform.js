"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMinTransform = void 0;
var _factory = require("../../utils/factory.js");
var _errorTransform = require("./utils/errorTransform.js");
var _min = require("../../function/statistics/min.js");
var _lastDimToZeroBase = require("./utils/lastDimToZeroBase.js");
const name = 'min';
const dependencies = ['typed', 'config', 'numeric', 'smaller', 'isNaN'];
const createMinTransform = exports.createMinTransform = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    config,
    numeric,
    smaller,
    isNaN: mathIsNaN
  } = _ref;
  const min = (0, _min.createMin)({
    typed,
    config,
    numeric,
    smaller,
    isNaN: mathIsNaN
  });

  /**
   * Attach a transform function to math.min
   * Adds a property transform containing the transform function.
   *
   * This transform changed the last `dim` parameter of function min
   * from one-based to zero based
   */
  return typed('min', {
    '...any': function (args) {
      args = (0, _lastDimToZeroBase.lastDimToZeroBase)(args);
      try {
        return min.apply(null, args);
      } catch (err) {
        throw (0, _errorTransform.errorTransform)(err);
      }
    }
  });
}, {
  isTransformFunction: true
});
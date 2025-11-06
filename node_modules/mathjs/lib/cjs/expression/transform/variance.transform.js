"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createVarianceTransform = void 0;
var _factory = require("../../utils/factory.js");
var _errorTransform = require("./utils/errorTransform.js");
var _variance = require("../../function/statistics/variance.js");
var _lastDimToZeroBase = require("./utils/lastDimToZeroBase.js");
const name = 'variance';
const dependencies = ['typed', 'add', 'subtract', 'multiply', 'divide', 'mapSlices', 'isNaN'];

/**
 * Attach a transform function to math.var
 * Adds a property transform containing the transform function.
 *
 * This transform changed the `dim` parameter of function var
 * from one-based to zero based
 */
const createVarianceTransform = exports.createVarianceTransform = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    add,
    subtract,
    multiply,
    divide,
    mapSlices,
    isNaN: mathIsNaN
  } = _ref;
  const variance = (0, _variance.createVariance)({
    typed,
    add,
    subtract,
    multiply,
    divide,
    mapSlices,
    isNaN: mathIsNaN
  });
  return typed(name, {
    '...any': function (args) {
      args = (0, _lastDimToZeroBase.lastDimToZeroBase)(args);
      try {
        return variance.apply(null, args);
      } catch (err) {
        throw (0, _errorTransform.errorTransform)(err);
      }
    }
  });
}, {
  isTransformFunction: true
});
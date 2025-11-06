"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStdTransform = void 0;
var _factory = require("../../utils/factory.js");
var _std = require("../../function/statistics/std.js");
var _errorTransform = require("./utils/errorTransform.js");
var _lastDimToZeroBase = require("./utils/lastDimToZeroBase.js");
const name = 'std';
const dependencies = ['typed', 'map', 'sqrt', 'variance'];

/**
 * Attach a transform function to math.std
 * Adds a property transform containing the transform function.
 *
 * This transform changed the `dim` parameter of function std
 * from one-based to zero based
 */
const createStdTransform = exports.createStdTransform = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    map,
    sqrt,
    variance
  } = _ref;
  const std = (0, _std.createStd)({
    typed,
    map,
    sqrt,
    variance
  });
  return typed('std', {
    '...any': function (args) {
      args = (0, _lastDimToZeroBase.lastDimToZeroBase)(args);
      try {
        return std.apply(null, args);
      } catch (err) {
        throw (0, _errorTransform.errorTransform)(err);
      }
    }
  });
}, {
  isTransformFunction: true
});
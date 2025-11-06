"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMapSlicesTransform = void 0;
var _errorTransform = require("./utils/errorTransform.js");
var _factory = require("../../utils/factory.js");
var _mapSlices = require("../../function/matrix/mapSlices.js");
var _is = require("../../utils/is.js");
const name = 'mapSlices';
const dependencies = ['typed', 'isInteger'];

/**
 * Attach a transform function to math.mapSlices
 * Adds a property transform containing the transform function.
 *
 * This transform changed the last `dim` parameter of function mapSlices
 * from one-based to zero based
 */
const createMapSlicesTransform = exports.createMapSlicesTransform = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    isInteger
  } = _ref;
  const mapSlices = (0, _mapSlices.createMapSlices)({
    typed,
    isInteger
  });

  // @see: comment of concat itself
  return typed('mapSlices', {
    '...any': function (args) {
      // change dim from one-based to zero-based
      const dim = args[1];
      if ((0, _is.isNumber)(dim)) {
        args[1] = dim - 1;
      } else if ((0, _is.isBigNumber)(dim)) {
        args[1] = dim.minus(1);
      }
      try {
        return mapSlices.apply(null, args);
      } catch (err) {
        throw (0, _errorTransform.errorTransform)(err);
      }
    }
  });
}, {
  isTransformFunction: true,
  ..._mapSlices.createMapSlices.meta
});
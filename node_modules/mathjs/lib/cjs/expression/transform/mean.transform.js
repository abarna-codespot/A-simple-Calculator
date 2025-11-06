"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMeanTransform = void 0;
var _factory = require("../../utils/factory.js");
var _errorTransform = require("./utils/errorTransform.js");
var _mean = require("../../function/statistics/mean.js");
var _lastDimToZeroBase = require("./utils/lastDimToZeroBase.js");
const name = 'mean';
const dependencies = ['typed', 'add', 'divide'];
const createMeanTransform = exports.createMeanTransform = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    add,
    divide
  } = _ref;
  const mean = (0, _mean.createMean)({
    typed,
    add,
    divide
  });

  /**
   * Attach a transform function to math.mean
   * Adds a property transform containing the transform function.
   *
   * This transform changed the last `dim` parameter of function mean
   * from one-based to zero based
   */
  return typed('mean', {
    '...any': function (args) {
      args = (0, _lastDimToZeroBase.lastDimToZeroBase)(args);
      try {
        return mean.apply(null, args);
      } catch (err) {
        throw (0, _errorTransform.errorTransform)(err);
      }
    }
  });
}, {
  isTransformFunction: true
});
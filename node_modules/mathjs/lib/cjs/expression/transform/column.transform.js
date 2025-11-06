"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createColumnTransform = void 0;
var _errorTransform = require("./utils/errorTransform.js");
var _factory = require("../../utils/factory.js");
var _column = require("../../function/matrix/column.js");
var _is = require("../../utils/is.js");
const name = 'column';
const dependencies = ['typed', 'Index', 'matrix', 'range'];

/**
 * Attach a transform function to matrix.column
 * Adds a property transform containing the transform function.
 *
 * This transform changed the last `index` parameter of function column
 * from zero-based to one-based
 */
const createColumnTransform = exports.createColumnTransform = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    Index,
    matrix,
    range
  } = _ref;
  const column = (0, _column.createColumn)({
    typed,
    Index,
    matrix,
    range
  });

  // @see: comment of column itself
  return typed('column', {
    '...any': function (args) {
      // change last argument from zero-based to one-based
      const lastIndex = args.length - 1;
      const last = args[lastIndex];
      if ((0, _is.isNumber)(last)) {
        args[lastIndex] = last - 1;
      }
      try {
        return column.apply(null, args);
      } catch (err) {
        throw (0, _errorTransform.errorTransform)(err);
      }
    }
  });
}, {
  isTransformFunction: true
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRowTransform = void 0;
var _factory = require("../../utils/factory.js");
var _row = require("../../function/matrix/row.js");
var _errorTransform = require("./utils/errorTransform.js");
var _is = require("../../utils/is.js");
const name = 'row';
const dependencies = ['typed', 'Index', 'matrix', 'range'];

/**
 * Attach a transform function to matrix.column
 * Adds a property transform containing the transform function.
 *
 * This transform changed the last `index` parameter of function column
 * from zero-based to one-based
 */
const createRowTransform = exports.createRowTransform = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    Index,
    matrix,
    range
  } = _ref;
  const row = (0, _row.createRow)({
    typed,
    Index,
    matrix,
    range
  });

  // @see: comment of row itself
  return typed('row', {
    '...any': function (args) {
      // change last argument from zero-based to one-based
      const lastIndex = args.length - 1;
      const last = args[lastIndex];
      if ((0, _is.isNumber)(last)) {
        args[lastIndex] = last - 1;
      }
      try {
        return row.apply(null, args);
      } catch (err) {
        throw (0, _errorTransform.errorTransform)(err);
      }
    }
  });
}, {
  isTransformFunction: true
});
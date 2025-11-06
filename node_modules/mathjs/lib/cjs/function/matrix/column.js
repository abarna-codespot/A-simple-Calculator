"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createColumn = void 0;
var _factory = require("../../utils/factory.js");
var _is = require("../../utils/is.js");
var _object = require("../../utils/object.js");
var _array = require("../../utils/array.js");
const name = 'column';
const dependencies = ['typed', 'Index', 'matrix', 'range'];
const createColumn = exports.createColumn = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    Index,
    matrix,
    range
  } = _ref;
  /**
   * Return a column from a Matrix.
   *
   * Syntax:
   *
   *     math.column(value, index)
   *
   * Example:
   *
   *     // get a column
   *     const d = [[1, 2], [3, 4]]
   *     math.column(d, 1) // returns [[2], [4]]
   *
   * See also:
   *
   *     row
   *
   * @param {Array | Matrix } value   An array or matrix
   * @param {number} column           The index of the column
   * @return {Array | Matrix}         The retrieved column
   */
  return typed(name, {
    'Matrix, number': _column,
    'Array, number': function (value, column) {
      return _column(matrix((0, _object.clone)(value)), column).valueOf();
    }
  });

  /**
   * Retrieve a column of a matrix
   * @param {Matrix } value  A matrix
   * @param {number} column  The index of the column
   * @return {Matrix}        The retrieved column
   */
  function _column(value, column) {
    // check dimensions
    if (value.size().length !== 2) {
      throw new Error('Only two dimensional matrix is supported');
    }
    (0, _array.validateIndex)(column, value.size()[1]);
    const rowRange = range(0, value.size()[0]);
    const index = new Index(rowRange, [column]);
    const result = value.subset(index);
    // once config.legacySubset just return result
    return (0, _is.isMatrix)(result) ? result : matrix([[result]]);
  }
});
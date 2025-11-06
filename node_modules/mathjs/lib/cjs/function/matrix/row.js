"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRow = void 0;
var _factory = require("../../utils/factory.js");
var _is = require("../../utils/is.js");
var _object = require("../../utils/object.js");
var _array = require("../../utils/array.js");
const name = 'row';
const dependencies = ['typed', 'Index', 'matrix', 'range'];
const createRow = exports.createRow = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    Index,
    matrix,
    range
  } = _ref;
  /**
   * Return a row from a Matrix.
   *
   * Syntax:
   *
   *     math.row(value, index)
   *
   * Example:
   *
   *     // get a row
   *     const d = [[1, 2], [3, 4]]
   *     math.row(d, 1) // returns [[3, 4]]
   *
   * See also:
   *
   *     column
   *
   * @param {Array | Matrix } value   An array or matrix
   * @param {number} row              The index of the row
   * @return {Array | Matrix}         The retrieved row
   */
  return typed(name, {
    'Matrix, number': _row,
    'Array, number': function (value, row) {
      return _row(matrix((0, _object.clone)(value)), row).valueOf();
    }
  });

  /**
   * Retrieve a row of a matrix
   * @param {Matrix } value  A matrix
   * @param {number} row     The index of the row
   * @return {Matrix}        The retrieved row
   */
  function _row(value, row) {
    // check dimensions
    if (value.size().length !== 2) {
      throw new Error('Only two dimensional matrix is supported');
    }
    (0, _array.validateIndex)(row, value.size()[0]);
    const columnRange = range(0, value.size()[1]);
    const index = new Index([row], columnRange);
    const result = value.subset(index);
    // once config.legacySubset just return result
    return (0, _is.isMatrix)(result) ? result : matrix([[result]]);
  }
});
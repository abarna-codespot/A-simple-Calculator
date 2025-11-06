"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createQuantileSeqTransform = void 0;
var _factory = require("../../utils/factory.js");
var _quantileSeq = require("../../function/statistics/quantileSeq.js");
var _lastDimToZeroBase = require("./utils/lastDimToZeroBase.js");
const name = 'quantileSeq';
const dependencies = ['typed', 'bignumber', 'add', 'subtract', 'divide', 'multiply', 'partitionSelect', 'compare', 'isInteger', 'smaller', 'smallerEq', 'larger', 'mapSlices'];

/**
 * Attach a transform function to math.quantileSeq
 * Adds a property transform containing the transform function.
 *
 * This transform changed the `dim` parameter of function std
 * from one-based to zero based
 */
const createQuantileSeqTransform = exports.createQuantileSeqTransform = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    bignumber,
    add,
    subtract,
    divide,
    multiply,
    partitionSelect,
    compare,
    isInteger,
    smaller,
    smallerEq,
    larger,
    mapSlices
  } = _ref;
  const quantileSeq = (0, _quantileSeq.createQuantileSeq)({
    typed,
    bignumber,
    add,
    subtract,
    divide,
    multiply,
    partitionSelect,
    compare,
    isInteger,
    smaller,
    smallerEq,
    larger,
    mapSlices
  });
  return typed('quantileSeq', {
    'Array | Matrix, number | BigNumber': quantileSeq,
    'Array | Matrix, number | BigNumber, number': (arr, prob, dim) => quantileSeq(arr, prob, dimToZeroBase(dim)),
    'Array | Matrix, number | BigNumber, boolean': quantileSeq,
    'Array | Matrix, number | BigNumber, boolean, number': (arr, prob, sorted, dim) => quantileSeq(arr, prob, sorted, dimToZeroBase(dim)),
    'Array | Matrix, Array | Matrix': quantileSeq,
    'Array | Matrix, Array | Matrix, number': (data, prob, dim) => quantileSeq(data, prob, dimToZeroBase(dim)),
    'Array | Matrix, Array | Matrix, boolean': quantileSeq,
    'Array | Matrix, Array | Matrix, boolean, number': (data, prob, sorted, dim) => quantileSeq(data, prob, sorted, dimToZeroBase(dim))
  });
  function dimToZeroBase(dim) {
    // TODO: find a better way, maybe lastDimToZeroBase could apply to more cases.
    return (0, _lastDimToZeroBase.lastDimToZeroBase)([[], dim])[1];
  }
}, {
  isTransformFunction: true
});
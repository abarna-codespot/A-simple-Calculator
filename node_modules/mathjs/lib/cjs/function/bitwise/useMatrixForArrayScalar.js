"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUseMatrixForArrayScalar = void 0;
var _factory = require("../../utils/factory.js");
const createUseMatrixForArrayScalar = exports.createUseMatrixForArrayScalar = /* #__PURE__ */(0, _factory.factory)('useMatrixForArrayScalar', ['typed', 'matrix'], _ref => {
  let {
    typed,
    matrix
  } = _ref;
  return {
    'Array, number': typed.referTo('DenseMatrix, number', selfDn => (x, y) => selfDn(matrix(x), y).valueOf()),
    'Array, BigNumber': typed.referTo('DenseMatrix, BigNumber', selfDB => (x, y) => selfDB(matrix(x), y).valueOf()),
    'number, Array': typed.referTo('number, DenseMatrix', selfnD => (x, y) => selfnD(x, matrix(y)).valueOf()),
    'BigNumber, Array': typed.referTo('BigNumber, DenseMatrix', selfBD => (x, y) => selfBD(x, matrix(y)).valueOf())
  };
});
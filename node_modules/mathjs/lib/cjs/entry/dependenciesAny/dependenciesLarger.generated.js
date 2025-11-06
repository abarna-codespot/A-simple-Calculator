"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.largerDependencies = void 0;
var _dependenciesDenseMatrixClassGenerated = require("./dependenciesDenseMatrixClass.generated.js");
var _dependenciesSparseMatrixClassGenerated = require("./dependenciesSparseMatrixClass.generated.js");
var _dependenciesBignumberGenerated = require("./dependenciesBignumber.generated.js");
var _dependenciesConcatGenerated = require("./dependenciesConcat.generated.js");
var _dependenciesMatrixGenerated = require("./dependenciesMatrix.generated.js");
var _dependenciesTypedGenerated = require("./dependenciesTyped.generated.js");
var _factoriesAny = require("../../factoriesAny.js");
/**
 * THIS FILE IS AUTO-GENERATED
 * DON'T MAKE CHANGES HERE
 */

const largerDependencies = exports.largerDependencies = {
  DenseMatrixDependencies: _dependenciesDenseMatrixClassGenerated.DenseMatrixDependencies,
  SparseMatrixDependencies: _dependenciesSparseMatrixClassGenerated.SparseMatrixDependencies,
  bignumberDependencies: _dependenciesBignumberGenerated.bignumberDependencies,
  concatDependencies: _dependenciesConcatGenerated.concatDependencies,
  matrixDependencies: _dependenciesMatrixGenerated.matrixDependencies,
  typedDependencies: _dependenciesTypedGenerated.typedDependencies,
  createLarger: _factoriesAny.createLarger
};
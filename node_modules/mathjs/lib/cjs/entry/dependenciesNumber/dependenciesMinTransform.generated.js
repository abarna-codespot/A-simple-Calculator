"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.minTransformDependencies = void 0;
var _dependenciesIsNaNGenerated = require("./dependenciesIsNaN.generated.js");
var _dependenciesNumericGenerated = require("./dependenciesNumeric.generated.js");
var _dependenciesSmallerGenerated = require("./dependenciesSmaller.generated.js");
var _dependenciesTypedGenerated = require("./dependenciesTyped.generated.js");
var _factoriesNumber = require("../../factoriesNumber.js");
/**
 * THIS FILE IS AUTO-GENERATED
 * DON'T MAKE CHANGES HERE
 */

const minTransformDependencies = exports.minTransformDependencies = {
  isNaNDependencies: _dependenciesIsNaNGenerated.isNaNDependencies,
  numericDependencies: _dependenciesNumericGenerated.numericDependencies,
  smallerDependencies: _dependenciesSmallerGenerated.smallerDependencies,
  typedDependencies: _dependenciesTypedGenerated.typedDependencies,
  createMinTransform: _factoriesNumber.createMinTransform
};
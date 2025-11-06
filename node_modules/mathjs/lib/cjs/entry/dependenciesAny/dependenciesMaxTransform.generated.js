"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maxTransformDependencies = void 0;
var _dependenciesIsNaNGenerated = require("./dependenciesIsNaN.generated.js");
var _dependenciesLargerGenerated = require("./dependenciesLarger.generated.js");
var _dependenciesNumericGenerated = require("./dependenciesNumeric.generated.js");
var _dependenciesTypedGenerated = require("./dependenciesTyped.generated.js");
var _factoriesAny = require("../../factoriesAny.js");
/**
 * THIS FILE IS AUTO-GENERATED
 * DON'T MAKE CHANGES HERE
 */

const maxTransformDependencies = exports.maxTransformDependencies = {
  isNaNDependencies: _dependenciesIsNaNGenerated.isNaNDependencies,
  largerDependencies: _dependenciesLargerGenerated.largerDependencies,
  numericDependencies: _dependenciesNumericGenerated.numericDependencies,
  typedDependencies: _dependenciesTypedGenerated.typedDependencies,
  createMaxTransform: _factoriesAny.createMaxTransform
};
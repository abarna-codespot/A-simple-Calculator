"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFiniteDependencies = void 0;
var _dependenciesIsBoundedGenerated = require("./dependenciesIsBounded.generated.js");
var _dependenciesMapGenerated = require("./dependenciesMap.generated.js");
var _dependenciesTypedGenerated = require("./dependenciesTyped.generated.js");
var _factoriesAny = require("../../factoriesAny.js");
/**
 * THIS FILE IS AUTO-GENERATED
 * DON'T MAKE CHANGES HERE
 */

const isFiniteDependencies = exports.isFiniteDependencies = {
  isBoundedDependencies: _dependenciesIsBoundedGenerated.isBoundedDependencies,
  mapDependencies: _dependenciesMapGenerated.mapDependencies,
  typedDependencies: _dependenciesTypedGenerated.typedDependencies,
  createIsFinite: _factoriesAny.createIsFinite
};
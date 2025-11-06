"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.simplifyDependencies = void 0;
var _dependenciesAccessorNodeGenerated = require("./dependenciesAccessorNode.generated.js");
var _dependenciesArrayNodeGenerated = require("./dependenciesArrayNode.generated.js");
var _dependenciesConstantNodeGenerated = require("./dependenciesConstantNode.generated.js");
var _dependenciesFunctionNodeGenerated = require("./dependenciesFunctionNode.generated.js");
var _dependenciesIndexNodeGenerated = require("./dependenciesIndexNode.generated.js");
var _dependenciesObjectNodeGenerated = require("./dependenciesObjectNode.generated.js");
var _dependenciesOperatorNodeGenerated = require("./dependenciesOperatorNode.generated.js");
var _dependenciesParenthesisNodeGenerated = require("./dependenciesParenthesisNode.generated.js");
var _dependenciesSymbolNodeGenerated = require("./dependenciesSymbolNode.generated.js");
var _dependenciesEqualGenerated = require("./dependenciesEqual.generated.js");
var _dependenciesParseGenerated = require("./dependenciesParse.generated.js");
var _dependenciesReplacerGenerated = require("./dependenciesReplacer.generated.js");
var _dependenciesResolveGenerated = require("./dependenciesResolve.generated.js");
var _dependenciesSimplifyConstantGenerated = require("./dependenciesSimplifyConstant.generated.js");
var _dependenciesSimplifyCoreGenerated = require("./dependenciesSimplifyCore.generated.js");
var _dependenciesTypedGenerated = require("./dependenciesTyped.generated.js");
var _factoriesAny = require("../../factoriesAny.js");
/**
 * THIS FILE IS AUTO-GENERATED
 * DON'T MAKE CHANGES HERE
 */

const simplifyDependencies = exports.simplifyDependencies = {
  AccessorNodeDependencies: _dependenciesAccessorNodeGenerated.AccessorNodeDependencies,
  ArrayNodeDependencies: _dependenciesArrayNodeGenerated.ArrayNodeDependencies,
  ConstantNodeDependencies: _dependenciesConstantNodeGenerated.ConstantNodeDependencies,
  FunctionNodeDependencies: _dependenciesFunctionNodeGenerated.FunctionNodeDependencies,
  IndexNodeDependencies: _dependenciesIndexNodeGenerated.IndexNodeDependencies,
  ObjectNodeDependencies: _dependenciesObjectNodeGenerated.ObjectNodeDependencies,
  OperatorNodeDependencies: _dependenciesOperatorNodeGenerated.OperatorNodeDependencies,
  ParenthesisNodeDependencies: _dependenciesParenthesisNodeGenerated.ParenthesisNodeDependencies,
  SymbolNodeDependencies: _dependenciesSymbolNodeGenerated.SymbolNodeDependencies,
  equalDependencies: _dependenciesEqualGenerated.equalDependencies,
  parseDependencies: _dependenciesParseGenerated.parseDependencies,
  replacerDependencies: _dependenciesReplacerGenerated.replacerDependencies,
  resolveDependencies: _dependenciesResolveGenerated.resolveDependencies,
  simplifyConstantDependencies: _dependenciesSimplifyConstantGenerated.simplifyConstantDependencies,
  simplifyCoreDependencies: _dependenciesSimplifyCoreGenerated.simplifyCoreDependencies,
  typedDependencies: _dependenciesTypedGenerated.typedDependencies,
  createSimplify: _factoriesAny.createSimplify
};
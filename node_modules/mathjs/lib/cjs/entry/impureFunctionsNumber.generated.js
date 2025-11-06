"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.derivative = exports.compile = exports.chain = exports.SymbolNode = exports.RelationalNode = exports.RangeNode = exports.Parser = exports.ParenthesisNode = exports.OperatorNode = exports.ObjectNode = exports.Node = exports.IndexNode = exports.Help = exports.FunctionNode = exports.FunctionAssignmentNode = exports.ConstantNode = exports.ConditionalNode = exports.Chain = exports.BlockNode = exports.AssignmentNode = exports.ArrayNode = exports.AccessorNode = void 0;
Object.defineProperty(exports, "docs", {
  enumerable: true,
  get: function () {
    return _embeddedDocs.embeddedDocs;
  }
});
exports.simplifyCore = exports.simplifyConstant = exports.simplify = exports.reviver = exports.resolve = exports.rationalize = exports.parser = exports.parse = exports.help = exports.evaluate = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _configReadonly = require("./configReadonly.js");
var _factoriesNumber = require("../factoriesNumber.js");
var _pureFunctionsNumberGenerated = require("./pureFunctionsNumber.generated.js");
var _embeddedDocs = require("../expression/embeddedDocs/embeddedDocs.js");
/**
 * THIS FILE IS AUTO-GENERATED
 * DON'T MAKE CHANGES HERE
 */

const math = {}; // NOT pure!
const mathWithTransform = {}; // NOT pure!
const classes = {}; // NOT pure!

const Chain = exports.Chain = (0, _factoriesNumber.createChainClass)({
  math,
  typed: _pureFunctionsNumberGenerated.typed
});
const Node = exports.Node = (0, _factoriesNumber.createNode)({
  mathWithTransform
});
const ObjectNode = exports.ObjectNode = (0, _factoriesNumber.createObjectNode)({
  Node
});
const RangeNode = exports.RangeNode = (0, _factoriesNumber.createRangeNode)({
  Node
});
const RelationalNode = exports.RelationalNode = (0, _factoriesNumber.createRelationalNode)({
  Node
});
const reviver = exports.reviver = (0, _factoriesNumber.createReviver)({
  classes
});
const SymbolNode = exports.SymbolNode = (0, _factoriesNumber.createSymbolNode)({
  Node,
  math
});
const AccessorNode = exports.AccessorNode = (0, _factoriesNumber.createAccessorNode)({
  Node,
  subset: _pureFunctionsNumberGenerated.subset
});
const AssignmentNode = exports.AssignmentNode = (0, _factoriesNumber.createAssignmentNode)({
  matrix: _pureFunctionsNumberGenerated.matrix,
  Node,
  subset: _pureFunctionsNumberGenerated.subset
});
const chain = exports.chain = (0, _factoriesNumber.createChain)({
  Chain,
  typed: _pureFunctionsNumberGenerated.typed
});
const ConditionalNode = exports.ConditionalNode = (0, _factoriesNumber.createConditionalNode)({
  Node
});
const FunctionNode = exports.FunctionNode = (0, _factoriesNumber.createFunctionNode)({
  Node,
  SymbolNode,
  math
});
const IndexNode = exports.IndexNode = (0, _factoriesNumber.createIndexNode)({
  Node,
  size: _pureFunctionsNumberGenerated.size
});
const OperatorNode = exports.OperatorNode = (0, _factoriesNumber.createOperatorNode)({
  Node
});
const ArrayNode = exports.ArrayNode = (0, _factoriesNumber.createArrayNode)({
  Node
});
const FunctionAssignmentNode = exports.FunctionAssignmentNode = (0, _factoriesNumber.createFunctionAssignmentNode)({
  Node,
  typed: _pureFunctionsNumberGenerated.typed
});
const BlockNode = exports.BlockNode = (0, _factoriesNumber.createBlockNode)({
  Node,
  ResultSet: _pureFunctionsNumberGenerated.ResultSet
});
const ConstantNode = exports.ConstantNode = (0, _factoriesNumber.createConstantNode)({
  Node,
  isBounded: _pureFunctionsNumberGenerated.isBounded
});
const simplifyConstant = exports.simplifyConstant = (0, _factoriesNumber.createSimplifyConstant)({
  AccessorNode,
  ArrayNode,
  ConstantNode,
  FunctionNode,
  IndexNode,
  ObjectNode,
  OperatorNode,
  SymbolNode,
  config: _configReadonly.config,
  isBounded: _pureFunctionsNumberGenerated.isBounded,
  mathWithTransform,
  matrix: _pureFunctionsNumberGenerated.matrix,
  typed: _pureFunctionsNumberGenerated.typed
});
const ParenthesisNode = exports.ParenthesisNode = (0, _factoriesNumber.createParenthesisNode)({
  Node
});
const parse = exports.parse = (0, _factoriesNumber.createParse)({
  AccessorNode,
  ArrayNode,
  AssignmentNode,
  BlockNode,
  ConditionalNode,
  ConstantNode,
  FunctionAssignmentNode,
  FunctionNode,
  IndexNode,
  ObjectNode,
  OperatorNode,
  ParenthesisNode,
  RangeNode,
  RelationalNode,
  SymbolNode,
  config: _configReadonly.config,
  numeric: _pureFunctionsNumberGenerated.numeric,
  typed: _pureFunctionsNumberGenerated.typed
});
const resolve = exports.resolve = (0, _factoriesNumber.createResolve)({
  ConstantNode,
  FunctionNode,
  OperatorNode,
  ParenthesisNode,
  parse,
  typed: _pureFunctionsNumberGenerated.typed
});
const simplifyCore = exports.simplifyCore = (0, _factoriesNumber.createSimplifyCore)({
  AccessorNode,
  ArrayNode,
  ConstantNode,
  FunctionNode,
  IndexNode,
  ObjectNode,
  OperatorNode,
  ParenthesisNode,
  SymbolNode,
  add: _pureFunctionsNumberGenerated.add,
  divide: _pureFunctionsNumberGenerated.divide,
  equal: _pureFunctionsNumberGenerated.equal,
  isZero: _pureFunctionsNumberGenerated.isZero,
  multiply: _pureFunctionsNumberGenerated.multiply,
  parse,
  pow: _pureFunctionsNumberGenerated.pow,
  subtract: _pureFunctionsNumberGenerated.subtract,
  typed: _pureFunctionsNumberGenerated.typed
});
const compile = exports.compile = (0, _factoriesNumber.createCompile)({
  parse,
  typed: _pureFunctionsNumberGenerated.typed
});
const evaluate = exports.evaluate = (0, _factoriesNumber.createEvaluate)({
  parse,
  typed: _pureFunctionsNumberGenerated.typed
});
const Help = exports.Help = (0, _factoriesNumber.createHelpClass)({
  evaluate
});
const Parser = exports.Parser = (0, _factoriesNumber.createParserClass)({
  evaluate,
  parse
});
const simplify = exports.simplify = (0, _factoriesNumber.createSimplify)({
  AccessorNode,
  ArrayNode,
  ConstantNode,
  FunctionNode,
  IndexNode,
  ObjectNode,
  OperatorNode,
  ParenthesisNode,
  SymbolNode,
  equal: _pureFunctionsNumberGenerated.equal,
  parse,
  replacer: _pureFunctionsNumberGenerated.replacer,
  resolve,
  simplifyConstant,
  simplifyCore,
  typed: _pureFunctionsNumberGenerated.typed
});
const derivative = exports.derivative = (0, _factoriesNumber.createDerivative)({
  ConstantNode,
  FunctionNode,
  OperatorNode,
  ParenthesisNode,
  SymbolNode,
  config: _configReadonly.config,
  equal: _pureFunctionsNumberGenerated.equal,
  isZero: _pureFunctionsNumberGenerated.isZero,
  numeric: _pureFunctionsNumberGenerated.numeric,
  parse,
  simplify,
  typed: _pureFunctionsNumberGenerated.typed
});
const help = exports.help = (0, _factoriesNumber.createHelp)({
  Help,
  mathWithTransform,
  typed: _pureFunctionsNumberGenerated.typed
});
const parser = exports.parser = (0, _factoriesNumber.createParser)({
  Parser,
  typed: _pureFunctionsNumberGenerated.typed
});
const rationalize = exports.rationalize = (0, _factoriesNumber.createRationalize)({
  AccessorNode,
  ArrayNode,
  ConstantNode,
  FunctionNode,
  IndexNode,
  ObjectNode,
  OperatorNode,
  ParenthesisNode,
  SymbolNode,
  add: _pureFunctionsNumberGenerated.add,
  config: _configReadonly.config,
  divide: _pureFunctionsNumberGenerated.divide,
  equal: _pureFunctionsNumberGenerated.equal,
  isZero: _pureFunctionsNumberGenerated.isZero,
  mathWithTransform,
  matrix: _pureFunctionsNumberGenerated.matrix,
  multiply: _pureFunctionsNumberGenerated.multiply,
  parse,
  pow: _pureFunctionsNumberGenerated.pow,
  simplify,
  simplifyConstant,
  simplifyCore,
  subtract: _pureFunctionsNumberGenerated.subtract,
  typed: _pureFunctionsNumberGenerated.typed
});
(0, _extends2.default)(math, {
  e: _pureFunctionsNumberGenerated.e,
  false: _pureFunctionsNumberGenerated._false,
  index: _pureFunctionsNumberGenerated.index,
  Infinity: _pureFunctionsNumberGenerated._Infinity,
  LN10: _pureFunctionsNumberGenerated.LN10,
  LOG10E: _pureFunctionsNumberGenerated.LOG10E,
  matrix: _pureFunctionsNumberGenerated.matrix,
  NaN: _pureFunctionsNumberGenerated._NaN,
  null: _pureFunctionsNumberGenerated._null,
  phi: _pureFunctionsNumberGenerated.phi,
  replacer: _pureFunctionsNumberGenerated.replacer,
  SQRT1_2: _pureFunctionsNumberGenerated.SQRT1_2,
  subset: _pureFunctionsNumberGenerated.subset,
  tau: _pureFunctionsNumberGenerated.tau,
  typed: _pureFunctionsNumberGenerated.typed,
  unaryPlus: _pureFunctionsNumberGenerated.unaryPlus,
  'E': _pureFunctionsNumberGenerated.e,
  version: _pureFunctionsNumberGenerated.version,
  xor: _pureFunctionsNumberGenerated.xor,
  abs: _pureFunctionsNumberGenerated.abs,
  acos: _pureFunctionsNumberGenerated.acos,
  acot: _pureFunctionsNumberGenerated.acot,
  acsc: _pureFunctionsNumberGenerated.acsc,
  add: _pureFunctionsNumberGenerated.add,
  and: _pureFunctionsNumberGenerated.and,
  asec: _pureFunctionsNumberGenerated.asec,
  asin: _pureFunctionsNumberGenerated.asin,
  atan: _pureFunctionsNumberGenerated.atan,
  atanh: _pureFunctionsNumberGenerated.atanh,
  bigint: _pureFunctionsNumberGenerated.bigint,
  bitNot: _pureFunctionsNumberGenerated.bitNot,
  bitXor: _pureFunctionsNumberGenerated.bitXor,
  boolean: _pureFunctionsNumberGenerated.boolean,
  cbrt: _pureFunctionsNumberGenerated.cbrt,
  combinations: _pureFunctionsNumberGenerated.combinations,
  compare: _pureFunctionsNumberGenerated.compare,
  compareText: _pureFunctionsNumberGenerated.compareText,
  cos: _pureFunctionsNumberGenerated.cos,
  cot: _pureFunctionsNumberGenerated.cot,
  csc: _pureFunctionsNumberGenerated.csc,
  cube: _pureFunctionsNumberGenerated.cube,
  divide: _pureFunctionsNumberGenerated.divide,
  equalScalar: _pureFunctionsNumberGenerated.equalScalar,
  erf: _pureFunctionsNumberGenerated.erf,
  exp: _pureFunctionsNumberGenerated.exp,
  filter: _pureFunctionsNumberGenerated.filter,
  forEach: _pureFunctionsNumberGenerated.forEach,
  format: _pureFunctionsNumberGenerated.format,
  gamma: _pureFunctionsNumberGenerated.gamma,
  isBounded: _pureFunctionsNumberGenerated.isBounded,
  isInteger: _pureFunctionsNumberGenerated.isInteger,
  isNegative: _pureFunctionsNumberGenerated.isNegative,
  isPositive: _pureFunctionsNumberGenerated.isPositive,
  isZero: _pureFunctionsNumberGenerated.isZero,
  LOG2E: _pureFunctionsNumberGenerated.LOG2E,
  largerEq: _pureFunctionsNumberGenerated.largerEq,
  leftShift: _pureFunctionsNumberGenerated.leftShift,
  log: _pureFunctionsNumberGenerated.log,
  log1p: _pureFunctionsNumberGenerated.log1p,
  map: _pureFunctionsNumberGenerated.map,
  mean: _pureFunctionsNumberGenerated.mean,
  mod: _pureFunctionsNumberGenerated.mod,
  multiply: _pureFunctionsNumberGenerated.multiply,
  not: _pureFunctionsNumberGenerated.not,
  number: _pureFunctionsNumberGenerated.number,
  or: _pureFunctionsNumberGenerated.or,
  pi: _pureFunctionsNumberGenerated.pi,
  pow: _pureFunctionsNumberGenerated.pow,
  random: _pureFunctionsNumberGenerated.random,
  reviver,
  rightLogShift: _pureFunctionsNumberGenerated.rightLogShift,
  SQRT2: _pureFunctionsNumberGenerated.SQRT2,
  sech: _pureFunctionsNumberGenerated.sech,
  sin: _pureFunctionsNumberGenerated.sin,
  size: _pureFunctionsNumberGenerated.size,
  smallerEq: _pureFunctionsNumberGenerated.smallerEq,
  square: _pureFunctionsNumberGenerated.square,
  string: _pureFunctionsNumberGenerated.string,
  subtract: _pureFunctionsNumberGenerated.subtract,
  tanh: _pureFunctionsNumberGenerated.tanh,
  typeOf: _pureFunctionsNumberGenerated.typeOf,
  unequal: _pureFunctionsNumberGenerated.unequal,
  xgcd: _pureFunctionsNumberGenerated.xgcd,
  acoth: _pureFunctionsNumberGenerated.acoth,
  addScalar: _pureFunctionsNumberGenerated.addScalar,
  asech: _pureFunctionsNumberGenerated.asech,
  bernoulli: _pureFunctionsNumberGenerated.bernoulli,
  bitOr: _pureFunctionsNumberGenerated.bitOr,
  chain,
  combinationsWithRep: _pureFunctionsNumberGenerated.combinationsWithRep,
  cosh: _pureFunctionsNumberGenerated.cosh,
  csch: _pureFunctionsNumberGenerated.csch,
  divideScalar: _pureFunctionsNumberGenerated.divideScalar,
  equalText: _pureFunctionsNumberGenerated.equalText,
  expm1: _pureFunctionsNumberGenerated.expm1,
  isNaN: _pureFunctionsNumberGenerated.isNaN,
  isPrime: _pureFunctionsNumberGenerated.isPrime,
  larger: _pureFunctionsNumberGenerated.larger,
  lgamma: _pureFunctionsNumberGenerated.lgamma,
  log2: _pureFunctionsNumberGenerated.log2,
  mapSlices: _pureFunctionsNumberGenerated.mapSlices,
  multiplyScalar: _pureFunctionsNumberGenerated.multiplyScalar,
  nthRoot: _pureFunctionsNumberGenerated.nthRoot,
  pickRandom: _pureFunctionsNumberGenerated.pickRandom,
  randomInt: _pureFunctionsNumberGenerated.randomInt,
  rightArithShift: _pureFunctionsNumberGenerated.rightArithShift,
  sec: _pureFunctionsNumberGenerated.sec,
  sinh: _pureFunctionsNumberGenerated.sinh,
  sqrt: _pureFunctionsNumberGenerated.sqrt,
  tan: _pureFunctionsNumberGenerated.tan,
  unaryMinus: _pureFunctionsNumberGenerated.unaryMinus,
  variance: _pureFunctionsNumberGenerated.variance,
  acosh: _pureFunctionsNumberGenerated.acosh,
  atan2: _pureFunctionsNumberGenerated.atan2,
  bitAnd: _pureFunctionsNumberGenerated.bitAnd,
  catalan: _pureFunctionsNumberGenerated.catalan,
  clone: _pureFunctionsNumberGenerated.clone,
  composition: _pureFunctionsNumberGenerated.composition,
  coth: _pureFunctionsNumberGenerated.coth,
  equal: _pureFunctionsNumberGenerated.equal,
  factorial: _pureFunctionsNumberGenerated.factorial,
  isFinite: _pureFunctionsNumberGenerated.isFinite,
  LN2: _pureFunctionsNumberGenerated.LN2,
  log10: _pureFunctionsNumberGenerated.log10,
  multinomial: _pureFunctionsNumberGenerated.multinomial,
  numeric: _pureFunctionsNumberGenerated.numeric,
  permutations: _pureFunctionsNumberGenerated.permutations,
  prod: _pureFunctionsNumberGenerated.prod,
  round: _pureFunctionsNumberGenerated.round,
  smaller: _pureFunctionsNumberGenerated.smaller,
  subtractScalar: _pureFunctionsNumberGenerated.subtractScalar,
  'PI': _pureFunctionsNumberGenerated.pi,
  zeta: _pureFunctionsNumberGenerated.zeta,
  acsch: _pureFunctionsNumberGenerated.acsch,
  compareNatural: _pureFunctionsNumberGenerated.compareNatural,
  cumsum: _pureFunctionsNumberGenerated.cumsum,
  floor: _pureFunctionsNumberGenerated.floor,
  hypot: _pureFunctionsNumberGenerated.hypot,
  lcm: _pureFunctionsNumberGenerated.lcm,
  max: _pureFunctionsNumberGenerated.max,
  min: _pureFunctionsNumberGenerated.min,
  norm: _pureFunctionsNumberGenerated.norm,
  print: _pureFunctionsNumberGenerated.print,
  range: _pureFunctionsNumberGenerated.range,
  sign: _pureFunctionsNumberGenerated.sign,
  simplifyConstant,
  std: _pureFunctionsNumberGenerated.std,
  sum: _pureFunctionsNumberGenerated.sum,
  asinh: _pureFunctionsNumberGenerated.asinh,
  ceil: _pureFunctionsNumberGenerated.ceil,
  corr: _pureFunctionsNumberGenerated.corr,
  fix: _pureFunctionsNumberGenerated.fix,
  isNumeric: _pureFunctionsNumberGenerated.isNumeric,
  partitionSelect: _pureFunctionsNumberGenerated.partitionSelect,
  stirlingS2: _pureFunctionsNumberGenerated.stirlingS2,
  bellNumbers: _pureFunctionsNumberGenerated.bellNumbers,
  deepEqual: _pureFunctionsNumberGenerated.deepEqual,
  gcd: _pureFunctionsNumberGenerated.gcd,
  median: _pureFunctionsNumberGenerated.median,
  parse,
  quantileSeq: _pureFunctionsNumberGenerated.quantileSeq,
  resolve,
  simplifyCore,
  compile,
  evaluate,
  mode: _pureFunctionsNumberGenerated.mode,
  simplify,
  derivative,
  help,
  parser,
  true: _pureFunctionsNumberGenerated._true,
  hasNumericValue: _pureFunctionsNumberGenerated.hasNumericValue,
  rationalize,
  mad: _pureFunctionsNumberGenerated.mad,
  config: _configReadonly.config
});
(0, _extends2.default)(mathWithTransform, math, {
  cumsum: (0, _factoriesNumber.createCumSumTransform)({
    add: _pureFunctionsNumberGenerated.add,
    typed: _pureFunctionsNumberGenerated.typed,
    unaryPlus: _pureFunctionsNumberGenerated.unaryPlus
  }),
  mapSlices: (0, _factoriesNumber.createMapSlicesTransform)({
    isInteger: _pureFunctionsNumberGenerated.isInteger,
    typed: _pureFunctionsNumberGenerated.typed
  }),
  filter: (0, _factoriesNumber.createFilterTransform)({
    typed: _pureFunctionsNumberGenerated.typed
  }),
  forEach: (0, _factoriesNumber.createForEachTransform)({
    typed: _pureFunctionsNumberGenerated.typed
  }),
  mean: (0, _factoriesNumber.createMeanTransform)({
    add: _pureFunctionsNumberGenerated.add,
    divide: _pureFunctionsNumberGenerated.divide,
    typed: _pureFunctionsNumberGenerated.typed
  }),
  subset: (0, _factoriesNumber.createSubsetTransform)({}),
  map: (0, _factoriesNumber.createMapTransform)({
    typed: _pureFunctionsNumberGenerated.typed
  }),
  std: (0, _factoriesNumber.createStdTransform)({
    map: _pureFunctionsNumberGenerated.map,
    sqrt: _pureFunctionsNumberGenerated.sqrt,
    typed: _pureFunctionsNumberGenerated.typed,
    variance: _pureFunctionsNumberGenerated.variance
  }),
  sum: (0, _factoriesNumber.createSumTransform)({
    add: _pureFunctionsNumberGenerated.add,
    config: _configReadonly.config,
    numeric: _pureFunctionsNumberGenerated.numeric,
    typed: _pureFunctionsNumberGenerated.typed
  }),
  variance: (0, _factoriesNumber.createVarianceTransform)({
    add: _pureFunctionsNumberGenerated.add,
    divide: _pureFunctionsNumberGenerated.divide,
    isNaN: _pureFunctionsNumberGenerated.isNaN,
    mapSlices: _pureFunctionsNumberGenerated.mapSlices,
    multiply: _pureFunctionsNumberGenerated.multiply,
    subtract: _pureFunctionsNumberGenerated.subtract,
    typed: _pureFunctionsNumberGenerated.typed
  }),
  max: (0, _factoriesNumber.createMaxTransform)({
    config: _configReadonly.config,
    isNaN: _pureFunctionsNumberGenerated.isNaN,
    larger: _pureFunctionsNumberGenerated.larger,
    numeric: _pureFunctionsNumberGenerated.numeric,
    typed: _pureFunctionsNumberGenerated.typed
  }),
  min: (0, _factoriesNumber.createMinTransform)({
    config: _configReadonly.config,
    isNaN: _pureFunctionsNumberGenerated.isNaN,
    numeric: _pureFunctionsNumberGenerated.numeric,
    smaller: _pureFunctionsNumberGenerated.smaller,
    typed: _pureFunctionsNumberGenerated.typed
  }),
  range: (0, _factoriesNumber.createRangeTransform)({
    matrix: _pureFunctionsNumberGenerated.matrix,
    add: _pureFunctionsNumberGenerated.add,
    config: _configReadonly.config,
    equal: _pureFunctionsNumberGenerated.equal,
    isPositive: _pureFunctionsNumberGenerated.isPositive,
    isZero: _pureFunctionsNumberGenerated.isZero,
    larger: _pureFunctionsNumberGenerated.larger,
    largerEq: _pureFunctionsNumberGenerated.largerEq,
    smaller: _pureFunctionsNumberGenerated.smaller,
    smallerEq: _pureFunctionsNumberGenerated.smallerEq,
    typed: _pureFunctionsNumberGenerated.typed
  })
});
(0, _extends2.default)(classes, {
  Range: _pureFunctionsNumberGenerated.Range,
  ResultSet: _pureFunctionsNumberGenerated.ResultSet,
  Chain,
  Node,
  ObjectNode,
  RangeNode,
  RelationalNode,
  SymbolNode,
  AccessorNode,
  AssignmentNode,
  ConditionalNode,
  FunctionNode,
  IndexNode,
  OperatorNode,
  ArrayNode,
  FunctionAssignmentNode,
  BlockNode,
  ConstantNode,
  ParenthesisNode,
  Help,
  Parser
});
Chain.createProxy(math);
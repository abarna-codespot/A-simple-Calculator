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
exports.symbolicEqual = exports.simplifyCore = exports.simplifyConstant = exports.simplify = exports.reviver = exports.resolve = exports.rationalize = exports.parser = exports.parse = exports.leafCount = exports.help = exports.evaluate = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _configReadonly = require("./configReadonly.js");
var _factoriesAny = require("../factoriesAny.js");
var _pureFunctionsAnyGenerated = require("./pureFunctionsAny.generated.js");
var _embeddedDocs = require("../expression/embeddedDocs/embeddedDocs.js");
/**
 * THIS FILE IS AUTO-GENERATED
 * DON'T MAKE CHANGES HERE
 */

const math = {}; // NOT pure!
const mathWithTransform = {}; // NOT pure!
const classes = {}; // NOT pure!

const Node = exports.Node = (0, _factoriesAny.createNode)({
  mathWithTransform
});
const ObjectNode = exports.ObjectNode = (0, _factoriesAny.createObjectNode)({
  Node
});
const OperatorNode = exports.OperatorNode = (0, _factoriesAny.createOperatorNode)({
  Node
});
const ParenthesisNode = exports.ParenthesisNode = (0, _factoriesAny.createParenthesisNode)({
  Node
});
const RelationalNode = exports.RelationalNode = (0, _factoriesAny.createRelationalNode)({
  Node
});
const ArrayNode = exports.ArrayNode = (0, _factoriesAny.createArrayNode)({
  Node
});
const BlockNode = exports.BlockNode = (0, _factoriesAny.createBlockNode)({
  Node,
  ResultSet: _pureFunctionsAnyGenerated.ResultSet
});
const ConditionalNode = exports.ConditionalNode = (0, _factoriesAny.createConditionalNode)({
  Node
});
const RangeNode = exports.RangeNode = (0, _factoriesAny.createRangeNode)({
  Node
});
const reviver = exports.reviver = (0, _factoriesAny.createReviver)({
  classes
});
const Chain = exports.Chain = (0, _factoriesAny.createChainClass)({
  math,
  typed: _pureFunctionsAnyGenerated.typed
});
const FunctionAssignmentNode = exports.FunctionAssignmentNode = (0, _factoriesAny.createFunctionAssignmentNode)({
  Node,
  typed: _pureFunctionsAnyGenerated.typed
});
const chain = exports.chain = (0, _factoriesAny.createChain)({
  Chain,
  typed: _pureFunctionsAnyGenerated.typed
});
const ConstantNode = exports.ConstantNode = (0, _factoriesAny.createConstantNode)({
  Node,
  isBounded: _pureFunctionsAnyGenerated.isBounded
});
const IndexNode = exports.IndexNode = (0, _factoriesAny.createIndexNode)({
  Node,
  size: _pureFunctionsAnyGenerated.size
});
const AccessorNode = exports.AccessorNode = (0, _factoriesAny.createAccessorNode)({
  Node,
  subset: _pureFunctionsAnyGenerated.subset
});
const AssignmentNode = exports.AssignmentNode = (0, _factoriesAny.createAssignmentNode)({
  matrix: _pureFunctionsAnyGenerated.matrix,
  Node,
  subset: _pureFunctionsAnyGenerated.subset
});
const SymbolNode = exports.SymbolNode = (0, _factoriesAny.createSymbolNode)({
  Unit: _pureFunctionsAnyGenerated.Unit,
  Node,
  math
});
const FunctionNode = exports.FunctionNode = (0, _factoriesAny.createFunctionNode)({
  Node,
  SymbolNode,
  math
});
const parse = exports.parse = (0, _factoriesAny.createParse)({
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
  numeric: _pureFunctionsAnyGenerated.numeric,
  typed: _pureFunctionsAnyGenerated.typed
});
const resolve = exports.resolve = (0, _factoriesAny.createResolve)({
  ConstantNode,
  FunctionNode,
  OperatorNode,
  ParenthesisNode,
  parse,
  typed: _pureFunctionsAnyGenerated.typed
});
const simplifyConstant = exports.simplifyConstant = (0, _factoriesAny.createSimplifyConstant)({
  bignumber: _pureFunctionsAnyGenerated.bignumber,
  fraction: _pureFunctionsAnyGenerated.fraction,
  AccessorNode,
  ArrayNode,
  ConstantNode,
  FunctionNode,
  IndexNode,
  ObjectNode,
  OperatorNode,
  SymbolNode,
  config: _configReadonly.config,
  isBounded: _pureFunctionsAnyGenerated.isBounded,
  mathWithTransform,
  matrix: _pureFunctionsAnyGenerated.matrix,
  typed: _pureFunctionsAnyGenerated.typed
});
const compile = exports.compile = (0, _factoriesAny.createCompile)({
  parse,
  typed: _pureFunctionsAnyGenerated.typed
});
const leafCount = exports.leafCount = (0, _factoriesAny.createLeafCount)({
  parse,
  typed: _pureFunctionsAnyGenerated.typed
});
const simplifyCore = exports.simplifyCore = (0, _factoriesAny.createSimplifyCore)({
  AccessorNode,
  ArrayNode,
  ConstantNode,
  FunctionNode,
  IndexNode,
  ObjectNode,
  OperatorNode,
  ParenthesisNode,
  SymbolNode,
  add: _pureFunctionsAnyGenerated.add,
  divide: _pureFunctionsAnyGenerated.divide,
  equal: _pureFunctionsAnyGenerated.equal,
  isZero: _pureFunctionsAnyGenerated.isZero,
  multiply: _pureFunctionsAnyGenerated.multiply,
  parse,
  pow: _pureFunctionsAnyGenerated.pow,
  subtract: _pureFunctionsAnyGenerated.subtract,
  typed: _pureFunctionsAnyGenerated.typed
});
const evaluate = exports.evaluate = (0, _factoriesAny.createEvaluate)({
  parse,
  typed: _pureFunctionsAnyGenerated.typed
});
const Help = exports.Help = (0, _factoriesAny.createHelpClass)({
  evaluate
});
const Parser = exports.Parser = (0, _factoriesAny.createParserClass)({
  evaluate,
  parse
});
const parser = exports.parser = (0, _factoriesAny.createParser)({
  Parser,
  typed: _pureFunctionsAnyGenerated.typed
});
const simplify = exports.simplify = (0, _factoriesAny.createSimplify)({
  AccessorNode,
  ArrayNode,
  ConstantNode,
  FunctionNode,
  IndexNode,
  ObjectNode,
  OperatorNode,
  ParenthesisNode,
  SymbolNode,
  equal: _pureFunctionsAnyGenerated.equal,
  parse,
  replacer: _pureFunctionsAnyGenerated.replacer,
  resolve,
  simplifyConstant,
  simplifyCore,
  typed: _pureFunctionsAnyGenerated.typed
});
const symbolicEqual = exports.symbolicEqual = (0, _factoriesAny.createSymbolicEqual)({
  OperatorNode,
  parse,
  simplify,
  typed: _pureFunctionsAnyGenerated.typed
});
const derivative = exports.derivative = (0, _factoriesAny.createDerivative)({
  ConstantNode,
  FunctionNode,
  OperatorNode,
  ParenthesisNode,
  SymbolNode,
  config: _configReadonly.config,
  equal: _pureFunctionsAnyGenerated.equal,
  isZero: _pureFunctionsAnyGenerated.isZero,
  numeric: _pureFunctionsAnyGenerated.numeric,
  parse,
  simplify,
  typed: _pureFunctionsAnyGenerated.typed
});
const help = exports.help = (0, _factoriesAny.createHelp)({
  Help,
  mathWithTransform,
  typed: _pureFunctionsAnyGenerated.typed
});
const rationalize = exports.rationalize = (0, _factoriesAny.createRationalize)({
  bignumber: _pureFunctionsAnyGenerated.bignumber,
  fraction: _pureFunctionsAnyGenerated.fraction,
  AccessorNode,
  ArrayNode,
  ConstantNode,
  FunctionNode,
  IndexNode,
  ObjectNode,
  OperatorNode,
  ParenthesisNode,
  SymbolNode,
  add: _pureFunctionsAnyGenerated.add,
  config: _configReadonly.config,
  divide: _pureFunctionsAnyGenerated.divide,
  equal: _pureFunctionsAnyGenerated.equal,
  isZero: _pureFunctionsAnyGenerated.isZero,
  mathWithTransform,
  matrix: _pureFunctionsAnyGenerated.matrix,
  multiply: _pureFunctionsAnyGenerated.multiply,
  parse,
  pow: _pureFunctionsAnyGenerated.pow,
  simplify,
  simplifyConstant,
  simplifyCore,
  subtract: _pureFunctionsAnyGenerated.subtract,
  typed: _pureFunctionsAnyGenerated.typed
});
(0, _extends2.default)(math, {
  e: _pureFunctionsAnyGenerated.e,
  false: _pureFunctionsAnyGenerated._false,
  fineStructure: _pureFunctionsAnyGenerated.fineStructure,
  i: _pureFunctionsAnyGenerated.i,
  Infinity: _pureFunctionsAnyGenerated._Infinity,
  LN10: _pureFunctionsAnyGenerated.LN10,
  LOG10E: _pureFunctionsAnyGenerated.LOG10E,
  NaN: _pureFunctionsAnyGenerated._NaN,
  null: _pureFunctionsAnyGenerated._null,
  phi: _pureFunctionsAnyGenerated.phi,
  SQRT1_2: _pureFunctionsAnyGenerated.SQRT1_2,
  sackurTetrode: _pureFunctionsAnyGenerated.sackurTetrode,
  tau: _pureFunctionsAnyGenerated.tau,
  true: _pureFunctionsAnyGenerated._true,
  'E': _pureFunctionsAnyGenerated.e,
  version: _pureFunctionsAnyGenerated.version,
  efimovFactor: _pureFunctionsAnyGenerated.efimovFactor,
  LN2: _pureFunctionsAnyGenerated.LN2,
  pi: _pureFunctionsAnyGenerated.pi,
  replacer: _pureFunctionsAnyGenerated.replacer,
  reviver,
  SQRT2: _pureFunctionsAnyGenerated.SQRT2,
  typed: _pureFunctionsAnyGenerated.typed,
  'PI': _pureFunctionsAnyGenerated.pi,
  weakMixingAngle: _pureFunctionsAnyGenerated.weakMixingAngle,
  abs: _pureFunctionsAnyGenerated.abs,
  acos: _pureFunctionsAnyGenerated.acos,
  acot: _pureFunctionsAnyGenerated.acot,
  acsc: _pureFunctionsAnyGenerated.acsc,
  addScalar: _pureFunctionsAnyGenerated.addScalar,
  arg: _pureFunctionsAnyGenerated.arg,
  asech: _pureFunctionsAnyGenerated.asech,
  asinh: _pureFunctionsAnyGenerated.asinh,
  atan: _pureFunctionsAnyGenerated.atan,
  atanh: _pureFunctionsAnyGenerated.atanh,
  bigint: _pureFunctionsAnyGenerated.bigint,
  bitNot: _pureFunctionsAnyGenerated.bitNot,
  boolean: _pureFunctionsAnyGenerated.boolean,
  clone: _pureFunctionsAnyGenerated.clone,
  combinations: _pureFunctionsAnyGenerated.combinations,
  complex: _pureFunctionsAnyGenerated.complex,
  conj: _pureFunctionsAnyGenerated.conj,
  cos: _pureFunctionsAnyGenerated.cos,
  cot: _pureFunctionsAnyGenerated.cot,
  csc: _pureFunctionsAnyGenerated.csc,
  cube: _pureFunctionsAnyGenerated.cube,
  equalScalar: _pureFunctionsAnyGenerated.equalScalar,
  erf: _pureFunctionsAnyGenerated.erf,
  exp: _pureFunctionsAnyGenerated.exp,
  expm1: _pureFunctionsAnyGenerated.expm1,
  filter: _pureFunctionsAnyGenerated.filter,
  flatten: _pureFunctionsAnyGenerated.flatten,
  forEach: _pureFunctionsAnyGenerated.forEach,
  format: _pureFunctionsAnyGenerated.format,
  getMatrixDataType: _pureFunctionsAnyGenerated.getMatrixDataType,
  hex: _pureFunctionsAnyGenerated.hex,
  im: _pureFunctionsAnyGenerated.im,
  isBounded: _pureFunctionsAnyGenerated.isBounded,
  isNaN: _pureFunctionsAnyGenerated.isNaN,
  isNumeric: _pureFunctionsAnyGenerated.isNumeric,
  isPrime: _pureFunctionsAnyGenerated.isPrime,
  LOG2E: _pureFunctionsAnyGenerated.LOG2E,
  lgamma: _pureFunctionsAnyGenerated.lgamma,
  log10: _pureFunctionsAnyGenerated.log10,
  log2: _pureFunctionsAnyGenerated.log2,
  map: _pureFunctionsAnyGenerated.map,
  mode: _pureFunctionsAnyGenerated.mode,
  multiplyScalar: _pureFunctionsAnyGenerated.multiplyScalar,
  not: _pureFunctionsAnyGenerated.not,
  number: _pureFunctionsAnyGenerated.number,
  oct: _pureFunctionsAnyGenerated.oct,
  pickRandom: _pureFunctionsAnyGenerated.pickRandom,
  print: _pureFunctionsAnyGenerated.print,
  random: _pureFunctionsAnyGenerated.random,
  re: _pureFunctionsAnyGenerated.re,
  sec: _pureFunctionsAnyGenerated.sec,
  sign: _pureFunctionsAnyGenerated.sign,
  sin: _pureFunctionsAnyGenerated.sin,
  size: _pureFunctionsAnyGenerated.size,
  splitUnit: _pureFunctionsAnyGenerated.splitUnit,
  square: _pureFunctionsAnyGenerated.square,
  string: _pureFunctionsAnyGenerated.string,
  subtractScalar: _pureFunctionsAnyGenerated.subtractScalar,
  tan: _pureFunctionsAnyGenerated.tan,
  toBest: _pureFunctionsAnyGenerated.toBest,
  typeOf: _pureFunctionsAnyGenerated.typeOf,
  acosh: _pureFunctionsAnyGenerated.acosh,
  acsch: _pureFunctionsAnyGenerated.acsch,
  asec: _pureFunctionsAnyGenerated.asec,
  bignumber: _pureFunctionsAnyGenerated.bignumber,
  chain,
  combinationsWithRep: _pureFunctionsAnyGenerated.combinationsWithRep,
  cosh: _pureFunctionsAnyGenerated.cosh,
  csch: _pureFunctionsAnyGenerated.csch,
  dot: _pureFunctionsAnyGenerated.dot,
  hasNumericValue: _pureFunctionsAnyGenerated.hasNumericValue,
  isFinite: _pureFunctionsAnyGenerated.isFinite,
  isNegative: _pureFunctionsAnyGenerated.isNegative,
  isZero: _pureFunctionsAnyGenerated.isZero,
  matrix: _pureFunctionsAnyGenerated.matrix,
  matrixFromFunction: _pureFunctionsAnyGenerated.matrixFromFunction,
  multiply: _pureFunctionsAnyGenerated.multiply,
  ones: _pureFunctionsAnyGenerated.ones,
  randomInt: _pureFunctionsAnyGenerated.randomInt,
  resize: _pureFunctionsAnyGenerated.resize,
  sech: _pureFunctionsAnyGenerated.sech,
  sinh: _pureFunctionsAnyGenerated.sinh,
  sparse: _pureFunctionsAnyGenerated.sparse,
  sqrt: _pureFunctionsAnyGenerated.sqrt,
  squeeze: _pureFunctionsAnyGenerated.squeeze,
  tanh: _pureFunctionsAnyGenerated.tanh,
  transpose: _pureFunctionsAnyGenerated.transpose,
  xgcd: _pureFunctionsAnyGenerated.xgcd,
  zeros: _pureFunctionsAnyGenerated.zeros,
  acoth: _pureFunctionsAnyGenerated.acoth,
  asin: _pureFunctionsAnyGenerated.asin,
  bin: _pureFunctionsAnyGenerated.bin,
  coth: _pureFunctionsAnyGenerated.coth,
  ctranspose: _pureFunctionsAnyGenerated.ctranspose,
  diag: _pureFunctionsAnyGenerated.diag,
  equal: _pureFunctionsAnyGenerated.equal,
  fraction: _pureFunctionsAnyGenerated.fraction,
  identity: _pureFunctionsAnyGenerated.identity,
  isInteger: _pureFunctionsAnyGenerated.isInteger,
  kron: _pureFunctionsAnyGenerated.kron,
  mapSlices: _pureFunctionsAnyGenerated.mapSlices,
  matrixFromColumns: _pureFunctionsAnyGenerated.matrixFromColumns,
  numeric: _pureFunctionsAnyGenerated.numeric,
  prod: _pureFunctionsAnyGenerated.prod,
  reshape: _pureFunctionsAnyGenerated.reshape,
  round: _pureFunctionsAnyGenerated.round,
  unaryMinus: _pureFunctionsAnyGenerated.unaryMinus,
  bernoulli: _pureFunctionsAnyGenerated.bernoulli,
  cbrt: _pureFunctionsAnyGenerated.cbrt,
  concat: _pureFunctionsAnyGenerated.concat,
  count: _pureFunctionsAnyGenerated.count,
  deepEqual: _pureFunctionsAnyGenerated.deepEqual,
  divideScalar: _pureFunctionsAnyGenerated.divideScalar,
  dotMultiply: _pureFunctionsAnyGenerated.dotMultiply,
  floor: _pureFunctionsAnyGenerated.floor,
  gcd: _pureFunctionsAnyGenerated.gcd,
  isPositive: _pureFunctionsAnyGenerated.isPositive,
  larger: _pureFunctionsAnyGenerated.larger,
  lcm: _pureFunctionsAnyGenerated.lcm,
  leftShift: _pureFunctionsAnyGenerated.leftShift,
  lsolve: _pureFunctionsAnyGenerated.lsolve,
  max: _pureFunctionsAnyGenerated.max,
  mod: _pureFunctionsAnyGenerated.mod,
  nthRoot: _pureFunctionsAnyGenerated.nthRoot,
  nullish: _pureFunctionsAnyGenerated.nullish,
  or: _pureFunctionsAnyGenerated.or,
  qr: _pureFunctionsAnyGenerated.qr,
  rightArithShift: _pureFunctionsAnyGenerated.rightArithShift,
  smaller: _pureFunctionsAnyGenerated.smaller,
  subtract: _pureFunctionsAnyGenerated.subtract,
  to: _pureFunctionsAnyGenerated.to,
  unaryPlus: _pureFunctionsAnyGenerated.unaryPlus,
  usolve: _pureFunctionsAnyGenerated.usolve,
  xor: _pureFunctionsAnyGenerated.xor,
  add: _pureFunctionsAnyGenerated.add,
  atan2: _pureFunctionsAnyGenerated.atan2,
  bitAnd: _pureFunctionsAnyGenerated.bitAnd,
  bitOr: _pureFunctionsAnyGenerated.bitOr,
  bitXor: _pureFunctionsAnyGenerated.bitXor,
  catalan: _pureFunctionsAnyGenerated.catalan,
  compare: _pureFunctionsAnyGenerated.compare,
  compareText: _pureFunctionsAnyGenerated.compareText,
  composition: _pureFunctionsAnyGenerated.composition,
  cross: _pureFunctionsAnyGenerated.cross,
  det: _pureFunctionsAnyGenerated.det,
  diff: _pureFunctionsAnyGenerated.diff,
  distance: _pureFunctionsAnyGenerated.distance,
  dotDivide: _pureFunctionsAnyGenerated.dotDivide,
  equalText: _pureFunctionsAnyGenerated.equalText,
  hypot: _pureFunctionsAnyGenerated.hypot,
  intersect: _pureFunctionsAnyGenerated.intersect,
  invmod: _pureFunctionsAnyGenerated.invmod,
  largerEq: _pureFunctionsAnyGenerated.largerEq,
  log: _pureFunctionsAnyGenerated.log,
  lsolveAll: _pureFunctionsAnyGenerated.lsolveAll,
  matrixFromRows: _pureFunctionsAnyGenerated.matrixFromRows,
  min: _pureFunctionsAnyGenerated.min,
  nthRoots: _pureFunctionsAnyGenerated.nthRoots,
  partitionSelect: _pureFunctionsAnyGenerated.partitionSelect,
  rightLogShift: _pureFunctionsAnyGenerated.rightLogShift,
  slu: _pureFunctionsAnyGenerated.slu,
  subset: _pureFunctionsAnyGenerated.subset,
  sum: _pureFunctionsAnyGenerated.sum,
  trace: _pureFunctionsAnyGenerated.trace,
  usolveAll: _pureFunctionsAnyGenerated.usolveAll,
  zpk2tf: _pureFunctionsAnyGenerated.zpk2tf,
  ceil: _pureFunctionsAnyGenerated.ceil,
  compareNatural: _pureFunctionsAnyGenerated.compareNatural,
  cumsum: _pureFunctionsAnyGenerated.cumsum,
  fix: _pureFunctionsAnyGenerated.fix,
  index: _pureFunctionsAnyGenerated.index,
  inv: _pureFunctionsAnyGenerated.inv,
  log1p: _pureFunctionsAnyGenerated.log1p,
  lup: _pureFunctionsAnyGenerated.lup,
  pinv: _pureFunctionsAnyGenerated.pinv,
  pow: _pureFunctionsAnyGenerated.pow,
  setCartesian: _pureFunctionsAnyGenerated.setCartesian,
  setDistinct: _pureFunctionsAnyGenerated.setDistinct,
  setIsSubset: _pureFunctionsAnyGenerated.setIsSubset,
  setPowerset: _pureFunctionsAnyGenerated.setPowerset,
  smallerEq: _pureFunctionsAnyGenerated.smallerEq,
  sort: _pureFunctionsAnyGenerated.sort,
  sqrtm: _pureFunctionsAnyGenerated.sqrtm,
  unequal: _pureFunctionsAnyGenerated.unequal,
  and: _pureFunctionsAnyGenerated.and,
  divide: _pureFunctionsAnyGenerated.divide,
  expm: _pureFunctionsAnyGenerated.expm,
  fft: _pureFunctionsAnyGenerated.fft,
  freqz: _pureFunctionsAnyGenerated.freqz,
  gamma: _pureFunctionsAnyGenerated.gamma,
  ifft: _pureFunctionsAnyGenerated.ifft,
  kldivergence: _pureFunctionsAnyGenerated.kldivergence,
  lusolve: _pureFunctionsAnyGenerated.lusolve,
  mean: _pureFunctionsAnyGenerated.mean,
  median: _pureFunctionsAnyGenerated.median,
  polynomialRoot: _pureFunctionsAnyGenerated.polynomialRoot,
  quantileSeq: _pureFunctionsAnyGenerated.quantileSeq,
  range: _pureFunctionsAnyGenerated.range,
  row: _pureFunctionsAnyGenerated.row,
  setDifference: _pureFunctionsAnyGenerated.setDifference,
  setMultiplicity: _pureFunctionsAnyGenerated.setMultiplicity,
  setSymDifference: _pureFunctionsAnyGenerated.setSymDifference,
  solveODE: _pureFunctionsAnyGenerated.solveODE,
  vacuumImpedance: _pureFunctionsAnyGenerated.vacuumImpedance,
  atomicMass: _pureFunctionsAnyGenerated.atomicMass,
  bohrMagneton: _pureFunctionsAnyGenerated.bohrMagneton,
  boltzmann: _pureFunctionsAnyGenerated.boltzmann,
  column: _pureFunctionsAnyGenerated.column,
  conductanceQuantum: _pureFunctionsAnyGenerated.conductanceQuantum,
  coulomb: _pureFunctionsAnyGenerated.coulomb,
  createUnit: _pureFunctionsAnyGenerated.createUnit,
  deuteronMass: _pureFunctionsAnyGenerated.deuteronMass,
  eigs: _pureFunctionsAnyGenerated.eigs,
  electronMass: _pureFunctionsAnyGenerated.electronMass,
  factorial: _pureFunctionsAnyGenerated.factorial,
  fermiCoupling: _pureFunctionsAnyGenerated.fermiCoupling,
  gasConstant: _pureFunctionsAnyGenerated.gasConstant,
  gravity: _pureFunctionsAnyGenerated.gravity,
  klitzing: _pureFunctionsAnyGenerated.klitzing,
  loschmidt: _pureFunctionsAnyGenerated.loschmidt,
  mad: _pureFunctionsAnyGenerated.mad,
  magneticFluxQuantum: _pureFunctionsAnyGenerated.magneticFluxQuantum,
  molarMass: _pureFunctionsAnyGenerated.molarMass,
  molarPlanckConstant: _pureFunctionsAnyGenerated.molarPlanckConstant,
  multinomial: _pureFunctionsAnyGenerated.multinomial,
  norm: _pureFunctionsAnyGenerated.norm,
  permutations: _pureFunctionsAnyGenerated.permutations,
  planckConstant: _pureFunctionsAnyGenerated.planckConstant,
  planckMass: _pureFunctionsAnyGenerated.planckMass,
  planckTime: _pureFunctionsAnyGenerated.planckTime,
  reducedPlanckConstant: _pureFunctionsAnyGenerated.reducedPlanckConstant,
  rotationMatrix: _pureFunctionsAnyGenerated.rotationMatrix,
  rydberg: _pureFunctionsAnyGenerated.rydberg,
  secondRadiation: _pureFunctionsAnyGenerated.secondRadiation,
  setSize: _pureFunctionsAnyGenerated.setSize,
  speedOfLight: _pureFunctionsAnyGenerated.speedOfLight,
  stefanBoltzmann: _pureFunctionsAnyGenerated.stefanBoltzmann,
  thomsonCrossSection: _pureFunctionsAnyGenerated.thomsonCrossSection,
  variance: _pureFunctionsAnyGenerated.variance,
  zeta: _pureFunctionsAnyGenerated.zeta,
  avogadro: _pureFunctionsAnyGenerated.avogadro,
  bohrRadius: _pureFunctionsAnyGenerated.bohrRadius,
  corr: _pureFunctionsAnyGenerated.corr,
  dotPow: _pureFunctionsAnyGenerated.dotPow,
  elementaryCharge: _pureFunctionsAnyGenerated.elementaryCharge,
  faraday: _pureFunctionsAnyGenerated.faraday,
  hartreeEnergy: _pureFunctionsAnyGenerated.hartreeEnergy,
  inverseConductanceQuantum: _pureFunctionsAnyGenerated.inverseConductanceQuantum,
  magneticConstant: _pureFunctionsAnyGenerated.magneticConstant,
  molarMassC12: _pureFunctionsAnyGenerated.molarMassC12,
  neutronMass: _pureFunctionsAnyGenerated.neutronMass,
  parse,
  planckCharge: _pureFunctionsAnyGenerated.planckCharge,
  planckTemperature: _pureFunctionsAnyGenerated.planckTemperature,
  quantumOfCirculation: _pureFunctionsAnyGenerated.quantumOfCirculation,
  resolve,
  setIntersect: _pureFunctionsAnyGenerated.setIntersect,
  simplifyConstant,
  std: _pureFunctionsAnyGenerated.std,
  stirlingS2: _pureFunctionsAnyGenerated.stirlingS2,
  unit: _pureFunctionsAnyGenerated.unit,
  bellNumbers: _pureFunctionsAnyGenerated.bellNumbers,
  compile,
  electricConstant: _pureFunctionsAnyGenerated.electricConstant,
  firstRadiation: _pureFunctionsAnyGenerated.firstRadiation,
  leafCount,
  nuclearMagneton: _pureFunctionsAnyGenerated.nuclearMagneton,
  planckLength: _pureFunctionsAnyGenerated.planckLength,
  rotate: _pureFunctionsAnyGenerated.rotate,
  setUnion: _pureFunctionsAnyGenerated.setUnion,
  simplifyCore,
  wienDisplacement: _pureFunctionsAnyGenerated.wienDisplacement,
  classicalElectronRadius: _pureFunctionsAnyGenerated.classicalElectronRadius,
  evaluate,
  molarVolume: _pureFunctionsAnyGenerated.molarVolume,
  schur: _pureFunctionsAnyGenerated.schur,
  coulombConstant: _pureFunctionsAnyGenerated.coulombConstant,
  gravitationConstant: _pureFunctionsAnyGenerated.gravitationConstant,
  parser,
  simplify,
  symbolicEqual,
  derivative,
  protonMass: _pureFunctionsAnyGenerated.protonMass,
  sylvester: _pureFunctionsAnyGenerated.sylvester,
  help,
  rationalize,
  lyap: _pureFunctionsAnyGenerated.lyap,
  config: _configReadonly.config
});
(0, _extends2.default)(mathWithTransform, math, {
  map: (0, _factoriesAny.createMapTransform)({
    typed: _pureFunctionsAnyGenerated.typed
  }),
  filter: (0, _factoriesAny.createFilterTransform)({
    typed: _pureFunctionsAnyGenerated.typed
  }),
  forEach: (0, _factoriesAny.createForEachTransform)({
    typed: _pureFunctionsAnyGenerated.typed
  }),
  mapSlices: (0, _factoriesAny.createMapSlicesTransform)({
    isInteger: _pureFunctionsAnyGenerated.isInteger,
    typed: _pureFunctionsAnyGenerated.typed
  }),
  and: (0, _factoriesAny.createAndTransform)({
    add: _pureFunctionsAnyGenerated.add,
    concat: _pureFunctionsAnyGenerated.concat,
    equalScalar: _pureFunctionsAnyGenerated.equalScalar,
    matrix: _pureFunctionsAnyGenerated.matrix,
    not: _pureFunctionsAnyGenerated.not,
    typed: _pureFunctionsAnyGenerated.typed,
    zeros: _pureFunctionsAnyGenerated.zeros
  }),
  cumsum: (0, _factoriesAny.createCumSumTransform)({
    add: _pureFunctionsAnyGenerated.add,
    typed: _pureFunctionsAnyGenerated.typed,
    unaryPlus: _pureFunctionsAnyGenerated.unaryPlus
  }),
  nullish: (0, _factoriesAny.createNullishTransform)({
    deepEqual: _pureFunctionsAnyGenerated.deepEqual,
    flatten: _pureFunctionsAnyGenerated.flatten,
    matrix: _pureFunctionsAnyGenerated.matrix,
    size: _pureFunctionsAnyGenerated.size,
    typed: _pureFunctionsAnyGenerated.typed
  }),
  print: (0, _factoriesAny.createPrintTransform)({
    add: _pureFunctionsAnyGenerated.add,
    matrix: _pureFunctionsAnyGenerated.matrix,
    typed: _pureFunctionsAnyGenerated.typed,
    zeros: _pureFunctionsAnyGenerated.zeros
  }),
  bitAnd: (0, _factoriesAny.createBitAndTransform)({
    add: _pureFunctionsAnyGenerated.add,
    concat: _pureFunctionsAnyGenerated.concat,
    equalScalar: _pureFunctionsAnyGenerated.equalScalar,
    matrix: _pureFunctionsAnyGenerated.matrix,
    not: _pureFunctionsAnyGenerated.not,
    typed: _pureFunctionsAnyGenerated.typed,
    zeros: _pureFunctionsAnyGenerated.zeros
  }),
  concat: (0, _factoriesAny.createConcatTransform)({
    isInteger: _pureFunctionsAnyGenerated.isInteger,
    matrix: _pureFunctionsAnyGenerated.matrix,
    typed: _pureFunctionsAnyGenerated.typed
  }),
  diff: (0, _factoriesAny.createDiffTransform)({
    bignumber: _pureFunctionsAnyGenerated.bignumber,
    matrix: _pureFunctionsAnyGenerated.matrix,
    number: _pureFunctionsAnyGenerated.number,
    subtract: _pureFunctionsAnyGenerated.subtract,
    typed: _pureFunctionsAnyGenerated.typed
  }),
  max: (0, _factoriesAny.createMaxTransform)({
    config: _configReadonly.config,
    isNaN: _pureFunctionsAnyGenerated.isNaN,
    larger: _pureFunctionsAnyGenerated.larger,
    numeric: _pureFunctionsAnyGenerated.numeric,
    typed: _pureFunctionsAnyGenerated.typed
  }),
  min: (0, _factoriesAny.createMinTransform)({
    config: _configReadonly.config,
    isNaN: _pureFunctionsAnyGenerated.isNaN,
    numeric: _pureFunctionsAnyGenerated.numeric,
    smaller: _pureFunctionsAnyGenerated.smaller,
    typed: _pureFunctionsAnyGenerated.typed
  }),
  or: (0, _factoriesAny.createOrTransform)({
    DenseMatrix: _pureFunctionsAnyGenerated.DenseMatrix,
    concat: _pureFunctionsAnyGenerated.concat,
    equalScalar: _pureFunctionsAnyGenerated.equalScalar,
    matrix: _pureFunctionsAnyGenerated.matrix,
    typed: _pureFunctionsAnyGenerated.typed
  }),
  subset: (0, _factoriesAny.createSubsetTransform)({
    add: _pureFunctionsAnyGenerated.add,
    matrix: _pureFunctionsAnyGenerated.matrix,
    typed: _pureFunctionsAnyGenerated.typed,
    zeros: _pureFunctionsAnyGenerated.zeros
  }),
  bitOr: (0, _factoriesAny.createBitOrTransform)({
    DenseMatrix: _pureFunctionsAnyGenerated.DenseMatrix,
    concat: _pureFunctionsAnyGenerated.concat,
    equalScalar: _pureFunctionsAnyGenerated.equalScalar,
    matrix: _pureFunctionsAnyGenerated.matrix,
    typed: _pureFunctionsAnyGenerated.typed
  }),
  sum: (0, _factoriesAny.createSumTransform)({
    add: _pureFunctionsAnyGenerated.add,
    config: _configReadonly.config,
    numeric: _pureFunctionsAnyGenerated.numeric,
    typed: _pureFunctionsAnyGenerated.typed
  }),
  variance: (0, _factoriesAny.createVarianceTransform)({
    add: _pureFunctionsAnyGenerated.add,
    divide: _pureFunctionsAnyGenerated.divide,
    isNaN: _pureFunctionsAnyGenerated.isNaN,
    mapSlices: _pureFunctionsAnyGenerated.mapSlices,
    multiply: _pureFunctionsAnyGenerated.multiply,
    subtract: _pureFunctionsAnyGenerated.subtract,
    typed: _pureFunctionsAnyGenerated.typed
  }),
  index: (0, _factoriesAny.createIndexTransform)({
    Index: _pureFunctionsAnyGenerated.Index,
    getMatrixDataType: _pureFunctionsAnyGenerated.getMatrixDataType
  }),
  quantileSeq: (0, _factoriesAny.createQuantileSeqTransform)({
    add: _pureFunctionsAnyGenerated.add,
    bignumber: _pureFunctionsAnyGenerated.bignumber,
    compare: _pureFunctionsAnyGenerated.compare,
    divide: _pureFunctionsAnyGenerated.divide,
    isInteger: _pureFunctionsAnyGenerated.isInteger,
    larger: _pureFunctionsAnyGenerated.larger,
    mapSlices: _pureFunctionsAnyGenerated.mapSlices,
    multiply: _pureFunctionsAnyGenerated.multiply,
    partitionSelect: _pureFunctionsAnyGenerated.partitionSelect,
    smaller: _pureFunctionsAnyGenerated.smaller,
    smallerEq: _pureFunctionsAnyGenerated.smallerEq,
    subtract: _pureFunctionsAnyGenerated.subtract,
    typed: _pureFunctionsAnyGenerated.typed
  }),
  range: (0, _factoriesAny.createRangeTransform)({
    bignumber: _pureFunctionsAnyGenerated.bignumber,
    matrix: _pureFunctionsAnyGenerated.matrix,
    add: _pureFunctionsAnyGenerated.add,
    config: _configReadonly.config,
    equal: _pureFunctionsAnyGenerated.equal,
    isPositive: _pureFunctionsAnyGenerated.isPositive,
    isZero: _pureFunctionsAnyGenerated.isZero,
    larger: _pureFunctionsAnyGenerated.larger,
    largerEq: _pureFunctionsAnyGenerated.largerEq,
    smaller: _pureFunctionsAnyGenerated.smaller,
    smallerEq: _pureFunctionsAnyGenerated.smallerEq,
    typed: _pureFunctionsAnyGenerated.typed
  }),
  column: (0, _factoriesAny.createColumnTransform)({
    Index: _pureFunctionsAnyGenerated.Index,
    matrix: _pureFunctionsAnyGenerated.matrix,
    range: _pureFunctionsAnyGenerated.range,
    typed: _pureFunctionsAnyGenerated.typed
  }),
  row: (0, _factoriesAny.createRowTransform)({
    Index: _pureFunctionsAnyGenerated.Index,
    matrix: _pureFunctionsAnyGenerated.matrix,
    range: _pureFunctionsAnyGenerated.range,
    typed: _pureFunctionsAnyGenerated.typed
  }),
  mean: (0, _factoriesAny.createMeanTransform)({
    add: _pureFunctionsAnyGenerated.add,
    divide: _pureFunctionsAnyGenerated.divide,
    typed: _pureFunctionsAnyGenerated.typed
  }),
  std: (0, _factoriesAny.createStdTransform)({
    map: _pureFunctionsAnyGenerated.map,
    sqrt: _pureFunctionsAnyGenerated.sqrt,
    typed: _pureFunctionsAnyGenerated.typed,
    variance: _pureFunctionsAnyGenerated.variance
  })
});
(0, _extends2.default)(classes, {
  BigNumber: _pureFunctionsAnyGenerated.BigNumber,
  Complex: _pureFunctionsAnyGenerated.Complex,
  Fraction: _pureFunctionsAnyGenerated.Fraction,
  Matrix: _pureFunctionsAnyGenerated.Matrix,
  Node,
  ObjectNode,
  OperatorNode,
  ParenthesisNode,
  Range: _pureFunctionsAnyGenerated.Range,
  RelationalNode,
  ResultSet: _pureFunctionsAnyGenerated.ResultSet,
  ArrayNode,
  BlockNode,
  ConditionalNode,
  DenseMatrix: _pureFunctionsAnyGenerated.DenseMatrix,
  RangeNode,
  Chain,
  FunctionAssignmentNode,
  SparseMatrix: _pureFunctionsAnyGenerated.SparseMatrix,
  ConstantNode,
  IndexNode,
  FibonacciHeap: _pureFunctionsAnyGenerated.FibonacciHeap,
  ImmutableDenseMatrix: _pureFunctionsAnyGenerated.ImmutableDenseMatrix,
  Index: _pureFunctionsAnyGenerated.Index,
  Spa: _pureFunctionsAnyGenerated.Spa,
  AccessorNode,
  AssignmentNode,
  Unit: _pureFunctionsAnyGenerated.Unit,
  SymbolNode,
  FunctionNode,
  Help,
  Parser
});
Chain.createProxy(math);
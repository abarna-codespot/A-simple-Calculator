"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapSlices = exports.map = exports.mad = exports.log2 = exports.log1p = exports.log10 = exports.log = exports.lgamma = exports.leftShift = exports.lcm = exports.largerEq = exports.larger = exports.isZero = exports.isPrime = exports.isPositive = exports.isNumeric = exports.isNegative = exports.isNaN = exports.isInteger = exports.isFinite = exports.isBounded = exports.index = exports.hypot = exports.hasNumericValue = exports.gcd = exports.gamma = exports.format = exports.forEach = exports.floor = exports.fix = exports.filter = exports.factorial = exports.expm1 = exports.exp = exports.erf = exports.equalText = exports.equalScalar = exports.equal = exports.e = exports.divideScalar = exports.divide = exports.deepEqual = exports.cumsum = exports.cube = exports.csch = exports.csc = exports.coth = exports.cot = exports.cosh = exports.cos = exports.corr = exports.composition = exports.compareText = exports.compareNatural = exports.compare = exports.combinationsWithRep = exports.combinations = exports.clone = exports.ceil = exports.cbrt = exports.catalan = exports.boolean = exports.bitXor = exports.bitOr = exports.bitNot = exports.bitAnd = exports.bigint = exports.bernoulli = exports.bellNumbers = exports.atanh = exports.atan2 = exports.atan = exports.asinh = exports.asin = exports.asech = exports.asec = exports.apply = exports.and = exports.addScalar = exports.add = exports.acsch = exports.acsc = exports.acoth = exports.acot = exports.acosh = exports.acos = exports.abs = exports._true = exports._null = exports._false = exports._NaN = exports._Infinity = exports.SQRT2 = exports.SQRT1_2 = exports.ResultSet = exports.Range = exports.LOG2E = exports.LOG10E = exports.LN2 = exports.LN10 = void 0;
exports.zeta = exports.xor = exports.xgcd = exports.version = exports.variance = exports.unequal = exports.unaryPlus = exports.unaryMinus = exports.typed = exports.typeOf = exports.tau = exports.tanh = exports.tan = exports.sum = exports.subtractScalar = exports.subtract = exports.subset = exports.string = exports.stirlingS2 = exports.std = exports.square = exports.sqrt = exports.smallerEq = exports.smaller = exports.size = exports.sinh = exports.sin = exports.sign = exports.sech = exports.sec = exports.round = exports.rightLogShift = exports.rightArithShift = exports.replacer = exports.range = exports.randomInt = exports.random = exports.quantileSeq = exports.prod = exports.print = exports.pow = exports.pickRandom = exports.pi = exports.phi = exports.permutations = exports.partitionSelect = exports.or = exports.numeric = exports.number = exports.nthRoot = exports.not = exports.norm = exports.multiplyScalar = exports.multiply = exports.multinomial = exports.mode = exports.mod = exports.min = exports.median = exports.mean = exports.max = exports.matrix = void 0;
var _configReadonly = require("./configReadonly.js");
var _factoriesNumber = require("../factoriesNumber.js");
/**
 * THIS FILE IS AUTO-GENERATED
 * DON'T MAKE CHANGES HERE
 */

const e = exports.e = /* #__PURE__ */(0, _factoriesNumber.createE)({
  config: _configReadonly.config
});
const _false = exports._false = /* #__PURE__ */(0, _factoriesNumber.createFalse)({});
const index = exports.index = /* #__PURE__ */(0, _factoriesNumber.createIndex)({});
const _Infinity = exports._Infinity = /* #__PURE__ */(0, _factoriesNumber.createInfinity)({
  config: _configReadonly.config
});
const LN10 = exports.LN10 = /* #__PURE__ */(0, _factoriesNumber.createLN10)({
  config: _configReadonly.config
});
const LOG10E = exports.LOG10E = /* #__PURE__ */(0, _factoriesNumber.createLOG10E)({
  config: _configReadonly.config
});
const matrix = exports.matrix = /* #__PURE__ */(0, _factoriesNumber.createMatrix)({});
const _NaN = exports._NaN = /* #__PURE__ */(0, _factoriesNumber.createNaN)({
  config: _configReadonly.config
});
const _null = exports._null = /* #__PURE__ */(0, _factoriesNumber.createNull)({});
const phi = exports.phi = /* #__PURE__ */(0, _factoriesNumber.createPhi)({
  config: _configReadonly.config
});
const Range = exports.Range = /* #__PURE__ */(0, _factoriesNumber.createRangeClass)({});
const replacer = exports.replacer = /* #__PURE__ */(0, _factoriesNumber.createReplacer)({});
const ResultSet = exports.ResultSet = /* #__PURE__ */(0, _factoriesNumber.createResultSet)({});
const SQRT1_2 = exports.SQRT1_2 = /* #__PURE__ */(0, _factoriesNumber.createSQRT1_2)({
  config: _configReadonly.config
});
const subset = exports.subset = /* #__PURE__ */(0, _factoriesNumber.createSubset)({});
const tau = exports.tau = /* #__PURE__ */(0, _factoriesNumber.createTau)({
  config: _configReadonly.config
});
const typed = exports.typed = /* #__PURE__ */(0, _factoriesNumber.createTyped)({});
const unaryPlus = exports.unaryPlus = /* #__PURE__ */(0, _factoriesNumber.createUnaryPlus)({
  typed
});
const version = exports.version = /* #__PURE__ */(0, _factoriesNumber.createVersion)({});
const xor = exports.xor = /* #__PURE__ */(0, _factoriesNumber.createXor)({
  typed
});
const abs = exports.abs = /* #__PURE__ */(0, _factoriesNumber.createAbs)({
  typed
});
const acos = exports.acos = /* #__PURE__ */(0, _factoriesNumber.createAcos)({
  typed
});
const acot = exports.acot = /* #__PURE__ */(0, _factoriesNumber.createAcot)({
  typed
});
const acsc = exports.acsc = /* #__PURE__ */(0, _factoriesNumber.createAcsc)({
  typed
});
const add = exports.add = /* #__PURE__ */(0, _factoriesNumber.createAdd)({
  typed
});
const and = exports.and = /* #__PURE__ */(0, _factoriesNumber.createAnd)({
  typed
});
const asec = exports.asec = /* #__PURE__ */(0, _factoriesNumber.createAsec)({
  typed
});
const asin = exports.asin = /* #__PURE__ */(0, _factoriesNumber.createAsin)({
  typed
});
const atan = exports.atan = /* #__PURE__ */(0, _factoriesNumber.createAtan)({
  typed
});
const atanh = exports.atanh = /* #__PURE__ */(0, _factoriesNumber.createAtanh)({
  typed
});
const bigint = exports.bigint = /* #__PURE__ */(0, _factoriesNumber.createBigint)({
  typed
});
const bitNot = exports.bitNot = /* #__PURE__ */(0, _factoriesNumber.createBitNot)({
  typed
});
const bitXor = exports.bitXor = /* #__PURE__ */(0, _factoriesNumber.createBitXor)({
  typed
});
const boolean = exports.boolean = /* #__PURE__ */(0, _factoriesNumber.createBoolean)({
  typed
});
const cbrt = exports.cbrt = /* #__PURE__ */(0, _factoriesNumber.createCbrt)({
  typed
});
const combinations = exports.combinations = /* #__PURE__ */(0, _factoriesNumber.createCombinations)({
  typed
});
const compare = exports.compare = /* #__PURE__ */(0, _factoriesNumber.createCompare)({
  config: _configReadonly.config,
  typed
});
const compareText = exports.compareText = /* #__PURE__ */(0, _factoriesNumber.createCompareText)({
  typed
});
const cos = exports.cos = /* #__PURE__ */(0, _factoriesNumber.createCos)({
  typed
});
const cot = exports.cot = /* #__PURE__ */(0, _factoriesNumber.createCot)({
  typed
});
const csc = exports.csc = /* #__PURE__ */(0, _factoriesNumber.createCsc)({
  typed
});
const cube = exports.cube = /* #__PURE__ */(0, _factoriesNumber.createCube)({
  typed
});
const divide = exports.divide = /* #__PURE__ */(0, _factoriesNumber.createDivide)({
  typed
});
const equalScalar = exports.equalScalar = /* #__PURE__ */(0, _factoriesNumber.createEqualScalar)({
  config: _configReadonly.config,
  typed
});
const erf = exports.erf = /* #__PURE__ */(0, _factoriesNumber.createErf)({
  typed
});
const exp = exports.exp = /* #__PURE__ */(0, _factoriesNumber.createExp)({
  typed
});
const filter = exports.filter = /* #__PURE__ */(0, _factoriesNumber.createFilter)({
  typed
});
const forEach = exports.forEach = /* #__PURE__ */(0, _factoriesNumber.createForEach)({
  typed
});
const format = exports.format = /* #__PURE__ */(0, _factoriesNumber.createFormat)({
  typed
});
const gamma = exports.gamma = /* #__PURE__ */(0, _factoriesNumber.createGamma)({
  typed
});
const isBounded = exports.isBounded = /* #__PURE__ */(0, _factoriesNumber.createIsBounded)({
  typed
});
const isInteger = exports.isInteger = /* #__PURE__ */(0, _factoriesNumber.createIsInteger)({
  typed
});
const isNegative = exports.isNegative = /* #__PURE__ */(0, _factoriesNumber.createIsNegative)({
  typed
});
const isPositive = exports.isPositive = /* #__PURE__ */(0, _factoriesNumber.createIsPositive)({
  typed
});
const isZero = exports.isZero = /* #__PURE__ */(0, _factoriesNumber.createIsZero)({
  typed
});
const LOG2E = exports.LOG2E = /* #__PURE__ */(0, _factoriesNumber.createLOG2E)({
  config: _configReadonly.config
});
const largerEq = exports.largerEq = /* #__PURE__ */(0, _factoriesNumber.createLargerEq)({
  config: _configReadonly.config,
  typed
});
const leftShift = exports.leftShift = /* #__PURE__ */(0, _factoriesNumber.createLeftShift)({
  typed
});
const log = exports.log = /* #__PURE__ */(0, _factoriesNumber.createLog)({
  typed
});
const log1p = exports.log1p = /* #__PURE__ */(0, _factoriesNumber.createLog1p)({
  typed
});
const map = exports.map = /* #__PURE__ */(0, _factoriesNumber.createMap)({
  typed
});
const mean = exports.mean = /* #__PURE__ */(0, _factoriesNumber.createMean)({
  add,
  divide,
  typed
});
const mod = exports.mod = /* #__PURE__ */(0, _factoriesNumber.createMod)({
  typed
});
const multiply = exports.multiply = /* #__PURE__ */(0, _factoriesNumber.createMultiply)({
  typed
});
const not = exports.not = /* #__PURE__ */(0, _factoriesNumber.createNot)({
  typed
});
const number = exports.number = /* #__PURE__ */(0, _factoriesNumber.createNumber)({
  typed
});
const or = exports.or = /* #__PURE__ */(0, _factoriesNumber.createOr)({
  typed
});
const pi = exports.pi = /* #__PURE__ */(0, _factoriesNumber.createPi)({
  config: _configReadonly.config
});
const pow = exports.pow = /* #__PURE__ */(0, _factoriesNumber.createPow)({
  typed
});
const random = exports.random = /* #__PURE__ */(0, _factoriesNumber.createRandom)({
  config: _configReadonly.config,
  typed
});
const rightLogShift = exports.rightLogShift = /* #__PURE__ */(0, _factoriesNumber.createRightLogShift)({
  typed
});
const SQRT2 = exports.SQRT2 = /* #__PURE__ */(0, _factoriesNumber.createSQRT2)({
  config: _configReadonly.config
});
const sech = exports.sech = /* #__PURE__ */(0, _factoriesNumber.createSech)({
  typed
});
const sin = exports.sin = /* #__PURE__ */(0, _factoriesNumber.createSin)({
  typed
});
const size = exports.size = /* #__PURE__ */(0, _factoriesNumber.createSize)({
  typed
});
const smallerEq = exports.smallerEq = /* #__PURE__ */(0, _factoriesNumber.createSmallerEq)({
  config: _configReadonly.config,
  typed
});
const square = exports.square = /* #__PURE__ */(0, _factoriesNumber.createSquare)({
  typed
});
const string = exports.string = /* #__PURE__ */(0, _factoriesNumber.createString)({
  typed
});
const subtract = exports.subtract = /* #__PURE__ */(0, _factoriesNumber.createSubtract)({
  typed
});
const tanh = exports.tanh = /* #__PURE__ */(0, _factoriesNumber.createTanh)({
  typed
});
const typeOf = exports.typeOf = /* #__PURE__ */(0, _factoriesNumber.createTypeOf)({
  typed
});
const unequal = exports.unequal = /* #__PURE__ */(0, _factoriesNumber.createUnequal)({
  equalScalar,
  typed
});
const xgcd = exports.xgcd = /* #__PURE__ */(0, _factoriesNumber.createXgcd)({
  typed
});
const acoth = exports.acoth = /* #__PURE__ */(0, _factoriesNumber.createAcoth)({
  typed
});
const addScalar = exports.addScalar = /* #__PURE__ */(0, _factoriesNumber.createAddScalar)({
  typed
});
const asech = exports.asech = /* #__PURE__ */(0, _factoriesNumber.createAsech)({
  typed
});
const bernoulli = exports.bernoulli = /* #__PURE__ */(0, _factoriesNumber.createBernoulli)({
  config: _configReadonly.config,
  isInteger,
  number,
  typed
});
const bitOr = exports.bitOr = /* #__PURE__ */(0, _factoriesNumber.createBitOr)({
  typed
});
const combinationsWithRep = exports.combinationsWithRep = /* #__PURE__ */(0, _factoriesNumber.createCombinationsWithRep)({
  typed
});
const cosh = exports.cosh = /* #__PURE__ */(0, _factoriesNumber.createCosh)({
  typed
});
const csch = exports.csch = /* #__PURE__ */(0, _factoriesNumber.createCsch)({
  typed
});
const divideScalar = exports.divideScalar = /* #__PURE__ */(0, _factoriesNumber.createDivideScalar)({
  typed
});
const equalText = exports.equalText = /* #__PURE__ */(0, _factoriesNumber.createEqualText)({
  compareText,
  isZero,
  typed
});
const expm1 = exports.expm1 = /* #__PURE__ */(0, _factoriesNumber.createExpm1)({
  typed
});
const isNaN = exports.isNaN = /* #__PURE__ */(0, _factoriesNumber.createIsNaN)({
  typed
});
const isPrime = exports.isPrime = /* #__PURE__ */(0, _factoriesNumber.createIsPrime)({
  typed
});
const larger = exports.larger = /* #__PURE__ */(0, _factoriesNumber.createLarger)({
  config: _configReadonly.config,
  typed
});
const lgamma = exports.lgamma = /* #__PURE__ */(0, _factoriesNumber.createLgamma)({
  typed
});
const log2 = exports.log2 = /* #__PURE__ */(0, _factoriesNumber.createLog2)({
  typed
});
const mapSlices = exports.mapSlices = /* #__PURE__ */(0, _factoriesNumber.createMapSlices)({
  isInteger,
  typed
});
const apply = exports.apply = mapSlices;
const multiplyScalar = exports.multiplyScalar = /* #__PURE__ */(0, _factoriesNumber.createMultiplyScalar)({
  typed
});
const nthRoot = exports.nthRoot = /* #__PURE__ */(0, _factoriesNumber.createNthRoot)({
  typed
});
const pickRandom = exports.pickRandom = /* #__PURE__ */(0, _factoriesNumber.createPickRandom)({
  config: _configReadonly.config,
  typed
});
const randomInt = exports.randomInt = /* #__PURE__ */(0, _factoriesNumber.createRandomInt)({
  config: _configReadonly.config,
  log2,
  typed
});
const rightArithShift = exports.rightArithShift = /* #__PURE__ */(0, _factoriesNumber.createRightArithShift)({
  typed
});
const sec = exports.sec = /* #__PURE__ */(0, _factoriesNumber.createSec)({
  typed
});
const sinh = exports.sinh = /* #__PURE__ */(0, _factoriesNumber.createSinh)({
  typed
});
const sqrt = exports.sqrt = /* #__PURE__ */(0, _factoriesNumber.createSqrt)({
  typed
});
const tan = exports.tan = /* #__PURE__ */(0, _factoriesNumber.createTan)({
  typed
});
const unaryMinus = exports.unaryMinus = /* #__PURE__ */(0, _factoriesNumber.createUnaryMinus)({
  typed
});
const variance = exports.variance = /* #__PURE__ */(0, _factoriesNumber.createVariance)({
  add,
  divide,
  isNaN,
  mapSlices,
  multiply,
  subtract,
  typed
});
const acosh = exports.acosh = /* #__PURE__ */(0, _factoriesNumber.createAcosh)({
  typed
});
const atan2 = exports.atan2 = /* #__PURE__ */(0, _factoriesNumber.createAtan2)({
  typed
});
const bitAnd = exports.bitAnd = /* #__PURE__ */(0, _factoriesNumber.createBitAnd)({
  typed
});
const catalan = exports.catalan = /* #__PURE__ */(0, _factoriesNumber.createCatalan)({
  addScalar,
  combinations,
  divideScalar,
  isInteger,
  isNegative,
  multiplyScalar,
  typed
});
const clone = exports.clone = /* #__PURE__ */(0, _factoriesNumber.createClone)({
  typed
});
const composition = exports.composition = /* #__PURE__ */(0, _factoriesNumber.createComposition)({
  addScalar,
  combinations,
  isInteger,
  isNegative,
  isPositive,
  larger,
  typed
});
const coth = exports.coth = /* #__PURE__ */(0, _factoriesNumber.createCoth)({
  typed
});
const equal = exports.equal = /* #__PURE__ */(0, _factoriesNumber.createEqual)({
  equalScalar,
  typed
});
const factorial = exports.factorial = /* #__PURE__ */(0, _factoriesNumber.createFactorial)({
  gamma,
  typed
});
const isFinite = exports.isFinite = /* #__PURE__ */(0, _factoriesNumber.createIsFinite)({
  isBounded,
  map,
  typed
});
const LN2 = exports.LN2 = /* #__PURE__ */(0, _factoriesNumber.createLN2)({
  config: _configReadonly.config
});
const log10 = exports.log10 = /* #__PURE__ */(0, _factoriesNumber.createLog10)({
  typed
});
const multinomial = exports.multinomial = /* #__PURE__ */(0, _factoriesNumber.createMultinomial)({
  add,
  divide,
  factorial,
  isInteger,
  isPositive,
  multiply,
  typed
});
const numeric = exports.numeric = /* #__PURE__ */(0, _factoriesNumber.createNumeric)({
  number
});
const permutations = exports.permutations = /* #__PURE__ */(0, _factoriesNumber.createPermutations)({
  factorial,
  typed
});
const prod = exports.prod = /* #__PURE__ */(0, _factoriesNumber.createProd)({
  config: _configReadonly.config,
  multiplyScalar,
  numeric,
  typed
});
const round = exports.round = /* #__PURE__ */(0, _factoriesNumber.createRound)({
  typed
});
const smaller = exports.smaller = /* #__PURE__ */(0, _factoriesNumber.createSmaller)({
  config: _configReadonly.config,
  typed
});
const subtractScalar = exports.subtractScalar = /* #__PURE__ */(0, _factoriesNumber.createSubtractScalar)({
  typed
});
const zeta = exports.zeta = /* #__PURE__ */(0, _factoriesNumber.createZeta)({
  add,
  config: _configReadonly.config,
  divide,
  equal,
  factorial,
  gamma,
  isBounded,
  isNegative,
  multiply,
  pi,
  pow,
  sin,
  smallerEq,
  subtract,
  typed
});
const acsch = exports.acsch = /* #__PURE__ */(0, _factoriesNumber.createAcsch)({
  typed
});
const compareNatural = exports.compareNatural = /* #__PURE__ */(0, _factoriesNumber.createCompareNatural)({
  compare,
  typed
});
const cumsum = exports.cumsum = /* #__PURE__ */(0, _factoriesNumber.createCumSum)({
  add,
  typed,
  unaryPlus
});
const floor = exports.floor = /* #__PURE__ */(0, _factoriesNumber.createFloor)({
  config: _configReadonly.config,
  round,
  typed
});
const hypot = exports.hypot = /* #__PURE__ */(0, _factoriesNumber.createHypot)({
  abs,
  addScalar,
  divideScalar,
  isPositive,
  multiplyScalar,
  smaller,
  sqrt,
  typed
});
const lcm = exports.lcm = /* #__PURE__ */(0, _factoriesNumber.createLcm)({
  typed
});
const max = exports.max = /* #__PURE__ */(0, _factoriesNumber.createMax)({
  config: _configReadonly.config,
  isNaN,
  larger,
  numeric,
  typed
});
const min = exports.min = /* #__PURE__ */(0, _factoriesNumber.createMin)({
  config: _configReadonly.config,
  isNaN,
  numeric,
  smaller,
  typed
});
const norm = exports.norm = /* #__PURE__ */(0, _factoriesNumber.createNorm)({
  typed
});
const print = exports.print = /* #__PURE__ */(0, _factoriesNumber.createPrint)({
  typed
});
const range = exports.range = /* #__PURE__ */(0, _factoriesNumber.createRange)({
  matrix,
  add,
  config: _configReadonly.config,
  equal,
  isPositive,
  isZero,
  larger,
  largerEq,
  smaller,
  smallerEq,
  typed
});
const sign = exports.sign = /* #__PURE__ */(0, _factoriesNumber.createSign)({
  typed
});
const std = exports.std = /* #__PURE__ */(0, _factoriesNumber.createStd)({
  map,
  sqrt,
  typed,
  variance
});
const sum = exports.sum = /* #__PURE__ */(0, _factoriesNumber.createSum)({
  add,
  config: _configReadonly.config,
  numeric,
  typed
});
const asinh = exports.asinh = /* #__PURE__ */(0, _factoriesNumber.createAsinh)({
  typed
});
const ceil = exports.ceil = /* #__PURE__ */(0, _factoriesNumber.createCeil)({
  config: _configReadonly.config,
  round,
  typed
});
const corr = exports.corr = /* #__PURE__ */(0, _factoriesNumber.createCorr)({
  add,
  divide,
  matrix,
  mean,
  multiply,
  pow,
  sqrt,
  subtract,
  sum,
  typed
});
const fix = exports.fix = /* #__PURE__ */(0, _factoriesNumber.createFix)({
  ceil,
  floor,
  typed
});
const isNumeric = exports.isNumeric = /* #__PURE__ */(0, _factoriesNumber.createIsNumeric)({
  typed
});
const partitionSelect = exports.partitionSelect = /* #__PURE__ */(0, _factoriesNumber.createPartitionSelect)({
  compare,
  isNaN,
  isNumeric,
  typed
});
const stirlingS2 = exports.stirlingS2 = /* #__PURE__ */(0, _factoriesNumber.createStirlingS2)({
  addScalar,
  combinations,
  divideScalar,
  factorial,
  isInteger,
  isNegative,
  larger,
  multiplyScalar,
  number,
  pow,
  subtractScalar,
  typed
});
const bellNumbers = exports.bellNumbers = /* #__PURE__ */(0, _factoriesNumber.createBellNumbers)({
  addScalar,
  isInteger,
  isNegative,
  stirlingS2,
  typed
});
const deepEqual = exports.deepEqual = /* #__PURE__ */(0, _factoriesNumber.createDeepEqual)({
  equal,
  typed
});
const gcd = exports.gcd = /* #__PURE__ */(0, _factoriesNumber.createGcd)({
  typed
});
const median = exports.median = /* #__PURE__ */(0, _factoriesNumber.createMedian)({
  add,
  compare,
  divide,
  partitionSelect,
  typed
});
const quantileSeq = exports.quantileSeq = /* #__PURE__ */(0, _factoriesNumber.createQuantileSeq)({
  add,
  compare,
  divide,
  isInteger,
  larger,
  mapSlices,
  multiply,
  partitionSelect,
  smaller,
  smallerEq,
  subtract,
  typed
});
const mode = exports.mode = /* #__PURE__ */(0, _factoriesNumber.createMode)({
  isNaN,
  isNumeric,
  typed
});
const _true = exports._true = /* #__PURE__ */(0, _factoriesNumber.createTrue)({});
const hasNumericValue = exports.hasNumericValue = /* #__PURE__ */(0, _factoriesNumber.createHasNumericValue)({
  isNumeric,
  typed
});
const mad = exports.mad = /* #__PURE__ */(0, _factoriesNumber.createMad)({
  abs,
  map,
  median,
  subtract,
  typed
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dotMultiply = exports.dotDivide = exports.dot = exports.divideScalar = exports.divide = exports.distance = exports.diff = exports.diag = exports.deuteronMass = exports.det = exports.deepEqual = exports.cumsum = exports.cube = exports.ctranspose = exports.csch = exports.csc = exports.cross = exports.createUnit = exports.count = exports.coulombConstant = exports.coulomb = exports.coth = exports.cot = exports.cosh = exports.cos = exports.corr = exports.conj = exports.conductanceQuantum = exports.concat = exports.composition = exports.complex = exports.compareText = exports.compareNatural = exports.compare = exports.combinationsWithRep = exports.combinations = exports.column = exports.clone = exports.classicalElectronRadius = exports.ceil = exports.cbrt = exports.catalan = exports.boolean = exports.boltzmann = exports.bohrRadius = exports.bohrMagneton = exports.bitXor = exports.bitOr = exports.bitNot = exports.bitAnd = exports.bin = exports.bignumber = exports.bigint = exports.bernoulli = exports.bellNumbers = exports.avogadro = exports.atomicMass = exports.atanh = exports.atan2 = exports.atan = exports.asinh = exports.asin = exports.asech = exports.asec = exports.arg = exports.apply = exports.and = exports.addScalar = exports.add = exports.acsch = exports.acsc = exports.acoth = exports.acot = exports.acosh = exports.acos = exports.abs = exports._true = exports._null = exports._false = exports._NaN = exports._Infinity = exports.Unit = exports.SparseMatrix = exports.Spa = exports.SQRT2 = exports.SQRT1_2 = exports.ResultSet = exports.Range = exports.Matrix = exports.LOG2E = exports.LOG10E = exports.LN2 = exports.LN10 = exports.Index = exports.ImmutableDenseMatrix = exports.Fraction = exports.FibonacciHeap = exports.DenseMatrix = exports.Complex = exports.BigNumber = void 0;
exports.nthRoot = exports.not = exports.norm = exports.neutronMass = exports.multiplyScalar = exports.multiply = exports.multinomial = exports.molarVolume = exports.molarPlanckConstant = exports.molarMassC12 = exports.molarMass = exports.mode = exports.mod = exports.min = exports.median = exports.mean = exports.max = exports.matrixFromRows = exports.matrixFromFunction = exports.matrixFromColumns = exports.matrix = exports.mapSlices = exports.map = exports.magneticFluxQuantum = exports.magneticConstant = exports.mad = exports.lyap = exports.lusolve = exports.lup = exports.lsolveAll = exports.lsolve = exports.loschmidt = exports.log2 = exports.log1p = exports.log10 = exports.log = exports.lgamma = exports.leftShift = exports.lcm = exports.largerEq = exports.larger = exports.kron = exports.klitzing = exports.kldivergence = exports.isZero = exports.isPrime = exports.isPositive = exports.isNumeric = exports.isNegative = exports.isNaN = exports.isInteger = exports.isFinite = exports.isBounded = exports.invmod = exports.inverseConductanceQuantum = exports.inv = exports.intersect = exports.index = exports.im = exports.ifft = exports.identity = exports.i = exports.hypot = exports.hex = exports.hasNumericValue = exports.hartreeEnergy = exports.gravity = exports.gravitationConstant = exports.getMatrixDataType = exports.gcd = exports.gasConstant = exports.gamma = exports.freqz = exports.fraction = exports.format = exports.forEach = exports.floor = exports.flatten = exports.fix = exports.firstRadiation = exports.fineStructure = exports.filter = exports.fft = exports.fermiCoupling = exports.faraday = exports.factorial = exports.expm1 = exports.expm = exports.exp = exports.erf = exports.equalText = exports.equalScalar = exports.equal = exports.elementaryCharge = exports.electronMass = exports.electricConstant = exports.eigs = exports.efimovFactor = exports.e = exports.dotPow = void 0;
exports.vacuumImpedance = exports.usolveAll = exports.usolve = exports.unit = exports.unequal = exports.unaryPlus = exports.unaryMinus = exports.typed = exports.typeOf = exports.transpose = exports.trace = exports.toBest = exports.to = exports.thomsonCrossSection = exports.tau = exports.tanh = exports.tan = exports.sylvester = exports.sum = exports.subtractScalar = exports.subtract = exports.subset = exports.string = exports.stirlingS2 = exports.stefanBoltzmann = exports.std = exports.squeeze = exports.square = exports.sqrtm = exports.sqrt = exports.splitUnit = exports.speedOfLight = exports.sparse = exports.sort = exports.solveODE = exports.smallerEq = exports.smaller = exports.slu = exports.size = exports.sinh = exports.sin = exports.sign = exports.setUnion = exports.setSymDifference = exports.setSize = exports.setPowerset = exports.setMultiplicity = exports.setIsSubset = exports.setIntersect = exports.setDistinct = exports.setDifference = exports.setCartesian = exports.secondRadiation = exports.sech = exports.sec = exports.schur = exports.sackurTetrode = exports.rydberg = exports.row = exports.round = exports.rotationMatrix = exports.rotate = exports.rightLogShift = exports.rightArithShift = exports.resize = exports.reshape = exports.replacer = exports.reducedPlanckConstant = exports.re = exports.range = exports.randomInt = exports.random = exports.quantumOfCirculation = exports.quantileSeq = exports.qr = exports.protonMass = exports.prod = exports.print = exports.pow = exports.polynomialRoot = exports.planckTime = exports.planckTemperature = exports.planckMass = exports.planckLength = exports.planckConstant = exports.planckCharge = exports.pinv = exports.pickRandom = exports.pi = exports.phi = exports.permutations = exports.partitionSelect = exports.or = exports.ones = exports.oct = exports.numeric = exports.number = exports.nullish = exports.nuclearMagneton = exports.nthRoots = void 0;
exports.zpk2tf = exports.zeta = exports.zeros = exports.xor = exports.xgcd = exports.wienDisplacement = exports.weakMixingAngle = exports.version = exports.variance = void 0;
var _configReadonly = require("./configReadonly.js");
var _factoriesAny = require("../factoriesAny.js");
/**
 * THIS FILE IS AUTO-GENERATED
 * DON'T MAKE CHANGES HERE
 */

const BigNumber = exports.BigNumber = /* #__PURE__ */(0, _factoriesAny.createBigNumberClass)({
  config: _configReadonly.config
});
const Complex = exports.Complex = /* #__PURE__ */(0, _factoriesAny.createComplexClass)({});
const e = exports.e = /* #__PURE__ */(0, _factoriesAny.createE)({
  BigNumber,
  config: _configReadonly.config
});
const _false = exports._false = /* #__PURE__ */(0, _factoriesAny.createFalse)({});
const fineStructure = exports.fineStructure = /* #__PURE__ */(0, _factoriesAny.createFineStructure)({
  BigNumber,
  config: _configReadonly.config
});
const Fraction = exports.Fraction = /* #__PURE__ */(0, _factoriesAny.createFractionClass)({});
const i = exports.i = /* #__PURE__ */(0, _factoriesAny.createI)({
  Complex
});
const _Infinity = exports._Infinity = /* #__PURE__ */(0, _factoriesAny.createInfinity)({
  BigNumber,
  config: _configReadonly.config
});
const LN10 = exports.LN10 = /* #__PURE__ */(0, _factoriesAny.createLN10)({
  BigNumber,
  config: _configReadonly.config
});
const LOG10E = exports.LOG10E = /* #__PURE__ */(0, _factoriesAny.createLOG10E)({
  BigNumber,
  config: _configReadonly.config
});
const Matrix = exports.Matrix = /* #__PURE__ */(0, _factoriesAny.createMatrixClass)({});
const _NaN = exports._NaN = /* #__PURE__ */(0, _factoriesAny.createNaN)({
  BigNumber,
  config: _configReadonly.config
});
const _null = exports._null = /* #__PURE__ */(0, _factoriesAny.createNull)({});
const phi = exports.phi = /* #__PURE__ */(0, _factoriesAny.createPhi)({
  BigNumber,
  config: _configReadonly.config
});
const Range = exports.Range = /* #__PURE__ */(0, _factoriesAny.createRangeClass)({});
const ResultSet = exports.ResultSet = /* #__PURE__ */(0, _factoriesAny.createResultSet)({});
const SQRT1_2 = exports.SQRT1_2 = /* #__PURE__ */(0, _factoriesAny.createSQRT1_2)({
  BigNumber,
  config: _configReadonly.config
});
const sackurTetrode = exports.sackurTetrode = /* #__PURE__ */(0, _factoriesAny.createSackurTetrode)({
  BigNumber,
  config: _configReadonly.config
});
const tau = exports.tau = /* #__PURE__ */(0, _factoriesAny.createTau)({
  BigNumber,
  config: _configReadonly.config
});
const _true = exports._true = /* #__PURE__ */(0, _factoriesAny.createTrue)({});
const version = exports.version = /* #__PURE__ */(0, _factoriesAny.createVersion)({});
const DenseMatrix = exports.DenseMatrix = /* #__PURE__ */(0, _factoriesAny.createDenseMatrixClass)({
  Matrix,
  config: _configReadonly.config
});
const efimovFactor = exports.efimovFactor = /* #__PURE__ */(0, _factoriesAny.createEfimovFactor)({
  BigNumber,
  config: _configReadonly.config
});
const LN2 = exports.LN2 = /* #__PURE__ */(0, _factoriesAny.createLN2)({
  BigNumber,
  config: _configReadonly.config
});
const pi = exports.pi = /* #__PURE__ */(0, _factoriesAny.createPi)({
  BigNumber,
  config: _configReadonly.config
});
const replacer = exports.replacer = /* #__PURE__ */(0, _factoriesAny.createReplacer)({});
const SQRT2 = exports.SQRT2 = /* #__PURE__ */(0, _factoriesAny.createSQRT2)({
  BigNumber,
  config: _configReadonly.config
});
const typed = exports.typed = /* #__PURE__ */(0, _factoriesAny.createTyped)({
  BigNumber,
  Complex,
  DenseMatrix,
  Fraction
});
const weakMixingAngle = exports.weakMixingAngle = /* #__PURE__ */(0, _factoriesAny.createWeakMixingAngle)({
  BigNumber,
  config: _configReadonly.config
});
const abs = exports.abs = /* #__PURE__ */(0, _factoriesAny.createAbs)({
  typed
});
const acos = exports.acos = /* #__PURE__ */(0, _factoriesAny.createAcos)({
  Complex,
  config: _configReadonly.config,
  typed
});
const acot = exports.acot = /* #__PURE__ */(0, _factoriesAny.createAcot)({
  BigNumber,
  typed
});
const acsc = exports.acsc = /* #__PURE__ */(0, _factoriesAny.createAcsc)({
  BigNumber,
  Complex,
  config: _configReadonly.config,
  typed
});
const addScalar = exports.addScalar = /* #__PURE__ */(0, _factoriesAny.createAddScalar)({
  typed
});
const arg = exports.arg = /* #__PURE__ */(0, _factoriesAny.createArg)({
  typed
});
const asech = exports.asech = /* #__PURE__ */(0, _factoriesAny.createAsech)({
  BigNumber,
  Complex,
  config: _configReadonly.config,
  typed
});
const asinh = exports.asinh = /* #__PURE__ */(0, _factoriesAny.createAsinh)({
  typed
});
const atan = exports.atan = /* #__PURE__ */(0, _factoriesAny.createAtan)({
  typed
});
const atanh = exports.atanh = /* #__PURE__ */(0, _factoriesAny.createAtanh)({
  Complex,
  config: _configReadonly.config,
  typed
});
const bigint = exports.bigint = /* #__PURE__ */(0, _factoriesAny.createBigint)({
  typed
});
const bitNot = exports.bitNot = /* #__PURE__ */(0, _factoriesAny.createBitNot)({
  typed
});
const boolean = exports.boolean = /* #__PURE__ */(0, _factoriesAny.createBoolean)({
  typed
});
const clone = exports.clone = /* #__PURE__ */(0, _factoriesAny.createClone)({
  typed
});
const combinations = exports.combinations = /* #__PURE__ */(0, _factoriesAny.createCombinations)({
  typed
});
const complex = exports.complex = /* #__PURE__ */(0, _factoriesAny.createComplex)({
  Complex,
  typed
});
const conj = exports.conj = /* #__PURE__ */(0, _factoriesAny.createConj)({
  typed
});
const cos = exports.cos = /* #__PURE__ */(0, _factoriesAny.createCos)({
  typed
});
const cot = exports.cot = /* #__PURE__ */(0, _factoriesAny.createCot)({
  BigNumber,
  typed
});
const csc = exports.csc = /* #__PURE__ */(0, _factoriesAny.createCsc)({
  BigNumber,
  typed
});
const cube = exports.cube = /* #__PURE__ */(0, _factoriesAny.createCube)({
  typed
});
const equalScalar = exports.equalScalar = /* #__PURE__ */(0, _factoriesAny.createEqualScalar)({
  config: _configReadonly.config,
  typed
});
const erf = exports.erf = /* #__PURE__ */(0, _factoriesAny.createErf)({
  typed
});
const exp = exports.exp = /* #__PURE__ */(0, _factoriesAny.createExp)({
  typed
});
const expm1 = exports.expm1 = /* #__PURE__ */(0, _factoriesAny.createExpm1)({
  Complex,
  typed
});
const filter = exports.filter = /* #__PURE__ */(0, _factoriesAny.createFilter)({
  typed
});
const flatten = exports.flatten = /* #__PURE__ */(0, _factoriesAny.createFlatten)({
  typed
});
const forEach = exports.forEach = /* #__PURE__ */(0, _factoriesAny.createForEach)({
  typed
});
const format = exports.format = /* #__PURE__ */(0, _factoriesAny.createFormat)({
  typed
});
const getMatrixDataType = exports.getMatrixDataType = /* #__PURE__ */(0, _factoriesAny.createGetMatrixDataType)({
  typed
});
const hex = exports.hex = /* #__PURE__ */(0, _factoriesAny.createHex)({
  format,
  typed
});
const im = exports.im = /* #__PURE__ */(0, _factoriesAny.createIm)({
  typed
});
const isBounded = exports.isBounded = /* #__PURE__ */(0, _factoriesAny.createIsBounded)({
  typed
});
const isNaN = exports.isNaN = /* #__PURE__ */(0, _factoriesAny.createIsNaN)({
  typed
});
const isNumeric = exports.isNumeric = /* #__PURE__ */(0, _factoriesAny.createIsNumeric)({
  typed
});
const isPrime = exports.isPrime = /* #__PURE__ */(0, _factoriesAny.createIsPrime)({
  typed
});
const LOG2E = exports.LOG2E = /* #__PURE__ */(0, _factoriesAny.createLOG2E)({
  BigNumber,
  config: _configReadonly.config
});
const lgamma = exports.lgamma = /* #__PURE__ */(0, _factoriesAny.createLgamma)({
  Complex,
  typed
});
const log10 = exports.log10 = /* #__PURE__ */(0, _factoriesAny.createLog10)({
  Complex,
  config: _configReadonly.config,
  typed
});
const log2 = exports.log2 = /* #__PURE__ */(0, _factoriesAny.createLog2)({
  Complex,
  config: _configReadonly.config,
  typed
});
const map = exports.map = /* #__PURE__ */(0, _factoriesAny.createMap)({
  typed
});
const mode = exports.mode = /* #__PURE__ */(0, _factoriesAny.createMode)({
  isNaN,
  isNumeric,
  typed
});
const multiplyScalar = exports.multiplyScalar = /* #__PURE__ */(0, _factoriesAny.createMultiplyScalar)({
  typed
});
const not = exports.not = /* #__PURE__ */(0, _factoriesAny.createNot)({
  typed
});
const number = exports.number = /* #__PURE__ */(0, _factoriesAny.createNumber)({
  typed
});
const oct = exports.oct = /* #__PURE__ */(0, _factoriesAny.createOct)({
  format,
  typed
});
const pickRandom = exports.pickRandom = /* #__PURE__ */(0, _factoriesAny.createPickRandom)({
  config: _configReadonly.config,
  typed
});
const print = exports.print = /* #__PURE__ */(0, _factoriesAny.createPrint)({
  typed
});
const random = exports.random = /* #__PURE__ */(0, _factoriesAny.createRandom)({
  config: _configReadonly.config,
  typed
});
const re = exports.re = /* #__PURE__ */(0, _factoriesAny.createRe)({
  typed
});
const sec = exports.sec = /* #__PURE__ */(0, _factoriesAny.createSec)({
  BigNumber,
  typed
});
const sign = exports.sign = /* #__PURE__ */(0, _factoriesAny.createSign)({
  BigNumber,
  Fraction,
  complex,
  typed
});
const sin = exports.sin = /* #__PURE__ */(0, _factoriesAny.createSin)({
  typed
});
const size = exports.size = /* #__PURE__ */(0, _factoriesAny.createSize)({
  typed
});
const SparseMatrix = exports.SparseMatrix = /* #__PURE__ */(0, _factoriesAny.createSparseMatrixClass)({
  Matrix,
  equalScalar,
  typed
});
const splitUnit = exports.splitUnit = /* #__PURE__ */(0, _factoriesAny.createSplitUnit)({
  typed
});
const square = exports.square = /* #__PURE__ */(0, _factoriesAny.createSquare)({
  typed
});
const string = exports.string = /* #__PURE__ */(0, _factoriesAny.createString)({
  typed
});
const subtractScalar = exports.subtractScalar = /* #__PURE__ */(0, _factoriesAny.createSubtractScalar)({
  typed
});
const tan = exports.tan = /* #__PURE__ */(0, _factoriesAny.createTan)({
  typed
});
const toBest = exports.toBest = /* #__PURE__ */(0, _factoriesAny.createToBest)({
  typed
});
const typeOf = exports.typeOf = /* #__PURE__ */(0, _factoriesAny.createTypeOf)({
  typed
});
const acosh = exports.acosh = /* #__PURE__ */(0, _factoriesAny.createAcosh)({
  Complex,
  config: _configReadonly.config,
  typed
});
const acsch = exports.acsch = /* #__PURE__ */(0, _factoriesAny.createAcsch)({
  BigNumber,
  typed
});
const asec = exports.asec = /* #__PURE__ */(0, _factoriesAny.createAsec)({
  BigNumber,
  Complex,
  config: _configReadonly.config,
  typed
});
const bignumber = exports.bignumber = /* #__PURE__ */(0, _factoriesAny.createBignumber)({
  BigNumber,
  typed
});
const combinationsWithRep = exports.combinationsWithRep = /* #__PURE__ */(0, _factoriesAny.createCombinationsWithRep)({
  typed
});
const cosh = exports.cosh = /* #__PURE__ */(0, _factoriesAny.createCosh)({
  typed
});
const csch = exports.csch = /* #__PURE__ */(0, _factoriesAny.createCsch)({
  BigNumber,
  typed
});
const dot = exports.dot = /* #__PURE__ */(0, _factoriesAny.createDot)({
  addScalar,
  conj,
  multiplyScalar,
  size,
  typed
});
const hasNumericValue = exports.hasNumericValue = /* #__PURE__ */(0, _factoriesAny.createHasNumericValue)({
  isNumeric,
  typed
});
const isFinite = exports.isFinite = /* #__PURE__ */(0, _factoriesAny.createIsFinite)({
  isBounded,
  map,
  typed
});
const isNegative = exports.isNegative = /* #__PURE__ */(0, _factoriesAny.createIsNegative)({
  config: _configReadonly.config,
  typed
});
const isZero = exports.isZero = /* #__PURE__ */(0, _factoriesAny.createIsZero)({
  equalScalar,
  typed
});
const matrix = exports.matrix = /* #__PURE__ */(0, _factoriesAny.createMatrix)({
  DenseMatrix,
  Matrix,
  SparseMatrix,
  typed
});
const matrixFromFunction = exports.matrixFromFunction = /* #__PURE__ */(0, _factoriesAny.createMatrixFromFunction)({
  isZero,
  matrix,
  typed
});
const multiply = exports.multiply = /* #__PURE__ */(0, _factoriesAny.createMultiply)({
  addScalar,
  dot,
  equalScalar,
  matrix,
  multiplyScalar,
  typed
});
const ones = exports.ones = /* #__PURE__ */(0, _factoriesAny.createOnes)({
  BigNumber,
  config: _configReadonly.config,
  matrix,
  typed
});
const randomInt = exports.randomInt = /* #__PURE__ */(0, _factoriesAny.createRandomInt)({
  config: _configReadonly.config,
  log2,
  typed
});
const resize = exports.resize = /* #__PURE__ */(0, _factoriesAny.createResize)({
  config: _configReadonly.config,
  matrix
});
const sech = exports.sech = /* #__PURE__ */(0, _factoriesAny.createSech)({
  BigNumber,
  typed
});
const sinh = exports.sinh = /* #__PURE__ */(0, _factoriesAny.createSinh)({
  typed
});
const sparse = exports.sparse = /* #__PURE__ */(0, _factoriesAny.createSparse)({
  SparseMatrix,
  typed
});
const sqrt = exports.sqrt = /* #__PURE__ */(0, _factoriesAny.createSqrt)({
  Complex,
  config: _configReadonly.config,
  typed
});
const squeeze = exports.squeeze = /* #__PURE__ */(0, _factoriesAny.createSqueeze)({
  typed
});
const tanh = exports.tanh = /* #__PURE__ */(0, _factoriesAny.createTanh)({
  typed
});
const transpose = exports.transpose = /* #__PURE__ */(0, _factoriesAny.createTranspose)({
  matrix,
  typed
});
const xgcd = exports.xgcd = /* #__PURE__ */(0, _factoriesAny.createXgcd)({
  BigNumber,
  config: _configReadonly.config,
  matrix,
  typed
});
const zeros = exports.zeros = /* #__PURE__ */(0, _factoriesAny.createZeros)({
  BigNumber,
  config: _configReadonly.config,
  matrix,
  typed
});
const acoth = exports.acoth = /* #__PURE__ */(0, _factoriesAny.createAcoth)({
  BigNumber,
  Complex,
  config: _configReadonly.config,
  typed
});
const asin = exports.asin = /* #__PURE__ */(0, _factoriesAny.createAsin)({
  Complex,
  config: _configReadonly.config,
  typed
});
const bin = exports.bin = /* #__PURE__ */(0, _factoriesAny.createBin)({
  format,
  typed
});
const coth = exports.coth = /* #__PURE__ */(0, _factoriesAny.createCoth)({
  BigNumber,
  typed
});
const ctranspose = exports.ctranspose = /* #__PURE__ */(0, _factoriesAny.createCtranspose)({
  conj,
  transpose,
  typed
});
const diag = exports.diag = /* #__PURE__ */(0, _factoriesAny.createDiag)({
  DenseMatrix,
  SparseMatrix,
  matrix,
  typed
});
const equal = exports.equal = /* #__PURE__ */(0, _factoriesAny.createEqual)({
  DenseMatrix,
  SparseMatrix,
  equalScalar,
  matrix,
  typed
});
const fraction = exports.fraction = /* #__PURE__ */(0, _factoriesAny.createFraction)({
  Fraction,
  typed
});
const identity = exports.identity = /* #__PURE__ */(0, _factoriesAny.createIdentity)({
  BigNumber,
  DenseMatrix,
  SparseMatrix,
  config: _configReadonly.config,
  matrix,
  typed
});
const isInteger = exports.isInteger = /* #__PURE__ */(0, _factoriesAny.createIsInteger)({
  equal,
  typed
});
const kron = exports.kron = /* #__PURE__ */(0, _factoriesAny.createKron)({
  matrix,
  multiplyScalar,
  typed
});
const mapSlices = exports.mapSlices = /* #__PURE__ */(0, _factoriesAny.createMapSlices)({
  isInteger,
  typed
});
const apply = exports.apply = mapSlices;
const matrixFromColumns = exports.matrixFromColumns = /* #__PURE__ */(0, _factoriesAny.createMatrixFromColumns)({
  flatten,
  matrix,
  size,
  typed
});
const numeric = exports.numeric = /* #__PURE__ */(0, _factoriesAny.createNumeric)({
  bignumber,
  fraction,
  number
});
const prod = exports.prod = /* #__PURE__ */(0, _factoriesAny.createProd)({
  config: _configReadonly.config,
  multiplyScalar,
  numeric,
  typed
});
const reshape = exports.reshape = /* #__PURE__ */(0, _factoriesAny.createReshape)({
  isInteger,
  matrix,
  typed
});
const round = exports.round = /* #__PURE__ */(0, _factoriesAny.createRound)({
  BigNumber,
  DenseMatrix,
  config: _configReadonly.config,
  equalScalar,
  matrix,
  typed,
  zeros
});
const unaryMinus = exports.unaryMinus = /* #__PURE__ */(0, _factoriesAny.createUnaryMinus)({
  typed
});
const bernoulli = exports.bernoulli = /* #__PURE__ */(0, _factoriesAny.createBernoulli)({
  BigNumber,
  Fraction,
  config: _configReadonly.config,
  isInteger,
  number,
  typed
});
const cbrt = exports.cbrt = /* #__PURE__ */(0, _factoriesAny.createCbrt)({
  BigNumber,
  Complex,
  Fraction,
  config: _configReadonly.config,
  isNegative,
  matrix,
  typed,
  unaryMinus
});
const concat = exports.concat = /* #__PURE__ */(0, _factoriesAny.createConcat)({
  isInteger,
  matrix,
  typed
});
const count = exports.count = /* #__PURE__ */(0, _factoriesAny.createCount)({
  prod,
  size,
  typed
});
const deepEqual = exports.deepEqual = /* #__PURE__ */(0, _factoriesAny.createDeepEqual)({
  equal,
  typed
});
const divideScalar = exports.divideScalar = /* #__PURE__ */(0, _factoriesAny.createDivideScalar)({
  numeric,
  typed
});
const dotMultiply = exports.dotMultiply = /* #__PURE__ */(0, _factoriesAny.createDotMultiply)({
  concat,
  equalScalar,
  matrix,
  multiplyScalar,
  typed
});
const floor = exports.floor = /* #__PURE__ */(0, _factoriesAny.createFloor)({
  DenseMatrix,
  config: _configReadonly.config,
  equalScalar,
  matrix,
  round,
  typed,
  zeros
});
const gcd = exports.gcd = /* #__PURE__ */(0, _factoriesAny.createGcd)({
  BigNumber,
  DenseMatrix,
  concat,
  config: _configReadonly.config,
  equalScalar,
  matrix,
  round,
  typed,
  zeros
});
const isPositive = exports.isPositive = /* #__PURE__ */(0, _factoriesAny.createIsPositive)({
  config: _configReadonly.config,
  typed
});
const larger = exports.larger = /* #__PURE__ */(0, _factoriesAny.createLarger)({
  DenseMatrix,
  SparseMatrix,
  bignumber,
  concat,
  config: _configReadonly.config,
  matrix,
  typed
});
const lcm = exports.lcm = /* #__PURE__ */(0, _factoriesAny.createLcm)({
  concat,
  equalScalar,
  matrix,
  typed
});
const leftShift = exports.leftShift = /* #__PURE__ */(0, _factoriesAny.createLeftShift)({
  DenseMatrix,
  concat,
  equalScalar,
  matrix,
  typed,
  zeros
});
const lsolve = exports.lsolve = /* #__PURE__ */(0, _factoriesAny.createLsolve)({
  DenseMatrix,
  divideScalar,
  equalScalar,
  matrix,
  multiplyScalar,
  subtractScalar,
  typed
});
const max = exports.max = /* #__PURE__ */(0, _factoriesAny.createMax)({
  config: _configReadonly.config,
  isNaN,
  larger,
  numeric,
  typed
});
const mod = exports.mod = /* #__PURE__ */(0, _factoriesAny.createMod)({
  DenseMatrix,
  concat,
  config: _configReadonly.config,
  equalScalar,
  matrix,
  round,
  typed,
  zeros
});
const nthRoot = exports.nthRoot = /* #__PURE__ */(0, _factoriesAny.createNthRoot)({
  BigNumber,
  concat,
  equalScalar,
  matrix,
  typed
});
const nullish = exports.nullish = /* #__PURE__ */(0, _factoriesAny.createNullish)({
  deepEqual,
  flatten,
  matrix,
  size,
  typed
});
const or = exports.or = /* #__PURE__ */(0, _factoriesAny.createOr)({
  DenseMatrix,
  concat,
  equalScalar,
  matrix,
  typed
});
const qr = exports.qr = /* #__PURE__ */(0, _factoriesAny.createQr)({
  addScalar,
  complex,
  conj,
  divideScalar,
  equal,
  identity,
  isZero,
  matrix,
  multiplyScalar,
  sign,
  sqrt,
  subtractScalar,
  typed,
  unaryMinus,
  zeros
});
const rightArithShift = exports.rightArithShift = /* #__PURE__ */(0, _factoriesAny.createRightArithShift)({
  DenseMatrix,
  concat,
  equalScalar,
  matrix,
  typed,
  zeros
});
const smaller = exports.smaller = /* #__PURE__ */(0, _factoriesAny.createSmaller)({
  DenseMatrix,
  SparseMatrix,
  bignumber,
  concat,
  config: _configReadonly.config,
  matrix,
  typed
});
const subtract = exports.subtract = /* #__PURE__ */(0, _factoriesAny.createSubtract)({
  DenseMatrix,
  concat,
  equalScalar,
  matrix,
  subtractScalar,
  typed,
  unaryMinus
});
const to = exports.to = /* #__PURE__ */(0, _factoriesAny.createTo)({
  concat,
  matrix,
  typed
});
const unaryPlus = exports.unaryPlus = /* #__PURE__ */(0, _factoriesAny.createUnaryPlus)({
  config: _configReadonly.config,
  numeric,
  typed
});
const usolve = exports.usolve = /* #__PURE__ */(0, _factoriesAny.createUsolve)({
  DenseMatrix,
  divideScalar,
  equalScalar,
  matrix,
  multiplyScalar,
  subtractScalar,
  typed
});
const xor = exports.xor = /* #__PURE__ */(0, _factoriesAny.createXor)({
  DenseMatrix,
  SparseMatrix,
  concat,
  matrix,
  typed
});
const add = exports.add = /* #__PURE__ */(0, _factoriesAny.createAdd)({
  DenseMatrix,
  SparseMatrix,
  addScalar,
  concat,
  equalScalar,
  matrix,
  typed
});
const atan2 = exports.atan2 = /* #__PURE__ */(0, _factoriesAny.createAtan2)({
  BigNumber,
  DenseMatrix,
  concat,
  equalScalar,
  matrix,
  typed
});
const bitAnd = exports.bitAnd = /* #__PURE__ */(0, _factoriesAny.createBitAnd)({
  concat,
  equalScalar,
  matrix,
  typed
});
const bitOr = exports.bitOr = /* #__PURE__ */(0, _factoriesAny.createBitOr)({
  DenseMatrix,
  concat,
  equalScalar,
  matrix,
  typed
});
const bitXor = exports.bitXor = /* #__PURE__ */(0, _factoriesAny.createBitXor)({
  DenseMatrix,
  SparseMatrix,
  concat,
  matrix,
  typed
});
const catalan = exports.catalan = /* #__PURE__ */(0, _factoriesAny.createCatalan)({
  addScalar,
  combinations,
  divideScalar,
  isInteger,
  isNegative,
  multiplyScalar,
  typed
});
const compare = exports.compare = /* #__PURE__ */(0, _factoriesAny.createCompare)({
  BigNumber,
  DenseMatrix,
  Fraction,
  concat,
  config: _configReadonly.config,
  equalScalar,
  matrix,
  typed
});
const compareText = exports.compareText = /* #__PURE__ */(0, _factoriesAny.createCompareText)({
  concat,
  matrix,
  typed
});
const composition = exports.composition = /* #__PURE__ */(0, _factoriesAny.createComposition)({
  addScalar,
  combinations,
  isInteger,
  isNegative,
  isPositive,
  larger,
  typed
});
const cross = exports.cross = /* #__PURE__ */(0, _factoriesAny.createCross)({
  matrix,
  multiply,
  subtract,
  typed
});
const det = exports.det = /* #__PURE__ */(0, _factoriesAny.createDet)({
  divideScalar,
  isZero,
  matrix,
  multiply,
  subtractScalar,
  typed,
  unaryMinus
});
const diff = exports.diff = /* #__PURE__ */(0, _factoriesAny.createDiff)({
  matrix,
  number,
  subtract,
  typed
});
const distance = exports.distance = /* #__PURE__ */(0, _factoriesAny.createDistance)({
  abs,
  addScalar,
  deepEqual,
  divideScalar,
  multiplyScalar,
  sqrt,
  subtractScalar,
  typed
});
const dotDivide = exports.dotDivide = /* #__PURE__ */(0, _factoriesAny.createDotDivide)({
  DenseMatrix,
  SparseMatrix,
  concat,
  divideScalar,
  equalScalar,
  matrix,
  typed
});
const equalText = exports.equalText = /* #__PURE__ */(0, _factoriesAny.createEqualText)({
  compareText,
  isZero,
  typed
});
const FibonacciHeap = exports.FibonacciHeap = /* #__PURE__ */(0, _factoriesAny.createFibonacciHeapClass)({
  larger,
  smaller
});
const hypot = exports.hypot = /* #__PURE__ */(0, _factoriesAny.createHypot)({
  abs,
  addScalar,
  divideScalar,
  isPositive,
  multiplyScalar,
  smaller,
  sqrt,
  typed
});
const ImmutableDenseMatrix = exports.ImmutableDenseMatrix = /* #__PURE__ */(0, _factoriesAny.createImmutableDenseMatrixClass)({
  DenseMatrix,
  smaller
});
const Index = exports.Index = /* #__PURE__ */(0, _factoriesAny.createIndexClass)({
  ImmutableDenseMatrix,
  getMatrixDataType
});
const intersect = exports.intersect = /* #__PURE__ */(0, _factoriesAny.createIntersect)({
  abs,
  add,
  addScalar,
  config: _configReadonly.config,
  divideScalar,
  equalScalar,
  flatten,
  isNumeric,
  isZero,
  matrix,
  multiply,
  multiplyScalar,
  smaller,
  subtract,
  typed
});
const invmod = exports.invmod = /* #__PURE__ */(0, _factoriesAny.createInvmod)({
  BigNumber,
  add,
  config: _configReadonly.config,
  equal,
  isInteger,
  mod,
  smaller,
  typed,
  xgcd
});
const largerEq = exports.largerEq = /* #__PURE__ */(0, _factoriesAny.createLargerEq)({
  DenseMatrix,
  SparseMatrix,
  concat,
  config: _configReadonly.config,
  matrix,
  typed
});
const log = exports.log = /* #__PURE__ */(0, _factoriesAny.createLog)({
  Complex,
  config: _configReadonly.config,
  divideScalar,
  typeOf,
  typed
});
const lsolveAll = exports.lsolveAll = /* #__PURE__ */(0, _factoriesAny.createLsolveAll)({
  DenseMatrix,
  divideScalar,
  equalScalar,
  matrix,
  multiplyScalar,
  subtractScalar,
  typed
});
const matrixFromRows = exports.matrixFromRows = /* #__PURE__ */(0, _factoriesAny.createMatrixFromRows)({
  flatten,
  matrix,
  size,
  typed
});
const min = exports.min = /* #__PURE__ */(0, _factoriesAny.createMin)({
  config: _configReadonly.config,
  isNaN,
  numeric,
  smaller,
  typed
});
const nthRoots = exports.nthRoots = /* #__PURE__ */(0, _factoriesAny.createNthRoots)({
  Complex,
  config: _configReadonly.config,
  divideScalar,
  typed
});
const partitionSelect = exports.partitionSelect = /* #__PURE__ */(0, _factoriesAny.createPartitionSelect)({
  compare,
  isNaN,
  isNumeric,
  typed
});
const rightLogShift = exports.rightLogShift = /* #__PURE__ */(0, _factoriesAny.createRightLogShift)({
  DenseMatrix,
  concat,
  equalScalar,
  matrix,
  typed,
  zeros
});
const slu = exports.slu = /* #__PURE__ */(0, _factoriesAny.createSlu)({
  SparseMatrix,
  abs,
  add,
  divideScalar,
  larger,
  largerEq,
  multiply,
  subtract,
  transpose,
  typed
});
const Spa = exports.Spa = /* #__PURE__ */(0, _factoriesAny.createSpaClass)({
  FibonacciHeap,
  addScalar,
  equalScalar
});
const subset = exports.subset = /* #__PURE__ */(0, _factoriesAny.createSubset)({
  add,
  matrix,
  typed,
  zeros
});
const sum = exports.sum = /* #__PURE__ */(0, _factoriesAny.createSum)({
  add,
  config: _configReadonly.config,
  numeric,
  typed
});
const trace = exports.trace = /* #__PURE__ */(0, _factoriesAny.createTrace)({
  add,
  matrix,
  typed
});
const usolveAll = exports.usolveAll = /* #__PURE__ */(0, _factoriesAny.createUsolveAll)({
  DenseMatrix,
  divideScalar,
  equalScalar,
  matrix,
  multiplyScalar,
  subtractScalar,
  typed
});
const zpk2tf = exports.zpk2tf = /* #__PURE__ */(0, _factoriesAny.createZpk2tf)({
  Complex,
  add,
  multiply,
  number,
  typed
});
const ceil = exports.ceil = /* #__PURE__ */(0, _factoriesAny.createCeil)({
  DenseMatrix,
  config: _configReadonly.config,
  equalScalar,
  matrix,
  round,
  typed,
  zeros
});
const compareNatural = exports.compareNatural = /* #__PURE__ */(0, _factoriesAny.createCompareNatural)({
  compare,
  typed
});
const cumsum = exports.cumsum = /* #__PURE__ */(0, _factoriesAny.createCumSum)({
  add,
  typed,
  unaryPlus
});
const fix = exports.fix = /* #__PURE__ */(0, _factoriesAny.createFix)({
  Complex,
  DenseMatrix,
  ceil,
  equalScalar,
  floor,
  matrix,
  typed,
  zeros
});
const index = exports.index = /* #__PURE__ */(0, _factoriesAny.createIndex)({
  Index,
  typed
});
const inv = exports.inv = /* #__PURE__ */(0, _factoriesAny.createInv)({
  abs,
  addScalar,
  det,
  divideScalar,
  identity,
  matrix,
  multiply,
  typed,
  unaryMinus
});
const log1p = exports.log1p = /* #__PURE__ */(0, _factoriesAny.createLog1p)({
  Complex,
  config: _configReadonly.config,
  divideScalar,
  log,
  typed
});
const lup = exports.lup = /* #__PURE__ */(0, _factoriesAny.createLup)({
  DenseMatrix,
  Spa,
  SparseMatrix,
  abs,
  addScalar,
  divideScalar,
  equalScalar,
  larger,
  matrix,
  multiplyScalar,
  subtractScalar,
  typed,
  unaryMinus
});
const pinv = exports.pinv = /* #__PURE__ */(0, _factoriesAny.createPinv)({
  Complex,
  add,
  ctranspose,
  deepEqual,
  divideScalar,
  dot,
  dotDivide,
  equal,
  inv,
  matrix,
  multiply,
  typed
});
const pow = exports.pow = /* #__PURE__ */(0, _factoriesAny.createPow)({
  Complex,
  config: _configReadonly.config,
  fraction,
  identity,
  inv,
  matrix,
  multiply,
  number,
  typed
});
const setCartesian = exports.setCartesian = /* #__PURE__ */(0, _factoriesAny.createSetCartesian)({
  DenseMatrix,
  Index,
  compareNatural,
  size,
  subset,
  typed
});
const setDistinct = exports.setDistinct = /* #__PURE__ */(0, _factoriesAny.createSetDistinct)({
  DenseMatrix,
  Index,
  compareNatural,
  size,
  subset,
  typed
});
const setIsSubset = exports.setIsSubset = /* #__PURE__ */(0, _factoriesAny.createSetIsSubset)({
  Index,
  compareNatural,
  size,
  subset,
  typed
});
const setPowerset = exports.setPowerset = /* #__PURE__ */(0, _factoriesAny.createSetPowerset)({
  Index,
  compareNatural,
  size,
  subset,
  typed
});
const smallerEq = exports.smallerEq = /* #__PURE__ */(0, _factoriesAny.createSmallerEq)({
  DenseMatrix,
  SparseMatrix,
  concat,
  config: _configReadonly.config,
  matrix,
  typed
});
const sort = exports.sort = /* #__PURE__ */(0, _factoriesAny.createSort)({
  compare,
  compareNatural,
  matrix,
  typed
});
const sqrtm = exports.sqrtm = /* #__PURE__ */(0, _factoriesAny.createSqrtm)({
  abs,
  add,
  identity,
  inv,
  map,
  max,
  multiply,
  size,
  sqrt,
  subtract,
  typed
});
const unequal = exports.unequal = /* #__PURE__ */(0, _factoriesAny.createUnequal)({
  DenseMatrix,
  SparseMatrix,
  concat,
  config: _configReadonly.config,
  equalScalar,
  matrix,
  typed
});
const and = exports.and = /* #__PURE__ */(0, _factoriesAny.createAnd)({
  concat,
  equalScalar,
  matrix,
  not,
  typed,
  zeros
});
const divide = exports.divide = /* #__PURE__ */(0, _factoriesAny.createDivide)({
  divideScalar,
  equalScalar,
  inv,
  matrix,
  multiply,
  typed
});
const expm = exports.expm = /* #__PURE__ */(0, _factoriesAny.createExpm)({
  abs,
  add,
  identity,
  inv,
  multiply,
  typed
});
const fft = exports.fft = /* #__PURE__ */(0, _factoriesAny.createFft)({
  addScalar,
  ceil,
  conj,
  divideScalar,
  dotDivide,
  exp,
  i,
  log2,
  matrix,
  multiplyScalar,
  pow,
  tau,
  typed
});
const freqz = exports.freqz = /* #__PURE__ */(0, _factoriesAny.createFreqz)({
  Complex,
  add,
  divide,
  matrix,
  multiply,
  typed
});
const gamma = exports.gamma = /* #__PURE__ */(0, _factoriesAny.createGamma)({
  BigNumber,
  Complex,
  config: _configReadonly.config,
  multiplyScalar,
  pow,
  typed
});
const ifft = exports.ifft = /* #__PURE__ */(0, _factoriesAny.createIfft)({
  conj,
  dotDivide,
  fft,
  typed
});
const kldivergence = exports.kldivergence = /* #__PURE__ */(0, _factoriesAny.createKldivergence)({
  divide,
  dotDivide,
  isNumeric,
  log,
  map,
  matrix,
  multiply,
  sum,
  typed
});
const lusolve = exports.lusolve = /* #__PURE__ */(0, _factoriesAny.createLusolve)({
  DenseMatrix,
  lsolve,
  lup,
  matrix,
  slu,
  typed,
  usolve
});
const mean = exports.mean = /* #__PURE__ */(0, _factoriesAny.createMean)({
  add,
  divide,
  typed
});
const median = exports.median = /* #__PURE__ */(0, _factoriesAny.createMedian)({
  add,
  compare,
  divide,
  partitionSelect,
  typed
});
const polynomialRoot = exports.polynomialRoot = /* #__PURE__ */(0, _factoriesAny.createPolynomialRoot)({
  add,
  cbrt,
  divide,
  equalScalar,
  im,
  isZero,
  multiply,
  re,
  sqrt,
  subtract,
  typeOf,
  typed,
  unaryMinus
});
const quantileSeq = exports.quantileSeq = /* #__PURE__ */(0, _factoriesAny.createQuantileSeq)({
  bignumber,
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
const range = exports.range = /* #__PURE__ */(0, _factoriesAny.createRange)({
  bignumber,
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
const row = exports.row = /* #__PURE__ */(0, _factoriesAny.createRow)({
  Index,
  matrix,
  range,
  typed
});
const setDifference = exports.setDifference = /* #__PURE__ */(0, _factoriesAny.createSetDifference)({
  DenseMatrix,
  Index,
  compareNatural,
  size,
  subset,
  typed
});
const setMultiplicity = exports.setMultiplicity = /* #__PURE__ */(0, _factoriesAny.createSetMultiplicity)({
  Index,
  compareNatural,
  size,
  subset,
  typed
});
const setSymDifference = exports.setSymDifference = /* #__PURE__ */(0, _factoriesAny.createSetSymDifference)({
  Index,
  concat,
  setDifference,
  size,
  subset,
  typed
});
const solveODE = exports.solveODE = /* #__PURE__ */(0, _factoriesAny.createSolveODE)({
  abs,
  add,
  bignumber,
  divide,
  isNegative,
  isPositive,
  larger,
  map,
  matrix,
  max,
  multiply,
  smaller,
  subtract,
  typed,
  unaryMinus
});
const Unit = exports.Unit = /* #__PURE__ */(0, _factoriesAny.createUnitClass)({
  BigNumber,
  Complex,
  Fraction,
  abs,
  addScalar,
  config: _configReadonly.config,
  divideScalar,
  equal,
  fix,
  format,
  isNumeric,
  multiplyScalar,
  number,
  pow,
  round,
  subtractScalar
});
const vacuumImpedance = exports.vacuumImpedance = /* #__PURE__ */(0, _factoriesAny.createVacuumImpedance)({
  BigNumber,
  Unit,
  config: _configReadonly.config
});
const atomicMass = exports.atomicMass = /* #__PURE__ */(0, _factoriesAny.createAtomicMass)({
  BigNumber,
  Unit,
  config: _configReadonly.config
});
const bohrMagneton = exports.bohrMagneton = /* #__PURE__ */(0, _factoriesAny.createBohrMagneton)({
  BigNumber,
  Unit,
  config: _configReadonly.config
});
const boltzmann = exports.boltzmann = /* #__PURE__ */(0, _factoriesAny.createBoltzmann)({
  BigNumber,
  Unit,
  config: _configReadonly.config
});
const column = exports.column = /* #__PURE__ */(0, _factoriesAny.createColumn)({
  Index,
  matrix,
  range,
  typed
});
const conductanceQuantum = exports.conductanceQuantum = /* #__PURE__ */(0, _factoriesAny.createConductanceQuantum)({
  BigNumber,
  Unit,
  config: _configReadonly.config
});
const coulomb = exports.coulomb = /* #__PURE__ */(0, _factoriesAny.createCoulomb)({
  BigNumber,
  Unit,
  config: _configReadonly.config
});
const createUnit = exports.createUnit = /* #__PURE__ */(0, _factoriesAny.createCreateUnit)({
  Unit,
  typed
});
const deuteronMass = exports.deuteronMass = /* #__PURE__ */(0, _factoriesAny.createDeuteronMass)({
  BigNumber,
  Unit,
  config: _configReadonly.config
});
const eigs = exports.eigs = /* #__PURE__ */(0, _factoriesAny.createEigs)({
  abs,
  add,
  addScalar,
  atan,
  bignumber,
  column,
  complex,
  config: _configReadonly.config,
  cos,
  diag,
  divideScalar,
  dot,
  equal,
  flatten,
  im,
  inv,
  larger,
  matrix,
  matrixFromColumns,
  multiply,
  multiplyScalar,
  number,
  qr,
  re,
  reshape,
  sin,
  size,
  smaller,
  sqrt,
  subtract,
  typed,
  usolve,
  usolveAll
});
const electronMass = exports.electronMass = /* #__PURE__ */(0, _factoriesAny.createElectronMass)({
  BigNumber,
  Unit,
  config: _configReadonly.config
});
const factorial = exports.factorial = /* #__PURE__ */(0, _factoriesAny.createFactorial)({
  gamma,
  typed
});
const fermiCoupling = exports.fermiCoupling = /* #__PURE__ */(0, _factoriesAny.createFermiCoupling)({
  BigNumber,
  Unit,
  config: _configReadonly.config
});
const gasConstant = exports.gasConstant = /* #__PURE__ */(0, _factoriesAny.createGasConstant)({
  BigNumber,
  Unit,
  config: _configReadonly.config
});
const gravity = exports.gravity = /* #__PURE__ */(0, _factoriesAny.createGravity)({
  BigNumber,
  Unit,
  config: _configReadonly.config
});
const klitzing = exports.klitzing = /* #__PURE__ */(0, _factoriesAny.createKlitzing)({
  BigNumber,
  Unit,
  config: _configReadonly.config
});
const loschmidt = exports.loschmidt = /* #__PURE__ */(0, _factoriesAny.createLoschmidt)({
  BigNumber,
  Unit,
  config: _configReadonly.config
});
const mad = exports.mad = /* #__PURE__ */(0, _factoriesAny.createMad)({
  abs,
  map,
  median,
  subtract,
  typed
});
const magneticFluxQuantum = exports.magneticFluxQuantum = /* #__PURE__ */(0, _factoriesAny.createMagneticFluxQuantum)({
  BigNumber,
  Unit,
  config: _configReadonly.config
});
const molarMass = exports.molarMass = /* #__PURE__ */(0, _factoriesAny.createMolarMass)({
  BigNumber,
  Unit,
  config: _configReadonly.config
});
const molarPlanckConstant = exports.molarPlanckConstant = /* #__PURE__ */(0, _factoriesAny.createMolarPlanckConstant)({
  BigNumber,
  Unit,
  config: _configReadonly.config
});
const multinomial = exports.multinomial = /* #__PURE__ */(0, _factoriesAny.createMultinomial)({
  add,
  divide,
  factorial,
  isInteger,
  isPositive,
  multiply,
  typed
});
const norm = exports.norm = /* #__PURE__ */(0, _factoriesAny.createNorm)({
  abs,
  add,
  conj,
  ctranspose,
  eigs,
  equalScalar,
  larger,
  matrix,
  multiply,
  pow,
  smaller,
  sqrt,
  typed
});
const permutations = exports.permutations = /* #__PURE__ */(0, _factoriesAny.createPermutations)({
  factorial,
  typed
});
const planckConstant = exports.planckConstant = /* #__PURE__ */(0, _factoriesAny.createPlanckConstant)({
  BigNumber,
  Unit,
  config: _configReadonly.config
});
const planckMass = exports.planckMass = /* #__PURE__ */(0, _factoriesAny.createPlanckMass)({
  BigNumber,
  Unit,
  config: _configReadonly.config
});
const planckTime = exports.planckTime = /* #__PURE__ */(0, _factoriesAny.createPlanckTime)({
  BigNumber,
  Unit,
  config: _configReadonly.config
});
const reducedPlanckConstant = exports.reducedPlanckConstant = /* #__PURE__ */(0, _factoriesAny.createReducedPlanckConstant)({
  BigNumber,
  Unit,
  config: _configReadonly.config
});
const rotationMatrix = exports.rotationMatrix = /* #__PURE__ */(0, _factoriesAny.createRotationMatrix)({
  BigNumber,
  DenseMatrix,
  SparseMatrix,
  addScalar,
  config: _configReadonly.config,
  cos,
  matrix,
  multiplyScalar,
  norm,
  sin,
  typed,
  unaryMinus
});
const rydberg = exports.rydberg = /* #__PURE__ */(0, _factoriesAny.createRydberg)({
  BigNumber,
  Unit,
  config: _configReadonly.config
});
const secondRadiation = exports.secondRadiation = /* #__PURE__ */(0, _factoriesAny.createSecondRadiation)({
  BigNumber,
  Unit,
  config: _configReadonly.config
});
const setSize = exports.setSize = /* #__PURE__ */(0, _factoriesAny.createSetSize)({
  compareNatural,
  typed
});
const speedOfLight = exports.speedOfLight = /* #__PURE__ */(0, _factoriesAny.createSpeedOfLight)({
  BigNumber,
  Unit,
  config: _configReadonly.config
});
const stefanBoltzmann = exports.stefanBoltzmann = /* #__PURE__ */(0, _factoriesAny.createStefanBoltzmann)({
  BigNumber,
  Unit,
  config: _configReadonly.config
});
const thomsonCrossSection = exports.thomsonCrossSection = /* #__PURE__ */(0, _factoriesAny.createThomsonCrossSection)({
  BigNumber,
  Unit,
  config: _configReadonly.config
});
const variance = exports.variance = /* #__PURE__ */(0, _factoriesAny.createVariance)({
  add,
  divide,
  isNaN,
  mapSlices,
  multiply,
  subtract,
  typed
});
const zeta = exports.zeta = /* #__PURE__ */(0, _factoriesAny.createZeta)({
  BigNumber,
  Complex,
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
const avogadro = exports.avogadro = /* #__PURE__ */(0, _factoriesAny.createAvogadro)({
  BigNumber,
  Unit,
  config: _configReadonly.config
});
const bohrRadius = exports.bohrRadius = /* #__PURE__ */(0, _factoriesAny.createBohrRadius)({
  BigNumber,
  Unit,
  config: _configReadonly.config
});
const corr = exports.corr = /* #__PURE__ */(0, _factoriesAny.createCorr)({
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
const dotPow = exports.dotPow = /* #__PURE__ */(0, _factoriesAny.createDotPow)({
  DenseMatrix,
  SparseMatrix,
  concat,
  equalScalar,
  matrix,
  pow,
  typed
});
const elementaryCharge = exports.elementaryCharge = /* #__PURE__ */(0, _factoriesAny.createElementaryCharge)({
  BigNumber,
  Unit,
  config: _configReadonly.config
});
const faraday = exports.faraday = /* #__PURE__ */(0, _factoriesAny.createFaraday)({
  BigNumber,
  Unit,
  config: _configReadonly.config
});
const hartreeEnergy = exports.hartreeEnergy = /* #__PURE__ */(0, _factoriesAny.createHartreeEnergy)({
  BigNumber,
  Unit,
  config: _configReadonly.config
});
const inverseConductanceQuantum = exports.inverseConductanceQuantum = /* #__PURE__ */(0, _factoriesAny.createInverseConductanceQuantum)({
  BigNumber,
  Unit,
  config: _configReadonly.config
});
const magneticConstant = exports.magneticConstant = /* #__PURE__ */(0, _factoriesAny.createMagneticConstant)({
  BigNumber,
  Unit,
  config: _configReadonly.config
});
const molarMassC12 = exports.molarMassC12 = /* #__PURE__ */(0, _factoriesAny.createMolarMassC12)({
  BigNumber,
  Unit,
  config: _configReadonly.config
});
const neutronMass = exports.neutronMass = /* #__PURE__ */(0, _factoriesAny.createNeutronMass)({
  BigNumber,
  Unit,
  config: _configReadonly.config
});
const planckCharge = exports.planckCharge = /* #__PURE__ */(0, _factoriesAny.createPlanckCharge)({
  BigNumber,
  Unit,
  config: _configReadonly.config
});
const planckTemperature = exports.planckTemperature = /* #__PURE__ */(0, _factoriesAny.createPlanckTemperature)({
  BigNumber,
  Unit,
  config: _configReadonly.config
});
const quantumOfCirculation = exports.quantumOfCirculation = /* #__PURE__ */(0, _factoriesAny.createQuantumOfCirculation)({
  BigNumber,
  Unit,
  config: _configReadonly.config
});
const setIntersect = exports.setIntersect = /* #__PURE__ */(0, _factoriesAny.createSetIntersect)({
  DenseMatrix,
  Index,
  compareNatural,
  size,
  subset,
  typed
});
const std = exports.std = /* #__PURE__ */(0, _factoriesAny.createStd)({
  map,
  sqrt,
  typed,
  variance
});
const stirlingS2 = exports.stirlingS2 = /* #__PURE__ */(0, _factoriesAny.createStirlingS2)({
  bignumber,
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
const unit = exports.unit = /* #__PURE__ */(0, _factoriesAny.createUnitFunction)({
  Unit,
  typed
});
const bellNumbers = exports.bellNumbers = /* #__PURE__ */(0, _factoriesAny.createBellNumbers)({
  addScalar,
  isInteger,
  isNegative,
  stirlingS2,
  typed
});
const electricConstant = exports.electricConstant = /* #__PURE__ */(0, _factoriesAny.createElectricConstant)({
  BigNumber,
  Unit,
  config: _configReadonly.config
});
const firstRadiation = exports.firstRadiation = /* #__PURE__ */(0, _factoriesAny.createFirstRadiation)({
  BigNumber,
  Unit,
  config: _configReadonly.config
});
const nuclearMagneton = exports.nuclearMagneton = /* #__PURE__ */(0, _factoriesAny.createNuclearMagneton)({
  BigNumber,
  Unit,
  config: _configReadonly.config
});
const planckLength = exports.planckLength = /* #__PURE__ */(0, _factoriesAny.createPlanckLength)({
  BigNumber,
  Unit,
  config: _configReadonly.config
});
const rotate = exports.rotate = /* #__PURE__ */(0, _factoriesAny.createRotate)({
  multiply,
  rotationMatrix,
  typed
});
const setUnion = exports.setUnion = /* #__PURE__ */(0, _factoriesAny.createSetUnion)({
  Index,
  concat,
  setIntersect,
  setSymDifference,
  size,
  subset,
  typed
});
const wienDisplacement = exports.wienDisplacement = /* #__PURE__ */(0, _factoriesAny.createWienDisplacement)({
  BigNumber,
  Unit,
  config: _configReadonly.config
});
const classicalElectronRadius = exports.classicalElectronRadius = /* #__PURE__ */(0, _factoriesAny.createClassicalElectronRadius)({
  BigNumber,
  Unit,
  config: _configReadonly.config
});
const molarVolume = exports.molarVolume = /* #__PURE__ */(0, _factoriesAny.createMolarVolume)({
  BigNumber,
  Unit,
  config: _configReadonly.config
});
const schur = exports.schur = /* #__PURE__ */(0, _factoriesAny.createSchur)({
  identity,
  matrix,
  multiply,
  norm,
  qr,
  subtract,
  typed
});
const coulombConstant = exports.coulombConstant = /* #__PURE__ */(0, _factoriesAny.createCoulombConstant)({
  BigNumber,
  Unit,
  config: _configReadonly.config
});
const gravitationConstant = exports.gravitationConstant = /* #__PURE__ */(0, _factoriesAny.createGravitationConstant)({
  BigNumber,
  Unit,
  config: _configReadonly.config
});
const protonMass = exports.protonMass = /* #__PURE__ */(0, _factoriesAny.createProtonMass)({
  BigNumber,
  Unit,
  config: _configReadonly.config
});
const sylvester = exports.sylvester = /* #__PURE__ */(0, _factoriesAny.createSylvester)({
  abs,
  add,
  concat,
  identity,
  index,
  lusolve,
  matrix,
  matrixFromColumns,
  multiply,
  range,
  schur,
  subset,
  subtract,
  transpose,
  typed
});
const lyap = exports.lyap = /* #__PURE__ */(0, _factoriesAny.createLyap)({
  matrix,
  multiply,
  sylvester,
  transpose,
  typed
});
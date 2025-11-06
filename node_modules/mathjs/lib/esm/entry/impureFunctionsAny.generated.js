import _extends from "@babel/runtime/helpers/extends";
/**
 * THIS FILE IS AUTO-GENERATED
 * DON'T MAKE CHANGES HERE
 */
import { config } from './configReadonly.js';
import { createNode, createObjectNode, createOperatorNode, createParenthesisNode, createRelationalNode, createArrayNode, createBlockNode, createConditionalNode, createRangeNode, createReviver, createChainClass, createFunctionAssignmentNode, createChain, createConstantNode, createIndexNode, createAccessorNode, createAssignmentNode, createSymbolNode, createFunctionNode, createParse, createResolve, createSimplifyConstant, createCompile, createLeafCount, createSimplifyCore, createEvaluate, createHelpClass, createParserClass, createParser, createSimplify, createSymbolicEqual, createDerivative, createHelp, createRationalize, createMapTransform, createFilterTransform, createForEachTransform, createMapSlicesTransform, createAndTransform, createCumSumTransform, createNullishTransform, createPrintTransform, createBitAndTransform, createConcatTransform, createDiffTransform, createMaxTransform, createMinTransform, createOrTransform, createSubsetTransform, createBitOrTransform, createSumTransform, createVarianceTransform, createIndexTransform, createQuantileSeqTransform, createRangeTransform, createColumnTransform, createRowTransform, createMeanTransform, createStdTransform } from '../factoriesAny.js';
import { BigNumber, Complex, e, _false, fineStructure, Fraction, i, _Infinity, LN10, LOG10E, Matrix, _NaN, _null, phi, Range, ResultSet, SQRT1_2,
// eslint-disable-line camelcase
sackurTetrode, tau, _true, version, DenseMatrix, efimovFactor, LN2, pi, replacer, SQRT2, typed, weakMixingAngle, abs, acos, acot, acsc, addScalar, arg, asech, asinh, atan, atanh, bigint, bitNot, boolean, clone, combinations, complex, conj, cos, cot, csc, cube, equalScalar, erf, exp, expm1, filter, flatten, forEach, format, getMatrixDataType, hex, im, isBounded, isNaN, isNumeric, isPrime, LOG2E, lgamma, log10, log2, map, mode, multiplyScalar, not, number, oct, pickRandom, print, random, re, sec, sign, sin, size, SparseMatrix, splitUnit, square, string, subtractScalar, tan, toBest, typeOf, acosh, acsch, asec, bignumber, combinationsWithRep, cosh, csch, dot, hasNumericValue, isFinite, isNegative, isZero, matrix, matrixFromFunction, multiply, ones, randomInt, resize, sech, sinh, sparse, sqrt, squeeze, tanh, transpose, xgcd, zeros, acoth, asin, bin, coth, ctranspose, diag, equal, fraction, identity, isInteger, kron, mapSlices, matrixFromColumns, numeric, prod, reshape, round, unaryMinus, bernoulli, cbrt, concat, count, deepEqual, divideScalar, dotMultiply, floor, gcd, isPositive, larger, lcm, leftShift, lsolve, max, mod, nthRoot, nullish, or, qr, rightArithShift, smaller, subtract, to, unaryPlus, usolve, xor, add, atan2, bitAnd, bitOr, bitXor, catalan, compare, compareText, composition, cross, det, diff, distance, dotDivide, equalText, FibonacciHeap, hypot, ImmutableDenseMatrix, Index, intersect, invmod, largerEq, log, lsolveAll, matrixFromRows, min, nthRoots, partitionSelect, rightLogShift, slu, Spa, subset, sum, trace, usolveAll, zpk2tf, ceil, compareNatural, cumsum, fix, index, inv, log1p, lup, pinv, pow, setCartesian, setDistinct, setIsSubset, setPowerset, smallerEq, sort, sqrtm, unequal, and, divide, expm, fft, freqz, gamma, ifft, kldivergence, lusolve, mean, median, polynomialRoot, quantileSeq, range, row, setDifference, setMultiplicity, setSymDifference, solveODE, Unit, vacuumImpedance, atomicMass, bohrMagneton, boltzmann, column, conductanceQuantum, coulomb, createUnit, deuteronMass, eigs, electronMass, factorial, fermiCoupling, gasConstant, gravity, klitzing, loschmidt, mad, magneticFluxQuantum, molarMass, molarPlanckConstant, multinomial, norm, permutations, planckConstant, planckMass, planckTime, reducedPlanckConstant, rotationMatrix, rydberg, secondRadiation, setSize, speedOfLight, stefanBoltzmann, thomsonCrossSection, variance, zeta, avogadro, bohrRadius, corr, dotPow, elementaryCharge, faraday, hartreeEnergy, inverseConductanceQuantum, magneticConstant, molarMassC12, neutronMass, planckCharge, planckTemperature, quantumOfCirculation, setIntersect, std, stirlingS2, unit, bellNumbers, electricConstant, firstRadiation, nuclearMagneton, planckLength, rotate, setUnion, wienDisplacement, classicalElectronRadius, molarVolume, schur, coulombConstant, gravitationConstant, protonMass, sylvester, lyap } from './pureFunctionsAny.generated.js';
var math = {}; // NOT pure!
var mathWithTransform = {}; // NOT pure!
var classes = {}; // NOT pure!

export var Node = createNode({
  mathWithTransform
});
export var ObjectNode = createObjectNode({
  Node
});
export var OperatorNode = createOperatorNode({
  Node
});
export var ParenthesisNode = createParenthesisNode({
  Node
});
export var RelationalNode = createRelationalNode({
  Node
});
export var ArrayNode = createArrayNode({
  Node
});
export var BlockNode = createBlockNode({
  Node,
  ResultSet
});
export var ConditionalNode = createConditionalNode({
  Node
});
export var RangeNode = createRangeNode({
  Node
});
export var reviver = createReviver({
  classes
});
export var Chain = createChainClass({
  math,
  typed
});
export var FunctionAssignmentNode = createFunctionAssignmentNode({
  Node,
  typed
});
export var chain = createChain({
  Chain,
  typed
});
export var ConstantNode = createConstantNode({
  Node,
  isBounded
});
export var IndexNode = createIndexNode({
  Node,
  size
});
export var AccessorNode = createAccessorNode({
  Node,
  subset
});
export var AssignmentNode = createAssignmentNode({
  matrix,
  Node,
  subset
});
export var SymbolNode = createSymbolNode({
  Unit,
  Node,
  math
});
export var FunctionNode = createFunctionNode({
  Node,
  SymbolNode,
  math
});
export var parse = createParse({
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
  config,
  numeric,
  typed
});
export var resolve = createResolve({
  ConstantNode,
  FunctionNode,
  OperatorNode,
  ParenthesisNode,
  parse,
  typed
});
export var simplifyConstant = createSimplifyConstant({
  bignumber,
  fraction,
  AccessorNode,
  ArrayNode,
  ConstantNode,
  FunctionNode,
  IndexNode,
  ObjectNode,
  OperatorNode,
  SymbolNode,
  config,
  isBounded,
  mathWithTransform,
  matrix,
  typed
});
export var compile = createCompile({
  parse,
  typed
});
export var leafCount = createLeafCount({
  parse,
  typed
});
export var simplifyCore = createSimplifyCore({
  AccessorNode,
  ArrayNode,
  ConstantNode,
  FunctionNode,
  IndexNode,
  ObjectNode,
  OperatorNode,
  ParenthesisNode,
  SymbolNode,
  add,
  divide,
  equal,
  isZero,
  multiply,
  parse,
  pow,
  subtract,
  typed
});
export var evaluate = createEvaluate({
  parse,
  typed
});
export var Help = createHelpClass({
  evaluate
});
export var Parser = createParserClass({
  evaluate,
  parse
});
export var parser = createParser({
  Parser,
  typed
});
export var simplify = createSimplify({
  AccessorNode,
  ArrayNode,
  ConstantNode,
  FunctionNode,
  IndexNode,
  ObjectNode,
  OperatorNode,
  ParenthesisNode,
  SymbolNode,
  equal,
  parse,
  replacer,
  resolve,
  simplifyConstant,
  simplifyCore,
  typed
});
export var symbolicEqual = createSymbolicEqual({
  OperatorNode,
  parse,
  simplify,
  typed
});
export var derivative = createDerivative({
  ConstantNode,
  FunctionNode,
  OperatorNode,
  ParenthesisNode,
  SymbolNode,
  config,
  equal,
  isZero,
  numeric,
  parse,
  simplify,
  typed
});
export var help = createHelp({
  Help,
  mathWithTransform,
  typed
});
export var rationalize = createRationalize({
  bignumber,
  fraction,
  AccessorNode,
  ArrayNode,
  ConstantNode,
  FunctionNode,
  IndexNode,
  ObjectNode,
  OperatorNode,
  ParenthesisNode,
  SymbolNode,
  add,
  config,
  divide,
  equal,
  isZero,
  mathWithTransform,
  matrix,
  multiply,
  parse,
  pow,
  simplify,
  simplifyConstant,
  simplifyCore,
  subtract,
  typed
});
_extends(math, {
  e,
  false: _false,
  fineStructure,
  i,
  Infinity: _Infinity,
  LN10,
  LOG10E,
  NaN: _NaN,
  null: _null,
  phi,
  SQRT1_2,
  sackurTetrode,
  tau,
  true: _true,
  'E': e,
  version,
  efimovFactor,
  LN2,
  pi,
  replacer,
  reviver,
  SQRT2,
  typed,
  'PI': pi,
  weakMixingAngle,
  abs,
  acos,
  acot,
  acsc,
  addScalar,
  arg,
  asech,
  asinh,
  atan,
  atanh,
  bigint,
  bitNot,
  boolean,
  clone,
  combinations,
  complex,
  conj,
  cos,
  cot,
  csc,
  cube,
  equalScalar,
  erf,
  exp,
  expm1,
  filter,
  flatten,
  forEach,
  format,
  getMatrixDataType,
  hex,
  im,
  isBounded,
  isNaN,
  isNumeric,
  isPrime,
  LOG2E,
  lgamma,
  log10,
  log2,
  map,
  mode,
  multiplyScalar,
  not,
  number,
  oct,
  pickRandom,
  print,
  random,
  re,
  sec,
  sign,
  sin,
  size,
  splitUnit,
  square,
  string,
  subtractScalar,
  tan,
  toBest,
  typeOf,
  acosh,
  acsch,
  asec,
  bignumber,
  chain,
  combinationsWithRep,
  cosh,
  csch,
  dot,
  hasNumericValue,
  isFinite,
  isNegative,
  isZero,
  matrix,
  matrixFromFunction,
  multiply,
  ones,
  randomInt,
  resize,
  sech,
  sinh,
  sparse,
  sqrt,
  squeeze,
  tanh,
  transpose,
  xgcd,
  zeros,
  acoth,
  asin,
  bin,
  coth,
  ctranspose,
  diag,
  equal,
  fraction,
  identity,
  isInteger,
  kron,
  mapSlices,
  matrixFromColumns,
  numeric,
  prod,
  reshape,
  round,
  unaryMinus,
  bernoulli,
  cbrt,
  concat,
  count,
  deepEqual,
  divideScalar,
  dotMultiply,
  floor,
  gcd,
  isPositive,
  larger,
  lcm,
  leftShift,
  lsolve,
  max,
  mod,
  nthRoot,
  nullish,
  or,
  qr,
  rightArithShift,
  smaller,
  subtract,
  to,
  unaryPlus,
  usolve,
  xor,
  add,
  atan2,
  bitAnd,
  bitOr,
  bitXor,
  catalan,
  compare,
  compareText,
  composition,
  cross,
  det,
  diff,
  distance,
  dotDivide,
  equalText,
  hypot,
  intersect,
  invmod,
  largerEq,
  log,
  lsolveAll,
  matrixFromRows,
  min,
  nthRoots,
  partitionSelect,
  rightLogShift,
  slu,
  subset,
  sum,
  trace,
  usolveAll,
  zpk2tf,
  ceil,
  compareNatural,
  cumsum,
  fix,
  index,
  inv,
  log1p,
  lup,
  pinv,
  pow,
  setCartesian,
  setDistinct,
  setIsSubset,
  setPowerset,
  smallerEq,
  sort,
  sqrtm,
  unequal,
  and,
  divide,
  expm,
  fft,
  freqz,
  gamma,
  ifft,
  kldivergence,
  lusolve,
  mean,
  median,
  polynomialRoot,
  quantileSeq,
  range,
  row,
  setDifference,
  setMultiplicity,
  setSymDifference,
  solveODE,
  vacuumImpedance,
  atomicMass,
  bohrMagneton,
  boltzmann,
  column,
  conductanceQuantum,
  coulomb,
  createUnit,
  deuteronMass,
  eigs,
  electronMass,
  factorial,
  fermiCoupling,
  gasConstant,
  gravity,
  klitzing,
  loschmidt,
  mad,
  magneticFluxQuantum,
  molarMass,
  molarPlanckConstant,
  multinomial,
  norm,
  permutations,
  planckConstant,
  planckMass,
  planckTime,
  reducedPlanckConstant,
  rotationMatrix,
  rydberg,
  secondRadiation,
  setSize,
  speedOfLight,
  stefanBoltzmann,
  thomsonCrossSection,
  variance,
  zeta,
  avogadro,
  bohrRadius,
  corr,
  dotPow,
  elementaryCharge,
  faraday,
  hartreeEnergy,
  inverseConductanceQuantum,
  magneticConstant,
  molarMassC12,
  neutronMass,
  parse,
  planckCharge,
  planckTemperature,
  quantumOfCirculation,
  resolve,
  setIntersect,
  simplifyConstant,
  std,
  stirlingS2,
  unit,
  bellNumbers,
  compile,
  electricConstant,
  firstRadiation,
  leafCount,
  nuclearMagneton,
  planckLength,
  rotate,
  setUnion,
  simplifyCore,
  wienDisplacement,
  classicalElectronRadius,
  evaluate,
  molarVolume,
  schur,
  coulombConstant,
  gravitationConstant,
  parser,
  simplify,
  symbolicEqual,
  derivative,
  protonMass,
  sylvester,
  help,
  rationalize,
  lyap,
  config
});
_extends(mathWithTransform, math, {
  map: createMapTransform({
    typed
  }),
  filter: createFilterTransform({
    typed
  }),
  forEach: createForEachTransform({
    typed
  }),
  mapSlices: createMapSlicesTransform({
    isInteger,
    typed
  }),
  and: createAndTransform({
    add,
    concat,
    equalScalar,
    matrix,
    not,
    typed,
    zeros
  }),
  cumsum: createCumSumTransform({
    add,
    typed,
    unaryPlus
  }),
  nullish: createNullishTransform({
    deepEqual,
    flatten,
    matrix,
    size,
    typed
  }),
  print: createPrintTransform({
    add,
    matrix,
    typed,
    zeros
  }),
  bitAnd: createBitAndTransform({
    add,
    concat,
    equalScalar,
    matrix,
    not,
    typed,
    zeros
  }),
  concat: createConcatTransform({
    isInteger,
    matrix,
    typed
  }),
  diff: createDiffTransform({
    bignumber,
    matrix,
    number,
    subtract,
    typed
  }),
  max: createMaxTransform({
    config,
    isNaN,
    larger,
    numeric,
    typed
  }),
  min: createMinTransform({
    config,
    isNaN,
    numeric,
    smaller,
    typed
  }),
  or: createOrTransform({
    DenseMatrix,
    concat,
    equalScalar,
    matrix,
    typed
  }),
  subset: createSubsetTransform({
    add,
    matrix,
    typed,
    zeros
  }),
  bitOr: createBitOrTransform({
    DenseMatrix,
    concat,
    equalScalar,
    matrix,
    typed
  }),
  sum: createSumTransform({
    add,
    config,
    numeric,
    typed
  }),
  variance: createVarianceTransform({
    add,
    divide,
    isNaN,
    mapSlices,
    multiply,
    subtract,
    typed
  }),
  index: createIndexTransform({
    Index,
    getMatrixDataType
  }),
  quantileSeq: createQuantileSeqTransform({
    add,
    bignumber,
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
  }),
  range: createRangeTransform({
    bignumber,
    matrix,
    add,
    config,
    equal,
    isPositive,
    isZero,
    larger,
    largerEq,
    smaller,
    smallerEq,
    typed
  }),
  column: createColumnTransform({
    Index,
    matrix,
    range,
    typed
  }),
  row: createRowTransform({
    Index,
    matrix,
    range,
    typed
  }),
  mean: createMeanTransform({
    add,
    divide,
    typed
  }),
  std: createStdTransform({
    map,
    sqrt,
    typed,
    variance
  })
});
_extends(classes, {
  BigNumber,
  Complex,
  Fraction,
  Matrix,
  Node,
  ObjectNode,
  OperatorNode,
  ParenthesisNode,
  Range,
  RelationalNode,
  ResultSet,
  ArrayNode,
  BlockNode,
  ConditionalNode,
  DenseMatrix,
  RangeNode,
  Chain,
  FunctionAssignmentNode,
  SparseMatrix,
  ConstantNode,
  IndexNode,
  FibonacciHeap,
  ImmutableDenseMatrix,
  Index,
  Spa,
  AccessorNode,
  AssignmentNode,
  Unit,
  SymbolNode,
  FunctionNode,
  Help,
  Parser
});
Chain.createProxy(math);
export { embeddedDocs as docs } from '../expression/embeddedDocs/embeddedDocs.js';
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createVersion = exports.createUppercasePi = exports.createUppercaseE = exports.createTrue = exports.createTau = exports.createSQRT2 = exports.createSQRT1_2 = exports.createPi = exports.createPhi = exports.createNull = exports.createNaN = exports.createLOG2E = exports.createLOG10E = exports.createLN2 = exports.createLN10 = exports.createInfinity = exports.createI = exports.createFalse = exports.createE = void 0;
var _factory = require("./utils/factory.js");
var _version = require("./version.js");
var _constants = require("./utils/bignumber/constants.js");
var _index = require("./plain/number/index.js");
const createTrue = exports.createTrue = /* #__PURE__ */(0, _factory.factory)('true', [], () => true);
const createFalse = exports.createFalse = /* #__PURE__ */(0, _factory.factory)('false', [], () => false);
const createNull = exports.createNull = /* #__PURE__ */(0, _factory.factory)('null', [], () => null);
const createInfinity = exports.createInfinity = /* #__PURE__ */recreateFactory('Infinity', ['config', '?BigNumber'], _ref => {
  let {
    config,
    BigNumber
  } = _ref;
  return config.number === 'BigNumber' ? new BigNumber(Infinity) : Infinity;
});
const createNaN = exports.createNaN = /* #__PURE__ */recreateFactory('NaN', ['config', '?BigNumber'], _ref2 => {
  let {
    config,
    BigNumber
  } = _ref2;
  return config.number === 'BigNumber' ? new BigNumber(NaN) : NaN;
});
const createPi = exports.createPi = /* #__PURE__ */recreateFactory('pi', ['config', '?BigNumber'], _ref3 => {
  let {
    config,
    BigNumber
  } = _ref3;
  return config.number === 'BigNumber' ? (0, _constants.createBigNumberPi)(BigNumber) : _index.pi;
});
const createTau = exports.createTau = /* #__PURE__ */recreateFactory('tau', ['config', '?BigNumber'], _ref4 => {
  let {
    config,
    BigNumber
  } = _ref4;
  return config.number === 'BigNumber' ? (0, _constants.createBigNumberTau)(BigNumber) : _index.tau;
});
const createE = exports.createE = /* #__PURE__ */recreateFactory('e', ['config', '?BigNumber'], _ref5 => {
  let {
    config,
    BigNumber
  } = _ref5;
  return config.number === 'BigNumber' ? (0, _constants.createBigNumberE)(BigNumber) : _index.e;
});

// golden ratio, (1+sqrt(5))/2
const createPhi = exports.createPhi = /* #__PURE__ */recreateFactory('phi', ['config', '?BigNumber'], _ref6 => {
  let {
    config,
    BigNumber
  } = _ref6;
  return config.number === 'BigNumber' ? (0, _constants.createBigNumberPhi)(BigNumber) : _index.phi;
});
const createLN2 = exports.createLN2 = /* #__PURE__ */recreateFactory('LN2', ['config', '?BigNumber'], _ref7 => {
  let {
    config,
    BigNumber
  } = _ref7;
  return config.number === 'BigNumber' ? new BigNumber(2).ln() : Math.LN2;
});
const createLN10 = exports.createLN10 = /* #__PURE__ */recreateFactory('LN10', ['config', '?BigNumber'], _ref8 => {
  let {
    config,
    BigNumber
  } = _ref8;
  return config.number === 'BigNumber' ? new BigNumber(10).ln() : Math.LN10;
});
const createLOG2E = exports.createLOG2E = /* #__PURE__ */recreateFactory('LOG2E', ['config', '?BigNumber'], _ref9 => {
  let {
    config,
    BigNumber
  } = _ref9;
  return config.number === 'BigNumber' ? new BigNumber(1).div(new BigNumber(2).ln()) : Math.LOG2E;
});
const createLOG10E = exports.createLOG10E = /* #__PURE__ */recreateFactory('LOG10E', ['config', '?BigNumber'], _ref0 => {
  let {
    config,
    BigNumber
  } = _ref0;
  return config.number === 'BigNumber' ? new BigNumber(1).div(new BigNumber(10).ln()) : Math.LOG10E;
});
const createSQRT1_2 = exports.createSQRT1_2 = /* #__PURE__ */recreateFactory(
// eslint-disable-line camelcase
'SQRT1_2', ['config', '?BigNumber'], _ref1 => {
  let {
    config,
    BigNumber
  } = _ref1;
  return config.number === 'BigNumber' ? new BigNumber('0.5').sqrt() : Math.SQRT1_2;
});
const createSQRT2 = exports.createSQRT2 = /* #__PURE__ */recreateFactory('SQRT2', ['config', '?BigNumber'], _ref10 => {
  let {
    config,
    BigNumber
  } = _ref10;
  return config.number === 'BigNumber' ? new BigNumber(2).sqrt() : Math.SQRT2;
});
const createI = exports.createI = /* #__PURE__ */recreateFactory('i', ['Complex'], _ref11 => {
  let {
    Complex
  } = _ref11;
  return Complex.I;
});

// for backward compatibility with v5
const createUppercasePi = exports.createUppercasePi = /* #__PURE__ */(0, _factory.factory)('PI', ['pi'], _ref12 => {
  let {
    pi
  } = _ref12;
  return pi;
});
const createUppercaseE = exports.createUppercaseE = /* #__PURE__ */(0, _factory.factory)('E', ['e'], _ref13 => {
  let {
    e
  } = _ref13;
  return e;
});
const createVersion = exports.createVersion = /* #__PURE__ */(0, _factory.factory)('version', [], () => _version.version);

// helper function to create a factory with a flag recreateOnConfigChange
// idea: allow passing optional properties to be attached to the factory function as 4th argument?
function recreateFactory(name, dependencies, create) {
  return (0, _factory.factory)(name, dependencies, create, {
    recreateOnConfigChange: true
  });
}
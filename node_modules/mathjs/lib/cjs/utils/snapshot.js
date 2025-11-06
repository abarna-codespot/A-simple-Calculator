"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSnapshotFromFactories = createSnapshotFromFactories;
exports.validateBundle = validateBundle;
exports.validateTypeOf = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _assert = _interopRequireDefault(require("assert"));
var allIsFunctions = _interopRequireWildcard(require("./is.js"));
var _create = require("../core/create.js");
var _string = require("./string.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * This file contains helper methods to create expected snapshot structures
 * of both instance and ES6 exports.
 *
 * The files are located here and not under /test or /tools so it's transpiled
 * into ES5 code under /lib and can be used straight by node.js
 */

const validateTypeOf = exports.validateTypeOf = allIsFunctions.typeOf;
function validateBundle(expectedBundleStructure, bundle) {
  const originalWarn = console.warn;
  console.warn = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (args.join(' ').includes('is moved to') && args.join(' ').includes('Please use the new location instead')) {
      // Ignore warnings like:
      // Warning: math.type.isNumber is moved to math.isNumber in v6.0.0. Please use the new location instead.
      return;
    }
    originalWarn.apply(console, args);
  };
  try {
    const issues = [];

    // see whether all expected functions and objects are there
    traverse(expectedBundleStructure, (expectedType, path) => {
      const actualValue = get(bundle, path);
      const actualType = validateTypeOf(actualValue);
      const message = actualType === 'undefined' ? 'Missing entry in bundle. ' + `Path: ${JSON.stringify(path)}, expected type: ${expectedType}, actual type: ${actualType}` : 'Unexpected entry type in bundle. ' + `Path: ${JSON.stringify(path)}, expected type: ${expectedType}, actual type: ${actualType}`;
      if (actualType !== expectedType) {
        issues.push({
          actualType,
          expectedType,
          message
        });
        console.warn(message);
      }
    });

    // see whether there are any functions or objects that shouldn't be there
    traverse(bundle, (actualValue, path) => {
      const actualType = validateTypeOf(actualValue);
      const expectedType = get(expectedBundleStructure, path) || 'undefined';

      // FIXME: ugly to have these special cases
      if (path.join('.').includes('docs.')) {
        // ignore the contents of docs
        return;
      }
      if (path.join('.').includes('all.')) {
        // ignore the contents of all dependencies
        return;
      }
      const message = expectedType === 'undefined' ? 'Unknown entry in bundle. ' + 'Is there a new function added which is missing in this snapshot test? ' + `Path: ${JSON.stringify(path)}, expected type: ${expectedType}, actual type: ${actualType}` : 'Unexpected entry type in bundle. ' + `Path: ${JSON.stringify(path)}, expected type: ${expectedType}, actual type: ${actualType}`;
      if (actualType !== expectedType) {
        issues.push({
          actualType,
          expectedType,
          message
        });
        console.warn(message);
      }
    });

    // assert on the first issue (if any)
    if (issues.length > 0) {
      const {
        actualType,
        expectedType,
        message
      } = issues[0];
      console.warn(`${issues.length} bundle issues found`);
      _assert.default.strictEqual(actualType, expectedType, message);
    }
  } finally {
    console.warn = originalWarn;
  }
}

/**
 * Based on an object with factory functions, create the expected
 * structures for ES6 export and a mathjs instance.
 * @param {Object} factories
 * @return {{expectedInstanceStructure: Object, expectedES6Structure: Object}}
 */
function createSnapshotFromFactories(factories) {
  const math = (0, _create.create)(factories);
  const allFactoryFunctions = {};
  const allFunctionsConstantsClasses = {};
  const allFunctionsConstants = {};
  const allTransformFunctions = {};
  const allDependencyCollections = {};
  const allClasses = {};
  const allNodeClasses = {};
  Object.keys(factories).forEach(factoryName => {
    var _factory$meta$formerl, _factory$meta;
    const factory = factories[factoryName];
    const name = factory.fn;
    const isTransformFunction = factory.meta && factory.meta.isTransformFunction;
    const isClass = !isLowerCase(name[0]) && validateTypeOf(math[name]) === 'function';
    const dependenciesName = factory.fn + (isTransformFunction ? 'Transform' : '') + 'Dependencies';
    const former = (_factory$meta$formerl = (_factory$meta = factory.meta) === null || _factory$meta === void 0 ? void 0 : _factory$meta.formerly) !== null && _factory$meta$formerl !== void 0 ? _factory$meta$formerl : '';
    allFactoryFunctions[factoryName] = 'function';
    allFunctionsConstantsClasses[name] = validateTypeOf(math[name]);
    if (former) {
      allFunctionsConstantsClasses[former] = allFunctionsConstantsClasses[name];
    }
    allDependencyCollections[dependenciesName] = 'Object';
    if (isTransformFunction) {
      allTransformFunctions[name] = 'function';
      if (former) allTransformFunctions[former] = 'function';
    }
    if (isClass) {
      if ((0, _string.endsWith)(name, 'Node')) {
        allNodeClasses[name] = 'function';
      } else {
        allClasses[name] = 'function';
      }
    } else {
      allFunctionsConstants[name] = validateTypeOf(math[name]);
      if (former) allFunctionsConstants[former] = allFunctionsConstants[name];
    }
  });
  let embeddedDocs = {};
  Object.keys(factories).forEach(factoryName => {
    const factory = factories[factoryName];
    const name = factory.fn;
    if (isLowerCase(factory.fn[0])) {
      // ignore class names starting with upper case
      embeddedDocs[name] = 'Object';
    }
  });
  embeddedDocs = exclude(embeddedDocs, ['equalScalar', 'addScalar', 'subtractScalar', 'multiplyScalar', 'print', 'divideScalar', 'parse', 'compile', 'parser', 'chain', 'coulomb', 'reviver', 'replacer']);
  const allTypeChecks = {};
  Object.keys(allIsFunctions).forEach(name => {
    if (name.indexOf('is') === 0) {
      allTypeChecks[name] = 'function';
    }
  });
  const allErrorClasses = {
    ArgumentsError: 'function',
    DimensionError: 'function',
    IndexError: 'function'
  };
  const expectedInstanceStructure = {
    ...allFunctionsConstantsClasses,
    on: 'function',
    off: 'function',
    once: 'function',
    emit: 'function',
    import: 'function',
    config: 'function',
    create: 'function',
    factory: 'function',
    ...allTypeChecks,
    ...allErrorClasses,
    expression: {
      transform: {
        ...allTransformFunctions
      },
      mathWithTransform: {
        // note that we don't have classes here,
        // only functions and constants are allowed in the editor
        ...exclude(allFunctionsConstants, ['chain']),
        config: 'function'
      }
    }
  };
  const expectedES6Structure = {
    // functions
    ...exclude(allFunctionsConstantsClasses, ['E', 'false', 'Infinity', 'NaN', 'null', 'PI', 'true']),
    create: 'function',
    config: 'function',
    factory: 'function',
    _true: 'boolean',
    _false: 'boolean',
    _null: 'null',
    _Infinity: 'number',
    _NaN: 'number',
    ...allTypeChecks,
    ...allErrorClasses,
    ...allDependencyCollections,
    ...allFactoryFunctions,
    docs: embeddedDocs
  };
  return {
    expectedInstanceStructure,
    expectedES6Structure
  };
}
function traverse(obj) {
  let callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (value, path) => {};
  let path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  // FIXME: ugly to have these special cases
  if (path.length > 0 && path[0].includes('Dependencies')) {
    // special case for objects holding a collection of dependencies
    callback(obj, path);
  } else if (validateTypeOf(obj) === 'Array') {
    obj.map((item, index) => traverse(item, callback, path.concat(index)));
  } else if (validateTypeOf(obj) === 'Object') {
    Object.keys(obj).forEach(key => {
      // FIXME: ugly to have these special cases
      // ignore special case of deprecated docs
      if (key === 'docs' && path.join('.') === 'expression') {
        return;
      }
      traverse(obj[key], callback, path.concat(key));
    });
  } else {
    callback(obj, path);
  }
}
function get(object, path) {
  let child = object;
  for (let i = 0; i < path.length; i++) {
    const key = path[i];
    child = child ? child[key] : undefined;
  }
  return child;
}

/**
 * Create a copy of the provided `object` and delete
 * all properties listed in `excludedProperties`
 * @param {Object} object
 * @param {string[]} excludedProperties
 * @return {Object}
 */
function exclude(object, excludedProperties) {
  const strippedObject = (0, _extends2.default)({}, object);
  excludedProperties.forEach(excludedProperty => {
    delete strippedObject[excludedProperty];
  });
  return strippedObject;
}
function isLowerCase(text) {
  return typeof text === 'string' && text.toLowerCase() === text;
}
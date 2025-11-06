import typed from 'typed-function';
import { get, arraySize } from './array.js';
import { typeOf as _typeOf } from './is.js';

/**
 * Simplifies a callback function by reducing its complexity and potentially improving its performance.
 *
 * @param {Function} callback The original callback function to simplify.
 * @param {Array|Matrix} array The array that will be used with the callback function.
 * @param {string} name The name of the function that is using the callback.
 * @param {boolean} isUnary If true, the callback function is unary and will be optimized as such.
 * @returns {Function} Returns a simplified version of the callback function.
 */
export function optimizeCallback(callback, array, name, isUnary) {
  if (typed.isTypedFunction(callback)) {
    var numberOfArguments;
    if (isUnary) {
      numberOfArguments = 1;
    } else {
      var size = array.isMatrix ? array.size() : arraySize(array);

      // Check the size of the last dimension to see if the array/matrix is empty
      var isEmpty = size.length ? size[size.length - 1] === 0 : true;
      if (isEmpty) {
        // don't optimize callbacks for empty arrays/matrix, as they will never be called
        // and in fact will throw an exception when we try to access the first element below
        return {
          isUnary,
          fn: callback
        };
      }
      var firstIndex = size.map(() => 0);
      var firstValue = array.isMatrix ? array.get(firstIndex) : get(array, firstIndex);
      numberOfArguments = _findNumberOfArgumentsTyped(callback, firstValue, firstIndex, array);
    }
    var fastCallback;
    if (array.isMatrix && array.dataType !== 'mixed' && array.dataType !== undefined) {
      var singleSignature = _findSingleSignatureWithArity(callback, numberOfArguments);
      fastCallback = singleSignature !== undefined ? singleSignature : callback;
    } else {
      fastCallback = callback;
    }
    if (numberOfArguments >= 1 && numberOfArguments <= 3) {
      return {
        isUnary: numberOfArguments === 1,
        fn: function fn() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return _tryFunctionWithArgs(fastCallback, args.slice(0, numberOfArguments), name, callback.name);
        }
      };
    }
    return {
      isUnary: false,
      fn: function fn() {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        return _tryFunctionWithArgs(fastCallback, args, name, callback.name);
      }
    };
  }
  if (isUnary === undefined) {
    return {
      isUnary: _findIfCallbackIsUnary(callback),
      fn: callback
    };
  } else {
    return {
      isUnary,
      fn: callback
    };
  }
}
function _findSingleSignatureWithArity(callback, arity) {
  var matchingFunctions = [];
  Object.entries(callback.signatures).forEach(_ref => {
    var [signature, func] = _ref;
    if (signature.split(',').length === arity) {
      matchingFunctions.push(func);
    }
  });
  if (matchingFunctions.length === 1) {
    return matchingFunctions[0];
  }
}

/**
 * Determines if a given callback function is unary (i.e., takes exactly one argument).
 *
 * This function checks the following conditions to determine if the callback is unary:
 * 1. The callback function should have exactly one parameter.
 * 2. The callback function should not use the `arguments` object.
 * 3. The callback function should not use rest parameters (`...`).
 * If in doubt, this function shall return `false` to be safe
 *
 * @param {Function} callback - The callback function to be checked.
 * @returns {boolean} - Returns `true` if the callback is unary, otherwise `false`.
 */
function _findIfCallbackIsUnary(callback) {
  if (callback.length !== 1) return false;
  var callbackStr = callback.toString();
  // Check if the callback function uses `arguments`
  if (/arguments/.test(callbackStr)) return false;

  // Extract the parameters of the callback function
  var paramsStr = callbackStr.match(/\(.*?\)/);
  // Check if the callback function uses rest parameters
  if (/\.\.\./.test(paramsStr)) return false;
  return true;
}
function _findNumberOfArgumentsTyped(callback, value, index, array) {
  var testArgs = [value, index, array];
  for (var i = 3; i > 0; i--) {
    var args = testArgs.slice(0, i);
    if (typed.resolve(callback, args) !== null) {
      return i;
    }
  }
}

/**
   * @param {function} func The selected function taken from one of the signatures of the callback function
   * @param {Array} args List with arguments to apply to the selected signature
   * @param {string} mappingFnName the name of the function that is using the callback
   * @param {string} callbackName the name of the callback function
   * @returns {*} Returns the return value of the invoked signature
   * @throws {TypeError} Throws an error when no matching signature was found
   */
function _tryFunctionWithArgs(func, args, mappingFnName, callbackName) {
  try {
    return func(...args);
  } catch (err) {
    _createCallbackError(err, args, mappingFnName, callbackName);
  }
}

/**
 * Creates and throws a detailed TypeError when a callback function fails.
 *
 * @param {Error} err The original error thrown by the callback function.
 * @param {Array} args The arguments that were passed to the callback function.
 * @param {string} mappingFnName The name of the function that is using the callback.
 * @param {string} callbackName The name of the callback function.
 * @throws {TypeError} Throws a detailed TypeError with enriched error message.
 */
function _createCallbackError(err, args, mappingFnName, callbackName) {
  var _err$data;
  // Enrich the error message so the user understands that it took place inside the callback function
  if (err instanceof TypeError && ((_err$data = err.data) === null || _err$data === void 0 ? void 0 : _err$data.category) === 'wrongType') {
    var argsDesc = [];
    argsDesc.push("value: ".concat(_typeOf(args[0])));
    if (args.length >= 2) {
      argsDesc.push("index: ".concat(_typeOf(args[1])));
    }
    if (args.length >= 3) {
      argsDesc.push("array: ".concat(_typeOf(args[2])));
    }
    throw new TypeError("Function ".concat(mappingFnName, " cannot apply callback arguments ") + "".concat(callbackName, "(").concat(argsDesc.join(', '), ") at index ").concat(JSON.stringify(args[1])));
  } else {
    throw new TypeError("Function ".concat(mappingFnName, " cannot apply callback arguments ") + "to function ".concat(callbackName, ": ").concat(err.message));
  }
}
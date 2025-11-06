"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createEvaluate = void 0;
var _collection = require("../../utils/collection.js");
var _factory = require("../../utils/factory.js");
var _map = require("../../utils/map.js");
const name = 'evaluate';
const dependencies = ['typed', 'parse'];
const createEvaluate = exports.createEvaluate = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    parse
  } = _ref;
  /**
   * Evaluate an expression.
   *
   * The expression parser does not use JavaScript. Its syntax is close
   * to JavaScript but more suited for mathematical expressions.
   * See [https://mathjs.org/docs/expressions/syntax.html](https://mathjs.org/docs/expressions/syntax.html) to learn
   * the syntax and get an overview of the exact differences from JavaScript.
   *
   * Note the evaluating arbitrary expressions may involve security risks,
   * see [https://mathjs.org/docs/expressions/security.html](https://mathjs.org/docs/expressions/security.html) for more information.
   *
   * Syntax:
   *
   *     math.evaluate(expr)
   *     math.evaluate(expr, scope)
   *     math.evaluate([expr1, expr2, expr3, ...])
   *     math.evaluate([expr1, expr2, expr3, ...], scope)
   *
   * Example:
   *
   *     math.evaluate('(2+3)/4')                // 1.25
   *     math.evaluate('sqrt(3^2 + 4^2)')        // 5
   *     math.evaluate('sqrt(-4)')               // 2i
   *     math.evaluate(['a=3', 'b=4', 'a*b'])    // [3, 4, 12]
   *
   *     let scope = {a:3, b:4}
   *     math.evaluate('a * b', scope)           // 12
   *
   * See also:
   *
   *    parse, compile
   *
   * @param {string | string[] | Matrix} expr   The expression to be evaluated
   * @param {Object} [scope]                    Scope to read/write variables
   * @return {*} The result of the expression
   * @throws {Error}
   */
  return typed(name, {
    string: function (expr) {
      const scope = (0, _map.createEmptyMap)();
      return parse(expr).compile().evaluate(scope);
    },
    'string, Map | Object': function (expr, scope) {
      return parse(expr).compile().evaluate(scope);
    },
    'Array | Matrix': function (expr) {
      const scope = (0, _map.createEmptyMap)();
      return (0, _collection.deepMap)(expr, function (entry) {
        return parse(entry).compile().evaluate(scope);
      });
    },
    'Array | Matrix, Map | Object': function (expr, scope) {
      return (0, _collection.deepMap)(expr, function (entry) {
        return parse(entry).compile().evaluate(scope);
      });
    }
  });
});
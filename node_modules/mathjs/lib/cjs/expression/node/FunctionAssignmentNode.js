"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFunctionAssignmentNode = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _is = require("../../utils/is.js");
var _keywords = require("../keywords.js");
var _string = require("../../utils/string.js");
var _array = require("../../utils/array.js");
var _latex = require("../../utils/latex.js");
var _operators = require("../operators.js");
var _factory = require("../../utils/factory.js");
const name = 'FunctionAssignmentNode';
const dependencies = ['typed', 'Node'];
const createFunctionAssignmentNode = exports.createFunctionAssignmentNode = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    Node
  } = _ref;
  /**
   * Is parenthesis needed?
   * @param {Node} node
   * @param {Object} parenthesis
   * @param {string} implicit
   * @private
   */
  function needParenthesis(node, parenthesis, implicit) {
    const precedence = (0, _operators.getPrecedence)(node, parenthesis, implicit);
    const exprPrecedence = (0, _operators.getPrecedence)(node.expr, parenthesis, implicit);
    return parenthesis === 'all' || exprPrecedence !== null && exprPrecedence <= precedence;
  }
  class FunctionAssignmentNode extends Node {
    /**
     * @constructor FunctionAssignmentNode
     * @extends {Node}
     * Function assignment
     *
     * @param {string} name           Function name
     * @param {string[] | Array.<{name: string, type: string}>} params
     *                                Array with function parameter names, or an
     *                                array with objects containing the name
     *                                and type of the parameter
     * @param {Node} expr             The function expression
     */
    constructor(name, params, expr) {
      super();
      // validate input
      if (typeof name !== 'string') {
        throw new TypeError('String expected for parameter "name"');
      }
      if (!Array.isArray(params)) {
        throw new TypeError('Array containing strings or objects expected for parameter "params"');
      }
      if (!(0, _is.isNode)(expr)) {
        throw new TypeError('Node expected for parameter "expr"');
      }
      if (_keywords.keywords.has(name)) {
        throw new Error('Illegal function name, "' + name + '" is a reserved keyword');
      }
      const paramNames = new Set();
      for (const param of params) {
        const name = typeof param === 'string' ? param : param.name;
        if (paramNames.has(name)) {
          throw new Error(`Duplicate parameter name "${name}"`);
        } else {
          paramNames.add(name);
        }
      }
      this.name = name;
      this.params = params.map(function (param) {
        return param && param.name || param;
      });
      this.types = params.map(function (param) {
        return param && param.type || 'any';
      });
      this.expr = expr;
    }
    get type() {
      return name;
    }
    get isFunctionAssignmentNode() {
      return true;
    }

    /**
     * Compile a node into a JavaScript function.
     * This basically pre-calculates as much as possible and only leaves open
     * calculations which depend on a dynamic scope with variables.
     * @param {Object} math     Math.js namespace with functions and constants.
     * @param {Object} argNames An object with argument names as key and `true`
     *                          as value. Used in the SymbolNode to optimize
     *                          for arguments from user assigned functions
     *                          (see FunctionAssignmentNode) or special symbols
     *                          like `end` (see IndexNode).
     * @return {function} Returns a function which can be called like:
     *                        evalNode(scope: Object, args: Object, context: *)
     */
    _compile(math, argNames) {
      const childArgNames = Object.create(argNames);
      (0, _array.forEach)(this.params, function (param) {
        childArgNames[param] = true;
      });

      // compile the function expression with the child args
      const expr = this.expr;
      const evalExpr = expr._compile(math, childArgNames);
      const name = this.name;
      const params = this.params;
      const signature = (0, _array.join)(this.types, ',');
      const syntax = name + '(' + (0, _array.join)(this.params, ', ') + ')';
      return function evalFunctionAssignmentNode(scope, args, context) {
        const signatures = {};
        signatures[signature] = function () {
          const childArgs = Object.create(args);
          for (let i = 0; i < params.length; i++) {
            childArgs[params[i]] = arguments[i];
          }
          return evalExpr(scope, childArgs, context);
        };
        const fn = typed(name, signatures);
        fn.syntax = syntax;
        fn.expr = expr.toString();
        scope.set(name, fn);
        return fn;
      };
    }

    /**
     * Execute a callback for each of the child nodes of this node
     * @param {function(child: Node, path: string, parent: Node)} callback
     */
    forEach(callback) {
      callback(this.expr, 'expr', this);
    }

    /**
     * Create a new FunctionAssignmentNode whose children are the results of
     * calling the provided callback function for each child of the original
     * node.
     * @param {function(child: Node, path: string, parent: Node): Node} callback
     * @returns {FunctionAssignmentNode} Returns a transformed copy of the node
     */
    map(callback) {
      const expr = this._ifNode(callback(this.expr, 'expr', this));
      return new FunctionAssignmentNode(this.name, this.params.slice(0), expr);
    }

    /**
     * Create a clone of this node, a shallow copy
     * @return {FunctionAssignmentNode}
     */
    clone() {
      return new FunctionAssignmentNode(this.name, this.params.slice(0), this.expr);
    }

    /**
     * get string representation
     * @param {Object} options
     * @return {string} str
     */
    _toString(options) {
      const parenthesis = options && options.parenthesis ? options.parenthesis : 'keep';
      let expr = this.expr.toString(options);
      if (needParenthesis(this, parenthesis, options && options.implicit)) {
        expr = '(' + expr + ')';
      }
      return this.name + '(' + this.params.join(', ') + ') = ' + expr;
    }

    /**
     * Get a JSON representation of the node
     * @returns {Object}
     */
    toJSON() {
      const types = this.types;
      return {
        mathjs: name,
        name: this.name,
        params: this.params.map(function (param, index) {
          return {
            name: param,
            type: types[index]
          };
        }),
        expr: this.expr
      };
    }

    /**
     * Instantiate an FunctionAssignmentNode from its JSON representation
     * @param {Object} json
     *     An object structured like
     *     ```
     *     {"mathjs": "FunctionAssignmentNode",
     *      name: ..., params: ..., expr: ...}
     *     ```
     *     where mathjs is optional
     * @returns {FunctionAssignmentNode}
     */
    static fromJSON(json) {
      return new FunctionAssignmentNode(json.name, json.params, json.expr);
    }

    /**
     * get HTML representation
     * @param {Object} options
     * @return {string} str
     */
    _toHTML(options) {
      const parenthesis = options && options.parenthesis ? options.parenthesis : 'keep';
      const params = [];
      for (let i = 0; i < this.params.length; i++) {
        params.push('<span class="math-symbol math-parameter">' + (0, _string.escape)(this.params[i]) + '</span>');
      }
      let expr = this.expr.toHTML(options);
      if (needParenthesis(this, parenthesis, options && options.implicit)) {
        expr = '<span class="math-parenthesis math-round-parenthesis">(</span>' + expr + '<span class="math-parenthesis math-round-parenthesis">)</span>';
      }
      return '<span class="math-function">' + (0, _string.escape)(this.name) + '</span>' + '<span class="math-parenthesis math-round-parenthesis">(</span>' + params.join('<span class="math-separator">,</span>') + '<span class="math-parenthesis math-round-parenthesis">)</span>' + '<span class="math-operator math-assignment-operator ' + 'math-variable-assignment-operator math-binary-operator">=</span>' + expr;
    }

    /**
     * get LaTeX representation
     * @param {Object} options
     * @return {string} str
     */
    _toTex(options) {
      const parenthesis = options && options.parenthesis ? options.parenthesis : 'keep';
      let expr = this.expr.toTex(options);
      if (needParenthesis(this, parenthesis, options && options.implicit)) {
        expr = `\\left(${expr}\\right)`;
      }
      return '\\mathrm{' + this.name + '}\\left(' + this.params.map(_latex.toSymbol).join(',') + '\\right)=' + expr;
    }
  }
  (0, _defineProperty2.default)(FunctionAssignmentNode, "name", name);
  return FunctionAssignmentNode;
}, {
  isClass: true,
  isNode: true
});
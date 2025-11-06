"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createObjectNode = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _customs = require("../../utils/customs.js");
var _factory = require("../../utils/factory.js");
var _is = require("../../utils/is.js");
var _object = require("../../utils/object.js");
var _string = require("../../utils/string.js");
const name = 'ObjectNode';
const dependencies = ['Node'];
const createObjectNode = exports.createObjectNode = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    Node
  } = _ref;
  class ObjectNode extends Node {
    /**
     * @constructor ObjectNode
     * @extends {Node}
     * Holds an object with keys/values
     * @param {Object.<string, Node>} [properties]   object with key/value pairs
     */
    constructor(properties) {
      super();
      this.properties = properties || {};

      // validate input
      if (properties) {
        if (!(typeof properties === 'object') || !Object.keys(properties).every(function (key) {
          return (0, _is.isNode)(properties[key]);
        })) {
          throw new TypeError('Object containing Nodes expected');
        }
      }
    }
    get type() {
      return name;
    }
    get isObjectNode() {
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
      const evalEntries = {};
      for (const key in this.properties) {
        if ((0, _object.hasOwnProperty)(this.properties, key)) {
          // we stringify/parse the key here to resolve unicode characters,
          // so you cannot create a key like {"co\\u006Estructor": null}
          const stringifiedKey = (0, _string.stringify)(key);
          const parsedKey = JSON.parse(stringifiedKey);
          const prop = (0, _customs.getSafeProperty)(this.properties, key);
          evalEntries[parsedKey] = prop._compile(math, argNames);
        }
      }
      return function evalObjectNode(scope, args, context) {
        const obj = {};
        for (const key in evalEntries) {
          if ((0, _object.hasOwnProperty)(evalEntries, key)) {
            obj[key] = evalEntries[key](scope, args, context);
          }
        }
        return obj;
      };
    }

    /**
     * Execute a callback for each of the child nodes of this node
     * @param {function(child: Node, path: string, parent: Node)} callback
     */
    forEach(callback) {
      for (const key in this.properties) {
        if ((0, _object.hasOwnProperty)(this.properties, key)) {
          callback(this.properties[key], 'properties[' + (0, _string.stringify)(key) + ']', this);
        }
      }
    }

    /**
     * Create a new ObjectNode whose children are the results of calling
     * the provided callback function for each child of the original node.
     * @param {function(child: Node, path: string, parent: Node): Node} callback
     * @returns {ObjectNode} Returns a transformed copy of the node
     */
    map(callback) {
      const properties = {};
      for (const key in this.properties) {
        if ((0, _object.hasOwnProperty)(this.properties, key)) {
          properties[key] = this._ifNode(callback(this.properties[key], 'properties[' + (0, _string.stringify)(key) + ']', this));
        }
      }
      return new ObjectNode(properties);
    }

    /**
     * Create a clone of this node, a shallow copy
     * @return {ObjectNode}
     */
    clone() {
      const properties = {};
      for (const key in this.properties) {
        if ((0, _object.hasOwnProperty)(this.properties, key)) {
          properties[key] = this.properties[key];
        }
      }
      return new ObjectNode(properties);
    }

    /**
     * Get string representation
     * @param {Object} options
     * @return {string} str
     * @override
     */
    _toString(options) {
      const entries = [];
      for (const key in this.properties) {
        if ((0, _object.hasOwnProperty)(this.properties, key)) {
          entries.push((0, _string.stringify)(key) + ': ' + this.properties[key].toString(options));
        }
      }
      return '{' + entries.join(', ') + '}';
    }

    /**
     * Get a JSON representation of the node
     * @returns {Object}
     */
    toJSON() {
      return {
        mathjs: name,
        properties: this.properties
      };
    }

    /**
     * Instantiate an OperatorNode from its JSON representation
     * @param {Object} json  An object structured like
     *                       `{"mathjs": "ObjectNode", "properties": {...}}`,
     *                       where mathjs is optional
     * @returns {ObjectNode}
     */
    static fromJSON(json) {
      return new ObjectNode(json.properties);
    }

    /**
     * Get HTML representation
     * @param {Object} options
     * @return {string} str
     * @override
     */
    _toHTML(options) {
      const entries = [];
      for (const key in this.properties) {
        if ((0, _object.hasOwnProperty)(this.properties, key)) {
          entries.push('<span class="math-symbol math-property">' + (0, _string.escape)(key) + '</span>' + '<span class="math-operator math-assignment-operator ' + 'math-property-assignment-operator math-binary-operator">' + ':</span>' + this.properties[key].toHTML(options));
        }
      }
      return '<span class="math-parenthesis math-curly-parenthesis">{</span>' + entries.join('<span class="math-separator">,</span>') + '<span class="math-parenthesis math-curly-parenthesis">}</span>';
    }

    /**
     * Get LaTeX representation
     * @param {Object} options
     * @return {string} str
     */
    _toTex(options) {
      const entries = [];
      for (const key in this.properties) {
        if ((0, _object.hasOwnProperty)(this.properties, key)) {
          entries.push('\\mathbf{' + key + ':} & ' + this.properties[key].toTex(options) + '\\\\');
        }
      }
      const tex = '\\left\\{\\begin{array}{ll}' + entries.join('\n') + '\\end{array}\\right\\}';
      return tex;
    }
  }
  (0, _defineProperty2.default)(ObjectNode, "name", name);
  return ObjectNode;
}, {
  isClass: true,
  isNode: true
});
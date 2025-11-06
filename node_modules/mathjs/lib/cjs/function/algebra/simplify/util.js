"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUtil = void 0;
var _is = require("../../../utils/is.js");
var _factory = require("../../../utils/factory.js");
var _object = require("../../../utils/object.js");
const name = 'simplifyUtil';
const dependencies = ['FunctionNode', 'OperatorNode', 'SymbolNode'];
const createUtil = exports.createUtil = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    FunctionNode,
    OperatorNode,
    SymbolNode
  } = _ref;
  // TODO commutative/associative properties rely on the arguments
  // e.g. multiply is not commutative for matrices
  // The properties should be calculated from an argument to simplify, or possibly something in math.config
  // the other option is for typed() to specify a return type so that we can evaluate the type of arguments

  /* So that properties of an operator fit on one line: */
  const T = true;
  const F = false;
  const defaultName = 'defaultF';
  const defaultContext = {
    /*      */add: {
      trivial: T,
      total: T,
      commutative: T,
      associative: T
    },
    /**/unaryPlus: {
      trivial: T,
      total: T,
      commutative: T,
      associative: T
    },
    /* */subtract: {
      trivial: F,
      total: T,
      commutative: F,
      associative: F
    },
    /* */multiply: {
      trivial: T,
      total: T,
      commutative: T,
      associative: T
    },
    /*   */divide: {
      trivial: F,
      total: T,
      commutative: F,
      associative: F
    },
    /*    */paren: {
      trivial: T,
      total: T,
      commutative: T,
      associative: F
    },
    /* */defaultF: {
      trivial: F,
      total: T,
      commutative: F,
      associative: F
    }
  };
  const realContext = {
    divide: {
      total: F
    },
    log: {
      total: F
    }
  };
  const positiveContext = {
    subtract: {
      total: F
    },
    abs: {
      trivial: T
    },
    log: {
      total: T
    }
  };
  function hasProperty(nodeOrName, property) {
    let context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultContext;
    let name = defaultName;
    if (typeof nodeOrName === 'string') {
      name = nodeOrName;
    } else if ((0, _is.isOperatorNode)(nodeOrName)) {
      name = nodeOrName.fn.toString();
    } else if ((0, _is.isFunctionNode)(nodeOrName)) {
      name = nodeOrName.name;
    } else if ((0, _is.isParenthesisNode)(nodeOrName)) {
      name = 'paren';
    }
    if ((0, _object.hasOwnProperty)(context, name)) {
      const properties = context[name];
      if ((0, _object.hasOwnProperty)(properties, property)) {
        return properties[property];
      }
      if ((0, _object.hasOwnProperty)(defaultContext, name)) {
        return defaultContext[name][property];
      }
    }
    if ((0, _object.hasOwnProperty)(context, defaultName)) {
      const properties = context[defaultName];
      if ((0, _object.hasOwnProperty)(properties, property)) {
        return properties[property];
      }
      return defaultContext[defaultName][property];
    }
    /* name not found in context and context has no global default */
    /* So use default context. */
    if ((0, _object.hasOwnProperty)(defaultContext, name)) {
      const properties = defaultContext[name];
      if ((0, _object.hasOwnProperty)(properties, property)) {
        return properties[property];
      }
    }
    return defaultContext[defaultName][property];
  }
  function isCommutative(node) {
    let context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultContext;
    return hasProperty(node, 'commutative', context);
  }
  function isAssociative(node) {
    let context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultContext;
    return hasProperty(node, 'associative', context);
  }

  /**
   * Merge the given contexts, with primary overriding secondary
   * wherever they might conflict
   */
  function mergeContext(primary, secondary) {
    const merged = {
      ...primary
    };
    for (const prop in secondary) {
      if ((0, _object.hasOwnProperty)(primary, prop)) {
        merged[prop] = {
          ...secondary[prop],
          ...primary[prop]
        };
      } else {
        merged[prop] = secondary[prop];
      }
    }
    return merged;
  }

  /**
   * Flatten all associative operators in an expression tree.
   * Assumes parentheses have already been removed.
   */
  function flatten(node, context) {
    if (!node.args || node.args.length === 0) {
      return node;
    }
    node.args = allChildren(node, context);
    for (let i = 0; i < node.args.length; i++) {
      flatten(node.args[i], context);
    }
  }

  /**
   * Get the children of a node as if it has been flattened.
   * TODO implement for FunctionNodes
   */
  function allChildren(node, context) {
    let op;
    const children = [];
    const findChildren = function (node) {
      for (let i = 0; i < node.args.length; i++) {
        const child = node.args[i];
        if ((0, _is.isOperatorNode)(child) && op === child.op) {
          findChildren(child);
        } else {
          children.push(child);
        }
      }
    };
    if (isAssociative(node, context)) {
      op = node.op;
      findChildren(node);
      return children;
    } else {
      return node.args;
    }
  }

  /**
   *  Unflatten all flattened operators to a right-heavy binary tree.
   */
  function unflattenr(node, context) {
    if (!node.args || node.args.length === 0) {
      return;
    }
    const makeNode = createMakeNodeFunction(node);
    const l = node.args.length;
    for (let i = 0; i < l; i++) {
      unflattenr(node.args[i], context);
    }
    if (l > 2 && isAssociative(node, context)) {
      let curnode = node.args.pop();
      while (node.args.length > 0) {
        curnode = makeNode([node.args.pop(), curnode]);
      }
      node.args = curnode.args;
    }
  }

  /**
   *  Unflatten all flattened operators to a left-heavy binary tree.
   */
  function unflattenl(node, context) {
    if (!node.args || node.args.length === 0) {
      return;
    }
    const makeNode = createMakeNodeFunction(node);
    const l = node.args.length;
    for (let i = 0; i < l; i++) {
      unflattenl(node.args[i], context);
    }
    if (l > 2 && isAssociative(node, context)) {
      let curnode = node.args.shift();
      while (node.args.length > 0) {
        curnode = makeNode([curnode, node.args.shift()]);
      }
      node.args = curnode.args;
    }
  }
  function createMakeNodeFunction(node) {
    if ((0, _is.isOperatorNode)(node)) {
      return function (args) {
        try {
          return new OperatorNode(node.op, node.fn, args, node.implicit);
        } catch (err) {
          console.error(err);
          return [];
        }
      };
    } else {
      return function (args) {
        return new FunctionNode(new SymbolNode(node.name), args);
      };
    }
  }
  return {
    createMakeNodeFunction,
    hasProperty,
    isCommutative,
    isAssociative,
    mergeContext,
    flatten,
    allChildren,
    unflattenr,
    unflattenl,
    defaultContext,
    realContext,
    positiveContext
  };
});
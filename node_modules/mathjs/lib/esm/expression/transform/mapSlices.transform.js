import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { errorTransform } from './utils/errorTransform.js';
import { factory } from '../../utils/factory.js';
import { createMapSlices } from '../../function/matrix/mapSlices.js';
import { isBigNumber, isNumber } from '../../utils/is.js';
var name = 'mapSlices';
var dependencies = ['typed', 'isInteger'];

/**
 * Attach a transform function to math.mapSlices
 * Adds a property transform containing the transform function.
 *
 * This transform changed the last `dim` parameter of function mapSlices
 * from one-based to zero based
 */
export var createMapSlicesTransform = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    isInteger
  } = _ref;
  var mapSlices = createMapSlices({
    typed,
    isInteger
  });

  // @see: comment of concat itself
  return typed('mapSlices', {
    '...any': function any(args) {
      // change dim from one-based to zero-based
      var dim = args[1];
      if (isNumber(dim)) {
        args[1] = dim - 1;
      } else if (isBigNumber(dim)) {
        args[1] = dim.minus(1);
      }
      try {
        return mapSlices.apply(null, args);
      } catch (err) {
        throw errorTransform(err);
      }
    }
  });
}, _objectSpread({
  isTransformFunction: true
}, createMapSlices.meta));
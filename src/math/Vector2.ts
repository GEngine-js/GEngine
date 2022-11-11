import defaultValue from "../utils/defaultValue";
import defined from "../utils/defined";
import GMath from "./Math";
/**
 * A 2D Cartesian point.
 * @alias Vector2
 * @constructor
 *
 * @param {Number} [x=0.0] The X component.
 * @param {Number} [y=0.0] The Y component.
 *
 * @see Cartesian3
 * @see Cartesian4
 * @see Packable
 */
class Vector2{
  /**
 * An immutable Vector2 instance initialized to (0.0, 0.0).
 *
 * @type {Vector2}
 * @constant
 */
public static ZERO = Object.freeze(new Vector2(0.0, 0.0));

/**
 * An immutable Vector2 instance initialized to (1.0, 1.0).
 *
 * @type {Vector2}
 * @constant
 */
 public static ONE = Object.freeze(new Vector2(1.0, 1.0));

/**
 * An immutable Vector2 instance initialized to (1.0, 0.0).
 *
 * @type {Vector2}
 * @constant
 */
 public static UNIT_X = Object.freeze(new Vector2(1.0, 0.0));

/**
 * An immutable Vector2 instance initialized to (0.0, 1.0).
 *
 * @type {Vector2}
 * @constant
 */
 public static UNIT_Y = Object.freeze(new Vector2(0.0, 1.0));
 /**
 * The number of elements used to pack the object into an array.
 * @type {Number}
 */
public static packedLength = 2;
  x: any;
  y: any;
  constructor(x:number=0.0, y:number=0.0){
   this.x = x;
   this.y =y;
  }
  set(x:number, y:number){
    this.x =x;
    this.y =y;
  }
  toArray(){
    return [this.x,this.y]
  }
  /**
 * Duplicates this Vector2 instance.
 *
 * @param {Vector2} [result] The object onto which to store the result.
 * @returns {Vector2} The modified result parameter or a new Vector2 instance if one was not provided.
 */
clone(result) {
  return Vector2.clone(this, result);
};

/**
 * Compares this Cartesian against the provided Cartesian componentwise and returns
 * <code>true</code> if they are equal, <code>false</code> otherwise.
 *
 * @param {Vector2} [right] The right hand side Cartesian.
 * @returns {Boolean} <code>true</code> if they are equal, <code>false</code> otherwise.
 */
equals(right) {
  return Vector2.equals(this, right);
};

/**
 * Compares this Cartesian against the provided Cartesian componentwise and returns
 * <code>true</code> if they pass an absolute or relative tolerance test,
 * <code>false</code> otherwise.
 *
 * @param {Vector2} [right] The right hand side Cartesian.
 * @param {Number} [relativeEpsilon=0] The relative epsilon tolerance to use for equality testing.
 * @param {Number} [absoluteEpsilon=relativeEpsilon] The absolute epsilon tolerance to use for equality testing.
 * @returns {Boolean} <code>true</code> if they are within the provided epsilon, <code>false</code> otherwise.
 */
equalsEpsilon (
  right,
  relativeEpsilon,
  absoluteEpsilon
) {
  return Vector2.equalsEpsilon(
    this,
    right,
    relativeEpsilon,
    absoluteEpsilon
  );
};

/**
 * Creates a string representing this Cartesian in the format '(x, y)'.
 *
 * @returns {String} A string representing the provided Cartesian in the format '(x, y)'.
 */
toString() {
  return `(${this.x}, ${this.y})`;
};
  /**
 * Creates a Vector2 instance from x and y coordinates.
 *
 * @param {Number} x The x coordinate.
 * @param {Number} y The y coordinate.
 * @param {Vector2} [result] The object onto which to store the result.
 * @returns {Vector2} The modified result parameter or a new Vector2 instance if one was not provided.
 */
static fromElements(x:number, y:number, result) {
  if (!defined(result)) {
    return new Vector2(x, y);
  }

  result.x = x;
  result.y = y;
  return result;
};

/**
 * Duplicates a Vector2 instance.
 *
 * @param {Vector2} cartesian The Cartesian to duplicate.
 * @param {Vector2} [result] The object onto which to store the result.
 * @returns {Vector2} The modified result parameter or a new Vector2 instance if one was not provided. (Returns undefined if cartesian is undefined)
 */
 static clone (cartesian, result) {
  if (!defined(cartesian)) {
    return undefined;
  }
  if (!defined(result)) {
    return new Vector2(cartesian.x, cartesian.y);
  }

  result.x = cartesian.x;
  result.y = cartesian.y;
  return result;
};
/**
 * Computes the value of the maximum component for the supplied Cartesian.
 *
 * @param {Vector2} cartesian The cartesian to use.
 * @returns {Number} The value of the maximum component.
 */
 static maximumComponent(cartesian) {
  return Math.max(cartesian.x, cartesian.y);
};

/**
 * Computes the value of the minimum component for the supplied Cartesian.
 *
 * @param {Vector2} cartesian The cartesian to use.
 * @returns {Number} The value of the minimum component.
 */
 static minimumComponent(cartesian) {
  return Math.min(cartesian.x, cartesian.y);
};

/**
 * Compares two Cartesians and computes a Cartesian which contains the minimum components of the supplied Cartesians.
 *
 * @param {Vector2} first A cartesian to compare.
 * @param {Vector2} second A cartesian to compare.
 * @param {Vector2} result The object into which to store the result.
 * @returns {Vector2} A cartesian with the minimum components.
 */
 static minimumByComponent(first, second, result) {

  result.x = Math.min(first.x, second.x);
  result.y = Math.min(first.y, second.y);

  return result;
};

/**
 * Compares two Cartesians and computes a Cartesian which contains the maximum components of the supplied Cartesians.
 *
 * @param {Vector2} first A cartesian to compare.
 * @param {Vector2} second A cartesian to compare.
 * @param {Vector2} result The object into which to store the result.
 * @returns {Vector2} A cartesian with the maximum components.
 */
 static maximumByComponent(first, second, result) {

  result.x = Math.max(first.x, second.x);
  result.y = Math.max(first.y, second.y);
  return result;
};

/**
 * Constrain a value to lie between two values.
 *
 * @param {Vector2} value The value to clamp.
 * @param {Vector2} min The minimum bound.
 * @param {Vector2} max The maximum bound.
 * @param {Vector2} result The object into which to store the result.
 * @returns {Vector2} The clamped value such that min <= result <= max.
 */
 static clamp (value, min, max, result) {

  const x = GMath.clamp(value.x, min.x, max.x);
  const y = GMath.clamp(value.y, min.y, max.y);

  result.x = x;
  result.y = y;

  return result;
};

/**
 * Computes the provided Cartesian's squared magnitude.
 *
 * @param {Vector2} cartesian The Cartesian instance whose squared magnitude is to be computed.
 * @returns {Number} The squared magnitude.
 */
 static magnitudeSquared(cartesian) {

  return cartesian.x * cartesian.x + cartesian.y * cartesian.y;
};

/**
 * Computes the Cartesian's magnitude (length).
 *
 * @param {Vector2} cartesian The Cartesian instance whose magnitude is to be computed.
 * @returns {Number} The magnitude.
 */
 static magnitude(cartesian) {
  return Math.sqrt(Vector2.magnitudeSquared(cartesian));
};



/**
 * Computes the distance between two points.
 *
 * @param {Vector2} left The first point to compute the distance from.
 * @param {Vector2} right The second point to compute the distance to.
 * @returns {Number} The distance between two points.
 *
 * @example
 * // Returns 1.0
 * const d = Cesium.Vector2.distance(new Cesium.Vector2(1.0, 0.0), new Cesium.Vector2(2.0, 0.0));
 */
 static distance(left, right) {

  Vector2.subtract(left, right, distanceScratch);
  return Vector2.magnitude(distanceScratch);
};

/**
 * Computes the squared distance between two points.  Comparing squared distances
 * using this function is more efficient than comparing distances using {@link Vector2#distance}.
 *
 * @param {Vector2} left The first point to compute the distance from.
 * @param {Vector2} right The second point to compute the distance to.
 * @returns {Number} The distance between two points.
 *
 * @example
 * // Returns 4.0, not 2.0
 * const d = Cesium.Vector2.distance(new Cesium.Vector2(1.0, 0.0), new Cesium.Vector2(3.0, 0.0));
 */
 static distanceSquared(left, right) {

  Vector2.subtract(left, right, distanceScratch);
  return Vector2.magnitudeSquared(distanceScratch);
};

/**
 * Computes the normalized form of the supplied Cartesian.
 *
 * @param {Vector2} cartesian The Cartesian to be normalized.
 * @param {Vector2} result The object onto which to store the result.
 * @returns {Vector2} The modified result parameter.
 */
 static normalize(cartesian, result) {

  const magnitude = Vector2.magnitude(cartesian);

  result.x = cartesian.x / magnitude;
  result.y = cartesian.y / magnitude;

  //>>includeStart('debug', pragmas.debug);
  if (isNaN(result.x) || isNaN(result.y)) {
    throw new Error("normalized result is not a number");
  }
  //>>includeEnd('debug');

  return result;
};

/**
 * Computes the dot (scalar) product of two Cartesians.
 *
 * @param {Vector2} left The first Cartesian.
 * @param {Vector2} right The second Cartesian.
 * @returns {Number} The dot product.
 */
 static dot(left, right) {

  return left.x * right.x + left.y * right.y;
};

/**
 * Computes the magnitude of the cross product that would result from implicitly setting the Z coordinate of the input vectors to 0
 *
 * @param {Vector2} left The first Cartesian.
 * @param {Vector2} right The second Cartesian.
 * @returns {Number} The cross product.
 */
 static cross(left, right) {

  return left.x * right.y - left.y * right.x;
};

/**
 * Computes the componentwise product of two Cartesians.
 *
 * @param {Vector2} left The first Cartesian.
 * @param {Vector2} right The second Cartesian.
 * @param {Vector2} result The object onto which to store the result.
 * @returns {Vector2} The modified result parameter.
 */
 static multiplyComponents(left, right, result) {

  result.x = left.x * right.x;
  result.y = left.y * right.y;
  return result;
};

/**
 * Computes the componentwise quotient of two Cartesians.
 *
 * @param {Vector2} left The first Cartesian.
 * @param {Vector2} right The second Cartesian.
 * @param {Vector2} result The object onto which to store the result.
 * @returns {Vector2} The modified result parameter.
 */
 static divideComponents(left, right, result) {

  result.x = left.x / right.x;
  result.y = left.y / right.y;
  return result;
};

/**
 * Computes the componentwise sum of two Cartesians.
 *
 * @param {Vector2} left The first Cartesian.
 * @param {Vector2} right The second Cartesian.
 * @param {Vector2} result The object onto which to store the result.
 * @returns {Vector2} The modified result parameter.
 */
 static add(left, right, result) {

  result.x = left.x + right.x;
  result.y = left.y + right.y;
  return result;
};

/**
 * Computes the componentwise difference of two Cartesians.
 *
 * @param {Vector2} left The first Cartesian.
 * @param {Vector2} right The second Cartesian.
 * @param {Vector2} result The object onto which to store the result.
 * @returns {Vector2} The modified result parameter.
 */
 static subtract(left, right, result) {

  result.x = left.x - right.x;
  result.y = left.y - right.y;
  return result;
};

/**
 * Multiplies the provided Cartesian componentwise by the provided scalar.
 *
 * @param {Vector2} cartesian The Cartesian to be scaled.
 * @param {Number} scalar The scalar to multiply with.
 * @param {Vector2} result The object onto which to store the result.
 * @returns {Vector2} The modified result parameter.
 */
 static multiplyByScalar(cartesian, scalar, result) {

  result.x = cartesian.x * scalar;
  result.y = cartesian.y * scalar;
  return result;
};

/**
 * Divides the provided Cartesian componentwise by the provided scalar.
 *
 * @param {Vector2} cartesian The Cartesian to be divided.
 * @param {Number} scalar The scalar to divide by.
 * @param {Vector2} result The object onto which to store the result.
 * @returns {Vector2} The modified result parameter.
 */
 static divideByScalar(cartesian, scalar, result) {

  result.x = cartesian.x / scalar;
  result.y = cartesian.y / scalar;
  return result;
};

/**
 * Negates the provided Cartesian.
 *
 * @param {Vector2} cartesian The Cartesian to be negated.
 * @param {Vector2} result The object onto which to store the result.
 * @returns {Vector2} The modified result parameter.
 */
 static negate(cartesian, result) {

  result.x = -cartesian.x;
  result.y = -cartesian.y;
  return result;
};

/**
 * Computes the absolute value of the provided Cartesian.
 *
 * @param {Vector2} cartesian The Cartesian whose absolute value is to be computed.
 * @param {Vector2} result The object onto which to store the result.
 * @returns {Vector2} The modified result parameter.
 */
 static abs(cartesian, result) {

  result.x = Math.abs(cartesian.x);
  result.y = Math.abs(cartesian.y);
  return result;
};

/**
 * Computes the linear interpolation or extrapolation at t using the provided cartesians.
 *
 * @param {Vector2} start The value corresponding to t at 0.0.
 * @param {Vector2} end The value corresponding to t at 1.0.
 * @param {Number} t The point along t at which to interpolate.
 * @param {Vector2} result The object onto which to store the result.
 * @returns {Vector2} The modified result parameter.
 */
 static lerp (start, end, t, result) {

  Vector2.multiplyByScalar(end, t, lerpScratch);
  result = Vector2.multiplyByScalar(start, 1.0 - t, result);
  return Vector2.add(lerpScratch, result, result);
};

/**
 * Returns the angle, in radians, between the provided Cartesians.
 *
 * @param {Vector2} left The first Cartesian.
 * @param {Vector2} right The second Cartesian.
 * @returns {Number} The angle between the Cartesians.
 */
 static angleBetween(left, right) {

  Vector2.normalize(left, angleBetweenScratch);
  Vector2.normalize(right, angleBetweenScratch2);
  return GMath.acosClamped(
    Vector2.dot(angleBetweenScratch, angleBetweenScratch2)
  );
};

/**
 * Returns the axis that is most orthogonal to the provided Cartesian.
 *
 * @param {Vector2} cartesian The Cartesian on which to find the most orthogonal axis.
 * @param {Vector2} result The object onto which to store the result.
 * @returns {Vector2} The most orthogonal axis.
 */
 static mostOrthogonalAxis(cartesian, result) {

  const f = Vector2.normalize(cartesian, mostOrthogonalAxisScratch);
  Vector2.abs(f, f);

  if (f.x <= f.y) {
    result = Vector2.clone(Vector2.UNIT_X, result);
  } else {
    result = Vector2.clone(Vector2.UNIT_Y, result);
  }

  return result;
};

/**
 * Compares the provided Cartesians componentwise and returns
 * <code>true</code> if they are equal, <code>false</code> otherwise.
 *
 * @param {Vector2} [left] The first Cartesian.
 * @param {Vector2} [right] The second Cartesian.
 * @returns {Boolean} <code>true</code> if left and right are equal, <code>false</code> otherwise.
 */
 static equals(left, right) {
  return (
    left === right ||
    (defined(left) &&
      defined(right) &&
      left.x === right.x &&
      left.y === right.y)
  );
};

/**
 * @private
 */
 static equalsArray(cartesian, array, offset) {
  return cartesian.x === array[offset] && cartesian.y === array[offset + 1];
};

/**
 * Compares the provided Cartesians componentwise and returns
 * <code>true</code> if they pass an absolute or relative tolerance test,
 * <code>false</code> otherwise.
 *
 * @param {Vector2} [left] The first Cartesian.
 * @param {Vector2} [right] The second Cartesian.
 * @param {Number} [relativeEpsilon=0] The relative epsilon tolerance to use for equality testing.
 * @param {Number} [absoluteEpsilon=relativeEpsilon] The absolute epsilon tolerance to use for equality testing.
 * @returns {Boolean} <code>true</code> if left and right are within the provided epsilon, <code>false</code> otherwise.
 */
 static equalsEpsilon(
  left,
  right,
  relativeEpsilon,
  absoluteEpsilon
) {
  return (
    left === right ||
    (defined(left) &&
      defined(right) &&
      GMath.equalsEpsilon(
        left.x,
        right.x,
        relativeEpsilon,
        absoluteEpsilon
      ) &&
      GMath.equalsEpsilon(
        left.y,
        right.y,
        relativeEpsilon,
        absoluteEpsilon
      ))
  );
};

}
const distanceScratch = new Vector2();
const lerpScratch = new Vector2();
const angleBetweenScratch = new Vector2();
const angleBetweenScratch2 = new Vector2();
const mostOrthogonalAxisScratch = new Vector2();

export default Vector2;

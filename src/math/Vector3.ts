import defaultValue from "../utils/defaultValue";
import defined from "../utils/defined";
import GMath from "./Math";

/**
 * A 3D Cartesian point.
 * @alias Vector3
 * @constructor
 *
 * @param {Number} [x=0.0] The X component.
 * @param {Number} [y=0.0] The Y component.
 * @param {Number} [z=0.0] The Z component.
 *
 * @see Cartesian2
 * @see Cartesian4
 * @see Packable
 */
class Vector3 {
  /**
 * An immutable Vector3 instance initialized to (0.0, 0.0, 0.0).
 *
 * @type {Vector3}
 * @constant
 */
  public static ZERO = Object.freeze(new Vector3(0.0, 0.0, 0.0));

  /**
   * An immutable Vector3 instance initialized to (1.0, 1.0, 1.0).
   *
   * @type {Vector3}
   * @constant
   */
  public static ONE = Object.freeze(new Vector3(1.0, 1.0, 1.0));

  /**
   * An immutable Vector3 instance initialized to (1.0, 0.0, 0.0).
   *
   * @type {Vector3}
   * @constant
   */
  public static UNIT_X = Object.freeze(new Vector3(1.0, 0.0, 0.0));

  /**
   * An immutable Vector3 instance initialized to (0.0, 1.0, 0.0).
   *
   * @type {Vector3}
   * @constant
   */
  public static UNIT_Y = Object.freeze(new Vector3(0.0, 1.0, 0.0));

  /**
   * An immutable Vector3 instance initialized to (0.0, 0.0, 1.0).
   *
   * @type {Vector3}
   * @constant
   */
  public static UNIT_Z = Object.freeze(new Vector3(0.0, 0.0, 1.0));
  x: number;
  y: number;
  z: number;

  constructor(x:number=0, y:number=0, z:number=0) {
    this.x =x;
    this.y =y;
    this.z =z;
  }
  set(x:number, y:number, z:number){
    this.x =x;
    this.y =y;
    this.z =z;
  }
  toArray(){
    return [this.x,this.y,this.z]
  }
  /**
 * Duplicates this Vector3 instance.
 *
 * @param {Vector3} [result] The object onto which to store the result.
 * @returns {Vector3} The modified result parameter or a new Vector3 instance if one was not provided.
 */
  clone() {
    return Vector3.clone(this, new Vector3());
  };
	length() {
		return Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z );
	}
  applyMatrix4( matrix ) {

		const x = this.x,
     y = this.y, 
     z = this.z;
		const e = matrix;
		const w = 1 / ( e[ 3 ] * x + e[ 7 ] * y + e[ 11 ] * z + e[ 15 ] );
		this.x = ( e[ 0 ] * x + e[ 4 ] * y + e[ 8 ] * z + e[ 12 ] ) * w;
		this.y = ( e[ 1 ] * x + e[ 5 ] * y + e[ 9 ] * z + e[ 13 ] ) * w;
		this.z = ( e[ 2 ] * x + e[ 6 ] * y + e[ 10 ] * z + e[ 14 ] ) * w;
		return this;

	}
  transformDirection( matrix ) {
		const x = this.x, y = this.y, z = this.z;
		const e = matrix;
		this.x = e[ 0 ] * x + e[ 4 ] * y + e[ 8 ] * z;
		this.y = e[ 1 ] * x + e[ 5 ] * y + e[ 9 ] * z;
		this.z = e[ 2 ] * x + e[ 6 ] * y + e[ 10 ] * z;
		return this.normalize();
	}
  normalize(){
   Vector3.normalize(this,this);
   return this;
  }
  /**
   * Compares this Cartesian against the provided Cartesian componentwise and returns
   * <code>true</code> if they are equal, <code>false</code> otherwise.
   *
   * @param {Vector3} [right] The right hand side Cartesian.
   * @returns {Boolean} <code>true</code> if they are equal, <code>false</code> otherwise.
   */
  equals(right) {
    return Vector3.equals(this, right);
  };

  /**
   * Compares this Cartesian against the provided Cartesian componentwise and returns
   * <code>true</code> if they pass an absolute or relative tolerance test,
   * <code>false</code> otherwise.
   *
   * @param {Vector3} [right] The right hand side Cartesian.
   * @param {Number} [relativeEpsilon=0] The relative epsilon tolerance to use for equality testing.
   * @param {Number} [absoluteEpsilon=relativeEpsilon] The absolute epsilon tolerance to use for equality testing.
   * @returns {Boolean} <code>true</code> if they are within the provided epsilon, <code>false</code> otherwise.
   */
  equalsEpsilon(
    right,
    relativeEpsilon,
    absoluteEpsilon
  ) {
    return Vector3.equalsEpsilon(
      this,
      right,
      relativeEpsilon,
      absoluteEpsilon
    );
  };

  /**
   * Creates a string representing this Cartesian in the format '(x, y, z)'.
   *
   * @returns {String} A string representing this Cartesian in the format '(x, y, z)'.
   */
  toString() {
    return `(${this.x}, ${this.y}, ${this.z})`;
  };
  static fromVector4(vec4, result){
     result.x=vec4.x;
     result.y=vec4.y;
     result.z=vec4.z;
     return result;
  }
  /**
 * Converts the provided Spherical into Vector3 coordinates.
 *
 * @param {Spherical} spherical The Spherical to be converted to Vector3.
 * @param {Vector3} [result] The object onto which to store the result.
 * @returns {Vector3} The modified result parameter or a new Vector3 instance if one was not provided.
 */
  static fromSpherical(spherical, result) {

    if (!defined(result)) {
      result = new Vector3();
    }

    const clock = spherical.clock;
    const cone = spherical.cone;
    const magnitude = defaultValue(spherical.magnitude, 1.0);
    const radial = magnitude * Math.sin(cone);
    result.x = radial * Math.cos(clock);
    result.y = radial * Math.sin(clock);
    result.z = magnitude * Math.cos(cone);
    return result;
  };

  /**
   * Creates a Vector3 instance from x, y and z coordinates.
   *
   * @param {Number} x The x coordinate.
   * @param {Number} y The y coordinate.
   * @param {Number} z The z coordinate.
   * @param {Vector3} [result] The object onto which to store the result.
   * @returns {Vector3} The modified result parameter or a new Vector3 instance if one was not provided.
   */
  static fromElements(x, y, z, result) {
    if (!defined(result)) {
      return new Vector3(x, y, z);
    }

    result.x = x;
    result.y = y;
    result.z = z;
    return result;
  };

  /**
   * Duplicates a Vector3 instance.
   *
   * @param {Vector3} cartesian The Cartesian to duplicate.
   * @param {Vector3} [result] The object onto which to store the result.
   * @returns {Vector3} The modified result parameter or a new Vector3 instance if one was not provided. (Returns undefined if cartesian is undefined)
   */
  static clone(cartesian, result:Vector3=new Vector3()) {
    if (!defined(cartesian)) {
      return undefined;
    }
    if (!defined(result)) {
      return new Vector3(cartesian.x, cartesian.y, cartesian.z);
    }

    result.x = cartesian.x;
    result.y = cartesian.y;
    result.z = cartesian.z;
    return result;
  };
  /**
   * Computes the value of the maximum component for the supplied Cartesian.
   *
   * @param {Vector3} cartesian The cartesian to use.
   * @returns {Number} The value of the maximum component.
   */
  static maximumComponent(cartesian) {

    return Math.max(cartesian.x, cartesian.y, cartesian.z);
  };

  /**
   * Computes the value of the minimum component for the supplied Cartesian.
   *
   * @param {Vector3} cartesian The cartesian to use.
   * @returns {Number} The value of the minimum component.
   */
  static minimumComponent(cartesian) {

    return Math.min(cartesian.x, cartesian.y, cartesian.z);
  };

  /**
   * Compares two Cartesians and computes a Cartesian which contains the minimum components of the supplied Cartesians.
   *
   * @param {Vector3} first A cartesian to compare.
   * @param {Vector3} second A cartesian to compare.
   * @param {Vector3} result The object into which to store the result.
   * @returns {Vector3} A cartesian with the minimum components.
   */
  static minimumByComponent(first, second, result) {

    result.x = Math.min(first.x, second.x);
    result.y = Math.min(first.y, second.y);
    result.z = Math.min(first.z, second.z);

    return result;
  };

  /**
   * Compares two Cartesians and computes a Cartesian which contains the maximum components of the supplied Cartesians.
   *
   * @param {Vector3} first A cartesian to compare.
   * @param {Vector3} second A cartesian to compare.
   * @param {Vector3} result The object into which to store the result.
   * @returns {Vector3} A cartesian with the maximum components.
   */
  static maximumByComponent(first, second, result) {

    result.x = Math.max(first.x, second.x);
    result.y = Math.max(first.y, second.y);
    result.z = Math.max(first.z, second.z);
    return result;
  };

  /**
   * Constrain a value to lie between two values.
   *
   * @param {Vector3} cartesian The value to clamp.
   * @param {Vector3} min The minimum bound.
   * @param {Vector3} max The maximum bound.
   * @param {Vector3} result The object into which to store the result.
   * @returns {Vector3} The clamped value such that min <= value <= max.
   */
  static clamp(value, min, max, result) {

    const x = GMath.clamp(value.x, min.x, max.x);
    const y = GMath.clamp(value.y, min.y, max.y);
    const z = GMath.clamp(value.z, min.z, max.z);

    result.x = x;
    result.y = y;
    result.z = z;

    return result;
  };

  /**
   * Computes the provided Cartesian's squared magnitude.
   *
   * @param {Vector3} cartesian The Cartesian instance whose squared magnitude is to be computed.
   * @returns {Number} The squared magnitude.
   */
  static magnitudeSquared(cartesian) {
    return (
      cartesian.x * cartesian.x +
      cartesian.y * cartesian.y +
      cartesian.z * cartesian.z
    );
  };

  /**
   * Computes the Cartesian's magnitude (length).
   *
   * @param {Vector3} cartesian The Cartesian instance whose magnitude is to be computed.
   * @returns {Number} The magnitude.
   */
  static magnitude(cartesian) {
    return Math.sqrt(Vector3.magnitudeSquared(cartesian));
  };

  /**
   * Computes the distance between two points.
   *
   * @param {Vector3} left The first point to compute the distance from.
   * @param {Vector3} right The second point to compute the distance to.
   * @returns {Number} The distance between two points.
   *
   * @example
   * // Returns 1.0
   * const d = Cesium.Vector3.distance(new Cesium.Vector3(1.0, 0.0, 0.0), new Cesium.Vector3(2.0, 0.0, 0.0));
   */
  static distance(left, right) {

    Vector3.subtract(left, right, distanceScratch);
    return Vector3.magnitude(distanceScratch);
  };

  /**
   * Computes the squared distance between two points.  Comparing squared distances
   * using this function is more efficient than comparing distances using {@link Vector3#distance}.
   *
   * @param {Vector3} left The first point to compute the distance from.
   * @param {Vector3} right The second point to compute the distance to.
   * @returns {Number} The distance between two points.
   *
   * @example
   * // Returns 4.0, not 2.0
   * const d = Cesium.Vector3.distanceSquared(new Cesium.Vector3(1.0, 0.0, 0.0), new Cesium.Vector3(3.0, 0.0, 0.0));
   */
  static distanceSquared(left, right) {

    Vector3.subtract(left, right, distanceScratch);
    return Vector3.magnitudeSquared(distanceScratch);
  };

  /**
   * Computes the normalized form of the supplied Cartesian.
   *
   * @param {Vector3} cartesian The Cartesian to be normalized.
   * @param {Vector3} result The object onto which to store the result.
   * @returns {Vector3} The modified result parameter.
   */
  static normalize(cartesian, result) {

    const magnitude = Vector3.magnitude(cartesian);

    result.x = cartesian.x / magnitude;
    result.y = cartesian.y / magnitude;
    result.z = cartesian.z / magnitude;

    if (isNaN(result.x) || isNaN(result.y) || isNaN(result.z)) {
      throw new Error("normalized result is not a number");
    }

    return result;
  };

  /**
   * Computes the dot (scalar) product of two Cartesians.
   *
   * @param {Vector3} left The first Cartesian.
   * @param {Vector3} right The second Cartesian.
   * @returns {Number} The dot product.
   */
  static dot(left, right) {

    return left.x * right.x + left.y * right.y + left.z * right.z;
  };

  /**
   * Computes the componentwise product of two Cartesians.
   *
   * @param {Vector3} left The first Cartesian.
   * @param {Vector3} right The second Cartesian.
   * @param {Vector3} result The object onto which to store the result.
   * @returns {Vector3} The modified result parameter.
   */
  static multiplyComponents(left, right, result) {

    result.x = left.x * right.x;
    result.y = left.y * right.y;
    result.z = left.z * right.z;
    return result;
  };

  /**
   * Computes the componentwise quotient of two Cartesians.
   *
   * @param {Vector3} left The first Cartesian.
   * @param {Vector3} right The second Cartesian.
   * @param {Vector3} result The object onto which to store the result.
   * @returns {Vector3} The modified result parameter.
   */
  static divideComponents(left, right, result) {

    result.x = left.x / right.x;
    result.y = left.y / right.y;
    result.z = left.z / right.z;
    return result;
  };

  /**
   * Computes the componentwise sum of two Cartesians.
   *
   * @param {Vector3} left The first Cartesian.
   * @param {Vector3} right The second Cartesian.
   * @param {Vector3} result The object onto which to store the result.
   * @returns {Vector3} The modified result parameter.
   */
  static add(left, right, result) {

    result.x = left.x + right.x;
    result.y = left.y + right.y;
    result.z = left.z + right.z;
    return result;
  };

  /**
   * Computes the componentwise difference of two Cartesians.
   *
   * @param {Vector3} left The first Cartesian.
   * @param {Vector3} right The second Cartesian.
   * @param {Vector3} result The object onto which to store the result.
   * @returns {Vector3} The modified result parameter.
   */
  static subtract(left, right, result) {

    result.x = left.x - right.x;
    result.y = left.y - right.y;
    result.z = left.z - right.z;
    return result;
  };

  /**
   * Multiplies the provided Cartesian componentwise by the provided scalar.
   *
   * @param {Vector3} cartesian The Cartesian to be scaled.
   * @param {Number} scalar The scalar to multiply with.
   * @param {Vector3} result The object onto which to store the result.
   * @returns {Vector3} The modified result parameter.
   */
  static multiplyByScalar(cartesian, scalar, result) {

    result.x = cartesian.x * scalar;
    result.y = cartesian.y * scalar;
    result.z = cartesian.z * scalar;
    return result;
  };

  /**
   * Divides the provided Cartesian componentwise by the provided scalar.
   *
   * @param {Vector3} cartesian The Cartesian to be divided.
   * @param {Number} scalar The scalar to divide by.
   * @param {Vector3} result The object onto which to store the result.
   * @returns {Vector3} The modified result parameter.
   */
  static divideByScalar(cartesian, scalar, result) {

    result.x = cartesian.x / scalar;
    result.y = cartesian.y / scalar;
    result.z = cartesian.z / scalar;
    return result;
  };

  /**
   * Negates the provided Cartesian.
   *
   * @param {Vector3} cartesian The Cartesian to be negated.
   * @param {Vector3} result The object onto which to store the result.
   * @returns {Vector3} The modified result parameter.
   */
  static negate(cartesian, result) {

    result.x = -cartesian.x;
    result.y = -cartesian.y;
    result.z = -cartesian.z;
    return result;
  };

  /**
   * Computes the absolute value of the provided Cartesian.
   *
   * @param {Vector3} cartesian The Cartesian whose absolute value is to be computed.
   * @param {Vector3} result The object onto which to store the result.
   * @returns {Vector3} The modified result parameter.
   */
  static abs(cartesian, result) {

    result.x = Math.abs(cartesian.x);
    result.y = Math.abs(cartesian.y);
    result.z = Math.abs(cartesian.z);
    return result;
  };

  /**
   * Computes the linear interpolation or extrapolation at t using the provided cartesians.
   *
   * @param {Vector3} start The value corresponding to t at 0.0.
   * @param {Vector3} end The value corresponding to t at 1.0.
   * @param {Number} t The point along t at which to interpolate.
   * @param {Vector3} result The object onto which to store the result.
   * @returns {Vector3} The modified result parameter.
   */
  static lerp (start, end, t, result) {
    Vector3.multiplyByScalar(end, t, lerpScratch);
    result = Vector3.multiplyByScalar(start, 1.0 - t, result);
    return Vector3.add(lerpScratch, result, result);
  };
  /**
   * Returns the angle, in radians, between the provided Cartesians.
   *
   * @param {Vector3} left The first Cartesian.
   * @param {Vector3} right The second Cartesian.
   * @returns {Number} The angle between the Cartesians.
   */
  static angleBetween(left, right) {

    Vector3.normalize(left, angleBetweenScratch);
    Vector3.normalize(right, angleBetweenScratch2);
    const cosine = Vector3.dot(angleBetweenScratch, angleBetweenScratch2);
    const sine = Vector3.magnitude(
      Vector3.cross(
        angleBetweenScratch,
        angleBetweenScratch2,
        angleBetweenScratch
      )
    );
    return Math.atan2(sine, cosine);
  };

  /**
   * Returns the axis that is most orthogonal to the provided Cartesian.
   *
   * @param {Vector3} cartesian The Cartesian on which to find the most orthogonal axis.
   * @param {Vector3} result The object onto which to store the result.
   * @returns {Vector3} The most orthogonal axis.
   */
  static mostOrthogonalAxis(cartesian, result) {

    const f = Vector3.normalize(cartesian, mostOrthogonalAxisScratch);
    Vector3.abs(f, f);

    if (f.x <= f.y) {
      if (f.x <= f.z) {
        result = Vector3.clone(Vector3.UNIT_X, result);
      } else {
        result = Vector3.clone(Vector3.UNIT_Z, result);
      }
    } else if (f.y <= f.z) {
      result = Vector3.clone(Vector3.UNIT_Y, result);
    } else {
      result = Vector3.clone(Vector3.UNIT_Z, result);
    }

    return result;
  };

  /**
   * Projects vector a onto vector b
   * @param {Vector3} a The vector that needs projecting
   * @param {Vector3} b The vector to project onto
   * @param {Vector3} result The result cartesian
   * @returns {Vector3} The modified result parameter
   */
  static projectVector(a, b, result) {

    const scalar = Vector3.dot(a, b) / Vector3.dot(b, b);
    return Vector3.multiplyByScalar(b, scalar, result);
  };

  /**
   * Compares the provided Cartesians componentwise and returns
   * <code>true</code> if they are equal, <code>false</code> otherwise.
   *
   * @param {Vector3} [left] The first Cartesian.
   * @param {Vector3} [right] The second Cartesian.
   * @returns {Boolean} <code>true</code> if left and right are equal, <code>false</code> otherwise.
   */
  static equals(left, right) {
    return (
      left === right ||
      (defined(left) &&
        defined(right) &&
        left.x === right.x &&
        left.y === right.y &&
        left.z === right.z)
    );
  };

  /**
   * @private
   */
  static equalsArray(cartesian, array, offset) {
    return (
      cartesian.x === array[offset] &&
      cartesian.y === array[offset + 1] &&
      cartesian.z === array[offset + 2]
    );
  };

  /**
   * Compares the provided Cartesians componentwise and returns
   * <code>true</code> if they pass an absolute or relative tolerance test,
   * <code>false</code> otherwise.
   *
   * @param {Vector3} [left] The first Cartesian.
   * @param {Vector3} [right] The second Cartesian.
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
        ) &&
        GMath.equalsEpsilon(
          left.z,
          right.z,
          relativeEpsilon,
          absoluteEpsilon
        ))
    );
  };

  /**
   * Computes the cross (outer) product of two Cartesians.
   *
   * @param {Vector3} left The first Cartesian.
   * @param {Vector3} right The second Cartesian.
   * @param {Vector3} result The object onto which to store the result.
   * @returns {Vector3} The cross product.
   */
  static cross(left, right, result) {

    const leftX = left.x;
    const leftY = left.y;
    const leftZ = left.z;
    const rightX = right.x;
    const rightY = right.y;
    const rightZ = right.z;

    const x = leftY * rightZ - leftZ * rightY;
    const y = leftZ * rightX - leftX * rightZ;
    const z = leftX * rightY - leftY * rightX;

    result.x = x;
    result.y = y;
    result.z = z;
    return result;
  };

  /**
   * Computes the midpoint between the right and left Cartesian.
   * @param {Vector3} left The first Cartesian.
   * @param {Vector3} right The second Cartesian.
   * @param {Vector3} result The object onto which to store the result.
   * @returns {Vector3} The midpoint.
   */
  static midpoint = function (left, right, result) {

    result.x = (left.x + right.x) * 0.5;
    result.y = (left.y + right.y) * 0.5;
    result.z = (left.z + right.z) * 0.5;

    return result;
  };
}
const distanceScratch = new Vector3();
const lerpScratch = new Vector3();
const angleBetweenScratch = new Vector3();
const angleBetweenScratch2 = new Vector3();
const mostOrthogonalAxisScratch = new Vector3();
let scratchN = new Vector3();
let scratchK = new Vector3();
export default Vector3;


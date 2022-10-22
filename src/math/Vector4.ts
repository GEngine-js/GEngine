import defaultValue from "../utils/defaultValue";
import defined from "../utils/defined";
import CesiumMath from "./Math";

/**
 * A 4D Cartesian point.
 * @alias Vector4
 * @constructor
 *
 * @param {Number} [x=0.0] The X component.
 * @param {Number} [y=0.0] The Y component.
 * @param {Number} [z=0.0] The Z component.
 * @param {Number} [w=0.0] The W component.
 *
 * @see Vector2
 * @see Vector3
 * @see Packable
 */
class Vector4 {
  /**
 * An immutable Vector4 instance initialized to (0.0, 0.0, 0.0, 0.0).
 *
 * @type {Vector4}
 * @constant
 */
  public static ZERO = Object.freeze(new Vector4(0.0, 0.0, 0.0, 0.0));

  /**
   * An immutable Vector4 instance initialized to (1.0, 1.0, 1.0, 1.0).
   *
   * @type {Vector4}
   * @constant
   */
  public static ONE = Object.freeze(new Vector4(1.0, 1.0, 1.0, 1.0));

  /**
   * An immutable Vector4 instance initialized to (1.0, 0.0, 0.0, 0.0).
   *
   * @type {Vector4}
   * @constant
   */
  public static UNIT_X = Object.freeze(new Vector4(1.0, 0.0, 0.0, 0.0));

  /**
   * An immutable Vector4 instance initialized to (0.0, 1.0, 0.0, 0.0).
   *
   * @type {Vector4}
   * @constant
   */
  public static UNIT_Y = Object.freeze(new Vector4(0.0, 1.0, 0.0, 0.0));

  /**
   * An immutable Vector4 instance initialized to (0.0, 0.0, 1.0, 0.0).
   *
   * @type {Vector4}
   * @constant
   */
  public static UNIT_Z = Object.freeze(new Vector4(0.0, 0.0, 1.0, 0.0));

  /**
   * An immutable Vector4 instance initialized to (0.0, 0.0, 0.0, 1.0).
   *
   * @type {Vector4}
   * @constant
   */
  /**
   * The number of elements used to pack the object into an array.
   * @type {Number}
   */
  public static packedLength = 4;
  public static UNIT_W = Object.freeze(new Vector4(0.0, 0.0, 0.0, 1.0));
  x: number;
  y: number;
  z: number;
  w: number;
  constructor(x:number=0, y:number=0, z:number=0, w:number=0) {
    this.x =x;
    this.y =y;
    this.z =z;
    this.w =w;
  }
  toArray(){
    return [this.x,this.y,this.z,this.w]
  }
  /**
   * Duplicates this Vector4 instance.
   *
   * @param {Vector4} [result] The object onto which to store the result.
   * @returns {Vector4} The modified result parameter or a new Vector4 instance if one was not provided.
   */
  clone(result) {
    return Vector4.clone(this, result);
  };

  /**
   * Compares this Cartesian against the provided Cartesian componentwise and returns
   * <code>true</code> if they are equal, <code>false</code> otherwise.
   *
   * @param {Vector4} [right] The right hand side Cartesian.
   * @returns {Boolean} <code>true</code> if they are equal, <code>false</code> otherwise.
   */
  equals(right) {
    return Vector4.equals(this, right);
  };

  /**
   * Compares this Cartesian against the provided Cartesian componentwise and returns
   * <code>true</code> if they pass an absolute or relative tolerance test,
   * <code>false</code> otherwise.
   *
   * @param {Vector4} [right] The right hand side Cartesian.
   * @param {Number} [relativeEpsilon=0] The relative epsilon tolerance to use for equality testing.
   * @param {Number} [absoluteEpsilon=relativeEpsilon] The absolute epsilon tolerance to use for equality testing.
   * @returns {Boolean} <code>true</code> if they are within the provided epsilon, <code>false</code> otherwise.
   */
  equalsEpsilon(
    right,
    relativeEpsilon,
    absoluteEpsilon
  ) {
    return Vector4.equalsEpsilon(
      this,
      right,
      relativeEpsilon,
      absoluteEpsilon
    );
  };

  /**
   * Creates a string representing this Cartesian in the format '(x, y, z, w)'.
   *
   * @returns {String} A string representing the provided Cartesian in the format '(x, y, z, w)'.
   */
  toString() {
    return `(${this.x}, ${this.y}, ${this.z}, ${this.w})`;
  };
  /**
   * Creates a Vector4 instance from x, y, z and w coordinates.
   *
   * @param {Number} x The x coordinate.
   * @param {Number} y The y coordinate.
   * @param {Number} z The z coordinate.
   * @param {Number} w The w coordinate.
   * @param {Vector4} [result] The object onto which to store the result.
   * @returns {Vector4} The modified result parameter or a new Vector4 instance if one was not provided.
   */
  static fromElements(x, y, z, w, result) {
    if (!defined(result)) {
      return new Vector4(x, y, z, w);
    }

    result.x = x;
    result.y = y;
    result.z = z;
    result.w = w;
    return result;
  };

  /**
   * Creates a Vector4 instance from a {@link Color}. <code>red</code>, <code>green</code>, <code>blue</code>,
   * and <code>alpha</code> map to <code>x</code>, <code>y</code>, <code>z</code>, and <code>w</code>, respectively.
   *
   * @param {Color} color The source color.
   * @param {Vector4} [result] The object onto which to store the result.
   * @returns {Vector4} The modified result parameter or a new Vector4 instance if one was not provided.
   */
  static fromColor(color, result) {
    if (!defined(result)) {
      return new Vector4(color.red, color.green, color.blue, color.alpha);
    }

    result.x = color.red;
    result.y = color.green;
    result.z = color.blue;
    result.w = color.alpha;
    return result;
  };

  /**
   * Duplicates a Vector4 instance.
   *
   * @param {Vector4} cartesian The Cartesian to duplicate.
   * @param {Vector4} [result] The object onto which to store the result.
   * @returns {Vector4} The modified result parameter or a new Vector4 instance if one was not provided. (Returns undefined if cartesian is undefined)
   */
  static clone(cartesian, result) {
    if (!defined(cartesian)) {
      return undefined;
    }

    if (!defined(result)) {
      return new Vector4(cartesian.x, cartesian.y, cartesian.z, cartesian.w);
    }

    result.x = cartesian.x;
    result.y = cartesian.y;
    result.z = cartesian.z;
    result.w = cartesian.w;
    return result;
  };

  /**
   * Stores the provided instance into the provided array.
   *
   * @param {Vector4} value The value to pack.
   * @param {Number[]} array The array to pack into.
   * @param {Number} [startingIndex=0] The index into the array at which to start packing the elements.
   *
   * @returns {Number[]} The array that was packed into
   */
  static pack(value, array, startingIndex) {

    startingIndex = defaultValue(startingIndex, 0);

    array[startingIndex++] = value.x;
    array[startingIndex++] = value.y;
    array[startingIndex++] = value.z;
    array[startingIndex] = value.w;

    return array;
  };

  /**
   * Retrieves an instance from a packed array.
   *
   * @param {Number[]} array The packed array.
   * @param {Number} [startingIndex=0] The starting index of the element to be unpacked.
   * @param {Vector4} [result] The object into which to store the result.
   * @returns {Vector4}  The modified result parameter or a new Vector4 instance if one was not provided.
   */
  static unpack(array, startingIndex, result) {

    startingIndex = defaultValue(startingIndex, 0);

    if (!defined(result)) {
      result = new Vector4();
    }
    result.x = array[startingIndex++];
    result.y = array[startingIndex++];
    result.z = array[startingIndex++];
    result.w = array[startingIndex];
    return result;
  };

  /**
   * Flattens an array of Cartesian4s into an array of components.
   *
   * @param {Vector4[]} array The array of cartesians to pack.
   * @param {Number[]} [result] The array onto which to store the result. If this is a typed array, it must have array.length * 4 components, else a {@link DeveloperError} will be thrown. If it is a regular array, it will be resized to have (array.length * 4) elements.
   * @returns {Number[]} The packed array.
   */
  static packArray(array, result) {

    const length = array.length;
    const resultLength = length * 4;
    if (!defined(result)) {
      result = new Array(resultLength);
    } else if (!Array.isArray(result) && result.length !== resultLength) {
      //>>includeStart('debug', pragmas.debug);
      throw new Error(
        "If result is a typed array, it must have exactly array.length * 4 elements"
      );
      //>>includeEnd('debug');
    } else if (result.length !== resultLength) {
      result.length = resultLength;
    }

    for (let i = 0; i < length; ++i) {
      Vector4.pack(array[i], result, i * 4);
    }
    return result;
  };

  /**
   * Unpacks an array of cartesian components into an array of Cartesian4s.
   *
   * @param {Number[]} array The array of components to unpack.
   * @param {Vector4[]} [result] The array onto which to store the result.
   * @returns {Vector4[]} The unpacked array.
   */
  static unpackArray(array, result) {
    if (array.length % 4 !== 0) {
      throw new Error("array length must be a multiple of 4.");
    }

    const length = array.length;
    if (!defined(result)) {
      result = new Array(length / 4);
    } else {
      result.length = length / 4;
    }

    for (let i = 0; i < length; i += 4) {
      const index = i / 4;
      result[index] = Vector4.unpack(array, i, result[index]);
    }
    return result;
  };


  /**
   * Computes the value of the maximum component for the supplied Cartesian.
   *
   * @param {Vector4} cartesian The cartesian to use.
   * @returns {Number} The value of the maximum component.
   */
  static maximumComponent(cartesian) {

    return Math.max(cartesian.x, cartesian.y, cartesian.z, cartesian.w);
  };

  /**
   * Computes the value of the minimum component for the supplied Cartesian.
   *
   * @param {Vector4} cartesian The cartesian to use.
   * @returns {Number} The value of the minimum component.
   */
  static minimumComponent(cartesian) {

    return Math.min(cartesian.x, cartesian.y, cartesian.z, cartesian.w);
  };

  /**
   * Compares two Cartesians and computes a Cartesian which contains the minimum components of the supplied Cartesians.
   *
   * @param {Vector4} first A cartesian to compare.
   * @param {Vector4} second A cartesian to compare.
   * @param {Vector4} result The object into which to store the result.
   * @returns {Vector4} A cartesian with the minimum components.
   */
  static minimumByComponent(first, second, result) {

    result.x = Math.min(first.x, second.x);
    result.y = Math.min(first.y, second.y);
    result.z = Math.min(first.z, second.z);
    result.w = Math.min(first.w, second.w);

    return result;
  };

  /**
   * Compares two Cartesians and computes a Cartesian which contains the maximum components of the supplied Cartesians.
   *
   * @param {Vector4} first A cartesian to compare.
   * @param {Vector4} second A cartesian to compare.
   * @param {Vector4} result The object into which to store the result.
   * @returns {Vector4} A cartesian with the maximum components.
   */
  static maximumByComponent(first, second, result) {

    result.x = Math.max(first.x, second.x);
    result.y = Math.max(first.y, second.y);
    result.z = Math.max(first.z, second.z);
    result.w = Math.max(first.w, second.w);

    return result;
  };

  /**
   * Constrain a value to lie between two values.
   *
   * @param {Vector4} value The value to clamp.
   * @param {Vector4} min The minimum bound.
   * @param {Vector4} max The maximum bound.
   * @param {Vector4} result The object into which to store the result.
   * @returns {Vector4} The clamped value such that min <= result <= max.
   */
  static clamp(value, min, max, result) {

    const x = CesiumMath.clamp(value.x, min.x, max.x);
    const y = CesiumMath.clamp(value.y, min.y, max.y);
    const z = CesiumMath.clamp(value.z, min.z, max.z);
    const w = CesiumMath.clamp(value.w, min.w, max.w);

    result.x = x;
    result.y = y;
    result.z = z;
    result.w = w;

    return result;
  };

  /**
   * Computes the provided Cartesian's squared magnitude.
   *
   * @param {Vector4} cartesian The Cartesian instance whose squared magnitude is to be computed.
   * @returns {Number} The squared magnitude.
   */
  static magnitudeSquared(cartesian) {

    return (
      cartesian.x * cartesian.x +
      cartesian.y * cartesian.y +
      cartesian.z * cartesian.z +
      cartesian.w * cartesian.w
    );
  };

  /**
   * Computes the Cartesian's magnitude (length).
   *
   * @param {Vector4} cartesian The Cartesian instance whose magnitude is to be computed.
   * @returns {Number} The magnitude.
   */
  static magnitude(cartesian) {
    return Math.sqrt(Vector4.magnitudeSquared(cartesian));
  };



  /**
   * Computes the 4-space distance between two points.
   *
   * @param {Vector4} left The first point to compute the distance from.
   * @param {Vector4} right The second point to compute the distance to.
   * @returns {Number} The distance between two points.
   *
   * @example
   * // Returns 1.0
   * const d = Cesium.Vector4.distance(
   *   new Cesium.Vector4(1.0, 0.0, 0.0, 0.0),
   *   new Cesium.Vector4(2.0, 0.0, 0.0, 0.0));
   */
  static distance(left, right) {

    Vector4.subtract(left, right, distanceScratch);
    return Vector4.magnitude(distanceScratch);
  };

  /**
   * Computes the squared distance between two points.  Comparing squared distances
   * using this function is more efficient than comparing distances using {@link Vector4#distance}.
   *
   * @param {Vector4} left The first point to compute the distance from.
   * @param {Vector4} right The second point to compute the distance to.
   * @returns {Number} The distance between two points.
   *
   * @example
   * // Returns 4.0, not 2.0
   * const d = Cesium.Vector4.distance(
   *   new Cesium.Vector4(1.0, 0.0, 0.0, 0.0),
   *   new Cesium.Vector4(3.0, 0.0, 0.0, 0.0));
   */
  static distanceSquared(left, right) {

    Vector4.subtract(left, right, distanceScratch);
    return Vector4.magnitudeSquared(distanceScratch);
  };

  /**
   * Computes the normalized form of the supplied Cartesian.
   *
   * @param {Vector4} cartesian The Cartesian to be normalized.
   * @param {Vector4} result The object onto which to store the result.
   * @returns {Vector4} The modified result parameter.
   */
  static normalize(cartesian, result) {

    const magnitude = Vector4.magnitude(cartesian);

    result.x = cartesian.x / magnitude;
    result.y = cartesian.y / magnitude;
    result.z = cartesian.z / magnitude;
    result.w = cartesian.w / magnitude;

    //>>includeStart('debug', pragmas.debug);
    if (
      isNaN(result.x) ||
      isNaN(result.y) ||
      isNaN(result.z) ||
      isNaN(result.w)
    ) {
      throw new Error("normalized result is not a number");
    }
    //>>includeEnd('debug');

    return result;
  };

  /**
   * Computes the dot (scalar) product of two Cartesians.
   *
   * @param {Vector4} left The first Cartesian.
   * @param {Vector4} right The second Cartesian.
   * @returns {Number} The dot product.
   */
  static dot(left, right) {

    return (
      left.x * right.x + left.y * right.y + left.z * right.z + left.w * right.w
    );
  };

  /**
   * Computes the componentwise product of two Cartesians.
   *
   * @param {Vector4} left The first Cartesian.
   * @param {Vector4} right The second Cartesian.
   * @param {Vector4} result The object onto which to store the result.
   * @returns {Vector4} The modified result parameter.
   */
  static multiplyComponents(left, right, result) {

    result.x = left.x * right.x;
    result.y = left.y * right.y;
    result.z = left.z * right.z;
    result.w = left.w * right.w;
    return result;
  };

  /**
   * Computes the componentwise quotient of two Cartesians.
   *
   * @param {Vector4} left The first Cartesian.
   * @param {Vector4} right The second Cartesian.
   * @param {Vector4} result The object onto which to store the result.
   * @returns {Vector4} The modified result parameter.
   */
  static divideComponents(left, right, result) {

    result.x = left.x / right.x;
    result.y = left.y / right.y;
    result.z = left.z / right.z;
    result.w = left.w / right.w;
    return result;
  };

  /**
   * Computes the componentwise sum of two Cartesians.
   *
   * @param {Vector4} left The first Cartesian.
   * @param {Vector4} right The second Cartesian.
   * @param {Vector4} result The object onto which to store the result.
   * @returns {Vector4} The modified result parameter.
   */
  static add(left, right, result) {

    result.x = left.x + right.x;
    result.y = left.y + right.y;
    result.z = left.z + right.z;
    result.w = left.w + right.w;
    return result;
  };

  /**
   * Computes the componentwise difference of two Cartesians.
   *
   * @param {Vector4} left The first Cartesian.
   * @param {Vector4} right The second Cartesian.
   * @param {Vector4} result The object onto which to store the result.
   * @returns {Vector4} The modified result parameter.
   */
  static subtract(left, right, result) {

    result.x = left.x - right.x;
    result.y = left.y - right.y;
    result.z = left.z - right.z;
    result.w = left.w - right.w;
    return result;
  };

  /**
   * Multiplies the provided Cartesian componentwise by the provided scalar.
   *
   * @param {Vector4} cartesian The Cartesian to be scaled.
   * @param {Number} scalar The scalar to multiply with.
   * @param {Vector4} result The object onto which to store the result.
   * @returns {Vector4} The modified result parameter.
   */
  static multiplyByScalar(cartesian, scalar, result) {

    result.x = cartesian.x * scalar;
    result.y = cartesian.y * scalar;
    result.z = cartesian.z * scalar;
    result.w = cartesian.w * scalar;
    return result;
  };

  /**
   * Divides the provided Cartesian componentwise by the provided scalar.
   *
   * @param {Vector4} cartesian The Cartesian to be divided.
   * @param {Number} scalar The scalar to divide by.
   * @param {Vector4} result The object onto which to store the result.
   * @returns {Vector4} The modified result parameter.
   */
  static divideByScalar(cartesian, scalar, result) {

    result.x = cartesian.x / scalar;
    result.y = cartesian.y / scalar;
    result.z = cartesian.z / scalar;
    result.w = cartesian.w / scalar;
    return result;
  };

  /**
   * Negates the provided Cartesian.
   *
   * @param {Vector4} cartesian The Cartesian to be negated.
   * @param {Vector4} result The object onto which to store the result.
   * @returns {Vector4} The modified result parameter.
   */
  static negate(cartesian, result) {

    result.x = -cartesian.x;
    result.y = -cartesian.y;
    result.z = -cartesian.z;
    result.w = -cartesian.w;
    return result;
  };

  /**
   * Computes the absolute value of the provided Cartesian.
   *
   * @param {Vector4} cartesian The Cartesian whose absolute value is to be computed.
   * @param {Vector4} result The object onto which to store the result.
   * @returns {Vector4} The modified result parameter.
   */
  static abs(cartesian, result) {

    result.x = Math.abs(cartesian.x);
    result.y = Math.abs(cartesian.y);
    result.z = Math.abs(cartesian.z);
    result.w = Math.abs(cartesian.w);
    return result;
  };

  /**
   * Computes the linear interpolation or extrapolation at t using the provided cartesians.
   *
   * @param {Vector4} start The value corresponding to t at 0.0.
   * @param {Vector4}end The value corresponding to t at 1.0.
   * @param {Number} t The point along t at which to interpolate.
   * @param {Vector4} result The object onto which to store the result.
   * @returns {Vector4} The modified result parameter.
   */
  static lerp(start, end, t, result) {

    Vector4.multiplyByScalar(end, t, lerpScratch);
    result = Vector4.multiplyByScalar(start, 1.0 - t, result);
    return Vector4.add(lerpScratch, result, result);
  };

  /**
   * Returns the axis that is most orthogonal to the provided Cartesian.
   *
   * @param {Vector4} cartesian The Cartesian on which to find the most orthogonal axis.
   * @param {Vector4} result The object onto which to store the result.
   * @returns {Vector4} The most orthogonal axis.
   */
  static mostOrthogonalAxis(cartesian, result) {

    const f = Vector4.normalize(cartesian, mostOrthogonalAxisScratch);
    Vector4.abs(f, f);

    if (f.x <= f.y) {
      if (f.x <= f.z) {
        if (f.x <= f.w) {
          result = Vector4.clone(Vector4.UNIT_X, result);
        } else {
          result = Vector4.clone(Vector4.UNIT_W, result);
        }
      } else if (f.z <= f.w) {
        result = Vector4.clone(Vector4.UNIT_Z, result);
      } else {
        result = Vector4.clone(Vector4.UNIT_W, result);
      }
    } else if (f.y <= f.z) {
      if (f.y <= f.w) {
        result = Vector4.clone(Vector4.UNIT_Y, result);
      } else {
        result = Vector4.clone(Vector4.UNIT_W, result);
      }
    } else if (f.z <= f.w) {
      result = Vector4.clone(Vector4.UNIT_Z, result);
    } else {
      result = Vector4.clone(Vector4.UNIT_W, result);
    }

    return result;
  };

  /**
   * Compares the provided Cartesians componentwise and returns
   * <code>true</code> if they are equal, <code>false</code> otherwise.
   *
   * @param {Vector4} [left] The first Cartesian.
   * @param {Vector4} [right] The second Cartesian.
   * @returns {Boolean} <code>true</code> if left and right are equal, <code>false</code> otherwise.
   */
  static equals(left, right) {
    return (
      left === right ||
      (defined(left) &&
        defined(right) &&
        left.x === right.x &&
        left.y === right.y &&
        left.z === right.z &&
        left.w === right.w)
    );
  };

  /**
   * @private
   */
  static equalsArray(cartesian, array, offset) {
    return (
      cartesian.x === array[offset] &&
      cartesian.y === array[offset + 1] &&
      cartesian.z === array[offset + 2] &&
      cartesian.w === array[offset + 3]
    );
  };

  /**
   * Compares the provided Cartesians componentwise and returns
   * <code>true</code> if they pass an absolute or relative tolerance test,
   * <code>false</code> otherwise.
   *
   * @param {Vector4} [left] The first Cartesian.
   * @param {Vector4} [right] The second Cartesian.
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
        CesiumMath.equalsEpsilon(
          left.x,
          right.x,
          relativeEpsilon,
          absoluteEpsilon
        ) &&
        CesiumMath.equalsEpsilon(
          left.y,
          right.y,
          relativeEpsilon,
          absoluteEpsilon
        ) &&
        CesiumMath.equalsEpsilon(
          left.z,
          right.z,
          relativeEpsilon,
          absoluteEpsilon
        ) &&
        CesiumMath.equalsEpsilon(
          left.w,
          right.w,
          relativeEpsilon,
          absoluteEpsilon
        ))
    );
  };
  /**
   * Packs an arbitrary floating point value to 4 values representable using uint8.
   *
   * @param {Number} value A floating point number.
   * @param {Vector4} [result] The Vector4 that will contain the packed float.
   * @returns {Vector4} A Vector4 representing the float packed to values in x, y, z, and w.
   */
  static packFloat(value, result) {

    if (!defined(result)) {
      result = new Vector4();
    }

    // scratchU8Array and scratchF32Array are views into the same buffer
    scratchF32Array[0] = value;

    if (littleEndian) {
      result.x = scratchU8Array[0];
      result.y = scratchU8Array[1];
      result.z = scratchU8Array[2];
      result.w = scratchU8Array[3];
    } else {
      // convert from big-endian to little-endian
      result.x = scratchU8Array[3];
      result.y = scratchU8Array[2];
      result.z = scratchU8Array[1];
      result.w = scratchU8Array[0];
    }
    return result;
  };

  /**
   * Unpacks a float packed using Vector4.packFloat.
   *
   * @param {Vector4} packedFloat A Vector4 containing a float packed to 4 values representable using uint8.
   * @returns {Number} The unpacked float.
   * @private
   */
  static unpackFloat(packedFloat) {

    // scratchU8Array and scratchF32Array are views into the same buffer
    if (littleEndian) {
      scratchU8Array[0] = packedFloat.x;
      scratchU8Array[1] = packedFloat.y;
      scratchU8Array[2] = packedFloat.z;
      scratchU8Array[3] = packedFloat.w;
    } else {
      // convert from little-endian to big-endian
      scratchU8Array[0] = packedFloat.w;
      scratchU8Array[1] = packedFloat.z;
      scratchU8Array[2] = packedFloat.y;
      scratchU8Array[3] = packedFloat.x;
    }
    return scratchF32Array[0];
  };


}


// scratchU8Array and scratchF32Array are views into the same buffer
const scratchF32Array = new Float32Array(1);
const scratchU8Array = new Uint8Array(scratchF32Array.buffer);

const testU32 = new Uint32Array([0x11223344]);
const testU8 = new Uint8Array(testU32.buffer);
const littleEndian = testU8[0] === 0x44;
const distanceScratch = new Vector4();
const lerpScratch = new Vector4();
const mostOrthogonalAxisScratch = new Vector4();

export default Vector4;

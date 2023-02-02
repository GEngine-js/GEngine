import { Attribute } from "../render/Attribute";
import defaultValue from "../utils/defaultValue";
import defined from "../utils/defined";
import Color from "./Color";
import GMath from "./Math";

class Vector4 {
  public static ZERO = Object.freeze(new Vector4(0.0, 0.0, 0.0, 0.0));

  public static ONE = Object.freeze(new Vector4(1.0, 1.0, 1.0, 1.0));

  public static UNIT_X = Object.freeze(new Vector4(1.0, 0.0, 0.0, 0.0));

  public static UNIT_Y = Object.freeze(new Vector4(0.0, 1.0, 0.0, 0.0));

  public static UNIT_Z = Object.freeze(new Vector4(0.0, 0.0, 1.0, 0.0));

  public static UNIT_W = Object.freeze(new Vector4(0.0, 0.0, 0.0, 1.0));
  x: number;
  y: number;
  z: number;
  w: number;
  constructor(x: number = 0, y: number = 0, z: number = 0, w: number = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }
  set(x: number, y: number, z: number, w: number): void {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }
  toArray(): number[] {
    return [this.x, this.y, this.z, this.w];
  }

  clone(result: Vector4): Vector4 {
    return Vector4.clone(this, result);
  }

  equals(right: Vector4): boolean {
    return Vector4.equals(this, right);
  }

  equalsEpsilon(
    right: Vector4,
    relativeEpsilon: number = 0,
    absoluteEpsilon: number = 0
  ): boolean {
    return Vector4.equalsEpsilon(this, right, relativeEpsilon, absoluteEpsilon);
  }

  toString(): string {
    return `(${this.x}, ${this.y}, ${this.z}, ${this.w})`;
  }
  fromBufferAttribute(attribute: Attribute, index: number): Vector4 {
    this.x = attribute.getX(index);
    this.y = attribute.getY(index);
    this.z = attribute.getZ(index);
    this.w = attribute.getW(index);

    return this;
  }

  static fromElements(
    x: number,
    y: number,
    z: number,
    w: number,
    result: Vector4
  ): Vector4 {
    if (!defined(result)) {
      return new Vector4(x, y, z, w);
    }

    result.x = x;
    result.y = y;
    result.z = z;
    result.w = w;
    return result;
  }

  static clone(cartesian: Vector4, result: Vector4): Vector4 {
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
  }

  static maximumComponent(cartesian: Vector4): number {
    return Math.max(cartesian.x, cartesian.y, cartesian.z, cartesian.w);
  }

  static minimumComponent(cartesian: Vector4): number {
    return Math.min(cartesian.x, cartesian.y, cartesian.z, cartesian.w);
  }

  static minimumByComponent(
    first: Vector4,
    second: Vector4,
    result: Vector4
  ): Vector4 {
    result.x = Math.min(first.x, second.x);
    result.y = Math.min(first.y, second.y);
    result.z = Math.min(first.z, second.z);
    result.w = Math.min(first.w, second.w);

    return result;
  }

  static maximumByComponent(
    first: Vector4,
    second: Vector4,
    result: Vector4
  ): Vector4 {
    result.x = Math.max(first.x, second.x);
    result.y = Math.max(first.y, second.y);
    result.z = Math.max(first.z, second.z);
    result.w = Math.max(first.w, second.w);

    return result;
  }

  static clamp(
    value: Vector4,
    min: Vector4,
    max: Vector4,
    result: Vector4
  ): Vector4 {
    const x = GMath.clamp(value.x, min.x, max.x);
    const y = GMath.clamp(value.y, min.y, max.y);
    const z = GMath.clamp(value.z, min.z, max.z);
    const w = GMath.clamp(value.w, min.w, max.w);

    result.x = x;
    result.y = y;
    result.z = z;
    result.w = w;

    return result;
  }

  static magnitudeSquared(cartesian: Vector4): number {
    return (
      cartesian.x * cartesian.x +
      cartesian.y * cartesian.y +
      cartesian.z * cartesian.z +
      cartesian.w * cartesian.w
    );
  }

  static magnitude(cartesian: Vector4): number {
    return Math.sqrt(Vector4.magnitudeSquared(cartesian));
  }

  static distance(left: Vector4, right: Vector4): number {
    Vector4.subtract(left, right, distanceScratch);
    return Vector4.magnitude(distanceScratch);
  }

  static distanceSquared(left: Vector4, right: Vector4): number {
    Vector4.subtract(left, right, distanceScratch);
    return Vector4.magnitudeSquared(distanceScratch);
  }

  static normalize(cartesian: Vector4, result: Vector4): Vector4 {
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
  }

  static dot(left: Vector4, right: Vector4): number {
    return (
      left.x * right.x + left.y * right.y + left.z * right.z + left.w * right.w
    );
  }

  static multiplyComponents(
    left: Vector4,
    right: Vector4,
    result: Vector4
  ): Vector4 {
    result.x = left.x * right.x;
    result.y = left.y * right.y;
    result.z = left.z * right.z;
    result.w = left.w * right.w;
    return result;
  }

  static divideComponents(
    left: Vector4,
    right: Vector4,
    result: Vector4
  ): Vector4 {
    result.x = left.x / right.x;
    result.y = left.y / right.y;
    result.z = left.z / right.z;
    result.w = left.w / right.w;
    return result;
  }

  static add(left: Vector4, right: Vector4, result: Vector4): Vector4 {
    result.x = left.x + right.x;
    result.y = left.y + right.y;
    result.z = left.z + right.z;
    result.w = left.w + right.w;
    return result;
  }

  static subtract(left: Vector4, right: Vector4, result: Vector4): Vector4 {
    result.x = left.x - right.x;
    result.y = left.y - right.y;
    result.z = left.z - right.z;
    result.w = left.w - right.w;
    return result;
  }

  static multiplyByScalar(
    cartesian: Vector4,
    scalar: number,
    result: Vector4
  ): Vector4 {
    result.x = cartesian.x * scalar;
    result.y = cartesian.y * scalar;
    result.z = cartesian.z * scalar;
    result.w = cartesian.w * scalar;
    return result;
  }

  static divideByScalar(
    cartesian: Vector4,
    scalar: number,
    result: Vector4
  ): Vector4 {
    result.x = cartesian.x / scalar;
    result.y = cartesian.y / scalar;
    result.z = cartesian.z / scalar;
    result.w = cartesian.w / scalar;
    return result;
  }

  static negate(cartesian: Vector4, result: Vector4): Vector4 {
    result.x = -cartesian.x;
    result.y = -cartesian.y;
    result.z = -cartesian.z;
    result.w = -cartesian.w;
    return result;
  }

  static abs(cartesian: Vector4, result: Vector4): Vector4 {
    result.x = Math.abs(cartesian.x);
    result.y = Math.abs(cartesian.y);
    result.z = Math.abs(cartesian.z);
    result.w = Math.abs(cartesian.w);
    return result;
  }

  static lerp(
    start: Vector4,
    end: Vector4,
    t: number,
    result: Vector4
  ): Vector4 {
    Vector4.multiplyByScalar(end, t, lerpScratch);
    result = Vector4.multiplyByScalar(start, 1.0 - t, result);
    return Vector4.add(lerpScratch, result, result);
  }

  static equals(left: Vector4, right: Vector4): boolean {
    return (
      left === right ||
      (defined(left) &&
        defined(right) &&
        left.x === right.x &&
        left.y === right.y &&
        left.z === right.z &&
        left.w === right.w)
    );
  }

  static equalsArray(
    cartesian: Vector4,
    array: number[],
    offset: number
  ): boolean {
    return (
      cartesian.x === array[offset] &&
      cartesian.y === array[offset + 1] &&
      cartesian.z === array[offset + 2] &&
      cartesian.w === array[offset + 3]
    );
  }

  static equalsEpsilon(
    left: Vector4,
    right: Vector4,
    relativeEpsilon: number = 0,
    absoluteEpsilon: number = 0
  ): boolean {
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
        ) &&
        GMath.equalsEpsilon(left.w, right.w, relativeEpsilon, absoluteEpsilon))
    );
  }
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

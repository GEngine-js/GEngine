import { Attribute } from "../render/Attribute";
import defined from "../utils/defined";
import GMath from "./Math";
import Matrix3 from "./Matrix3";
import Matrix4 from "./Matrix4";
import { Quaternion } from "./Quaternion";
import { Spherical } from "./Spherical";
import Vector4 from "./Vector4";
class Vector3 {
  public static ZERO = Object.freeze(new Vector3(0.0, 0.0, 0.0));

  public static ONE = Object.freeze(new Vector3(1.0, 1.0, 1.0));

  public static UNIT_X = Object.freeze(new Vector3(1.0, 0.0, 0.0));

  public static UNIT_Y = Object.freeze(new Vector3(0.0, 1.0, 0.0));

  public static UNIT_Z = Object.freeze(new Vector3(0.0, 0.0, 1.0));
  x: number;
  y: number;
  z: number;

  constructor(x: number = 0, y: number = 0, z: number = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  set(x: number, y: number, z: number): void {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  toArray(): number[] {
    return [this.x, this.y, this.z];
  }

  copy(v: Vector3): Vector3 {
    this.x = v.x;
    this.y = v.y;
    this.z = v.z;
    return this;
  }
  lerp(end: Vector3, t: number): Vector3 {
    Vector3.lerp(this, end, t, this);
    return this;
  }
  add(v: Vector3): Vector3 {
    Vector3.add(this, v, this);
    return this;
  }
  addScaledVector(v: Vector3, s: number): Vector3 {
    this.x += v.x * s;
    this.y += v.y * s;
    this.z += v.z * s;
    return this;
  }
  subtract(v: Vector3): Vector3 {
    Vector3.subtract(this, v, this);
    return this;
  }
  applyQuaternion(q: Quaternion): Vector3 {
    const x = this.x,
      y = this.y,
      z = this.z;
    const qx = q.x,
      qy = q.y,
      qz = q.z,
      qw = q.w;

    // calculate quat * vector

    const ix = qw * x + qy * z - qz * y;
    const iy = qw * y + qz * x - qx * z;
    const iz = qw * z + qx * y - qy * x;
    const iw = -qx * x - qy * y - qz * z;

    // calculate result * inverse quat

    this.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    this.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    this.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;

    return this;
  }
  setFromMatrixColumn(m: Matrix3 | Matrix4, index: number): Vector3 {
    return this.fromArray(m, index * 4);
  }
  fromArray(array: Matrix3 | Matrix4, offset: number = 0): Vector3 {
    this.x = array[offset];
    this.y = array[offset + 1];
    this.z = array[offset + 2];

    return this;
  }

  multiplyByScalar(scale: number): Vector3 {
    Vector3.multiplyByScalar(this, scale, this);
    return this;
  }

  clone(): Vector3 {
    return Vector3.clone(this, new Vector3());
  }
  length(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  applyMatrix4(matrix: Matrix4): Vector3 {
    const x = this.x,
      y = this.y,
      z = this.z;
    const e = matrix;
    const w = 1 / (e[3] * x + e[7] * y + e[11] * z + e[15]);
    this.x = (e[0] * x + e[4] * y + e[8] * z + e[12]) * w;
    this.y = (e[1] * x + e[5] * y + e[9] * z + e[13]) * w;
    this.z = (e[2] * x + e[6] * y + e[10] * z + e[14]) * w;
    return this;
  }
  applyMatrix3(matrix: Matrix3): Vector3 {
    let x = this.x,
      y = this.y,
      z = this.z;
    this.x = x * matrix[0] + y * matrix[3] + z * matrix[6];
    this.y = x * matrix[1] + y * matrix[4] + z * matrix[7];
    this.z = x * matrix[2] + y * matrix[5] + z * matrix[8];
    return this;
  }
  transformDirection(matrix: Matrix3 | Matrix4): Vector3 {
    const x = this.x,
      y = this.y,
      z = this.z;
    const e = matrix;
    this.x = e[0] * x + e[4] * y + e[8] * z;
    this.y = e[1] * x + e[5] * y + e[9] * z;
    this.z = e[2] * x + e[6] * y + e[10] * z;
    return this.normalize();
  }
  normalize(): Vector3 {
    Vector3.normalize(this, this);
    return this;
  }

  equals(right: Vector3): boolean {
    return Vector3.equals(this, right);
  }

  equalsEpsilon(
    right: Vector3,
    relativeEpsilon: number = 0,
    absoluteEpsilon: number = 0
  ): boolean {
    return Vector3.equalsEpsilon(this, right, relativeEpsilon, absoluteEpsilon);
  }

  toString() {
    return `(${this.x}, ${this.y}, ${this.z})`;
  }
  fromBufferAttribute(attribute: Attribute, index: number): Vector3 {
    this.x = attribute.getX(index);
    this.y = attribute.getY(index);
    this.z = attribute.getZ(index);
    return this;
  }
  static fromVector4(vec4: Vector4, result: Vector3): Vector3 {
    result.x = vec4.x;
    result.y = vec4.y;
    result.z = vec4.z;
    return result;
  }

  static fromSpherical(spherical: Spherical, result: Vector3): Vector3 {
    if (!defined(result)) {
      result = new Vector3();
    }
    const { phi, radius, theta } = spherical;
    const sinPhiRadius = Math.sin(phi) * radius;
    result.x = sinPhiRadius * Math.sin(theta);
    result.y = Math.cos(phi) * radius;
    result.z = sinPhiRadius * Math.cos(theta);
    return result;
  }

  static fromElements(
    x: number,
    y: number,
    z: number,
    result: Vector3
  ): Vector3 {
    if (!defined(result)) {
      return new Vector3(x, y, z);
    }

    result.x = x;
    result.y = y;
    result.z = z;
    return result;
  }

  static clone(cartesian: Vector3, result: Vector3 = new Vector3()): Vector3 {
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
  }

  static maximumComponent(cartesian: Vector3): number {
    return Math.max(cartesian.x, cartesian.y, cartesian.z);
  }

  static minimumComponent(cartesian: Vector3): number {
    return Math.min(cartesian.x, cartesian.y, cartesian.z);
  }

  static minimumByComponent(
    first: Vector3,
    second: Vector3,
    result: Vector3
  ): Vector3 {
    result.x = Math.min(first.x, second.x);
    result.y = Math.min(first.y, second.y);
    result.z = Math.min(first.z, second.z);

    return result;
  }

  static maximumByComponent(
    first: Vector3,
    second: Vector3,
    result: Vector3
  ): Vector3 {
    result.x = Math.max(first.x, second.x);
    result.y = Math.max(first.y, second.y);
    result.z = Math.max(first.z, second.z);
    return result;
  }

  static clamp(
    value: Vector3,
    min: Vector3,
    max: Vector3,
    result: Vector3
  ): Vector3 {
    const x = GMath.clamp(value.x, min.x, max.x);
    const y = GMath.clamp(value.y, min.y, max.y);
    const z = GMath.clamp(value.z, min.z, max.z);

    result.x = x;
    result.y = y;
    result.z = z;

    return result;
  }

  static magnitudeSquared(cartesian: Vector3): number {
    return (
      cartesian.x * cartesian.x +
      cartesian.y * cartesian.y +
      cartesian.z * cartesian.z
    );
  }

  static magnitude(cartesian: Vector3): number {
    return Math.sqrt(Vector3.magnitudeSquared(cartesian));
  }

  static distance(left: Vector3, right: Vector3): number {
    Vector3.subtract(left, right, distanceScratch);
    return Vector3.magnitude(distanceScratch);
  }

  static distanceSquared(left: Vector3, right: Vector3): number {
    Vector3.subtract(left, right, distanceScratch);
    return Vector3.magnitudeSquared(distanceScratch);
  }

  static normalize(cartesian: Vector3, result: Vector3): Vector3 {
    const magnitude = Vector3.magnitude(cartesian);

    result.x = cartesian.x / magnitude;
    result.y = cartesian.y / magnitude;
    result.z = cartesian.z / magnitude;

    if (isNaN(result.x) || isNaN(result.y) || isNaN(result.z)) {
      throw new Error("normalized result is not a number");
    }

    return result;
  }

  static dot(left: Vector3, right: Vector3): number {
    return left.x * right.x + left.y * right.y + left.z * right.z;
  }

  static multiplyComponents(
    left: Vector3,
    right: Vector3,
    result: Vector3
  ): Vector3 {
    result.x = left.x * right.x;
    result.y = left.y * right.y;
    result.z = left.z * right.z;
    return result;
  }

  static divideComponents(left: Vector3, right: Vector3, result: Vector3) {
    result.x = left.x / right.x;
    result.y = left.y / right.y;
    result.z = left.z / right.z;
    return result;
  }

  static add(left: Vector3, right: Vector3, result: Vector3): Vector3 {
    result.x = left.x + right.x;
    result.y = left.y + right.y;
    result.z = left.z + right.z;
    return result;
  }

  static subtract(left: Vector3, right: Vector3, result: Vector3): Vector3 {
    result.x = left.x - right.x;
    result.y = left.y - right.y;
    result.z = left.z - right.z;
    return result;
  }

  static multiplyByScalar(
    cartesian: Vector3,
    scalar: number,
    result: Vector3
  ): Vector3 {
    result.x = cartesian.x * scalar;
    result.y = cartesian.y * scalar;
    result.z = cartesian.z * scalar;
    return result;
  }

  static divideByScalar(
    cartesian: Vector3,
    scalar: number,
    result: Vector3
  ): Vector3 {
    result.x = cartesian.x / scalar;
    result.y = cartesian.y / scalar;
    result.z = cartesian.z / scalar;
    return result;
  }

  static negate(cartesian: Vector3, result: Vector3): Vector3 {
    result.x = -cartesian.x;
    result.y = -cartesian.y;
    result.z = -cartesian.z;
    return result;
  }

  static abs(cartesian: Vector3, result: Vector3): Vector3 {
    result.x = Math.abs(cartesian.x);
    result.y = Math.abs(cartesian.y);
    result.z = Math.abs(cartesian.z);
    return result;
  }

  static lerp(
    start: Vector3,
    end: Vector3,
    t: number,
    result: Vector3
  ): Vector3 {
    Vector3.multiplyByScalar(end, t, lerpScratch);
    result = Vector3.multiplyByScalar(start, 1.0 - t, result);
    return Vector3.add(lerpScratch, result, result);
  }

  static angleBetween(left: Vector3, right: Vector3): number {
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
  }

  static mostOrthogonalAxis(cartesian: Vector3, result: Vector3): Vector3 {
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
  }

  static projectVector(a: Vector3, b: Vector3, result: Vector3): Vector3 {
    const scalar = Vector3.dot(a, b) / Vector3.dot(b, b);
    return Vector3.multiplyByScalar(b, scalar, result);
  }

  static equals(left: Vector3, right: Vector3): boolean {
    return (
      left === right ||
      (defined(left) &&
        defined(right) &&
        left.x === right.x &&
        left.y === right.y &&
        left.z === right.z)
    );
  }

  /**
   * @private
   */
  static equalsArray(
    cartesian: Vector3,
    array: number[],
    offset: number
  ): boolean {
    return (
      cartesian.x === array[offset] &&
      cartesian.y === array[offset + 1] &&
      cartesian.z === array[offset + 2]
    );
  }

  static equalsEpsilon(
    left: Vector3,
    right: Vector3,
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
        GMath.equalsEpsilon(left.z, right.z, relativeEpsilon, absoluteEpsilon))
    );
  }

  static cross(left: Vector3, right: Vector3, result: Vector3): Vector3 {
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
  }

  static midpoint = function (
    left: Vector3,
    right: Vector3,
    result: Vector3
  ): Vector3 {
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
export default Vector3;

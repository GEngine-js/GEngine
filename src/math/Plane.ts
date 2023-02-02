import Vector3 from "./Vector3";
import Vector4 from "./Vector4";
import defined from "../utils/defined";
import GMath from "./Math";
import Matrix4 from "./Matrix4";

/**
 * A plane in Hessian Normal Form defined by
 * <pre>
 * ax + by + cz + d = 0
 * </pre>
 * where (a, b, c) is the plane's <code>normal</code>, d is the signed
 * <code>distance</code> to the plane, and (x, y, z) is any point on
 * the plane.
 *
 * @alias Plane
 * @constructor
 *
 * @param {Vector3} normal The plane's normal (normalized).
 * @param {Number} distance The shortest distance from the origin to the plane.  The sign of
 * @example
 * // The plane x=0
 * const plane = new Plane(Vector3.UNIT_X, 0.0);
 *
 * @exception {DeveloperError} Normal must be normalized
 */
class Plane {
  normal: Vector3;
  distance: number;
  public static ORIGIN_XY_PLANE = Object.freeze(new Plane(Vector3.UNIT_Z, 0.0));

  public static ORIGIN_YZ_PLANE = Object.freeze(new Plane(Vector3.UNIT_X, 0.0));

  public static ORIGIN_ZX_PLANE = Object.freeze(new Plane(Vector3.UNIT_Y, 0.0));
  constructor(normal: Vector3, distance: number) {
    this.normal = Vector3.clone(normal);

    this.distance = distance;
  }
  normalize() {
    const inverseNormalLength = 1.0 / this.normal.length();
    this.normal = Vector3.multiplyByScalar(
      this.normal,
      inverseNormalLength,
      this.normal
    );
    this.distance *= inverseNormalLength;
    return this;
  }

  static fromPointNormal(
    point: Vector3,
    normal: Vector3,
    result: Plane
  ): Plane {
    if (!GMath.equalsEpsilon(Vector3.magnitude(normal), 1.0, GMath.EPSILON6)) {
      throw new Error("normal must be normalized.");
    }
    //>>includeEnd('debug');

    const distance = -Vector3.dot(normal, point);

    if (!defined(result)) {
      return new Plane(normal, distance);
    }

    Vector3.clone(normal, result.normal);
    result.distance = distance;
    return result;
  }

  static fromVector4(coefficients: Vector4, result: Plane): Plane {
    const normal = Vector3.fromVector4(coefficients, scratchNormal);
    const distance = coefficients.w;

    //>>includeStart('debug', pragmas.debug);
    if (!GMath.equalsEpsilon(Vector3.magnitude(normal), 1.0, GMath.EPSILON6)) {
      throw new Error("normal must be normalized.");
    }
    //>>includeEnd('debug');

    if (!defined(result)) {
      return new Plane(normal, distance);
    }
    Vector3.clone(normal, result.normal);
    result.distance = distance;
    return result;
  }

  static getPointDistance(plane: Plane, point: Vector3): number {
    return Vector3.dot(plane.normal, point) + plane.distance;
  }

  static projectPointOntoPlane(
    plane: Plane,
    point: Vector3,
    result: Vector3
  ): Vector3 {
    if (!defined(result)) {
      result = new Vector3();
    }

    // projectedPoint = point - (normal.point + scale) * normal
    const pointDistance = Plane.getPointDistance(plane, point);
    const scaledNormal = Vector3.multiplyByScalar(
      plane.normal,
      pointDistance,
      scratchCartesian
    );

    return Vector3.subtract(point, scaledNormal, result);
  }

  static transform(plane: Plane, transform: Matrix4, result: Plane): Plane {
    const normal = plane.normal;
    const distance = plane.distance;
    const inverseTranspose = Matrix4.inverseTranspose(
      transform,
      scratchInverseTranspose
    );
    let planeAsCartesian4 = Vector4.fromElements(
      normal.x,
      normal.y,
      normal.z,
      distance,
      scratchPlaneCartesian4
    );
    planeAsCartesian4 = Matrix4.multiplyByVector(
      inverseTranspose,
      planeAsCartesian4,
      planeAsCartesian4
    );

    // Convert the transformed plane to Hessian Normal Form
    const transformedNormal = Vector3.fromVector4(
      planeAsCartesian4,
      scratchTransformNormal
    );

    planeAsCartesian4 = Vector4.divideByScalar(
      planeAsCartesian4,
      Vector3.magnitude(transformedNormal),
      planeAsCartesian4
    );

    return Plane.fromVector4(planeAsCartesian4, result);
  }

  static clone(plane: Plane, result: Plane): Plane {
    if (!defined(result)) {
      return new Plane(plane.normal, plane.distance);
    }

    Vector3.clone(plane.normal, result.normal);
    result.distance = plane.distance;

    return result;
  }

  static equals(left: Plane, right: Plane): boolean {
    return (
      left.distance === right.distance &&
      Vector3.equals(left.normal, right.normal)
    );
  }
}
const scratchNormal = new Vector3();
const scratchCartesian = new Vector3();
const scratchInverseTranspose = new Matrix4();
const scratchPlaneCartesian4 = new Vector4();
const scratchTransformNormal = new Vector3();

export default Plane;

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
 * <code>distance</code> determines which side of the plane the origin
 * is on.  If <code>distance</code> is positive, the origin is in the half-space
 * in the direction of the normal; if negative, the origin is in the half-space
 * opposite to the normal; if zero, the plane passes through the origin.
 *
 * @example
 * // The plane x=0
 * const plane = new Plane(Vector3.UNIT_X, 0.0);
 *
 * @exception {DeveloperError} Normal must be normalized
 */
class Plane {
    normal: any;
    distance: any;
    public static ORIGIN_XY_PLANE = Object.freeze(new Plane(Vector3.UNIT_Z, 0.0));

    public static ORIGIN_YZ_PLANE = Object.freeze(new Plane(Vector3.UNIT_X, 0.0));

    public static ORIGIN_ZX_PLANE = Object.freeze(new Plane(Vector3.UNIT_Y, 0.0));
    constructor(normal, distance) {

        /**
         * The plane's normal.
         *
         * @type {Vector3}
         */
        this.normal = Vector3.clone(normal);

        /**
         * The shortest distance from the origin to the plane.  The sign of
         * <code>distance</code> determines which side of the plane the origin
         * is on.  If <code>distance</code> is positive, the origin is in the half-space
         * in the direction of the normal; if negative, the origin is in the half-space
         * opposite to the normal; if zero, the plane passes through the origin.
         *
         * @type {Number}
         */
        this.distance = distance;
    }
    normalize(){
        const inverseNormalLength = 1.0 / this.normal.length();
        this.normal=Vector3.multiplyByScalar(this.normal,inverseNormalLength,this.normal);
		// this.normal.multiplyScalar( inverseNormalLength );
		this.distance *= inverseNormalLength;

		return this;
    }
    /**
 * Creates a plane from a normal and a point on the plane.
 *
 * @param {Vector3} point The point on the plane.
 * @param {Vector3} normal The plane's normal (normalized).
 * @param {Plane} [result] The object onto which to store the result.
 * @returns {Plane} A new plane instance or the modified result parameter.
 *
 * @example
 * const point = Vector3.fromDegrees(-72.0, 40.0);
 * const normal = ellipsoid.geodeticSurfaceNormal(point);
 * const tangentPlane = Plane.fromPointNormal(point, normal);
 *
 * @exception {Error} Normal must be normalized
 */
    static fromPointNormal(point, normal, result) {

        if (
            !GMath.equalsEpsilon(
                Vector3.magnitude(normal),
                1.0,
                GMath.EPSILON6
            )
        ) {
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
    };
    /**
     * Creates a plane from the general equation
     *
     * @param {Vector4} coefficients The plane's normal (normalized).
     * @param {Plane} [result] The object onto which to store the result.
     * @returns {Plane} A new plane instance or the modified result parameter.
     *
     * @exception {Error} Normal must be normalized
     */
    static fromVector4(coefficients, result) {

        const normal = Vector3.fromVector4(coefficients, scratchNormal);
        const distance = coefficients.w;

        //>>includeStart('debug', pragmas.debug);
        if (
            !GMath.equalsEpsilon(
                Vector3.magnitude(normal),
                1.0,
                GMath.EPSILON6
            )
        ) {
            throw new Error("normal must be normalized.");
        }
        //>>includeEnd('debug');

        if (!defined(result)) {
            return new Plane(normal, distance);
        }
        Vector3.clone(normal, result.normal);
        result.distance = distance;
        return result;
    };
    /**
     * Computes the signed shortest distance of a point to a plane.
     * The sign of the distance determines which side of the plane the point
     * is on.  If the distance is positive, the point is in the half-space
     * in the direction of the normal; if negative, the point is in the half-space
     * opposite to the normal; if zero, the plane passes through the point.
     *
     * @param {Plane} plane The plane.
     * @param {Vector3} point The point.
     * @returns {Number} The signed shortest distance of the point to the plane.
     */
    static getPointDistance(plane, point) {
        return Vector3.dot(plane.normal, point) + plane.distance;
    };
    /**
     * Projects a point onto the plane.
     * @param {Plane} plane The plane to project the point onto
     * @param {Vector3} point The point to project onto the plane
     * @param {Vector3} [result] The result point.  If undefined, a new Vector3 will be created.
     * @returns {Vector3} The modified result parameter or a new Vector3 instance if one was not provided.
     */
    static projectPointOntoPlane(plane, point, result) {

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
    };
    /**
     * Transforms the plane by the given transformation matrix.
     *
     * @param {Plane} plane The plane.
     * @param {Matrix4} transform The transformation matrix.
     * @param {Plane} [result] The object into which to store the result.
     * @returns {Plane} The plane transformed by the given transformation matrix.
     */
    static transform(plane, transform, result) {
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
    };

    /**
     * Duplicates a Plane instance.
     *
     * @param {Plane} plane The plane to duplicate.
     * @param {Plane} [result] The object onto which to store the result.
     * @returns {Plane} The modified result parameter or a new Plane instance if one was not provided.
     */
    static clone(plane, result) {

        if (!defined(result)) {
            return new Plane(plane.normal, plane.distance);
        }

        Vector3.clone(plane.normal, result.normal);
        result.distance = plane.distance;

        return result;
    };

    /**
     * Compares the provided Planes by normal and distance and returns
     * <code>true</code> if they are equal, <code>false</code> otherwise.
     *
     * @param {Plane} left The first plane.
     * @param {Plane} right The second plane.
     * @returns {Boolean} <code>true</code> if left and right are equal, <code>false</code> otherwise.
     */
    static equals(left, right) {
        return (
            left.distance === right.distance &&
            Vector3.equals(left.normal, right.normal)
        );
    };

}
const scratchNormal = new Vector3();
const scratchCartesian = new Vector3();
const scratchInverseTranspose = new Matrix4();
const scratchPlaneCartesian4 = new Vector4();
const scratchTransformNormal = new Vector3();

export default Plane;




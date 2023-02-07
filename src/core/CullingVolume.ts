import Vector3 from "../math/Vector3";
import Vector4 from "../math/Vector4";
import defaultValue from "../utils/defaultValue";
import defined from "../utils/defined";
import Intersect from "./Intersect";
import Plane from "../math/Plane";

/**
 * The culling volume defined by planes.
 *
 * @alias CullingVolume
 * @constructor
 *
 * @param {Vector4[]} [planes] An array of clipping planes.
 */
class CullingVolume {
  planes: Plane[];

  public static MASK_OUTSIDE = 0xffffffff;

  public static MASK_INSIDE = 0x00000000;

  public static MASK_INDETERMINATE = 0x7fffffff;

  constructor(planes?: Plane[]) {
    this.planes = defaultValue(planes, [
      new Plane(Vector3.UNIT_Z, 0.0),
      new Plane(Vector3.UNIT_Z, 0.0),
      new Plane(Vector3.UNIT_Z, 0.0),
      new Plane(Vector3.UNIT_Z, 0.0),
      new Plane(Vector3.UNIT_Z, 0.0),
      new Plane(Vector3.UNIT_Z, 0.0),
    ]);
  }
  /**
   * Constructs a culling volume from a bounding sphere. Creates six planes that create a box containing the sphere.
   * The planes are aligned to the x, y, and z axes in world coordinates.
   *
   * @param {BoundingSphere} boundingSphere The bounding sphere used to create the culling volume.
   * @param {CullingVolume} [result] The object onto which to store the result.
   * @returns {CullingVolume} The culling volume created from the bounding sphere.
   */
  static fromBoundingSphere(boundingSphere, result) {
    //>>includeStart('debug', pragmas.debug);
    if (!defined(boundingSphere)) {
      throw new Error("boundingSphere is required.");
    }
    //>>includeEnd('debug');

    if (!defined(result)) {
      result = new CullingVolume();
    }

    const length = faces.length;
    const planes = result.planes;
    planes.length = 2 * length;

    const center = boundingSphere.center;
    const radius = boundingSphere.radius;

    let planeIndex = 0;

    for (let i = 0; i < length; ++i) {
      const faceNormal = faces[i];

      let plane0 = planes[planeIndex];
      let plane1 = planes[planeIndex + 1];

      if (!defined(plane0)) {
        plane0 = planes[planeIndex] = new Vector4();
      }
      if (!defined(plane1)) {
        plane1 = planes[planeIndex + 1] = new Vector4();
      }

      Vector3.multiplyByScalar(faceNormal, -radius, scratchPlaneCenter);
      Vector3.add(center, scratchPlaneCenter, scratchPlaneCenter);

      plane0.x = faceNormal.x;
      plane0.y = faceNormal.y;
      plane0.z = faceNormal.z;
      plane0.w = -Vector3.dot(faceNormal, scratchPlaneCenter);

      Vector3.multiplyByScalar(faceNormal, radius, scratchPlaneCenter);
      Vector3.add(center, scratchPlaneCenter, scratchPlaneCenter);

      plane1.x = -faceNormal.x;
      plane1.y = -faceNormal.y;
      plane1.z = -faceNormal.z;
      plane1.w = -Vector3.dot(
        Vector3.negate(faceNormal, scratchPlaneNormal),
        scratchPlaneCenter
      );

      planeIndex += 2;
    }

    return result;
  }
  /**
   * Determines whether a bounding volume intersects the culling volume.
   *
   * @param {Object} boundingVolume The bounding volume whose intersection with the culling volume is to be tested.
   * @returns {Intersect}  Intersect.OUTSIDE, Intersect.INTERSECTING, or Intersect.INSIDE.
   */
  computeVisibility(boundingVolume) {
    if (!defined(boundingVolume)) {
      throw new Error("boundingVolume is required.");
    }
    const planes = this.planes;
    let intersecting = false;
    for (let k = 0, len = planes.length; k < len; ++k) {
      const result = boundingVolume.intersectPlane(planes[k]);
      if (result === Intersect.OUTSIDE) {
        return Intersect.OUTSIDE;
      } else if (result === Intersect.INTERSECTING) {
        intersecting = true;
      }
    }

    return intersecting ? Intersect.INTERSECTING : Intersect.INSIDE;
  }

  /**
   * Determines whether a bounding volume intersects the culling volume.
   *
   * @param {Object} boundingVolume The bounding volume whose intersection with the culling volume is to be tested.
   * @param {Number} parentPlaneMask A bit mask from the boundingVolume's parent's check against the same culling
   *                                 volume, such that if (planeMask & (1 << planeIndex) === 0), for k < 31, then
   *                                 the parent (and therefore this) volume is completely inside plane[planeIndex]
   *                                 and that plane check can be skipped.
   * @returns {Number} A plane mask as described above (which can be applied to this boundingVolume's children).
   *
   * @private
   */
  computeVisibilityWithPlaneMask(boundingVolume, parentPlaneMask) {
    //>>includeStart('debug', pragmas.debug);
    if (!defined(boundingVolume)) {
      throw new Error("boundingVolume is required.");
    }
    if (!defined(parentPlaneMask)) {
      throw new Error("parentPlaneMask is required.");
    }
    //>>includeEnd('debug');

    if (
      parentPlaneMask === CullingVolume.MASK_OUTSIDE ||
      parentPlaneMask === CullingVolume.MASK_INSIDE
    ) {
      // parent is completely outside or completely inside, so this child is as well.
      return parentPlaneMask;
    }

    // Start with MASK_INSIDE (all zeros) so that after the loop, the return value can be compared with MASK_INSIDE.
    // (Because if there are fewer than 31 planes, the upper bits wont be changed.)
    let mask = CullingVolume.MASK_INSIDE;

    const planes = this.planes;
    for (let k = 0, len = planes.length; k < len; ++k) {
      // For k greater than 31 (since 31 is the maximum number of INSIDE/INTERSECTING bits we can store), skip the optimization.
      const flag = k < 31 ? 1 << k : 0;
      if (k < 31 && (parentPlaneMask & flag) === 0) {
        // boundingVolume is known to be INSIDE this plane.
        continue;
      }
      scratchPlanes.set(
        planes[k].normal.x,
        planes[k].normal.y,
        planes[k].normal.z,
        planes[k].distance
      );
      const result = boundingVolume.intersectPlane(
        Plane.fromVector4(scratchPlanes, scratchPlane)
      );
      if (result === Intersect.OUTSIDE) {
        return CullingVolume.MASK_OUTSIDE;
      } else if (result === Intersect.INTERSECTING) {
        mask |= flag;
      }
    }

    return mask;
  }
}

const faces = [new Vector3(), new Vector3(), new Vector3()];
Vector3.clone(Vector3.UNIT_X, faces[0]);
Vector3.clone(Vector3.UNIT_Y, faces[1]);
Vector3.clone(Vector3.UNIT_Z, faces[2]);

const scratchPlaneCenter = new Vector3();
const scratchPlaneNormal = new Vector3();
const scratchPlanes = new Vector4();
const scratchPlane = new Plane(new Vector3(1.0, 0.0, 0.0), 0.0);

export default CullingVolume;

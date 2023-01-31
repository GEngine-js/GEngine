import Vector3 from "./Vector3";
import defined from "../utils/defined";

/**
 * Represents a ray that extends infinitely from the provided origin in the provided direction.
 * @alias Ray
 * @constructor
 *
 * @param {Vector3} [origin=Vector3.ZERO] The origin of the ray.
 * @param {Vector3} [direction=Vector3.ZERO] The direction of the ray.
 */
export default class Ray{
   constructor(public origin:Vector3=Vector3.ZERO, public direction:Vector3=Vector3.ZERO ){
    
   }
   /**
 * Duplicates a Ray instance.
 *
 * @param {Ray} ray The ray to duplicate.
 * @param {Ray} [result] The object onto which to store the result.
 * @returns {Ray} The modified result parameter or a new Ray instance if one was not provided. (Returns undefined if ray is undefined)
 */
static clone(ray, result) {
  if (!defined(ray)) {
    return undefined;
  }
  if (!defined(result)) {
    return new Ray(ray.origin, ray.direction);
  }
  result.origin = Vector3.clone(ray.origin);
  result.direction = Vector3.clone(ray.direction);
  return result;
};

/**
 * Computes the point along the ray given by r(t) = o + t*d,
 * where o is the origin of the ray and d is the direction.
 *
 * @param {Ray} ray The ray.
 * @param {Number} t A scalar value.
 * @param {Vector3} [result] The object in which the result will be stored.
 * @returns {Vector3} The modified result parameter, or a new instance if none was provided.
 *
 * @example
 * //Get the first intersection point of a ray and an ellipsoid.
 * const intersection = IntersectionTests.rayEllipsoid(ray, ellipsoid);
 * const point = Ray.getPoint(ray, intersection.start);
 */
static getPoint(ray, t, result) {
  if (!defined(result)) {
    result = new Vector3();
  }

  result = Vector3.multiplyByScalar(ray.direction, t, result);
  return Vector3.add(ray.origin, result, result);
}; 
}


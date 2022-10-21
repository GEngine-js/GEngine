// @ts-nocheck
import Cartesian3 from "./Cartesian3";
import defined from "../utils/defined";

/**
 * Represents a ray that extends infinitely from the provided origin in the provided direction.
 * @alias Ray
 * @constructor
 *
 * @param {Cartesian3} [origin=Cartesian3.ZERO] The origin of the ray.
 * @param {Cartesian3} [direction=Cartesian3.ZERO] The direction of the ray.
 */
export default class Ray{
   constructor(public origin:Cartesian3=Cartesian3.ZERO, public direction:Cartesian3=Cartesian3.ZERO ){
    
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
  result.origin = Cartesian3.clone(ray.origin);
  result.direction = Cartesian3.clone(ray.direction);
  return result;
};

/**
 * Computes the point along the ray given by r(t) = o + t*d,
 * where o is the origin of the ray and d is the direction.
 *
 * @param {Ray} ray The ray.
 * @param {Number} t A scalar value.
 * @param {Cartesian3} [result] The object in which the result will be stored.
 * @returns {Cartesian3} The modified result parameter, or a new instance if none was provided.
 *
 * @example
 * //Get the first intersection point of a ray and an ellipsoid.
 * const intersection = Cesium.IntersectionTests.rayEllipsoid(ray, ellipsoid);
 * const point = Cesium.Ray.getPoint(ray, intersection.start);
 */
static getPoint(ray, t, result) {
  if (!defined(result)) {
    result = new Cartesian3();
  }

  result = Cartesian3.multiplyByScalar(ray.direction, t, result);
  return Cartesian3.add(ray.origin, result, result);
}; 
}


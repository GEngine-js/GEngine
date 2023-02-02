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
static clone(ray:Ray, result:Ray):Ray {
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

static getPoint(ray:Ray, t:number, result:Vector3):Vector3 {
  if (!defined(result)) {
    result = new Vector3();
  }

  result = Vector3.multiplyByScalar(ray.direction, t, result);
  return Vector3.add(ray.origin, result, result);
}; 
}


import Vector3 from "../math/Vector3";
import { Intersect } from "./WebGPUConstant";

export default class BoundingBox {
	constructor(public minimum: Vector3, public maximum: Vector3, public center: Vector3) {}
	intersectPlane(plane) {
		intersectScratch = Vector3.subtract(this.maximum, this.minimum, intersectScratch);
		const h = Vector3.multiplyByScalar(intersectScratch, 0.5, intersectScratch); //The positive half diagonal
		const normal = plane.normal;
		const e = h.x * Math.abs(normal.x) + h.y * Math.abs(normal.y) + h.z * Math.abs(normal.z);
		const s = Vector3.dot(this.center, normal) + plane.distance; //signed distance from center

		if (s - e > 0) {
			return Intersect.INSIDE;
		}

		if (s + e < 0) {
			//Not in front because normals point inward
			return Intersect.OUTSIDE;
		}

		return Intersect.INTERSECTING;
	}
}
let intersectScratch = new Vector3();

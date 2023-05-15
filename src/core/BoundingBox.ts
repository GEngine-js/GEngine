import Plane from "../math/Plane";
import Vector3 from "../math/Vector3";
import { Intersect } from "./WebGPUConstant";
export default class BoundingBox {
	public minimum: Vector3;
	public maximum: Vector3;
	public center: Vector3;
	public originMinimum: Vector3;
	public originMaximum: Vector3;
	public originCenter: Vector3;
	constructor(minimum: Vector3, maximum: Vector3, center: Vector3) {
		this.minimum = minimum;
		this.maximum = maximum;
		this.center = center;
		this.originMinimum = minimum;
		this.originMaximum = maximum;
		this.originCenter = center;
	}
	intersectPlane(plane: Plane) {
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
	// update() {}
}
let intersectScratch = new Vector3();

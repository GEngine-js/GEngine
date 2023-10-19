import Camera from "../camera/Camera";
import Matrix4 from "../math/Matrix4";
import Plane from "../math/Plane";
import Vector3 from "../math/Vector3";
import { Intersect } from "./WebGPUConstant";
export default class BoundingBox {
	public minimum: Vector3;
	public maximum: Vector3;
	private originMin: Vector3;
	private originMax: Vector3;
	constructor(minimum: Vector3, maximum: Vector3) {
		this.minimum = minimum;
		this.maximum = maximum;
		this.originMin = minimum.clone();
		this.originMax = maximum.clone();
	}
	intersectPlane(plane: Plane) {
		// const center = this.getCenter();
		// const intersectTemp = Vector3.subtract(this.maximum, this.minimum, intersectScratch);
		// const h = Vector3.multiplyByScalar(intersectTemp, 0.5, intersectTemp); // The positive half diagonal
		// const normal = plane.normal;
		// const e = h.x * Math.abs(normal.x) + h.y * Math.abs(normal.y) + h.z * Math.abs(normal.z);
		// const s = Vector3.dot(center, normal) + plane.distance; // signed distance from center
		// if (s - e > 0) {
		// 	return Intersect.INSIDE;
		// }
		// if (s + e < 0) {
		// 	// Not in front because normals point inward
		// 	return Intersect.OUTSIDE;
		// }
		// return Intersect.INTERSECTING;
		const { minimum, maximum } = this;
		const p = intersectScratch;

		const normal = plane.normal;

		p.set(
			normal.x >= 0 ? maximum.x : minimum.x,
			normal.y >= 0 ? maximum.y : minimum.y,
			normal.z >= 0 ? maximum.z : minimum.z
		);
		if (Vector3.dot(normal, p) < -plane.distance) {
			return Intersect.OUTSIDE;
		}
		return Intersect.INTERSECTING;
	}
	update(matrix: Matrix4) {
		// https://github.com/galacean/engine/blob/main/packages/math/src/BoundingBox.ts
		// https://zeux.io/2010/10/17/aabb-from-obb-with-component-wise-abs/
		const center = this.getCenter();
		const extent = this.getExtent();
		center.applyMatrix4(matrix);
		const { x, y, z } = extent;
		const e = matrix;
		extent.x = Math.abs(x * e[0]) + Math.abs(y * e[4]) + Math.abs(z * e[8]);
		extent.y = Math.abs(x * e[1]) + Math.abs(y * e[5]) + Math.abs(z * e[9]);
		extent.z = Math.abs(x * e[2]) + Math.abs(y * e[6]) + Math.abs(z * e[10]);

		// set min、max
		Vector3.subtract(center, extent, this.minimum);
		Vector3.add(center, extent, this.maximum);
	}
	getCenter(out = new Vector3()): Vector3 {
		Vector3.add(this.originMin, this.originMax, out);
		Vector3.multiplyByScalar(out, 0.5, out);
		return out;
	}

	getExtent(out = new Vector3()): Vector3 {
		Vector3.subtract(this.originMax, this.originMin, out);
		Vector3.multiplyByScalar(out, 0.5, out);
		return out;
	}
	merge(boundingBox: BoundingBox): BoundingBox {
		Vector3.min(this.minimum, boundingBox.minimum, this.minimum);
		Vector3.max(this.maximum, boundingBox.maximum, this.maximum);
		return this;
	}
	distanceToCamera(camera: Camera) {
		return Math.max(0.0, Vector3.distance(this.getCenter(), camera.position));
	}
}
const intersectScratch = new Vector3();
const intersectScratch1 = new Vector3();

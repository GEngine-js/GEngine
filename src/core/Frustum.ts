import Camera from "../camera/Camera";
import Matrix4 from "../math/Matrix4";
import Plane from "../math/Plane";
import Vector3 from "../math/Vector3";
import defined from "../utils/defined";
import BoundingBox from "./BoundingBox";
import BoundingSphere from "./BoundingSphere";
import { Intersect } from "./WebGPUConstant";

export class Frustum {
	private _planes: Plane[];
	constructor() {
		this._planes = [];
	}
	get planes(): Array<Plane> {
		return this._planes;
	}
	update(camera: Camera) {
		const { viewMatrix, projectionMatrix } = camera;
		const cloneViewMatrix = viewMatrix.clone(new Matrix4());
		const vpMatrix = Matrix4.multiply(projectionMatrix, cloneViewMatrix, new Matrix4());
		const planes = this._planes;
		const me = vpMatrix;
		const me0 = me[0],
			me1 = me[1],
			me2 = me[2],
			me3 = me[3];
		const me4 = me[4],
			me5 = me[5],
			me6 = me[6],
			me7 = me[7];
		const me8 = me[8],
			me9 = me[9],
			me10 = me[10],
			me11 = me[11];
		const me12 = me[12],
			me13 = me[13],
			me14 = me[14],
			me15 = me[15];
		planes[0] = new Plane(new Vector3(me3 - me0, me7 - me4, me11 - me8), me15 - me12);
		planes[0].normalize();
		planes[1] = new Plane(new Vector3(me3 + me0, me7 + me4, me11 + me8), me15 + me12);
		planes[1].normalize();

		planes[2] = new Plane(new Vector3(me3 + me1, me7 + me5, me11 + me9), me15 + me13);
		planes[2].normalize();

		planes[3] = new Plane(new Vector3(me3 - me1, me7 - me5, me11 - me9), me15 - me13);
		planes[3].normalize();

		planes[4] = new Plane(new Vector3(me3 - me2, me7 - me6, me11 - me10), me15 - me14);
		planes[4].normalize();

		planes[5] = new Plane(new Vector3(me3 + me2, me7 + me6, me11 + me10), me15 + me14);
		planes[5].normalize();
	}
	computeVisibility(boundingVolume: BoundingBox | BoundingSphere) {
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
	destroy() {
		this._planes = null;
	}
}

import Camera from "../camera/Camera";
import Color from "../math/Color";
import Vector3 from "../math/Vector3";
import { Light } from "./Light";

export class DirtectLight extends Light {
	private _dirtect: Vector3;
	dirtectDirty: boolean;
	public dirtectVC: Vector3;
	constructor(color: Vector3, intensity: number, dirtect: Vector3 = new Vector3(1, 1, 0)) {
		super(color, intensity);
		this.type = "dirtect";
		this._dirtect = dirtect;
		this.dirtectDirty = true;
	}
	set dirtect(value) {
		this.dirtectDirty = true;
		this._dirtect = value;
	}
	get dirtect() {
		return Vector3.normalize(this._dirtect, new Vector3());
	}
	update(camera: Camera): void {
		super.update(camera);
		let dirtect = this.dirtect.clone();
		const viewMatrix = camera.viewMatrix;
		this.dirtectVC = dirtect.transformDirection(viewMatrix);
	}
}
//uniform
// direction: {},
// color: {}

import Camera from "../camera/Camera";
import Color from "../math/Color";
import Vector3 from "../math/Vector3";
import { Light } from "./Light";
import { DirectionalLightShadow } from "./shadows/DirectionalLightShadow";

export class DirectionalLight extends Light {
	private _directional: Vector3;
	dirtectDirty: boolean;
	public dirtectVC: Vector3;
	constructor(
		color: Vector3,
		intensity: number,
		directional: Vector3 = new Vector3(1, 1, 0),
		openShadow: Boolean = true
	) {
		super(color, intensity);
		this.type = "directional";
		this._directional = directional;
		this.dirtectDirty = true;
		if (openShadow) this.shadow = new DirectionalLightShadow();
	}
	set directional(value) {
		this.dirtectDirty = true;
		this._directional = value;
	}
	get directional() {
		return Vector3.normalize(this._directional, new Vector3());
	}
	update(camera: Camera): void {
		super.update(camera);
		let directional = this.directional.clone();
		const viewMatrix = camera.viewMatrix;
		// this.dirtectVC = directional.transformDirection(viewMatrix);
		this.dirtectVC = directional.normalize();
	}
}
//uniform
// direction: {},
// color: {}

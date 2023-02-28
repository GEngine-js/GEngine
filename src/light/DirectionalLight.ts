import Camera from "../camera/Camera";
import RenderObject from "../core/RenderObject";
import Color from "../math/Color";
import Vector3 from "../math/Vector3";
import { Light } from "./Light";
import { DirectionalLightShadow } from "./shadows/DirectionalLightShadow";

export class DirectionalLight extends Light {
	public dirtectVC: Vector3;

	constructor(color: Vector3, intensity: number, openShadow: Boolean = true) {
		super(color, intensity);
		this.type = "directional";
		if (openShadow) this.shadow = new DirectionalLightShadow();
	}

	get dirtectDirty() {
		return this.positionDirty || this.targetDirty;
	}

	set dirtectDirty(value) {
		this.positionDirty = value;
		this.targetDirty = value;
	}

	get directional() {
		const result = new Vector3();
		Vector3.subtract(this.target, this.position, result);
		return result.normalize();
	}

	update(camera: Camera): void {
		if (!this.dirtectDirty) return;
		super.update(camera);

		let directional = this.directional.clone();
		const viewMatrix = camera.viewMatrix;
		// this.dirtectVC = directional.transformDirection(viewMatrix);
		this.dirtectVC = directional;
	}
}
//uniform
// direction: {},
// color: {}

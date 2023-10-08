import { LightType } from "../core/WebGPUTypes";
import Vector3 from "../math/Vector3";
import { Light } from "./Light";
import { PointLightShadow } from "./shadows/PointLightShadow";

export class PointLight extends Light {
	private _distance: number;
	private _decay: number;
	distanceDirty: boolean;
	decayDirty: boolean;

	get pointLightShadow(): PointLightShadow | null {
		if (this.shadow instanceof PointLightShadow) {
			return this.shadow;
		}

		return null;
	}

	constructor(color: Vector3, intensity: number, distance = 0, decay = 4, openShadow = true) {
		super(color, intensity);
		this._distance = distance;
		this._decay = decay;
		this.distanceDirty = true;
		this.decayDirty = true;
		this.lightType = LightType.PointLight;
		if (openShadow) this.shadow = new PointLightShadow();
	}
	set distance(value) {
		this.distanceDirty = true;
		this._distance = value;
	}
	get distance() {
		return this._distance;
	}
	set decay(value) {
		this.decayDirty = true;
		this._decay = value;
	}
	get decay() {
		return this._decay;
	}
}
// uniform
// color: {},
// position: {},
// decay: {},
// distance: {}

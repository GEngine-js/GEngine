import { LightType } from "../core/WebGPUTypes";
import Vector3 from "../math/Vector3";
import Vector4 from "../math/Vector4";
import { Light } from "./Light";

export class AmbientLight extends Light {
	private _colorAndIntensity: Vector4;
	constructor(color: Vector3, intensity: number) {
		super(color, intensity);
		this.lightType = LightType.AmbientLight;
		this._colorAndIntensity = new Vector4(color.x, color.y, color.z, intensity);
	}
	get ColorAndIntensity() {
		this._colorAndIntensity.set(this.color.x, this.color.y, this.color.z, this.intensity);
		return this._colorAndIntensity;
	}
}
//light.color ).multiplyScalar( light.intensity * scaleFactor );

import { LightType } from "../core/WebGPUTypes";
import Vector3 from "../math/Vector3";
import { Scene } from "../Scene";
import { Light } from "./Light";
import { DirectionalLightShadow } from "./shadows/DirectionalLightShadow";

export class DirectionalLight extends Light {
	_scene: Scene;
	constructor(color: Vector3, intensity: number, openShadow = true) {
		super(color, intensity);
		this.lightType = LightType.DirectionalLight;
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

	_setSceneInstance(scene: Scene) {
		this._scene = scene;
	}

	_getSceneActiveCamera() {
		return this._scene.camera;
	}
}
// uniform
// direction: {},
// color: {}

import { BaseShadow } from "./BaseShadow";
import PerspectiveCamera from "../../camera/PerspectiveCamera";
import { SpotLight } from "../SpotLight";
import Vector2 from "../../math/Vector2";

export class SpotLightShadow extends BaseShadow {
	public type: string;
	constructor() {
		const camera = new PerspectiveCamera(60, 1, 0.1, 500);
		super(new Vector2(1024, 1024), camera);
		this.type = "spotLightShadow";
	}

	public update(light: SpotLight) {
		this.updateMatrices(light);
	}

	updateMatrices(light: SpotLight) {
		this.camera.position.copy(light.position);
		const { x, y, z } = light.target;
		this.camera.lookAt(x, y, z);
		this.camera.updateMatrix();
	}
}

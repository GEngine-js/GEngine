import { BaseShadow } from "./BaseShadow";
import PerspectiveCamera from "../../camera/PerspectiveCamera";
import { SpotLight } from "../SpotLight";

export class SpotLightShadow extends BaseShadow {
	public type: string;
	constructor() {
		const camera = new PerspectiveCamera(50, 1, 0.5, 500);
		super(1024, camera);
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

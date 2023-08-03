import OrthographicCamera from "../../camera/OrthographicCamera";
import Vector2 from "../../math/Vector2";
import { DirectionalLight } from "../DirectionalLight";
import { Light } from "../Light";
import { BaseShadow } from "./BaseShadow";

export class DirectionalLightShadow extends BaseShadow {
	public type: string;
	constructor() {
		const camera = new OrthographicCamera(-50, 50, 50, -50, 0, 100);
		super(new Vector2(1024, 1024), camera);
		this.type = "directionalLightShadow";
		super.init();
	}

	public update(light: Light) {
		if (light instanceof DirectionalLight) this.updateMatrices(light);
	}

	updateMatrices(light: DirectionalLight) {
		this.camera.position.copy(light.position);
		const { x, y, z } = light.target;
		this.camera.lookAt(x, y, z);
		this.camera.updateMatrix();
		this.vpMatrixDirty = true;
	}
}

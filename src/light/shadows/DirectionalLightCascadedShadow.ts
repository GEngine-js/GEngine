import OrthographicCamera from "../../camera/OrthographicCamera";
import Vector2 from "../../math/Vector2";
import { DirectionalLight } from "../DirectionalLight";
import { CascadedShadow, defaultCascadedShadowOptions } from "./CascadedShadow";

export class DirectionalLightCascadedShadow extends CascadedShadow {
	public type: string;
	constructor(options?: { cascadeNumber: number; cascadeMode: string; lightInstance: DirectionalLight }) {
		const shadowOptions = Object.assign({}, defaultCascadedShadowOptions, options);

		const cascadedShadowOptions = DirectionalLightCascadedShadow._getCascadedShadowOptions(
			shadowOptions.cascadeNumber,
			shadowOptions.shadowMapSize,
			shadowOptions.lightInstance,
			shadowOptions.cascadeMode
		);
		super(cascadedShadowOptions);
		this.type = "directionalLightCascadedShadow";
	}

	public update(light: DirectionalLight) {
		this.updateMatrices(light);
	}

	updateMatrices(light: DirectionalLight) {
		this.camera.position.copy(light.position);
		const { x, y, z } = light.target;
		this.camera.lookAt(x, y, z);
		this.camera.updateMatrix();
		this.vpMatrixDirty = true;
	}

	static _getCascadedShadowOptions(
		cameraNumber: number,
		shadowMapSize: Vector2,
		lightInstance: DirectionalLight,
		cascadeMode: string
	) {
		const cameraArray = [];
		for (let i = 0; i < cameraNumber; i++) {
			cameraArray.push(new OrthographicCamera(-50, 50, 50, -50, 0, 100));
		}
		return {
			cameraArray,
			shadowMapSize,
			lightInstance,
			cascadeMode
		};
	}
}

import OrthographicCamera from "../../camera/OrthographicCamera";
import Matrix4 from "../../math/Matrix4";
import Vector2 from "../../math/Vector2";
import { DirectionalLight } from "../DirectionalLight";
import { Light } from "../Light";
import { CascadedShadow, defaultCascadedShadowOptions } from "./CascadedShadow";

export class DirectionalLightCascadedShadow extends CascadedShadow {
	public type: string;
	isCascadedShadow: boolean;
	vpMatrixArrayDirty: boolean;

	constructor(options: { cascadeNumber?: number; cascadeMode?: string; lightInstance: DirectionalLight }) {
		const shadowOptions = Object.assign({}, defaultCascadedShadowOptions, options);

		const cascadedShadowOptions = DirectionalLightCascadedShadow._getCascadedShadowOptions(
			shadowOptions.cascadeNumber,
			shadowOptions.shadowMapSize,
			shadowOptions.lightInstance,
			shadowOptions.cascadeMode
		);
		super(cascadedShadowOptions);
		this.type = "directionalLightCascadedShadow";
		super.init();
	}

	public update(light: Light) {
		this.updateCascadeFrustumArray();
		this.updateCameraMatrixBySubFrustum();
		if (this.currentViewportIndex == this.vpMatrixArray.length - 1) this.vpMatrixArrayDirty = true;
	}

	static _getCascadedShadowOptions(
		cascadeNumber: number,
		shadowMapSize: Vector2,
		lightInstance: DirectionalLight,
		cascadeMode: string
	) {
		const vpMatrixArrayLength = cascadeNumber > 8 ? 8 : cascadeNumber;
		const vpMatrixArray = [];
		for (let i = 0; i < vpMatrixArrayLength; i++) {
			vpMatrixArray.push(new Matrix4());
		}
		return {
			vpMatrixArray,
			shadowMapSize,
			lightInstance,
			cascadeMode
		};
	}
}

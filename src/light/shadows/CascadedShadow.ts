import Camera from "../../camera/Camera";
import Vector2 from "../../math/Vector2";
import { BaseShadow } from "./BaseShadow";
import { CascadedFrustum } from "./CascadedFrustum";

const defaultCascadedShadowOptions = {
	shadowMapSize: new Vector2(1024, 1024),
	maxCascades: 3,
	cascadeMode: "practical",
	maxFar: 100000
};
export class CascadedShadow extends BaseShadow {
	mainFrustum: CascadedFrustum;
	frustums: Array<CascadedFrustum>;
	breaks: Array<number>;
	constructor(options: CascadedShadowOptions) {
		const cascadedShadowOptions = Object.assign(defaultCascadedShadowOptions, options);
		const { shadowMapSize, camera } = cascadedShadowOptions;
		super(shadowMapSize, camera);
		this.mainFrustum = new CascadedFrustum();
		this.frustums = [];
		this.breaks = [];
	}
}

interface CascadedShadowOptions {
	camera: Camera;
	shadowMapSize?: Vector2;
}

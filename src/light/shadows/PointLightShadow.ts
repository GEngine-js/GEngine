import PointLightShadowCamera from "../../camera/PointLightShadowCamera";
import Vector2 from "../../math/Vector2";
import Vector3 from "../../math/Vector3";
import Vector4 from "../../math/Vector4";
import { Light } from "../Light";
import { PointLight } from "../PointLight";
import { BaseShadow } from "./BaseShadow";

export class PointLightShadow extends BaseShadow {
	public type: string;
	private _pointLightShadowLookDirections: Array<Vector3>;
	private _pointLightShadowUps: Array<Vector3>;
	vpMatrixArrayDirty: boolean;

	get camera(): PointLightShadowCamera {
		return this._camera as PointLightShadowCamera;
	}

	constructor() {
		const camera = new PointLightShadowCamera(90, 1, 0.1, 500);
		super(new Vector2(1536, 1024), camera);
		this.viewportSize = new Vector2(512, 512);
		this.currentViewportIndex = 0;
		this.type = "pointLightShadow";
		this.vpMatrixArrayDirty = true;

		this._viewports = [
			// positive X 0
			new Vector4(0, 0, 1 / 3, 1 / 2),
			// negative X 1
			new Vector4(1, 0, 1 / 3, 1 / 2),
			// positive Z 2
			new Vector4(2, 0, 1 / 3, 1 / 2),
			// negative Z 3
			new Vector4(0, 1, 1 / 3, 1 / 2),
			// positive Y 4
			new Vector4(1, 1, 1 / 3, 1 / 2),
			// negative Y 5
			new Vector4(2, 1, 1 / 3, 1 / 2)
		];

		this._pointLightShadowLookDirections = [
			new Vector3(1, 0, 0),
			new Vector3(-1, 0, 0),
			new Vector3(0, 0, 1),
			new Vector3(0, 0, -1),
			new Vector3(0, 1, 0),
			new Vector3(0, -1, 0)
		];

		this._pointLightShadowUps = [
			new Vector3(0, 1, 0),
			new Vector3(0, 1, 0),
			new Vector3(0, 1, 0),
			new Vector3(0, 1, 0),
			new Vector3(0, 0, 1),
			new Vector3(0, 0, -1)
		];
		super.init();
	}

	public update(light: Light) {
		if (light instanceof PointLight) this.updateMatrices(light);
	}

	updateMatrices(light: PointLight) {
		if (this.camera instanceof PointLightShadowCamera) {
			this.camera.position.copy(light.position);
			const target = Vector3.clone(light.position);
			target.add(this._pointLightShadowLookDirections[this.currentViewportIndex]);
			this.camera.up.copy(this._pointLightShadowUps[this.currentViewportIndex]);
			const { x, y, z } = target;
			this.camera.lookAt(x, y, z);
			this.camera.updateMatrix();
			this.camera.updateVpMatrixArrayAndIndex(this.currentViewportIndex);
			if (this.currentViewportIndex == 5) this.vpMatrixArrayDirty = true;
		}
	}
}

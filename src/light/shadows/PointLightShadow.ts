import { Light } from "../Light";
import { BaseShadow } from "./BaseShadow";
import PerspectiveCamera from "../../camera/PerspectiveCamera";
import Vector4 from "../../math/Vector4";
import Vector3 from "../../math/Vector3";
import Vector2 from "../../math/Vector2";
import { PointLight } from "../PointLight";

export class PointLightShadow extends BaseShadow {
	public type: string;
	private _pointLightShadowLookDirections: Array<Vector3>;
	private _pointLightShadowUps: Array<Vector3>;

	constructor() {
		const camera = new PerspectiveCamera(90, 1, 0.1, 500);
		super(new Vector2(1536, 1024), camera);
		this.viewportSize = new Vector2(512, 512);
		this.currentViewportIndex = 0;
		this.type = "pointLightShadow";

		this._viewports = [
			// positive X
			new Vector4(0, 0, 1, 1),
			// negative X
			new Vector4(1, 0, 1, 1),
			// positive Z
			new Vector4(2, 0, 1, 1),
			// negative Z
			new Vector4(0, 1, 1, 1),
			// positive Y
			new Vector4(1, 1, 1, 1),
			// negative Y
			new Vector4(2, 1, 1, 1)
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
	}

	public update(light: PointLight) {
		this.updateMatrices(light);
	}

	updateMatrices(light: PointLight) {
		this.camera.position.copy(light.position);
		const target = Vector3.clone(light.position);
		target.add(this._pointLightShadowLookDirections[this.currentViewportIndex]);
		this.camera.up.copy(this._pointLightShadowUps[this.currentViewportIndex]);
		const { x, y, z } = target;
		this.camera.lookAt(x, y, z);
		this.camera.updateMatrix();
	}
}

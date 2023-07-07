import Camera from "../../camera/Camera";
import GMath from "../../math/Math";
import Vector2 from "../../math/Vector2";
import { DirectionalLight } from "../DirectionalLight";
import { BaseShadow } from "./BaseShadow";
import { CascadedFrustum } from "./CascadedFrustum";

export const defaultCascadedShadowOptions = {
	shadowMapSize: new Vector2(1024, 1024),
	cascadeNumber: 4,
	cascadeMode: "practical"
};

const maxFar = 10000;

export class CascadedShadow extends BaseShadow {
	sceneActiveCameraFrustum: CascadedFrustum;
	cascadeSubFrustumArray: Array<CascadedFrustum>;
	breaks: Array<number>;
	cascadeMode: string;
	cascadeNumber: number;
	_lightInstance: DirectionalLight;
	_sceneAvtiveCamera: Camera;

	constructor(options: CascadedShadowOptions) {
		const { shadowMapSize, cameraArray, lightInstance, cascadeMode } = options;
		super(shadowMapSize, cameraArray);
		this.cascadeNumber = cameraArray.length;
		this.cascadeMode = cascadeMode;
		this._lightInstance = lightInstance;
		this._sceneAvtiveCamera = lightInstance._getSceneActiveCamera();
		this.sceneActiveCameraFrustum = new CascadedFrustum();
		this.cascadeSubFrustumArray = [];
		this.breaks = [];
		this.init();
	}

	init() {
		this.getBreaks();
		this.initCascadeFrustumArray();
		this.updateBoundSphereByFrustum();
	}

	updateBoundSphereByFrustum() {}

	initCascadeFrustumArray() {
		const camera = this.camera;
		camera.updateProjectionMatrix();
		this.sceneActiveCameraFrustum.setFromProjectionMatrix(camera.projectionMatrix, maxFar);
		this.sceneActiveCameraFrustum.splitedByBreaks(this.breaks, this.cascadeSubFrustumArray);
	}

	getBreaks() {
		const camera = this._sceneAvtiveCamera;
		const far = Math.min(camera.far, maxFar);
		this.breaks.length = 0;

		switch (this.cascadeMode) {
			case "uniform":
				uniformSplit(this.cascadeNumber, camera.near, far, this.breaks);
				break;
			case "logarithmic":
				logarithmicSplit(this.cascadeNumber, camera.near, far, this.breaks);
				break;
			case "practical":
				practicalSplit(this.cascadeNumber, camera.near, far, 0.5, this.breaks);
				break;
		}

		function uniformSplit(amount: number, near: number, far: number, target: number[]) {
			for (let i = 1; i < amount; i++) {
				target.push((near + ((far - near) * i) / amount) / far);
			}

			target.push(1);
		}

		function logarithmicSplit(amount: number, near: number, far: number, target: number[]) {
			for (let i = 1; i < amount; i++) {
				target.push((near * (far / near) ** (i / amount)) / far);
			}

			target.push(1);
		}

		function practicalSplit(amount: number, near: number, far: number, lambda: number, target: number[]) {
			const _uniformArray = [];
			const _logArray = [];
			logarithmicSplit(amount, near, far, _logArray);
			uniformSplit(amount, near, far, _uniformArray);

			for (let i = 1; i < amount; i++) {
				target.push(GMath.lerp(_uniformArray[i - 1], _logArray[i - 1], lambda));
			}

			target.push(1);
		}
	}
}

export interface CascadedShadowOptions {
	cameraArray: Camera[];
	shadowMapSize: Vector2;
	lightInstance: DirectionalLight;
	cascadeMode: string;
}

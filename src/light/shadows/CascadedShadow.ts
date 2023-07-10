import Camera from "../../camera/Camera";
import OrthographicCamera from "../../camera/OrthographicCamera";
import BoundingSphere from "../../core/BoundingSphere";
import GMath from "../../math/Math";
import Vector2 from "../../math/Vector2";
import Vector3 from "../../math/Vector3";
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
	subCameraArray: Array<Camera>;
	breaks: Array<number>;
	cascadeMode: string;
	_cascadeNumber: number;
	_lightInstance: DirectionalLight;
	_sceneAvtiveCamera: Camera;

	static atlasBorderSize = 4;

	constructor(options: CascadedShadowOptions) {
		const { shadowMapSize, cameraArray, lightInstance, cascadeMode } = options;
		super(shadowMapSize, cameraArray);
		this._cascadeNumber = cameraArray.length;
		this.subCameraArray = cameraArray;
		this.cascadeMode = cascadeMode;
		this._lightInstance = lightInstance;
		this.sceneActiveCameraFrustum = new CascadedFrustum();
		this.cascadeSubFrustumArray = [];
		this.breaks = [];
	}

	set cascadeNumber(value: number) {
		this._cascadeNumber = value;
		this.getBreaks();
	}

	get cascadeNumber() {
		return this._cascadeNumber;
	}

	init() {
		this._sceneAvtiveCamera = this._lightInstance._getSceneActiveCamera();
		this.getBreaks();
		this.updateCascadeFrustumArray();
		this.updateSubCameraMatrixByFrustum();
	}

	updateSubCameraMatrixByFrustum() {
		const frustums = this.cascadeSubFrustumArray;
		for (let i = 0; i < frustums.length; i++) {
			const shadowCam = this.subCameraArray[i];
			const subFrustum = frustums[i];
			subFrustum.updateBoundingSphere();
			const center = subFrustum.boundingSphere.center;
			const radius = subFrustum.boundingSphere.radius;
			const halfShadowMapSize = this.shadowMapSize.x / 2;
			const borderRadius = (radius * halfShadowMapSize) / (halfShadowMapSize - CascadedShadow.atlasBorderSize);

			if (shadowCam instanceof OrthographicCamera) {
				const position = new Vector3();
				Vector3.multiplyByScalar(this._lightInstance.directional, radius + shadowCam.near, position);
				Vector3.subtract(center, position, position);
				shadowCam.position.copy(position);
				shadowCam.lookAt(center.x, center.y, center.z);
				shadowCam.left = -borderRadius;
				shadowCam.right = borderRadius;
				shadowCam.top = borderRadius;
				shadowCam.bottom = -borderRadius;
			}
			shadowCam.updateMatrix();
			shadowCam.updateProjectionMatrix();
		}
	}

	updateCascadeFrustumArray() {
		const camera = this._sceneAvtiveCamera;
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

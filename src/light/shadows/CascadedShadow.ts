import Camera from "../../camera/Camera";
import OrthographicCamera from "../../camera/OrthographicCamera";
import GMath from "../../math/Math";
import Matrix4 from "../../math/Matrix4";
import Vector2 from "../../math/Vector2";
import Vector3 from "../../math/Vector3";
import Vector4 from "../../math/Vector4";
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
	vpMatrixArray: Array<Matrix4>;
	breaks: Array<number>;
	breakVSArray: Array<number>;
	cascadeMode: string;
	_cascadeNumber: number;
	_lightInstance: DirectionalLight;
	_sceneAvtiveCamera: Camera;
	isCascadedShadow: boolean;

	static atlasBorderSize = 0;

	constructor(options: CascadedShadowOptions) {
		const { shadowMapSize, vpMatrixArray, lightInstance, cascadeMode } = options;
		const camera = new OrthographicCamera(-50, 50, 50, -50, 0, 100);
		super(shadowMapSize, camera);
		this.isCascadedShadow = true;
		this._cascadeNumber = vpMatrixArray.length;
		this.vpMatrixArray = vpMatrixArray;
		this.cascadeMode = cascadeMode;
		this._lightInstance = lightInstance;
		this.sceneActiveCameraFrustum = new CascadedFrustum();
		this.cascadeSubFrustumArray = [];
		this.breaks = [];
		this.breakVSArray = [];
		this._viewports = [];
		this.viewportSize = shadowMapSize;
		this.currentViewportIndex = 0;
	}

	set cascadeNumber(value: number) {
		this._cascadeNumber = value;
		this.updateSetting();
		this._lightInstance.shadowDirty = true;
	}

	get cascadeNumber() {
		return this._cascadeNumber;
	}

	initSetting(light: DirectionalLight) {
		this._sceneAvtiveCamera = light._getSceneActiveCamera();
		this.updateSetting();
	}

	updateSetting() {
		this.getBreaks();
		this.updateViewports();
	}

	updateViewports() {
		this._viewports.length = 0;
		this.viewPortDirty = true;
		for (let i = 0; i < this.breaks.length; i++) {
			this._viewports.push(new Vector4(i, 0, 1 / this.breaks.length, 1));
		}
		this.updateShadowMapTextureSize();
	}

	updateShadowMapTextureSize() {
		this.getShadowMapTexture().setSize(
			this._viewports.length * this.viewportSize.x,
			this.viewportSize.y,
			undefined,
			true
		);
	}

	updateCameraMatrixBySubFrustum() {
		const frustums = this.cascadeSubFrustumArray;
		const shadowCam = this.camera;
		const subFrustum = frustums[this.currentViewportIndex];
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
			shadowCam.far = borderRadius * 2.0 + shadowCam.near;
			shadowCam.near = 0;
		}
		Matrix4.clone(shadowCam.vpMatrix, this.vpMatrixArray[this.currentViewportIndex]);
	}

	updateCascadeFrustumArray() {
		const camera = this._sceneAvtiveCamera;
		camera.updateProjectionMatrix();
		this.sceneActiveCameraFrustum.setFromProjectionMatrix(camera.projectionMatrix, maxFar);
		this.sceneActiveCameraFrustum.splitedByBreaks(this.breaks, this.cascadeSubFrustumArray);
		this.sceneActiveCameraFrustum.getBreakVSArray(this.breaks, this.breakVSArray);
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
	vpMatrixArray: Matrix4[];
	shadowMapSize: Vector2;
	lightInstance: DirectionalLight;
	cascadeMode: string;
}

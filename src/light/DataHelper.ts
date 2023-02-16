import Camera from "../camera/Camera";
import { FrameState } from "../core/FrameState";
import { DirectionalLight } from "./DirectionalLight";
import { PointLight } from "./PointLight";
import { SpotLight } from "./SpotLight";

export class SpotData {
	decay: Float32Array;
	penumbraCos: Float32Array;
	coneCos: Float32Array;
	distance: Float32Array;
	directional: Float32Array;
	position: Float32Array;
	color: Float32Array;
	//array<light> light of byteSize must be k*16
	static byteSize = 64;
	static size = 16;
	spotLight: SpotLight;
	constructor(buffer: Float32Array, byteOffset: number, spotLight: SpotLight) {
		this.spotLight = spotLight;
		this.position = new Float32Array(buffer.buffer, byteOffset, 3); //3
		this.distance = new Float32Array(buffer.buffer, byteOffset + 12, 1); //1
		this.directional = new Float32Array(buffer.buffer, byteOffset + 16, 3); //3
		this.coneCos = new Float32Array(buffer.buffer, byteOffset + 28, 1); //1
		this.color = new Float32Array(buffer.buffer, byteOffset + 32, 3); //3
		this.penumbraCos = new Float32Array(buffer.buffer, byteOffset + 44, 1); //1
		this.decay = new Float32Array(buffer.buffer, byteOffset + 48, 1); //1
	}
	update(camera: Camera) {
		const viewMatrix = camera.viewMatrix;
		if (this.spotLight.colorDirty) {
			this.spotLight.colorDirty = false;
			copyData(this.spotLight.color.toArray(), this.color);
		}
		if (this.spotLight.positionDirty) {
			this.spotLight.positionDirty = false;
			let position = this.spotLight.position.clone();
			position = position.applyMatrix4(viewMatrix);
			copyData(position.toArray(), this.position);
		}
		if (this.spotLight.dirtectDirty) {
			this.spotLight.dirtectDirty = false;
			let directional = this.spotLight.directional.clone();
			directional = directional.transformDirection(viewMatrix);
			copyData(directional.toArray(), this.directional);
		}
		if (this.spotLight.distanceDirty) {
			this.spotLight.distanceDirty = false;
			this.distance[0] = this.spotLight.distance; //1
		}
		if (this.spotLight.coneCosDirty) {
			this.spotLight.coneCosDirty = false;
			this.coneCos[0] = this.spotLight.coneCos; //1
		}
		if (this.spotLight.penumbraCosDirty) {
			this.spotLight.penumbraCosDirty = false;
			this.penumbraCos[0] = this.spotLight.penumbraCos; //1
		}
		if (this.spotLight.decayDirty) {
			this.spotLight.decayDirty = false;
			this.decay[0] = this.spotLight.decay; //1
		}
	}
	destroy() {
		this.spotLight = undefined;
		this.color = undefined;
		this.position = undefined;
		this.directional = undefined;
		this.distance = undefined;
		this.coneCos = undefined;
		this.penumbraCos = undefined;
		this.decay = undefined;
	}
}
export class PointData {
	color: Float32Array;
	position: Float32Array;
	decay: Float32Array;
	distance: Float32Array;
	pointLight: PointLight;
	static byteSize = 32;
	static size = 8;
	constructor(buffer: Float32Array, byteOffset: number, pointLight: PointLight) {
		this.pointLight = pointLight;
		this.position = new Float32Array(buffer.buffer, byteOffset, 3); //3
		this.distance = new Float32Array(buffer.buffer, byteOffset + 12, 1); //1
		this.color = new Float32Array(buffer.buffer, byteOffset + 16, 3); //3
		this.decay = new Float32Array(buffer.buffer, byteOffset + 28, 1); //1
	}
	update(camera: Camera) {
		const viewMatrix = camera.viewMatrix;
		if (this.pointLight.colorDirty) {
			this.pointLight.colorDirty = false;
			copyData(this.pointLight.color.toArray(), this.color);
		}
		if (this.pointLight.positionDirty) {
			this.pointLight.positionDirty = false;
			let position = this.pointLight.position.clone();
			position = position.applyMatrix4(viewMatrix);
			copyData(position.toArray(), this.position);
		}
		if (this.pointLight.decayDirty) {
			this.pointLight.decayDirty = false;
			this.decay[0] = this.pointLight.decay;
		}
		if (this.pointLight.distanceDirty) {
			this.pointLight.distanceDirty = false;
			this.distance[0] = this.pointLight.distance;
		}
	}
	destroy() {
		this.pointLight = undefined;
		this.color = undefined;
		this.position = undefined;
		this.decay = undefined;
		this.distance = undefined;
	}
}
export class DirtectData {
	directional: Float32Array;
	color: Float32Array;
	directionalLight: DirectionalLight;
	static byteSize = 32;
	static size = 8;
	constructor(buffer: Float32Array, byteOffset: number, directionalLight: DirectionalLight) {
		this.directionalLight = directionalLight;
		this.color = new Float32Array(buffer.buffer, byteOffset, 3); //3
		this.directional = new Float32Array(buffer.buffer, byteOffset + 16, 3); //3
	}
	update(camera: Camera) {
		const viewMatrix = camera.viewMatrix;
		if (this.directionalLight.colorDirty) {
			this.directionalLight.colorDirty = false;
			copyData(this.directionalLight.color.toArray(), this.color);
		}
		if (this.directionalLight.dirtectDirty) {
			this.directionalLight.dirtectDirty = false;
			let directional = this.directionalLight.directional.clone();
			directional = directional.transformDirection(viewMatrix);
			copyData(directional.toArray(), this.directional);
		}
	}
	destroy() {
		this.directionalLight = undefined;
		this.color = undefined;
		this.directional = undefined;
	}
}
function copyData(src: Array<number>, dis: Float32Array | Uint32Array) {
	src.forEach((element, index) => {
		dis[index] = element;
	});
}

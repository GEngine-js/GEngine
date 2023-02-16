import { AmbientLight } from "../light/AmbientLight";
import { DirectionalLight } from "../light/DirectionalLight";
import { PointLight } from "../light/PointLight";
import { SpotLight } from "../light/SpotLight";
import { FrameState } from "./FrameState";
import ShaderData from "../render/ShaderData";
import { BufferUsage } from "./WebGPUConstant";
import UniformBuffer from "../render/UniformBuffer";
import Camera from "../camera/Camera";
import { Light } from "../light/Light";
export default class LightManger {
	lightUniformBuffer: UniformBuffer;
	pointLights: PointLight[];

	spotLights: SpotLight[];

	dirtectLights: DirectionalLight[];

	ambientLight: AmbientLight;

	lightShaderData: ShaderData;

	lightCountDirty: boolean;

	constructor() {
		this.spotLights = [];
		this.pointLights = [];
		this.dirtectLights = [];
		this.ambientLight = undefined;
		this.lightCountDirty = false;
	}
	update(frameState: FrameState, camera: Camera) {
		this.updateLight(camera);
	}
	add(light) {
		this.lightCountDirty = true;
		if (light.type == "ambient") {
			this.ambientLight = light;
		} else if (light.type == "directional") {
			this.dirtectLights.push(light);
		} else if (light.type == "point") {
			this.pointLights.push(light);
		} else if (light.type == "spot") {
			this.spotLights.push(light);
		}
	}
	remove() {}
	private updateLight(camera: Camera) {
		this.updateLightData(camera);
		if (this.lightCountDirty) {
			this.lightCountDirty = false;
			if (this.lightShaderData) this.lightShaderData.destroy();
			this.createLightShaderData();
		}
	}
	private updateLightData(camera: Camera) {
		this.updateSpotLight(camera);
		this.updatePointLight(camera);
		this.updateDirtectLight(camera);
	}
	private updateSpotLight(camera: Camera) {
		this.spotLights.forEach((light) => {
			light.update(camera);
		});
	}
	private updatePointLight(camera: Camera) {
		this.pointLights.forEach((light) => {
			light.update(camera);
		});
	}
	private updateDirtectLight(camera: Camera) {
		this.dirtectLights.forEach((light) => {
			light.update(camera);
		});
	}
	private createLightShaderData() {
		this.lightShaderData = new ShaderData("light", 0, 2, 2);
		this.lightUniformBuffer = new UniformBuffer("read-only-storage", BufferUsage.Storage | BufferUsage.CopyDst);

		this.lightShaderData.setDefine("spotLightsCount", this.spotLights.length);
		this.lightShaderData.setDefine("pointLightsCount", this.pointLights.length);
		this.lightShaderData.setDefine("dirtectLightsCount", this.dirtectLights.length);
		this.lightShaderData.setDefine("ambientLightCount", this.ambientLight != undefined ? 1 : 0);
		if (this.ambientLight)
			this.lightUniformBuffer.setFloatVec3("ambientLight", () => {
				return this.ambientLight.color;
			});
		if (this.spotLights.length) {
			//初始化聚光灯
			this.lightUniformBuffer.setSpotLights(
				"spotLights",
				() => {
					return this.spotLights;
				},
				this.spotLights.length
			);
		}
		if (this.pointLights.length) {
			//点光源
			this.lightUniformBuffer.setPointLights(
				"pointLights",
				() => {
					return this.pointLights;
				},
				this.pointLights.length
			);
		}
		if (this.dirtectLights.length) {
			//方向光
			this.lightUniformBuffer.setDirtectLights(
				"dirtectLights",
				() => {
					return this.dirtectLights;
				},
				this.dirtectLights.length
			);
		}
		this.lightShaderData.setUniformBuffer("light", this.lightUniformBuffer);
	}

	public getAllLights(): Array<Light> {
		const result = [];
		return result.concat(this.spotLights, this.pointLights, this.dirtectLights);
	}

	destroy() {
		this.lightShaderData.destroy();
		this.lightUniformBuffer.destroy();
	}
}

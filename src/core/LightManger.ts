import { AmbientLight } from "../light/AmbientLight";
import { DirectionalLight } from "../light/DirectionalLight";
import { PointLight } from "../light/PointLight";
import { SpotLight } from "../light/SpotLight";
import { FrameState } from "./FrameState";
import ShaderData from "../render/ShaderData";
import { BufferUsage, TextureFormat } from "./WebGPUConstant";
import UniformBuffer from "../render/UniformBuffer";
import Camera from "../camera/Camera";
import { Light } from "../light/Light";
import Vector3 from "../math/Vector3";
import { LightMangerOptions } from "../core/WebGPUTypes";
import Texture from "../render/Texture";
import Sampler from "../render/Sampler";

export default class LightManger {
	lightUniformBuffer: UniformBuffer;
	pointLights: PointLight[];

	spotLights: SpotLight[];

	directLights: DirectionalLight[];

	ambientLight: AmbientLight;

	lightShaderData: ShaderData;

	lightCountDirty: boolean;

	private openShadow: boolean;

	constructor(options: LightMangerOptions) {
		this.spotLights = [];
		this.pointLights = [];
		this.directLights = [];
		this.ambientLight = new AmbientLight(new Vector3(1.0, 1.0, 1.0), 1.0);
		this.lightCountDirty = false;
		this.openShadow = options.openShadow;
	}
	update(frameState: FrameState, camera: Camera) {
		this.updateLight(camera);
	}
	add(light: Light) {
		this.lightCountDirty = true;
		if (light.type == "ambient") {
			this.ambientLight = <AmbientLight>light;
		} else if (light.type == "directional") {
			this.directLights.push(<DirectionalLight>light);
		} else if (light.type == "point") {
			this.pointLights.push(<PointLight>light);
		} else if (light.type == "spot") {
			this.spotLights.push(<SpotLight>light);
		}
	}
	remove(light: Light) {
		this.lightCountDirty = true;
		if (light.type == "ambient") {
			this.ambientLight = new AmbientLight(new Vector3(1.0, 1.0, 1.0), 1.0);
		} else if (light.type == "directional") {
			this.directLights.splice(this.directLights.indexOf(<DirectionalLight>light), 1);
		} else if (light.type == "point") {
			this.pointLights.splice(this.pointLights.indexOf(<PointLight>light), 1);
		} else if (light.type == "spot") {
			this.spotLights.splice(this.spotLights.indexOf(<SpotLight>light), 1);
		}
	}
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
		this.directLights.forEach((light) => {
			light.update(camera);
		});
	}
	private createLightShaderData() {
		this.lightShaderData = new ShaderData("light", 0, 2, 2);
		this.lightUniformBuffer = new UniformBuffer(
			"light",
			"read-only-storage",
			BufferUsage.Storage | BufferUsage.CopyDst
		);

		this.lightShaderData.setDefine("spotLightsCount", this.spotLights.length);
		this.lightShaderData.setDefine("pointLightsCount", this.pointLights.length);
		this.lightShaderData.setDefine("dirtectLightsCount", this.directLights.length);
		this.lightShaderData.setDefine("ambientLightCount", 1);
		if (this.ambientLight)
			this.lightUniformBuffer.setFloatVec4("ambientLight", () => {
				return this.ambientLight.ColorAndIntensity;
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
		if (this.directLights.length) {
			//方向光
			this.lightUniformBuffer.setDirtectLights(
				"directLights",
				() => {
					return this.directLights;
				},
				this.directLights.length
			);
		}

		if (this.openShadow) {
			this.lightShaderData.setDefine("openShadow", this.openShadow);
			const spotLightShadowMapTextureArray = this.createShadowMapTextureArray(this.spotLights);
			const pointLightShadowMapTextureArray = this.createShadowMapTextureArray(this.pointLights);
			const directLightShadowMapTextureArray = this.createShadowMapTextureArray(this.directLights);
			if (spotLightShadowMapTextureArray !== undefined)
				this.lightShaderData.setTexture("spotLightShadowMapTextureArray", spotLightShadowMapTextureArray);
			if (pointLightShadowMapTextureArray !== undefined)
				this.lightShaderData.setTexture("pointLightShadowMapTextureArray", pointLightShadowMapTextureArray);
			if (directLightShadowMapTextureArray !== undefined)
				this.lightShaderData.setTexture("directLightShadowMapTextureArray", directLightShadowMapTextureArray);
			this.lightShaderData.setSampler("shadowSampler", Sampler.baseSampler);
		}

		this.lightShaderData.setUniformBuffer("light", this.lightUniformBuffer);
	}

	public getAllLights(): Array<Light> {
		const result = [];
		return result.concat(this.spotLights, this.pointLights, this.directLights);
	}

	destroy() {
		this.lightShaderData.destroy();
		this.lightUniformBuffer.destroy();
	}

	createShadowMapTextureArray(lights: Array<Light>) {
		if (lights.length <= 0) return undefined;
		const shadowMapSources = [];
		for (let i = 0; i < lights.length; i++) {
			const light = lights[i];
			if (light.shadow) {
				const shadowMapTexture = light.shadow.getShadowMapTexture();
				const shadowMapSource = {
					source: shadowMapTexture,
					width: shadowMapTexture.textureProp.size.width,
					height: shadowMapTexture.textureProp.size.height,
					depth: 1,
					x: 0,
					y: 0,
					z: i
				};
				shadowMapSources.push(shadowMapSource);
			}
		}

		const shadowMapTextureArray = new Texture({
			size: {
				width: shadowMapSources[0].width,
				height: shadowMapSources[0].height,
				depth: shadowMapSources.length
			},
			sampleType: "depth",
			format: TextureFormat.Depth24Plus,
			usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT,
			data: shadowMapSources,
			viewFormats: "2d-array"
		});

		return shadowMapTextureArray;
	}
}

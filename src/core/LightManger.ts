import { AmbientLight } from "../light/AmbientLight";
import { DirectionalLight } from "../light/DirectionalLight";
import { PointLight } from "../light/PointLight";
import { SpotLight } from "../light/SpotLight";
import { FrameState } from "./FrameState";
import ShaderData from "../render/ShaderData";
import {
	TextureUsage,
	BufferUsage,
	TextureFormat,
	CompareFunction,
	SamplerBindingType,
	TextureSampleType,
	TextureViewDimension
} from "./WebGPUConstant";
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
	spotLightShadowMapTextureArray: Texture;
	pointLightShadowMapTextureArray: Texture;
	directLightShadowMapTextureArray: Texture;
	_testTexture: Texture;

	constructor(options: LightMangerOptions) {
		this.spotLights = [];
		this.pointLights = [];
		this.directLights = [];
		this.ambientLight = new AmbientLight(new Vector3(1.0, 1.0, 1.0), 0.2);
		this.lightCountDirty = true;
		this.openShadow = options.openShadow;
	}
	update(frameState: FrameState, camera: Camera) {
		this.checkLightShadowState();
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

	checkLightShadowState() {
		const lights = this.getAllLights();
		for (let i = 0; i < lights.length; i++) {
			const light = lights[i];
			if (light.shadowDirty) {
				light.shadowDirty = false;
				this.lightCountDirty = true;
			}
		}
	}

	updateLightShadow() {
		if (this.spotLightShadowMapTextureArray) this.spotLightShadowMapTextureArray.dirty = true;

		if (this.pointLightShadowMapTextureArray) this.pointLightShadowMapTextureArray.dirty = true;

		if (this.directLightShadowMapTextureArray) this.directLightShadowMapTextureArray.dirty = true;
	}

	private updateLight(camera: Camera) {
		if (this.lightCountDirty) {
			this.lightCountDirty = false;
			if (this.lightShaderData) this.lightShaderData.destroy();
			this.createLightShaderData();
		}
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

		shadowShaderData: {
			if (this.openShadow) {
				const spotLightShadowMapTextureArray = (this.spotLightShadowMapTextureArray =
					this.createShadowMapTextureArray(this.spotLights));
				const pointLightShadowMapTextureArray = (this.pointLightShadowMapTextureArray =
					this.createShadowMapTextureArray(this.pointLights));
				const directLightShadowMapTextureArray = (this.directLightShadowMapTextureArray =
					this.createShadowMapTextureArray(this.directLights));
				if (
					!spotLightShadowMapTextureArray &&
					!pointLightShadowMapTextureArray &&
					!directLightShadowMapTextureArray
				)
					break shadowShaderData;

				//define
				this.lightShaderData.setDefine("openShadow", this.openShadow);

				//matrix
				const spotLightMatrixArrayLength = this.setLightVPMatrixArray(
					"spotLightVPMatrixArray",
					this.spotLights
				);
				const pointLightMatrixArrayLength = this.setLightVPMatrixArray(
					"pointLightVPMatrixArray",
					this.pointLights
				);
				const directLightMatrixArrayLength = this.setLightVPMatrixArray(
					"directLightVPMatrixArray",
					this.directLights
				);
				this.lightShaderData.setDefine("spotLightShadowMapsCount", spotLightMatrixArrayLength);
				this.lightShaderData.setDefine("pointLightShadowMapsCount", pointLightMatrixArrayLength);
				this.lightShaderData.setDefine("directLightShadowMapsCount", directLightMatrixArrayLength);

				//texture,sample
				if (spotLightShadowMapTextureArray !== undefined) {
					if (spotLightShadowMapTextureArray.textureProp.size.depth != spotLightMatrixArrayLength)
						console.warn("spotLightShadowMap align has problem");
					this.lightShaderData.setTexture("spotLightShadowMapTextureArray", spotLightShadowMapTextureArray);
				}
				if (pointLightShadowMapTextureArray !== undefined) {
					if (pointLightShadowMapTextureArray.textureProp.size.depth != pointLightMatrixArrayLength)
						console.warn("pointLightShadowMap align has problem");
					this.lightShaderData.setTexture("pointLightShadowMapTextureArray", pointLightShadowMapTextureArray);
				}
				if (directLightShadowMapTextureArray !== undefined) {
					if (directLightShadowMapTextureArray.textureProp.size.depth != directLightMatrixArrayLength)
						console.warn("directLightShadowMap align has problem");
					this.lightShaderData.setTexture(
						"directLightShadowMapTextureArray",
						directLightShadowMapTextureArray
					);
					// this._testTexture = directLightShadowMapTextureArray
				}
				this.lightShaderData.setSampler(
					"shadowSampler",
					new Sampler({ compare: CompareFunction.Less }, { type: SamplerBindingType.Comparison })
				);
				// this.lightShaderData.setSampler("shadowSampler", new Sampler());
			}
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

		if (shadowMapSources.length <= 0) return undefined;

		const shadowMapTextureArray = new Texture({
			size: {
				width: shadowMapSources[0].width,
				height: shadowMapSources[0].height,
				depth: shadowMapSources.length
			},
			fixedSize: true,
			sampleType: TextureSampleType.Depth,
			format: TextureFormat.Depth24Plus,
			usage: TextureUsage.TextureBinding | TextureUsage.CopyDst,
			data: shadowMapSources,
			viewFormats: TextureViewDimension.E2dArray
		});

		return shadowMapTextureArray;
	}

	setLightVPMatrixArray(ArrayName: string, lights: Array<Light>) {
		if (lights.length) {
			const lightWithShadowArray = [];
			for (let i = 0; i < lights.length; i++) {
				const light = lights[i];
				if (!light.shadow) continue;
				lightWithShadowArray.push(light);
			}

			this.lightUniformBuffer.setMatrix4Array(
				ArrayName,
				() => {
					const matrix4Array = [];
					for (let i = 0; i < lightWithShadowArray.length; i++) {
						const light = lightWithShadowArray[i];
						light.shadow.update(light);
						matrix4Array.push(light.shadow.camera.vpMatrix);
					}
					return matrix4Array;
				},
				lightWithShadowArray.length
			);

			return lightWithShadowArray.length;
		}
	}
}

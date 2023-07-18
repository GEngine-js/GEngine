import Camera from "../camera/Camera";
import { LightMangerOptions, LightType, UniformEnum } from "../core/WebGPUTypes";
import { AmbientLight } from "../light/AmbientLight";
import { DirectionalLight } from "../light/DirectionalLight";
import { Light } from "../light/Light";
import { PointLight } from "../light/PointLight";
import { DirectionalLightCascadedShadow } from "../light/shadows/DirectionalLightCascadedShadow";
import { SpotLight } from "../light/SpotLight";
import Vector3 from "../math/Vector3";
import Sampler from "../render/Sampler";
import ShaderData from "../render/ShaderData";
import Texture from "../render/Texture";
import UniformBuffer from "../render/UniformBuffer";
import { FrameState } from "./FrameState";
import {
	TextureUsage,
	BufferUsage,
	TextureFormat,
	CompareFunction,
	SamplerBindingType,
	TextureSampleType,
	TextureViewDimension,
	BufferBindingType
} from "./WebGPUConstant";

export default class LightManger {
	lightUniformBuffer: UniformBuffer;
	shadowUniformBuffer: UniformBuffer;
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
	directLightCascadedShadowMapTextureArray: Texture;
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
		if (light.lightType == LightType.AmbientLight) {
			this.ambientLight = <AmbientLight>light;
		} else if (light.lightType == LightType.DirectionalLight) {
			if (light instanceof DirectionalLight && light.shadow instanceof DirectionalLightCascadedShadow)
				light.shadow.initSetting(light);
			this.directLights.push(<DirectionalLight>light);
		} else if (light.lightType == LightType.PointLight) {
			this.pointLights.push(<PointLight>light);
		} else if (light.lightType == LightType.SpotLight) {
			this.spotLights.push(<SpotLight>light);
		}
	}
	remove(light: Light) {
		this.lightCountDirty = true;
		if (light.lightType == LightType.AmbientLight) {
			this.ambientLight = new AmbientLight(new Vector3(1.0, 1.0, 1.0), 1.0);
		} else if (light.lightType == LightType.DirectionalLight) {
			this.directLights.splice(this.directLights.indexOf(<DirectionalLight>light), 1);
		} else if (light.lightType == LightType.PointLight) {
			this.pointLights.splice(this.pointLights.indexOf(<PointLight>light), 1);
		} else if (light.lightType == LightType.SpotLight) {
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
		if (this.directLightCascadedShadowMapTextureArray) this.directLightCascadedShadowMapTextureArray.dirty = true;
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
		this.lightUniformBuffer = new UniformBuffer({
			label: "light",
			type: BufferBindingType.ReadOnlyStorage,
			usage: BufferUsage.Storage | BufferUsage.CopyDst
		});

		this.lightShaderData.setDefine("spotLightsCount", this.spotLights.length);
		this.lightShaderData.setDefine("pointLightsCount", this.pointLights.length);
		this.lightShaderData.setDefine("dirtectLightsCount", this.directLights.length);
		this.lightShaderData.setDefine("ambientLightCount", 1);

		this.lightShaderData.setDefine("USE_SPOTLIGHT", this.spotLights.length);
		this.lightShaderData.setDefine("USE_POINTLIGHT", this.pointLights.length);
		this.lightShaderData.setDefine("USE_DIRTECTLIGHT", this.directLights.length);
		this.lightShaderData.setDefine("USE_AMBIENTLIGHT", 1);
		if (this.ambientLight)
			this.lightUniformBuffer.setUniform(
				"ambientLight",
				() => {
					return this.ambientLight.ColorAndIntensity;
				},
				UniformEnum.FloatVec4
			);
		if (this.spotLights.length) {
			// 初始化聚光灯
			this.lightUniformBuffer.setUniform(
				"spotLights",
				() => {
					return this.spotLights;
				},
				UniformEnum.SpotLights,
				this.spotLights.length
			);
		}
		if (this.pointLights.length) {
			// 点光源
			this.lightUniformBuffer.setUniform(
				"pointLights",
				() => {
					return this.pointLights;
				},
				UniformEnum.PointLights,
				this.pointLights.length
			);
		}
		if (this.directLights.length) {
			// 方向光
			this.lightUniformBuffer.setUniform(
				"directLights",
				() => {
					return this.directLights;
				},
				UniformEnum.DirtectLights,
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
				const directLightCascadedShadowMapTextureArray = (this.directLightCascadedShadowMapTextureArray =
					this.createShadowMapTextureArray(this.directLights, true));
				if (
					!spotLightShadowMapTextureArray &&
					!pointLightShadowMapTextureArray &&
					!directLightShadowMapTextureArray &&
					!directLightCascadedShadowMapTextureArray
				)
					break shadowShaderData;

				// define
				this.lightShaderData.setDefine("openShadow", this.openShadow);
				this.lightShaderData.setDefine("OPEN_SHADOW", this.openShadow);

				// shadowUniformBuffer
				this.shadowUniformBuffer = new UniformBuffer({
					label: "shadow",
					type: BufferBindingType.ReadOnlyStorage,
					usage: BufferUsage.Storage | BufferUsage.CopyDst
				});

				// matrix,near,far...
				const spotLightWithShadowCount = this.setShadowUniform(
					"spotLightShadows",
					this.spotLights,
					UniformEnum.SpotLightShadows
				);
				const pointLightWithShadowCount = this.setShadowUniform(
					"pointLightShadows",
					this.pointLights,
					UniformEnum.PointLightShadows
				);
				const directLightWithShadowCount = this.setShadowUniform(
					"directLightShadows",
					this.directLights,
					UniformEnum.DirtectLightShadows
				);
				const directLightWithCascadedShadowCount = this.setShadowUniform(
					"directLightCascadedShadows",
					this.directLights,
					UniformEnum.DirtectLightCascadedShadows,
					true
				);
				this.lightShaderData.setUniformBuffer("shadow", this.shadowUniformBuffer);

				this.lightShaderData.setDefine("spotLightShadowMapsCount", spotLightWithShadowCount);
				this.lightShaderData.setDefine("pointLightShadowMapsCount", pointLightWithShadowCount);
				this.lightShaderData.setDefine("directLightShadowMapsCount", directLightWithShadowCount);
				this.lightShaderData.setDefine(
					"directLightCascadedShadowMapsCount",
					directLightWithCascadedShadowCount
				);

				this.lightShaderData.setDefine("USE_SPOTLIGHT_SHADOWMAP", spotLightWithShadowCount);
				this.lightShaderData.setDefine("USE_POINTLIGHT_SHADOWMAP", pointLightWithShadowCount);
				this.lightShaderData.setDefine("USE_DIRECTLIGHT_SHADOWMAP", directLightWithShadowCount);
				this.lightShaderData.setDefine("USE_DIRECTLIGHT_CASCADEDSHADOWMAP", directLightWithCascadedShadowCount);
				// texture,sample
				if (spotLightShadowMapTextureArray !== undefined) {
					if (spotLightShadowMapTextureArray.textureProp.size.depth != spotLightWithShadowCount)
						console.warn("spotLightShadowMap align has problem");
					this.lightShaderData.setTexture("spotLightShadowMapTextureArray", spotLightShadowMapTextureArray);
					this.lightShaderData.setDefine("SPOTLIGHT_SHADOWMAP_TEXTUREARRAY", true);
					// this._testTexture = spotLightShadowMapTextureArray
				}
				if (pointLightShadowMapTextureArray !== undefined) {
					if (pointLightShadowMapTextureArray.textureProp.size.depth != pointLightWithShadowCount)
						console.warn("pointLightShadowMap align has problem");
					this.lightShaderData.setTexture("pointLightShadowMapTextureArray", pointLightShadowMapTextureArray);
					this.lightShaderData.setDefine("POINTLIGHT_SHADOWMAP_TEXTUREARRAY", true);
					// this._testTexture = pointLightShadowMapTextureArray;
				}
				if (directLightShadowMapTextureArray !== undefined) {
					if (directLightShadowMapTextureArray.textureProp.size.depth != directLightWithShadowCount)
						console.warn("directLightShadowMap align has problem");
					this.lightShaderData.setTexture(
						"directLightShadowMapTextureArray",
						directLightShadowMapTextureArray
					);
					this.lightShaderData.setDefine("DIRECTLIGHT_SHADOWMAP_TEXTUREARRAY", true);
					// this._testTexture = directLightShadowMapTextureArray
				}
				if (directLightCascadedShadowMapTextureArray !== undefined) {
					if (
						directLightCascadedShadowMapTextureArray.textureProp.size.depth !=
						directLightWithCascadedShadowCount
					)
						console.warn("directLightCascadedShadowMap align has problem");
					this.lightShaderData.setTexture(
						"directLightCascadedShadowMapTextureArray",
						directLightCascadedShadowMapTextureArray
					);
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

	createShadowMapTextureArray(lights: Array<Light>, onlyPickCascadedShadow = false) {
		if (lights.length <= 0) return undefined;
		const shadowMapSources = [];
		for (let i = 0; i < lights.length; i++) {
			const light = lights[i];
			if (light.shadow) {
				if (light.shadow.isCascadedShadow && !onlyPickCascadedShadow) continue;
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
			label: `${shadowMapSources[0].source?.textureProp?.label}TextureArray`,
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

	setShadowUniform(
		uniformName: string,
		lights: Array<Light>,
		uniformType: UniformEnum,
		onlyPickCascadedShadow = false
	) {
		if (lights.length) {
			const lightWithShadowArray = [];
			for (let i = 0; i < lights.length; i++) {
				const light = lights[i];
				if (!light.shadow) continue;
				if (onlyPickCascadedShadow) {
					if (light.shadow.isCascadedShadow) lightWithShadowArray.push(light);
				} else {
					if (!light.shadow.isCascadedShadow) lightWithShadowArray.push(light);
				}
			}

			if (lightWithShadowArray.length === 0) return 0;

			this.shadowUniformBuffer.setUniform(
				uniformName,
				() => {
					return lightWithShadowArray;
				},
				uniformType,
				lightWithShadowArray.length
			);

			return lightWithShadowArray.length;
		}
	}
}

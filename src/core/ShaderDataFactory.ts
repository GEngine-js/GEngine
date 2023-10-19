import BlinnPhongMaterial from "../material/BlinnPhongMaterial";
import { Material } from "../material/Material";
import PbrMaterial from "../material/PbrMaterial";
import ShaderMaterial from "../material/ShaderMaterial";
import { Mesh } from "../mesh/Mesh";
import ShaderData from "../render/ShaderData";
import UniformBuffer from "../render/UniformBuffer";
import { addUniformToShaderData } from "../utils/uniformUtils";
import textureCache from "./TextureCache";
import { BufferBindingType, BufferUsage } from "./WebGPUConstant";
import { ShaderDataEnum, UniformEnum } from "./WebGPUTypes";

export class ShaderDataFactory {
	static createShaderData(params: {
		shaderDataEnum?: ShaderDataEnum;
		label?: string;
		mesh?: Mesh;
		material?: Material;
	}) {
		const { shaderDataEnum, label, mesh, material } = params;
		material.ready = true;
		switch (shaderDataEnum) {
			case ShaderDataEnum.COLOR:
				return ShaderDataFactory.createColorShaderData(mesh);
			case ShaderDataEnum.PBR:
				return ShaderDataFactory.createPbrShaderData(mesh, <PbrMaterial>material);
			case ShaderDataEnum.BLINNPHONG:
				return ShaderDataFactory.createBlinnPhongShaderData(mesh, material);
			case ShaderDataEnum.POINT:
				return ShaderDataFactory.createPointShaderData(mesh, material);
			case ShaderDataEnum.SKYBOX:
				return ShaderDataFactory.createSkyBoxShaderData(mesh, material);
			case ShaderDataEnum.CUSTOM:
				return ShaderDataFactory.createCustomShaderData(label, mesh, <ShaderMaterial>material);
			default:
				throw Error("No corresponding type found");
		}
	}
	/** **********************************UniformBuffer*************************************************/
	static createColorUniformBuffer(label: string, mesh: Mesh) {
		return new UniformBuffer({ label }).setUniform(
			"modelMatrix",
			() => {
				return mesh.modelMatrix;
			},
			UniformEnum.Mat4
		);
	}
	static createPointUniformBuffer(label: string, mesh?: Mesh, material?: Material) {
		return new UniformBuffer({ label })
			?.setUniform(
				"modelMatrix",
				() => {
					return mesh.modelMatrix;
				},
				UniformEnum.Mat4
			)
			?.setUniform("color", material, UniformEnum.Color)
			?.setUniform("size", mesh, UniformEnum.Float);
	}
	static createBlinnPhongUniformBuffer(label: string, mesh?: Mesh, material?: Material) {
		return new UniformBuffer({ label })
			?.setUniform(
				"modelMatrix",
				() => {
					return mesh.modelMatrix;
				},
				UniformEnum.Mat4
			)
			?.setUniform("color", material, UniformEnum.Color)
			?.setUniform("opacity", material, UniformEnum.Float)
			?.setUniform(
				"normalMtrix",
				() => {
					return mesh.normalMatrix;
				},
				UniformEnum.Mat4
			)
			?.setUniform("emissive", material, UniformEnum.Color)
			?.setUniform("shininess", material, UniformEnum.Float)
			?.setUniform("specular", material, UniformEnum.Color);
	}
	static createSkyBoxUniformBuffer(label: string, mesh?: Mesh) {
		return new UniformBuffer({ label })?.setUniform(
			"modelMatrix",
			() => {
				return mesh.modelMatrix;
			},
			UniformEnum.Mat4
		);
	}
	static createSpriteUniformBuffer(label: string, mesh?: Mesh) {
		return new UniformBuffer({ label })
			?.setUniform(
				"modelMatrix",
				() => {
					return mesh.modelMatrix;
				},
				UniformEnum.Mat4
			)
			?.setUniform("color", mesh, UniformEnum.Color)
			?.setUniform("rotation", mesh, UniformEnum.Float)
			?.setUniform("center", mesh, UniformEnum.FloatVec2)
			?.setUniform("opacity", mesh, UniformEnum.Float);
	}
	static createPBRUniformBuffer(label: string, mesh?: Mesh, material?: PbrMaterial) {
		const uniformBuffer = new UniformBuffer({ label })
			?.setUniform(
				"modelMatrix",
				() => {
					return mesh.modelMatrix;
				},
				UniformEnum.Mat4
			)
			?.setUniform("color", material, UniformEnum.Color)
			?.setUniform("opacity", material, UniformEnum.Float)
			?.setUniform(
				"normalMtrix",
				() => {
					return mesh.normalMatrix;
				},
				UniformEnum.Mat4
			)
			?.setUniform("emissive", material, UniformEnum.Color)
			?.setUniform("metalness", material, UniformEnum.Float)
			?.setUniform("roughness", material, UniformEnum.Float);
		if (material?.normalTexture) uniformBuffer.setUniform("normalScale", material, UniformEnum.FloatVec2);
		if (material?.aoTexture) uniformBuffer.setUniform("aoTextureIntensity", material, UniformEnum.Float);
		return uniformBuffer;
	}
	static createCustomUniformBuffer(shaderData: ShaderData, uniformBufferParams, mesh?: Mesh) {
		const {
			type = "uniform",
			usage = BufferUsage.Uniform | BufferUsage.CopyDst,
			uniforms,
			uid,
			binding,
			buffer,
			bufferSize,
			visibility
		} = uniformBufferParams;
		const uniformBuffer = new UniformBuffer({
			label: uid,
			type: <BufferBindingType>type,
			usage: <BufferUsage>usage,
			binding,
			buffer,
			visibility,
			size: buffer?.size ?? bufferSize
		});
		shaderData.setUniformBuffer(uid, uniformBuffer);
		if (!buffer) ShaderDataFactory.addUniformToShaderData(uniforms, shaderData, uniformBuffer, mesh);
	}
	/** ******************************ShaderData********************************************/
	static createColorShaderData(mesh?: Mesh) {
		const label = "color";
		return new ShaderData(label, 0)?.setUniformBuffer(
			label,
			ShaderDataFactory.createColorUniformBuffer(label, mesh)
		);
	}
	static createPointShaderData(mesh?: Mesh, material?: Material) {
		const label = "point";
		const shaderData = new ShaderData(label, 0)
			?.setUniformBuffer(label, ShaderDataFactory.createPointUniformBuffer(label, mesh, material))
			?.setDefine("USE_INSTANCE", true);
		if (material.baseTexture)
			shaderData
				?.setTexture("baseColorTexture", material.baseTexture)
				?.setSampler("baseColorSampler", material.baseSampler || textureCache.defaultSampler);
		return shaderData;
	}
	static createBlinnPhongShaderData(mesh?: Mesh, material?: Material) {
		const label = "phong";
		const shaderData = new ShaderData(label, 0)?.setUniformBuffer(
			label,
			ShaderDataFactory.createBlinnPhongUniformBuffer(label, mesh, material)
		);
		if (material.baseTexture)
			shaderData
				?.setTexture("baseColorTexture", material.baseTexture)
				?.setSampler("baseColorSampler", material.baseSampler || textureCache.defaultSampler);

		if ((<BlinnPhongMaterial>material).normalTexture)
			shaderData
				?.setTexture("normalTexture", (<BlinnPhongMaterial>material).normalTexture)
				?.setSampler(
					"normalSampler",
					(<BlinnPhongMaterial>material).normalSampler || textureCache.defaultSampler
				);

		return shaderData;
	}
	static createPbrShaderData(mesh?: Mesh, material?: PbrMaterial) {
		const label = "pbr";
		const shaderData = new ShaderData(label, 0)?.setUniformBuffer(
			label,
			ShaderDataFactory.createPBRUniformBuffer(label, mesh, material)
		);
		if (material.baseTexture)
			shaderData
				?.setTexture("baseColorTexture", material.baseTexture)
				?.setSampler("baseColorSampler", material.baseSampler || textureCache.defaultSampler);
		if (material.metalnessRoughnessTexture)
			shaderData
				?.setTexture("metalnessRoughnessTexture", material.metalnessRoughnessTexture)
				?.setSampler(
					"metalnessRoughnessSampler",
					material.metalnessRoughnessSampler || textureCache.defaultSampler
				);

		if (material.normalTexture) {
			shaderData
				?.setTexture("normalTexture", material.normalTexture)
				?.setSampler("normalSampler", material.normalSampler || textureCache.defaultSampler);
		}
		if (material.aoTexture)
			shaderData
				?.setTexture("aoTexture", material.aoTexture)
				?.setSampler("aoSampler", material.aoSampler || textureCache.defaultSampler);

		if (material.emissiveTexture)
			shaderData
				?.setTexture("emissiveTexture", material.emissiveTexture)
				?.setSampler("emissiveSampler", material.emissiveSampler || textureCache.defaultSampler);

		if (material.IBLRender)
			shaderData
				?.setTexture("specularEnvTexture", textureCache.getTexture("specular"))
				?.setSampler("specularEnvSampler", material.specularEnvSampler || textureCache.defaultSampler);

		return shaderData;
	}
	static createSpriteShaderData(mesh?: Mesh, material?: Material) {
		const label = "sprite";
		const shaderData = new ShaderData(label, 0)?.setUniformBuffer(
			label,
			ShaderDataFactory.createSpriteUniformBuffer(label, mesh)
		);
		if (material.baseTexture)
			shaderData
				?.setTexture("baseColorTexture", material.baseTexture)
				?.setSampler("baseColorSampler", material.baseSampler || textureCache.defaultSampler);
		return shaderData;
	}
	static createSkyBoxShaderData(mesh?: Mesh, material?: Material) {
		const label = "skybox";
		return new ShaderData(label, 0)
			?.setUniformBuffer(label, ShaderDataFactory.createSkyBoxUniformBuffer(label, mesh))
			?.setTexture("baseTexture", material.baseTexture)
			?.setSampler("baseSampler", material.baseSampler);
	}
	static createCustomShaderData(label: string, mesh?: Mesh, material?: ShaderMaterial) {
		const { uniformBuffers, uniformTextureAndSampler } = material.shaderMaterialParms;
		const shaderData = new ShaderData(label, 0);
		// fill uniformBuffer
		uniformBuffers?.forEach?.((uniformBuffer) =>
			ShaderDataFactory.createCustomUniformBuffer(shaderData, uniformBuffer, mesh)
		);
		// fill texture and sampler
		if (uniformTextureAndSampler) ShaderDataFactory.addUniformToShaderData(uniformTextureAndSampler, shaderData);
		return shaderData;
	}
	/** ***********************************utils************************************************/
	static addUniformToShaderData(uniforms, shaderData?: ShaderData, uniformBuffer?: UniformBuffer, mesh?: Mesh) {
		if (!uniforms) return;
		const uniformsNames = Object.getOwnPropertyNames(uniforms);
		uniformsNames.map((uniformsName) => {
			addUniformToShaderData(uniformsName, uniforms[uniformsName], shaderData, mesh, uniformBuffer);
		});
	}
}

import { IUniform, Uniforms } from "../core/WebGPUTypes";
import ShaderData from "../render/ShaderData";
import UniformBuffer from "../render/UniformBuffer";
import { UniformEnum } from "../render/Uniforms";
const uniformArrayNames = ["float-array", "vec2-array", "vec3-array", "vec4-array"];
export function checkContainFloatType(uniforms) {
	let result = 0;
	let hasArraytype = false;
	const uniformsNames = Object.getOwnPropertyNames(uniforms);
	uniformsNames.map((uniformsName) => {
		if (uniforms[uniformsName].type == "texture" || uniforms[uniformsName].type == "sampler") {
			result += 0;
		} else {
			if (
				uniformArrayNames.find((name) => {
					return name === uniforms[uniformsName].type;
				})
			) {
				hasArraytype = true;
			} else {
				result += 1;
			}
		}
	});
	return {
		hasFloat: result,
		hasArraytype
	};
}
export function addUniformToShaderData(
	name: string,
	uniform: IUniform,
	uniforms: Uniforms,
	shaderData: ShaderData,
	uniformBuffer?: UniformBuffer
) {
	switch (uniform.type) {
		case "float":
			uniformBuffer.setUniform(
				name,
				() => {
					return uniforms[name].value;
				},
				UniformEnum.Float
			);
			break;
		case "vec2":
			uniformBuffer.setUniform(
				name,
				() => {
					return uniforms[name].value;
				},
				UniformEnum.FloatVec2
			);
			break;
		case "vec3":
			uniformBuffer.setUniform(
				name,
				() => {
					return uniforms[name].value;
				},
				UniformEnum.FloatVec3
			);
			break;
		case "color":
			uniformBuffer.setUniform(
				name,
				() => {
					return uniforms[name].value;
				},
				UniformEnum.Color
			);
			break;
		case "vec4":
			uniformBuffer.setUniform(
				name,
				() => {
					return uniforms[name].value;
				},
				UniformEnum.FloatVec4
			);
		case "mat2":
			uniformBuffer.setUniform(
				name,
				() => {
					return uniforms[name].value;
				},
				UniformEnum.Mat2
			);
			break;
		case "mat3":
			uniformBuffer.setUniform(
				name,
				() => {
					return uniforms[name].value;
				},
				UniformEnum.Mat3
			);
		case "mat4":
			uniformBuffer.setUniform(
				name,
				() => {
					return uniforms[name].value;
				},
				UniformEnum.Mat4
			);
			break;
		case "float-array":
			uniformBuffer.setUniform(
				name,
				() => {
					return uniforms[name].value;
				},
				UniformEnum.FloatArray,
				uniforms[name].value.length
			);
			break;
		case "vec2-array":
			uniformBuffer.setUniform(
				name,
				() => {
					return uniforms[name].value;
				},
				UniformEnum.Vec2Array,
				uniforms[name].value.length
			);
			break;
		case "vec3-array":
			uniformBuffer.setUniform(
				name,
				() => {
					return uniforms[name].value;
				},
				UniformEnum.Vec3Array,
				uniforms[name].value.length
			);
			break;
		case "vec4-array":
			uniformBuffer.setUniform(
				name,
				() => {
					return uniforms[name].value;
				},
				UniformEnum.Vec4Array,
				uniforms[name].value.length
			);
			break;
		case "texture":
			shaderData.setTexture(name, () => {
				return uniforms[name].value;
			});
			break;
		case "sampler":
			shaderData.setSampler(name, () => {
				return uniforms[name].value;
			});
			break;
		default:
			throw new Error("not match unifrom type");
			break;
	}
}

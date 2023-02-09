import { IUniform, Uniforms } from "../core/WebGPUTypes";
import ShaderData from "../render/ShaderData";
import UniformBuffer from "../render/UniformBuffer";

export function checkContainFloatType(uniforms) {
	let result = 0;
	const uniformsNames = Object.getOwnPropertyNames(uniforms);
	uniformsNames.map((uniformsName) => {
		if (uniforms[uniformsName].type == "texture" || uniforms[uniformsName].type == "sampler") {
			result += 0;
		} else {
			result += 1;
		}
	});
	return result;
}
export function addUniformToShaderData(
	name: string,
	uniform: IUniform,
	uniforms: Uniforms,
	shaderData: ShaderData,
	uniformBuffer?: UniformBuffer
) {
	switch (uniform.type) {
		case "vec2":
			uniformBuffer.setFloatVec2(name, () => {
				return uniforms[name].value;
			});
			break;
		case "vec3":
			uniformBuffer.setFloatVec3(name, () => {
				return uniforms[name].value;
			});
			break;
		case "color":
			uniformBuffer.setColor(name, () => {
				return uniforms[name].value;
			});
			break;
		case "vec4":
			uniformBuffer.setFloatVec4(name, () => {
				return uniforms[name].value;
			});
		case "mat2":
			uniformBuffer.setMatrix2(name, () => {
				return uniforms[name].value;
			});
			break;
		case "mat3":
			uniformBuffer.setMatrix3(name, () => {
				return uniforms[name].value;
			});
		case "mat4":
			uniformBuffer.setMatrix4(name, () => {
				return uniforms[name].value;
			});
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

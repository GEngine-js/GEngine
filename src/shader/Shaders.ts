import {ShaderChunk} from './shaderChunk/ShaderChunk';
function reduceComma(shader) {
	//对所有的include处理
	const str = resolveIncludes(shader);
	return str;
}
const includePattern = /^[ \t]*#include +<([\w\d./]+)>/gm;
export const shaders = {
	prelude: {
		fragmentSource: reduceComma(''),
		vertexSource: reduceComma('')
	},

}
function resolveIncludes(string) {
	return string.replace(includePattern, includeReplacer);
}

function includeReplacer(match, include) {
	const string = ShaderChunk[include];
	if (string === undefined) {
		throw new Error(`Can not resolve #include <${include}>`);
	}

	return resolveIncludes(string);
}
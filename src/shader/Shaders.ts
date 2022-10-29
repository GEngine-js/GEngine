import {ShaderChunk} from './shaderChunk/ShaderChunk';
import phongVert from './material/phongVert';
import phongFrag from './material/phongFrag';
function reduceComma(shader) {
	//对所有的include处理
	const str = resolveIncludes(shader);
	return str;
}
const includePattern = /^[ \t]*#include +<([\w\d./]+)>/gm;
export const shaders = {
	phong: {
		fragmentSource: reduceComma(phongFrag),
		vertexSource: reduceComma(phongVert)
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
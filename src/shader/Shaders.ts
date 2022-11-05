import ShaderChunk from './shaderChunk/ShaderChunk';
import phongVert from './material/phongVert';
import phongFrag from './material/phongFrag';
function reduceComma(shader) {
	//对所有的include处理
	const str = resolveIncludes(shader);
	return str;
}
const includePattern = /^[ \t]*#include +<([\w\d./]+)>/gm;
let currentDefines={};
const shaders = {
	phong: {
		frag: phongFrag,
		vert: phongVert,
	},
}

function resolveIncludes(string) {
	return string.replace(includePattern, includeReplacer);
}

function includeReplacer(match, include) {
	const excute = ShaderChunk[include];
	if (excute === undefined) {
		throw new Error(`Can not resolve #include <${include}>`);
	}
    const result=excute(currentDefines);
	return resolveIncludes(result);
}
export default function getVertFrag(type,defines={}){
	const excuteFunc=shaders[type];
	currentDefines=defines;
    return {
		vert:reduceComma(excuteFunc.vert(currentDefines)),
		frag:reduceComma(excuteFunc.frag(currentDefines))
	}
}
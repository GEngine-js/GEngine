import ShaderChunk from './shaderChunk/ShaderChunk';
import phongVert from './material/phongVert';
import phongFrag from './material/phongFrag';
import colorFrag from './material/colorFrag';
import colorVert from './material/colorVert';
import pbrFrag from './material/pbrFrag';
import pbrVert from './material/pbrVert';
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
	color:{
		frag:colorFrag,
		vert:colorVert
	},
	pbr:{
        frag:pbrFrag,
		vert:pbrVert,
	}
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
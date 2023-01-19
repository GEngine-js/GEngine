/*
 * @Author: junwei.gu junwei.gu@jiduauto.com
 * @Date: 2022-10-18 16:30:53
 * @LastEditors: junwei.gu junwei.gu@jiduauto.com
 * @LastEditTime: 2023-01-18 18:19:45
 * @FilePath: \GEngine\src\shader\Shaders.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import ShaderChunk from './shaderChunk/ShaderChunk';
import phongVert from './material/phongVert';
import phongFrag from './material/phongFrag';
import colorFrag from './material/colorFrag';
import colorVert from './material/colorVert';
import pbrFrag from './material/pbrFrag';
import pbrVert from './material/pbrVert';
import skyBoxFrag from './material/skyBoxFrag';
import skyBoxVert from './material/skyBoxVert';
import quadFrag from './material/quadFrag';
import quadVert from './material/quadVert';
import pbr_vs from './material/pbr_vs';
import pbr_fs from './material/pbr_fs';
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
	},
	skybox:{
		frag:skyBoxFrag,
		vert:skyBoxVert
	},
	resolve:{
      frag:quadFrag,
	  vert:quadVert
	},
	pbr_mat:{
      frag:pbr_fs,
	  vert:pbr_vs
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
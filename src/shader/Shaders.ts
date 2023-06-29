import { billboard_fs } from "./material/billboard_fs";
import { billboard_vs } from "./material/billboard_vs";
import colorFrag from "./material/colorFrag";
import colorVert from "./material/colorVert";
import pbr_fs from "./material/pbr_fs";
import pbr_vs from "./material/pbr_vs";
import pbrFrag from "./material/pbrFrag";
import pbrVert from "./material/pbrVert";
import phongFrag from "./material/phongFrag";
import phongVert from "./material/phongVert";
import { point_fs } from "./material/point_fs";
import { point_vs } from "./material/point_vs";
import quadFrag from "./material/quadFrag";
import quadVert from "./material/quadVert";
import skyBoxFrag from "./material/skyBoxFrag";
import skyBoxVert from "./material/skyBoxVert";
import blendFrag from "./postProcess/blend/blendFrag";
import Blur from "./postProcess/bloom/Blur";
import LuminosityHigh from "./postProcess/bloom/LuminosityHigh";
import ShaderChunk from "./shaderChunk/ShaderChunk";
import shadowMapDebuggerFrag from "./shaderChunk/shadow/shadowMapDebuggerFrag";
import shadowMapDebuggerVert from "./shaderChunk/shadow/shadowMapDebuggerVert";
import shadowMapFrag from "./shaderChunk/shadow/shadowMapFrag";
import shadowMapVert from "./shaderChunk/shadow/shadowMapVert";

function reduceComma(shader) {
	// 对所有的include处理
	return shader != undefined ? resolveIncludes(shader) : undefined;
}
const includePattern = /^[ \t]*#include +<([\w\d./]+)>/gm;
let currentDefines = {};
const shaders = {
	phong: {
		frag: phongFrag,
		vert: phongVert
	},
	color: {
		frag: colorFrag,
		vert: colorVert
	},
	pbr: {
		frag: pbrFrag,
		vert: pbrVert
	},
	skybox: {
		frag: skyBoxFrag,
		vert: skyBoxVert
	},
	resolve: {
		frag: quadFrag,
		vert: quadVert
	},
	pbr_mat: {
		frag: pbr_fs,
		vert: pbr_vs
	},
	blur: {
		frag: Blur,
		vert: quadVert
	},
	luminosityHigh: {
		frag: LuminosityHigh,
		vert: quadVert
	},
	blend: {
		frag: blendFrag,
		vert: quadVert
	},
	shadowMapDebugger: {
		frag: shadowMapDebuggerFrag,
		vert: shadowMapDebuggerVert
	},
	shadowMap: {
		vert: shadowMapVert,
		frag: shadowMapFrag
	},
	billboard: {
		vert: billboard_vs,
		frag: billboard_fs
	},
	point: {
		vert: point_vs,
		frag: point_fs
	}
};

function resolveIncludes(string) {
	return string.replace(includePattern, includeReplacer);
}

function includeReplacer(match, include) {
	const excute = ShaderChunk[include];
	if (excute === undefined) {
		throw new Error(`Can not resolve #include <${include}>`);
	}
	const result = excute(currentDefines);
	return resolveIncludes(result);
}
export default function getVertFrag(type, defines = {}) {
	const excuteFunc = shaders[type];
	currentDefines = defines;
	return {
		vert: reduceComma(excuteFunc?.vert(currentDefines)),
		frag: reduceComma(excuteFunc?.frag(currentDefines))
	};
}

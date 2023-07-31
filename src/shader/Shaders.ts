import colorFrag from "./material/colorFrag.wgsl";
import colorVert from "./material/colorVert.wgsl";

import pbr_fs from "./material/pbr_fs.wgsl";
import pbr_vs from "./material/pbr_vs.wgsl";
import pbrFrag from "./material/pbrFrag";
import pbrVert from "./material/pbrVert";

import phongFrag from "./material/phongFrag.wgsl";
import phongVert from "./material/phongVert.wgsl";
import point_fs from "./material/point_fs.wgsl";
import point_vs from "./material/point_vs.wgsl";
import quadFrag from "./material/quadFrag.wgsl";
import quadVert from "./material/quadVert.wgsl";
import skyBoxFrag from "./material/skyBoxFrag.wgsl";
import skyBoxVert from "./material/skyBoxVert.wgsl";
import sprite_fs from "./material/sprite_fs.wgsl";
import sprite_vs from "./material/sprite_vs.wgsl";

import blendFrag from "./postProcess/blend/blendFrag.wgsl";
import Blur from "./postProcess/bloom/Blur.wgsl";
import LuminosityHigh from "./postProcess/bloom/LuminosityHigh.wgsl";

import ShaderChunk from "./shaderChunk/ShaderChunk";

import shadowMapDebuggerFrag from "./shadow/shadowMapDebuggerFrag.wgsl";
import shadowMapDebuggerVert from "./shadow/shadowMapDebuggerVert.wgsl";
import shadowMapFrag from "./shadow/shadowMapFrag.wgsl";
import shadowMapVert from "./shadow/shadowMapVert.wgsl";

import { WGSLParseDefines } from "./WGSLParseDefines";

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
	sprite: {
		vert: sprite_vs,
		frag: sprite_fs
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
	const partShader = ShaderChunk[include];
	if (partShader === undefined) {
		throw new Error(`Can not resolve #include <${include}>`);
	}
	const result = WGSLParseDefines(partShader, currentDefines);
	return resolveIncludes(result);
}
export default function getVertFrag(type, defines = {}) {
	const shader = shaders[type];
	currentDefines = defines;
	return {
		vert: shader?.vert ? reduceComma(WGSLParseDefines(shader.vert, currentDefines)) : undefined,
		frag: shader?.frag ? reduceComma(WGSLParseDefines(shader.frag, currentDefines)) : undefined
	};
}

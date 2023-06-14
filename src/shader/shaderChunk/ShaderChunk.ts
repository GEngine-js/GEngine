import { FragInput } from "./attribute/FragInput";
import { VertexInput } from "./attribute/VertexInput";
import { VertexOutput } from "./attribute/VertexOutput";
import { SystemUniform } from "./common/SystemUniform";
import environment from "./environment/environment";
import { instanceVertHeader, instanceVertMain } from "./instance/Instance";
import light from "./light/light";
import lightCommon from "./light/lightCommon";
import { getNormalByNormalTexture, getTBN, getNormal } from "./normal/getNormalBackUp";
import brdf from "./pbr/brdf";
import ibl from "./pbr/ibl";
import pbrFunction from "./pbr/pbrFunction";
import pbrStruct from "./pbr/pbrStruct";
import pbrTexture from "./pbr/pbrTexture";
import pbrUtils from "./pbr/pbrUtils";
import blinn_phong from "./phong/blinn_phong";
import phongFunction from "./phong/phongFunction";
import phongUtils from "./phong/phongUtils";
// import getNormal from "./normal/getNormal";
import { skinVertHeader, skinVertMain } from "./skin/SkinVert";
import { PbrMaterialStruct } from "./struct/PbrMaterialStruct";
const ShaderChunk = {
	light: light,
	brdf: brdf,
	phongFunction: phongFunction,
	phongUtils: phongUtils,
	lightCommon: lightCommon,
	pbrStruct: pbrStruct,
	pbrFunction: pbrFunction,
	pbrTexture: pbrTexture,
	pbrUtils: pbrUtils,
	environment: environment,
	blinn_phong: blinn_phong,
	getNormal: getNormal,
	getTBN: getTBN,
	getNormalByNormalTexture: getNormalByNormalTexture,
	ibl: ibl,
	skinVertMain,
	skinVertHeader,
	FragInput,
	VertexInput,
	VertexOutput,
	PbrMaterialStruct,
	SystemUniform,
	instanceVertMain,
	instanceVertHeader
};
export default ShaderChunk;

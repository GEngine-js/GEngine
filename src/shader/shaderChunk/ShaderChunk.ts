import attributeChunks from "./attribute";
import commonChunks from "./common";
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
import { skinVertHeader, skinVertMain } from "./skin/SkinVert";
import { PbrMaterialStruct } from "./struct/PbrMaterialStruct";
const ShaderChunk = {
	light,
	brdf,
	phongFunction,
	phongUtils,
	lightCommon,
	pbrStruct,
	pbrFunction,
	pbrTexture,
	pbrUtils,
	environment,
	blinn_phong,
	getNormal,
	getTBN,
	getNormalByNormalTexture,
	ibl,
	skinVertMain,
	skinVertHeader,
	PbrMaterialStruct,
	instanceVertMain,
	instanceVertHeader,
	...attributeChunks,
	...commonChunks
};
export default ShaderChunk;

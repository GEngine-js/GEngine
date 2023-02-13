import light from "./light/light";
import lightCommon from "./light/lightCommon";
import brdf from "./pbr/brdf";
import pbrFunction from "./pbr/pbrFunction";
import pbrStruct from "./pbr/pbrStruct";
import pbrTexture from "./pbr/pbrTexture";
import pbrUtils from "./pbr/pbrUtils";
import phongFunction from "./phong/phongFunction";
import phongUtils from "./phong/phongUtils";
import environment from "./environment/environment";
import blinn_phong from "./phong/blinn_phong";
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
	blinn_phong: blinn_phong
};
export default ShaderChunk;

import attributeChunks from "./attribute";
import commonChunks from "./common";
import environment from "./environment/environment"; // TODO
import instanceChunks from "./instance";
import light from "./light/light"; // TODO
import lightCommon from "./light/lightCommon"; // TODO
import normalChunks from "./normal";
import pbrChunks from "./pbr";
import pbrFunction from "./pbr/pbrFunction";
import phongChunks from "./phong";
import { skinVertHeader, skinVertMain } from "./skin/SkinVert";
import { PbrMaterialStruct } from "./struct/PbrMaterialStruct";

const ShaderChunk = {
	skinVertMain,
	skinVertHeader,
	PbrMaterialStruct,
	...attributeChunks,
	...commonChunks,
	environment,
	...instanceChunks,
	light,
	lightCommon,
	...normalChunks,
	...pbrChunks,
	pbrFunction,
	...phongChunks
};

export default ShaderChunk;

import attributeChunks from "./attribute";
import commonChunks from "./common";
import environment from "./environment/environment"; // TODO
import instanceChunks from "./instance";
import light from "./light/light.wgsl"; // TODO
import lightCommon from "./light/lightCommon.wgsl"; // TODO
import normalChunks from "./normal";
import pbrChunks from "./pbr";
import pbrFunction from "./pbr/pbrFunction";
import phongChunks from "./phong";
import skinChunks from "./skin";
import structChunks from "./struct";

const ShaderChunk = {
	...attributeChunks,
	...commonChunks,
	environment,
	...instanceChunks,
	light,
	lightCommon,
	...normalChunks,
	...pbrChunks,
	pbrFunction,
	...phongChunks,
	...skinChunks,
	...structChunks
};

export default ShaderChunk;

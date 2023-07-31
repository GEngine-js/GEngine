import brdf from "./brdf.wgsl";
import ibl from "./ibl.wgsl";
import pbrStruct from "./pbrStruct.wgsl";
import pbrTexture from "./pbrTexture.wgsl";
import pbrUtils from "./pbrUtils.wgsl";

const pbr = {
	brdf,
	ibl,
	pbrStruct,
	pbrTexture,
	pbrUtils
};

export default pbr;

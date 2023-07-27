import getNormal from "./getNormal.wgsl";
import getNormalByNormalTexture from "./getNormalByNormalTexture.wgsl";
import getTBN from "./getTBN.wgsl";

const normalChunks = {
	getNormal,
	getNormalByNormalTexture,
	getTBN
};

export default normalChunks;

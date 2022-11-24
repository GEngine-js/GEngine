import light from './light/light';
import lightCommon from './light/lightCommon';
import brdf from './pbr/brdf';
import phongFunction from './phong/phongFunction';
import phongUtils from './phong/phongUtils';
const ShaderChunk={
    light:light,
    brdf:brdf,
    phongFunction:phongFunction,
    phongUtils:phongUtils,
    lightCommon:lightCommon,
}
export default ShaderChunk;
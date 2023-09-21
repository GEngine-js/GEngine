import { TypedArray } from "../core/WebGPUTypes";
import Texture from "../render/Texture";

export function isTypeArray(array): array is TypedArray {
	return array.buffer != undefined;
}
export function isTexture(texture): texture is Texture {
	return texture instanceof Texture;
}

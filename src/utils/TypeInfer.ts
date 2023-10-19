import { TypedArray } from "../core/WebGPUTypes";
import Texture from "../render/Texture";

export function isTypeArray(array): array is TypedArray {
	return array.buffer != undefined;
}
export function isTexture(texture): texture is Texture {
	return texture instanceof Texture;
}
export function isHTMLCanvasElement(canvas): canvas is HTMLCanvasElement {
	return canvas instanceof HTMLCanvasElement;
}
export function isImageBitmap(imageBitmap): imageBitmap is ImageBitmap {
	return imageBitmap instanceof ImageBitmap;
}
export function isHTMLVideoElement(video): video is HTMLVideoElement {
	return video instanceof HTMLVideoElement;
}
// export function isVideoFrame(videoFrame): videoFrame is VideoFrame {
// 	return videoFrame instanceof VideoFrame;
// }

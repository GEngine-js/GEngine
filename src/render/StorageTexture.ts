import { WebGPUTextureProps } from "../core/WebGPUTypes";
import Texture from "./Texture";

export class StorageTexture extends Texture {
	constructor(params: WebGPUTextureProps) {
		super(params);
	}
	get layoutType(): any {
		// const { access = StorageTextureAccess.WriteOnly, viewFormats, format } = this.textureProp;
		// return {
		// 	viewDimension: defaultValue(viewFormats, "2d"),
		// 	access,
		// 	format
		// };
		return null;
	}
}

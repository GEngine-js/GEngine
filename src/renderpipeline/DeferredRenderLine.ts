import Texture from "../render/Texture";
import IBaseRenderLine from "./IBaseRenderLine";
export default class DeferredRenderLine implements IBaseRenderLine {
	getOutputTexture(): Texture {
		throw new Error("Method not implemented.");
	}
	render() {
		throw new Error("Method not implemented.");
	}
}

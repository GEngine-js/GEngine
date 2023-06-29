import Texture from "../render/Texture";
import IBaseRenderLine from "./IBaseRenderLine";
export default class DeferredRenderLine implements IBaseRenderLine {
	setSize(width: number, height: number): void {
		throw new Error("Method not implemented.");
	}
	getOutputTexture(): Texture {
		throw new Error("Method not implemented.");
	}
	render() {
		throw new Error("Method not implemented.");
	}
}

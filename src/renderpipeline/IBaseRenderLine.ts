import Camera from "../camera/Camera";
import { FrameState } from "../core/FrameState";
import Texture from "../render/Texture";
export default interface IBaseRenderLine {
	render(frameState: FrameState, camera?: Camera): void;
	getOutputTexture(): Texture;
}

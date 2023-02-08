import Camera from "../camera/Camera";
import { FrameState } from "../core/FrameState";
export default interface IBaseRenderLine {
	render(frameState: FrameState, camera?: Camera): void;
}

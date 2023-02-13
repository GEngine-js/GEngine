import Context from "../render/Context";
import { BasicPass } from "../pass/BasicPass";
import IBaseRenderLine from "./IBaseRenderLine";
import { FrameState } from "../core/FrameState";
import ResolveFrame from "../post-process/ResolveFrame";
import Camera from "../camera/Camera";
import { ShadowPass } from "../pass/ShadowPass";

export default class ForwardRenderLine implements IBaseRenderLine {
	private basicPass: BasicPass;
	private resolveFrame: ResolveFrame;
	protected shadowPass: ShadowPass;
	constructor(public context: Context) {
		this.basicPass = new BasicPass(context);
		this.shadowPass = new ShadowPass(context);
		this.resolveFrame = new ResolveFrame();
	}
	render(frameState: FrameState, camera?: Camera) {
		// this.shadowPass.beforRender();
		// this.shadowPass.render(frameState.renderQueue, camera);

		this.basicPass.beforRender();
		this.basicPass.render(frameState.renderQueue, camera);
		this.basicPass.afterRender();
		this.resolveFrame.render(frameState.context, this.basicPass.getColorTexture(0));
	}
	destroy() {
		this.basicPass = undefined;
	}
}

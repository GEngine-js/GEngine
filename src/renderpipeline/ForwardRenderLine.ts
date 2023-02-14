import Context from "../render/Context";
import { BasicPass } from "../pass/BasicPass";
import IBaseRenderLine from "./IBaseRenderLine";
import { FrameState } from "../core/FrameState";
import ResolveFrame from "../post-process/ResolveFrame";
import Camera from "../camera/Camera";
import BloomPostEffect from "../post-process/BloomPostEffect";

export default class ForwardRenderLine implements IBaseRenderLine {
	private basicPass: BasicPass;
	private resolveFrame: ResolveFrame;
	bloomEffect: BloomPostEffect;
	constructor(public context: Context) {
		this.basicPass = new BasicPass(context);
		this.bloomEffect = new BloomPostEffect({
			width: context.presentationSize.width,
			height: context.presentationSize.height,
			strength: 0.8,
			radius: 1.0,
			threshold: 0.5
		});
		this.resolveFrame = new ResolveFrame();
	}
	render(frameState: FrameState, camera?: Camera) {
		this.basicPass.beforRender();
		this.basicPass.render(frameState.renderQueue, camera);
		this.basicPass.afterRender();
		this.bloomEffect.render(this.context, this.basicPass.getColorTexture());
		this.resolveFrame.render(frameState.context, this.bloomEffect.currentRenderTarget.getColorTexture(0));
	}
	destroy() {
		this.basicPass = undefined;
	}
}

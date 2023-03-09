import Context from "../render/Context";
import { BasicPass } from "../pass/BasicPass";
import IBaseRenderLine from "./IBaseRenderLine";
import { FrameState } from "../core/FrameState";
import Camera from "../camera/Camera";
import { ShadowPass } from "../pass/ShadowPass";
import PostEffectCollection from "../post-process/PostEffectCollection";
import BloomPostEffect from "../post-process/BloomPostEffect";

export default class ForwardRenderLine implements IBaseRenderLine {
	private basicPass: BasicPass;
	private postEffectCollection: PostEffectCollection;
	protected shadowPass: ShadowPass;
	constructor(public context: Context) {
		this.basicPass = new BasicPass(context);
		this.shadowPass = new ShadowPass(context);
		this.postEffectCollection = new PostEffectCollection();
		const { width, height } = context.presentationSize;
		// const bloom=new BloomPostEffect({
		// 	width,
		// 	height,
		// 	strength:0.3,
		// 	radius:0.3,
		// 	threshold:0.5
		// });
		// this.postEffectCollection.add(bloom)
	}
	render(frameState: FrameState, camera?: Camera) {
		// this.shadowPass.beforeRender();
		// this.shadowPass.render(frameState, camera);
		// this.shadowPass.afterRender();

		this.basicPass.beforeRender();
		this.basicPass.render(frameState, camera);
		this.basicPass.afterRender();
		// @ts-ignore
		// this.postEffectCollection.render(frameState.context, this.shadowPass.getDepthTexture());
		this.postEffectCollection.render(frameState.context, this.basicPass.getColorTexture(0));
	}
	destroy() {
		this.basicPass = undefined;
	}
}

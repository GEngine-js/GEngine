import Camera from "../camera/Camera";
import { FrameState } from "../core/FrameState";
import { BasicPass } from "../pass/BasicPass";
import { ShadowPass } from "../pass/ShadowPass";
import Context from "../render/Context";
import Texture from "../render/Texture";
import IBaseRenderLine from "./IBaseRenderLine";

export default class ForwardRenderLine implements IBaseRenderLine {
	private basicPass: BasicPass;
	protected shadowPass: ShadowPass;
	constructor(public context: Context) {
		this.basicPass = new BasicPass(context);
		this.shadowPass = new ShadowPass(context);
		// const bloom=new BloomPostEffect({
		// 	width,
		// 	height,
		// 	strength:0.3,
		// 	radius:0.3,
		// 	threshold:0.5
		// });
		// this.postEffectCollection.add(bloom)
	}
	getOutputTexture(): Texture {
		return this.basicPass.getColorTexture(0);
		// return this.shadowPass.getDepthTexture()
	}
	render(frameState: FrameState, camera?: Camera) {
		this.shadowPass.render(frameState, camera);

		this.basicPass.beforeRender(frameState);
		this.basicPass.render(frameState, camera);
		this.basicPass.afterRender();
	}
	destroy() {
		this.basicPass = undefined;
	}
}

import Context from "../render/Context";
import { BasicPass } from "../pass/BasicPass";
import IBaseRenderLine from "./IBaseRenderLine";
import { FrameState } from "../core/FrameState";
import Camera from "../camera/Camera";
import { ShadowPass } from "../pass/ShadowPass";
import Texture from "../render/Texture";

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
	}
	render(frameState: FrameState, camera?: Camera) {
		// this.shadowPass.beforeRender();
		this.shadowPass.render(frameState, camera);
		// this.shadowPass.afterRender();

		this.basicPass.beforeRender();
		this.basicPass.render(frameState, camera);
		this.basicPass.afterRender();
	}
	destroy() {
		this.basicPass = undefined;
	}
}

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
	setSize(width: number, height: number) {
		this.basicPass.setSize(width, height);
		this.shadowPass.setSize(width, height);
	}
	destroy() {
		this.basicPass = undefined;
	}
}

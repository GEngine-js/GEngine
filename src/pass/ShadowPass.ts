import Attachment from "../render/Attachment";
import Context from "../render/Context";
import Pass from "./Pass";
import RenderTarget from "../render/RenderTarget";
import DrawCommand from "../render/DrawCommand";
import RenderQueue from "../core/RenderQueue";
import { TextureFormat, TextureUsage } from "../core/WebGPUConstant";
import Texture from "../render/Texture";
import Camera from "../camera/Camera";
import { Light } from "../light/Light";
import { BaseShadow } from "../light/shadows/BaseShadow";
import { FrameState } from "../core/FrameState";

export class ShadowPass extends Pass {
	constructor(context: Context) {
		super(context);
		this.init(context);
	}

	beforeRender(): void {
		return;
	}

	render(frameState: FrameState, camera?: Camera) {
		const { renderQueue, context } = frameState;
		const lights = context.lightManger.getAllLights();
		if (lights.length === 0) return;

		for (let i = 0; i < lights.length; i++) {
			const light = lights[i];
			const shadow = light.shadow;
			this.setRenderTarget(shadow);
			super.beforeRender();

			renderQueue.sort();
			renderQueue.preRender(camera, this.context, this.passRenderEncoder);
			renderQueue.transparentRender(camera, this.context, this.passRenderEncoder);
			renderQueue.opaqueRender(camera, this.context, this.passRenderEncoder);
		}
	}

	afterRender(): void {
		return;
	}

	private setRenderTarget(shadow: BaseShadow) {
		const shadowMapTexture = shadow.getShadowMapTexture();
		const depthAttachment = new Attachment(1.0, { texture: shadowMapTexture });
		this.renderTarget.depthAttachment = depthAttachment;
	}

	private init(context: Context) {
		this.createRenderTarget(context);
	}
	private createRenderTarget(context: Context) {
		this.renderTarget = new RenderTarget("render", []);
	}
}

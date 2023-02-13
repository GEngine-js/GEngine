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

export class ShadowPass extends Pass {
	constructor(context: Context) {
		super(context);
		this.init(context);
	}
	render(renderQueue: RenderQueue, camera?: Camera) {
		renderQueue.sort();
		renderQueue.preRender(camera, this.context, this.passRenderEncoder);
		renderQueue.transparentRender(camera, this.context, this.passRenderEncoder);
		renderQueue.opaqueRender(camera, this.context, this.passRenderEncoder);
	}
	beforRender(light: Light) {
		const shadows = light.getAllShadow();
		for (const [camera, shadow] of shadows) {
			this.setRenderTarget(shadow);
		}
		super.beforRender();
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
		this.renderTarget = new RenderTarget("render");
	}
}

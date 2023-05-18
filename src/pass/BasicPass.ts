import Camera from "../camera/Camera";
import { FrameState } from "../core/FrameState";
import { TextureFormat, TextureUsage } from "../core/WebGPUConstant";
import Color from "../math/Color";
import Attachment from "../render/Attachment";
import Context from "../render/Context";
import DrawCommand from "../render/DrawCommand";
import RenderTarget from "../render/RenderTarget";
import Texture from "../render/Texture";
import Pass from "./Pass";

export class BasicPass extends Pass {
	skyboxDrawComand: DrawCommand;
	constructor(context: Context) {
		super(context);
		this.init(context);
	}

	beforeRender(frameState) {
		super.beforeRender();
		this.updateRenderTarget(frameState);
	}

	render(frameState: FrameState, camera?: Camera) {
		const { renderQueue, lightManger } = frameState;

		renderQueue.sort();
		renderQueue.preRender(camera, this.context, this.passRenderEncoder);
		renderQueue.transparentRender(camera, this.context, this.passRenderEncoder, undefined, undefined, lightManger);
		renderQueue.opaqueRender(camera, this.context, this.passRenderEncoder, undefined, undefined, lightManger);
		renderQueue.debugQueueRender(camera, this.context, this.passRenderEncoder);
	}
	private init(context: Context) {
		this.createRenderTarget(context);
	}
	private createRenderTarget(context: Context) {
		const { width, height, depth } = this.context.presentationSize;
		const colorTexture = new Texture({
			label: "basicPassColor",
			size: { width, height, depth },
			format: this.context.presentationFormat,
			usage: TextureUsage.RenderAttachment | TextureUsage.TextureBinding
		});
		const depthTexture = new Texture({
			label: "basicPassDepth",
			size: { width, height, depth },
			format: TextureFormat.Depth24Plus,
			usage: TextureUsage.RenderAttachment
		});
		const colorAttachment = new Attachment({ r: 0.0, g: 0.0, b: 0.0, a: 0.0 }, { texture: colorTexture });
		const depthAttachment = new Attachment(1.0, { texture: depthTexture });
		this.renderTarget = new RenderTarget("render", [colorAttachment], depthAttachment);
	}

	private updateRenderTarget(frameState) {
		if (frameState.background instanceof Color) {
			const clearValue = {
				r: frameState.background.red,
				g: frameState.background.green,
				b: frameState.background.blue,
				a: 1.0
			};
			this.renderTarget.colorAttachments[0].value = clearValue;
		}
	}
}

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

	beforeRender(frameState: FrameState) {
		this.updateRenderTarget(frameState);

		super.beforeRender();
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
		const { width, height, depth } = context.presentationSize;
		const colorTexture = new Texture({
			label: "basicPassColor",
			textureDescriptor: {
				size: { width, height, depth },
				format: this.context.presentationFormat,
				usage: TextureUsage.RenderAttachment | TextureUsage.TextureBinding
			}
		});
		const depthTexture = new Texture({
			label: "basicPassDepth",
			textureDescriptor: {
				size: { width, height, depth },
				format: TextureFormat.Depth24Plus,
				usage: TextureUsage.RenderAttachment
			}
		});
		const colorAttachment = new Attachment({ r: 0.0, g: 0.0, b: 0.0, a: 0.0 }, { texture: colorTexture });
		const depthAttachment = new Attachment(1.0, { texture: depthTexture });
		this.renderTarget = new RenderTarget("render", [colorAttachment], depthAttachment);
	}
	public setSize(width: number, height: number): void {
		this.renderTarget.setSize(width, height, 1);
	}
	private updateRenderTarget(frameState: FrameState) {
		if (frameState?.background?.value instanceof Color) {
			const { red, green, blue } = frameState.background.value;
			const opacity = frameState.background?.opacity;
			const clearValue = {
				r: red,
				g: green,
				b: blue,
				a: opacity ?? 1.0
			};
			this.renderTarget.colorAttachments[0].value = clearValue;
		}
	}
}

import Attachment from "../render/Attachment";
import Context from "../render/Context";
import Pass from "./Pass";
import RenderTarget from "../render/RenderTarget";
import DrawCommand from "../render/DrawCommand";
import RenderQueue from "../core/RenderQueue";
import { TextureFormat, TextureUsage } from "../core/WebGPUConstant";
import Texture from "../render/Texture";
import Camera from "../camera/Camera";
import { FrameState } from "../core/FrameState";

export class BasicPass extends Pass {
	skyboxDrawComand: DrawCommand;
	constructor(context: Context) {
		super(context);
		this.init(context);
	}
	render(frameState: FrameState, camera?: Camera) {
		const { renderQueue } = frameState;

		renderQueue.sort();
		renderQueue.preRender(camera, this.context, this.passRenderEncoder);
		renderQueue.transparentRender(camera, this.context, this.passRenderEncoder);
		renderQueue.opaqueRender(camera, this.context, this.passRenderEncoder);
	}
	private init(context: Context) {
		this.createRenderTarget(context);
	}
	private createRenderTarget(context: Context) {
		const colorTexture = new Texture({
			size: this.context.presentationSize,
			format: this.context.presentationFormat,
			usage: TextureUsage.RenderAttachment | TextureUsage.TextureBinding
		});
		const depthTexture = new Texture({
			size: this.context.presentationSize,
			format: TextureFormat.Depth24Plus,
			usage: TextureUsage.RenderAttachment
		});
		const colorAttachment = new Attachment({ r: 0.5, g: 0.5, b: 0.5, a: 1.0 }, { texture: colorTexture });
		const depthAttachment = new Attachment(1.0, { texture: depthTexture });
		this.renderTarget = new RenderTarget("render", [colorAttachment], depthAttachment);
	}
}

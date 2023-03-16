import Camera from "../camera/Camera";
import { FrameState } from "../core/FrameState";
import { TextureFormat, TextureUsage } from "../core/WebGPUConstant";
import Attachment from "../render/Attachment";
import Context from "../render/Context";
import { Target } from "../render/RenderState";
import RenderTarget from "../render/RenderTarget";
import Texture from "../render/Texture";
import Pass from "./Pass";

export class DeferredPass extends Pass {
	render(frameState: FrameState, camera?: Camera): void {
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
		const { width, height, depth } = this.context.presentationSize;
		const positionTexture = new Texture({
			label: "positionTexture",
			size: { width, height, depth },
			format: TextureFormat.RGBA32Float,
			usage: TextureUsage.RenderAttachment | TextureUsage.TextureBinding
		});
		const normalTexture = new Texture({
			label: "normalTexture",
			size: { width, height, depth },
			format: TextureFormat.RGBA32Float,
			usage: TextureUsage.RenderAttachment | TextureUsage.TextureBinding
		});

		const albedoTexture = new Texture({
			label: "albedoTexture",
			size: { width, height, depth },
			format: TextureFormat.BGRA8Unorm,
			usage: TextureUsage.RenderAttachment
		});
		const depthTexture = new Texture({
			label: "deferredPassDepth",
			size: { width, height, depth },
			format: TextureFormat.Depth24Plus,
			usage: TextureUsage.RenderAttachment
		});
		const positionAttachment = new Attachment({ r: 0.0, g: 0.0, b: 0.0, a: 0.0 }, { texture: positionTexture });
		const normalAttachment = new Attachment({ r: 0.0, g: 0.0, b: 0.0, a: 0.0 }, { texture: normalTexture });
		const albedoAttachment = new Attachment({ r: 0.0, g: 0.0, b: 0.0, a: 0.0 }, { texture: albedoTexture });
		const depthAttachment = new Attachment(1.0, { texture: depthTexture });
		this.renderTarget = new RenderTarget(
			"render",
			[positionAttachment, normalAttachment, albedoAttachment],
			depthAttachment
		);

		//create targets
		const positionTarget = new Target({
			format: TextureFormat.RGBA32Float
		});
		const normalTarget = new Target({
			format: TextureFormat.RGBA32Float
		});
		const albedoTarget = new Target({
			format: TextureFormat.BGRA8Unorm
		});
	}
}

import { PassType } from "../core/WebGPUTypes";
import Attachment from "./Attachment";
import Context from "./Context";
import QuerySet from "./QuerySet";
import Texture from "./Texture";

export default class RenderTarget {
	public context: Context;
	private _renderPassDescriptor: GPURenderPassDescriptor;
	private renderEncoder: GPURenderPassEncoder;
	private commandEncoder: GPUCommandEncoder | null;
	private computeEncoder: GPUComputePassEncoder;
	constructor(
		public type: PassType,
		public colorAttachments?: Attachment[],
		public depthAttachment?: Attachment,
		public stencilAttachment?: Attachment,
		public querySet?: QuerySet
	) {
		this.renderEncoder = undefined;
		this.computeEncoder = undefined;
		this._renderPassDescriptor = undefined;
		this.commandEncoder = undefined;
		this.context = undefined;
	}
	get renderPassDescriptor() {
		this._renderPassDescriptor = this.getRenderPassDescriptor();
		return this._renderPassDescriptor;
	}
	public getColorTexture(index: number = 0): Texture {
		const colAtt = this.colorAttachments[index];
		if (colAtt) {
			return colAtt.texture as Texture;
		} else {
			return null;
		}
	}
	public getDepthTexture(): Texture {
		if (this.depthAttachment) {
			return this.depthAttachment.texture as Texture;
		}
	}
	private getRenderPassDescriptor(): GPURenderPassDescriptor | null {
		this.depthAttachment?.texture?.update(this.context);
		return {
			...(this.colorAttachments && {
				colorAttachments: this.colorAttachments.map((colorAttachment) => {
					colorAttachment?.texture?.update && colorAttachment?.texture?.update(this.context);
					return {
						view:
							//暂时这么写
							colorAttachment.texture.gpuTexture.createView() || undefined,
						resolveTarget:
							colorAttachment.resolveTarget != undefined
								? colorAttachment.resolveTarget.gpuTexture.createView()
								: undefined,
						clearValue: colorAttachment.value,
						loadOp: colorAttachment.op,
						storeOp: colorAttachment.storeOp
					} as GPURenderPassColorAttachment;
				})
			}),
			...((this.depthAttachment || this.stencilAttachment) && {
				depthStencilAttachment: {
					view: this.depthAttachment?.texture?.gpuTexture?.createView() || undefined,
					depthLoadOp: this.depthAttachment?.op || "clear",
					depthClearValue: this.depthAttachment?.value || 1.0,
					depthStoreOp: this.depthAttachment?.storeOp || "store"
					// stencilLoadOp: this.stencilAttachment?.op || "clear",
					// stencilClearValue: this.stencilAttachment?.value || 0,
					// stencilStoreOp: this.stencilAttachment?.storeOp || "store",
				} as GPURenderPassDepthStencilAttachment
			})
		};
	}

	public beginRenderPassEncoder(context: Context) {
		if (!this.context) this.context = context;
		const { device } = this.context;
		this.commandEncoder = device.createCommandEncoder();
		this.renderEncoder = this.commandEncoder.beginRenderPass(this.renderPassDescriptor);
		return this.renderEncoder;
	}
	public endRenderPassEncoder() {
		this.renderEncoder?.end();
		this.context.device.queue.submit([this.commandEncoder.finish()]);
		this.commandEncoder = null;
		this.renderEncoder = null;
	}
	public beginComputePassEncoder(context: Context) {
		if (!this.context) this.context = context;
		const { device } = this.context;
		this.commandEncoder = device.createCommandEncoder();
		this.computeEncoder = this.commandEncoder.beginComputePass();
		return this.computeEncoder;
	}
	public endComputePassEncoder() {
		this.computeEncoder?.end();
		this.context.device.queue.submit([this.commandEncoder.finish()]);
		this.commandEncoder = null;
		this.renderEncoder = null;
	}
	resize(width: number, height: number) {
		const size = {
			width,
			height,
			depth: (<Texture>this.colorAttachments[0]?.texture)?.textureProp?.size.depth || 1
		};
		for (let i = 0; i < this.colorAttachments.length; ++i) {
			if (this.colorAttachments[i].texture) {
				const resizedTexture = new Texture({
					...(<Texture>this.colorAttachments[i].texture).textureProp,
					size
				});
				resizedTexture.update(this.context);
				(<Texture>this.colorAttachments[i].texture).destroy();
				this.colorAttachments[i].texture = resizedTexture;
				this.renderPassDescriptor.colorAttachments[i].view = resizedTexture.gpuTexture.createView();
			}
		}

		if (this.depthAttachment.texture) {
			const resizedTexture = new Texture({
				...(<Texture>this.depthAttachment.texture).textureProp,
				size
			});
			resizedTexture.update(this.context);
			(<Texture>this.depthAttachment.texture).destroy();
			this.depthAttachment.texture = resizedTexture;
			this.renderPassDescriptor.depthStencilAttachment.view = resizedTexture.gpuTexture.createView();
		}
	}
}

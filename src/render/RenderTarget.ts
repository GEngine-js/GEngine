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
	texture: any;
	constructor(
		public type: PassType,
		public colorAttachments: Attachment[],
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
		this.checkSize();
		this.depthAttachment?.texture?.update(this.context);
		return {
			...(this.colorAttachments && {
				colorAttachments: this.colorAttachments.map((colorAttachment) => {
					colorAttachment?.texture?.update && colorAttachment?.texture?.update(this.context);
					return {
						view:
							//暂时这么写
							colorAttachment.texture.textureView || undefined,
						resolveTarget:
							colorAttachment.resolveTarget != undefined
								? colorAttachment.resolveTarget.textureView
								: undefined,
						clearValue: colorAttachment.value,
						loadOp: colorAttachment.op,
						storeOp: colorAttachment.storeOp
					} as GPURenderPassColorAttachment;
				})
			}),
			...((this.depthAttachment || this.stencilAttachment) && {
				depthStencilAttachment: {
					view: this.depthAttachment?.texture?.textureView || undefined,
					depthLoadOp: this.depthAttachment?.op || "clear",
					depthClearValue: this.depthAttachment?.value || 1.0,
					depthStoreOp: this.depthAttachment?.storeOp || "store",
					depthReadOnly: this.depthAttachment?.readOnly || false
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
	private checkSize() {
		const { width, height, depth } = this.context.presentationSize;
		if (this.depthAttachment.texture) {
			const size = this.depthAttachment?.texture?.textureProp?.size;
			if (width != size?.width || height != size?.height || depth != size?.depth) {
				this.depthAttachment.texture.setSize(width, height, depth);
			}
		}
		if (this.colorAttachments) {
			this.colorAttachments.forEach((colorAttachment) => {
				if (colorAttachment.texture) {
					const size = colorAttachment?.texture?.textureProp?.size;
					if (size && (width != size?.width || height != size?.height || depth != size?.depth))
						colorAttachment.texture.setSize(width, height, depth);
				}
			});
		}
	}
	destroy() {
		if (this.colorAttachments) {
			this.colorAttachments.forEach((colorAttachment) => {
				if (colorAttachment.texture) {
					colorAttachment.texture.destroy();
				}
			});
		}
		if (this.depthAttachment.texture) this.depthAttachment.texture.destroy();
	}
}

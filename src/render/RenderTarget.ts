import { PassType } from "../core/WebGPUTypes";
import Attachment from "./Attachment";
import QuerySet from "./QuerySet";
import Texture from "./Texture";

export default class RenderTarget {
	public device: GPUDevice;
	public commandEncoder: GPUCommandEncoder | null;
	private _renderPassDescriptor: GPURenderPassDescriptor;
	private renderEncoder: GPURenderPassEncoder;
	private computeEncoder: GPUComputePassEncoder;
	constructor(
		public type: PassType,
		public colorAttachments: Attachment[],
		public depthAttachment?: Attachment,
		public stencilAttachment?: Attachment,
		public querySet?: QuerySet,
		public fixedSize?: boolean
	) {
		this.renderEncoder = undefined;
		this.computeEncoder = undefined;
		this._renderPassDescriptor = undefined;
		this.commandEncoder = undefined;
		this.device = undefined;
		this.fixedSize = false;
	}
	get renderPassDescriptor() {
		this._renderPassDescriptor = this.getRenderPassDescriptor();
		return this._renderPassDescriptor;
	}
	public getColorTexture(index = 0): Texture {
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
		this.depthAttachment?.texture?.update(this.device);
		this?.querySet?.update(this.device);
		return {
			...(this.colorAttachments && {
				colorAttachments: this.colorAttachments.map((colorAttachment) => {
					colorAttachment?.texture?.update && colorAttachment?.texture?.update(this.device);
					return {
						view:
							// 暂时这么写
							colorAttachment?.textureView?.() ?? colorAttachment.texture.textureView,
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
			}),
			...(this.querySet && { occlusionQuerySet: this.querySet.gpuQuerySet })
		};
	}

	public beginRenderPass(device: GPUDevice) {
		if (!this.device) this.device = device;
		this.commandEncoder = this.device.createCommandEncoder();
		this.renderEncoder = this.commandEncoder.beginRenderPass(this.renderPassDescriptor);
		return this.renderEncoder;
	}
	public endRenderPass() {
		this.renderEncoder?.end();
		this.device.queue.submit([this.commandEncoder.finish()]);
		this.commandEncoder = null;
		this.renderEncoder = null;
	}
	public beginComputePassEncoder(device: GPUDevice) {
		if (!this.device) this.device = device;
		this.commandEncoder = this.device.createCommandEncoder();
		this.computeEncoder = this.commandEncoder.beginComputePass();
		return this.computeEncoder;
	}
	public endComputePassEncoder() {
		this.computeEncoder?.end();
		this.device.queue.submit([this.commandEncoder.finish()]);
		this.commandEncoder = null;
		this.renderEncoder = null;
	}
	public setSize(width: number, height: number, depth = 1) {
		if (this.fixedSize) return;
		this?.depthAttachment?.texture?.setSize?.(width, height, depth);
		this?.colorAttachments?.forEach?.((colorAttachment) =>
			colorAttachment?.texture?.setSize?.(width, height, depth)
		);
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

import { PassType } from "../core/WebGPUTypes";
import Attachment from "./Attachment";
import QuerySet from "./QuerySet";
import Texture from "./Texture";

export default class RenderTarget {
	public device: GPUDevice;
	public commandEncoder: GPUCommandEncoder | null;
	private _renderPassDescriptor: GPURenderPassDescriptor;
	private renderEncoder: GPURenderPassEncoder;
	constructor(
		public type: PassType,
		public colorAttachments: Attachment[],
		public depthAttachment?: Attachment,
		public stencilAttachment?: Attachment,
		public querySet?: QuerySet,
		public fixedSize?: boolean
	) {
		this.renderEncoder = undefined;
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
		return colAtt?.texture ?? null;
	}
	public getDepthTexture(): Texture {
		return this?.depthAttachment?.texture;
	}
	private getRenderPassDescriptor(): GPURenderPassDescriptor | null {
		this?.querySet?.update(this.device);
		return {
			colorAttachments: this?.colorAttachments?.map?.((colorAttachment) =>
				colorAttachment.getGPURenderPassColorAttachment(this.device)
			),
			depthStencilAttachment: Object.assign(
				{},
				this?.depthAttachment?.getGPURenderPassDepthAttachment?.(this.device),
				this?.stencilAttachment?.getGPURenderPassStencilAttachment?.(this.device)
			),
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
	public setSize(width: number, height: number, depth = 1) {
		if (this.fixedSize) return;
		this?.depthAttachment?.texture?.setSize?.(width, height, depth);
		this?.colorAttachments?.forEach?.((colorAttachment) =>
			colorAttachment?.texture?.setSize?.(width, height, depth)
		);
	}
	destroy() {
		this?.colorAttachments?.forEach?.((colorAttachment) => colorAttachment?.texture?.destroy?.());
		this?.depthAttachment?.texture?.destroy();
	}
}

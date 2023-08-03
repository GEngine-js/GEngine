import { StorageTextureAccess, TextureFormat } from "../core/WebGPUConstant";
import { WebGPUTextureProps, ImageData } from "../core/WebGPUTypes";
import defaultValue from "../utils/defaultValue";
import { MipmapGenerator } from "../utils/MipmapGenerator";
import Context from "./Context";

export default class Texture {
	[x: string]: any;
	private _textureView: GPUTextureView;
	public gpuTexture?: GPUTexture;
	public mipLevelCount?: number;
	public context?: Context;
	public device?: GPUDevice;
	public textureProp?: WebGPUTextureProps;
	public dirty: boolean;
	public fixedSize: boolean;
	public static mipmapTools: MipmapGenerator;
	constructor(textureProp: WebGPUTextureProps) {
		this.textureProp = Object.assign(
			{
				format: TextureFormat.RGBA8Unorm,
				usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT,
				dataIsTexture: false
			},
			textureProp
		);
		this.dirty = true;
		this.fixedSize = textureProp.fixedSize || false;
	}
	get layoutType() {
		const { viewFormats, sampleType, sampleCount } = this.textureProp;
		// const
		return {
			sampleType: defaultValue(sampleType, "float"),
			viewDimension: defaultValue(viewFormats, "2d"),
			multisampled: sampleCount && sampleCount > 1 ? true : false
		};
	}
	get storageTextureLayoutType() {
		const { access = StorageTextureAccess.WriteOnly, viewFormats, format } = this.textureProp;
		return {
			viewDimension: defaultValue(viewFormats, "2d"),
			access,
			format
		};
	}
	get textureView() {
		if (!this._textureView)
			this._textureView = this.gpuTexture.createView({
				dimension: <GPUTextureViewDimension>defaultValue(this.textureProp.viewFormats, "2d")
			});
		return this._textureView;
	}
	update(device: GPUDevice) {
		if (!this.device) this.device = device;
		if (this.dirty) {
			this.checkNeedCreateTexture();
			this.dirty = false;
			if (this.textureProp.data) {
				if (Array.isArray(this.textureProp.data)) {
					this.textureProp.data.forEach((imageData) => {
						this.setData(imageData);
					});
				} else {
					this.setData(this.textureProp.data);
				}
			}
			if (this.textureProp.needMipMap) {
				if (!Texture.mipmapTools) Texture.mipmapTools = new MipmapGenerator(this.device);
				this.gpuTexture = Texture.mipmapTools.generateMipmap(this);
			}
		}
	}
	private setData(options: ImageData) {
		const {
			source,
			width = options.source.width,
			height = options.source.height,
			depth = 1,
			sourceX = 0,
			sourceY = 0,
			mipLevel = 0,
			x = 0,
			y = 0,
			z = 0,
			aspect = "all",
			colorSpace = "srgb",
			premultipliedAlpha = false
		} = options;
		if (source instanceof Texture) {
			let commandEncoder = this.device.createCommandEncoder();
			commandEncoder.copyTextureToTexture(
				{
					texture: <GPUTexture>source.gpuTexture,
					origin: [sourceX, sourceY]
					// aspect
				},
				{
					texture: this.gpuTexture,
					origin: { x: 0, y: 0, z },
					mipLevel
					// aspect
				},
				{
					width,
					height,
					depthOrArrayLayers: 1
				}
			);
			this.device.queue.submit([commandEncoder.finish()]);
			commandEncoder = null;
		} else {
			this.device.queue.copyExternalImageToTexture(
				{
					source,
					origin: [sourceX, sourceY]
				},
				{
					texture: this.gpuTexture,
					origin: [x, y, z],
					mipLevel,
					aspect,
					colorSpace,
					premultipliedAlpha
				},
				[width, height, depth]
			);
		}
	}
	setSize(width: number, height: number, depth?: number, force?: boolean) {
		if (this.fixedSize && !force) return;
		this.textureProp.size.width = width;
		this.textureProp.size.height = height;
		if (depth) this.textureProp.size.depth = depth;
		this.dirty = true;
	}
	destroy(): void {
		this.gpuTexture.destroy();
	}
	private createGPUTexture() {
		if (typeof this.textureProp.format === "number") {
			throw new Error("number format");
		}
		const { width, height, depth } = this.textureProp.size;
		return this.device.createTexture({
			label: `${this.textureProp?.label || "undefined"}-size{${width},${height},${depth}}`,
			size: [width, height, depth],
			dimension: this.textureProp.dimension || "2d",
			format: this.textureProp.format as GPUTextureFormat,
			usage: this.textureProp.usage,
			mipLevelCount: this.textureProp.mipLevelCount || 1,
			sampleCount: this.textureProp.sampleCount || 1
		});
	}
	private checkNeedCreateTexture() {
		const { width, height, depth } = this.textureProp.size;
		if (this.gpuTexture) {
			if (width != this.gpuTexture.width || height != this.gpuTexture.height) {
				this._textureView = undefined;
				this.gpuTexture.destroy();
				this.gpuTexture = this.createGPUTexture();
			}
		} else {
			this.gpuTexture = this.createGPUTexture();
		}
	}
}

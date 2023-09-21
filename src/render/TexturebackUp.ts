// import { TextureAspect } from "../core/WebGPUConstant";
// import {
// 	TextureParams,
// 	ImageData,
// 	TextureDescriptor,
// 	TextureViewDescriptor,
// 	Extent3D,
// 	ImageCopyExternalImage,
// 	ImageCopyTextureTagged,
// 	Origin3D
// } from "../core/WebGPUTypes";
// import { MipmapGenerator } from "../utils/MipmapGenerator";
// import { isTexture } from "../utils/TypeInfer";
// import Buffer from "./Buffer";

// export default class Texture {
// 	[x: string]: any;
// 	private _textureView: GPUTextureView;
// 	public gpuTexture?: GPUTexture;
// 	public device?: GPUDevice;
// 	public textureDescriptor?: TextureDescriptor;
// 	public textureViewDescriptor?: TextureViewDescriptor;
// 	public label?: string;
// 	public data?: ImageData | Array<ImageData>;
// 	public sampleType?: string;
// 	public dirty: boolean;
// 	public fixedSize: boolean;
// 	public generateMipmap: boolean;
// 	public flipY: boolean;
// 	public static mipmapTools: MipmapGenerator;
// 	private _textureViewDirty: boolean;
// 	constructor(params: TextureParams) {
// 		this.dirty = true;
// 		this._textureViewDirty = true;
// 		this.fixedSize = params?.fixedSize ?? false;
// 		this.textureDescriptor = params?.textureDescriptor;
// 		this.textureViewDescriptor = params?.textureViewDescriptor;
// 		this.generateMipmap = params?.generateMipmap ?? false;
// 		this.flipY = params?.flipY ?? false;
// 	}
// 	get layoutType() {
// 		const { dimension = "2d" } = this.textureViewDescriptor;
// 		const { sampleType = "float" } = this;
// 		const sampleCount = this?.textureDescriptor;
// 		return {
// 			sampleType,
// 			viewDimension: dimension,
// 			multisampled: Boolean(sampleCount)
// 		};
// 	}
// 	get storageTextureLayoutType() {
// 		// const { access = StorageTextureAccess.WriteOnly, viewFormats, format } = this.rate;
// 		// return {
// 		// 	viewDimension: defaultValue(viewFormats, "2d"),
// 		// 	access,
// 		// 	format
// 		// };
// 		return null;
// 	}
// 	get textureView() {
// 		if (!this._textureView || this._textureViewDirty) {
// 			const {
// 				format = this.textureDescriptor.format,
// 				mipLevelCount,
// 				dimension = "2d",
// 				aspect = "all",
// 				baseMipLevel = 0,
// 				baseArrayLayer = 0,
// 				arrayLayerCount
// 			} = this.textureViewDescriptor;
// 			this._textureView = this.gpuTexture.createView({
// 				format: <GPUTextureFormat>format,
// 				mipLevelCount,
// 				dimension,
// 				aspect: <GPUTextureAspect>aspect,
// 				baseMipLevel,
// 				baseArrayLayer,
// 				arrayLayerCount
// 			});
// 			this._textureViewDirty = false;
// 		}
// 		return this._textureView;
// 	}
// 	update(device: GPUDevice) {
// 		if (!this.device) this.device = device;
// 		if (!this.dirty) return;
// 		this.checkNeedCreateTexture();
// 		this.dirty = false;
// 		this._textureViewDirty = true;
// 		if (this.data) {
// 			if (Array.isArray(this.data)) {
// 				this.data.forEach((imageData) => {
// 					this.setData(imageData);
// 				});
// 			} else {
// 				this.setData(this.data);
// 			}
// 		}
// 		if (!this?.generateMipmap) return;
// 		if (!Texture.mipmapTools) Texture.mipmapTools = new MipmapGenerator(this.device);
// 		Texture.mipmapTools.generateMipmap(this);
// 	}
// 	private setData(imageData: ImageData) {
// 		if (isTexture(imageData.source)) {
// 			Texture.copyTextureToTexture({
// 				device: this.device,
// 				source: this,
// 				destination: imageData.source
// 			});
// 		} else {
// 			const {
// 				source,
// 				width = imageData.source.width,
// 				height = imageData.source.height,
// 				depth = 1,
// 				sourceX = 0,
// 				sourceY = 0,
// 				mipLevel = 0,
// 				x = 0,
// 				y = 0,
// 				z = 0,
// 				aspect = "all",
// 				colorSpace = "srgb",
// 				premultipliedAlpha = false
// 			} = imageData;
// 			const sourceData = {
// 				source: source,
// 				origin: { x: sourceX, y: sourceY }
// 			};
// 			const destination = {
// 				texture: this.gpuTexture,
// 				origin: { x, y, z },
// 				mipLevel,
// 				aspect: <TextureAspect>aspect,
// 				colorSpace,
// 				premultipliedAlpha
// 			};
// 			const copySize = { width, height, depthOrArrayLayers: depth };
// 			Texture.copyExternalImageToTexture({
// 				device: this.device,
// 				source: sourceData,
// 				destination,
// 				copySize
// 			});
// 		}
// 	}
// 	setSize(width: number, height: number, depth?: number, force?: boolean) {
// 		if (this.fixedSize && !force) return;
// 		this.textureDescriptor.size.width = width;
// 		this.textureDescriptor.size.height = height;
// 		if (depth) this.textureDescriptor.size.depth = depth;
// 		this.dirty = true;
// 	}
// 	static copyTextureToBuffer(params: {
// 		device: GPUDevice;
// 		texture: Texture;
// 		buffer: Buffer;
// 		mipLevel?: number;
// 		origin?: Origin3D;
// 	}): void {
// 		const { device, texture, buffer, origin = { x: 0, y: 0, z: 0 }, mipLevel = 0 } = params;
// 		const { width, height, depth = 1 } = texture?.textureDescriptor?.size || {};
// 		const { aspect = TextureAspect.All } = texture?.textureViewDescriptor || {};
// 		let commandEncoder = device.createCommandEncoder();
// 		commandEncoder.copyTextureToBuffer(
// 			{
// 				texture: texture.gpuTexture,
// 				mipLevel,
// 				origin,
// 				aspect: <GPUTextureAspect>aspect
// 			},
// 			{ buffer: buffer.gpuBuffer },
// 			{ width, height, depthOrArrayLayers: depth }
// 		);
// 		device.queue.submit([commandEncoder.finish()]);
// 		commandEncoder = null;
// 	}
// 	static copyTextureToTexture(params: {
// 		device: GPUDevice;
// 		source: Texture;
// 		destination: Texture;
// 		mipLevel?: number;
// 		origin?: Origin3D;
// 	}): void {
// 		const { device, source, destination, origin = { x: 0, y: 0, z: 0 }, mipLevel = 0 } = params;
// 		const { aspect = TextureAspect.All } = source?.textureViewDescriptor || {};
// 		const { width, height, depth = 1 } = source?.textureDescriptor?.size || {};
// 		let commandEncoder = device.createCommandEncoder();
// 		commandEncoder.copyTextureToTexture(
// 			{
// 				texture: source.gpuTexture,
// 				mipLevel,
// 				origin,
// 				aspect: <GPUTextureAspect>aspect
// 			},
// 			{
// 				texture: destination.gpuTexture,
// 				mipLevel,
// 				origin,
// 				aspect: <GPUTextureAspect>aspect
// 			},
// 			{ width, height, depthOrArrayLayers: depth }
// 		);
// 		device.queue.submit([commandEncoder.finish()]);
// 		commandEncoder = null;
// 	}
// 	static copyExternalImageToTexture(params: {
// 		device: GPUDevice;
// 		source: ImageCopyExternalImage;
// 		destination: ImageCopyTextureTagged;
// 		copySize?: Extent3D;
// 	}) {
// 		const { device, source, destination, copySize } = params;
// 		device.queue.copyExternalImageToTexture(source, destination, copySize);
// 	}
// 	destroy(): void {
// 		this.gpuTexture.destroy();
// 	}
// 	private createGPUTexture() {
// 		if (typeof this.textureDescriptor.format === "number") throw new Error("number format");
// 		const { width, height, depth } = this.textureDescriptor.size;
// 		const {
// 			format,
// 			size,
// 			dimension = "2d",
// 			usage,
// 			mipLevelCount = 1,
// 			sampleCount = 1,
// 			viewFormats = []
// 		} = this?.textureDescriptor || {};
// 		return this.device.createTexture({
// 			label: `${this?.label || "undefined"}-size{${width},${height},${depth}}`,
// 			size: <GPUExtent3DStrict>size,
// 			dimension,
// 			format: <GPUTextureFormat>format,
// 			usage: usage,
// 			mipLevelCount,
// 			sampleCount,
// 			viewFormats: <Iterable<GPUTextureFormat>>viewFormats
// 		});
// 	}
// 	private checkNeedCreateTexture() {
// 		const { width, height } = this.textureDescriptor.size;
// 		if (this.gpuTexture) {
// 			if (width != this.gpuTexture.width || height != this.gpuTexture.height) {
// 				this._textureView = undefined;
// 				this.gpuTexture.destroy();
// 				this.gpuTexture = this.createGPUTexture();
// 			}
// 		} else {
// 			this.gpuTexture = this.createGPUTexture();
// 		}
// 	}
// }

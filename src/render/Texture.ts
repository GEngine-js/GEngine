import { StorageTextureAccess, TextureAspect, TextureSampleType, TextureViewDimension } from "../core/WebGPUConstant";
import {
	TextureParams,
	ImageData,
	TextureDescriptor,
	TextureViewDescriptor,
	Extent3D,
	ImageCopyExternalImage,
	ImageCopyTextureTagged,
	Origin3D
} from "../core/WebGPUTypes";
import { MipmapGenerator } from "../utils/MipmapGenerator";
import { isTexture } from "../utils/TypeInfer";
import Buffer from "./Buffer";

export default class Texture {
	[x: string]: any;
	private _textureView: GPUTextureView;
	public gpuTexture?: GPUTexture;
	public device?: GPUDevice;
	public textureDescriptor?: TextureDescriptor;
	public textureViewDescriptor?: TextureViewDescriptor;
	public label?: string;
	public data?: ImageData | Array<ImageData>;
	public sampleType?: string;
	public dirty: boolean;
	public fixedSize: boolean;
	public generateMipmap: boolean;
	public flipY: boolean;
	public static mipmapTools: MipmapGenerator;
	public uploaded?: boolean;
	public dynamic?: boolean;
	private _textureViewDirty: boolean;
	constructor(params: TextureParams) {
		this.dirty = true;
		this._textureViewDirty = true;
		this.label = params?.label ?? "";
		this.data = params.data;
		this.sampleType = params.sampleType;
		this.fixedSize = params?.fixedSize ?? false;
		this.textureDescriptor = params?.textureDescriptor;
		this.textureViewDescriptor = params?.textureViewDescriptor;
		this.generateMipmap = params?.generateMipmap ?? false;
		this.flipY = params?.flipY ?? false;
		this.uploaded = false;
		this.dynamic = params?.dynamic ?? false;
	}
	get layoutType() {
		const { dimension = TextureViewDimension.E2d } = this.textureViewDescriptor || {};
		const { sampleType = TextureSampleType.Float } = this;
		const sampleCount = this?.textureDescriptor?.sampleCount ?? 1;
		return {
			sampleType,
			viewDimension: dimension,
			multisampled: sampleCount > 1 ? true : false
		};
	}
	get storageTextureLayoutType() {
		const { format = this.textureDescriptor.format, dimension = TextureViewDimension.E2d } =
			this.textureViewDescriptor || {};
		return {
			viewDimension: dimension,
			access: StorageTextureAccess.WriteOnly,
			format
		};
	}
	get textureView() {
		if (!this._textureView || this._textureViewDirty) {
			const {
				format = this?.textureDescriptor?.format ?? "rgba8unorm",
				mipLevelCount,
				dimension = "2d",
				aspect = "all",
				baseMipLevel = 0,
				baseArrayLayer = 0,
				arrayLayerCount
			} = this.textureViewDescriptor || {};
			this._textureView = this.gpuTexture.createView({
				format: <GPUTextureFormat>format,
				mipLevelCount,
				dimension,
				aspect: <GPUTextureAspect>aspect,
				baseMipLevel,
				baseArrayLayer,
				arrayLayerCount
			});
			this._textureViewDirty = false;
		}
		return this._textureView;
	}
	public update(device: GPUDevice) {
		if (!this.device) this.device = device;
		this.checkNeedCreateTexture();
		if (!this.uploaded || this.dynamic) this.upload();
	}
	public upload() {
		this.uploaded = true;
		if (!this.data) return;
		if (Array.isArray(this.data)) {
			this.data.forEach((imageData) => {
				this.setData(imageData);
			});
		} else {
			this.setData(this.data);
		}
		if (!this?.generateMipmap) return;
		if (!Texture.mipmapTools) Texture.mipmapTools = new MipmapGenerator(this.device);
		Texture.mipmapTools.generateMipmap(this);
	}
	public getTextureViewByViewDescriptor(viewDescriptor: {
		format: string;
		mipLevelCount: number;
		dimension: string;
		aspect: string;
		baseMipLevel: number;
		baseArrayLayer: number;
		arrayLayerCount: number;
	}): GPUTextureView {
		const {
			format,
			mipLevelCount,
			arrayLayerCount,
			dimension = "2d",
			aspect = "all",
			baseMipLevel = 0,
			baseArrayLayer = 0
		} = viewDescriptor;
		return this.gpuTexture.createView({
			format: <GPUTextureFormat>format,
			mipLevelCount,
			dimension: <GPUTextureViewDimension>dimension,
			aspect: <GPUTextureAspect>aspect,
			baseMipLevel,
			baseArrayLayer,
			arrayLayerCount
		});
	}
	private setData(imageData: ImageData) {
		const {
			depth = 1,
			sourceX = 0,
			sourceY = 0,
			mipLevel = 0,
			x = 0,
			y = 0,
			z = 0,
			aspect = TextureAspect.All,
			colorSpace = "srgb",
			premultipliedAlpha = false
		} = imageData;
		const { width, height } = this.textureDescriptor.size;
		if (isTexture(imageData.source)) {
			Texture.copyTextureToTexture({
				device: this.device,
				source: {
					texture: imageData.source,
					origin: [sourceX, sourceY]
				},
				destination: {
					texture: this,
					origin: { x: 0, y: 0, z }
				},
				width,
				height,
				depth,
				mipLevel,
				aspect
			});
		} else {
			const sourceData = {
				source: imageData.source,
				origin: { x: sourceX, y: sourceY }
			};
			const destination = {
				texture: this.gpuTexture,
				origin: { x, y, z },
				mipLevel,
				aspect: <TextureAspect>aspect,
				colorSpace,
				premultipliedAlpha
			};
			const copySize = { width, height, depthOrArrayLayers: depth };
			Texture.copyExternalImageToTexture({
				device: this.device,
				source: sourceData,
				destination,
				copySize
			});
		}
	}
	public setSize(width: number, height: number, depth?: number, force?: boolean) {
		if (this.fixedSize && !force) return;
		this.textureDescriptor.size.width = width;
		this.textureDescriptor.size.height = height;
		if (depth) this.textureDescriptor.size.depth = depth;
		this.dirty = true;
	}
	static copyTextureToBuffer(params: {
		device: GPUDevice;
		texture: Texture;
		buffer: Buffer;
		mipLevel?: number;
		origin?: Origin3D;
	}): void {
		const { device, texture, buffer, origin = { x: 0, y: 0, z: 0 }, mipLevel = 0 } = params;
		const { width, height, depth = 1 } = texture?.textureDescriptor?.size || {};
		const { aspect = TextureAspect.All } = texture?.textureViewDescriptor || {};
		let commandEncoder = device.createCommandEncoder();
		commandEncoder.copyTextureToBuffer(
			{
				texture: texture.gpuTexture,
				mipLevel,
				origin,
				aspect: <GPUTextureAspect>aspect
			},
			{ buffer: buffer.gpuBuffer },
			{ width, height, depthOrArrayLayers: depth }
		);
		device.queue.submit([commandEncoder.finish()]);
		commandEncoder = null;
	}
	static copyTextureToTexture(params: {
		device: GPUDevice;
		source: {
			texture: Texture;
			origin: Array<number>;
		};
		destination: {
			texture: Texture;
			origin: { x: number; y: number; z: number };
		};
		mipLevel?: number;
		aspect?: TextureAspect;
		width?: number;
		height?: number;
		depth?: number;
	}): void {
		const {
			device,
			source,
			destination,
			mipLevel = 0,
			aspect = TextureAspect.All,
			width,
			height,
			depth = 1
		} = params;
		let commandEncoder = device.createCommandEncoder();
		commandEncoder.copyTextureToTexture(
			{
				texture: source?.texture?.gpuTexture,
				mipLevel,
				origin: source?.origin,
				aspect: <GPUTextureAspect>aspect
			},
			{
				texture: destination?.texture?.gpuTexture,
				mipLevel,
				origin: destination?.origin,
				aspect: <GPUTextureAspect>aspect
			},
			{ width, height, depthOrArrayLayers: depth }
		);
		device.queue.submit([commandEncoder.finish()]);
		commandEncoder = null;
	}
	static copyExternalImageToTexture(params: {
		device: GPUDevice;
		source: ImageCopyExternalImage;
		destination: ImageCopyTextureTagged;
		copySize?: Extent3D;
	}) {
		const { device, source, destination, copySize } = params;
		device.queue.copyExternalImageToTexture(source, destination, copySize);
	}
	destroy(): void {
		this.gpuTexture.destroy();
	}
	private createGPUTexture() {
		if (typeof this.textureDescriptor.format === "number") throw new Error("number format");
		const {
			format,
			size,
			dimension = "2d",
			usage,
			mipLevelCount = 1,
			sampleCount = 1,
			viewFormats = []
		} = this?.textureDescriptor || {};
		const { width, height, depth } = size;
		return this.device.createTexture({
			label: `${this?.label || "undefined"}-size{${width},${height},${depth}}`,
			size: {
				width,
				height,
				depthOrArrayLayers: depth
			},
			dimension,
			format: <GPUTextureFormat>format,
			usage: usage,
			mipLevelCount,
			sampleCount,
			viewFormats: <Iterable<GPUTextureFormat>>viewFormats
		});
	}
	private checkNeedCreateTexture() {
		if (!this.dirty) return;
		const { width, height } = this.textureDescriptor.size;
		if (this.gpuTexture) {
			if (width != this.gpuTexture.width || height != this.gpuTexture.height) {
				this._textureView = undefined;
				this.gpuTexture.destroy();
				this.gpuTexture = this.createGPUTexture();
			}
		} else {
			this.gpuTexture = this.createGPUTexture();
		}
		this.dirty = false;
		this.uploaded = false;
		this._textureViewDirty = true;
	}
}

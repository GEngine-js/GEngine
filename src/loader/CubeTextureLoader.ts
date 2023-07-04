import Sampler from "../render/Sampler";
import Texture from "../render/Texture";

export default async function CubeTextureLoader(urls) {
	const promises = urls.map((src) => {
		const img = document.createElement("img");
		img.src = src;
		return img.decode().then(() => createImageBitmap(img));
	});
	const images = await Promise.all(promises);
	await Promise.all(images);
	const baseSampler = new Sampler({
		magFilter: "linear",
		minFilter: "linear"
	});
	const data = images.map((image, i) => {
		return {
			source: image,
			width: image.width,
			height: image.height,
			depth: 1,
			x: 0,
			y: 0,
			z: i
		};
	});
	const baseTexture = new Texture({
		size: {
			width: images[0].width,
			height: images[0].height,
			depth: 6
		},
		format: "rgba8unorm",
		usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT,
		data,
		viewFormats: "cube",
		mipLevelCount: 6,
		needMipMap: true
	});
	return {
		texture: baseTexture,
		sampler: baseSampler
	};
}

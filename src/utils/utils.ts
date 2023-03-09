import Texture from "../render/Texture";
export async function loadPbrTexture(brdf, diffuse, specular) {
	if (!brdf) return;
	const brdfTexture = await loadTexture(brdf);
	const diffuseTexture = await loadCubeTexture(diffuse);
	const specularTexture = await loadCubeTexture(specular);
	return {
		brdfTexture,
		diffuseTexture,
		specularTexture
	};
}
export async function loadCubeTexture(urls) {
	const promises = urls.map((src) => {
		const img = document.createElement("img");
		img.src = src;
		return img.decode().then(() => createImageBitmap(img));
	});
	const images = await Promise.all(promises);
	await Promise.all(images);
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
	return new Texture({
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
}
export async function loadTexture(url) {
	const img = document.createElement("img");
	img.src = url;
	await img.decode();
	const imageBitmap = await createImageBitmap(img);
	const baseTexture = new Texture({
		size: { width: imageBitmap.width, height: imageBitmap.height, depth: 1 },
		data: {
			source: imageBitmap
		},
		format: "rgba8unorm"
	});
	return baseTexture;
}

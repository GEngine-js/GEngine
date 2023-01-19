import Texture from "../render/Texture";

/*
 * @Author: junwei.gu junwei.gu@jiduauto.com
 * @Date: 2023-01-18 17:36:06
 * @LastEditors: junwei.gu junwei.gu@jiduauto.com
 * @LastEditTime: 2023-01-19 14:36:05
 * @FilePath: \GEngine\src\utils\utils.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export async function loadPbrTexture(brdf, diffuse, specular) {
  if (!brdf) return;
  const brdfTexture = await loadTexture(brdf);
  const diffuseTexture = await loadCubeTexture(diffuse);
  const specularTexture = await loadCubeTexture(specular);
  return {
    brdfTexture,
    diffuseTexture,
    specularTexture,
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
      z: i,
    };
  });
  return new Texture({
    size: {
      width: images[0].width,
      height: images[0].height,
      depth: 6,
    },
    format: "rgba8unorm",
    usage:
      GPUTextureUsage.TEXTURE_BINDING |
      GPUTextureUsage.COPY_DST |
      GPUTextureUsage.RENDER_ATTACHMENT,
    data,
    viewFormats: "cube",
    mipLevelCount: 6,
    needMipMap: true,
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
      source: imageBitmap,
    },
    format: "rgba8unorm",
  });
  return baseTexture;
}

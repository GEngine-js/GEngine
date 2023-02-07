export function requestWasmFile(url): Promise<Object> {
  //@ts-ignore
  return fetch(url, { method: "get", responseType: "arraybuffer" }).then(
    (res) => {
      return res.arrayBuffer();
    }
  );
}
export function getIamge(url: string) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = url;
    image.onload = () => {
      resolve(image);
    };
    image.onerror = () => {
      reject();
    };
  });
}
export async function getImageBitMap(url) {
  const response = await fetch(url);
  const blob = await response.blob();
  return createImageBitmap(blob).then((imageBitmap) => {
    return imageBitmap;
  });
}

import Geometry from "../geometry/Geometry";
import PbrMat from "../material/PbrMat";
import { Mesh } from "../mesh/Mesh";
import { Float32Attribute } from "../render/Attribute";
import Sampler from "../render/Sampler";
import Texture from "../render/Texture";
import { generateNormals, getTextures, gltfEnum, newTypedArray, toIndices, TypedArray } from "../utils/gltfUtils";

export type GLTFPrimitive = {
	vertexCount: number;
	indices: Uint16Array | Uint32Array | null;
	positions: TypedArray;
	normals: TypedArray;
	uvs: TypedArray | null;
	uv1s: TypedArray | null;
	tangents: TypedArray | null;
	colors: TypedArray | null;
	material: any;
	boundingBox: {
		max: [number, number, number];
		min: [number, number, number];
	};
};

export type GLTFMesh = Array<GLTFPrimitive>;

export type GLTFAnimation = {
	channels: Array<{
		input: TypedArray;
		output: TypedArray;
		interpolation: string;
		node: number;
		path: string;
	}>;
	length: number;
};

export class GLTF {
	scenes: Array<any>;

	defaultScene: number;

	nodes: Array<any>;

	cameras: Array<any>;

	meshes: Array<any>;

	images: Array<ImageBitmap>;

	animations: Array<GLTFAnimation>;

	constructor(json: any, buffers: Array<ArrayBuffer>, images: Array<ImageBitmap>, glbOffset = 0) {
		this.scenes = json.scenes;
		this.defaultScene = json.scene || 0;
		this.nodes = json.nodes;
		this.cameras = json.cameras || [];
		this.images = images;

		function getSampler(samplerJson: any) {
			return {
				magFilter: gltfEnum[samplerJson.magFilter || 9729] as GPUFilterMode,
				minFilter: gltfEnum[samplerJson.minFilter || 9729] as GPUFilterMode,
				addressModeU: gltfEnum[samplerJson.wrapS || 10497] as GPUAddressMode,
				addressModeV: gltfEnum[samplerJson.wrapT || 10497] as GPUAddressMode
			};
		}
		const samplers = json.samplers ? (json.samplers as Array<any>).map((sampler) => getSampler(sampler)) : [];
		const defaultSampler = getSampler({});

		const textures = json.textures
			? (json.textures as Array<any>).map((texture) => {
					texture.sampler = texture.sampler !== undefined ? samplers[texture.sampler] : defaultSampler;
					return texture;
			  })
			: [];

		const materials = json.materials
			? (json.materials as Array<any>).map((material) => {
					if (!material.pbrMetallicRoughness) {
						material.pbrMetallicRoughness = {};
					}
					getTextures(material).forEach((texture) => {
						if (texture) {
							texture.source = textures[texture.index].source;
							texture.sampler = textures[texture.index].sampler;
						}
					});
					return material;
			  })
			: [];
		const defaultMaterial = { pbrMetallicRoughness: {} };

		function getBufferView(accessor: any, n: number) {
			const bufferView = json.bufferViews[accessor.bufferView];
			const offset = (bufferView.byteOffset || 0) + (accessor.byteOffset || 0);
			const stride = Math.max(bufferView.byteStride / 4 || 0, n);
			let array = newTypedArray(
				accessor.componentType,
				buffers[bufferView.buffer],
				bufferView.buffer === 0 ? offset + glbOffset : offset,
				(accessor.count - 1) * stride + n
			);

			if (stride > n) {
				const TypedArrayConstructor = array.constructor as {
					new (...args: any): TypedArray;
				};
				const strided = new TypedArrayConstructor(accessor.count * n);
				for (let i = 0, j = 0; i < strided.length; i += n, j += stride) {
					for (let k = 0; k < n; k += 1) {
						strided[i + k] = array[j + k];
					}
				}
				array = strided;
			}
			return array;
		}

		const accessors = (json.accessors as Array<any>).map((accessor) => {
			const n = gltfEnum[accessor.type] as number;
			let array;
			if (accessor.bufferView === undefined) {
				array = newTypedArray(
					accessor.componentType,
					new ArrayBuffer(n * accessor.count * (gltfEnum[accessor.componentType] as number)),
					0,
					accessor.count * n
				);
			} else {
				array = getBufferView(accessor, n);
			}

			if (accessor.sparse) {
				accessor.sparse.indices.count = accessor.sparse.count;
				accessor.sparse.values.count = accessor.sparse.count;
				accessor.sparse.values.componentType = accessor.componentType;
				const indices = getBufferView(accessor.sparse.indices, 1);
				const values = getBufferView(accessor.sparse.values, n);
				for (let i = 0; i < accessor.sparse.count; i += 1) {
					for (let j = 0; j < n; j += 1) {
						array[indices[i] * n + j] = values[i * n + j];
					}
				}
			}

			return array;
		});

		this.meshes = (json.meshes as Array<any>).map((mesh) =>
			(mesh.primitives as Array<any>).map((primitive) => {
				const material = primitive.material !== undefined ? materials[primitive.material] : defaultMaterial;

				let indices = null;
				let vertexCount;
				if (primitive.indices !== undefined) {
					indices = toIndices(accessors[primitive.indices]);
					vertexCount = json.accessors[primitive.indices].count;
				} else {
					vertexCount = json.accessors[primitive.attributes.POSITION].count;
				}

				const positions = accessors[primitive.attributes.POSITION];
				const { max, min } = json.accessors[primitive.attributes.POSITION];
				const boundingBox = { max, min };

				let normals;
				if (primitive.attributes.NORMAL !== undefined) {
					normals = accessors[primitive.attributes.NORMAL];
				} else {
					normals = generateNormals(indices, positions);
				}

				let uvs = null;
				if (primitive.attributes.TEXCOORD_0 !== undefined) {
					uvs = accessors[primitive.attributes.TEXCOORD_0];
				}
				let uv1s = null;
				if (primitive.attributes.TEXCOORD_1 !== undefined) {
					uv1s = accessors[primitive.attributes.TEXCOORD_1];
				}

				let tangents = null;
				if (primitive.attributes.TANGENT !== undefined && primitive.attributes.NORMAL !== undefined) {
					tangents = accessors[primitive.attributes.TANGENT];
				} else if (material.normalTexture) {
					//tangents = generateTangents(indices, positions, normals, uvs!);
				}

				let colors = null;
				if (primitive.attributes.COLOR_0 !== undefined) {
					colors = accessors[primitive.attributes.COLOR_0];
				}
				return generateMesh(
					{
						vertexCount,
						indices,
						positions,
						normals,
						uvs,
						uv1s,
						tangents,
						colors,
						material,
						boundingBox
					},
					this.images
				);
				// return {
				//   vertexCount,
				//   indices,
				//   positions,
				//   normals,
				//   uvs,
				//   uv1s,
				//   tangents,
				//   colors,
				//   material,
				//   boundingBox,
				// };
			})
		);

		this.animations =
			(json.animations as Array<any>)?.map((animation) => {
				const channels = (animation.channels as Array<any>).map(({ sampler, target }) => ({
					input: accessors[animation.samplers[sampler].input],
					output: accessors[animation.samplers[sampler].output],
					interpolation: animation.samplers[sampler].interpolation || "LINEAR",
					node: target.node,
					path: target.path
				}));
				const length = channels.reduce((acc, { input }) => Math.max(acc, input[input.length - 1]), 0);
				return { channels, length };
			}) || [];
	}
}

async function loadGLTFObject(json: any, url: string, glbOffset = 0, bin?: ArrayBuffer) {
	const dir = url.substring(0, url.lastIndexOf("/"));
	const images: Array<ImageBitmap> = [];
	let loadExternalImages: Promise<any> = Promise.resolve();
	if (json.images) {
		loadExternalImages = Promise.all(
			json.images.map(async (image: any, index: number) => {
				if (image.uri) {
					const imageUrl = image.uri.slice(0, 5) === "data:" ? image.uri : `${dir}/${image.uri}`;
					images[index] = await fetch(imageUrl)
						.then((response) => response.blob())
						.then((blob) =>
							createImageBitmap(blob, {
								colorSpaceConversion: "none"
							})
						);
				}
			})
		);
	}

	const buffers: Array<ArrayBuffer> = [];
	await Promise.all(
		json.buffers.map((buffer: any, index: number) => {
			if (!buffer.uri) {
				if (index !== 0) {
					throw new Error("buffer uri undefined");
				}
				buffers[index] = bin!;
				return Promise.resolve();
			}
			const bufferUrl = buffer.uri.slice(0, 5) === "data:" ? buffer.uri : `${dir}/${buffer.uri}`;
			return fetch(bufferUrl)
				.then((response) => response.arrayBuffer())
				.then((arrayBuffer: ArrayBuffer) => {
					buffers[index] = arrayBuffer;
				});
		})
	);

	let loadInternalImages: Promise<any> = Promise.resolve();
	if (json.images) {
		loadInternalImages = Promise.all(
			json.images.map(async (image: any, index: number) => {
				if (image.bufferView !== undefined) {
					const { buffer, byteOffset, byteLength } = json.bufferViews[image.bufferView];
					const array = new Uint8Array(
						buffers[buffer],
						buffer === 0 ? byteOffset + glbOffset : byteOffset,
						byteLength
					);
					let type;
					if (image.mimeType) {
						type = image.mimeType;
					} else {
						type = array[0] === 0xff ? "image/jpeg" : "image/png";
					}
					const blob = new Blob([array], { type });
					images[index] = await createImageBitmap(blob, {
						colorSpaceConversion: "none"
					});
				}
			})
		);
	}

	await Promise.all([loadExternalImages, loadInternalImages]);
	return new GLTF(json, buffers, images, glbOffset);
}

export async function loadGLTF(url: string) {
	const ext = url.split(".").pop();
	if (ext === "gltf") {
		const json = await fetch(url).then((response) => response.json());
		return loadGLTFObject(json, url);
	}
	const glb = await fetch(url).then((response) => response.arrayBuffer());
	const jsonLength = new Uint32Array(glb, 12, 1)[0];
	const jsonChunk = new Uint8Array(glb, 20, jsonLength);
	const json = JSON.parse(new TextDecoder("utf-8").decode(jsonChunk));
	return loadGLTFObject(json, url, 28 + jsonLength, glb);
}
function generateMesh(options, images) {
	const { vertexCount, indices, positions, normals, uvs, uv1s, tangents, colors, material, boundingBox } = options;
	const { emissiveFactor, emissiveTexture, name, normalTexture, occlusionTexture, pbrMetallicRoughness } = material;
	const geo = new Geometry({});
	if (indices) geo.setIndice(Array.from(indices));
	if (positions) geo.setAttribute(new Float32Attribute("position", Array.from(positions), 3));
	if (normals) geo.setAttribute(new Float32Attribute("normal", Array.from(normals), 3));
	if (uvs) geo.setAttribute(new Float32Attribute("uv", Array.from(uvs), 2));
	geo.computeBoundingSphere(Array.from(positions));
	geo.count = vertexCount;
	const mat = new PbrMat();
	if (normalTexture) mat.normalTexture = generateTexture(normalTexture, images);
	if (occlusionTexture) mat.aoTexture = generateTexture(occlusionTexture, images);
	if (emissiveTexture) mat.emissiveTexture = generateTexture(emissiveTexture, images);
	if (pbrMetallicRoughness?.baseColorTexture)
		mat.baseTexture = generateTexture(pbrMetallicRoughness.baseColorTexture, images);
	if (pbrMetallicRoughness?.metallicRoughnessTexture)
		mat.metalnessRoughnessTexture = generateTexture(pbrMetallicRoughness.metallicRoughnessTexture, images);
	mat.baseSampler = new Sampler({
		magFilter: "linear",
		minFilter: "linear",
		addressModeU: "repeat",
		addressModeV: "repeat"
	});
	mat.roughness = 0.3333;
	mat.metalness = 0.8333;
	const mesh = new Mesh(geo, mat);
	return mesh;
}
function generateTexture(texture, images) {
	const { sampler, index } = texture;
	return new Texture({
		size: {
			width: images[index].width,
			height: images[index].height,
			depth: 1
		},
		data: {
			source: images[index]
		},
		format: "rgba8unorm",
		usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
	});
}

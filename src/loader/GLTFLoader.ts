import Geometry from "../geometry/Geometry";
import PbrMaterial from "../material/PbrMaterial";
import Matrix4 from "../math/Matrix4";
import { Mesh } from "../mesh/Mesh";
import { Float32Attribute } from "../render/Attribute";
import Sampler from "../render/Sampler";
import Texture from "../render/Texture";
import { generateNormals, gltfEnum, newTypedArray, toIndices, TypedArray, generateTangents } from "../utils/gltfUtils";
import Node from "../mesh/Node";
import { Primitive } from "../render/RenderState";

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

	private glbOffset: number;

	private buffers: ArrayBuffer[];

	private bufferViews: any;

	private accessors: any;

	private json: any;

	private materials: any;

	private glbBin?: ArrayBuffer;

	private rootUrl: string;

	textures: any[];

	samplers: Sampler[];

	gltfMeshs: any[];

	constructor(json: any, rootUrl: string, glbOffset = 0, glbBin?: ArrayBuffer) {
		this.json = json;
		this.bufferViews = json.bufferViews;
		this.glbOffset = glbOffset;
		this.rootUrl = rootUrl;
		this.scenes = json.scenes;
		this.defaultScene = json.scene || 0;
		this.cameras = json.cameras || [];
		this.glbBin = glbBin;
		this.meshes = [];
	}
	async parseData() {
		this.buffers = await this.loadBuffes();
		this.images = await this.loadImages();
		this.parseSamplers();
		this.parseTextures();
		this.parseMaterials();
		this.parseAccessors();
		this.parseAnimations();
		this.parseMeshs();
		this.parseNodes();
		this.normalizeData();
		this.parseScenes();
	}
	private parseSamplers() {
		this.samplers = this.json.samplers
			? (this.json.samplers as Array<any>).map((sampler) => this.getSampler(sampler))
			: [];
	}
	private parseScenes() {
		this.scenes = this.json.scenes.map((scene) => {
			const node = new Node();
			scene?.nodes?.map((nodeId) => {
				node.add(this.nodes[nodeId]);
			});
			return node;
		});
	}
	private parseTextures() {
		this.textures = this.json.textures
			? (this.json.textures as Array<any>).map((texture) => {
					return {
						sampler: texture.sampler !== undefined ? this.samplers[texture.sampler] : this.getSampler({}),
						texture: this.createTexture(texture.source)
					};
			  })
			: [];
	}
	private parseMaterials() {
		this.materials = this.json.materials
			? (this.json.materials as Array<any>).map((material) => {
					const mat = new PbrMaterial();
					if (material.normalTexture) mat.normalTexture = this.textures[material.normalTexture.index].texture;
					if (material.occlusionTexture)
						mat.aoTexture = this.textures[material.occlusionTexture.index].texture;
					if (material.emissiveTexture)
						mat.emissiveTexture = this.textures[material.emissiveTexture.index].texture;
					if (material.pbrMetallicRoughness?.baseColorTexture)
						mat.baseTexture = this.textures[material.pbrMetallicRoughness?.baseColorTexture.index].texture;
					if (material.pbrMetallicRoughness?.metallicRoughnessTexture)
						mat.metalnessRoughnessTexture =
							this.textures[material.pbrMetallicRoughness?.metallicRoughnessTexture.index].texture;
					mat.baseSampler = new Sampler({
						magFilter: "linear",
						minFilter: "linear",
						addressModeU: "repeat",
						addressModeV: "repeat"
					});
					mat.roughness = 0.0;
					mat.metalness = 1.0;
					return mat;
			  })
			: [];
	}
	private parseAccessors() {
		this.accessors = (this.json.accessors as Array<any>).map((accessor) => {
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
				array = this.getBufferView(accessor, n);
			}

			if (accessor.sparse) {
				accessor.sparse.indices.count = accessor.sparse.count;
				accessor.sparse.values.count = accessor.sparse.count;
				accessor.sparse.values.componentType = accessor.componentType;
				const indices = this.getBufferView(accessor.sparse.indices, 1);
				const values = this.getBufferView(accessor.sparse.values, n);
				for (let i = 0; i < accessor.sparse.count; i += 1) {
					for (let j = 0; j < n; j += 1) {
						array[indices[i] * n + j] = values[i * n + j];
					}
				}
			}

			return array;
		});
	}
	private parseAnimations() {
		this.animations =
			(this.json.animations as Array<any>)?.map((animation) => {
				const channels = (animation.channels as Array<any>).map(({ sampler, target }) => ({
					input: this.accessors[animation.samplers[sampler].input],
					output: this.accessors[animation.samplers[sampler].output],
					interpolation: animation.samplers[sampler].interpolation || "LINEAR",
					node: target.node,
					path: target.path
				}));
				const length = channels.reduce((acc, { input }) => Math.max(acc, input[input.length - 1]), 0);
				return { channels, length };
			}) || [];
	}
	private parseMeshs() {
		this.gltfMeshs = this?.json?.meshes?.map?.((gltfmesh) => {
			return {
				name: gltfmesh.name,
				primitives: gltfmesh?.primitives?.map?.((primitive) => {
					const material =
						primitive.material !== undefined
							? this.materials[primitive.material]
							: { pbrMetallicRoughness: {} };
					const geo = this.createGeometry(primitive, material);
					const mesh = new Mesh(geo, material);
					return mesh;
				})
			};
		});
	}
	private getSampler(samplerJson: any) {
		return new Sampler({
			magFilter: gltfEnum[samplerJson.magFilter || 9729] as GPUFilterMode,
			minFilter: gltfEnum[samplerJson.minFilter || 9729] as GPUFilterMode,
			addressModeU: gltfEnum[samplerJson.wrapS || 10497] as GPUAddressMode,
			addressModeV: gltfEnum[samplerJson.wrapT || 10497] as GPUAddressMode
		});
	}
	private getBufferView(accessor: any, n: number) {
		const bufferView = this.bufferViews[accessor.bufferView];
		const offset = (bufferView.byteOffset || 0) + (accessor.byteOffset || 0);
		const stride = Math.max(bufferView.byteStride / 4 || 0, n);
		let array = newTypedArray(
			accessor.componentType,
			this.buffers[bufferView.buffer],
			bufferView.buffer === 0 ? offset + this.glbOffset : offset,
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
	private createGeometry(primitive, material) {
		let indices = null;
		const defines: { [prop: string]: boolean | number } = { HAS_NORMAL: true };
		let vertexCount;
		if (primitive.indices !== undefined) {
			indices = toIndices(this.accessors[primitive.indices]);
			vertexCount = this.json.accessors[primitive.indices].count;
		} else {
			vertexCount = this.json.accessors[primitive.attributes.POSITION].count;
		}
		const positions = this.accessors[primitive.attributes.POSITION];
		const { max, min } = this.json.accessors[primitive.attributes.POSITION];
		const boundingBox = { max, min };

		let normals;
		if (primitive.attributes.NORMAL !== undefined) {
			normals = this.accessors[primitive.attributes.NORMAL];
		} else {
			normals = generateNormals(indices, positions);
		}

		let uvs = null;
		if (primitive.attributes.TEXCOORD_0 !== undefined) {
			uvs = this.accessors[primitive.attributes.TEXCOORD_0];
			defines.HAS_UV = true;
		}
		let uv1s = null;
		if (primitive.attributes.TEXCOORD_1 !== undefined) {
			uv1s = this.accessors[primitive.attributes.TEXCOORD_1];
			defines.HAS_UV1 = true;
		}

		let tangents = null;
		if (primitive.attributes.TANGENT !== undefined && primitive.attributes.NORMAL !== undefined) {
			tangents = this.accessors[primitive.attributes.TANGENT];
			//defines.HAS_TANGENT = true;
		} else if (material.normalTexture) {
			//tangents = generateTangents(indices, positions, normals, uvs!);
		}
		let colors = null;
		if (primitive.attributes.COLOR_0 !== undefined) {
			colors = this.accessors[primitive.attributes.COLOR_0];
			defines.HAS_COLOR = true;
		}
		let joints = null;
		if (primitive.attributes.JOINTS_0 !== undefined) {
			joints = this.accessors[primitive.attributes.JOINTS_0];
			defines.HAS_SKIN = true;
		}
		let weights = null;
		if (primitive.attributes.WEIGHTS_0 !== undefined) {
			weights = this.accessors[primitive.attributes.WEIGHTS_0];
		}
		const geo = new Geometry({ type: "pbrGeomtry" });
		if (indices) geo.setIndice(Array.from(indices));
		if (positions) geo.setAttribute(new Float32Attribute("position", Array.from(positions), 3));
		if (normals) geo.setAttribute(new Float32Attribute("normal", Array.from(normals), 3));
		if (colors) geo.setAttribute(new Float32Attribute("color", Array.from(colors), 3));
		if (uvs) geo.setAttribute(new Float32Attribute("uv", Array.from(uvs), 2));
		if (joints) geo.setAttribute(new Float32Attribute("joint0", Array.from(joints), 4));
		if (weights) geo.setAttribute(new Float32Attribute("weight0", Array.from(weights), 4));
		geo.defines = defines;
		geo.computeBoundingSphere(Array.from(positions));
		geo.count = vertexCount;
		return geo;
	}
	private createTexture(source: number) {
		return new Texture({
			size: {
				width: this.images[source].width,
				height: this.images[source].height,
				depth: 1
			},
			data: {
				source: this.images[source]
			},
			format: "rgba8unorm",
			usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
		});
	}
	private async loadImages() {
		const images: Array<ImageBitmap> = [];
		let loadExternalImages: Promise<any> = Promise.resolve();
		if (this.json.images) {
			loadExternalImages = Promise.all(
				this.json.images.map(async (image: any, index: number) => {
					if (image.uri) {
						const imageUrl = image.uri.slice(0, 5) === "data:" ? image.uri : `${this.rootUrl}/${image.uri}`;
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
		let loadInternalImages: Promise<any> = Promise.resolve();
		if (this.json.images) {
			loadInternalImages = Promise.all(
				this.json.images.map(async (image: any, index: number) => {
					if (image.bufferView !== undefined) {
						const { buffer, byteOffset, byteLength } = this.json.bufferViews[image.bufferView];
						const array = new Uint8Array(
							this.buffers[buffer],
							buffer === 0 ? byteOffset + this.glbOffset : byteOffset,
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
		return images;
	}
	private async loadBuffes() {
		const buffers: Array<ArrayBuffer> = [];
		await Promise.all(
			this.json.buffers.map((buffer: any, index: number) => {
				if (!buffer.uri) {
					if (index !== 0) {
						throw new Error("buffer uri undefined");
					}
					buffers[index] = this.glbBin!;
					return Promise.resolve();
				}
				const bufferUrl = buffer.uri.slice(0, 5) === "data:" ? buffer.uri : `${this.rootUrl}/${buffer.uri}`;
				return fetch(bufferUrl)
					.then((response) => response.arrayBuffer())
					.then((arrayBuffer: ArrayBuffer) => {
						buffers[index] = arrayBuffer;
					});
			})
		);
		return buffers;
	}
	private parseNodes() {
		this.nodes = this?.json?.nodes?.map((gltfNode) => {
			const node = new Node();
			if (gltfNode.mesh != undefined) node.meshList = this.gltfMeshs[gltfNode.mesh].primitives;
			return this.parseNodeTRS(node, gltfNode);
		});
	}
	private parseNodeTRS(node: Node, gltfNode: GLTFNode): Node {
		const { matrix, rotation, translation, scale } = gltfNode;
		if (matrix) Matrix4.fromColumnMajorArray(matrix, node.modelMatrix);
		if (rotation) node.quaternion.set(rotation[0], rotation[1], rotation[2], rotation[3]);
		if (translation) node.position.set(translation[0], translation[1], translation[2]);
		if (scale) node.scale.set(scale[0], scale[1], scale[2]);
		return node;
	}
	private normalizeData() {
		this?.nodes?.map?.((node: Node, index) => {
			node.children = this.json?.nodes[index]?.children?.map((nodeId: number) => {
				const childNode = this.nodes[nodeId];
				if (childNode) childNode.parent = node;
				return childNode;
			});
		});
	}
}
export async function loadGLTF(url: string) {
	let gltf;
	const ext = url.split(".").pop();
	const rootUrl = url.substring(0, url.lastIndexOf("/"));
	if (ext === "gltf") {
		const json = await fetch(url).then((response) => response.json());
		gltf = new GLTF(json, rootUrl, 0);
	} else {
		const glb = await fetch(url).then((response) => response.arrayBuffer());
		const jsonLength = new Uint32Array(glb, 12, 1)[0];
		const jsonChunk = new Uint8Array(glb, 20, jsonLength);
		const json = JSON.parse(new TextDecoder("utf-8").decode(jsonChunk));
		gltf = new GLTF(json, rootUrl, 28 + jsonLength, glb);
	}
	await gltf.parseData();
	return gltf;
}
type GLTFNode = {
	children?: number[];
	matrix?: number[];
	scale?: number[];
	rotation?: number[];
	translation?: number[];
};

import { RenderObjectType } from "../core/WebGPUTypes";
import Geometry from "../geometry/Geometry";
import PbrMaterial from "../material/PbrMaterial";
import Color from "../math/Color";
import Matrix4 from "../math/Matrix4";
import { Quaternion } from "../math/Quaternion";
import Vector3 from "../math/Vector3";
import { Mesh } from "../mesh/Mesh";
import Node from "../mesh/Node";
import { SKinMesh } from "../mesh/SKinMesh";
import { Float32Attribute } from "../render/Attribute";
import Sampler from "../render/Sampler";
import Texture from "../render/Texture";
import { generateNormals, gltfEnum, newTypedArray, toIndices, TypedArray } from "../utils/gltfUtils";
import { Accessor } from "./gltf/libs/Accessor";
import { Animation } from "./gltf/libs/Animation";
import { AnimationChannel } from "./gltf/libs/AnimationChannel";
import { AnimationChannelTarget } from "./gltf/libs/AnimationChannelTarget";
import { AnimationSampler } from "./gltf/libs/AnimationSampler";

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
	scenes: Array<Node>;

	nodes: Array<any>;

	cameras: Array<any>;

	meshes: Array<any>;

	images: Array<ImageBitmap>;

	animations: Array<GLTFAnimation>;

	private glbOffset: number;

	private buffers: ArrayBuffer[];

	private bufferViews: any;

	accessors: any;

	json: any;

	private materials: any;

	private glbBin?: ArrayBuffer;

	private rootUrl: string;

	textures: any[];

	samplers: Sampler[];

	constructor(json: any, rootUrl: string, glbOffset = 0, glbBin?: ArrayBuffer) {
		this.json = json;
		this.bufferViews = json.bufferViews;
		this.glbOffset = glbOffset;
		this.rootUrl = rootUrl;
		this.scenes = json.scenes;
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
		this.parseMeshs();
		this.parseNodes();
		this.normalizeData();
		this.parseScenes();
		this.parseAnimations();
	}
	private getAccessor(index: number) {
		return this.accessors[index];
	}
	private parseSamplers() {
		this.samplers = this.json.samplers
			? (this.json.samplers as Array<any>).map((sampler) => this.getSampler(sampler))
			: [];
	}
	private parseScenes() {
		this.scenes = this.json.scenes.map((scene) => {
			const nodes = scene?.nodes?.map((nodeId) => {
				return this.nodes[nodeId];
			});
			return nodes;
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
					const {
						baseColorFactor,
						metallicFactor,
						metallicRoughnessTexture,
						baseColorTexture,
						roughnessFactor
					} = material.pbrMetallicRoughness;
					if (material.normalTexture) mat.normalTexture = this.textures[material.normalTexture.index].texture;
					if (material.occlusionTexture)
						mat.aoTexture = this.textures[material.occlusionTexture.index].texture;
					if (material.emissiveTexture)
						mat.emissiveTexture = this.textures[material.emissiveTexture.index].texture;
					if (baseColorTexture) mat.baseTexture = this.textures[baseColorTexture.index].texture;
					if (metallicRoughnessTexture)
						mat.metalnessRoughnessTexture = this.textures[metallicRoughnessTexture.index].texture;
					if (baseColorFactor)
						mat.color = new Color(baseColorFactor[0], baseColorFactor[1], baseColorFactor[2]);
					mat.metalness = metallicFactor ?? 1.0;
					mat.roughness = roughnessFactor ?? 0.0;
					mat.baseSampler = new Sampler({
						magFilter: "linear",
						minFilter: "linear",
						addressModeU: "repeat",
						addressModeV: "repeat"
					});
					return mat;
			  })
			: [];
	}
	private parseAccessors() {
		this.accessors = (this.json.accessors as Array<any>).map((accessor, index) => {
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
			return new Accessor({
				componentType: <number>gltfEnum[accessor.componentType],
				count: accessor.count,
				type: n,
				values: array,
				id: index,
				min: accessor?.min,
				max: accessor?.max
			});
		});
	}
	private parseAnimations() {
		this.animations = this?.json?.animations?.map((gltfAnimation, index) => {
			const samplers = gltfAnimation?.samplers?.map((gltfSampler) => {
				const sampler = new AnimationSampler();
				sampler.formGltf(this, gltfSampler);
				return sampler;
			});
			const channels = gltfAnimation?.channels?.map((gltfChannel) => {
				const animationChannel = new AnimationChannel();
				animationChannel.sampler = samplers[gltfChannel.sampler];
				animationChannel.target = new AnimationChannelTarget(
					this.nodes[gltfChannel.target.node],
					gltfChannel.target.path
				);
				return animationChannel;
			});
			const animation = new Animation(index.toString(), samplers, channels);
			return animation;
		});
	}
	private parseMeshs() {
		this.meshes = this?.json?.meshes?.map?.((gltfmesh) => {
			return {
				name: gltfmesh.name,
				primitives: gltfmesh?.primitives?.map?.((primitive) => {
					const material =
						primitive.material !== undefined
							? this.materials[primitive.material]
							: { pbrMetallicRoughness: {} };
					const geo = this.createGeometry(primitive, material);
					const mesh = new Mesh(geo, material);
					mesh.name = gltfmesh.name;
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
		let accessor = null;
		const defines: { [prop: string]: boolean | number } = { HAS_NORMAL: true };
		let vertexCount;
		accessor = this.getAccessor(primitive.attributes.POSITION);
		const positions = accessor.getArray();
		vertexCount = accessor.count;
		// const { max, min } = accessor;
		// const boundingBox = { max, min };
		if (primitive.indices !== undefined) {
			accessor = this.getAccessor(primitive.indices);
			indices = toIndices(accessor.getArray());
			vertexCount = accessor.count;
		}
		let normals;

		if (primitive.attributes.NORMAL !== undefined) {
			accessor = this.getAccessor(primitive.attributes.NORMAL);
			normals = accessor.getArray();
		} else {
			normals = generateNormals(indices, positions);
		}

		let uvs = null;
		if (primitive.attributes.TEXCOORD_0 !== undefined) {
			accessor = this.getAccessor(primitive.attributes.TEXCOORD_0);
			uvs = accessor.getArray();
			defines.HAS_UV = true;
		}
		let uv1s = null;
		if (primitive.attributes.TEXCOORD_1 !== undefined) {
			accessor = this.getAccessor(primitive.attributes.TEXCOORD_1);
			uv1s = accessor.getArray();
			defines.HAS_UV1 = true;
		}

		let tangents = null;
		if (primitive.attributes.TANGENT !== undefined && primitive.attributes.NORMAL !== undefined) {
			accessor = this.getAccessor(primitive.attributes.TANGENT);
			tangents = accessor.getArray();
			// defines.HAS_TANGENT = true;
		} else if (material.normalTexture) {
			// tangents = generateTangents(indices, positions, normals, uvs!);
		}
		let colors = null,
			colorSize = 3;
		if (primitive.attributes.COLOR_0 !== undefined) {
			accessor = this.accessors[primitive.attributes.COLOR_0];
			colors = accessor.getArray();
			colorSize = accessor.type;
			defines.HAS_COLOR = true;
		}
		let joints = null;
		if (primitive.attributes.JOINTS_0 !== undefined) {
			accessor = this.getAccessor(primitive.attributes.JOINTS_0);
			joints = accessor.getArray();
			defines.HAS_SKIN = true;
		}
		let weights = null;
		if (primitive.attributes.WEIGHTS_0 !== undefined) {
			accessor = this.getAccessor(primitive.attributes.WEIGHTS_0);
			weights = accessor.getArray();
		}
		const geo = new Geometry({ type: "pbrGeomtry" });
		if (indices) geo.setIndice(indices);
		if (positions) geo.setAttribute(new Float32Attribute("position", Array.from(positions), 3));
		if (normals) geo.setAttribute(new Float32Attribute("normal", Array.from(normals), 3));
		if (colors) geo.setAttribute(new Float32Attribute("color", Array.from(colors), colorSize));
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
			this.parseNodeTRS(node, gltfNode);
			if (gltfNode.name) node.name = gltfNode.name;
			if (gltfNode.mesh != undefined) {
				let gltfSkin = undefined,
					isSkinMesh = false;
				if (gltfNode.skin != undefined) {
					gltfSkin = this.json.skins[gltfNode.skin];
					isSkinMesh = true;
				}
				this.meshes[gltfNode.mesh].primitives.forEach((primitive: Mesh, index: number, source: Array<Mesh>) => {
					const tempPrimitive =
						isSkinMesh && primitive.type == RenderObjectType.Mesh
							? new SKinMesh(primitive.geometry, primitive.material)
							: primitive;
					if (isSkinMesh && primitive.type == RenderObjectType.Mesh) {
						source[index] = tempPrimitive;
						tempPrimitive.setSkinData({
							inverseBindMatrices: this.getAccessor(gltfSkin.inverseBindMatrices).getMat4Array(),
							joints: gltfSkin.joints
							// name: gltfSkin.name,
							// skeleton: gltfSkin.skeleton
						});
					}
					node.add(tempPrimitive);
				});
			}
			return node;
		});
	}
	private parseNodeTRS(node: Node, gltfNode: GLTFNodeParms): Node {
		let { matrix, rotation, translation, scale } = gltfNode;
		if (matrix) {
			const tempMatrix4 = new Matrix4(),
				tempScale = new Vector3(),
				tempTranslation = new Vector3(),
				tempRotation = new Quaternion();
			Matrix4.fromColumnMajorArray(matrix, tempMatrix4);
			Matrix4.getScale(tempMatrix4, tempScale);
			Matrix4.getTranslation(tempMatrix4, tempTranslation);
			Matrix4.getRotation(tempMatrix4, tempRotation);
			rotation = tempRotation.toArray();
			translation = tempTranslation.toArray();
			scale = tempScale.toArray();
		}
		if (rotation) node.quaternion.set(rotation[0], rotation[1], rotation[2], rotation[3]);
		if (translation) node.position.set(translation[0], translation[1], translation[2]);
		if (scale) node.scale.set(scale[0], scale[1], scale[2]);
		return node;
	}
	private normalizeData() {
		this?.nodes?.map?.((node: Node, index) => {
			this.json?.nodes[index]?.children?.map((nodeId: number) => {
				const childNode = this.nodes[nodeId];
				node.add(childNode);
			});
		});
		this.meshes.map((mesh) => {
			mesh.primitives.map((primitive) => {
				if (primitive.type == RenderObjectType.SkinMesh)
					primitive.joints = primitive.joints.map((joint) => {
						return this.nodes[<number>joint];
					});
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
type GLTFNodeParms = {
	children?: number[];
	matrix?: number[];
	scale?: number[];
	rotation?: number[];
	translation?: number[];
};

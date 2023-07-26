import { Light } from "../light/Light";
import { Mesh } from "../mesh/Mesh";
import PostEffect from "../post-process/PostEffect";
import BindGroupEntity from "../render/BindGroupEntity";
import BindGroupLayout from "../render/BindGroupLayout";
import Buffer from "../render/Buffer";
import IndexBuffer from "../render/IndexBuffer";
import QuerySet from "../render/QuerySet";
import { RenderState } from "../render/RenderState";
import RenderTarget from "../render/RenderTarget";
import Sampler from "../render/Sampler";
import ShaderData from "../render/ShaderData";
import Texture from "../render/Texture";
import VertexBuffer from "../render/VertexBuffer";
import { ShaderSource } from "../shader/ShaderSource";
import {
	BlendFactor,
	BlendOperation,
	ColorWriteFlags,
	CompareFunction,
	CullMode,
	FrontFace,
	IndexFormat,
	InputStepMode,
	PrimitiveTopology,
	ShaderStage,
	StencilOperation,
	StorageTextureAccess,
	TextureFormat
} from "./WebGPUConstant";
export const GPUCanvasCompositingAlphaMode: {
	[key: string]: GPUCanvasCompositingAlphaMode;
} = {
	Opaque: "opaque",
	Premultiplied: "premultiplied"
};
export interface ContextState {
	device: GPUDevice;
	glslang: {
		compileGLSL: (source: string, type: string) => string;
	};
	debug: boolean;
	error: boolean;
}

export interface ContextOptions {
	canvas?: HTMLCanvasElement;
	container?: HTMLDivElement;
	context?: GPUCanvasContext;
	pixelRatio?: number;
	useGLSL?: boolean;
}

export interface LightMangerOptions {
	openShadow: boolean;
}

export interface BindGroupLayoutEntry extends GPUBindGroupLayoutEntry {
	name: string;
	uniforms?: any[];
	dimension?: GPUTextureDimension;
}

export interface BindGroupOptions extends GPUBindGroupDescriptor {
	resources: GPUBindingResource[];
}

export type ShaderStageName = "vertex" | "fragment" | "compute";

export type ShaderStageNameObjectKeys = {
	[key in ShaderStageName]?: string;
};
export type ShaderStageBodyName = "vertexBody" | "fragmentBody" | "computeBody";
export type ShaderStageBodyNameObjectKeys = {
	[key in ShaderStageBodyName]?: string;
};
export interface AttachmentOptions {
	op?: GPUStoreOp;
	texture?: Texture;
	resolveTarget?: Texture;
	storeOp?: GPUStoreOp;
	textureView?: () => GPUTextureView;
}

export type PassType = "render" | "compute";

export type GPUBindingType =
	| GPUBufferBindingType
	| GPUSamplerBindingType
	| GPUTextureSampleType
	| GPUStorageTextureAccess;

export type BindGroupLayoutEntryType = {
	binding: number;
	visibility: GPUShaderStageFlags;
	uniforms?: any[];
	buffer?: GPUBufferBindingLayout;
	sampler?: GPUSamplerBindingLayout;
	texture?: GPUTextureBindingLayout;
	storageTexture?: GPUStorageTextureBindingLayout;
	externalTexture?: GPUExternalTextureBindingLayout;
};
export type BufferResourceType = {
	buffer: GPUBufferBindingType;
	offset: number;
	size: number;
};
export type samplerBindEntityResourceType = {
	resource: GPUSampler;
};
export type textureBindEntityResourceType = {
	resource: GPUTextureView;
};
export type BindGroupEntityResourceType =
	| BufferResourceType
	| samplerBindEntityResourceType
	| textureBindEntityResourceType;
export type BindGroupEntityOptions = {
	binding: number;
	resource: GPUBindingResource;
};
export type BindGroupCacheOptions = {
	device: GPUDevice;
	label: string;
	layout: BindGroupLayout;
	entires: BindGroupEntity[];
	index?: number;
	offset?: number;
	alignedSize?: number;
	maxOffset?: number;
	dynamic?: boolean;
};
export type ImageData = {
	source: ImageBitmap | HTMLCanvasElement | Texture;
	width?: number;
	height?: number;
	depth?: number;
	sourceX?: number;
	sourceY?: number;
	mipLevel?: number;
	x?: number;
	y?: number;
	z?: number;
	aspect?: "all" | "stencil-only" | "depth-only";
	colorSpace?: "srgb";
	premultipliedAlpha?: boolean;
};
export type WebGPUTextureProps = {
	size: textureSize;

	fixedSize?: boolean;

	format: string;

	label?: string;

	usage?: number;

	sampler?: Sampler;

	data?: ImageData | Array<ImageData>;

	mipLevelCount?: number;

	sampleCount?: number;

	dimension?: dimension;

	viewFormats?: string;

	sampleType?: string;

	needMipMap?: boolean;

	dataIsTexture?: boolean;

	access?: StorageTextureAccess;
};
export type textureSize = {
	width: number;
	height: number;
	depth: number;
};
export type dimension = "1d" | "2d" | "3d";
export type bufferLayoutType = {
	type: string; // "uniform"
	hasDynamicOffset?: boolean;
	minBindingSize?: number;
};
// renderstate
export type DepthStencilProps = {
	format: TextureFormat;
	depthWriteEnabled: boolean;
	depthCompare: CompareFunction;
	stencilReadMask?: number;
	stencilWriteMask?: number;
	stencilFront?: {
		compare: CompareFunction;
		failOp: StencilOperation;
		depthFailOp: StencilOperation;
		passOp: StencilOperation;
	};
	stencilBack?: {
		compare: CompareFunction;
		failOp: StencilOperation;
		depthFailOp: StencilOperation;
		passOp: StencilOperation;
	};
	depthBias?: number;
	depthBiasSlopeScale?: number;
	depthBiasClamp?: number;
};
export type PrimitiveStateProps = {
	frontFace?: FrontFace;
	cullMode?: CullMode;
	unclippedDepth?: boolean;
	topology?: PrimitiveTopology;
	stripIndexFormat?: IndexFormat;
};
export type MultiSampleProps = {
	count?: number;
	mask?: number;
	alphaToCoverageEnabled?: boolean;
};
export type TargetProps = {
	format: TextureFormat;
	blend?: {
		color: {
			operation: BlendOperation;
			srcFactor: BlendFactor;
			dstFactor: BlendFactor;
		};
		alpha: {
			operation: BlendOperation;
			srcFactor: BlendFactor;
			dstFactor: BlendFactor;
		};
	};
	writeMask: ColorWriteFlags;
};
export type BlendConstantProp = {
	r: number;
	g: number;
	b: number;
	a: number;
};
export type RenderStateProps = {
	depthStencil?: DepthStencilProps;
	primitive?: PrimitiveStateProps;
	multisample?: MultiSampleProps;
	stencilReference?: number;
	targets?: Array<TargetProps>;
	viewport?: ViewPortProps;
	blendConstant?: BlendConstantProp;
	scissorTestEnabled?: boolean;
	stencilEnabled?: boolean;
};
export type ViewPortProps = {
	x?: number;
	y?: number;
	width?: number;
	height?: number;
	minDepth?: number;
	maxDepth?: number;
	variable?: boolean;
};
export type ScissorTestProps = {
	x: number;
	y: number;
	width: number;
	height: number;
	variable?: boolean;
};
export type ShaderMaterialParms = {
	type?: string;
	shaderId?: string;
	frag?: string | ShaderFunc;
	vert?: string | ShaderFunc;
	uniforms?: { [uniform: string]: IUniform };
	uniformBuffers?: Array<UniformBufferProp>;
	uniformTextureAndSampler?: {
		[uniform: string]: IUniform<any>;
	};
	defines?: ShaderDefine;
	light?: boolean;
};
export interface IUniform<TValue = any> {
	type: string;
	value: TValue;
	binding?: number;
	visibility?: number;
	textureView?: GPUTextureView;
}
export type Uniforms = { [uniform: string]: IUniform };
export type Instance = Mesh | PostEffect | Light;

export enum RenderObjectType {
	Camera = "camera",
	Light = "light",
	Mesh = "mesh",
	SkinMesh = "skinMesh",
	Node = "node",
	Axes = "axes",
	Skybox = "skyBox",
	PostEffect = "postEffect",
	Debug = "debug"
}
export enum LightType {
	SpotLight = "spotLight",
	PointLight = "pointLight",
	AmbientLight = "ambientLight",
	DirectionalLight = "directionalLight"
}
export type ShaderDefine = { [prop: string]: boolean | number };

export type ShaderSourceParams = {
	shaderId?: string;
	defines?: ShaderDefine;
	compute?: computeParams;
	render?: renderParams;
	language?: ShaderLanguage;
};
export type renderParams = {
	vertMain?: string;
	fragMain?: string;
	fragShader?: string | ShaderFunc;
	vertShader?: string | ShaderFunc;
};
export type computeParams = {
	computeMain?: string;
	computeShader?: string | ShaderFunc;
};
export interface GPUShaderModuleObject {
	vert: GPUShaderModule;
	frag: GPUShaderModule;
}
export type ShaderFunc = (defines?: ShaderDefine) => string;
export type ShaderString = {
	vert?: string;
	frag?: string;
	compute?: string;
};
export type ShaderModule = {
	vert?: GPUShaderModule;
	frag?: GPUShaderModule;
	compute?: GPUShaderModule;
};
export type UniformFunc = () => any;

export type DrawCommandParams = {
	shaderData?: ShaderData;

	renderTarget?: RenderTarget;

	vertexBuffers?: Array<VertexBuffer>;

	indexBuffer?: IndexBuffer;

	renderState?: RenderState;

	queryIndex?: number;

	count?: number;

	instances?: number;

	shaderSource?: ShaderSource;

	dirty?: boolean;

	lightShaderData?: ShaderData;

	useLight?: boolean;

	drawParams?: DrawParmas;
};

export type ModelParams = {
	shaderId?: string;
	frag?: string | ShaderFunc;
	vert?: string | ShaderFunc;
	compute?: string | ShaderFunc;
	vertexBuffers?: Array<VertexBufferProp>;
	uniformTextureAndSampler?: {
		[uniform: string]: IUniform<any>;
	};
	uniformBuffers?: Array<UniformBufferProp>;
	renderState?: RenderStateProp;
	indices?: Array<number>;
	draw?: DrawParmas;
	dispatch?: { x?: number; y?: number; z?: number };
	renderTarget?: RenderTarget;
};
export type VertexBufferProp = {
	uid?: string;
	stepMode?: string;
	arrayStride?: number;
	attributes?: { [prop: string]: AttributeProp };
};
export type UniformBufferProp = {
	uid?: string;
	type?: string;
	usage?: number;
	binding?: number;
	buffer?: Buffer;
	bufferSize?: number;
	visiblity?: ShaderStage;
	uniforms?: { [uniform: string]: IUniform<any> };
};
export type AttributeProp = {
	size?: number;
	value?: [];
	names?: Array<string>;
	itemSizes?: [];
	buffer?: Buffer;
};
export type RenderStateProp = {
	stencilReference: number;
	blendConstant?: BlendConstantProp;
	multiSample?: MultiSampleProps;
	scissorTest?: ScissorTestProps;
	viewPort?: ViewPortProps;
	primitive?: PrimitiveStateProps;
	depthStencil?: DepthStencilProps;
	targets?: Array<TargetProps>;
};
export type DrawParmas = {
	count?: number; // The number of indices to draw./The number of vertices to draw.
	instanceCount?: number; // The number of instances to draw.
	firstIndex?: number; // Offset into the index buffer, in indices, begin drawing
	firstVertex?: number; // Offset into the vertex buffers, in vertices, to begin drawing from.
	baseVertex?: number; //  Added to each index value before indexing into the vertex buffers.
	firstInstance?: number; // First instance to draw.
};
export type UniformStruct = {
	[uniform: string]: { type?: string; value?: object | Array<number>; offset?: number };
};
export enum UniformEnum {
	Float = "f32",
	FloatVec2 = "vec2<f32>",
	FloatVec3 = "vec3<f32>",
	FloatVec4 = "vec4<f32>",
	FloatArray = "array<f32>",
	Mat2 = "mat2x2<f32>",
	Mat3 = "mat3x3<f32>",
	Mat4 = "mat4x4<f32>",
	Color = "color",
	Mat4Array = "array<mat4x4<f32>>",
	Vec2Array = "array<vec2<f32>>",
	Vec3Array = "array<vec3<f32>>",
	Vec4Array = "array<vec4<f32>>",
	UniformUint = "u32",
	PointLights = "pointLights",
	PointLightShadows = "pointLightShadows",
	SpotLights = "spotLights",
	SpotLightShadows = "spotLightShadows",
	DirtectLights = "dirtectLights",
	DirtectLightShadows = "dirtectLightShadows",
	UniformStructArray = "StructArray"
}
export type VertexBufferParams = {
	label: string;
	index?: number;
	locationIndex?: number;
	stepMode?: InputStepMode;
	arrayStride?: number;
};
export enum ShaderLanguage {
	WGSL = "wgsl",
	GLSL = "glsl"
}
export enum ShaderMainStage {
	VERT = "vertex",
	FRAG = "fragment",
	COMPUTE = "compute"
}
export type RenderModelParams = {
	device: GPUDevice;
	passEncoder: GPURenderPassEncoder;
	querySet?: QuerySet;
	viewPort?: ViewPortProps;
	scissorTest?: ScissorTestProps;
};
export type ComputeModelParams = {
	device: GPUDevice;
	passEncoder: GPUComputePassEncoder;
};

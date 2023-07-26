import {
	BlendFactor,
	BlendOperation,
	TextureFormat,
	GPUColorWrite,
	CompareFunction,
	StencilOperation,
	FrontFace,
	CullMode,
	PrimitiveTopology
} from "../core/WebGPUConstant";
import { DepthStencilProps, ScissorTestProps, TargetProps, ViewPortProps } from "../core/WebGPUTypes";
// import { BindRenderState } from "../core/WebGPUTypes";
import defaultValue from "../utils/defaultValue";

export class RenderState {
	scissorTest: ScissorTest;
	viewport: ViewPort;
	targets: Array<Target>;
	depthStencil: DepthStencil;
	blendConstant: BlendConstant;
	stencilReference: number;
	multisample: MultiSample;
	primitive: Primitive;
	stencilEnabled: boolean;
	scissorTestEnabled: boolean;
	constructor(params?: RenderStateParams) {
		this.scissorTest = params?.scissorTest;
		this.viewport = params?.viewport;
		this.depthStencil = params?.depthStencil;
		this.blendConstant = params?.blendConstant;
		this.stencilReference = params?.stencilReference;
		this.multisample = params?.multisample;
		this.primitive = params?.primitive;
		this.stencilEnabled = false;
		this.scissorTestEnabled = false;
		this.targets = params?.targets;
	}
	bind(params: BindRenderState) {
		const { passEncoder, viewPort, scissorTest } = params;
		const finalViewport = this.viewport ?? viewPort;
		const finalScissorTest = this.scissorTest ?? scissorTest;
		if (this.stencilReference) passEncoder.setStencilReference(this.stencilReference);
		if ((finalViewport as ViewPort)?.equalsAndUpdateCache(cacheViewPort)) {
			const { x, y, width, height, minDepth, maxDepth } = finalViewport;
			passEncoder.setViewport(x, y, width, height, minDepth, maxDepth);
		}
		if (this.blendConstant) passEncoder.setBlendConstant(this.blendConstant);
		if ((finalScissorTest as ScissorTest)?.equalsAndUpdateCache(cacheScissorTest)) {
			const { x, y, width, height } = finalScissorTest;
			passEncoder.setScissorRect(x, y, width, height);
		}
	}
	destroy() {
		this.scissorTest = undefined;
		this.viewport = undefined;
		this.depthStencil = undefined;
		this.blendConstant = undefined;
		this.stencilReference = -1;
		this.multisample = undefined;
		this.primitive = undefined;
		this.stencilEnabled = false;
		this.scissorTestEnabled = false;
	}
}
export class BlendConstant {
	r: number;
	g: number;
	b: number;
	a: number;
	constructor(r: number, g: number, b: number, a: number) {
		this.r = r;
		this.g = g;
		this.b = b;
		this.a = a;
	}
}
export class MultiSample {
	count: number;
	mask: number;
	alphaToCoverageEnabled: boolean;
	constructor(count = 1, mask = 0xffffffff, alphaToCoverageEnabled = false) {
		this.count = count;
		this.mask = mask;
		this.alphaToCoverageEnabled = alphaToCoverageEnabled;
	}
	getMultiSampleDec() {
		return {
			count: this.count,
			mask: this.mask,
			alphaToCoverageEnabled: this.alphaToCoverageEnabled
		};
	}
}
export class ScissorTest {
	x: number;
	y: number;
	width: number;
	height: number;
	variable: boolean;
	constructor(x = 0, y = 0, width = 0, height = 0, variable = true) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.variable = variable;
	}
	set(x: number, y: number, width: number, height: number) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}
	static fromScissorTestProps(scissorTest: ScissorTestProps) {
		const { x = 0, y = 0, width = 0, height = 0, variable = true } = scissorTest;
		return new ScissorTest(x, y, width, height, variable);
	}
	equalsAndUpdateCache(scissorTest: ScissorTest): boolean {
		const { x, y, width, height } = scissorTest;
		if (this.x != x || this.y != y || this.width != width || this.height != height) {
			scissorTest.set(this.x, this.y, this.width, this.height);
			return true;
		}
		return false;
	}
}
export class ViewPort {
	x: number;
	y: number;
	width: number;
	height: number;
	minDepth: number;
	maxDepth: number;
	variable: boolean;
	constructor(x = 0, y = 0, width = 0, height = 0, minDepth = 0, maxDepth = 1, variable = true) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.minDepth = minDepth;
		this.maxDepth = maxDepth;
		this.variable = variable;
	}
	set(x: number, y: number, width: number, height: number, minDepth = 0, maxDepth = 1) {
		if (!this.variable) return;
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.minDepth = minDepth;
		this.maxDepth = maxDepth;
	}
	static fromViewPortProps(viewPort: ViewPortProps) {
		const { x = 0, y = 0, width = 0, height = 0, minDepth = 0, maxDepth = 1, variable = true } = viewPort;
		return new ViewPort(x, y, width, height, minDepth, maxDepth, variable);
	}
	equalsAndUpdateCache(viewPort: ViewPort): boolean {
		const { x, y, width, height, minDepth, maxDepth } = viewPort;
		if (
			this.x != x ||
			this.y != y ||
			this.width != width ||
			this.height != height ||
			this.minDepth != minDepth ||
			this.maxDepth != maxDepth
		) {
			viewPort.set(this.x, this.y, this.width, this.height, this.minDepth, this.maxDepth);
			return true;
		}
		return false;
	}
}
export class Primitive {
	frontFace: FrontFace;
	cullMode: CullMode;
	unclippedDepth: boolean;
	topology: PrimitiveTopology;
	constructor(topology?: PrimitiveTopology, cullMode?: CullMode, frontFace?: FrontFace, unclippedDepth?: boolean) {
		this.frontFace = defaultValue(frontFace, FrontFace.CCW);
		this.cullMode = defaultValue(cullMode, CullMode.None);
		this.unclippedDepth = defaultValue(unclippedDepth, false);
		this.topology = defaultValue(topology, PrimitiveTopology.TriangleList);
	}
	getGPUPrimitiveDec() {
		return {
			frontFace: this.frontFace,
			cullMode: this.cullMode,
			unclippedDepth: this.unclippedDepth,
			topology: this.topology
		};
	}
}
export class DepthStencil {
	format: TextureFormat;
	depthWriteEnabled: boolean;
	depthCompare: CompareFunction;
	stencilReadMask: number;
	stencilWriteMask: number;
	stencilFrontCompare: CompareFunction;
	stencilFrontFailOp: StencilOperation;
	stencilFrontDepthFailOp: StencilOperation;
	stencilFrontPassOp: StencilOperation;

	stencilBackCompare: CompareFunction;
	stencilBackFailOp: StencilOperation;
	stencilBackDepthFailOp: StencilOperation;
	stencilBackPassOp: StencilOperation;
	depthBias: number;
	depthBiasSlopeScale: number;
	depthBiasClamp: number;
	constructor(options?: DepthStencilProps) {
		this.format = defaultValue(options?.format, TextureFormat.Depth24Plus);
		this.depthWriteEnabled = defaultValue(options?.depthWriteEnabled, true);
		this.depthCompare = defaultValue(options?.depthCompare, CompareFunction.Less);
		this.stencilReadMask = defaultValue(options?.stencilReadMask, 0xffffffff);
		this.stencilWriteMask = defaultValue(options?.stencilWriteMask, 0xffffffff);
		this.stencilFrontCompare = defaultValue(options?.stencilFront?.compare, CompareFunction.Always);
		this.stencilFrontFailOp = defaultValue(options?.stencilFront?.failOp, StencilOperation.Keep);
		this.stencilFrontDepthFailOp = defaultValue(options?.stencilFront?.depthFailOp, StencilOperation.Keep);
		this.stencilFrontPassOp = defaultValue(options?.stencilFront?.passOp, StencilOperation.Keep);
		this.stencilBackCompare = defaultValue(options?.stencilBack?.compare, CompareFunction.Always);
		this.stencilBackFailOp = defaultValue(options?.stencilBack?.failOp, StencilOperation.Keep);
		this.stencilBackDepthFailOp = defaultValue(options?.stencilBack?.depthFailOp, StencilOperation.Keep);
		this.stencilBackPassOp = defaultValue(options?.stencilBack?.passOp, StencilOperation.Keep);
		this.depthBias = defaultValue(options?.depthBias, 0);
		this.depthBiasSlopeScale = defaultValue(options?.depthBiasSlopeScale, 0);
		this.depthBiasClamp = defaultValue(options?.depthBiasClamp, 0);
	}
	getGPUDepthStencilDec() {
		return {
			format: this.format,
			depthWriteEnabled: this.depthWriteEnabled,
			depthCompare: this.depthCompare,
			stencilReadMask: this.stencilReadMask,
			stencilWriteMask: this.stencilWriteMask,
			stencilFront: {
				compare: this.stencilFrontCompare,
				failOp: this.stencilFrontFailOp,
				depthFailOp: this.stencilFrontDepthFailOp,
				passOp: this.stencilFrontPassOp
			},
			stencilBack: {
				compare: this.stencilBackCompare,
				failOp: this.stencilBackFailOp,
				depthFailOp: this.stencilBackDepthFailOp,
				passOp: this.stencilBackPassOp
			},
			depthBias: this.depthBias,
			depthBiasSlopeScale: this.depthBiasSlopeScale,
			depthBiasClamp: this.depthBiasClamp
		};
	}
}
export class Target {
	format: TextureFormat;
	blendColorOperation?: BlendOperation;
	blendColorSrcFactor?: BlendFactor;
	blendColorDstFactor?: BlendFactor;
	blendAlphaOperation?: BlendOperation;
	blendAlphaSrcFactor?: BlendFactor;
	blendAlphaDstFactor?: BlendFactor;
	writeMask: GPUColorWrite;
	constructor(options?: TargetProps) {
		this.format = defaultValue(options?.format, TextureFormat.BGRA8Unorm);
		this.blendColorOperation = defaultValue(options?.blend?.color?.operation, BlendOperation.Add);
		this.blendColorSrcFactor = defaultValue(options?.blend?.color?.srcFactor, BlendFactor?.SrcAlpha);
		this.blendColorDstFactor = defaultValue(options?.blend?.color?.dstFactor, BlendFactor.OneMinusSrcAlpha);
		this.blendAlphaOperation = defaultValue(options?.blend?.alpha?.operation, BlendOperation.Add);
		this.blendAlphaSrcFactor = defaultValue(options?.blend?.alpha?.srcFactor, BlendFactor.One);
		this.blendAlphaDstFactor = defaultValue(options?.blend?.alpha?.dstFactor, BlendFactor.One);
		this.writeMask = defaultValue(options?.writeMask, GPUColorWrite.All);
	}
	getGPUTargetDec() {
		return {
			format: this.format,
			blend: {
				color: {
					operation: this.blendColorOperation,
					srcFactor: this.blendColorSrcFactor,
					dstFactor: this.blendColorDstFactor
				},
				alpha: {
					operation: this.blendAlphaOperation,
					srcFactor: this.blendAlphaSrcFactor,
					dstFactor: this.blendAlphaDstFactor
				}
			},
			writeMask: this.writeMask
		};
	}
}
const cacheViewPort = new ViewPort();
const cacheScissorTest = new ScissorTest();
export type RenderStateParams = {
	scissorTest?: ScissorTest;
	viewport?: ViewPort;
	targets?: Array<Target>;
	depthStencil?: DepthStencil;
	blendConstant?: BlendConstant;
	stencilReference?: number;
	multisample?: MultiSample;
	primitive?: Primitive;
	stencilEnabled?: boolean;
	scissorTestEnabled?: boolean;
};
export type BindRenderState = {
	passEncoder: GPURenderPassEncoder;
	viewPort: ViewPort;
	scissorTest: ScissorTest;
};

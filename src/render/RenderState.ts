import {
  BlendFactor,
  BlendOperation,
  TextureFormat,
  GPUColorWrite,
  CompareFunction,
  StencilOperation,
  FrontFace,
  CullMode,
  PrimitiveTopology,
} from "../core/WebGPUConstant";
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
  constructor() {
    this.scissorTest = undefined;
    this.viewport = undefined;
    this.depthStencil = undefined;
    this.blendConstant = undefined;
    this.stencilReference = 0;
    this.multisample = undefined;
    this.primitive = undefined;
    this.stencilEnabled = false;
    this.scissorTestEnabled = false;
    this.targets = undefined;
  }
  bind(passEncoder: GPURenderPassEncoder) {
    if (this.stencilReference)
      passEncoder.setStencilReference(this.stencilReference);
    if (this.viewport) {
      const { x, y, width, height, minDepth, maxDepth } = this.viewport;
      passEncoder.setViewport(x, y, width, height, minDepth, maxDepth);
    }
    if (this.blendConstant) passEncoder.setBlendConstant(this.blendConstant);
    if (this.scissorTest) {
      const { x, y, width, height } = this.scissorTest;
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
  constructor(
    count: number = 1,
    mask: number = 0xffffffff,
    alphaToCoverageEnabled: boolean = false
  ) {
    this.count = count;
    this.mask = mask;
    this.alphaToCoverageEnabled = alphaToCoverageEnabled;
  }
  getMultiSampleDec() {
    return {
      count: this.count,
      mask: this.mask,
      alphaToCoverageEnabled: this.alphaToCoverageEnabled,
    };
  }
}
export class ScissorTest {
  x: number;
  y: number;
  width: number;
  height: number;
  constructor(x: number, y: number, width: number, height: number) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}
export class ViewPort {
  x: number;
  y: number;
  width: number;
  height: number;
  minDepth: number;
  maxDepth: number;
  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    minDepth: number = 0,
    maxDepth: number = 1
  ) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.minDepth = minDepth;
    this.maxDepth = maxDepth;
  }
}
export class Primitive {
  frontFace: FrontFace;
  cullMode: CullMode;
  unclippedDepth: boolean;
  topology: PrimitiveTopology;
  constructor(
    topology?: PrimitiveTopology,
    cullMode?: CullMode,
    frontFace?: FrontFace,
    unclippedDepth?: boolean
  ) {
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
      topology: this.topology,
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
    this.depthCompare = defaultValue(
      options?.depthCompare,
      CompareFunction.Less
    );
    this.stencilReadMask = defaultValue(options?.stencilReadMask, 0xffffffff);
    this.stencilWriteMask = defaultValue(options?.stencilWriteMask, 0xffffffff);
    this.stencilFrontCompare = defaultValue(
      options?.stencilFrontCompare,
      CompareFunction.Always
    );
    this.stencilFrontFailOp = defaultValue(
      options?.stencilFrontFailOp,
      StencilOperation.Keep
    );
    this.stencilFrontDepthFailOp = defaultValue(
      options?.stencilFrontDepthFailOp,
      StencilOperation.Keep
    );
    this.stencilFrontPassOp = defaultValue(
      options?.stencilFrontPassOp,
      StencilOperation.Keep
    );
    this.stencilBackCompare = defaultValue(
      options?.stencilBackCompare,
      CompareFunction.Always
    );
    this.stencilBackFailOp = defaultValue(
      options?.stencilBackFailOp,
      StencilOperation.Keep
    );
    this.stencilBackDepthFailOp = defaultValue(
      options?.stencilBackDepthFailOp,
      StencilOperation.Keep
    );
    this.stencilBackPassOp = defaultValue(
      options?.stencilBackPassOp,
      StencilOperation.Keep
    );
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
        passOp: this.stencilFrontPassOp,
      },
      stencilBack: {
        compare: this.stencilBackCompare,
        failOp: this.stencilBackFailOp,
        depthFailOp: this.stencilBackDepthFailOp,
        passOp: this.stencilBackPassOp,
      },
      depthBias: this.depthBias,
      depthBiasSlopeScale: this.depthBiasSlopeScale,
      depthBiasClamp: this.depthBiasClamp,
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
    this.blendColorOperation = defaultValue(
      options?.blendColorOperation,
      BlendOperation.Add
    );
    this.blendColorSrcFactor = defaultValue(
      options?.blendColorSrcFactor,
      BlendFactor?.SrcAlpha
    );
    this.blendColorDstFactor = defaultValue(
      options?.blendColorDstFactor,
      BlendFactor.OneMinusSrcAlpha
    );
    this.blendAlphaOperation = defaultValue(
      options?.blendAlphaOperation,
      BlendOperation.Add
    );
    this.blendAlphaSrcFactor = defaultValue(
      options?.blendAlphaSrcFactor,
      BlendFactor.One
    );
    this.blendAlphaDstFactor = defaultValue(
      options?.blendAlphaDstFactor,
      BlendFactor.One
    );
    this.writeMask = defaultValue(options?.writeMask, GPUColorWrite.All);
  }
  getGPUTargetDec() {
    return {
      format: this.format,
      blend: {
        color: {
          operation: this.blendColorOperation,
          srcFactor: this.blendColorSrcFactor,
          dstFactor: this.blendColorDstFactor,
        },
        alpha: {
          operation: this.blendAlphaOperation,
          srcFactor: this.blendAlphaSrcFactor,
          dstFactor: this.blendAlphaDstFactor,
        },
      },
      writeMask: this.writeMask,
    };
  }
}
type DepthStencilProps = {
  format?: TextureFormat;
  depthWriteEnabled?: boolean;
  depthCompare?: CompareFunction;
  stencilReadMask?: number;
  stencilWriteMask?: number;
  stencilFrontCompare?: CompareFunction;
  stencilFrontFailOp?: StencilOperation;
  stencilFrontDepthFailOp?: StencilOperation;
  stencilFrontPassOp?: StencilOperation;

  stencilBackCompare?: CompareFunction;
  stencilBackFailOp?: StencilOperation;
  stencilBackDepthFailOp?: StencilOperation;
  stencilBackPassOp?: StencilOperation;
  depthBias?: number;
  depthBiasSlopeScale?: number;
  depthBiasClamp?: number;
};
type TargetProps = {
  format?: TextureFormat;
  blendColorOperation?: BlendOperation;
  blendColorSrcFactor?: BlendFactor;
  blendColorDstFactor?: BlendFactor;
  blendAlphaOperation?: BlendOperation;
  blendAlphaSrcFactor?: BlendFactor;
  blendAlphaDstFactor?: BlendFactor;
  writeMask?: GPUColorWrite;
};

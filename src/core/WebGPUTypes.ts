import BindGroupLayout from "../render/BindGroupLayout";
import BindGroupEntity from "../render/BindGroupEntity";
import Texture from "../render/Texture";
import {
  BlendFactor,
  BlendOperation,
  ColorWriteFlags,
  CompareFunction,
  CullMode,
  FrontFace,
  IndexFormat,
  PrimitiveTopology,
  StencilOperation,
  TextureFormat,
} from "./WebGPUConstant";
import Sampler from "../render/Sampler";
export const GPUCanvasCompositingAlphaMode: {
  [key: string]: GPUCanvasCompositingAlphaMode;
} = {
  Opaque: "opaque",
  Premultiplied: "premultiplied",
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
};
export type ImageData = {
  source: ImageBitmap | HTMLCanvasElement;
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
  size: extent3DDict;

  format: string;

  usage?: number;

  sampler?: Sampler;

  data?: ImageData | Array<ImageData>;

  mipLevelCount?: number;

  sampleCount?: number;

  dimension?: dimension;

  viewFormats?: string;

  sampleType?: string;

  needMipMap?: boolean;
};
export type extent3DDict = {
  width: number;
  height: number;
  depth: number;
};
export type dimension = "1d" | "2d" | "3d";
export type bufferLayoutType = {
  type: string; //"uniform"
  hasDynamicOffset?: Boolean;
  minBindingSize?: number;
};
//renderstate
export type DepthStencil = {
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
export type PrimitiveState = {
  frontFace?: FrontFace;
  cullMode?: CullMode;
  unclippedDepth?: boolean;
  topology?: PrimitiveTopology;
  stripIndexFormat?: IndexFormat;
};
export type MultiSample = {
  count?: number;
  mask?: number;
  alphaToCoverageEnabled?: boolean;
};
export type Target = {
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
export type BlendConstant = {
  r: number;
  g: number;
  b: number;
  a: number;
};
export type RenderStateProps = {
  depthStencil?: DepthStencil;
  primitive?: PrimitiveState;
  multisample?: MultiSample;
  stencilReference?: number;
  targets?: Array<Target>;
  viewport?: { x: number; y: number; width: number; height: number };
  blendConstant?: BlendConstant;
  scissorTestEnabled?: boolean;
  stencilEnabled?: boolean;
};
export type ViewPort = {
  x: number;
  y: number;
  width: number;
  height: number;
};
export type ScissorTest = {
  x: number;
  y: number;
  width: number;
  height: number;
};
export type ShaderMaterialParms = {
  type: string;
  frag: string;
  vert: string;
  uniforms: { [uniform: string]: IUniform };
};
export interface IUniform<TValue = any> {
  type: string;
  value: TValue;
}

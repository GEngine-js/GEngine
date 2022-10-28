import BindGroupLayout from "../render/BindGroupLayout";
import  BindGroupEntity  from "../render/BindGroupEntity";
import Texture from "../render/Texture";
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

export type BindGroupLayoutEntryType={
    binding:number;
    visibility:GPUShaderStageFlags;
    uniforms?:any[]
    buffer?:GPUBufferBindingLayout;
    sampler?:GPUSamplerBindingLayout ;
    texture?:GPUTextureBindingLayout ;
    storageTexture?: GPUStorageTextureBindingLayout ;
    externalTexture?:GPUExternalTextureBindingLayout ;
}
export type BufferResourceType={
  buffer:GPUBufferBindingType,
  offset:number,
  size:number
}
export type samplerBindEntityResourceType={
  resource:GPUSampler
}
export type textureBindEntityResourceType={
  resource:GPUTextureView
}
export type BindGroupEntityResourceType=BufferResourceType|samplerBindEntityResourceType|textureBindEntityResourceType
export type BindGroupEntityOptions={
  binding:number,
  resource:GPUBindingResource
}
export type BindGroupCacheOptions={
    device:GPUDevice,
    label:string,
    layout:BindGroupLayout,
    entires:BindGroupEntity[],
    index?:number
}
export type WebGPUTextureProps ={

  size: extent3DDict;

  format: string;

  usage: number;

  data?:ImageBitmap

  mipLevelCount?: number;

  sampleCount?: number;

  dimension?: dimension;

  viewFormats?: string;
};
export type extent3DDict= {
  width:number;
  height:number;
  depth:number;
}
export type dimension= "1d" | "2d" | "3d"
export default null;

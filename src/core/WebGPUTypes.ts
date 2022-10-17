export interface GLSLTypeQualifiers {
    layout?: GLSLLayoutQualifier;
    storage?: GLSLStorageQualifier;
  }
  
  // DGEL
  export type Language = "glsl" | "wgsl";
  
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
    uniforms?: Uniform[];
    members?: (Variable | Struct)[];
    dimension?: GPUTextureDimension;
    qualifiers?: GLSLTypeQualifiers;
    samplerType?: GLSLSamplerType | GLSLShadowSamplerType;
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
  
  export type PipelineVertexBufferIns = {
    stepMode: GPUVertexStepMode;
    attributes: Attribute[];
  };
  
  export interface PipelineOptions
    extends ShaderStageNameObjectKeys,
      ShaderStageBodyNameObjectKeys {
    bindGroupLayouts?: BindGroupLayout[];
    ins?: Attribute[] | PipelineVertexBufferIns[];
    outs?: Attribute[];
    structs?: Struct[];
    fragmentOuts?: Attribute[];
    fragmentTargets?: GPUColorTargetState[];
    descriptor?: Partial<GPURenderPipelineDescriptor>;
    stepMode?: GPUVertexStepMode;
    language?: Language;
  }
  
  export interface ShaderOptions {
    type: GPUShaderStageFlags;
    main: string;
    body?: string;
    ins?: Attribute[];
    outs?: Attribute[];
    structs?: Struct[];
    language?: Language;
  }
  
  export interface AttachmentOptions {
    op?: GPUStoreOp;
    view?: GPUTextureView;
    resolveTarget?: GPUTextureView;
  }
  
  export type PassType = "render" | "compute";
  
  export type GPUBindingType =
    | GPUBufferBindingType
    | GPUSamplerBindingType
    | GPUTextureSampleType
    | GPUStorageTextureAccess;
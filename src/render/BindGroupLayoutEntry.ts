import {BindGroupLayoutEntryType} from '../core/WebGPUTypes';
export default class BindGroupLayoutEntry{    
    binding: number;
    visibility: GPUShaderStageFlags;
    uniforms?: any[];
    buffer?: GPUBufferBindingLayout;
    sampler?: GPUSamplerBindingLayout;
    texture?: GPUTextureBindingLayout;
    storageTexture?: GPUStorageTextureBindingLayout;
    externalTexture?: GPUExternalTextureBindingLayout;
     constructor(options:BindGroupLayoutEntryType){
         this.binding=options.binding;
         this.visibility=options.visibility;
         this.buffer=options.buffer;
         this.sampler=options.sampler;
         this.texture=options.texture;
         this.storageTexture=options.storageTexture;
         this.externalTexture=options.storageTexture;
     }
     updateUniform(){}
}
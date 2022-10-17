export type BindGroupLayoutEntryType={
    binding:number;
    visibility:GPUShaderStageFlags;
    buffer?:GPUBufferBindingLayout ;
    sampler?:GPUSamplerBindingLayout ;
    texture?:GPUTextureBindingLayout ;
    storageTexture?: GPUStorageTextureBindingLayout ;
    externalTexture?:GPUExternalTextureBindingLayout ;
}
export default class BindGroupLayoutEntry{
     BindGroupLayoutEntry: BindGroupLayoutEntryType;
     constructor(options:BindGroupLayoutEntryType){
         this.BindGroupLayoutEntry=options
     }
}
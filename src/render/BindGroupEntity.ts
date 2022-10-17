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
export class BindGroupEntity {
    binding: number;
    resource: BufferResourceType | samplerBindEntityResourceType | textureBindEntityResourceType;
    constructor(binding:number,resource:BufferResourceType|samplerBindEntityResourceType|textureBindEntityResourceType){
        this.binding=binding;
        this.resource=resource;
    }
}
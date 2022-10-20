import {BindGroupEntityOptions,BindGroupEntityResourceType} from '../core/WebGPUTypes'
export class BindGroupEntity implements GPUBindGroupEntry {
    binding: number;
    resource: GPUBindingResource;
    constructor(options:BindGroupEntityOptions){
        this.binding=options.binding;
        this.resource=options.resource;
    }
}
import {BindGroupEntityOptions,BindGroupEntityResourceType} from '../core/WebGPUTypes'
export default class BindGroupEntity{
    binding: number;
    resource: GPUBindingResource;
    constructor(options:BindGroupEntityOptions){
        this.binding=options.binding;
        this.resource=options.resource;
    }
}
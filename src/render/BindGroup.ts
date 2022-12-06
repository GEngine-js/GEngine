import {BindGroupCacheOptions} from "../core/WebGPUTypes";
const bindGroupCache=new Map
class BindGroup{
  device:GPUDevice
  gpuBindGroup:GPUBindGroup
  label: string;
  index:number
  constructor(options:BindGroupCacheOptions) {
    this.index=options.index||0;
    this.gpuBindGroup=options.device.createBindGroup({
      label: options.label,
      layout: options.layout.gpuBindGroupLayout,
      entries:options.entires.map((entity)=>({binding:entity.binding, resource:entity.resource})),
    });
  }
  bind(passEncoder :GPURenderPassEncoder){
    passEncoder.setBindGroup(this.index, this.gpuBindGroup);
  }
  static getBindGroupFromCache(options:BindGroupCacheOptions):BindGroup{
    if (bindGroupCache.has(options.label)) {
      return bindGroupCache.get(options.label)
    } else {
       //@ts-ignore
      const bindGroup=new BindGroup(options);
      bindGroupCache.set(options.label,bindGroup);
       return bindGroup;
    }
  }
}

export default BindGroup;

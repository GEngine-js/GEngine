import { BindGroupEntity } from "./BindGroupEntity.js";
class BindGroupCache {
  cache:Map<string,GPUBindGroup>
  constructor() {
    this.cache=new Map()
  }
  getBindGroupFromCache(device:GPUDevice,label:string,layout:GPUBindGroupLayout,entires:Array<BindGroupEntity>):GPUBindGroup{
    if (this.cache.has(label)) {
      return this.cache.get(label)
    } else {
       //@ts-ignore
      const bindGroup= device.createBindGroup({ label:label,layout:layout, entires:entires});
      this.cache.set(label,bindGroup);
       return bindGroup;
    }
  }
}

export default BindGroupCache;

import { BindGroupEntity } from "./BindGroupEntity.js";
class BindGroupCache {
  cache:WeakMap<BindGroupEntity[],GPUBindGroup>
  constructor() {
    this.cache=new WeakMap()
  }
  getBindGroupFromCache(device:GPUDevice,label:string,layout:GPUBindGroupLayout,entires:Array<BindGroupEntity>):GPUBindGroup{
    if (this.cache.has(entires)) {
      return this.cache.get(entires)
    } else {
       //@ts-ignore
      const bindGroup= device.createBindGroup({ label:label,layout:layout, entires:entires});
      this.cache.set(entires,bindGroup);
       return bindGroup;
    }
  }
}

export default BindGroupCache;

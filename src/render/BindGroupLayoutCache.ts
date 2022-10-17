import { BindGroupLayoutEntryType } from "./BindGroupLayoutEntry.js";
import State from "./State.js";

export class BindGroupLayoutCache {
  cache: WeakMap<BindGroupLayoutEntryType[],GPUBindGroupLayout>;

  constructor() {
    this.cache = new WeakMap()
  }
   getBindGroupFromCache(device:GPUDevice,label:string,entires:BindGroupLayoutEntryType[] ):GPUBindGroupLayout{
    if (this.cache.has(entires)) {
      return this.cache.get(entires)
    } else {
       //@ts-ignore
      const bindGroupLayout= device.createBindGroupLayout({
        label:label,
        entries:entires
      })
      this.cache.set(entires,bindGroupLayout);
       return bindGroupLayout;
    }
  }
}

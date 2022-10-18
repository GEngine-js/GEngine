import { BindGroupLayoutEntryType } from "./BindGroupLayoutEntry.js";
import State from "./State.js";

export class BindGroupLayoutCache {
  cache:Map<string,GPUBindGroupLayout>;

  constructor() {
    this.cache = new Map()
  }
   getBindGroupFromCache(device:GPUDevice,label:string,entires:BindGroupLayoutEntryType[] ):GPUBindGroupLayout{
    if (this.cache.has(label)) {
      return this.cache.get(label)
    } else {
       //@ts-ignore
      const bindGroupLayout= device.createBindGroupLayout({
        label:label,
        entries:entires
      })
      this.cache.set(label,bindGroupLayout);
       return bindGroupLayout;
    }
  }
}

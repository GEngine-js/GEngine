import { BufferBindingType } from "../core/WebGPUConstant";
import BindGroupLayoutEntry from "./BindGroupLayoutEntry";
const layoutCache = new Map()
class BindGroupLayout {
  public gpuBindGroupLayout: GPUBindGroupLayout;
  index:number;
  private constructor(device:GPUDevice,label:string,public entries: BindGroupLayoutEntry[] = [],index?:number) {
    this.index=index||0
    this.gpuBindGroupLayout = device.createBindGroupLayout({
      label:label,
      entries: entries.map(
        (
          { visibility, buffer, sampler, texture, storageTexture },
          binding
        ) => ({
          binding,
          visibility,
          buffer,
          sampler,
          texture,
          storageTexture,
        })
      ),
    });
  }
  static getBindGroupFromCache(device:GPUDevice,label:string,entires:BindGroupLayoutEntry[] ):BindGroupLayout{
    if (layoutCache.has(label)) {
      return layoutCache.get(label)
    } else {
      const bindGroupLayout= new BindGroupLayout(device,label,entires)
      layoutCache.set(label,bindGroupLayout);
       return bindGroupLayout;
    }
  }
  public getBindGroupSize(): number {
    let size = 0;
    for (let i = 0; i < this.entries.length; i++) {
      const entry = this.entries[i];

      if (
        entry.buffer &&
        (!entry.buffer.type || entry.buffer.type === BufferBindingType.Uniform)
      ) {
        size += this.getBindingSize(entry);
      }
    }

    return size;
  }

  public getBindingSize(entry: BindGroupLayoutEntry): number {
    let size = 0;

    if (
      entry.buffer &&
      (!entry.buffer.type || entry.buffer.type === BufferBindingType.Uniform)
    ) {
      size += entry.uniforms
        .map(
          (uniform) =>
          uniform.size
        )
        .reduce((a, b) => a + b, 0);
    }

    return size;
  }
}

export default BindGroupLayout;

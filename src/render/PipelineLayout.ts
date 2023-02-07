import BindGroupLayout from "./BindGroupLayout";

const pipelineLayoutCache = new Map();
export class PipelineLayout {
  public gpuPipelineLayout: GPUPipelineLayout;
  index: number;
  private constructor(
    device: GPUDevice,
    label: string,
    public groupLayouts: BindGroupLayout[] = [],
    index?: number
  ) {
    this.index = index || 0;
    this.gpuPipelineLayout = device.createPipelineLayout({
      label: label,
      bindGroupLayouts: groupLayouts.map((layout) => {
        return layout.gpuBindGroupLayout;
      }),
    });
  }
  static getPipelineLayoutFromCache(
    device: GPUDevice,
    label: string,
    groupLayouts: BindGroupLayout[]
  ): PipelineLayout {
    if (pipelineLayoutCache.has(label)) {
      return pipelineLayoutCache.get(label);
    } else {
      const bindGroupLayout = new PipelineLayout(device, label, groupLayouts);
      pipelineLayoutCache.set(label, bindGroupLayout);
      return bindGroupLayout;
    }
  }
}

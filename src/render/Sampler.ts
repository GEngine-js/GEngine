class Sampler {
  public gpuSampler: GPUSampler;
  device: GPUDevice;
  layoutType:string
  constructor(
    device:GPUDevice,
    descriptor: GPUSamplerDescriptor = {
      magFilter: "linear",
      minFilter: "linear",
      mipmapFilter: "linear",
    }
  ) {
    this.device=device;
    this.layoutType="filtering";
    this.gpuSampler =device.createSampler(descriptor);
  }
  // public destroy(): void {
  //   this.gpuSampler.destroy();
  // }
}

export default Sampler;

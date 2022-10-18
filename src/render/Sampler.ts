import State from "./State.js";

class Sampler {
  public gpuSampler: GPUSampler;
  device: GPUDevice;

  constructor(
    device:GPUDevice,
    descriptor: GPUSamplerDescriptor = {
      magFilter: "linear",
      minFilter: "linear",
      mipmapFilter: "linear",
    }
  ) {
    this.device=device
    this.gpuSampler =device.createSampler(descriptor);
  }
  // public destroy(): void {
  //   this.gpuSampler.destroy();
  // }
}

export default Sampler;

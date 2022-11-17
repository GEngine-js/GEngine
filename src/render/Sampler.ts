import Context from "./Context";

class Sampler {
  public gpuSampler: GPUSampler;
  layoutType:string
  constructor(
    public descriptor: GPUSamplerDescriptor = {
      magFilter: "linear",
      minFilter: "linear",
      mipmapFilter: "linear",
    }
  ) {
    this.layoutType="filtering";
  }
  update(context:Context){
    if(!this.gpuSampler) this.gpuSampler=context.device.createSampler(this.descriptor);
  }
}

export default Sampler;

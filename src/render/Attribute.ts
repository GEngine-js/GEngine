class Attribute {
  constructor(public name: string, public format: string,public offset:number,public shaderLocation:number) {
    this.name=name;
    this.format=format;
    this.offset=offset;
    this.shaderLocation=shaderLocation;
  }
  getGPUAttribute(){
    return {
      shaderLocation:this.shaderLocation,
      format:this.format,
      offset:this.offset
    }
  }
}

export default Attribute;

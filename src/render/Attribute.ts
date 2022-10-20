class Attribute {
  constructor(public name: string, public format: string,public offset:number,public shaderLocation:number) {
    this.name=name;
    this.format=format;
    this.offset=offset;
    this.shaderLocation=shaderLocation
  }
}

export default Attribute;

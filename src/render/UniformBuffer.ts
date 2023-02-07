import { BufferUsage, ShaderStage } from "../core/WebGPUConstant";
import defaultValue from "../utils/defaultValue";
import Buffer from "./Buffer";
import Context from "./Context";
import {
  UniformColor,
  UniformFloat,
  UniformFloatVec2,
  UniformFloatVec3,
  UniformFloatVec4,
  UniformMat2,
  UniformMat3,
  UniformMat4,
} from "./Uniforms";
export default class UniformBuffer {
  public type: string;
  public hasDynamicOffset: boolean;
  public minBindingSize: number;
  private _uniforms: any;
  private _bufferSize: number;
  byteOffset: number;
  uniformDirty: boolean;
  binding: number;
  visibility: ShaderStage;
  usage: BufferUsage;
  buffer: Buffer;
  dataBuffer: Float32Array;
  offset: number;
  constructor(
    type?: string,
    usage?: BufferUsage,
    size?: number,
    dataBuffer?: Float32Array,
    binding?: number
  ) {
    this.type = defaultValue(type, "uniform");
    (this.hasDynamicOffset = false), (this.minBindingSize = 0);
    this.binding = defaultValue(binding, 0);
    this.visibility = ShaderStage.Fragment | ShaderStage.Vertex;
    this.usage = defaultValue(usage, BufferUsage.Uniform | BufferUsage.CopyDst);
    this._uniforms = new Map();
    this.uniformDirty = true;
    this._bufferSize = size;
    this.offset = 0;
    this.dataBuffer = defaultValue(
      dataBuffer,
      new Float32Array(defaultValue(this._bufferSize, 400))
    );
    this.byteOffset = 0;
  }
  get layoutType() {
    return {
      type: this.type,
      hasDynamicOffset: this.hasDynamicOffset,
      minBindingSize: this.minBindingSize,
    };
  }
  get bufferSize() {
    return defaultValue(this._bufferSize, this.uniformsSize * 4);
  }
  get uniformsSize() {
    //https://gpuweb.github.io/gpuweb/wgsl/#address-space-layout-constraints
    return Math.ceil(this.byteOffset / 16) * 16;
  }
  bind(context: Context) {
    this._uniforms.forEach((uniform) => {
      const result = uniform.set();
      if (result != undefined && this.uniformDirty == false)
        this.uniformDirty = result;
    });
    if (this.uniformDirty) {
      this.uniformDirty = false;
      if (!this.buffer)
        this.buffer = Buffer.createUniformBuffer(
          context.device,
          this.bufferSize,
          this.usage
        );
      this.buffer.setSubData(
        0,
        this.dataBuffer.slice(
          0,
          defaultValue(this?.bufferSize / 4, this.uniformsSize)
        )
      );
    }
  }
  public getUniformBufferStruct() {
    let uniformStruct = `struct MaterialUniform {\n `;
    this._uniforms.forEach((uniform) => {
      uniformStruct += this.createUniformString(uniform);
    });
    uniformStruct += `}\n`;
    return uniformStruct;
  }
  private createUniformString(uniform) {
    let result = ``;
    switch (uniform.type) {
      case "vec1":
        result = `${uniform.name} :f32,\n`;
        break;
      case "vec2":
        result = `${uniform.name} :vec2<f32>,\n`;
        break;
      case "vec3":
        result = `${uniform.name} :vec3<f32>,\n`;
        break;
      case "vec4":
        result = `${uniform.name} :vec4<f32>,\n`;
        break;
      case "mat2":
        result = `${uniform.name} :mat2x2<f32>,\n`;
        break;
      case "mat3":
        result = `${uniform.name} :mat3x3<f32>,\n`;
        break;
      case "mat4":
        result = `${uniform.name} :mat4x4<f32>,\n`;
        break;
    }
    return result;
  }
  setFloat(name: string, value: Function | number | Object, binding?: number) {
    if (this._uniforms.get(name)) return;
    const uniform = new UniformFloat(
      name,
      this.dataBuffer,
      this.byteOffset,
      value,
      binding
    );
    this._uniforms.set(name, uniform);
    this.byteOffset += uniform.size;
  }
  setFloatVec2(
    name: string,
    value: Function | number | Object,
    binding?: number
  ) {
    if (this._uniforms.get(name)) return;
    this.byteOffset += this.checkUniformOffset(
      this.byteOffset,
      UniformFloatVec2.align
    );
    const uniform = new UniformFloatVec2(
      name,
      this.dataBuffer,
      this.byteOffset,
      value,
      binding
    );
    this._uniforms.set(name, uniform);
    this.byteOffset += uniform.size;
  }
  setFloatVec3(
    name: string,
    value: Function | number | Object,
    binding?: number
  ) {
    if (this._uniforms.get(name)) return;
    this.byteOffset += this.checkUniformOffset(
      this.byteOffset,
      UniformFloatVec3.align
    );
    const uniform = new UniformFloatVec3(
      name,
      this.dataBuffer,
      this.byteOffset,
      value,
      binding
    );
    this._uniforms.set(name, uniform);
    this.byteOffset += uniform.size;
  }
  setColor(name: string, value: Function | number | Object, binding?: number) {
    if (this._uniforms.get(name)) return;
    this.byteOffset += this.checkUniformOffset(
      this.byteOffset,
      UniformColor.align
    );
    const uniform = new UniformColor(
      name,
      this.dataBuffer,
      this.byteOffset,
      value,
      binding
    );
    this._uniforms.set(name, uniform);
    this.byteOffset += uniform.size;
  }
  setFloatVec4(
    name: string,
    value: Function | number | Object,
    binding?: number
  ) {
    if (this._uniforms.get(name)) return;
    this.byteOffset += this.checkUniformOffset(
      this.byteOffset,
      UniformFloatVec4.align
    );
    const uniform = new UniformFloatVec4(
      name,
      this.dataBuffer,
      this.byteOffset,
      value,
      binding
    );
    this._uniforms.set(name, uniform);
    this.byteOffset += uniform.size;
  }
  setMatrix2(
    name: string,
    value: Function | number | Object,
    binding?: number
  ) {
    if (this._uniforms.get(name)) return;
    this.byteOffset += this.checkUniformOffset(
      this.byteOffset,
      UniformMat2.align
    );
    const uniform = new UniformMat2(
      name,
      this.dataBuffer,
      this.byteOffset,
      value,
      binding
    );
    this._uniforms.set(name, uniform);
    this.byteOffset += uniform.size;
  }
  setMatrix3(
    name: string,
    value: Function | number | Object,
    binding?: number
  ) {
    if (this._uniforms.get(name)) return;
    this.byteOffset += this.checkUniformOffset(
      this.byteOffset,
      UniformMat3.align
    );
    const uniform = new UniformMat3(
      name,
      this.dataBuffer,
      this.byteOffset,
      value,
      binding
    );
    this._uniforms.set(name, uniform);
    this.byteOffset += uniform.size;
  }
  setMatrix4(
    name: string,
    value: Function | number | Object,
    binding?: number
  ) {
    if (this._uniforms.get(name)) return;
    this.byteOffset += this.checkUniformOffset(
      this.byteOffset,
      UniformMat4.align
    );
    const uniform = new UniformMat4(
      name,
      this.dataBuffer,
      this.byteOffset,
      value,
      binding
    );
    this._uniforms.set(name, uniform);
    this.byteOffset += uniform.size;
  }
  private checkUniformOffset(byteSize: number, Align: number): number {
    //from https://gpuweb.github.io/gpuweb/wgsl/#address-space-layout-constraints
    return Math.ceil(byteSize / Align) * Align - byteSize;
  }
  destroy() {
    this.buffer.destroy();
  }
}

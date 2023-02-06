import { FrameState } from "../core/FrameState";
import { IUniform, ShaderMaterialParms } from "../core/WebGPUTypes";
import { Mesh } from "../mesh/Mesh";
import UniformBuffer from "../render/UniformBuffer";
import { ShaderSource } from "../shader/ShaderSource";
import { Material } from "./Material";

export default class ShaderMaterial extends Material {
  uniforms: { [uniform: string]: IUniform };
  uniformBuffer:UniformBuffer;
  constructor(options: ShaderMaterialParms) {
    super();
    const { type, frag, vert, uniforms } = options;
    this.type=type;
    this.shaderSource = new ShaderSource({
      type,
      frag,
      vert,
      customShader: true,
      defines:{},
      render:true
    });
    this.uniforms = uniforms;
    this.uniformBuffer=undefined
  }
  update(frameState?: FrameState, mesh?: Mesh) {
    if (!this.shaderData) this.createShaderData(mesh);
  }
  protected createShaderData(mesh?: Mesh) {
    super.createShaderData(mesh);
    // 
    const uniformsNames = Object.getOwnPropertyNames(this.uniforms);
    uniformsNames.map((uniformsName) => {
      this.addUniformToShaderData(uniformsName, this.uniforms[uniformsName]);
    });
    if(this.uniformBuffer)this.shaderData.setUniformBuffer('custom',this.uniformBuffer)
  }
  private addUniformToShaderData(name, uniform) {
    switch (uniform.type) {
      case "vec2":
        if(this.uniformBuffer)this.uniformBuffer = new UniformBuffer();
        this.uniformBuffer.setFloatVec2(name, () => {
          return this.uniforms[name].value;
        });
        break;
      case "vec3":
        if(this.uniformBuffer)this.uniformBuffer = new UniformBuffer();
        this.uniformBuffer.setFloatVec3(name, () => {
          return this.uniforms[name].value;
        });
        break;
      case "color":
        if(this.uniformBuffer)this.uniformBuffer = new UniformBuffer();
        this.uniformBuffer.setColor(name, () => {
          return this.uniforms[name].value;
        });
        break;
      case "vec4":
        if(this.uniformBuffer)this.uniformBuffer = new UniformBuffer();
        this.uniformBuffer.setFloatVec4(name, () => {
          return this.uniforms[name].value;
        });
      case "mat2":
        if(this.uniformBuffer)this.uniformBuffer = new UniformBuffer();
        this.uniformBuffer.setMatrix2(name, () => {
          return this.uniforms[name].value;
        });
        break;
      case "mat3":
        if(this.uniformBuffer)this.uniformBuffer = new UniformBuffer();
        this.uniformBuffer.setMatrix3(name, () => {
          return this.uniforms[name].value;
        });
      case "mat4":
        if(this.uniformBuffer)this.uniformBuffer = new UniformBuffer();
        this.uniformBuffer.setMatrix4(name, () => {
          return this.uniforms[name].value;
        });
        break;
      case "texture":
        this.shaderData.setTexture(name, () => {
          return this.uniforms[name].value;
        });
        break;
      case "sampler":
        this.shaderData.setSampler(name, () => {
          return this.uniforms[name].value;
        });
        break;
      default:
        throw new Error("not match unifrom type");
        break;
    }
  }
}

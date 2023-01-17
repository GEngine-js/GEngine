import { FrameState } from "../core/FrameState";
import { IUniform, ShaderMaterialParms } from "../core/WebGPUTypes";
import { Mesh } from "../mesh/Mesh";
import { ShaderSource } from "../shader/ShaderSource";
import { Material } from "./Material";

export default class ShaderMaterial extends Material {
  uniforms: { [uniform: string]: IUniform };
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
  }
  update(frameState?: FrameState, mesh?: Mesh) {
    if (!this.shaderData) this.createShaderData(mesh);
  }
  protected createShaderData(mesh?: Mesh) {
    super.createShaderData(mesh);
    const uniformsNames = Object.getOwnPropertyNames(this.uniforms);
    uniformsNames.map((uniformsName) => {
        debugger
      this.addUniformToShaderData(uniformsName, this.uniforms[uniformsName]);
    });
  }
  private addUniformToShaderData(name, uniform) {
    switch (uniform.type) {
      case "vec2":
        this.shaderData.setFloatVec2(name, () => {
          return this.uniforms[name].value;
        });
        break;
      case "vec3":
        this.shaderData.setFloatVec3(name, () => {
          return this.uniforms[name].value;
        });
        break;
      case "color":
        this.shaderData.setColor(name, () => {
          return this.uniforms[name].value;
        });
        break;
      case "vec4":
        this.shaderData.setFloatVec4(name, () => {
          return this.uniforms[name].value;
        });
      case "mat2":
        this.shaderData.setMatrix2(name, () => {
          return this.uniforms[name].value;
        });
        break;
      case "mat3":
        this.shaderData.setMatrix3(name, () => {
          return this.uniforms[name].value;
        });
      case "mat4":
        this.shaderData.setMatrix4(name, () => {
          return this.uniforms[name].value;
        });
        break;
      case "texture":
        this.shaderData.setTexture(name, () => {
            debugger
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

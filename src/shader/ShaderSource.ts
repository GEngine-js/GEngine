import combine from "../utils/combine";
import defaultValue from "../utils/defaultValue";
import getVertFrag from "./Shaders";
export interface GPUShaderModuleObject {
  vert: GPUShaderModule;
  frag: GPUShaderModule;
}
export class ShaderSource {
  vertEntryPoint?: string;
  fragEntryPoint?: string;
  vert?: string;
  frag?: string;
  compute?: string;
  computeMain?: string;
  defines?: {};
  dirty: boolean;
  render: boolean;
  type: string;
  private _uid: string;
  private customShader: boolean;
  constructor(options) {
    this.type = options.type;
    this.defines = options.defines;
    this.customShader = defaultValue(options.customShader, false);
    this.dirty = true;
    if (options.render) {
      this.render = true;
      this.vertEntryPoint = options.vertMain || "main";
      this.fragEntryPoint = options.fragMain || "main";
      this.vert = options.vert || undefined;
      this.frag = options.frag || undefined;
    } else {
      this.compute = options.compute || undefined;
      this.computeMain = options.computeMain || "main";
    }
  }
  get uid() {
    this._uid == JSON.stringify(this.defines);
    return this._uid;
  }
  update(
    globalDefines?: object,
    materialDefines?: object,
    geometryDefines?: object
  ) {}
  private updateShaderStr() {
    if (this.render) {
      const source = getVertFrag(this.type, this.defines);
      this.vert = source.vert;
      this.frag = source.frag;
    } else if (this.customShader) {
      //TODO
    }
  }
  public setDefines(defines) {
    this.dirty = true;
    this.defines = Object.assign(this.defines, defines);
  }
  createShaderModule(
    device: GPUDevice
  ): { vert: GPUShaderModule; frag: GPUShaderModule } | GPUShaderModule {
    if (this.dirty) {
      this.updateShaderStr();
      this.dirty = false;
    }
    if (this.vert) {
      const vert = device.createShaderModule({
        code: this.vert,
      });
      const frag = device.createShaderModule({
        code: this.frag,
      });
      return { vert, frag };
    } else {
      const compute = device.createShaderModule({
        code: this.compute,
      });
      return compute;
    }
  }
  static replaceMain(source: string, renamedMain: string) {
    renamedMain = `void ${renamedMain}()`;
    return source.replace(/void\s+main\s*\(\s*(?:void)?\s*\)/g, renamedMain);
  }
}

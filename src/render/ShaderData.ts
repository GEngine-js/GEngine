import { UniformSampler, UniformTexture } from "./Uniforms";
import BindGroupEntity from "./BindGroupEntity";
import BindGroupLayoutEntry from "./BindGroupLayoutEntry";
import BindGroupLayout from "./BindGroupLayout";
import BindGroup from "./BindGroup";
import defaultValue from "../utils/defaultValue";
import Context from "./Context";
import UniformBuffer from "./UniformBuffer";
import Texture from "./Texture";
import Sampler from "./Sampler";
export default class ShaderData {
  uniformBuffer: UniformBuffer;

  textureBinding: number;

  defines: { [prop: string]: boolean | number };

  defineDirty: boolean;

  label: string;

  bindGroup: BindGroup;

  groupLayout: BindGroupLayout;

  layoutIndex: number;

  groupIndex: number;

  protected _uniforms: Map<string, any>;

  constructor(label: string, size?: number, layoutIndex?: number, groupIndex?) {
    this.label = label;
    this.textureBinding = 1;
    this.defineDirty = true;
    this.defines = {};
    this._uniforms = new Map();
    this.groupIndex = defaultValue(groupIndex, 0);
    this.layoutIndex = defaultValue(layoutIndex, 0);
  }
  setUniformBuffer(name: string, uniformBuffer: UniformBuffer) {
    if (this._uniforms.get(name)) return;
    this._uniforms.set(name, uniformBuffer);
  }
  setTexture(name: string, value: Function | Texture, binding?: number) {
    if (this._uniforms.get(name)) return;
    const uniform = new UniformTexture(name, this.textureBinding, value);
    this.setDefine(name.concat("Binding"), this.textureBinding);
    this.textureBinding += 1;
    this._uniforms.set(name, uniform);
  }
  setSampler(name: string, value: Function | Sampler, binding?: number) {
    if (this._uniforms.get(name)) return;
    const uniform = new UniformSampler(name, this.textureBinding, value);
    this.setDefine(name.concat("Binding"), this.textureBinding);
    this.textureBinding += 1;
    this._uniforms.set(name, uniform);
  }
  setDefine(name: string, value: boolean | number) {
    if (this.defines[name] === undefined) {
      this.defineDirty = true;
      this.defines[name] = value;
    } else {
      if (this.defines[name] === value) {
        return;
      } else {
        this.defineDirty = true;
        this.defines[name] = value;
      }
    }
  }
  bind(context: Context, passEncoder: GPURenderPassEncoder) {
    this.uploadUniform(context);
    const { groupLayout, bindGroup } = this.createBindGroupAndLayout(
      context.device,
      this.label,
      this.layoutIndex,
      this.groupIndex
    );
    bindGroup.bind(passEncoder);
    this.bindGroup = bindGroup;
    this.groupLayout = groupLayout;
  }
  destroy() {
    this._uniforms.forEach((uniform) => {
      uniform.destroy();
    });
  }
  public getBindGroupAndLayout(
    device: GPUDevice,
    label: string,
    index: number
  ) {
    const layoutEntities = this.createBindGroupLayoutEntry();
    const groupLayout = BindGroupLayout.getBindGroupLayoutFromCache(
      device,
      label,
      layoutEntities,
      index
    );
    const groupEntities = this.createBindGroupEntity();
    const bindGroup = BindGroup.getBindGroupFromCache({
      label: label,
      entires: groupEntities,
      device: device,
      layout: groupLayout,
      index: index,
    });
    return { groupLayout, bindGroup };
  }
  public createBindGroupAndLayout(
    device: GPUDevice,
    label: string,
    layoutIndex?: number,
    groupIndex?: number
  ) {
    const layoutEntities = this.createBindGroupLayoutEntry();
    const groupLayout = BindGroupLayout.getBindGroupLayoutFromCache(
      device,
      label,
      layoutEntities,
      layoutIndex || 0
    );
    const groupEntities = this.createBindGroupEntity();
    const bindGroup = BindGroup.getBindGroupFromCache({
      label: label,
      entires: groupEntities,
      device: device,
      layout: groupLayout,
      index: groupIndex || 0, //后续改成groupIndex
    });
    return { groupLayout, bindGroup };
  }
  protected uploadUniform(context: Context) {
    this._uniforms.forEach((uniform) => {
      uniform.bind(context);
    });
  }
  private createBindGroupLayoutEntry() {
    const result = new Map();
    this._uniforms.forEach((uniform) => {
      if (!result.has(uniform.binding)) {
        result.set(uniform.binding, this.createOneLayoutEntry(uniform));
      }
    });
    const lauoutEntityArray = [];
    result.forEach((value) => {
      lauoutEntityArray.push(value);
    });

    return lauoutEntityArray;
  }
  private createBindGroupEntity() {
    const result = new Map();
    this._uniforms.forEach((uniform) => {
      if (!result.has(uniform.binding)) {
        result.set(uniform.binding, this.creayeOneGroupEntity(uniform));
      }
    });
    const groupEntityArray = [];
    result.forEach((value) => {
      groupEntityArray.push(value);
    });

    return groupEntityArray;
  }
  private createOneLayoutEntry(uniform) {
    let layoutEntity;
    if (uniform.type === "uniform" || uniform.type === "read-only-storage") {
      layoutEntity = new BindGroupLayoutEntry({
        binding: uniform.binding,
        buffer: uniform.layoutType,
        visibility: uniform.visibility,
      });
    } else if (uniform.type === "texture") {
      layoutEntity = new BindGroupLayoutEntry({
        binding: uniform.binding,
        visibility: uniform.visibility,
        texture: uniform.layoutType,
      });
    } else if (uniform.type === "sampler") {
      layoutEntity = new BindGroupLayoutEntry({
        binding: uniform.binding,
        visibility: uniform.visibility,
        sampler: uniform.layoutType,
      });
    }
    return layoutEntity;
  }
  private creayeOneGroupEntity(uniform) {
    let groupEntity;
    if (uniform.type === "uniform" || uniform.type === "read-only-storage") {
      groupEntity = new BindGroupEntity({
        binding: uniform.binding,
        resource: {
          buffer: uniform.buffer.gpuBuffer,
          offset: uniform.offset,
          size: uniform.bufferSize,
        },
      });
    } else if (uniform.type === "texture") {
      groupEntity = new BindGroupEntity({
        binding: uniform.binding,
        resource: uniform.texture.texureView,
      });
    } else if (uniform.type === "sampler") {
      groupEntity = new BindGroupEntity({
        binding: uniform.binding,
        resource: uniform.sampler.gpuSampler,
      });
    }
    return groupEntity;
  }
}

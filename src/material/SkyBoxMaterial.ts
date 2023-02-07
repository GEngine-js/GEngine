import { ShaderSource } from "../shader/ShaderSource";
import { Material } from "./Material";
import { Mesh } from "../mesh/Mesh";
import { FrameState } from "../core/FrameState";
import { CompareFunction, TextureFormat } from "../core/WebGPUConstant";
import CubeTextureLoader from "../loader/CubeTextureLoader";
import UniformBuffer from "../render/UniformBuffer";
export default class SkyBoxMaterial extends Material {
  images: any[];
  constructor() {
    super();
    this.type = "skybox";
    this.shaderSource = new ShaderSource({
      type: this.type,
      render: true,
      defines: {},
    });
    this.images = [];
    this.depthStencil = {
      depthWriteEnabled: false,
      depthCompare: CompareFunction.LessEqual,
      format: TextureFormat.Depth24Plus,
    };
  }
  async loadTexture(urls) {
    const result = await CubeTextureLoader(urls);
    this.baseTexture = result.texture;
    this.baseSampler = result.sampler;
  }
  update(frameState: FrameState, mesh: Mesh) {
    if (!this.shaderData) {
      this.createShaderData(mesh);
    }
  }
  protected createShaderData(mesh: Mesh) {
    super.createShaderData(mesh);
    const uniformBuffer = new UniformBuffer();
    uniformBuffer.setMatrix4("modelMatrix", () => {
      return mesh.modelMatrix;
    });
    this.shaderData.setUniformBuffer("sky", uniformBuffer);
    this.shaderData.setTexture("baseTexture", this.baseTexture);
    this.shaderData.setSampler("baseSampler", this.baseSampler);
  }
}

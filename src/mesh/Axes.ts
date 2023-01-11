/*
 * @Author: junwei.gu junwei.gu@jiduauto.com
 * @Date: 2022-11-13 17:27:40
 * @LastEditors: junwei.gu junwei.gu@jiduauto.com
 * @LastEditTime: 2023-01-10 18:40:59
 * @FilePath: \GEngine\src\mesh\Axes.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { FrameState } from "../core/FrameState";
import { VertextBuffers } from "../core/VertextBuffers";
import {
  IndexFormat,
  InputStepMode,
  PrimitiveTopology,
  VertexFormat,
} from "../core/WebGPUConstant";
import ColorMaterial from "../material/ColorMaterial";
import Attribute from "../render/Attribute";
import Buffer from "../render/Buffer";
import DrawCommand from "../render/DrawCommand";
import { Mesh } from "./Mesh";
export default class Axes extends Mesh {
  private vertBuffers: VertextBuffers;

  private indexBuffer: Buffer;

  count: number;

  type: string;

  material: ColorMaterial;

  constructor() {
    super();
    this.distanceToCamera = 10;
    this.material = new ColorMaterial();
  }
  update(frameState: FrameState) {
    this.updateMatrix();
    this.material.update(frameState, this);
    if (!this.drawCommand) this.init(frameState);
    frameState.commandList.opaque.push(this.drawCommand);
  }
  private init(frameState: FrameState) {
    const { context, pass } = frameState;
    const { device, systemRenderResource } = context;
    const data = new Float32Array([
      /* position */ 0, 0, 0, /* color */ 1, 0, 0, 1, /* position */ 1, 0, 0,
      /* color */ 1, 0.5, 0.5, 1, /* position */ 0, 0, 0, /* color */ 0, 1, 0,
      1, /* position */ 0, 1, 0, /* color */ 0.5, 1, 0.5, 1, /* position */ 0,
      0, 0, /* color */ 0, 0, 1, 1, /* position */ 0, 0, 1, /* color */ 0.5,
      0.5, 1, 1,
    ]);
    const indices = new Uint16Array([0, 1, 2, 3, 4, 5]);
    const buffer = Buffer.createVertexBuffer(device, data);
    //attribute
    const pat = new Attribute("position", VertexFormat.Float32x3, 0, 0);
    const cat = new Attribute(
      "color",
      VertexFormat.Float32x4,
      3 * Float32Array.BYTES_PER_ELEMENT,
      1
    );
    // vertBuffer
    const vertBuffers = new VertextBuffers([
      {
        index: 0,
        arrayStride: 28,
        stepMode: InputStepMode.Vertex,
        buffer,
        attributes: [pat, cat],
      },
    ]);
    this.vertBuffers = vertBuffers;
    this.indexBuffer = Buffer.createIndexBuffer(device, indices);
    this.count = indices.length;
    this.drawCommand = new DrawCommand({
      vertexBuffers: this.vertBuffers,
      indexBuffer: this.indexBuffer,
      indexFormat: IndexFormat.Uint16,
      shaderData: this.material.shaderData,
      instances: 1,
      count: this.count,
      renderState: this.material.renderState,
      topology: PrimitiveTopology.LineList,
      shaderSource: this.material.shaderSource,
      materialType: this.material.type,
      type: "render",
      onwer: this,
    });
  }
}

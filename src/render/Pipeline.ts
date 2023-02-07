import BindGroupLayout from "./BindGroupLayout";
import DrawCommand from "./DrawCommand";
import { PipelineLayout } from "./PipelineLayout";
import RenderState from "./RenderState";

const renderPipelines = new Map();
const computePipelines = new Map();
export default class Pipeline {
  gpuPipeline: GPURenderPipeline | GPUComputePipeline;
  type: string;
  device: GPUDevice;
  descriptor: GPURenderPipelineDescriptor | GPUComputePipelineDescriptor;
  constructor(
    type: string,
    device: GPUDevice,
    descriptor: GPURenderPipelineDescriptor | GPUComputePipelineDescriptor
  ) {
    this.type = type;
    this.descriptor = descriptor;
    this.device = device;
    this.createPipeline();
  }
  private createPipeline() {
    if (this.type == "render") {
      this.gpuPipeline = this.device.createRenderPipeline(
        this.descriptor as GPURenderPipelineDescriptor
      );
    } else {
      this.gpuPipeline = this.device.createComputePipeline(
        this.descriptor as GPUComputePipelineDescriptor
      );
    }
  }
  public bind(passEncoder: GPURenderPassEncoder | GPUComputePassEncoder) {
    if (this.type == "render") {
      (passEncoder as GPURenderPassEncoder).setPipeline(
        this.gpuPipeline as GPURenderPipeline
      );
    } else {
      (passEncoder as GPUComputePassEncoder).setPipeline(
        this.gpuPipeline as GPUComputePipeline
      );
    }
  }
  static getRenderPipelineFromCache(
    device: GPUDevice,
    drawComand: DrawCommand,
    groupLayouts: BindGroupLayout[]
  ): Pipeline {
    const { renderState, shaderSource, materialType } = drawComand;
    const rs = RenderState.getFromRenderStateCache(renderState);
    const rsStr = JSON.stringify(rs);

    const combineStr = materialType.concat(shaderSource.uid).concat(rsStr);
    const hashId = stringToHash(combineStr);
    const combineLayouts = groupLayouts.sort(
      (layout1, layout2) => layout1.index - layout2.index
    );
    let pipeline = renderPipelines.get(hashId);
    if (!pipeline) {
      const descriptor = Pipeline.getPipelineDescriptor(
        device,
        drawComand,
        rs,
        combineLayouts,
        hashId.toString()
      );
      pipeline = new Pipeline("render", device, descriptor);
      renderPipelines.set(hashId, pipeline);
    }
    return pipeline;
  }
  static getComputePipelineFromCache(
    device: GPUDevice,
    drawComand: DrawCommand,
    groupLayouts: BindGroupLayout[]
  ): Pipeline {
    const { shaderSource, materialType } = drawComand;
    const hashId = stringToHash(materialType.concat(shaderSource.uid));
    let pipeline = computePipelines.get(hashId);
    if (!pipeline) {
      const { shaderSource } = drawComand;
      pipeline = device.createComputePipeline({
        layout: PipelineLayout.getPipelineLayoutFromCache(
          device,
          hashId.toString(),
          groupLayouts
        ).gpuPipelineLayout,
        compute: {
          module: shaderSource.createShaderModule(device) as GPUShaderModule,
          entryPoint: shaderSource.computeMain,
        },
      });
      computePipelines.set(hashId, pipeline);
    }
    return pipeline;
  }
  private static getPipelineDescriptor(
    device: GPUDevice,
    drawComand: DrawCommand,
    renderState: RenderState,
    groupLayouts: BindGroupLayout[],
    hashId: string
  ): GPURenderPipelineDescriptor {
    const { vertexBuffer, shaderSource } = drawComand;
    const { vert, frag } = shaderSource.createShaderModule(device) as {
      vert: GPUShaderModule;
      frag: GPUShaderModule;
    };
    return {
      //需要改动
      layout: PipelineLayout.getPipelineLayoutFromCache(
        device,
        hashId,
        groupLayouts
      ).gpuPipelineLayout,
      vertex: {
        module: vert,
        entryPoint: shaderSource.vertEntryPoint,
        buffers: vertexBuffer.getBufferDes() as Iterable<GPUVertexBufferLayout>,
      },
      primitive: renderState.primitive,
      depthStencil: renderState.depthStencil as GPUDepthStencilState,
      multisample: renderState.multisample,
      fragment: {
        module: frag,
        entryPoint: shaderSource.fragEntryPoint,
        targets: renderState.targets as Iterable<GPUColorTargetState>,
      },
    };
  }
}
// Borrowed from https://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
function stringToHash(str) {
  let hash = 0;
  if (str.length == 0) return hash;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}

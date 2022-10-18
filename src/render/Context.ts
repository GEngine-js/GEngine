import {
  GPUCanvasCompositingAlphaMode,
  GPUTextureUsage,
} from "../core/WebGPUTypes";
import { ContextOptions } from "../core/WebGPUTypes";
import BindGroupCache from "./BindGroupCache.js";
import { BindGroupLayoutCache } from "./BindGroupLayoutCache.js";
import { RenderPipelineCache } from "./RenderPipelineCache.js";
import DrawCommand from "./DrawCommand.js";

class Context {
  public canvas: HTMLCanvasElement;
  public context: GPUCanvasContext;
  public pixelRatio: number;
  public device:GPUDevice;

  private adapter: GPUAdapter;

  public commandEncoder: GPUCommandEncoder | null;
  private passEncoder: GPURenderPassEncoder | GPUComputePassEncoder | null;

  //cache
  private bindGroupCache:BindGroupCache;

  private bindGroupLayoutCache:BindGroupLayoutCache;
  
  private renderPipelineCache:RenderPipelineCache;
  glslang: any;



  constructor({ canvas, context, pixelRatio }: ContextOptions = {}) {
    this.canvas = canvas || document.createElement("canvas");
    this.context =
      context || (this.canvas.getContext("webgpu") as GPUCanvasContext);
    this.pixelRatio = pixelRatio || window.devicePixelRatio || 1;
    this.bindGroupCache=new BindGroupCache();
    this.bindGroupLayoutCache=new BindGroupLayoutCache();
    this.renderPipelineCache=new RenderPipelineCache({});
    this.device=undefined;
  }

  public async init(
    requestAdapter = {},
    deviceDescriptor = {},
    presentationContextDescriptor = {},
    glslangPath: string
  ): Promise<boolean> {
    try {
      if (!this.context) {
        throw new Error(`Failed to instantiate "webgpu" context.`);
      }
      if (!navigator.gpu) {
        throw new Error(`Missing "navigator.gpu".`);
      }

      this.adapter = await navigator.gpu.requestAdapter(requestAdapter);
      this.device = await this.adapter.requestDevice(deviceDescriptor);
      this.device.addEventListener("uncapturederror", (error) => {
        console.log(error);
        //State.error = true;
      });

      this.context.configure({
        device: this.device,
        format: navigator.gpu.getPreferredCanvasFormat(),
        usage: GPUTextureUsage.RENDER_ATTACHMENT,
        alphaMode: GPUCanvasCompositingAlphaMode.Premultiplied,
        ...presentationContextDescriptor,
      });

      this.glslang = await (
        await import(
          /* webpackIgnore: true */ glslangPath ||
            "@webgpu/glslang/dist/web-devel/glslang.js"
        )
      ).default();
    } catch (error) {
      console.error(error);
      return false;
    }

    return true;
  }

  public resize(
    width: number,
    height: number,
    presentationContextDescriptor = {}
  ): void {
    const w = width * this.pixelRatio;
    const h = height * this.pixelRatio;
    this.canvas.width = w;
    this.canvas.height = h;
    Object.assign(this.canvas.style, { width, height });

    this.context.configure({
      device: this.device,
      format: navigator.gpu.getPreferredCanvasFormat(),
      usage: GPUTextureUsage.RENDER_ATTACHMENT,
      alphaMode: GPUCanvasCompositingAlphaMode.Premultiplied,
      ...presentationContextDescriptor,
    });
  }

  private submit(command: DrawCommand, subcommand?: () => unknown): void {
    if (!this.commandEncoder) {
      console.warn("You need to submit commands inside the render callback.");
      return;
    }

    const currentTexture = this.context.getCurrentTexture();

    if (command.pass) {
      if (command.pass.type === "render") {
        this.passEncoder = command.pass.passEncoder;
      } else if (command.pass.type === "compute") {
        this.passEncoder = this.commandEncoder.beginComputePass();
      }
    }

    if (command.pipeline) {
      this.passEncoder.setPipeline(
        command.pipeline.gpuPipeline as GPURenderPipeline & GPUComputePipeline
      );
    }

    if (command.vertexBuffers) {
      for (let i = 0; i < command.vertexBuffers.length; i++) {
        (this.passEncoder as GPURenderPassEncoder).setVertexBuffer(
          i,
          command.vertexBuffers[i].gpuBuffer
        );
      }
    }

    if (command.indexBuffer) {
      (this.passEncoder as GPURenderPassEncoder).setIndexBuffer(
        command.indexBuffer.gpuBuffer,
        command.indexFormat
      );
    }

    if (command.bindGroups) {
      for (let i = 0; i < command.bindGroups.length; i++) {
        this.passEncoder.setBindGroup(i, command.bindGroups[i].gpuBindGroup);
      }
    }

    if (command.indexBuffer) {
      (this.passEncoder as GPURenderPassEncoder).drawIndexed(
        command.count || 0,
        command.instances || 1,
        0,
        0,
        0
      );
    } else if (command.count) {
      (this.passEncoder as GPURenderPassEncoder).draw(
        command.count,
        command.instances || 1,
        0,
        0
      );
    } else if (command.dispatch) {
      (this.passEncoder as GPUComputePassEncoder).dispatch(
        ...((Array.isArray(command.dispatch)
          ? command.dispatch
          : [command.dispatch]) as [number, number?, number?])
      );
    }

    if (subcommand) subcommand();

    if (command.pass) {
      this.passEncoder.end();
      this.passEncoder = null;
    }
  }

  public render(drawCommand:DrawCommand): void {
    this.commandEncoder = this.device.createCommandEncoder();
    // Submit commands
    this.submit(drawCommand);

    this.device.queue.submit([this.commandEncoder.finish()]);
    this.commandEncoder = null;
  }
}

export default Context;

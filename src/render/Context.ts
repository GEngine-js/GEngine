import {
  GPUCanvasCompositingAlphaMode,
} from "../core/WebGPUTypes";
import{TextureUsage} from '../core/WebGPUConstant'
import { ContextOptions } from "../core/WebGPUTypes";
import DrawCommand from "./DrawCommand.js";
import RenderTarget from "./RenderTarget";
import RenderState from "./RenderState";
import BindGroupLayout from "./BindGroupLayout";
import BindGroup from "./BindGroup";
import SystemRenderResource from "../core/SystemRenderResource";
import { MipmapGenerator } from "../utils/MipmapGenerator";
import Pipeline from "./Pipeline";

class Context {
  public canvas: HTMLCanvasElement;

  public context: GPUCanvasContext;

  public pixelRatio: number;

  public device:GPUDevice;

  private adapter: GPUAdapter;

  public commandEncoder: GPUCommandEncoder | null;

  private passEncoder: GPURenderPassEncoder | GPUComputePassEncoder | null;
  
  public currentRenderTarget:RenderTarget;

  public systemRenderResource:SystemRenderResource;

  public presentationSize:{width:number, height:number, depth:number};
  
  public presentationFormat :GPUTextureFormat

  public mipmapTools:MipmapGenerator;

  constructor({ canvas,container, context, pixelRatio, }: ContextOptions = {}) {
    this.canvas = canvas || document.createElement("canvas");
    this.canvas.style.display = 'block';
    this.canvas.width= window.innerWidth;
    this.canvas.height=window.innerHeight;
    container.appendChild(this.canvas);
    this.context =context || (this.canvas.getContext("webgpu") as GPUCanvasContext);
    this.pixelRatio = pixelRatio || window.devicePixelRatio || 1;   
    this.device=undefined;
  }

  public async init(
    requestAdapter = {},
    deviceDescriptor = {},
    presentationContextDescriptor = {},
    // glslangPath: string
  ): Promise<boolean> {
    try {
      if (!this.context) {
        throw new Error(`Failed to instantiate "webgpu" context.`);
      }
      if (!navigator.gpu) {
        throw new Error(`Missing "navigator.gpu".`);
      }

      this.adapter = await navigator.gpu.requestAdapter();
      this.device = await this.adapter.requestDevice();
      this.presentationSize = {
        width:this.canvas.clientWidth * this.pixelRatio,
        height:this.canvas.clientHeight * this.pixelRatio,
        depth:1
      };
      this.presentationFormat = navigator.gpu.getPreferredCanvasFormat();
      this.device.addEventListener("uncapturederror", (error) => {
        console.log(error);
        //State.error = true;
      });
      this.mipmapTools=new MipmapGenerator(this.device);
      this.context.configure({
        device: this.device,
       // format: navigator.gpu.getPreferredCanvasFormat(),
        format:this.presentationFormat,
        usage: TextureUsage.RenderAttachment,
        alphaMode: GPUCanvasCompositingAlphaMode.Premultiplied,
        ...presentationContextDescriptor,
      });
      this.systemRenderResource=new SystemRenderResource();
      
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
      usage: TextureUsage.RenderAttachment,
      alphaMode: GPUCanvasCompositingAlphaMode.Premultiplied,
      ...presentationContextDescriptor,
    });
  }

  public render(command: DrawCommand,passEncoder:GPURenderPassEncoder | GPUComputePassEncoder): void {

    if (command.pipeline) {
        command.pipeline.bind(passEncoder);
        // const pipeline=Pipeline.getRenderPipelineFromCache(this.device,command,this.systemRenderResource.layouts);
        // pipeline.bind(passEncoder)
    }
    if (command.renderState) {
      RenderState.applyRenderState(passEncoder as GPURenderPassEncoder,command.renderState)
    }
    if (command.vertexBuffers) {
      command.vertexBuffers.bind(passEncoder as GPURenderPassEncoder)
    }

    if (command.indexBuffer) {
      (passEncoder as GPURenderPassEncoder).setIndexBuffer(
        command.indexBuffer.gpuBuffer,
        command.indexFormat
      );
    }
    //command.shaderData.getBindGroupAndLayout()
    if (command.bindGroups) {
      const combineBindGroups=command.bindGroups.concat(this.systemRenderResource.groups);
      combineBindGroups.forEach(bindGroup => {
            bindGroup.bind(passEncoder as GPURenderPassEncoder)
      });
    }
    if (command.indexBuffer) {
      (passEncoder as GPURenderPassEncoder).drawIndexed(
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
      (passEncoder as GPUComputePassEncoder).dispatch(
        ...((Array.isArray(command.dispatch)
          ? command.dispatch
          : [command.dispatch]) as [number, number?, number?])
      );
    }
  }
}

export default Context;

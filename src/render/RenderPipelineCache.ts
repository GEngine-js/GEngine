import Geometry from "../geometry/Geometry";
import { Material } from "../material/Material";
import { GPUShaderModuleObject, ShaderSource } from "../shader/ShaderSource";
import BindGroupLayout from "./BindGroupLayout";
import DrawCommand from "./DrawCommand";
import { PipelineLayout } from "./PipelineLayout";
import RenderState from "./RenderState";
// Borrowed from https://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
function stringToHash(str){
  let hash = 0;
  if (str.length == 0) return hash;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash<<5)-hash)+char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}

// Creates a cache of GPUPipline objects that helps prevents duplicate pipelines for being created for compatible
// pipeline descriptors.
export class RenderPipelineCache {
  device: any;
  renderPipelines: Map<number, GPURenderPipeline>;
  computePipelines:Map<number,GPUComputePipeline>;
  constructor(device:GPUDevice) {
    this.device = device;
    this.renderPipelines = new Map();
  }
  getRenderPipelineFromCache(drawComand:DrawCommand,systemGroupLayouts:BindGroupLayout[]):GPURenderPipeline{ 
    const {renderState,uuid,groupLayouts}=drawComand; 
    const rs=RenderState.getFromRenderStateCache(renderState)
    const rsStr=JSON.stringify(rs);
    const combineStr=uuid.concat(rsStr);
    const hashId= stringToHash(combineStr);
    const combineLayouts=groupLayouts.concat(systemGroupLayouts).sort((layout1,layout2)=>layout1.index-layout2.index)
    let pipeline = this.renderPipelines.get(hashId);
    if(!pipeline){
      const descriptor=this.getPipelineDescriptor(drawComand,rs,combineLayouts,hashId.toString());
      pipeline = this.device.createRenderPipeline(descriptor);
      this.renderPipelines.set(hashId, pipeline);
    }
    return pipeline;
  }
  getComputePipelineFromCache(drawComand:DrawCommand):GPUComputePipeline{
    
    const hashId= stringToHash(drawComand.uuid);
    let pipeline = this.computePipelines.get(hashId);
    if(!pipeline){
      const {shaderSource,groupLayouts}=drawComand;
      const layout=groupLayouts.length>0?groupLayouts.map((layout)=>{return layout.gpuBindGroupLayout}): "auto";
      pipeline =this.device.createComputePipeline({
        layout,
        compute: {
          module: shaderSource.compute,
          entryPoint: shaderSource.computeMain,
        },
      });
      this.computePipelines.set(hashId, pipeline);
    }
    return pipeline;
  }
  private getPipelineDescriptor(drawComand:DrawCommand,renderState:RenderState,groupLayouts:BindGroupLayout[] ,hashId:string):GPURenderPipelineDescriptor{
    const {vertexBuffers,topology,indexFormat,shaderSource}=drawComand;
    const {vert,frag}=shaderSource.createShaderModule(this.device)as GPUShaderModuleObject
    const primitiveState: GPUPrimitiveState = {
      topology:topology as  GPUPrimitiveTopology,
      frontFace:renderState.primitive.frontFace,
      cullMode:renderState.primitive.cullMode,
      stripIndexFormat: indexFormat as GPUIndexFormat,
    };
      return {
        //需要改动
        layout:PipelineLayout.getPipelineLayoutFromCache(this.device,hashId,groupLayouts).gpuPipelineLayout,   
        vertex: {
          module:vert,
          entryPoint: shaderSource.vertEntryPoint,
          buffers:vertexBuffers.getBuffers() as Iterable<GPUVertexBufferLayout>,
        },
        primitive:primitiveState,
        depthStencil:renderState.depthStencil,
        multisample:renderState.multisample,
        fragment: {
          module: frag,
          entryPoint: shaderSource.fragEntryPoint,
          targets:renderState.targets as Iterable<GPUColorTargetState>
        },
      };
  }
}
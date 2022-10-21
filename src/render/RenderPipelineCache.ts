import Geometry from "../geometry/Geometry";
import { Material } from "../material/Material";
import { GPUShaderModuleObject } from "../shader/ShaderSource";
import BindGroupLayout from "./BindGroupLayout";
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
  renderPipelines: Map<number, GPUPipelineBase>;
  computePipelines:Map<number,GPUPipelineBase>;
  constructor(device:GPUDevice) {
    this.device = device;
    this.renderPipelines = new Map();
  }
  getRenderPipelineFromCache(geometry:Geometry,material:Material){ 
    const {renderState}=material; 
    const rsStr=JSON.stringify(RenderState.getFromRenderStateCache(renderState));
    const combineStr=material.type.concat(rsStr);
    const hashId= stringToHash(combineStr);
    let pipeline = this.renderPipelines.get(hashId);
    if(!pipeline){
      const descriptor=this.getPipelineDescriptor(geometry,material);
      pipeline = this.device.createRenderPipeline(descriptor);
      this.renderPipelines.set(hashId, pipeline);
    }
    return pipeline;
  }
  getComputePipelineFromCache(material:Material){
    
    const hashId= stringToHash(material.type);
    let pipeline = this.computePipelines.get(hashId);
    if(!pipeline){
      const {shaderSource,groupLayouts}=material;
      const layout=groupLayouts.length>0?groupLayouts.map((layout)=>{return layout.gpuBindGroupLayout}): "auto";
      pipeline =this.device.createComputePipeline({
        layout,
        compute: {
          module: shaderSource.compute,
          entryPoint: shaderSource.computeMain,
        },
      });
      this.renderPipelines.set(hashId, pipeline);
    }
    return pipeline;
  }
  private getPipelineDescriptor(geometry:Geometry,material:Material):GPURenderPipelineDescriptor{
    const {vertexBuffers,topology,stripIndexFormat}=geometry;
    const {renderState,shaderSource,groupLayouts}=material;
    const {vert,frag}=shaderSource.createShaderModule(this.device)as GPUShaderModuleObject
    const primitiveState: GPUPrimitiveState = {
      topology:topology as  GPUPrimitiveTopology,
      frontFace:renderState.primitive.frontFace,
      cullMode:renderState.primitive.cullMode,
      stripIndexFormat: stripIndexFormat as GPUIndexFormat,
    };
      return {
        //需要改动
        layout:PipelineLayout.getPipelineLayoutFromCache(this.device,'test',groupLayouts).gpuPipelineLayout,   
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
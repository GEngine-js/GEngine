import BindGroup from "../render/BindGroup";
import  BindGroupEntity  from "../render/BindGroupEntity";
import  BindGroupLayout  from "../render/BindGroupLayout";
import BindGroupLayoutEntry from "../render/BindGroupLayoutEntry";
import Color from '../math/Color'
import RenderState from "../render/RenderState";
import Sampler from "../render/Sampler";
import Texture from "../render/Texture";
import DataBuffer from "../utils/DataBuffer";
import Buffer from "../render/Buffer";
import { ShaderSource } from "../shader/ShaderSource";
import Context from "../render/Context";
import { Uniform } from "../render/Uniforms";
export class Material{
    public uniformBuffer:Buffer;
    color?: number;
    uniforms:any[];
    renderState:{};
    baseSampler?: Sampler;
    baseTexture?: Texture;
    alpha?: number;
    uniformsDataBuffer: DataBuffer;
    type: string;
    label: string;
    shaderSource: ShaderSource;
    groupLayouts: BindGroupLayout[];
    bindGroups?: BindGroup[];
    transparent:Boolean;
    constructor(){
        //
        this.label=undefined;
        this.type=undefined;
        this.baseTexture=undefined;
        this.baseSampler=undefined;
        this.renderState=undefined;
        this.color=undefined;
        this.alpha=undefined;
        //Buffer
        this.uniformBuffer=undefined;
        //DataBuffer
        this.uniformsDataBuffer=new DataBuffer()
        this.uniforms=undefined;
        this.shaderSource=undefined;
        this.groupLayouts=undefined;
    }
    onBeforeRender() {}

	onBeforeCompile() {}

    update(frameState){
        
    }
    updateUniform(){
        this.uniforms.forEach((uniform)=>{
            uniform.set();
        });
        this.uniformBuffer.setSubData(0,this.uniformsDataBuffer.toFloat32Array())
    }
    static createBindGroupAndLayout(device:GPUDevice,uniforms:any[],uniformBuffer:Buffer,label:string,index:number){
        const layoutEntities=Material.createBindGroupLayoutEntry(uniforms,uniformBuffer);
        const groupLayout= BindGroupLayout.getBindGroupFromCache(device,label,layoutEntities,index);
        const groupEntities=Material.createBindGroupEntity(uniforms,uniformBuffer);
        const bindGroup=BindGroup.getBindGroupFromCache({
            label:label,
            entires:groupEntities,
            device:device,
            layout:groupLayout,
            index:index
           });
       return {groupLayout,bindGroup}
    }
    static createBindGroupLayoutEntry(uniforms,uniformBuffer){
        const result=new Map()
        uniforms.forEach((uniform)=>{
          if(!result.has(uniform.binding)){
               result.set(uniform.binding,Material.createOneLayoutEntry(uniform,uniformBuffer))
          }
        })
        const lauoutEntityArray=[]
        result.forEach((value)=>{
            lauoutEntityArray.push(value)
        })
    
       return lauoutEntityArray;
    }
    static createBindGroupEntity(uniforms,uniformBuffer) {
        const result=new Map()
        uniforms.forEach((uniform)=>{
          if(!result.has(uniform.binding)){
               result.set(uniform.binding,Material.creayeOneGroupEntity(uniform,uniformBuffer,uniforms))
          }
        })
        const groupEntityArray=[]
        result.forEach((value)=>{
            groupEntityArray.push(value)
        })
    
       return groupEntityArray;
    }
    static createOneLayoutEntry(uniform,uniformBuffer){
        let layoutEntity;
        if(uniform.type==='number'){
            layoutEntity= new BindGroupLayoutEntry({
                binding: uniform.binding,
                buffer:uniform?.buffer||uniformBuffer.layoutType,
                visibility: uniform.visibility,
                // uniforms: this.uniforms,
            });
        } else if(uniform.type==='texture'){
            layoutEntity = new BindGroupLayoutEntry({
                binding: uniform.binding,
                visibility: uniform.visibility,
                texture:uniform.value.layoutType
            });
        } else if(uniform.type==='sampler'){
            layoutEntity= new BindGroupLayoutEntry({
                binding: uniform.binding,
                visibility: uniform.visibility,
                sampler: {
                    type:uniform.value.layoutType,
                }
            });
        }
       return layoutEntity;
    }
    static creayeOneGroupEntity(uniform,uniformBuffer,uniforms){
        let groupEntity;
        if(uniform.type==='number'){
            groupEntity=new BindGroupEntity({
                binding:uniform.binding,
                resource:{
                    buffer:uniform?.buffer.gpuBuffer||uniformBuffer.gpuBuffer,
                    offset: 0,
                    //兼容灯光
                    size:uniform.bufferSize||Material.getBindingSize(uniforms)
                }
              });
        } else if(uniform.type==='texture'){
            groupEntity = new BindGroupEntity({
                binding:uniform.binding,
                resource:uniform.value.gpuTexture.createView()
            });
        } else if(uniform.type==='sampler'){
            groupEntity= new BindGroupEntity({
                binding:uniform.binding,
                resource:uniform.value.baseSampler.gpuSampler
            });
        }
       return groupEntity;
    }
    static getBindingSize(uniforms){
        let size= uniforms
        .map((uniform) =>{ if(uniform.type==='number') { return uniform.size}})
        .reduce((a, b) => a + b, 0);
        return size;
    }
    public destory(){
        this.label=undefined;
        this.type=undefined;
        this.baseTexture=undefined;
        this.baseSampler=undefined;
        this.renderState=undefined;
        this.color=undefined;
        this.alpha=undefined;
        this.uniformsDataBuffer=undefined
        this.uniforms=undefined;
    }
}
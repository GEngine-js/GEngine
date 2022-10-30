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
import combine from "../utils/combine";
import { BlendFactor, BlendOperation, ColorWriteFlags, CompareFunction, CullMode, FrontFace, StencilOperation, TextureFormat } from "../core/WebGPUConstant";
import defaultValue from "../utils/defaultValue";
import { FrameState } from "../core/FrameState";
import { Primitive } from "../mesh/Primitive";
import Vector3 from "../math/Vector3";
export class Material{
    public uniformBuffer:Buffer;
    color?: Vector3;

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

    bindGroups: BindGroup[];

    transparent:boolean;
    renderStateDirty:boolean;

    _blendConstant:{};

    _targets:{};

    _multisample:{}
    
    _primitiveState:{}

    _stencilReference:{};

    _depthStencil:{};

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
        this.renderStateDirty=true;
        this.groupLayouts=[];
        this.bindGroups=[];
    }
    get blendConstant(){
        return this._blendConstant;
    }
    set blendConstant(value){
        this.renderStateDirty=true;
        this._blendConstant=combine(value,this._blendConstant,false);
    }
    get targets(){
        return this._targets;
    }
    set targets(value){
        this.renderStateDirty=true;
        this._targets=combine(value,this._targets,false);
    }
    get multisample(){
        return this._multisample;
    }
    set multisample(value){
        this.renderStateDirty=true;
        this._multisample=combine(value,this._multisample,false);
    }
    get primitiveState(){
        return this._primitiveState;
    }
    set primitiveState(value){
        this.renderStateDirty=true;
        this._primitiveState=combine(value,this._primitiveState,false);
    }
    get stencilReference(){
        return this._stencilReference;
    }
    set stencilReference(value){
        this.renderStateDirty=true;
        this._stencilReference=value;
    }
    get depthStencil(){
        return this._depthStencil;
    }
    set depthStencil(value){
        this.renderStateDirty=true;
        this._depthStencil=combine(value,this._depthStencil,false);
    }
    onBeforeRender() {}

	onBeforeCompile() {}

    update(frameState:FrameState,primitive:Primitive){
       
    }
    updateUniform(){
        this.uniforms.forEach((uniform)=>{
            uniform.set();
        });
        this.uniformBuffer.setSubData(0,this.uniformsDataBuffer.toFloat32Array())
    }
    createRenderState(frameState:FrameState){
        let  depthStencil,primitive,multisample,stencilReference,targets,viewport,blendConstant;
        depthStencil=defaultValue(this.depthStencil,{
            format: TextureFormat.Depth24UnormStencil8,
            depthWriteEnabled:  false,
            depthCompare:CompareFunction.Always,
            stencilReadMask: 0xFFFFFFFF,
            stencilWriteMask:0xFFFFFFFF,
            stencilFront: {
                compare: CompareFunction.Always,
                failOp: StencilOperation.Keep,
                depthFailOp:StencilOperation.Keep,
                passOp:StencilOperation.Keep,
            },
            stencilBack: {
                compare: CompareFunction.Always,
                failOp: StencilOperation.Keep,
                depthFailOp: StencilOperation.Keep,
                passOp: StencilOperation.Keep,
            },
            depthBias:0,
            depthBiasSlopeScale:  0,
            depthBiasClamp: 0
        });
        primitive=defaultValue(this.primitiveState,{
            frontFace:FrontFace.CCW,
            cullMode:CullMode.None,
            unclippedDepth :false,
        });
        multisample=defaultValue(this.multisample,{
            count: 1,
            mask: 0xFFFFFFFF,
            alphaToCoverageEnabled: false
        });
        stencilReference=defaultValue(this.stencilReference,0);
        blendConstant=defaultValue(this.blendConstant,{ r: 1, g: 1, b: 1, a: 1 });
        viewport=frameState.viewport; 
        targets=frameState?.pass?.colorTargets!=undefined?frameState?.pass?.colorTargets:{
            format:  TextureFormat.Depth24UnormStencil8,
            blend: {
                color: {
                operation: BlendOperation.Add,
                srcFactor: BlendFactor.One,
                dstFactor: BlendFactor.Zero
                },
                alpha: {
                operation: BlendOperation.Add,
                srcFactor: BlendFactor.One,
                dstFactor:BlendFactor.Zero,
                },
            },
            writeMask: ColorWriteFlags.All
        }
        this.renderState={depthStencil,primitive,multisample,stencilReference,targets,viewport,blendConstant}
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
                buffer:uniform?.buffer.layoutType||uniformBuffer.layoutType,
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
                    size:uniform.bufferSize!=undefined?uniform.bufferSize:Material.getBindingSize(uniforms)
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
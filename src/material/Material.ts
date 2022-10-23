import BindGroup from "../render/BindGroup";
import { BindGroupEntity } from "../render/BindGroupEntity";
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
    color?: any;
    unifroms:any[];
    renderState:RenderState;
    baseSampler?: Sampler;
    baseTexture?: Texture;
    alpha?: any;
    unifromDataBuffer: DataBuffer;
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
        this.unifromDataBuffer=new DataBuffer()
        this.unifroms=undefined;
        this.shaderSource=undefined;
        this.groupLayouts=undefined;
    }
    onBeforeRender() {}

	onBeforeCompile() {}

    update(frameState){
        
    }
    updateUniform(){
        this.unifroms.forEach((uniform)=>{
            uniform.set();
        });
        this.uniformBuffer.setSubData(0,this.unifromDataBuffer.toFloat32Array())
    }
    public destory(){
        this.label=undefined;
        this.type=undefined;
        this.baseTexture=undefined;
        this.baseSampler=undefined;
        this.renderState=undefined;
        this.color=undefined;
        this.alpha=undefined;
        this.unifromDataBuffer=undefined
        this.unifroms=undefined;
    }
}
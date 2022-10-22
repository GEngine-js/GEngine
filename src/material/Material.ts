import BindGroup from "../render/BindGroup";
import { BindGroupEntity } from "../render/BindGroupEntity";
import  BindGroupLayout  from "../render/BindGroupLayout";
import BindGroupLayoutEntry from "../render/BindGroupLayoutEntry";
import Color from '../math/Color'
import RenderState from "../render/RenderState";
import Sampler from "../render/Sampler";
import Texture from "../render/Texture";
import DataBuffer from "../core/DataBuffer";
import Buffer from "../render/Buffer";
import { ShaderSource } from "../shader/ShaderSource";
import Context from "../render/Context";
export class Material{
    public uniformBuffer:Buffer;
    color?: any;
    unifroms:{};
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

        this.uniformBuffer=undefined;
        this.unifromDataBuffer=new DataBuffer()
        this.unifroms=undefined;
        this.shaderSource=undefined;
        this.groupLayouts=undefined;
    }
    onBeforeRender() {}

	onBeforeCompile() {}

    update(frameState){
         if(this.unifroms) this.createUniform();
    }
    public createUniform(){
       this.unifroms={
            color:()=>{
                return this.color;
            },
            alpha:()=>{
                return this.alpha;
            },
            baseTexture:()=>{
                return this.baseTexture
            },
            baseSampler:()=>{
                return this.baseSampler
            }
        }
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
import BindGroup from "../render/BindGroupCache";
import { BindGroupEntity } from "../render/BindGroupEntity";
import { BindGroupLayoutCache } from "../render/BindGroupLayoutCache";
import BindGroupLayoutEntry from "../render/BindGroupLayoutEntry";
import Color from '../math/Color'
import RenderState from "../render/RenderState";
import createUniform from "../render/createUniform"
import Sampler from "../render/Sampler";
import Texture from "../render/Texture";
import DataBuffer from "../core/DataBuffer";

export class Material{
    // public bindGroup:BindGroup;
    // public bindGroupLayout:BindGroupLayout;
    public uniformBuffer:GPUBuffer;
    // private bindGroupEntities:Array<BindGroupEntity>;
    // private bindGroupLayoutEntries:Array<BindGroupLayoutEntry>;
    color: any;
    unifroms:{};
    renderState:RenderState;
    baseSampler: Sampler;
    baseTexture: Texture;
    alpha: any;
    unifromDataBuffer: DataBuffer;
    type: string;
    label: string;
    constructor(){
        //
        this.label=undefined;
        this.type=undefined;
        this.baseTexture=undefined;
        this.baseSampler=undefined;
        this.renderState=undefined;
        this.color=undefined;
        this.alpha=undefined;
        //
        // this.bindGroup=undefined;
        // this.bindGroupLayout=undefined;
        this.uniformBuffer=undefined;
        this.unifromDataBuffer=new DataBuffer()
        // this.bindGroupEntities=new Array<BindGroupEntity>();
        // this.bindGroupLayoutEntries=new Array<BindGroupLayoutEntry>();
        this.unifroms=undefined;
    }
    update(){
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
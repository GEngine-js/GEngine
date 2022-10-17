import BindGroup from "../render/BindGroupCache";
import { BindGroupEntity } from "../render/BindGroupEntity";
import { BindGroupLayoutCache } from "../render/BindGroupLayoutCache";
import BindGroupLayoutEntry from "../render/BindGroupLayoutEntry";
import Color from '../math/Color'
import RenderState from "../render/RenderState";
import createUniform from "../render/createUniform"

export class Material{
    public bindGroup:BindGroup;
    public bindGroupLayout:BindGroupLayout;
    public uniformBuffer:GPUBuffer;
    private bindGroupEntities:Array<BindGroupEntity>;
    private bindGroupLayoutEntries:Array<BindGroupLayoutEntry>;
    color: any;
    unifroms:{};
    renderState:RenderState;
    baseSampler: any;
    baseTexture: any;
    alpha: any;
    unifromArray: Array<number>;
    constructor(){
        //
        this.baseTexture=undefined;
        this.baseSampler=undefined;
        this.renderState=undefined;
        this.color=undefined;
        this.alpha=undefined;
        //
        // this.bindGroup=undefined;
        // this.bindGroupLayout=undefined;
        this.uniformBuffer=undefined;
        this.unifromArray=new Array()
        // this.bindGroupEntities=new Array<BindGroupEntity>();
        // this.bindGroupLayoutEntries=new Array<BindGroupLayoutEntry>();
        this.unifroms={}
    }
    update(){
         
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
}
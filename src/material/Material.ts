import RenderState from "../render/RenderState";
import Sampler from "../render/Sampler";
import Texture from "../render/Texture";
import { ShaderSource } from "../shader/ShaderSource";
import defaultValue from "../utils/defaultValue";
import { FrameState } from "../core/FrameState";
import { BlendConstant, DepthStencil, MultiSample, PrimitiveState, Target,RenderStateProps } from "../core/WebGPUTypes";
import Color from "../math/Color";
import { Mesh } from "../mesh/Mesh";
import ShaderData from "../render/ShaderData";
import { CullMode, FrontFace, PrimitiveTopology } from "../core/WebGPUConstant";
export class Material{

    public shaderData:ShaderData;

    color?: Color;

    baseSampler?: Sampler;

    baseTexture?: Texture;

    type: string;

    label: string;

    shaderSource: ShaderSource;

    transparent:boolean;

    dirty:boolean;

    private _emissive:Color;

    private _opacity:number;

    private _emissiveIntensity:number;

    private _diffuse:Color;

    private _renderState:RenderStateProps;

    private _doubleSided:boolean;

    constructor(){
        this.label=undefined;
        this.type=undefined;
        this.baseTexture=undefined;
        this.baseSampler=undefined;
        this._diffuse=new Color(1.0,0.0,);
        this._opacity=1.0;
        //Buffer
        this.shaderData=undefined;
        this.shaderSource=undefined;
        this.dirty=true;
        this._emissive=new Color(0.0,0.0,0);
        this._emissiveIntensity = 1.0;
        this._renderState={
            primitive:{
                frontFace: FrontFace.CCW,
                cullMode: CullMode.None,
                unclippedDepth: false,
                topology:PrimitiveTopology.TriangleList
            }
        }
        this._doubleSided=true;
    }
    public set wireframe(value:Boolean){
       this._renderState.primitive.topology=value?PrimitiveTopology.LineList:PrimitiveTopology.TriangleList;
    }
    public get doubleSided(){
        return this._doubleSided;
    }
    public set doubleSided(value:boolean){
         this._renderState.primitive.cullMode=value?CullMode.None:CullMode.Back;
         this._doubleSided=value;
    }
    public get renderState(){  
        return this._renderState;
    }
    public get diffuse() : Color {
        return this._diffuse
    }  
    public set diffuse(v : Color) {
        this._diffuse = v;
    }
    public get emissive() : Color {
        return this._emissive
    }
    public set emissive(v : Color) {
        this._emissive = v;
    }
    public get emissiveIntensity() : number {
        return this._emissiveIntensity
    }
    public set emissiveIntensity(v : number) {
        this._emissiveIntensity = v;
    }
    public get opacity() : number {
        return this._opacity
    }
    public set opacity(v : number) {
        this._opacity = v;
    }
    get blendConstant(){
        return this._renderState.blendConstant;
    }
    set blendConstant(value){
        this._renderState.blendConstant=value;
    }
    get targets(){
        return this._renderState.targets;
    }
    set targets(value:Array<Target>){
        this._renderState.targets=value;
    }
    get multisample(){
        return this._renderState.multisample;
    }
    set multisample(value){
        this._renderState.multisample=value;
    }
    get primitive(){
        return this._renderState.primitive;
    }
    set primitive(value){
        this._renderState.primitive=value;
    }
    get stencilReference(){
        return this._renderState.stencilReference;
    }
    set stencilReference(value:number){
        this._renderState.stencilReference=value;
    }
    get depthStencil(){
        return this._renderState.depthStencil;
    }
    set depthStencil(value:DepthStencil){
        this._renderState.depthStencil=value;
    }
    onBeforeRender() {}

	onBeforeCompile() {}

    update(frameState:FrameState,mesh:Mesh){
    }
    protected createShaderData(mesh:Mesh,frameState?:FrameState){
        this.shaderData=new ShaderData(this.type,0);
        this.shaderData.setMatrix4('modelMatrix',()=>{
            return mesh.modelMatrix;
        });
        this.shaderData.setColor("diffuse",this);
        this.shaderData.setFloat("opacity",this);
        this.shaderData.setMatrix3("normalMtrix",()=>{
            return mesh.normalMatrix;
        });
        this.shaderData.setColor('emissive',this);  
    }
    public destroy(){
        this.label=undefined;
        this.type=undefined;
        this.baseTexture=undefined;
        this.baseSampler=undefined;
        this.color=undefined;
    }
}
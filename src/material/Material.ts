import BindGroup from "../render/BindGroup";
import  BindGroupLayout  from "../render/BindGroupLayout";
import RenderState from "../render/RenderState";
import Sampler from "../render/Sampler";
import Texture from "../render/Texture";
import { ShaderSource } from "../shader/ShaderSource";
import combine from "../utils/combine";
import defaultValue from "../utils/defaultValue";
import { FrameState } from "../core/FrameState";
import { BlendConstant, DepthStencil, MultiSample, PrimitiveState, Target } from "../core/WebGPUTypes";
import Color from "../math/Color";
import { Mesh } from "../mesh/Mesh";
import ShaderData from "../render/ShaderData";
import Context from "../render/Context";
export class Material{

    public shaderData:ShaderData;

    color?: Color;

    renderState:{
        depthStencil:DepthStencil,
        primitive:PrimitiveState,
        multisample:MultiSample,
        stencilReference:number,
        targets:Array<Target>,
        viewport:{ x: number, y: number, width: number, height: number},
        blendConstant:BlendConstant,
    };

    baseSampler?: Sampler;

    baseTexture?: Texture;

    alpha?: number;

    type: string;

    label: string;

    shaderSource: ShaderSource;

    groupLayouts: BindGroupLayout[];

    bindGroups: BindGroup[];

    transparent:boolean;

    renderStateDirty:boolean;

    dirty:boolean;

    private _blendConstant:BlendConstant;

    private _targets:Target;

    private _multisample:MultiSample;
    
    private _primitiveState:PrimitiveState

    private _stencilReference:number;

    private _depthStencil:DepthStencil;
    
    private _emissive:Color;

    private _opacity:number;

    private _emissiveIntensity:number;

    private _diffuse:Color;

    definesDirty: boolean;

    totalUniformCount:number;

    constructor(){
        //
        this.label=undefined;
        this.type=undefined;
        this.baseTexture=undefined;
        this.baseSampler=undefined;
        this.renderState=undefined;
        this._diffuse=new Color(0.01,0.5,1,0);
        this.alpha=undefined;
        this._opacity=1.0;
        //Buffer
        this.shaderData=undefined;
        this.shaderSource=undefined;
        this.renderStateDirty=true;
        this.definesDirty=true;
        this.groupLayouts=[];
        this.bindGroups=[];
        this.dirty=true;
        this._emissive=new Color(0,0.0,0,1.0);
        this._emissiveIntensity = 1.0;

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
        return this._blendConstant;
    }
    set blendConstant(value){
        this.renderStateDirty=true;
        this._blendConstant=combine(value,this._blendConstant,false) as BlendConstant;
    }
    get targets(){
        return this._targets;
    }
    set targets(value:Target){
        this.renderStateDirty=true;
        this._targets=combine(value,this._targets,false) as Target;
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
    set depthStencil(value:DepthStencil){
        this.renderStateDirty=true;
        this._depthStencil=combine(value,this._depthStencil,false) as DepthStencil;
    }
    onBeforeRender() {}

	onBeforeCompile() {}

    update(frameState:FrameState,mesh:Mesh){
        this.updateShader(frameState,mesh);
        this.updateRenderState(frameState);
    }
    protected updateShaderAndRenderState(frameState:FrameState,mesh:Mesh){
        this.updateShader(frameState,mesh);
        this.updateRenderState(frameState);
    }
    protected createShaderData(size:number,mesh:Mesh){
        this.shaderData=new ShaderData(size);
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
    protected setShaderData(device:GPUDevice){
        this.shaderData.update(device);
    }
    protected updateTexture(context:Context):void{
        
    }
    protected getUniformSize(){
       let size= 16+12+3+1+3;
       //https://gpuweb.github.io/gpuweb/wgsl/#address-space-layout-constraints
       return Math.ceil(size/4)*4;
    }
    private updateShader(frameState:FrameState,mesh:Mesh){
        if (mesh.geometry) {
            if (frameState.definesDirty||this.shaderData.defineDirty||mesh.geometry.definesDirty) {
                frameState.definesDirty=false;
                this.shaderData.defineDirty=false;
                mesh.geometry.definesDirty=false;
                this.dirty=true;
                this.shaderSource.update(frameState.defines,this.shaderData.defines,mesh.geometry.defines);
            }
        } else {
            if (frameState.definesDirty||this.shaderData.defineDirty) {
                frameState.definesDirty=false;
                this.shaderData.defineDirty=false;
                this.dirty=true;
                this.shaderSource.update(frameState.defines,this.shaderData.defines);
            }
        }

    }
    private updateRenderState(frameState:FrameState){
        if(this.renderStateDirty||!this.renderState) {
            if (this.renderStateDirty) {
                this.dirty=true;
                this.renderStateDirty=false;
            }
            this.createRenderState(frameState);
        }
    }
    createRenderState(frameState:FrameState){
        let  depthStencil,primitive,multisample,stencilReference,targets,viewport,blendConstant;
        depthStencil=defaultValue(this.depthStencil,RenderState.defaultDepthStencil);
        primitive=defaultValue(this.primitiveState,RenderState.defaultPrimitiveState);
        multisample=defaultValue(this.multisample,RenderState.defaultMultisample);
        stencilReference=defaultValue(this.stencilReference,0);
        blendConstant=defaultValue(this.blendConstant,RenderState.defaultBlendConstant);
        viewport=frameState.viewport; 
        targets=frameState?.pass?.colorTargets!=undefined?frameState.pass.colorTargets:[RenderState.defaultTarget]
        this.renderState={depthStencil,primitive,multisample,stencilReference,targets,viewport,blendConstant}
    }
    public destroy(){
        this.label=undefined;
        this.type=undefined;
        this.baseTexture=undefined;
        this.baseSampler=undefined;
        this.renderState=undefined;
        this.color=undefined;
        this.alpha=undefined;
    }
}
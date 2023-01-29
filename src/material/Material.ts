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

    doubleSided:boolean;

    private _blendConstant:BlendConstant;

    private _targets:Array<Target>;

    private _multisample:MultiSample;
    
    private _primitiveState:PrimitiveState

    private _stencilReference:number;

    private _depthStencil:DepthStencil;
    
    private _emissive:Color;

    private _opacity:number;

    private _emissiveIntensity:number;

    private _diffuse:Color;

    private _renderState:RenderStateProps;

    constructor(){
        this.label=undefined;
        this.type=undefined;
        this.baseTexture=undefined;
        this.baseSampler=undefined;
        this._diffuse=new Color(0.01,0.5,1,0);
        this._opacity=1.0;
        //Buffer
        this.shaderData=undefined;
        this.shaderSource=undefined;
        this.dirty=true;
        this._emissive=new Color(0,0.0,0,1.0);
        this._emissiveIntensity = 1.0;
        this._renderState={}
        this.doubleSided=false;
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
    get primitiveState(){
        return this._renderState.primitive;
    }
    set primitiveState(value){
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
    createRenderState(){
        let  depthStencil,primitive,multisample,stencilReference,targets,blendConstant;
        depthStencil=defaultValue(this.depthStencil,RenderState.defaultDepthStencil);
        primitive=defaultValue(this.primitiveState,RenderState.defaultPrimitiveState);
        multisample=defaultValue(this.multisample,RenderState.defaultMultisample);
        stencilReference=defaultValue(this.stencilReference,0);
        blendConstant=defaultValue(this.blendConstant,RenderState.defaultBlendConstant);
        targets=defaultValue(this.targets,[RenderState.defaultTarget]);;
        this._renderState={depthStencil,primitive,multisample,stencilReference,targets,blendConstant};
    }
    public destroy(){
        this.label=undefined;
        this.type=undefined;
        this.baseTexture=undefined;
        this.baseSampler=undefined;
        this.color=undefined;
    }
}
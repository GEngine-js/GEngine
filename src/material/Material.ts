import BindGroup from "../render/BindGroup";
import  BindGroupEntity  from "../render/BindGroupEntity";
import  BindGroupLayout  from "../render/BindGroupLayout";
import BindGroupLayoutEntry from "../render/BindGroupLayoutEntry";
import RenderState from "../render/RenderState";
import Sampler from "../render/Sampler";
import Texture from "../render/Texture";
import Buffer from "../render/Buffer";
import { ShaderSource } from "../shader/ShaderSource";
import combine from "../utils/combine";
import defaultValue from "../utils/defaultValue";
import { FrameState } from "../core/FrameState";
import { BlendConstant, DepthStencil, MultiSample, PrimitiveState, Target } from "../core/WebGPUTypes";
import RenderObject from "../core/RenderObject";
import { UniformColor, UniformFloat, UniformMat3, UniformMat4 } from "../render/Uniforms";
import Color from "../math/Color";
import { Mesh } from "../mesh/Mesh";
import UniformBuffer from "../render/UniformBuffer";
export class Material{

    public uniformBuffer:UniformBuffer;

    color?: Color;

    uniforms:any[];

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

    uniformsDataBuffer: Float32Array;

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

    private _defines:{[prop: string]: boolean|number};

    private _opacity:number;

    definesDirty: boolean;

    byteOffset:number;

    totalUniformCount:number;


    constructor(){
        //
        this.label=undefined;
        this.type=undefined;
        this.baseTexture=undefined;
        this.baseSampler=undefined;
        this.renderState=undefined;
        this.color=new Color(1,1,1,0);
        this.alpha=undefined;
        this._opacity=1.0;
        //Buffer
        this.uniformBuffer=undefined;
        this.uniformsDataBuffer=undefined;
        this.uniforms=[];
        this.shaderSource=undefined;
        this.renderStateDirty=true;
        this.definesDirty=true;
        this._defines={};
        this.groupLayouts=[];
        this.bindGroups=[];
        this.dirty=true;
        this.byteOffset=0;
        this.totalUniformCount=0;
    }
    
    public get opacity() : number {
        return this._opacity
    }
    public set opacity(v : number) {
        this._opacity = v;
    }
    
    get defines(){
        return this._defines;
    }
    set defines(value){
        this.definesDirty=true;
        this._defines=combine(value,this._defines,false);
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
    protected createUniformBuffer(size:number,mesh:Mesh){
         this.uniformBuffer=new UniformBuffer(size);
         this.uniformBuffer.setMatrix4('modelMatrix',()=>{
            return mesh.modelMatrix;
        });
        this.uniformBuffer.setColor("color",this);
        this.uniformBuffer.setFloat("opacity",this);
        this.uniformBuffer.setMatrix3("normalMtrix",()=>{
            return mesh.normalMatrix;
        });
    }
    protected setUniforms(device:GPUDevice){
        this.uniformBuffer.update(device);
    }
    protected getUniformSize(){
       let byteSize= 16+9+3+1;
       return Math.ceil(byteSize/4)*4;
    }
    private updateShader(frameState:FrameState,mesh:Mesh){
        if (mesh.geometry) {
            if (frameState.definesDirty||this.definesDirty||mesh.geometry.definesDirty) {
                frameState.definesDirty=false;
                this.definesDirty=false;
                mesh.geometry.definesDirty=false;
                this.dirty=true;
                this.shaderSource.update(frameState.defines,this.defines,mesh.geometry.defines);
            }
        } else {
            if (frameState.definesDirty||this.definesDirty) {
                frameState.definesDirty=false;
                this.definesDirty=false;
                this.dirty=true;
                this.shaderSource.update(frameState.defines,this.defines);
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
        this.uniformsDataBuffer=undefined
        this.uniforms=undefined;
    }
}
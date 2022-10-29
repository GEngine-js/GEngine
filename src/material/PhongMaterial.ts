import { Material } from "./Material";
import Buffer from '../render/Buffer';
import {UniformFloatVec4,UniformMat4, UniformSampler, UniformTexture } from "../render/Uniforms";
import { ShaderSource } from "../shader/ShaderSource";
import { Primitive } from "../mesh/Primitive";
export default class BaseMaterial extends Material {
    constructor() {
        super();
        this.type = 'phong'
        this.color = undefined;
        this.alpha = undefined;
        this.shaderSource=new ShaderSource({
            type:this.type
        })
        this.baseTexture = undefined;
        this.baseSampler = undefined;
    }
    update(frameState,primitive:Primitive) { 
        const {device}=frameState.context;
        if(!this.uniforms) this.createUniforms(primitive);
        if(this.renderStateDirty||!this.renderState) this.createRenderState(frameState);
        if(this.groupLayouts.length==0)this.createBindGroupAndLayout(device);
        this.updateUniform();
    }
    private createBindGroupAndLayout(device:GPUDevice){
      this.createUniformBuffer(device);
      const {groupLayout,bindGroup}= Material.createBindGroupAndLayout(device,this.uniforms,this.uniformBuffer,this.type,0);
      this.groupLayouts.push(groupLayout);
      this.bindGroups.push(bindGroup);
    }
    private createUniforms(primitive:Primitive){
        this.uniforms=[
            new UniformMat4("modelMatrix",this.uniformsDataBuffer,()=>{
                return primitive.modelMatrix;
            }),
            new UniformMat4("normalMtrix",this.uniformsDataBuffer,()=>{
                return primitive.normalMatrix;
            }),
            new UniformFloatVec4("color",this.uniformsDataBuffer,this),
            new UniformTexture('baseTexture',null,1,this),
            new UniformSampler('baseSampler',null,2,this)
        ]
     }
     private createUniformBuffer(device:GPUDevice){
         this.uniformBuffer=Buffer.createUniformBuffer(device,Material.getBindingSize(this.uniforms))
     }
    destory() {

    }
}
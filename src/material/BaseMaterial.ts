import { Material } from "./Material";
import { UniformFloatVec2,UniformFloatVec3,UniformFloatVec4,UniformMat4, UniformSampler, UniformTexture } from "../render/Uniforms";
import { ShaderSource } from "../shader/ShaderSource";
export default class BaseMaterial extends Material {
    constructor() {
        super();
        this.type = 'baseMaterial'
        this.color = undefined;
        this.alpha = undefined;
        this.shaderSource=new ShaderSource({
            type:this.type
        })
        this.baseTexture = undefined;
        this.baseSampler = undefined;
    }
    update(frameState) { 
        const {device}=frameState.context;
        if(!this.uniforms) this.createUniforms();
        if(this.renderStateDirty||!this.renderState) this.createRenderState(frameState);
        if(this.groupLayouts.length==0)this.createBindGroupAndLayout(device);
        this.updateUniform();
    }
    private createBindGroupAndLayout(device:GPUDevice){
      const {groupLayout,bindGroup}= Material.createBindGroupAndLayout(device,this.uniforms,this.uniformBuffer,this.type,0);
      this.groupLayouts.push(groupLayout);
      this.bindGroups.push(bindGroup);
    }
    private createUniforms(){
        this.uniforms=[
            new UniformMat4("modelMatrix",this.uniformsDataBuffer,()=>{}),
            new UniformFloatVec4("color",this.uniformsDataBuffer,this),
            new UniformTexture('baseTexture',null,1,this),
            new UniformSampler('baseSampler',null,2,this)
        ]
     }
    destory() {

    }
}
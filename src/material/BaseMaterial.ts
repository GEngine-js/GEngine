import { Material } from "./Material";
import BindGroupEntity  from '../render/BindGroupEntity'
import BindGroupLayoutEntry from "../render/BindGroupLayoutEntry";
import { UniformFloatVec2,UniformFloatVec3,UniformFloatVec4,UniformMat4, UniformSampler, UniformTexture } from "../render/Uniforms";
import BindGroupLayout from "../render/BindGroupLayout";
import BindGroup from "../render/BindGroup";
import Context from "../render/Context";
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
        if(this.groupLayouts.length==0)this.createBindGroupAndLayout(device);
        this.updateUniform();
    }
    private createBindGroupAndLayout(device:GPUDevice){
      const {groupLayout,bindGroup}= Material.createBindGroupAndLayout(device,this.uniforms,this.uniformBuffer,this.type);
      this.groupLayouts.push(groupLayout);
      this.bindGroups.push(bindGroup);
    }
    private createUniforms(){
        this.uniforms=[
            new UniformMat4("modelMatrix",this.uniformsDataBuffer,()=>{}),
            new UniformFloatVec4("color",this.uniformsDataBuffer,this),
            new UniformTexture('baseTexture',null,1,this),
            new UniformSampler('baseTexture',null,2,this)
        ]
     }
    destory() {

    }
}
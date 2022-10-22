import { Material } from "./Material";
import { BindGroupEntity } from '../render/BindGroupEntity'
import BindGroupLayoutEntry from "../render/BindGroupLayoutEntry";
import { UniformFloatVec2,UniformFloatVec3,UniformFloatVec4,UniformMat4 } from "../render/Uniforms";
import BindGroupLayout from "../render/BindGroupLayout";
import BindGroup from "../render/BindGroup";
import Context from "../render/Context";
export default class BaseMaterial extends Material {
    constructor() {
        super();
        this.type = 'baseMaterial'
        this.color = undefined;
        this.alpha = undefined;
        this.baseTexture = undefined;
        this.baseSampler = undefined;
    }
    update(frameState) { 
        const {device}=frameState.context;
        this.createBindGroupAndLayout(device)
    }
    private createBindGroupAndLayout(device:GPUDevice){
        const layouts=this.createBindGroupLayoutEntry();
        const groupLayout= BindGroupLayout.getBindGroupFromCache(device,'baseMaterial',layouts);
        const groupEntities=this.createBindGroupEntity(groupLayout);
        const group=this.createBindGroup(device,groupEntities,groupLayout)
        this.bindGroups.push(group);
        this.groupLayouts.push(groupLayout)
    }
    private createBindGroupEntity(bindGroupLayout) {
        const uniformBuffer=new BindGroupEntity({
            binding:0,
            resource:{
                buffer: this.uniformBuffer.gpuBuffer,
                offset: 0,
                size: bindGroupLayout.getBindGroupSize()
            }
          });
        const texture=new BindGroupEntity({
            binding:1,
            resource:this.baseTexture.gpuTexture.createView()
        });
        const sampler=new BindGroupEntity({
            binding:2,
            resource:this.baseSampler.gpuSampler
        });
       return [uniformBuffer,texture,sampler]

    }
    private createBindGroup(device,entities,bindGroupLayout){
       const bindGroup=BindGroup.getBindGroupFromCache({
        label:'baseMaterial',
        entires:entities,
        device:device,
        layout:bindGroupLayout
       })
       return bindGroup;
    }
    private createBindGroupLayoutEntry(){
        const result=new Array<BindGroupLayoutEntry>;
        const uniformBuffer = new BindGroupLayoutEntry({
            binding: 0,
            buffer:this.uniformBuffer.layoutType as GPUBufferBindingLayout,
            visibility: GPUShaderStage.VERTEX,
            uniforms: [
                new UniformMat4("modelMatrix",this.unifromDataBuffer,0,()=>{}),
                new UniformFloatVec4("color",this.unifromDataBuffer,16*4,()=>{
                    return this.color;
                })
            ],
        });
        const texture = new BindGroupLayoutEntry({
            binding: 1,
            visibility: GPUShaderStage.FRAGMENT,
            texture:this.baseTexture.layoutType as GPUTextureBindingLayout 
        });
        const sampler = new BindGroupLayoutEntry({
            binding: 2,
            visibility: GPUShaderStage.FRAGMENT,
            sampler: {
                type: this.baseSampler.layoutType as GPUSamplerBindingType,
            }
        });
        result.push(...[uniformBuffer,texture,sampler])
        return result 
    }
    destory() {

    }
}
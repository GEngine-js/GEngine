import { Material } from "./Material";
import { BindGroupEntity } from '../render/BindGroupEntity'
import BindGroupLayoutEntry from "../render/BindGroupLayoutEntry";
import { UniformFloat,UniformFloatVec2,UniformFloatVec3,UniformFloatVec4,UniformMat4 } from "../render/Uniform";
import BindGroupLayout from "../render/BindGroupLayout";
import BindGroup from "../render/BindGroup";
export default class BaseMaterial extends Material {
    constructor() {
        super();
        this.type = 'baseMaterial'
        this.color = undefined;
        this.alpha = undefined;
        this.baseTexture = undefined;
        this.baseSampler = undefined;
    }
    update() { }
    // private createUniform() { }
    private createBindGroupEntity() {
        const common=new BindGroupEntity({
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
       return [common,texture,sampler]

    }
    private createBindGroup(){
       const entities=this.createBindGroupEntity();
       const bindGroup=BindGroup.getBindGroupFromCache({
        label:'phong',
        entires:entities,
        device:device,
        layout:bindGroupLayout
       })
    }
    private createBindGroupLayout(device:GPUDevice){
        const layoutEntities=this.createBindGroupLayoutEntry();
        const bindGroupLayout= BindGroupLayout.getBindGroupFromCache(device,'phong',layoutEntities);
    }
    private createBindGroupLayoutEntry(): BindGroupLayoutEntry[]{
        const layoutEntity = new BindGroupLayoutEntry({
            binding: 0,
            buffer:this.uniformBuffer.layoutType,
            visibility: GPUShaderStage.VERTEX,
            uniforms: [
                new UniformMat4("modelMatrix",this.unifromDataBuffer,0,()=>{}),
                new UniformFloatVec4("color",this.unifromDataBuffer,16*4,()=>{
                    return this.color;
                })

            ],
        });
        const textureLE = new BindGroupLayoutEntry({
            binding: 1,
            visibility: GPUShaderStage.FRAGMENT,
            texture:this.baseTexture.layoutType
        });
        const samplerLE = new BindGroupLayoutEntry({
            binding: 2,
            visibility: GPUShaderStage.FRAGMENT,
            sampler: {
                type: this.baseSampler.layoutType,
            }
        });
        return [layoutEntity,textureLE,samplerLE]
    }
    destory() {

    }
}
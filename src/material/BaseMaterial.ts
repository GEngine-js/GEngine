import { Material } from "./Material";
import 
import { BindGroupEntity } from '../render/BindGroupEntity'
import BindGroupLayoutEntry from "../render/BindGroupLayoutEntry";
import { UniformFloat,UniformFloatVec2,UniformFloatVec3,UniformFloatVec4,UniformMat4 } from "../render/Uniform";
import BindGroupLayout from "../render/BindGroupLayout";
import BindGroupCache from "../render/BindGroupCache";
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
        const common=new BindGroupEntity(0,{
            buffer: this.unifromDataBuffer,
            offset: 0,
            size: bindGroupLayout.getBindGroupSize()
        });
        const texture=new BindGroupEntity(1,this.baseTexture.createView());
        const sampler=new BindGroupEntity(2,this.baseSampler);
       return [common,texture,sampler]

    }
    private createBindGroup(){
       const entities=this.createBindGroupEntity();
       const groupEntity=BindGroupCache.
    }
    private createBindGroupLayout(device:GPUDevice){
        const layoutEntities=this.createBindGroupLayoutEntry();
        const bindGroupLayout= BindGroupLayout.getBindGroupFromCache(device,'phong',layoutEntities);
    }
    private createBindGroupLayoutEntry(): BindGroupLayoutEntry[]{
        const layoutEntity = new BindGroupLayoutEntry({
            binding: 0,
            buffer: {
                type: "uniform",
                hasDynamicOffset: false,
                minBindingSize: 0,
            },
            visibility: GPUShaderStage.VERTEX,
            uniforms: [
                new UniformMat4("modelMatrix",this.unifromDataBuffer,0,'float',()=>{}),
                new UniformFloatVec4("color",this.unifromDataBuffer,16*4,'float',()=>{
                    return this.color;
                })

            ],
        });
        const textureLE = new BindGroupLayoutEntry({
            binding: 1,
            visibility: GPUShaderStage.FRAGMENT,
            texture: {
                sampleType: "float",
                viewDimension: "2d",
                multisampled: false
            }
        });
        const samplerLE = new BindGroupLayoutEntry({
            binding: 2,
            visibility: GPUShaderStage.FRAGMENT,
            sampler: {
                type: "filtering",
            }
        });
        return [layoutEntity,textureLE,samplerLE]
    }
    destory() {

    }
}
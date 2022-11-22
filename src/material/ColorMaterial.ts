import BindGroup from "../render/BindGroup";
import BindGroupLayout from "../render/BindGroupLayout";
import { ShaderSource } from "../shader/ShaderSource";
import { Material } from "./Material";
import Buffer from "../render/Buffer";
import { UniformMat4 } from "../render/Uniforms";
import { Mesh } from "../mesh/Mesh";
import { FrameState } from "../core/FrameState";
import RenderObject from "../core/RenderObject";
export default class ColorMaterial extends Material{
    uniforms:any[];

    uniformsDataBuffer: Float32Array;

    shaderSource: ShaderSource;

    groupLayouts: BindGroupLayout[];

    bindGroups: BindGroup[];
    
    uniformBuffer: Buffer;

    constructor(){
        super();
        this.type='color';
        this.shaderSource=new ShaderSource({
            type:this.type,
            render:true,
            defines:this.defines
        });
    }
    update(frameState:FrameState,primitive:RenderObject){
        if(!this.uniformBuffer) this.createBindGroupAndLayout(frameState.context.device,primitive);
        super.update(frameState,primitive)
        this.setUniforms();
    }
    private createUniformBuffer(device:GPUDevice,primitive:RenderObject){
        this.uniformsDataBuffer=new Float32Array(16);
        this.uniforms=[
            new UniformMat4("modelMatrix",this.uniformsDataBuffer,0,()=>{
                return primitive.modelMatrix;
            }),
        ]
        this.uniformBuffer=Buffer.createUniformBuffer(device,64)
    }
    private createBindGroupAndLayout(device:GPUDevice,primitive:RenderObject){
        this.createUniformBuffer(device,primitive);
        const {groupLayout,bindGroup}= Material.createBindGroupAndLayout(device,this.uniforms,this.uniformBuffer,'axes',0);
        this.groupLayouts.push(groupLayout);
        this.bindGroups.push(bindGroup);
    }
}
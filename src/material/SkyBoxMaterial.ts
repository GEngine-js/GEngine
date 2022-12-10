import { ShaderSource } from "../shader/ShaderSource";
import { Material } from "./Material";
import { Mesh } from "../mesh/Mesh";
import { FrameState } from "../core/FrameState";
export default class SkyBoxMaterial extends Material{
    constructor(){
        super();
        this.type='skybox';
        this.shaderSource=new ShaderSource({
            type:this.type,
            render:true,
            defines:{}
        });
    }
    update(frameState:FrameState,mesh:Mesh){
        if(!this.shaderData) this.createBindGroupAndLayout(frameState.context.device,mesh);
        this.updateShaderAndRenderState(frameState,mesh)
        this.setShaderData(frameState.context.device);
    }

    private createBindGroupAndLayout(device:GPUDevice,mesh:Mesh){
        this.totalUniformCount=super.getUniformSize();
        this.createShaderData(this.totalUniformCount,mesh);
        this.shaderData.update(device)
        const {groupLayout,bindGroup}= this.shaderData.createBindGroupAndLayout(device,'axes',0);
        this.groupLayouts.push(groupLayout);
        this.bindGroups.push(bindGroup);
    }
}
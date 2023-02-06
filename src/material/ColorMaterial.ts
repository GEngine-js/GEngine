
import { ShaderSource } from "../shader/ShaderSource";
import { Material } from "./Material";
import { Mesh } from "../mesh/Mesh";
import { FrameState } from "../core/FrameState";
import UniformBuffer from "../render/UniformBuffer";
export default class ColorMaterial extends Material{
    constructor(){
        super();
        this.type='color';
        this.shaderSource=new ShaderSource({
            type:this.type,
            render:true,
            defines:{}
        });
    }
    update(frameState:FrameState,mesh:Mesh){
        if(!this.shaderData) this.createShaderData(mesh);
        const uniformBuffer = new UniformBuffer();
        uniformBuffer.setMatrix4('modelMatrix',()=>{
            return mesh.modelMatrix;
        });
        this.shaderData.setUniformBuffer('color',uniformBuffer)
    }
}
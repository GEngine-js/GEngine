/*
 * @Author: junwei.gu junwei.gu@jiduauto.com
 * @Date: 2022-11-15 15:29:51
 * @LastEditors: junwei.gu junwei.gu@jiduauto.com
 * @LastEditTime: 2023-01-14 13:35:53
 * @FilePath: \GEngine\src\material\ColorMaterial.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ShaderSource } from "../shader/ShaderSource";
import { Material } from "./Material";
import { Mesh } from "../mesh/Mesh";
import { FrameState } from "../core/FrameState";
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
        if(!this.shaderData) this.createBindGroupAndLayout(frameState.context.device,mesh);
        this.updateShaderAndRenderState(frameState,mesh)
    }

    private createBindGroupAndLayout(device:GPUDevice,mesh:Mesh){
        this.createShaderData(mesh);
    }
}
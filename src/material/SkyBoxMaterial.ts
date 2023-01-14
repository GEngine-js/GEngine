/*
 * @Author: junwei.gu junwei.gu@jiduauto.com
 * @Date: 2022-12-10 20:24:50
 * @LastEditors: junwei.gu junwei.gu@jiduauto.com
 * @LastEditTime: 2023-01-14 13:36:14
 * @FilePath: \GEngine\src\material\SkyBoxMaterial.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ShaderSource } from "../shader/ShaderSource";
import { Material } from "./Material";
import { Mesh } from "../mesh/Mesh";
import { FrameState } from "../core/FrameState";
import { CompareFunction, TextureFormat } from "../core/WebGPUConstant";
import CubeTextureLoader from "../loader/CubeTextureLoader";
export default class SkyBoxMaterial extends Material{
    images: any[];
    constructor(){
        super();
        this.type='skybox';
        this.shaderSource=new ShaderSource({
            type:this.type,
            render:true,
            defines:{}
        });
        this.images=[];
        this.depthStencil={
            depthWriteEnabled: false,
            depthCompare: CompareFunction.LessEqual,
            format:TextureFormat.Depth24Plus
        }
    }
    async loadTexture(urls){
        const result= await CubeTextureLoader(urls);
        this.baseTexture=result.texture;
        this.baseSampler=result.sampler;
    }
    update(frameState:FrameState,mesh:Mesh){
        if(!this.shaderData) {
            this.createShaderData(mesh)
        }
        this.updateShaderAndRenderState(frameState,mesh);
    }
    protected createShaderData(mesh:Mesh){
        super.createShaderData(mesh);
        this.shaderData.setTexture('baseTexture',this);
        this.shaderData.setSampler('baseSampler',this)
    }
}
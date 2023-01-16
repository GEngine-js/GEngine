/*
 * @Author: junwei.gu junwei.gu@jiduauto.com
 * @Date: 2022-10-19 16:03:28
 * @LastEditors: junwei.gu junwei.gu@jiduauto.com
 * @LastEditTime: 2023-01-16 16:02:50
 * @FilePath: \GEngine\src\material\PhongMaterial.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Material } from "./Material";
import { ShaderSource } from "../shader/ShaderSource";
import { Mesh } from "../mesh/Mesh";
import { FrameState } from "../core/FrameState";
import Color from "../math/Color";
export default class PhongMaterial extends Material {
    specular:Color;
    shininess:number;
    constructor() {
        super();
        this.type = 'phong';
        this.color = new Color(1.0,0.0,0.0,1.0);
        this.shaderSource=new ShaderSource({
            type:this.type,
            render:true,
            defines:{
              materialPhong:true
            }
        });
        this.specular=new Color(1.0,1.0,1.0,0.0);
        this.shininess=30.0;
        this.baseTexture = undefined;
        this.baseSampler = undefined;
    }
    update(frameState:FrameState,mesh:Mesh) { 
        if(!this.shaderData) this.createShaderData(mesh);
    }
    protected createShaderData(mesh?:Mesh){
        super.createShaderData(mesh);
        this.shaderData.setFloat('shininess',this);
        this.shaderData.setColor('specular',this);
        if(this.baseTexture)this.shaderData.setTexture('baseTexture',this);
        if(this.baseSampler)this.shaderData.setSampler('sampler',this.baseTexture)
     }
    destroy() {

    }
}
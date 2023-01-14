/*
 * @Author: junwei.gu junwei.gu@jiduauto.com
 * @Date: 2022-10-19 16:03:28
 * @LastEditors: junwei.gu junwei.gu@jiduauto.com
 * @LastEditTime: 2023-01-14 13:36:38
 * @FilePath: \GEngine\src\material\PhongMaterial.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Material } from "./Material";
import Buffer from '../render/Buffer';
import {UniformFloatVec4,UniformMat4, UniformSampler, UniformTexture } from "../render/Uniforms";
import { ShaderSource } from "../shader/ShaderSource";
import { Mesh } from "../mesh/Mesh";
import Sampler from "../render/Sampler";
import Texture from "../render/Texture";
import Context from "../render/Context";
import Vector4 from "../math/Vector4";
import { FrameState } from "../core/FrameState";
import Color from "../math/Color";
export default class PhongMaterial extends Material {
    imageBitmap: ImageBitmap;

    specular:Color;

    shininess:number;
    constructor(imageBitmap:ImageBitmap) {
        super();
        this.type = 'phong';
        this.imageBitmap=imageBitmap;
        this.color = new Color(1.0,0.0,0.0,1.0);
        this.alpha = undefined;
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
        if(!this.baseTexture) this.ceateTextureAndSampler(frameState.context);
        if(!this.shaderData) this.createShaderData(mesh);
        this.updateShaderAndRenderState(frameState,mesh)
    }
    protected createShaderData(mesh?:Mesh){
        super.createShaderData(mesh);
        this.shaderData.setFloat('shininess',this);
        this.shaderData.setColor('specular',this);
        this.shaderData.setTexture('baseTexture',this);
        this.shaderData.setSampler('sampler',this.baseTexture)
     }
     private ceateTextureAndSampler(context:Context){
        const baseSampler=new Sampler({
            magFilter: 'linear',
            minFilter: 'linear',
          });
        this.baseTexture=new Texture({
            size: {width:this.imageBitmap.width, height:this.imageBitmap.height, depth:1},
            data:{
              source:this.imageBitmap
            },
            format: 'rgba8unorm',
            usage:
              GPUTextureUsage.TEXTURE_BINDING |
              GPUTextureUsage.COPY_DST |
              GPUTextureUsage.RENDER_ATTACHMENT,
            sampler:baseSampler
          });
     }
    destroy() {

    }
}
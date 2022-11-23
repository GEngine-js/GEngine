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
export default class BaseMaterial extends Material {
    imageBitmap: ImageBitmap;
    uniformTotalByte: number;
    constructor(imageBitmap:ImageBitmap) {
        super();
        this.type = 'phong';
        this.imageBitmap=imageBitmap;
        this.color = new Color(1.0,0.0,0.0,1.0);
        this.alpha = undefined;
        this.shaderSource=new ShaderSource({
            type:this.type,
            render:true,
            defines:this.defines
        });

        this.baseTexture = undefined;
        this.baseSampler = undefined;
    }
    update(frameState:FrameState,mesh:Mesh) { 
        const {device}=frameState.context;
        if(!this.baseTexture) this.ceateTextureAndSampler(frameState.context);
        if(this.uniforms.length==0) this.createUniforms(mesh);
        super.update(frameState,mesh)
        if(this.groupLayouts.length==0)this.createBindGroupAndLayout(device);
        this.setUniforms();
    }
    private createBindGroupAndLayout(device:GPUDevice){
      this.createUniformBuffer(device);
      const {groupLayout,bindGroup}= Material.createBindGroupAndLayout(device,this.uniforms,this.uniformBuffer,this.type,0);
      this.groupLayouts.push(groupLayout);
      this.bindGroups.push(bindGroup);
    }
    protected createUniforms(mesh?:Mesh){
        this.totalUniformCount=this.getUniformSize();
        super.createUniforms(mesh);
        this.uniforms.push(new UniformTexture('baseTexture',1,this));
        this.uniforms.push(new UniformSampler('sampler',2,this.baseTexture));
        this.byteOffset=this.getUniformSize()*4;
     }
     private createUniformBuffer(device:GPUDevice){
         this.uniformBuffer=Buffer.createUniformBuffer(device,this.totalUniformCount*4)
     }
     private ceateTextureAndSampler(context:Context){
        const baseSampler=new Sampler({
            magFilter: 'linear',
            minFilter: 'linear',
          });
        this.baseTexture=new Texture({
            size: {width:this.imageBitmap.width, height:this.imageBitmap.height, depth:1},
            data:this.imageBitmap,
            format: 'rgba8unorm',
            usage:
              GPUTextureUsage.TEXTURE_BINDING |
              GPUTextureUsage.COPY_DST |
              GPUTextureUsage.RENDER_ATTACHMENT,
            sampler:baseSampler
          });
          this.baseTexture.update(context);
     }
     protected getUniformSize(){
        let uniformSize= super.getUniformSize()
        return uniformSize;
     }
    destroy() {

    }
}
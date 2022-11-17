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
export default class BaseMaterial extends Material {
    imageBitmap: ImageBitmap;
    uniformTotalByte: number;
    constructor(imageBitmap:ImageBitmap) {
        super();
        this.type = 'phong';
        this.imageBitmap=imageBitmap;
        this.color = new Vector4(1.0,0.0,0.0,1.0);
        this.alpha = undefined;
        this.shaderSource=new ShaderSource({
            type:this.type,
            render:true,
            defines:this.defines
        });

        this.baseTexture = undefined;
        this.baseSampler = undefined;
    }
    update(frameState:FrameState,primitive:Mesh) { 
        const {device}=frameState.context;
        // if(!this.renderState)this.createRenderState(frameState)
        if(!this.baseTexture) this.ceateTextureAndSampler(frameState.context);
        if(!this.uniforms) this.createUniforms(primitive);
        if(this.renderStateDirty||!this.renderState) {
            if (this.renderStateDirty) {
                this.dirty=true;
                this.renderStateDirty=false;
            }
            this.createRenderState(frameState);
        }
        if(this.groupLayouts.length==0)this.createBindGroupAndLayout(device);
        //update defines
        //this.shaderSource.update(frameState.defines,this.defines);
        if (frameState.definesDirty&&this.definesDirty) {
            frameState.definesDirty=false;
            this.definesDirty=false;
            this.dirty=true;
            this.shaderSource.update(frameState.defines,this.defines);
        }
        this.updateUniform();
    }
    private createBindGroupAndLayout(device:GPUDevice){
      this.createUniformBuffer(device);
      const {groupLayout,bindGroup}= Material.createBindGroupAndLayout(device,this.uniforms,this.uniformBuffer,this.type,0);
      this.groupLayouts.push(groupLayout);
      this.bindGroups.push(bindGroup);
    }
    private createUniforms(primitive:Mesh){
        this.uniformTotalByte=64+64+16;
        this.uniformsDataBuffer=new Float32Array(16+16+4)
        this.uniforms=[
            new UniformMat4("modelMatrix",this.uniformsDataBuffer,0,()=>{
                return primitive.modelMatrix;
            }),
            new UniformMat4("normalMtrix",this.uniformsDataBuffer,64,()=>{
                return primitive.normalMatrix;
            }),
            new UniformFloatVec4("color",this.uniformsDataBuffer,128,this),
            new UniformTexture('baseTexture',1,this),
            new UniformSampler('sampler',2,this.baseTexture)
        ]
     }
     private createUniformBuffer(device:GPUDevice){
         this.uniformBuffer=Buffer.createUniformBuffer(device,this.uniformTotalByte)
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
    destroy() {

    }
}
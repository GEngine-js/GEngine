import { ShaderSource } from "../shader/ShaderSource";
import { Material } from "./Material";
import { Mesh } from "../mesh/Mesh";
import { FrameState } from "../core/FrameState";
import { getImageBitMap } from "../utils/request";
import Texture from "../render/Texture";
import Sampler from "../render/Sampler";
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
        if(this.baseTexture) this.baseTexture.update(frameState.context)
        if(!this.shaderData) this.createBindGroupAndLayout(frameState.context.device,mesh);
        this.updateShaderAndRenderState(frameState,mesh);
        this.setShaderData(frameState.context.device);
    }

    private createBindGroupAndLayout(device:GPUDevice,mesh:Mesh){
        this.totalUniformCount=super.getUniformSize();
        this.createShaderData(this.totalUniformCount,mesh);
        this.shaderData.setTexture('baseTexture',this);
        this.shaderData.setSampler('baseSampler',this)
        this.shaderData.update(device)
        const {groupLayout,bindGroup}= this.shaderData.createBindGroupAndLayout(device,'axes',0);
        this.groupLayouts.push(groupLayout);
        this.bindGroups.push(bindGroup);
    }
}
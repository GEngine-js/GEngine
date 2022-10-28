import { Material } from "../material/Material";
import BindGroup from "../render/BindGroup";
import BindGroupLayout from "../render/BindGroupLayout";
import { UniformLight, UniformMat4 } from "../render/Uniforms";
import { Scene } from "../Scene";
import { FrameState } from "./FrameState";
import LightManger from "./LightManger";
import Buffer from "../render/Buffer"
import DataBuffer from "../utils/DataBuffer";
import Camera from "../camera/Camera";
import PerspectiveCamera from "../camera/PerspectiveCamera";

export default class SystemRenderResource{

    lightCount:number;

    matrixGroup:BindGroup;

    matrixLayout:BindGroupLayout;

    lightGroup:BindGroup;

    lightLayout:BindGroupLayout;

    lightUniforms: any[];

    matrixUniforms:any[];

    spotLightBuffer: Buffer;

    dirAndambLightBuffer: Buffer;

    pointLightBuffer: Buffer;

    lightCountBuffer: Buffer;
    
    matrixBuffer:Buffer;

    matrixDataBuffer:DataBuffer;

    constructor(){
        this.matrixDataBuffer=new DataBuffer();
    }
    get layouts():BindGroupLayout[]{
        return [this.matrixLayout,this.lightLayout]
    }
    
   get groups() : BindGroup[] {
        return [this.matrixGroup,this.lightGroup]
    }
    
    update(frameState:FrameState,scene:Scene){
       const {camera,context}=frameState;
       const {lightManger}=scene;
       this.updateLight(context.device,lightManger)
       this.updateCamera(context.device,camera)
    }
    // camera

    private updateCamera(device:GPUDevice,camera:PerspectiveCamera){
        if(!this.matrixBuffer)this.createMatrixBindGroupAndLayout(device,camera);
        this.matrixUniforms.forEach((uniform)=>{
            uniform.set();
        });
    }
    private createMatrixUniforms(camera:PerspectiveCamera){
        this.matrixUniforms=[
            new UniformMat4('viewMatrix',this.matrixDataBuffer,()=>{
                return camera.viewMatrix
            }),
            new UniformMat4('projectionMatrix',this.matrixDataBuffer,()=>{
                return camera.projectionMatrix
            }),
        ]
    }
    private createMatrixUniformBuffer(device:GPUDevice,){
        this.matrixBuffer=Buffer.createUniformBuffer(device,this.matrixUniforms.length*16*4);
    }
    private createMatrixBindGroupAndLayout(device:GPUDevice,camera:PerspectiveCamera){
        this.createMatrixUniforms(camera);
        this.createMatrixUniformBuffer(device);
        const {groupLayout,bindGroup}= Material.createBindGroupAndLayout(device,this.matrixUniforms,this.matrixBuffer,'matrix',1);
        this.matrixGroup=bindGroup;
        this.matrixLayout=groupLayout;
    }

    // light
    private updateLight(device:GPUDevice,lightManger:LightManger){
        if (lightManger.lightCountDirty&&!this.lightUniforms) {
              this.createLightBindGroupAndLayout(device,lightManger);
              this.setLightData(lightManger)
        } else {
           this.setLightData(lightManger)
        }
    }
    private setLightData(lightManger:LightManger){
        if(lightManger.lightCountDirty){
            this.lightCountBuffer.setSubData(0,lightManger.lightCountDataBuffer.toFloat32Array());
            lightManger.lightCountDirty=false;
        }
        if(lightManger.ambAndDirDirty){
            this.dirAndambLightBuffer.setSubData(0,lightManger.dirAndambLightDataBuffer.toFloat32Array());
            lightManger.ambAndDirDirty=false;
        }
        if (lightManger.spotDirty) {
            this.spotLightBuffer.setSubData(0,lightManger.spotLightDataBuffer.toFloat32Array());
            lightManger.spotDirty=false;
        }
        if(lightManger.pointDirty){
            this.pointLightBuffer.setSubData(0,lightManger.pointLightDataBuffer.toFloat32Array())
            lightManger.pointDirty=false;
        }
    }
    private createLightBindGroupAndLayout(device:GPUDevice,lightManger:LightManger){
        lightManger.lightCountDirty=false;
        this.createLightUniforms(lightManger);
        this.createLightUniformBuffer(device,lightManger);
        const {groupLayout,bindGroup}= Material.createBindGroupAndLayout(device,this.lightUniforms,null,'light',2);
        this.lightLayout=groupLayout;
        this.lightGroup=bindGroup;
    }
    private createLightUniforms(lightManger:LightManger){
       this.lightUniforms=[
         new UniformLight('spotLightBuffer',0,lightManger,lightManger.spotLights.length*52),
         new UniformLight('pointLightBuffer',1,lightManger,lightManger.pointLights.length*32),
         new UniformLight('dirAndambLightBuffer',2,lightManger,36),
         new UniformLight('lightCountBuffer',3,lightManger,16)
       ]
    }
    private createLightUniformBuffer(device:GPUDevice,lightManger:LightManger){
        this.spotLightBuffer=Buffer.createUniformBuffer(device,lightManger.spotLights.length*52);
        this.pointLightBuffer=Buffer.createUniformBuffer(device,lightManger.pointLights.length*32);
        this.dirAndambLightBuffer=Buffer.createUniformBuffer(device,36);
        this.lightCountBuffer=Buffer.createUniformBuffer(device,12);
    }
    destory(){

    }
}
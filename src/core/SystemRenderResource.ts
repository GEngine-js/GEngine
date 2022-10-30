import { Material } from "../material/Material";
import BindGroup from "../render/BindGroup";
import BindGroupLayout from "../render/BindGroupLayout";
import { UniformFloatVec3, UniformLight, UniformMat4 } from "../render/Uniforms";
import { Scene } from "../Scene";
import { FrameState } from "./FrameState";
import LightManger from "./LightManger";
import Buffer from "../render/Buffer"
import DataBuffer from "../utils/DataBuffer";
import PerspectiveCamera from "../camera/PerspectiveCamera";

export default class SystemRenderResource{

    lightCount:number;

    matrixGroup:BindGroup;

    matrixLayout:BindGroupLayout;

    lightGroup:BindGroup;

    lightLayout:BindGroupLayout;

    lightUniforms: any[];

    systemUniforms:any[];

    spotLightBuffer: Buffer;

    dirtectLightBuffer: Buffer;

    ambientLightBuffer:Buffer;

    pointLightBuffer: Buffer;

    lightCountBuffer: Buffer;
    
    matrixBuffer:Buffer;

    systemDataBuffer:DataBuffer;

    constructor(){
        this.systemDataBuffer=new DataBuffer();
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
        if(!this.matrixBuffer)this.createSystemBindGroupAndLayout(device,camera);
        this.systemUniforms.forEach((uniform)=>{
            uniform.set();
        });
    }
    private createSystemUniforms(camera:PerspectiveCamera){
        this.systemUniforms=[
            new UniformMat4('viewMatrix',this.systemDataBuffer,()=>{
                return camera.viewMatrix
            }),
            new UniformMat4('projectionMatrix',this.systemDataBuffer,()=>{
                return camera.projectionMatrix
            }),
            new UniformMat4('inverseViewMatrix',this.systemDataBuffer,()=>{
                return camera.inverseViewMatrix
            }),
            new UniformFloatVec3('position',this.systemDataBuffer,()=>{
                return camera.position
            })
        ]
    }
    private createSystemUniformBuffer(device:GPUDevice,){
        this.matrixBuffer=Buffer.createUniformBuffer(device,Material.getBindingSize(this.systemUniforms));
    }
    private createSystemBindGroupAndLayout(device:GPUDevice,camera:PerspectiveCamera){
        this.createSystemUniforms(camera);
        this.createSystemUniformBuffer(device);
        const {groupLayout,bindGroup}= Material.createBindGroupAndLayout(device,this.systemUniforms,this.matrixBuffer,'system',1);
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
        if(lightManger.dirtectDirty){
            this.dirtectLightBuffer.setSubData(0,lightManger.dirtectLightDataBuffer.toFloat32Array());
            lightManger.dirtectDirty=false;
        }
        if(lightManger.ambientDirty){
            this.ambientLightBuffer.setSubData(0,lightManger.ambientLightDataBuffer.toFloat32Array())
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
         new UniformLight('dirtectLightBuffer',2,lightManger,24),
         new UniformLight('ambientLightBuffer',3,lightManger,12),
         new UniformLight('lightCountBuffer',4,lightManger,16)
       ]
    }
    private createLightUniformBuffer(device:GPUDevice,lightManger:LightManger){
        this.spotLightBuffer=Buffer.createUniformBuffer(device,lightManger.spotLights.length*52);
        this.pointLightBuffer=Buffer.createUniformBuffer(device,lightManger.pointLights.length*32);
        this.dirtectLightBuffer=Buffer.createUniformBuffer(device,24);
        this.ambientLightBuffer=Buffer.createUniformBuffer(device,12)
        this.lightCountBuffer=Buffer.createUniformBuffer(device,12);
    }
    destory(){

    }
}
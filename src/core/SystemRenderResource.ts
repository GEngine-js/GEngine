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
import { BufferUsage } from "./WebGPUConstant";

export default class SystemRenderResource{

    matrixGroup:BindGroup;

    matrixLayout:BindGroupLayout;

    lightGroup:BindGroup;

    lightLayout:BindGroupLayout;

    lightUniforms: any[];

    systemUniforms:any[];
    
    globalBuffer:Buffer;

    systemDataBuffer:Float32Array;

    globalLightsBuffer: Buffer;

    constructor(){
        //this.systemDataBuffer=new DataBuffer();
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
        if(!this.globalBuffer)this.createSystemBindGroupAndLayout(device,camera);
        this.systemUniforms.forEach((uniform)=>{
            uniform.set();
        });
    }
    private createSystemUniforms(camera:PerspectiveCamera){
        if(!this.systemDataBuffer) this.systemDataBuffer=new Float32Array(51)
        this.systemUniforms=[
            new UniformMat4('viewMatrix',this.systemDataBuffer,0,()=>{
                return camera.viewMatrix
            }),
            new UniformMat4('projectionMatrix',this.systemDataBuffer,64,()=>{
                return camera.projectionMatrix
            }),
            new UniformMat4('inverseViewMatrix',this.systemDataBuffer,128,()=>{
                return camera.inverseViewMatrix
            }),
            new UniformFloatVec3('position',this.systemDataBuffer,192,()=>{
                return camera.position
            })
        ]
    }
    private createSystemUniformBuffer(device:GPUDevice,){
        this.globalBuffer=Buffer.createUniformBuffer(device,204);
    }
    private createSystemBindGroupAndLayout(device:GPUDevice,camera:PerspectiveCamera){
        this.createSystemUniforms(camera);
        this.createSystemUniformBuffer(device);
        const {groupLayout,bindGroup}= Material.createBindGroupAndLayout(device,this.systemUniforms,this.globalBuffer,'system',1);
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
         this.globalLightsBuffer.setSubData(0,lightManger.globalLightsBuffer)
    }
    private createLightBindGroupAndLayout(device:GPUDevice,lightManger:LightManger){
        lightManger.lightCountDirty=false;
        this.createLightUniformBuffer(device,lightManger);
        this.createLightUniforms(lightManger);
        const {groupLayout,bindGroup}= Material.createBindGroupAndLayout(device,this.lightUniforms,null,'light',2);
        this.lightLayout=groupLayout;
        this.lightGroup=bindGroup;
    }
    private createLightUniforms(lightManger:LightManger){
       this.lightUniforms=[
         new UniformLight('globalLightsBuffer',0,this,lightManger.totalByte),
       ]
    }
    private createLightUniformBuffer(device:GPUDevice,lightManger:LightManger){
        this.globalLightsBuffer=Buffer.createUniformBuffer(device,lightManger.totalByte,{type: 'read-only-storage'},BufferUsage.Storage);
    }
    destory(){

    }
}
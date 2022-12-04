import BindGroup from "../render/BindGroup";
import BindGroupLayout from "../render/BindGroupLayout";
import { Scene } from "../Scene";
import { FrameState } from "./FrameState";
import LightManger from "./LightManger";
import Buffer from "../render/Buffer"
import PerspectiveCamera from "../camera/PerspectiveCamera";
import Vector4 from "../math/Vector4";
import UniformBuffer from "../render/UniformBuffer";
import LightUniformBuffer from "../render/LightUniformBuffer";

export default class SystemRenderResource{

    systemGroup:BindGroup;

    systemLayout:BindGroupLayout;

    lightGroup:BindGroup;

    lightLayout:BindGroupLayout;

    lightUniformBuffer:LightUniformBuffer;

    systemUniformBuffer: UniformBuffer;
    
    constructor(){
    }
    get layouts():BindGroupLayout[]{
        return [this.systemLayout,this.lightLayout]
    }
    
   get groups() : BindGroup[] {
        return [this.systemGroup,this.lightGroup]
    }
    
    update(frameState:FrameState,scene:Scene){
       const {camera,context}=frameState;
       const {lightManger}=scene;
       this.updateLight(context.device,lightManger)
       this.updateCamera(context.device,camera)
    }
    // camera

    private updateCamera(device:GPUDevice,camera:PerspectiveCamera){
        if(!this.systemUniformBuffer){
            this.createSystemBindGroupAndLayout(device,camera);
        }else{
           this.systemUniformBuffer.update(device)
        }
    }
    // light
    private updateLight(device:GPUDevice,lightManger:LightManger){
        if (lightManger.lightCountDirty) {
                lightManger.lightCountDirty=false
                this.createLightBindGroupAndLayout(device,lightManger);
        } else {
            this.lightUniformBuffer.update(device,lightManger);
        }
    }
    private createSystemBindGroupAndLayout(device:GPUDevice,camera:PerspectiveCamera){

        this.systemUniformBuffer=new UniformBuffer(208);

        this.systemUniformBuffer.update(device);

        this.systemUniformBuffer.setMatrix4('projectionMatrix',()=>{
            return camera.projectionMatrix
        });
        this.systemUniformBuffer.setMatrix4('viewMatrix',()=>{
            return camera.viewMatrix
        });
        this.systemUniformBuffer.setMatrix4('inverseViewMatrix',()=>{
            return camera.inverseViewMatrix
        });
        this.systemUniformBuffer.setFloatVec3('position',()=>{       
            return new Vector4(camera.position.x,camera.position.y,camera.position.z,1.0)
        });
        const {groupLayout,bindGroup}= this.systemUniformBuffer.createBindGroupAndLayout(device,'system',1);
        this.systemGroup=bindGroup;
        this.systemLayout=groupLayout;

    }
    private createLightBindGroupAndLayout(device:GPUDevice,lightManger:LightManger){
        if(!this.lightUniformBuffer)this.lightUniformBuffer=new LightUniformBuffer(lightManger);

        this.lightUniformBuffer.update(device,lightManger);

        this.lightUniformBuffer.setLight('commonBuffer',0,lightManger.commonTatalByte);
        if(lightManger.lightDefines.spotLight){
            this.lightUniformBuffer.setLight('spotLightsBuffer',lightManger.lightDefines.spotLightBinding,lightManger.spotLightsByte);
        }
        if(lightManger.lightDefines.pointLight){
            this.lightUniformBuffer.setLight('pointLightsBuffer',lightManger.lightDefines.pointLightBinding,lightManger.pointLightsByte)
       }
       if(lightManger.lightDefines.dirtectLight){
            this.lightUniformBuffer.setLight('dirtectLightsBuffer',lightManger.lightDefines.dirtectLightBinding,lightManger.dirtectLightsByte)
       }
        const {groupLayout,bindGroup}= this.lightUniformBuffer.createBindGroupAndLayout(device,'light',2);
        this.lightLayout=groupLayout;
        this.lightGroup=bindGroup;
    }
    destroy(){

    }
}
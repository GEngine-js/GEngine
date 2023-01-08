import BindGroup from "../render/BindGroup";
import BindGroupLayout from "../render/BindGroupLayout";
import { Scene } from "../Scene";
import { FrameState } from "./FrameState";
import LightManger from "./LightManger";
import PerspectiveCamera from "../camera/PerspectiveCamera";
import LightShaderData from "../render/LightShaderData";
import ShaderData from "../render/ShaderData";

export default class SystemRenderResource{

    systemGroup:BindGroup;

    systemLayout:BindGroupLayout;

    lightGroup:BindGroup;

    lightLayout:BindGroupLayout;

    lightShaderData:LightShaderData;

    systemShaderData:ShaderData;
    
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
    public bind(){
        
    }
    // camera
    private updateCamera(device:GPUDevice,camera:PerspectiveCamera){
        if(!this.systemShaderData){
            this.createSystemBindGroupAndLayout(device,camera);
        }else{
           this.systemShaderData.update(device)
        }
    }
    // light
    private updateLight(device:GPUDevice,lightManger:LightManger){
        if (lightManger.lightCountDirty) {
                lightManger.lightCountDirty=false
                this.createLightBindGroupAndLayout(device,lightManger);
        } else {
            this.lightShaderData.update(device,lightManger);
        }
    }
    private createSystemBindGroupAndLayout(device:GPUDevice,camera:PerspectiveCamera){

        this.systemShaderData=new ShaderData('system',208);

        this.systemShaderData.update(device);

        this.systemShaderData.setMatrix4('projectionMatrix',()=>{
            return camera.projectionMatrix
        });
        this.systemShaderData.setMatrix4('viewMatrix',()=>{
            return camera.viewMatrix
        });
        this.systemShaderData.setMatrix4('inverseViewMatrix',()=>{
            return camera.inverseViewMatrix
        });
        this.systemShaderData.setFloatVec3('position',()=>{       
            return camera.position;
        });
        const {groupLayout,bindGroup}= this.systemShaderData.createBindGroupAndLayout(device,'system',1,1);
        this.systemGroup=bindGroup;
        this.systemLayout=groupLayout;

    }
    private createLightBindGroupAndLayout(device:GPUDevice,lightManger:LightManger){
        if(!this.lightShaderData)this.lightShaderData=new LightShaderData(lightManger);

        this.lightShaderData.update(device,lightManger);

        this.lightShaderData.setLight('commonBuffer',0,lightManger.commonTatalByte);
        if(lightManger.lightDefines.spotLight){
            this.lightShaderData.setLight('spotLightsBuffer',lightManger.lightDefines.spotLightBinding,lightManger.spotLightsByte);
        }
        if(lightManger.lightDefines.pointLight){
            this.lightShaderData.setLight('pointLightsBuffer',lightManger.lightDefines.pointLightBinding,lightManger.pointLightsByte)
       }
       if(lightManger.lightDefines.dirtectLight){
            this.lightShaderData.setLight('dirtectLightsBuffer',lightManger.lightDefines.dirtectLightBinding,lightManger.dirtectLightsByte)
       }
        const {groupLayout,bindGroup}= this.lightShaderData.createBindGroupAndLayout(device,'light',2,2);
        this.lightLayout=groupLayout;
        this.lightGroup=bindGroup;
    }
    destroy(){

    }
}
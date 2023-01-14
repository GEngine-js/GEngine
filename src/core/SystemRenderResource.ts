/*
 * @Author: junwei.gu junwei.gu@jiduauto.com
 * @Date: 2022-10-28 09:47:18
 * @LastEditors: junwei.gu junwei.gu@jiduauto.com
 * @LastEditTime: 2023-01-14 12:39:18
 * @FilePath: \GEngine\src\core\SystemRenderResource.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import BindGroupLayout from "../render/BindGroupLayout";
import { Scene } from "../Scene";
import { FrameState } from "./FrameState";
import LightManger from "./LightManger";
import LightShaderData from "../render/LightShaderData";
import ShaderData from "../render/ShaderData";
import Context from "../render/Context";

export default class SystemRenderResource{

    lightShaderData:LightShaderData;

    cameraShaderData:ShaderData;
    
    constructor(){
    }
    get layouts():BindGroupLayout[]{
        return [this.cameraShaderData.groupLayout,this.lightShaderData.groupLayout]
    }
    
    update(frameState:FrameState,scene:Scene){
       const {lightManger}=scene;
       this.updateLight(lightManger)
       this.updateCamera(frameState)
    }
    public bind(context: Context, passEncoder: GPURenderPassEncoder){
        this.lightShaderData.bind(context, passEncoder);
        this.cameraShaderData.bind(context, passEncoder);
    }
    // camera
    private updateCamera(frameState:FrameState){
        if(!this.cameraShaderData){
            this.createCameraShaderData(frameState);
        }
    }
    // light
    private updateLight(lightManger:LightManger){
        if (lightManger.lightCountDirty) {
                lightManger.lightCountDirty=false
                this.createLightShaderData(lightManger);
        } 
    }
    private createCameraShaderData(frameState:FrameState){

        this.cameraShaderData=new ShaderData('system',0,1,1);

        this.cameraShaderData.setMatrix4('projectionMatrix',()=>{
            return frameState.camera.projectionMatrix
        });
        this.cameraShaderData.setMatrix4('viewMatrix',()=>{
            return frameState.camera.viewMatrix
        });
        this.cameraShaderData.setMatrix4('inverseViewMatrix',()=>{
            return frameState.camera.inverseViewMatrix
        });
        this.cameraShaderData.setFloatVec3('position',()=>{       
            return frameState.camera.position;
        });
    }
    private createLightShaderData(lightManger:LightManger){
        if(!this.lightShaderData)this.lightShaderData=new LightShaderData(lightManger,2,2);
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
    }
    destroy(){

    }
}
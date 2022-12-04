import LightManger from "../core/LightManger";
import UniformBuffer from "./UniformBuffer";
import { UniformLight } from "./Uniforms";
import Buffer from './Buffer';
import { BufferUsage } from "../core/WebGPUConstant";
export default class LightUniformBuffer extends UniformBuffer{


    lightManger:LightManger;

    commonBuffer:Buffer;

    spotLightsBuffer:Buffer;

    pointLightsBuffer:Buffer;

    dirtectLightsBuffer:Buffer;

    dirty: boolean;

    constructor(lightManger:LightManger){
        super();
        this.lightManger=lightManger;
        this.dirty=true;
    }
    update(device:GPUDevice,lightManger:LightManger){
        if(this.dirty) {
            this.destroy()
            this.dirty=false;
            this.createLightUniformBuffer(device,lightManger);
        }
        this.setLightData(lightManger);
    }
    private createLightUniformBuffer(device:GPUDevice,lightManger:LightManger){
        this.commonBuffer=Buffer.createUniformBuffer(device,lightManger.commonTatalByte,{type: 'read-only-storage'},BufferUsage.Storage);
        if(lightManger.lightDefines.spotLight)this.spotLightsBuffer=Buffer.createUniformBuffer(device,lightManger.spotLightsByte,{type: 'read-only-storage'},BufferUsage.Storage);
        if(lightManger.lightDefines.pointLight)this.pointLightsBuffer=Buffer.createUniformBuffer(device,lightManger.pointLightsByte,{type: 'read-only-storage'},BufferUsage.Storage);
        if(lightManger.lightDefines.dirtectLight)this.dirtectLightsBuffer=Buffer.createUniformBuffer(device,lightManger.dirtectLightsByte,{type: 'read-only-storage'},BufferUsage.Storage);
    }
    private setLightData(lightManger:LightManger){
        this.commonBuffer.setSubData(0,lightManger.commonLightBuffer);
        if(this.pointLightsBuffer)this.pointLightsBuffer.setSubData(0,lightManger.pointLightsBuffer);
        if(this.spotLightsBuffer)this.spotLightsBuffer.setSubData(0,lightManger.spotLightsBuffer);
        if(this.dirtectLightsBuffer)this.dirtectLightsBuffer.setSubData(0,lightManger.dirtectLightsBuffer);
   }
    setLight(name:string,binding:number,size:number){
        if (this._uniforms.get(name)) return;
        const uniform=new UniformLight(name,binding,this[name],size);
        this._uniforms.set(name,uniform);
    }
    destroy(): void {
        if(this.commonBuffer)this.commonBuffer.destroy()
        if(this.spotLightsBuffer)this.spotLightsBuffer.destroy();
        if(this.pointLightsBuffer)this.pointLightsBuffer.destroy();
        if(this.dirtectLightsBuffer)this.dirtectLightsBuffer.destroy();
    }
}
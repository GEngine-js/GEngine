/*
 * @Author: junwei.gu junwei.gu@jiduauto.com
 * @Date: 2022-12-05 10:53:19
 * @LastEditors: junwei.gu junwei.gu@jiduauto.com
 * @LastEditTime: 2023-01-30 10:24:29
 * @FilePath: \GEngine\src\render\LightShaderData.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import LightManger from "../core/LightManger";
import { UniformLight } from "./Uniforms";
import Buffer from './Buffer';
import { BufferUsage } from "../core/WebGPUConstant";
import ShaderData from "./ShaderData";
import Context from "./Context";
export default class LightShaderData extends ShaderData{

    lightManger:LightManger;

    commonBuffer:Buffer;

    spotLightsBuffer:Buffer;

    pointLightsBuffer:Buffer;

    dirtectLightsBuffer:Buffer;

    dirty: boolean;

    constructor(lightManger:LightManger,layoutIndex?:number,groupIndex?:number,){
        super('light',0,layoutIndex,groupIndex);
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
    protected uploadUniform(context:Context,lightManger?:LightManger){
        if(this.dirty) {
            this.destroy()
            this.dirty=false;
            this.createLightUniformBuffer(context.device,lightManger);
            this._uniforms.forEach((uniform)=>uniform.set());
        }
        this.setLightData(lightManger);
    }
    bind(context:Context,passEncoder:GPURenderPassEncoder){
        this.uploadUniform(context,this.lightManger);
        const {groupLayout,bindGroup}=this.createBindGroupAndLayout(context.device,this.label,this.layoutIndex,this.groupIndex);
        bindGroup.bind(passEncoder)
        this.bindGroup=bindGroup;
        this.groupLayout=groupLayout;
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
        const uniform=new UniformLight(name,binding,this,size);
        this._uniforms.set(name,uniform);
    }
    destroy(): void {
        if(this.commonBuffer)this.commonBuffer.destroy()
        if(this.spotLightsBuffer)this.spotLightsBuffer.destroy();
        if(this.pointLightsBuffer)this.pointLightsBuffer.destroy();
        if(this.dirtectLightsBuffer)this.dirtectLightsBuffer.destroy();
    }
}
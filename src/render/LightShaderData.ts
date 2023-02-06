import LightManger from "../core/LightManger";
import { UniformLight } from "./Uniforms";
import Buffer from './Buffer';
import { BufferUsage } from "../core/WebGPUConstant";
import ShaderData from "./ShaderData";
import Context from "./Context";
import UniformBuffer from "./UniformBuffer";
export default class LightShaderData extends ShaderData{

    lightManger:LightManger;

    commonBuffer:UniformBuffer;

    spotLightsBuffer:UniformBuffer;

    pointLightsBuffer:UniformBuffer;

    dirtectLightsBuffer:UniformBuffer;

    dirty: boolean;

    constructor(lightManger:LightManger,layoutIndex?:number,groupIndex?:number,){
        super('light',0,layoutIndex,groupIndex);
        this.lightManger=lightManger;
        this.dirty=true;
    }
    protected uploadUniform(context:Context,lightManger?:LightManger){
        if(this.dirty) {
            this.destroy()
            this.dirty=false;
            this.createLightUniformBuffer(lightManger);
        }
        debugger
        this._uniforms.forEach((uniform)=>uniform.bind(context));

    }
    bind(context:Context,passEncoder:GPURenderPassEncoder){
        this.uploadUniform(context,this.lightManger);
        const {groupLayout,bindGroup}=this.createBindGroupAndLayout(context.device,this.label,this.layoutIndex,this.groupIndex);
        bindGroup.bind(passEncoder)
        this.bindGroup=bindGroup;
        this.groupLayout=groupLayout;
     }
    private createLightUniformBuffer(lightManger:LightManger){     
        this.commonBuffer= new UniformBuffer('read-only-storage',BufferUsage.Storage| BufferUsage.CopyDst,lightManger.commonTatalByte,lightManger.commonLightBuffer);
        this.setUniformBuffer('commonBuffer',this.commonBuffer)
        if(lightManger.lightDefines.spotLight){
            this.spotLightsBuffer=new UniformBuffer('read-only-storage',BufferUsage.Storage| BufferUsage.CopyDst,lightManger.spotLightsByte,lightManger.spotLightsBuffer,lightManger.lightDefines.spotLightBinding);
            this.setUniformBuffer('spotLightsBuffer',this.spotLightsBuffer);
        }
        if(lightManger.lightDefines.pointLight){
            this.pointLightsBuffer=new UniformBuffer('read-only-storage',BufferUsage.Storage| BufferUsage.CopyDst,lightManger.pointLightsByte,lightManger.pointLightsBuffer,lightManger.lightDefines.pointLightBinding);
            this.setUniformBuffer('pointLightsBuffer',this.pointLightsBuffer);
        }
        if(lightManger.lightDefines.dirtectLight){
            this.dirtectLightsBuffer=new UniformBuffer('read-only-storage',BufferUsage.Storage| BufferUsage.CopyDst,lightManger.dirtectLightsByte,lightManger.dirtectLightsBuffer,lightManger.lightDefines.dirtectLightBinding);
            this.setUniformBuffer('dirtectLightsBuffer',this.dirtectLightsBuffer)
        }
    }
    destroy(): void {
        if(this.commonBuffer)this.commonBuffer.destroy()
        if(this.spotLightsBuffer)this.spotLightsBuffer.destroy();
        if(this.pointLightsBuffer)this.pointLightsBuffer.destroy();
        if(this.dirtectLightsBuffer)this.dirtectLightsBuffer.destroy();
    }
}
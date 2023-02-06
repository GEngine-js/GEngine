import BindGroupLayout from "../render/BindGroupLayout";
import { Scene } from "../Scene";
import { FrameState } from "./FrameState";
import LightManger from "./LightManger";
import ShaderData from "../render/ShaderData";
import Context from "../render/Context";
import UniformBuffer from "../render/UniformBuffer";
import { BufferUsage } from "./WebGPUConstant";

export default class SystemRenderResource {

    lightShaderData: ShaderData;

    cameraShaderData: ShaderData;

    constructor() {
    }
    get layouts(): BindGroupLayout[] {
        return [this.cameraShaderData.groupLayout, this.lightShaderData.groupLayout]
    }

    update(frameState: FrameState, scene: Scene) {
        const { lightManger } = scene;
        this.updateLight(lightManger)
        this.updateCamera(frameState)
    }
    public bind(context: Context, passEncoder: GPURenderPassEncoder) {
        this.lightShaderData.bind(context, passEncoder);
        this.cameraShaderData.bind(context, passEncoder);
    }
    // camera
    private updateCamera(frameState: FrameState) {
        if (!this.cameraShaderData) {
            this.createCameraShaderData(frameState);
        }
    }
    // light
    private updateLight(lightManger: LightManger) {
        if (lightManger.lightCountDirty) {
            lightManger.lightCountDirty = false;
            if(this.lightShaderData)this.lightShaderData.destroy()
            this.createLightShaderData(lightManger);
        }
    }
    private createCameraShaderData(frameState: FrameState) {
        this.cameraShaderData = new ShaderData('system', 0, 1, 1);
        const uniformBuffer = new UniformBuffer();
        uniformBuffer.setMatrix4('projectionMatrix', () => {
            return frameState.camera.projectionMatrix
        });
        uniformBuffer.setMatrix4('viewMatrix', () => {
            return frameState.camera.viewMatrix
        });
        uniformBuffer.setMatrix4('inverseViewMatrix', () => {
            return frameState.camera.inverseViewMatrix
        });
        uniformBuffer.setFloatVec3('position', () => {
            return frameState.camera.position;
        });
        this.cameraShaderData.setUniformBuffer('system',uniformBuffer)
    }
    private createLightShaderData(lightManger: LightManger) {

        this.lightShaderData = new ShaderData('light', 0, 2, 2);

        const commonBuffer= new UniformBuffer('read-only-storage',BufferUsage.Storage| BufferUsage.CopyDst,lightManger.commonTatalByte,lightManger.commonLightBuffer);
        this.lightShaderData.setUniformBuffer('commonBuffer',commonBuffer);

        if(lightManger.lightDefines.spotLight){
            const spotLightsBuffer=new UniformBuffer('read-only-storage',BufferUsage.Storage| BufferUsage.CopyDst,lightManger.spotLightsByte,lightManger.spotLightsBuffer,lightManger.lightDefines.spotLightBinding);
            this.lightShaderData.setUniformBuffer('spotLightsBuffer',spotLightsBuffer);
        }
        if(lightManger.lightDefines.pointLight){
            const pointLightsBuffer=new UniformBuffer('read-only-storage',BufferUsage.Storage| BufferUsage.CopyDst,lightManger.pointLightsByte,lightManger.pointLightsBuffer,lightManger.lightDefines.pointLightBinding);
            this.lightShaderData.setUniformBuffer('pointLightsBuffer',pointLightsBuffer);
        }
        if(lightManger.lightDefines.dirtectLight){
            const dirtectLightsBuffer=new UniformBuffer('read-only-storage',BufferUsage.Storage| BufferUsage.CopyDst,lightManger.dirtectLightsByte,lightManger.dirtectLightsBuffer,lightManger.lightDefines.dirtectLightBinding);
            this.lightShaderData.setUniformBuffer('dirtectLightsBuffer',dirtectLightsBuffer)
        }
    }
    destroy() {
        this.cameraShaderData.destroy();
        this.lightShaderData.destroy();

    }
}
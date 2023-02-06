import BindGroupLayout from "../render/BindGroupLayout";
import { Scene } from "../Scene";
import { FrameState } from "./FrameState";
import LightManger from "./LightManger";
import LightShaderData from "../render/LightShaderData";
import ShaderData from "../render/ShaderData";
import Context from "../render/Context";
import UniformBuffer from "../render/UniformBuffer";

export default class SystemRenderResource {

    lightShaderData: LightShaderData;

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
            lightManger.lightCountDirty = false
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
        if (!this.lightShaderData) this.lightShaderData = new LightShaderData(lightManger, 2, 2);
    }
    destroy() {

    }
}
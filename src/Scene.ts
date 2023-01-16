/*
 * @Author: junwei.gu junwei.gu@jiduauto.com
 * @Date: 2022-10-24 19:32:21
 * @LastEditors: junwei.gu junwei.gu@jiduauto.com
 * @LastEditTime: 2023-01-16 10:08:52
 * @FilePath: \GEngine\src\Scene.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import PerspectiveCamera from "./camera/PerspectiveCamera";
import { EventDispatcher } from "./core/EventDispatcher";
import { FrameState } from "./core/FrameState";
import LightManger from "./core/LightManger";
import PrimitiveManger from "./core/PrimitiveManger";
import { Mesh } from "./mesh/Mesh";
import SkyBox from "./mesh/SkyBox";
import Context from "./render/Context";
import ForwardRenderLine from "./renderpipeline/ForwardRenderLine";
import IBaseRenderLine from "./renderpipeline/IBaseRenderLine";
import defaultValue from "./utils/defaultValue";

export class Scene extends EventDispatcher {
    lightManger: LightManger;
    primitiveManger: PrimitiveManger;
    camera: PerspectiveCamera;
    context: Context;
    requestAdapter: {};
    deviceDescriptor: {};
    presentationContextDescriptor: {};
    container: HTMLDivElement;
    frameState: FrameState;
    currentRenderPipeline:IBaseRenderLine;
    private ready: boolean;
    viewport: { x: number; y: number; width: number; height: number;};
    skybox:SkyBox;
    constructor(options) {
        super();
        this.container = options.container instanceof HTMLDivElement? options.container:document.getElementById(options.container);
        this.lightManger = new LightManger();
        this.primitiveManger = new PrimitiveManger();
        this.context = new Context({ canvas: null,container:this.container,pixelRatio:1});
        this.requestAdapter = options.requestAdapter||{};
        this.deviceDescriptor = options.deviceDescriptor||{};
        this.presentationContextDescriptor = options.presentationContextDescriptor;
        this.ready=false;
        this.skybox=defaultValue(options.skybox,undefined);
        //this.init();
    }
    set environment(value){
       this.frameState.environment=value;
    }
    get environment(){
        return this.frameState.environment;
    }
    private async init() {
        if (!(await this.context.init(this.requestAdapter, this.deviceDescriptor, this.presentationContextDescriptor))) {
            throw new Error("Your browser doesn't support WebGPU.");
        } else {
            this.currentRenderPipeline=new ForwardRenderLine(this.context);
            this.frameState = new FrameState(this.context);
            this.ready=true;
            this.viewport={
                x:0,
                y:0,
                width:this.context.presentationSize.width,
                height:this.context.presentationSize.height
            }
        }
    }
    add(instance) {
        if (instance.type === 'primitive' && !this.primitiveManger.contains(instance)) {
            this.primitiveManger.add(instance)
        }
    }
    addLight(light) {
        this.lightManger.add(light);
    }
    setCamera(camera) {
        this.camera = camera;
    }
    remove(instance) {
        if (instance.type === 'primitive' && !this.primitiveManger.contains(instance)) {
            this.primitiveManger.remove(instance)
        }
    }
    getPrimitiveById() {

    }
    render() {
        this.update();
    }
    private update() {
    if(!this.ready) return;
        //更新相机
        this.frameState.viewport=this.viewport;
        this.frameState.update(this.camera);
        //更新灯光
        this.lightManger.update(this.frameState);
        this.context.systemRenderResource.update(this.frameState,this)

        //update primitive and select
        this.primitiveManger.update(this.frameState)   
        //selct renderPipeline
        this.currentRenderPipeline.render(this.frameState);
    }
    public renderMesh(mesh:Mesh){
        mesh.beforeRender();
        const drawComand=mesh.getDrawCommand()
        const currentRenderPassEncoder=drawComand.renderTarget.getRenderPassEncoder(this.context);
        this.context.render(drawComand,currentRenderPassEncoder);
        drawComand.renderTarget.endRenderPassEncoder();
        mesh.afterRender();
    }

}
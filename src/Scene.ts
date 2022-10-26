import Camera from "./camera/Camera";
import PerspectiveCamera from "./camera/PerspectiveCamera";
import { EventDispatcher } from "./core/EventDispatcher";
import { FrameState } from "./core/FrameState";
import LightManger from "./core/LightManger";
import PrimitiveManger from "./core/PrimitiveManger";
import Context from "./render/Context";

export class Scene extends EventDispatcher {
    lightManger: LightManger;
    primitiveManger: PrimitiveManger;
    camera: PerspectiveCamera;
    context: Context;
    requestAdapter: {};
    deviceDescriptor: {};
    presentationContextDescriptor: {};
    container: HTMLCanvasElement
    frameState: FrameState;
    constructor(options) {
        super();
        this.container = options.container
        this.lightManger = new LightManger();
        this.primitiveManger = new PrimitiveManger();
        this.context = new Context({ canvas: this.container });
        this.requestAdapter = options.requestAdapter;
        this.deviceDescriptor = options.deviceDescriptor;
        this.presentationContextDescriptor = options.presentationContextDescriptor;
        this.init();
    }
    private async init() {
        if (!(await this.context.init(this.requestAdapter, this.deviceDescriptor, this.presentationContextDescriptor))) {
            throw new Error("Your browser doesn't support WebGPU.");
        } else {
            this.frameState = new FrameState(this.context)
        }
    }
    add(instance) {
        if (instance.type = 'primitive' && !this.primitiveManger.contains(instance)) {
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
        if (instance.type = 'primitive' && !this.primitiveManger.contains(instance)) {
            this.primitiveManger.remove(instance)
        }
    }
    getPrimitiveById() {

    }
    render() {
        this.update();
    }
    private update() {
        //更新灯光
        this.lightManger.update(this.frameState);
        //更新相机
        this.frameState.update(this.camera);
        //update primitive and select
        this.primitiveManger.update(this.frameState)
    }

}
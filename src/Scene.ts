import Camera from "./camera/Camera";
import { EventDispatcher } from "./core/EventDispatcher";
import LightManger from "./core/LightManger";
import PrimitiveManger from "./core/PrimitiveManger";
import Context from "./render/Context";

export class Scene extends EventDispatcher{
    lightManger:LightManger;
    primitiveManger:PrimitiveManger;
    camera:Camera;
    context: Context;
    requestAdapter:{}; 
    deviceDescriptor:{};
    presentationContextDescriptor:{}
    constructor(options){
        super();
        this.lightManger=new LightManger();
        this.primitiveManger=new PrimitiveManger();
        this.context=new Context(); 
        this.requestAdapter=options.requestAdapter; 
        this.deviceDescriptor=options.deviceDescriptor;
        this.presentationContextDescriptor=options.presentationContextDescriptor;   
        this.init();
    }
    private async init(){
        if (!(await this.context.init(this.requestAdapter,this.deviceDescriptor,this.presentationContextDescriptor))) {
            throw new Error("Your browser doesn't support WebGPU.");
          }
    }
    add(primitive){
        if (primitive.type='primitive'&&!this.primitiveManger.contains(primitive)) {
            this.primitiveManger.add(primitive)
        } 
    }
    remove(){

    }
    getPrimitiveById(){

    }
    render(){


    }
    update(){
        //更新相机
        //更新灯光
        //选择Primitive
    }
    //视锥剔除
    private selectPrimitive(){

    }

}
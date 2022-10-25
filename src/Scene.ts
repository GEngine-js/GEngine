import Camera from "./camera/Camera";
import { EventDispatcher } from "./core/EventDispatcher";
import LightManger from "./core/LightManger";
import PrimitiveManger from "./core/PrimitiveManger";

export class Scene extends EventDispatcher{
    lightManger:LightManger;
    primitiveManger:PrimitiveManger;
    camera:Camera;
    constructor(){
        super();
        this.lightManger=new LightManger();
        this.primitiveManger=new PrimitiveManger();       
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
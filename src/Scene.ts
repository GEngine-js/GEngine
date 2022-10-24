import Camera from "./camera/Camera";
import { EventDispatcher } from "./core/EventDispatcher";

export class Scene extends EventDispatcher{
    lightCollection:[];
    primitiveCollection:[];
    camera:Camera;
    constructor(){
        super();       
    }
    add(primitive){
        if (primitive.type='primitive'&&this.primitiveCollection.includes(primitive)) {
            
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
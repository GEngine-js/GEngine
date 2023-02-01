import BoundingSphere from "../core/BoundingSphere";
import { FrameState } from "../core/FrameState";
import VertextBuffer from "../render/VertextBuffer";
import Vector3 from "../math/Vector3";
import {Attribute} from "../render/Attribute";
import Attributes from "../render/Attributes";
import IndexBuffer from "../render/IndexBuffer";
import combine from "../utils/combine";
import { PrimitiveTopology } from "../core/WebGPUConstant";
export default class Geometry {
    type: string;
    dirty: boolean;
    indexBuffer?:IndexBuffer;
    vertBuffer:VertextBuffer;
    count:number;
    boundingSphere:BoundingSphere;
    private  _defines:{[prop: string]: boolean|number};
    private attributes:Attributes;
    definesDirty: boolean;
    topology:PrimitiveTopology;
    get defines(){
        return this._defines;
    }
    set defines(value){
        this.definesDirty=true;
        this._defines=combine(value,this._defines,false);
    }
    constructor(options?:any) {
        this.type = options.type||undefined;
        this.boundingSphere = undefined;
        this.dirty = false;
        this.definesDirty=true;
        this.attributes=new Attributes();
        this.vertBuffer=new VertextBuffer(this.attributes,0);
        this._defines={};
    }
    getAttribute(name:string){
        return this.attributes.getAttribute(name);
    }
    setAttribute(attribute:Attribute){
       this.attributes.setAttribute(attribute);
    }
    setIndice(indice:Array<number>){
        if(!this.indexBuffer)this.indexBuffer=new IndexBuffer();
        this.indexBuffer.setIndices(indice);
    }
    update(frameState:FrameState){}
    computeBoundingSphere(positions){
        this.boundingSphere=BoundingSphere.fromVertices(positions,new Vector3(0,0,0),3)
    }
    destroy(){
        this?.indexBuffer.destroy();
        this.vertBuffer.destroy();
        this.attributes.destroy();
    }
}
import DataBuffer from '../utils/DataBuffer';
import Color from '../math/Color';
import Matrix2 from '../math/Matrix2';
import Matrix3 from '../math/Matrix3';
import Matrix4 from '../math/Matrix4';
import Vector2 from '../math/Vector2';
import Vector3 from '../math/Vector3';
import Vector4 from '../math/Vector4';
import { ShaderStage } from '../core/WebGPUConstant';
import Texture from './Texture';
import Sampler from './Sampler';
import { Light } from '../light/Light';
import Buffer from './Buffer';
export class Uniform<T> {
    _value: T;
    name: string;
    value: T;
    offset: number;
    dataBuffer: DataBuffer;
    buffer:Float32Array|Uint16Array|Uint32Array|Uint8Array|Float64Array
    size: number;
    cb: Function|number|Object;
    binding?:number;
    visibility?:number;
    type?:string;

    constructor(uniformName:string,cb:Function|number|Object,binding?:number) {
        this.name = uniformName;
        this.cb=cb;
        this.binding=binding||0;
        this.visibility=ShaderStage.Vertex;
        this.type='number'      
    }
    setBuffer(array:Array<number>){
        for (let i = 0; i < array.length; i++) {
           this.buffer[i]=array[i]          
        }
    }
    set(){}
    getValue(){
        let result;
         const cbType=typeof this.cb;
         switch (cbType) {
            case "object":
                result=this.cb[this.name]
                break;
            case "function" :
                //@ts-ignore
                result=this.cb();
                break;  
            case "number" :
                result=this.cb; 
                break;        
            default:
                throw new Error('type is error')
                break;
         }
         return result;
    }
}

export class UniformVec extends Uniform<number>{
    _value:number;
    name: string;
    value: number;
    offset: number;
    dataBuffer: DataBuffer;
    size: number;

    constructor(uniformName:string, buffer:Float32Array,byteOffset:number,cb:Function|number|Object,binding?:number) {
        super(uniformName,cb);
        this.value = undefined;
        this._value = 0;
        this.size=4;
        this.buffer=new Float32Array(buffer.buffer,byteOffset,1)
    }
    set () {
        if(this.cb!=undefined)this.value=this.getValue();
        if (this.value !== this._value) {
          this._value = this.value;
          this.buffer[0]=this.value;
        }
      };
}
export class UniformFloatVec2 extends Uniform<Vector2>{
    constructor(uniformName:string, buffer:Float32Array,byteOffset:number,cb:Function|number|Object,binding?:number) {
        super(uniformName,cb);
        this.value = undefined;
        this._value = new Vector2();
        this.buffer=new Float32Array(buffer.buffer,byteOffset,2)
        this.size=8;
    }
    set () {
        if(this.cb!=undefined)this.value=this.getValue();
        const v = this.value;
        if (!Vector2.equals(v, this._value)) {
            Vector2.clone(v, this._value);
            this.setBuffer(this._value.toArray());
        }
      };
}
export class UniformFloatVec3 extends Uniform<Vector3>{
    constructor(uniformName:string,buffer:Float32Array,byteOffset:number,cb:Function|number|Object,binding?:number) {
        super(uniformName,cb);
        this.value = undefined;
        this._value =new Vector3();
        this.buffer=new Float32Array(buffer.buffer,byteOffset,3)
        this.size=12;
    }
    set () {
        if(this.cb!=undefined)this.value=this.getValue();
        const v = this.value;
        if (!Vector3.equals(v, this._value)) {
            Vector3.clone(v, this._value);
            this.setBuffer(this._value.toArray());
        }
      };
}
export class UniformFloatVec4 extends Uniform<Vector4>{
    constructor(uniformName:string, buffer:Float32Array,byteOffset:number,cb:Function|number|Object,binding?:number) {
        super(uniformName,cb);
        this.value = undefined;
        this._value =new Vector4();
        this.buffer=new Float32Array(buffer.buffer,byteOffset,4)
        this.size=16;
    }
    set () {
        if(this.cb!=undefined)this.value=this.getValue();
        const v = this.value;
        if (!Vector4.equals(v, this._value)) {
            Vector4.clone(v, this._value);
            this.setBuffer(this._value.toArray());
        }
      };
}
export class UniformColor extends Uniform<Color>{
    constructor(uniformName:string, buffer:Float32Array,byteOffset:number,cb:Function|number|Object,binding?:number) {
        super(uniformName,cb);
        this.value = undefined;
        this._value =new Color();
        this.buffer=new Float32Array(buffer.buffer,byteOffset,4)
        this.size=16;
    }
    set () {
        if(this.cb!=undefined)this.value=this.getValue();
        const v = this.value;
        if (!Color.equals(v, this._value)) {
            Color.clone(v, this._value);
            this.setBuffer(this._value.toArray());
        }
      };
}

export class UniformMat2 extends Uniform<Matrix2>{
    constructor(uniformName:string, buffer:Float32Array,byteOffset:number,cb:Function|number|Object,binding?:number) {
        super(uniformName,cb);
        this.value = undefined;
        this._value =new Matrix2();
        this.buffer=new Float32Array(buffer.buffer,byteOffset,4)
        this.size=12;
    }
    set () {
        if(this.cb!=undefined)this.value=this.getValue();
        const v = this.value;
        if (!Matrix2.equals(v, this._value)) {
            Matrix2.clone(v, this._value);
            this.setBuffer(this._value.toArray());
        }
      };
}
export class UniformMat3 extends Uniform<Matrix3>{
    constructor(uniformName:string, buffer:Float32Array,byteOffset:number,cb:Function|number|Object,binding?:number) {
        super(uniformName,cb);
        this.value = undefined;
        this._value = new Matrix3();
        this.buffer=new Float32Array(buffer.buffer,byteOffset,9)
        this.size=36;
    }
    set () {
        if(this.cb!=undefined)this.value=this.getValue();
        const v = this.value;
        if (!Matrix3.equals(v, this._value)) {
            Matrix3.clone(v, this._value);
            this.setBuffer(this._value.toArray());
        }
      };
}
export class UniformMat4 extends Uniform<Matrix4>{
    constructor(uniformName:string,buffer:Float32Array,byteOffset:number,cb:Function|number|Object,binding?:number) {
        super(uniformName,cb);
        this.value = undefined;
        this._value = new Matrix4();
        this.buffer=new Float32Array(buffer.buffer,byteOffset,16)
        this.size=64;
    }
    set () {
        if(this.cb!=undefined)this.value=this.getValue();
        const v = this.value;
        if (!Matrix4.equals(v, this._value)) {
            Matrix4.clone(v, this._value);
            this.setBuffer(this._value.toArray());
        }
      };
}

export class UniformTexture extends Uniform<Texture>{
    constructor(uniformName:string, binding:number,cb:Function|number|Object) {
        super(uniformName,cb);
        this.value = this.getValue();
        this.binding=binding;
        this.type='texture';
        this.visibility=ShaderStage.Fragment;
    }
}
export class UniformSampler extends Uniform<Sampler>{
    constructor(uniformName:string,binding:number,cb:Function|number|Object) {
        super(uniformName,cb);
        this.value =this.getValue();
        this.binding=binding;
        this.type='sampler';
        this.visibility=ShaderStage.Fragment;
    }
}
export class UniformLight extends Uniform<Light>{
    bufferSize: number;
    constructor(uniformName:string,binding:number,cb:Function|number|Object,size:number) {
        super(uniformName,cb);
        this.buffer =this.getValue();
        this.binding=binding;
        // this.type='light';
        this.visibility=ShaderStage.Fragment;
        this.bufferSize=size;
    }
}

export class UniformBufferLight{

}
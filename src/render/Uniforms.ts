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
import Context from './Context';
import defaultValue from '../utils/defaultValue';
import UniformBuffer from './UniformBuffer';
export class Uniform<T> {
    _value: T;
    name: string;
    value: T;
    offset: number;
    buffer:Float32Array|Uint16Array|Uint32Array|Uint8Array|Float64Array|UniformBuffer
    size: number;
    cb: Function|number|Object;
    byteSize:number;
    binding?:number;
    visibility?:number;
    type?:string;
    
    constructor(uniformName:string,cb?:Function|number|Object,binding?:number,offset?:number) {
        this.name = uniformName;
        this.cb=cb;
        this.binding=defaultValue(binding,0);
        this.offset=defaultValue(offset,0);
        this.visibility=ShaderStage.Vertex|ShaderStage.Fragment;
        this.type='number';      
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

export class UniformFloat extends Uniform<number>{
    static align=4;
    constructor(uniformName:string, buffer:Float32Array,byteOffset:number,cb:Function|number|Object,binding?:number,offset?:number) {
        super(uniformName,cb,binding,offset);
        this.value = undefined;
        this._value = 0;
        this.size=4;
        this.byteSize=4;
        this.buffer=new Float32Array(buffer.buffer,byteOffset,1)
        this.type='vec1'
    }
    set () {
        if(this.cb!=undefined)this.value=this.getValue();
        if (this.value !== this._value) {
          this._value = this.value;
          this.buffer[0]=this.value;
          return true;
        }
        return false;
      };
}
export class UniformFloatVec2 extends Uniform<Vector2>{
    static align=8;
    constructor(uniformName:string, buffer:Float32Array,byteOffset:number,cb:Function|number|Object,binding?:number,offset?:number) {
        super(uniformName,cb,binding,offset);
        this.value = undefined;
        this._value = new Vector2();
        this.buffer=new Float32Array(buffer.buffer,byteOffset,2)
        this.size=8;
        this.byteSize=8;
        this.type='vec2';
    }
    set ():boolean {
        if(this.cb!=undefined)this.value=this.getValue();
        const v = this.value;
        if (!Vector2.equals(v, this._value)) {
            Vector2.clone(v, this._value);
            this.setBuffer(this._value.toArray());
            return true;
        }
        return false;
    }
}
export class UniformFloatVec3 extends Uniform<Vector3>{
    static align=16;
    constructor(uniformName:string,buffer:Float32Array,byteOffset:number,cb:Function|number|Object,binding?:number,offset?:number) {
        super(uniformName,cb,binding,offset);
        this.value = undefined;
        this._value =new Vector3();
        this.buffer=new Float32Array(buffer.buffer,byteOffset,3)
        this.size=12;
        this.byteSize=12;
        this.type='vec3';
    }
    set ():boolean {
        if(this.cb!=undefined)this.value=this.getValue();
        const v = this.value;
        if (!Vector3.equals(v, this._value)) {
            Vector3.clone(v, this._value);
            this.setBuffer(this._value.toArray());
            return true;
        }
        return false;
      }
}
export class UniformFloatVec4 extends Uniform<Vector4>{
    static align=16;
    constructor(uniformName:string, buffer:Float32Array,byteOffset:number,cb:Function|number|Object,binding?:number,offset?:number) {
        super(uniformName,cb,binding,offset);
        this.value = undefined;
        this._value =new Vector4();
        this.buffer=new Float32Array(buffer.buffer,byteOffset,4)
        this.size=16;
        this.byteSize=16;
        this.type='vec4';
    }
    set ():boolean {
        if(this.cb!=undefined)this.value=this.getValue();
        const v = this.value;
        if (!Vector4.equals(v, this._value)) {
            Vector4.clone(v, this._value);
            this.setBuffer(this._value.toArray());
            return true;
        }
        return false;
      };
}
export class UniformColor extends Uniform<Color>{
    static align=16;
    constructor(uniformName:string, buffer:Float32Array,byteOffset:number,cb:Function|number|Object,binding?:number,offset?:number) {
        super(uniformName,cb,binding,offset);
        this.value = undefined;
        this._value =new Color();
        this.buffer=new Float32Array(buffer.buffer,byteOffset,3)
        this.size=12;
        this.byteSize=12;
        this.type='vec3';
    }
    set ():boolean {
        if(this.cb!=undefined)this.value=this.getValue();
        const v = this.value;
        if (!Color.equals(v, this._value)) {
            Color.clone(v, this._value);
            this.setBuffer(this._value.toArray());
            return true;
        }
        return false;
      }
}

export class UniformMat2 extends Uniform<Matrix2>{
    static align=8;
    constructor(uniformName:string, buffer:Float32Array,byteOffset:number,cb:Function|number|Object,binding?:number,offset?:number) {
        super(uniformName,cb,offset);
        this.value = undefined;
        this._value =new Matrix2();
        this.buffer=new Float32Array(buffer.buffer,byteOffset,4)
        this.size=16;
        this.byteSize=16;
        this.type='mat2';
    }
    set ():boolean {
        if(this.cb!=undefined)this.value=this.getValue();
        const v = this.value;
        if (!Matrix2.equals(v, this._value)) {
            Matrix2.clone(v, this._value);
            this.setBuffer(this._value.toArray());
            return true;
        }
        return false;
      }
}
export class UniformMat3 extends Uniform<Matrix3>{
    static align=16;
    constructor(uniformName:string, buffer:Float32Array,byteOffset:number,cb:Function|number|Object,binding?:number,offset?:number) {
        super(uniformName,cb,binding,offset);
        this.value = undefined;
        this._value = new Matrix3();
        this.buffer=new Float32Array(buffer.buffer,byteOffset,9)
        this.size=48;
        this.byteSize=48;
        this.type='mat3';
    }
    set ():boolean {
        if(this.cb!=undefined)this.value=this.getValue();
        const v = this.value;
        if (!Matrix3.equals(v, this._value)) {
            Matrix3.clone(v, this._value);
            this.setBuffer(this._value.toArray());
            return true;
        }
        return false;
      }
}
export class UniformMat4 extends Uniform<Matrix4>{
    static align=16;
    constructor(uniformName:string,buffer:Float32Array,byteOffset:number,cb:Function|number|Object,binding?:number,offset?:number) {
        super(uniformName,cb,binding,offset);
        this.value = undefined;
        this._value = new Matrix4();
        this.buffer=new Float32Array(buffer.buffer,byteOffset,16)
        this.size=64;
        this.byteSize=64;
        this.type='mat4';
    }
    set ():boolean {
        if(this.cb!=undefined)this.value=this.getValue();
        const v = this.value;
        if (!Matrix4.equals(v, this._value)) {
            Matrix4.clone(v, this._value);
            this.setBuffer(this._value.toArray());
            return true;
        }
        return false;
      }
}

export class UniformTexture extends Uniform<Texture>{
    public binding:number;
    public type:string;
    public visibility:ShaderStage;
    public name:string;
    public texture:Texture;
    constructor(uniformName:string, binding:number,texture:Function|Texture){
        super(uniformName)
        this.binding=binding;
        this.type='texture';
        this.visibility=ShaderStage.Fragment;
        this.texture=texture instanceof Function?texture():texture;
    }
    get layoutType(){
       return this.texture.layoutType 
    }
    bind(context:Context){
        this.texture.update(context);
    }
}
export class UniformSampler extends Uniform<Sampler>{
    public binding:number;
    public type:string;
    public visibility:ShaderStage;
    public name:string;
    public sampler:Texture;
    constructor(uniformName:string, binding:number,sampler:Function|Sampler){
        super(uniformName)
        this.name=uniformName;
        this.binding=binding;
        this.type='sampler';
        this.visibility=ShaderStage.Fragment;
        this.sampler=sampler instanceof Function?sampler():sampler;
    }
    get layoutType(){
        return this.sampler.layoutType 
     }
    bind(context:Context){
        this.sampler.update(context);
    }
}
export class UniformLight extends Uniform<Light>{
    bufferSize: number;
    buffer:UniformBuffer;
    constructor(uniformName:string,binding:number,buffer:Buffer|Function|Object,size:number) {
        super(uniformName);
        this.cb=buffer;
        this.binding=binding;
        this.visibility=ShaderStage.Fragment;
        this.bufferSize=size;
    }
    set(){
      this.buffer=this.getValue();
    }
}
import {UniformColor, UniformFloat, UniformFloatVec2, UniformFloatVec3, UniformFloatVec4, UniformLight, UniformMat2, UniformMat3, UniformMat4, UniformSampler, UniformTexture } from "./Uniforms";
import Buffer from './Buffer';
import BindGroupEntity from "./BindGroupEntity";
import BindGroupLayoutEntry from "./BindGroupLayoutEntry";
import BindGroupLayout from "./BindGroupLayout";
import BindGroup from "./BindGroup";
import defaultValue from "../utils/defaultValue";
export default class ShaderData{

    byteOffset:number;

    totalUniformCount:number;

    data:Float32Array;

    buffer: Buffer;

    textureBinding:number;

    defines:{[prop: string]: boolean|number};

    defineDirty:boolean;

    protected _uniforms:Map<string,any>;

    private uniformDirty:boolean;

    constructor(size?:number,buffer?:Buffer,data?:Float32Array){
       this.byteOffset=0;
       this.totalUniformCount=size;
       if(this.totalUniformCount>0){
         this.data=defaultValue(data,new Float32Array(size));
       }else{
         this.data=defaultValue(data,undefined);
       }
       this.buffer=defaultValue(buffer,undefined);
       this.textureBinding=1;
       this.defineDirty=true;
       this.uniformDirty=true;
       this.defines={};
       this._uniforms=new Map(); 
    }
    setFloat(name:string,value:Function|number|Object,binding?:number){
         if (this._uniforms.get(name)) return;
         const uniform=new UniformFloat(name,this.data,this.byteOffset,value,binding);
         this._uniforms.set(name,uniform);
         this.byteOffset+=uniform.size;
    }
    setFloatVec2(name:string,value:Function|number|Object,binding?:number){
        if (this._uniforms.get(name)) return;
        this.byteOffset+=this.checkUniformOffset(this.byteOffset,UniformFloatVec2.align);
        const uniform=new UniformFloatVec2(name,this.data,this.byteOffset,value,binding);
        this._uniforms.set(name,uniform);
        this.byteOffset+=uniform.size;
    }
    setFloatVec3(name:string,value:Function|number|Object,binding?:number){
        if (this._uniforms.get(name)) return;
        this.byteOffset+=this.checkUniformOffset(this.byteOffset,UniformFloatVec3.align);
        const uniform=new UniformFloatVec3(name,this.data,this.byteOffset,value,binding);
        this._uniforms.set(name,uniform);
        this.byteOffset+=uniform.size;
    }
    setColor(name:string,value:Function|number|Object,binding?:number){
        if (this._uniforms.get(name)) return;
        this.byteOffset+=this.checkUniformOffset(this.byteOffset,UniformColor.align);
        const uniform=new UniformColor(name,this.data,this.byteOffset,value,binding);
        this._uniforms.set(name,uniform);
        this.byteOffset+=uniform.size;
    }
    setFloatVec4(name:string,value:Function|number|Object,binding?:number){
        if (this._uniforms.get(name)) return;
        this.byteOffset+=this.checkUniformOffset(this.byteOffset,UniformFloatVec4.align);
        const uniform=new UniformFloatVec4(name,this.data,this.byteOffset,value,binding);
        this._uniforms.set(name,uniform);
        this.byteOffset+=uniform.size;
    }
    setMatrix2(name:string,value:Function|number|Object,binding?:number){
        if (this._uniforms.get(name)) return;
        this.byteOffset+=this.checkUniformOffset(this.byteOffset,UniformMat2.align);
        const uniform=new UniformMat2(name,this.data,this.byteOffset,value,binding);
        this._uniforms.set(name,uniform);
        this.byteOffset+=uniform.size;
    }
    setMatrix3(name:string,value:Function|number|Object,binding?:number){
        if (this._uniforms.get(name)) return;
        this.byteOffset+=this.checkUniformOffset(this.byteOffset,UniformMat3.align);
        const uniform=new UniformMat3(name,this.data,this.byteOffset,value,binding);
        this._uniforms.set(name,uniform);
        this.byteOffset+=uniform.size;
    }
    setMatrix4(name:string,value:Function|number|Object,binding?:number){
        if (this._uniforms.get(name)) return;
        this.byteOffset+=this.checkUniformOffset(this.byteOffset,UniformMat4.align);
        const uniform=new UniformMat4(name,this.data,this.byteOffset,value,binding);
        this._uniforms.set(name,uniform);
        this.byteOffset+=uniform.size;
    }
    setTexture(name:string,value:Function|number|Object,binding?:number){
        if (this._uniforms.get(name)) return;
        debugger
        const uniform=new UniformTexture(name,this.textureBinding,value);
        this.setDefine(name.concat('Binding'),this.textureBinding);
        this.textureBinding+=1;
        this._uniforms.set(name,uniform)
    }
    setSampler(name:string,value:Function|number|Object,binding?:number){
        if (this._uniforms.get(name)) return;
        const uniform=new UniformSampler(name,this.textureBinding,value);
        this.setDefine(name.concat('Binding'),this.textureBinding);
        this.textureBinding+=1;
        this._uniforms.set(name,uniform);
    }
    setDefine(name:string,value:boolean|number){
        if (this.defines[name]===undefined) {
            this.defineDirty=true;
            this.defines[name]=value;
        }else{
            if (this.defines[name]===value) {
                return;
            }else{
                this.defineDirty=true;
                this.defines[name]=value;
            }
        }
        debugger
    }
    update(device:GPUDevice,other?:any){
        this._uniforms.forEach((uniform)=>{
           const result= uniform.set();
           if(result!=undefined&&this.uniformDirty==false) this.uniformDirty=result;
        });
        if(!this.buffer)this.buffer=Buffer.createUniformBuffer(device,this.totalUniformCount*4);
        if(this.uniformDirty){
             this.uniformDirty=false;
            this.buffer.setSubData(0,this.data);
        }
    }
    destroy(){
        this.byteOffset=0;
        this.totalUniformCount=0;
        this.data=undefined;
        this.buffer.destroy();
        this._uniforms=new Map(); 
    }
    private checkUniformOffset(byteSize:number,Align:number):number{
        //from https://gpuweb.github.io/gpuweb/wgsl/#address-space-layout-constraints
       return Math.ceil(byteSize/Align)*Align-byteSize;
    }
    public createBindGroupAndLayout(device:GPUDevice,label:string,index:number){
        const layoutEntities=this.createBindGroupLayoutEntry();
        const groupLayout= BindGroupLayout.getBindGroupFromCache(device,label,layoutEntities,index);
        const groupEntities=this.createBindGroupEntity();
        const bindGroup=BindGroup.getBindGroupFromCache({
            label:label,
            entires:groupEntities,
            device:device,
            layout:groupLayout,
            index:index
           });
       return {groupLayout,bindGroup}
    }
    private createBindGroupLayoutEntry(){
        const result=new Map()
        this._uniforms.forEach((uniform)=>{
          if(!result.has(uniform.binding)){
               result.set(uniform.binding,this.createOneLayoutEntry(uniform))
          }
        })
        const lauoutEntityArray=[]
        result.forEach((value)=>{
            lauoutEntityArray.push(value)
        })
    
       return lauoutEntityArray;
    }
    private createBindGroupEntity() {
        const result=new Map()
        this._uniforms.forEach((uniform)=>{
          if(!result.has(uniform.binding)){
               result.set(uniform.binding,this.creayeOneGroupEntity(uniform))
          }
        })
        const groupEntityArray=[]
        result.forEach((value)=>{
            groupEntityArray.push(value)
        })
    
       return groupEntityArray;
    }
    private createOneLayoutEntry(uniform){
        let layoutEntity;
        if(uniform.type==='number'){
            layoutEntity= new BindGroupLayoutEntry({
                binding: uniform.binding,
                buffer:uniform?.lightBuffer?.layoutType||this.buffer.layoutType,
                visibility: uniform.visibility,
                // uniforms: this.uniforms,
            });
        } else if(uniform.type==='texture'){
            layoutEntity = new BindGroupLayoutEntry({
                binding: uniform.binding,
                visibility: uniform.visibility,
                texture:uniform.value.layoutType
            });
        } else if(uniform.type==='sampler'){
            layoutEntity= new BindGroupLayoutEntry({
                binding: uniform.binding,
                visibility: uniform.visibility,
                sampler: {
                    type:uniform.value.layoutType,
                }
            });
        }
       return layoutEntity;
    }
    private creayeOneGroupEntity(uniform){
        let groupEntity;
        if(uniform.type==='number'){
            groupEntity=new BindGroupEntity({
                binding:uniform.binding,
                resource:{
                    buffer:uniform?.lightBuffer?.gpuBuffer||this.buffer.gpuBuffer,
                    offset: 0,
                    //兼容灯光
                    //size:uniform.bufferSize!=undefined?uniform.bufferSize:Material.getBindingSize(uniforms)
                    size:uniform.bufferSize!=undefined?uniform.bufferSize:this.totalUniformCount*4
                }
              });
        } else if(uniform.type==='texture'){
            groupEntity = new BindGroupEntity({
                binding:uniform.binding,
                resource:uniform.value.gpuTexture.createView()
            });
        } else if(uniform.type==='sampler'){
            groupEntity= new BindGroupEntity({
                binding:uniform.binding,
                resource:uniform.value.gpuSampler
            });
        }
       return groupEntity;
    }
}
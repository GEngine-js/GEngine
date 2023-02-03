import {Uniform, UniformColor, UniformFloat, UniformFloatVec2, UniformFloatVec3, UniformFloatVec4, UniformLight, UniformMat2, UniformMat3, UniformMat4, UniformSampler, UniformTexture } from "./Uniforms";
import Buffer from './Buffer';
import BindGroupEntity from "./BindGroupEntity";
import BindGroupLayoutEntry from "./BindGroupLayoutEntry";
import BindGroupLayout from "./BindGroupLayout";
import BindGroup from "./BindGroup";
import defaultValue from "../utils/defaultValue";
import Context from "./Context";
export default class ShaderData{

    byteOffset:number;

    totalUniformCount:number;

    data:Float32Array;

    buffer: Buffer;

    textureBinding:number;

    defines:{[prop: string]: boolean|number};

    defineDirty:boolean;

    label:string;

    bindGroup:BindGroup;

    groupLayout:BindGroupLayout;

    layoutIndex:number;

    groupIndex:number;

    protected _uniforms:Map<string,any>;

    private uniformDirty:boolean;

    private uniformTotalSize:number;

    private defaultUnifromTotalSize:number;

    constructor(label:string,size?:number,layoutIndex?:number,groupIndex?:number,buffer?:Buffer,data?:Float32Array){
       this.byteOffset=0;
       this.defaultUnifromTotalSize=size>0?size:400;
       this.data=defaultValue(data,new Float32Array(this.defaultUnifromTotalSize))
       this.buffer=defaultValue(buffer,undefined);
       this.label=label;
       this.textureBinding=1;
       this.defineDirty=true;
       this.uniformDirty=true;
       this.uniformTotalSize=0;
       this.defines={};
       this._uniforms=new Map(); 
       this.groupIndex=defaultValue(groupIndex,0);
       this.layoutIndex=defaultValue(layoutIndex,0)
    }
    get uniformsSize(){
        //https://gpuweb.github.io/gpuweb/wgsl/#address-space-layout-constraints
        return Math.ceil(this.byteOffset/16)*16
    }
    setFloat(name:string,value:Function|number|Object,binding?:number){
         if (this._uniforms.get(name)) return;
         const uniform=new UniformFloat(name,this.data,this.byteOffset,value,binding);
         this._uniforms.set(name,uniform);
         this.byteOffset+=uniform.size;
         this.uniformTotalSize+=1;
    }
    setFloatVec2(name:string,value:Function|number|Object,binding?:number){
        if (this._uniforms.get(name)) return;
        this.byteOffset+=this.checkUniformOffset(this.byteOffset,UniformFloatVec2.align);
        const uniform=new UniformFloatVec2(name,this.data,this.byteOffset,value,binding);
        this._uniforms.set(name,uniform);
        this.byteOffset+=uniform.size;
        this.uniformTotalSize+=2;
    }
    setFloatVec3(name:string,value:Function|number|Object,binding?:number){
        if (this._uniforms.get(name)) return;
        this.byteOffset+=this.checkUniformOffset(this.byteOffset,UniformFloatVec3.align);
        const uniform=new UniformFloatVec3(name,this.data,this.byteOffset,value,binding);
        this._uniforms.set(name,uniform);
        this.byteOffset+=uniform.size;
        this.uniformTotalSize+=3;
    }
    setColor(name:string,value:Function|number|Object,binding?:number){
        if (this._uniforms.get(name)) return;
        this.byteOffset+=this.checkUniformOffset(this.byteOffset,UniformColor.align);
        const uniform=new UniformColor(name,this.data,this.byteOffset,value,binding);
        this._uniforms.set(name,uniform);
        this.byteOffset+=uniform.size;
        this.uniformTotalSize+=3;
    }
    setFloatVec4(name:string,value:Function|number|Object,binding?:number){
        if (this._uniforms.get(name)) return;
        this.byteOffset+=this.checkUniformOffset(this.byteOffset,UniformFloatVec4.align);
        const uniform=new UniformFloatVec4(name,this.data,this.byteOffset,value,binding);
        this._uniforms.set(name,uniform);
        this.byteOffset+=uniform.size;
        this.uniformTotalSize+=4;
    }
    setMatrix2(name:string,value:Function|number|Object,binding?:number){
        if (this._uniforms.get(name)) return;
        this.byteOffset+=this.checkUniformOffset(this.byteOffset,UniformMat2.align);
        const uniform=new UniformMat2(name,this.data,this.byteOffset,value,binding);
        this._uniforms.set(name,uniform);
        this.byteOffset+=uniform.size;
        this.uniformTotalSize+=4;
    }
    setMatrix3(name:string,value:Function|number|Object,binding?:number){
        if (this._uniforms.get(name)) return;
        this.byteOffset+=this.checkUniformOffset(this.byteOffset,UniformMat3.align);
        const uniform=new UniformMat3(name,this.data,this.byteOffset,value,binding);
        this._uniforms.set(name,uniform);
        this.byteOffset+=uniform.size;
        this.uniformTotalSize+=12;
    }
    setMatrix4(name:string,value:Function|number|Object,binding?:number){
        if (this._uniforms.get(name)) return;
        this.byteOffset+=this.checkUniformOffset(this.byteOffset,UniformMat4.align);
        const uniform=new UniformMat4(name,this.data,this.byteOffset,value,binding);
        this._uniforms.set(name,uniform);
        this.byteOffset+=uniform.size;
        this.uniformTotalSize+=16;
    }
    setTexture(name:string,value:Function|number|Object,binding?:number){
        if (this._uniforms.get(name)) return;
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
    }
    update(device:GPUDevice,other?:any){
        this._uniforms.forEach((uniform)=>{
            if (uniform.type=='texture'||uniform.type=='sampler') {
                //uniform.update(context)
            } else {
                const result= uniform.set();
                if(result!=undefined&&this.uniformDirty==false) this.uniformDirty=result;
            }
        });
        if(!this.buffer)this.buffer=Buffer.createUniformBuffer(device,this.uniformsSize);
        if(this.uniformDirty){
             this.uniformDirty=false; 
            this.buffer.setSubData(0,this.data);
        }
    }

    bind(context:Context,passEncoder:GPURenderPassEncoder){
       this.uploadUniform(context);
       const {groupLayout,bindGroup}=this.createBindGroupAndLayout(context.device,this.label,this.layoutIndex,this.groupIndex);
       bindGroup.bind(passEncoder)
       this.bindGroup=bindGroup;
       this.groupLayout=groupLayout;
    }
    destroy(){
        this.byteOffset=0;
        this.uniformTotalSize=0;
        this.data=undefined;
        this.buffer.destroy();
        this._uniforms=new Map(); 
    }
    public getBindGroupAndLayout(device:GPUDevice,label:string,index:number){
        const layoutEntities=this.createBindGroupLayoutEntry();
        const groupLayout= BindGroupLayout.getBindGroupLayoutFromCache(device,label,layoutEntities,index);
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
    public createBindGroupAndLayout(device:GPUDevice,label:string,layoutIndex?:number,groupIndex?:number){
        const layoutEntities=this.createBindGroupLayoutEntry();
        const groupLayout= BindGroupLayout.getBindGroupLayoutFromCache(device,label,layoutEntities,layoutIndex||0);
        const groupEntities=this.createBindGroupEntity();
        const bindGroup=BindGroup.getBindGroupFromCache({
            label:label,
            entires:groupEntities,
            device:device,
            layout:groupLayout,
            index:groupIndex||0//后续改成groupIndex
           });
       return {groupLayout,bindGroup}
    }
    public getUniformStruct(){
        let uniformStruct=  `struct MaterialUniform {\n `
        this._uniforms.forEach((uniform)=>{
             uniformStruct+=this.createUniformString(uniform);
        });
        uniformStruct+= `}\n`
        return uniformStruct;
    }
    protected uploadUniform(context:Context){
        this._uniforms.forEach((uniform)=>{
            if (uniform.type=='texture'||uniform.type=='sampler') {
                uniform.update(context)
            } else {
                const result= uniform.set();
                if(result!=undefined&&this.uniformDirty==false) this.uniformDirty=result;
            }
        });
        if(!this.buffer)this.buffer=Buffer.createUniformBuffer(context.device,this.uniformsSize*4);
        if(this.uniformDirty){
            this.uniformDirty=false;        
            this.buffer.setSubData(0,this.data.slice(0,this.uniformsSize));
        }
    }
    private createUniformString(uniform){
        let result= ``;
        //modelMatrix: mat4x4<f32>
        switch (uniform.type) {
            case 'vec1':
                result= `${uniform.name} :f32,\n`;
                break;
            case 'vec2':
                result= `${uniform.name} :vec2<f32>,\n`;
                break;
            case 'vec3':
                result= `${uniform.name} :vec3<f32>,\n`;
                break;
            case 'vec4':
                result= `${uniform.name} :vec4<f32>,\n`;
                break;
            case 'mat2':
                result= `${uniform.name} :mat2x2<f32>,\n`;
            break;
            case 'mat3':
                result= `${uniform.name} :mat3x3<f32>,\n`;
            break;
            case 'mat4':
                result= `${uniform.name} :mat4x4<f32>,\n`;
                break;
        }
        return result;
    }
    private checkUniformOffset(byteSize:number,Align:number):number{
        //from https://gpuweb.github.io/gpuweb/wgsl/#address-space-layout-constraints
       return Math.ceil(byteSize/Align)*Align-byteSize;
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
        if(uniform.type!='texture'&&uniform.type!='sampler'){
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
        if(uniform.type!='texture'&&uniform.type!='sampler'){
            groupEntity=new BindGroupEntity({
                binding:uniform.binding,
                resource:{
                    buffer:uniform?.lightBuffer?.gpuBuffer||this.buffer.gpuBuffer,
                    offset: 0,
                    //兼容灯光
                    //size:uniform.bufferSize!=undefined?uniform.bufferSize:Material.getBindingSize(uniforms)
                    size:uniform.bufferSize!=undefined?uniform.bufferSize:this.uniformsSize*4
                }
              });
        } else if(uniform.type==='texture'){
            groupEntity = new BindGroupEntity({
                binding:uniform.binding,
                resource:uniform.value.texureView
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
/*
 * @Author: junwei.gu junwei.gu@jiduauto.com
 * @Date: 2023-01-12 10:07:57
 * @LastEditors: junwei.gu junwei.gu@jiduauto.com
 * @LastEditTime: 2023-01-19 15:47:04
 * @FilePath: \GEngine\src\render\VertextBuffer.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { InputStepMode } from "../core/WebGPUConstant";
import Attributes from "./Attributes";
import Buffer from './Buffer';
export default class VertextBuffer{
    public index:number;
    public arrayStride:number;
    public stepMode: string;
    public buffer:Buffer;
    public attributes:Attributes;
    public dirty:Boolean;
    constructor(attributes?:Attributes,index?:number,stepMode?:string){
        this.index=index||0;
        this.attributes=attributes||undefined;
        this.stepMode=InputStepMode.Vertex;
        this.dirty=true;
    }
    public getBufferDes(){
        return [{
            arrayStride:this.arrayStride,
            stepMode:this.stepMode,
            attributes:this.attributes.getGPUAttributes()
        }]
    }
    public setAttributes(attributes:Attributes){
       this.attributes=attributes;
       this.dirty=true;
    }
    public bind(device:GPUDevice,passEncoder:GPURenderPassEncoder){
        if(this.dirty){
            this.dirty=false;
            const {arrayStride,typeArray}=this.attributes.getMeregeAtrributeValues();
            this.arrayStride=arrayStride.reduce(function(sum, item, index, arr){
               return sum+=item;
            },0)*4;           
            this.buffer=Buffer.createVertexBuffer(device,typeArray);
        }
        debugger
        passEncoder.setVertexBuffer(this.index,this.buffer.gpuBuffer);
    }
    destroy(){
       this.buffer.destroy();
    }
}
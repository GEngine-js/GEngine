
import {Attribute} from "../render/Attribute";
import Buffer from '../render/Buffer';
export type vertextBuffer ={
        index:number,
        arrayStride:number,
        stepMode: string,
        buffer?:Buffer,
        attributes:Array<Attribute>  
}
export  class VertextBuffers{
    list:Array<vertextBuffer>;
    constructor(vertextBuffer:Array<vertextBuffer>){
        this.list=vertextBuffer;
    }
    get length(){
        return this.list.length;
    }
    public getBuffers(){
         return this.list.map((vertextBuffer)=>{
            return {
                arrayStride:vertextBuffer.arrayStride,
                stepMode:vertextBuffer.stepMode,
                attributes:vertextBuffer.attributes.map((attribute)=>{
                    return attribute.getGPUAttribute()
                }),
            }
         });
    }
    public getVertextBuffer(index){
        return this.list[index];
    }
    public bind(passEncoder:GPURenderPassEncoder){
        for (let i = 0; i < this.length; i++) {
            const vertBuffer=this.getVertextBuffer(i);
            if(vertBuffer){
                passEncoder.setVertexBuffer(vertBuffer.index,vertBuffer.buffer.gpuBuffer);
            }
        }
    }
}
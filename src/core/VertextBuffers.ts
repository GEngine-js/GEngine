import Attribute from "../render/Attribute";
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
                attributes:vertextBuffer.attributes,
            }
         });
    }
    public getVertextBuffer(index){
        return this.list[index];
    }
    // public getAttributes(){
    //     const result=[];
    //     this.attributes.forEach((value)=>{
    //         result.push({
    //             format:value.format,
    //             offset:value.offset,
    //             shaderLocation:value.shaderLocation,
    //         })
    //     });
    //     return result;
    // }
}
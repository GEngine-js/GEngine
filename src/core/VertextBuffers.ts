import Attribute from "../render/Attribute";
import Buffer from '../render/Buffer';
export type vertextBuffer ={
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
    public getBufAttrsCount(){
        return this.list.length;
    }
    public getBuffers(){
         return this.list;
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
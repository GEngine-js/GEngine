// const vertextBuffers=new VertextBuffers([
//     { 
//         buffers:dataArray
//         attributes:{}

import Attribute from "../render/Attribute";

//     }
// ])
export type bufAttrType ={
       arrayStride:number,
        stepMode: string,
        buffers:Float32Array|Float64Array|Int32Array|Int16Array,
        attributes:Array<Attribute>
    
}
export  class VertextBuffers{
    bufferAttributes:Array<bufAttrType>;
    constructor(bufAttrArry:Array<bufAttrType>){
        this.bufferAttributes=bufAttrArry;
    }
    public getBufAttrsCount(){
        return this.bufferAttributes.length;
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
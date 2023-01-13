import { IndexFormat, PrimitiveTopology } from "../core/WebGPUConstant";
import Buffer from './Buffer';
export default class IndexBuffer{
    buffer:Buffer;
    indices:Array<number>;
    indexFormat: GPUIndexFormat;
    topology: string;
    dirty:boolean;
   constructor(indices?:Array<number>){
    this.indices=indices;
    this.topology=PrimitiveTopology.TriangleList;
    this.indexFormat=IndexFormat.Uint16;
    this.dirty=true;
   } 
   setIndices(indices){
    this.indices=indices;
    this.dirty=true;
   }
   bind(device:GPUDevice,passEncoder:GPURenderPassEncoder){
    if (this.dirty) {
        this.dirty=false;
        this.buffer=Buffer.createIndexBuffer(device,this.indexFormat==IndexFormat.Uint16?new Uint16Array(this.indices):new Uint32Array(this.indices));
    }
    passEncoder.setIndexBuffer(
       this.buffer.gpuBuffer,
        this.indexFormat
      );
   }
   destroy(){
      this.buffer.destroy();
   }
}
/*
 * @Author: junwei.gu junwei.gu@jiduauto.com
 * @Date: 2023-01-12 10:19:18
 * @LastEditors: junwei.gu junwei.gu@jiduauto.com
 * @LastEditTime: 2023-01-30 10:22:54
 * @FilePath: \GEngine\src\render\IndexBuffer.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { IndexFormat} from "../core/WebGPUConstant";
import Buffer from './Buffer';
export default class IndexBuffer{
    buffer:Buffer;
    indices:Array<number>;
    indexFormat: GPUIndexFormat;
    dirty:boolean;
   constructor(indices?:Array<number>){
    this.indices=indices;
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
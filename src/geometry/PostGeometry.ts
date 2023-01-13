// import { IndexFormat, InputStepMode, PrimitiveTopology, VertexFormat } from "../core/WebGPUConstant";
// import Attribute from "../render/Attribute";
// import Geometry from "./Geometry";
// import Buffer from "../render/Buffer";
// import { VertextBuffers } from "../core/VertextBuffers";
// export default class PostGeometry extends Geometry{
//     uv: Float32Array;
//     position:Float32Array;
//     indiceBuffer:Buffer;
//     indices:Uint16Array|Uint32Array|Uint8Array;
//     constructor(){
//         super({});
//         this.type='reat';
//         this.position=new Float32Array([ - 1, 3, 0, - 1, - 1, 0, 3, - 1, 0 ]);
//         this.uv=new Float32Array([ 0, 2, 0, 0, 2, 0]);
//         //this.indices=new Int16Array(this.indices); 
//     }
//     update(frameState){
//         const {device}=frameState.context;
//         // if(!this.vertexBuffers)this.createVertBufferAndIndices(device);
//     }
//     private createVertBufferAndIndices(device:GPUDevice){
//         const layoutOffset=[3,2];
//         const dataBuffer=this.interleaveTypedArray(Float32Array,layoutOffset,this.position,this.uv);
//         //attribute
//         const pat=new Attribute('position',VertexFormat.Float32x3,0,this.shaderLocation);
//         this.shaderLocation+=1;
//         const uat=new Attribute('uv',VertexFormat.Float32x2,6*Float32Array.BYTES_PER_ELEMENT,this.shaderLocation);
//         this.shaderLocation+=1;
//         //buffer
//         const buffer=Buffer.createVertexBuffer(device,dataBuffer);
//         // vertBuffer
//         const vertBuffers=new VertextBuffers([
//             {   
//                 index:0,
//                 arrayStride: 32,
//                 stepMode: InputStepMode.Vertex,
//                 buffer,
//                 attributes:[pat,uat],
//             }
//         ]);
//         // this.indexBuffer=Buffer.createIndexBuffer(device,indexTypeArray);
//         // this.count=indexTypeArray.length;
//         this.vertexBuffers=vertBuffers;
//     }
// }
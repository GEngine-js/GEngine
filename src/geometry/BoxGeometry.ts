// import Geometry from "./Geometry";
// import Attribute from "../render/Attribute";
// import {VertexFormat} from "../core/WebGPUConstant"
// import {VertextBuffers} from "../core/VertextBuffers";
// import Buffer from "../render/Buffer";
// export default class BoxGeometry extends Geometry{
//     constructor(width,height,depth){
//         super();
//         this.type='box';
//         this.init();
//     }
//     private init(){
//         const position=[];
//         const uv=[];
//         const normal=[];
//         const layoutOffset=[3,2,3];
//         const indices=[];   
//         //buffer
//         const dataBuffer=this.interleaveTypedArray(Float32Array,layoutOffset,position,uv,normal);
//         //attribute
//         const pat=new Attribute('position',VertexFormat.Float32x3,0,0);
//         const uat=new Attribute('uv',VertexFormat.Float32x2,3*Float32Array.BYTES_PER_ELEMENT,1);
//         const nat=new Attribute('position',VertexFormat.Float32x3,5*Float32Array.BYTES_PER_ELEMENT,2);
//         //buffer
//         const buffer=Buffer.createVertexBuffer(device,dataBuffer);
//         // vertBuffer
//         const vertBuffers=new VertextBuffers([
//             {   
//                 arrayStride: dataBuffer.byteLength,
//                 stepMode: 'vertex',
//                 buffer:buffer,
//                 attributes:[pat,uat,nat]
//             }
//         ])
//         this.indices=indices;
//         this.vertexBuffers=vertBuffers;
//     }
// }
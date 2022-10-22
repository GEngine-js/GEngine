import Geometry from "./Geometry";
import Attribute from "../render/Attribute";
import {IndexFormat, VertexFormat,InputStepMode,PrimitiveTopology} from "../core/WebGPUConstant"
import {VertextBuffers} from "../core/VertextBuffers";
import Buffer from "../render/Buffer";
// import { cube } from "primitive-geometry";
export default class BoxGeometry extends Geometry{
    normal: Float32Array;
    uv: Float32Array;
    position: Float32Array;
    indiceBuffer:Buffer;
    indices: Float32Array;
    constructor(width,height,depth){
        super();
        this.type='box';
        this.topology=PrimitiveTopology.TriangleList;
        this.stripIndexFormat=IndexFormat.Uint16; 
        this.init();
    }
    private init(){  
        //generate pos uv normal so on
        // const geometry = cube();
        // this.position=geometry.positions;
        // this.uv=geometry.uvs;
        // this.normal=geometry.normals;
        // this.indices=geometry.normals;
    }
    public update(frameState){
      const {device}=frameState.context;
      this.createVertBufferAndIndices(device);
    }
    private createVertBufferAndIndices(device:GPUDevice){
        const layoutOffset=[3,2,3];
        const dataBuffer=this.interleaveTypedArray(Float32Array,layoutOffset,this.position,this.uv,this.normal);
        //attribute
        const pat=new Attribute('position',VertexFormat.Float32x3,0,0);
        const uat=new Attribute('uv',VertexFormat.Float32x2,3*Float32Array.BYTES_PER_ELEMENT,1);
        const nat=new Attribute('position',VertexFormat.Float32x3,5*Float32Array.BYTES_PER_ELEMENT,2);

        //buffer
        const buffer=Buffer.createVertexBuffer(device,dataBuffer);
        // vertBuffer
        const vertBuffers=new VertextBuffers([
            {   
                index:0,
                arrayStride: dataBuffer.byteLength,
                stepMode: InputStepMode.Vertex,
                buffer,
                attributes:[pat,uat,nat],
            }
        ])
        this.indexBuffer=Buffer.createIndexBuffer(device,new Int32Array(this.indices.buffer))
        this.vertexBuffers=vertBuffers;
    }
}
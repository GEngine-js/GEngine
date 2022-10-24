import Geometry from "./Geometry";
import Attribute from "../render/Attribute";
import {IndexFormat, VertexFormat,InputStepMode,PrimitiveTopology} from "../core/WebGPUConstant"
import {VertextBuffers} from "../core/VertextBuffers";
import Buffer from "../render/Buffer";
import { createPlane } from "../utils/GeometryUtils";
// import { cube } from "primitive-geometry";
export default class BoxGeometry extends Geometry{
    normal: number[];
    uv: number[];
    position: number[];
    indiceBuffer:Buffer;
    indices: number[];
    constructor(public width:number,public height:number,public depth:number){
        super();
        this.type='box';
        this.topology=PrimitiveTopology.TriangleList;
        this.stripIndexFormat=IndexFormat.Uint16; 
        this.init();
    }
    private init(){  
        //generate pos uv normal so on
        const depthSegments=1;
        const heightSegments=1;
        const widthSegments=1;
        createPlane( 'z', 'y', 'x', - 1, - 1, this.depth, this.height, this.width, depthSegments, heightSegments, this ); // px
		createPlane( 'z', 'y', 'x', 1, - 1, this.depth, this.height, - this.width, depthSegments, heightSegments, this ); // nx
		createPlane( 'x', 'z', 'y', 1, 1, this.width, this.depth, this.height, widthSegments, depthSegments, this ); // py
		createPlane( 'x', 'z', 'y', 1, - 1, this.width, this.depth, - this.height, widthSegments, depthSegments, this ); // ny
		createPlane( 'x', 'y', 'z', 1, - 1, this.width, this.height, this.depth, widthSegments, heightSegments, this ); // pz
		createPlane( 'x', 'y', 'z', - 1, - 1, this.width, this.height, - this.depth, widthSegments, heightSegments, this ); // nz
    }
    public update(frameState){
      const {device}=frameState.context;
      if(!this.vertexBuffers)this.createVertBufferAndIndices(device);
    }
    private createVertBufferAndIndices(device:GPUDevice){
        const layoutOffset=[3,2,3];
        const dataBuffer=this.interleaveTypedArray(Float32Array,layoutOffset,new Float32Array(this.position),new Float32Array(this.uv),new Float32Array(this.normal));
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
        this.indexBuffer=Buffer.createIndexBuffer(device,new Int32Array(this.indices))
        this.vertexBuffers=vertBuffers;
    }
}
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
    constructor(public width:number=10,public height:number=10,public depth:number=10){
        super({});
        this.type='box';
        this.topology=PrimitiveTopology.TriangleStrip;
        this.stripIndexFormat=IndexFormat.Uint16; 
        this.init();
    }
    private init(){  
        //generate pos uv normal so on
        const depthSegments=1;
        const heightSegments=1;
        const widthSegments=1;
        const data={
            uvs:[],
            normals:[],
            vertices:[],
            indices:[],
            numberOfVertices:0
        }
        createPlane( 'z', 'y', 'x', - 1, - 1, this.depth, this.height, this.width, depthSegments, heightSegments, data ); // px
		createPlane( 'z', 'y', 'x', 1, - 1, this.depth, this.height, - this.width, depthSegments, heightSegments, data ); // nx
		createPlane( 'x', 'z', 'y', 1, 1, this.width, this.depth, this.height, widthSegments, depthSegments, data ); // py
		createPlane( 'x', 'z', 'y', 1, - 1, this.width, this.depth, - this.height, widthSegments, depthSegments, data ); // ny
		createPlane( 'x', 'y', 'z', 1, - 1, this.width, this.height, this.depth, widthSegments, heightSegments, data ); // pz
		createPlane( 'x', 'y', 'z', - 1, - 1, this.width, this.height, - this.depth, widthSegments, heightSegments, data ); // nz
        this.position=data.vertices;
        this.normal=data.normals;
        this.uv=data.uvs;
        this.indices=data.indices;
        this.computeBoundingSphere(this.position);
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
        this.indexBuffer=Buffer.createIndexBuffer(device,new Int16Array(this.indices))
        this.vertexBuffers=vertBuffers;
    }
    destory(){}
}
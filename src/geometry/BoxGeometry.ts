import Geometry from "./Geometry";
import Attribute from "../render/Attribute";
import {IndexFormat, VertexFormat,InputStepMode,PrimitiveTopology} from "../core/WebGPUConstant"
import {VertextBuffers} from "../core/VertextBuffers";
import Buffer from "../render/Buffer";
import { createCube} from "../utils/GeometryUtils";
export default class BoxGeometry extends Geometry{
    normal: Float32Array;
    uv: Float32Array;
    position:Float32Array;
    indiceBuffer:Buffer;
    indices:Uint16Array|Uint32Array|Uint8Array;
    constructor(public width:number=10,public height:number=10,public depth:number=10){
        super({});
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
        const geometry =createCube({sx:this.width, sy :this.height, sz :this.depth,nx:1,ny:1,nz:1});
        this.position=geometry.positions;
        this.normal=geometry.normals;
        this.uv=geometry.uvs;
        this.indices=geometry.cells;
        this.computeBoundingSphere(this.position);
    }
    public update(frameState){
      const {device}=frameState.context;
      if(!this.vertexBuffers)this.createVertBufferAndIndices(device);
    }
    private createVertBufferAndIndices(device:GPUDevice){
        const layoutOffset=[3,3,2];
        const dataBuffer=this.interleaveTypedArray(Float32Array,layoutOffset,this.position,this.normal,this.uv);
        //attribute
        const pat=new Attribute('position',VertexFormat.Float32x3,0,this.shaderLocation);
        this.shaderLocation+=1;
        const nat=new Attribute('normal',VertexFormat.Float32x3,3*Float32Array.BYTES_PER_ELEMENT,this.shaderLocation);
        this.shaderLocation+=1;
        const uat=new Attribute('uv',VertexFormat.Float32x2,6*Float32Array.BYTES_PER_ELEMENT,this.shaderLocation);
        this.shaderLocation+=1;
       

        //buffer
        const buffer=Buffer.createVertexBuffer(device,dataBuffer);
        // vertBuffer
        const vertBuffers=new VertextBuffers([
            {   
                index:0,
                arrayStride: 32,
                stepMode: InputStepMode.Vertex,
                buffer,
                attributes:[pat,uat,nat],
            }
        ]);
        const indexTypeArray=new Int16Array(this.indices);
        this.indexBuffer=Buffer.createIndexBuffer(device,indexTypeArray);
        this.count=indexTypeArray.length;
        this.vertexBuffers=vertBuffers;
    }
    destroy(){}
}
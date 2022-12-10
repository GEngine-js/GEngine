import { VertextBuffers } from "../core/VertextBuffers";
import { InputStepMode, VertexFormat } from "../core/WebGPUConstant";
import Attribute from "../render/Attribute";
import Geometry from "./Geometry";
import Buffer from "../render/Buffer";
export default class SkyBoxGeometry extends Geometry{
    position:Float32Array;
    indices:Uint16Array|Uint32Array|Uint8Array;
    constructor(){
        super()
    }
    public update(frameState){
        const {device}=frameState.context;
        if(!this.vertexBuffers)this.createVertBufferAndIndices(device);
      }
    private createVertBufferAndIndices(device:GPUDevice) {
        this.position = new Float32Array([
            1.0,  1.0,  1.0, // 0
            -1.0,  1.0,  1.0, // 1
             1.0, -1.0,  1.0, // 2
            -1.0, -1.0,  1.0, // 3
             1.0,  1.0, -1.0, // 4
            -1.0,  1.0, -1.0, // 5
             1.0, -1.0, -1.0, // 6
            -1.0, -1.0, -1.0, // 7
        ])
        this.indices = new Uint16Array([
            // PosX (Right)
            0, 2, 4,
            6, 4, 2,

            // NegX (Left)
            5, 3, 1,
            3, 5, 7,

            // PosY (Top)
            4, 1, 0,
            1, 4, 5,

            // NegY (Bottom)
            2, 3, 6,
            7, 6, 3,

            // PosZ (Front)
            0, 1, 2,
            3, 2, 1,

            // NegZ (Back)
            6, 5, 4,
            5, 6, 7,
        ]);
        const buffer = Buffer.createVertexBuffer(device, this.position);
        //attribute
        const pat = new Attribute('position', VertexFormat.Float32x3, 0, 0);
        // vertBuffer
        const vertBuffers = new VertextBuffers([
            {
                index: 0,
                arrayStride: 12,
                stepMode: InputStepMode.Vertex,
                buffer,
                attributes: [pat],
            }
        ]);
        this.vertexBuffers = vertBuffers;
        this.indexBuffer = Buffer.createIndexBuffer(device, this.indices);
        this.count = this.indices.length;
    }
}
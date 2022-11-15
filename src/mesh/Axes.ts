import { FrameState } from "../core/FrameState";
import RenderObject from "../core/RenderObject";
import { VertextBuffers } from "../core/VertextBuffers";
import { IndexFormat, InputStepMode, PrimitiveTopology, VertexFormat } from "../core/WebGPUConstant";
import { Material } from "../material/Material";
import Attribute from "../render/Attribute";
import BindGroup from "../render/BindGroup";
import BindGroupLayout from "../render/BindGroupLayout";
import Buffer from "../render/Buffer";
import DrawCommand from "../render/DrawCommand";
import Pipeline from "../render/Pipeline";
import RenderState from "../render/RenderState";
import { UniformMat4 } from "../render/Uniforms";
import { ShaderSource } from "../shader/ShaderSource";
export default class Axes extends RenderObject {

    private vertBuffers: VertextBuffers;

    private indexBuffer: Buffer;

    private drawCommand: DrawCommand;

    uniforms:any[];

    uniformsDataBuffer: Float32Array;

    shaderSource: ShaderSource;

    groupLayouts: BindGroupLayout[];

    bindGroups: BindGroup[];

    count: number;

    uniformBuffer: Buffer;

    type:string;

    distanceToCamera:number;
    priority?:number;
    constructor() {
        super();
        this.type = 'primitive';
        this.shaderSource=new ShaderSource({
            type:'color',
            render:true,
            defines:{}
        });
        this.distanceToCamera=10;
        this.groupLayouts=[];
        this.bindGroups=[];
    }
    update(frameState: FrameState){
        this.updateMatrix();
        if(!this.uniformBuffer) this.init(frameState);
        this.uniforms.forEach((uniform)=>{
            uniform.set();
        });
        this.uniformBuffer.setSubData(0,this.uniformsDataBuffer);
        frameState.commandList.opaque.push(this.drawCommand);
    }
    private init(frameState: FrameState) {
        this.shaderSource.update();
        const {context,pass}=frameState;
        const {device,systemRenderResource}=context;
        const data = new Float32Array([
            /* position */ 0, 0, 0, /* color */ 1, 0, 0, 1,
            /* position */ 1, 0, 0, /* color */ 1, 0.5, 0.5, 1,
            /* position */ 0, 0, 0, /* color */ 0, 1, 0, 1,
            /* position */ 0, 1, 0, /* color */ 0.5, 1, 0.5, 1,
            /* position */ 0, 0, 0, /* color */ 0, 0, 1, 1,
            /* position */ 0, 0, 1, /* color */ 0.5, 0.5, 1, 1,
        ])
        const indices = new Uint16Array([
            0, 1,
            2, 3,
            4, 5
        ]);
        const buffer = Buffer.createVertexBuffer(device, data);
        //attribute
        const pat = new Attribute('position', VertexFormat.Float32x3, 0, 0);
        const cat = new Attribute('color', VertexFormat.Float32x4, 3 * Float32Array.BYTES_PER_ELEMENT, 1);
        // vertBuffer
        const vertBuffers = new VertextBuffers([
            {
                index: 0,
                arrayStride: 28,
                stepMode: InputStepMode.Vertex,
                buffer,
                attributes: [pat, cat],
            }
        ]);
        this.vertBuffers = vertBuffers;
        this.indexBuffer = Buffer.createIndexBuffer(device, indices);
        this.count = indices.length;
        this.createBindGroupAndLayout(device);
        this.drawCommand = new DrawCommand({
            vertexBuffers: this.vertBuffers,
            indexBuffer: this.indexBuffer,
            indexFormat: IndexFormat.Uint16,
            bindGroups: this.bindGroups,
            instances: 1,
            count: this.count,
            renderState:{
                viewport:frameState.viewport,
                depthStencil:RenderState.defaultDepthStencil,
                target:[RenderState.defaultTarget]
            },
            topology:PrimitiveTopology.LineList,
            shaderSource:this.shaderSource,
            groupLayouts:this.groupLayouts,
            uuid:'color'+this.shaderSource.uid,
            type:'render'      
        });
        this.drawCommand.pipeline=Pipeline.getRenderPipelineFromCache(device,this.drawCommand,systemRenderResource.layouts);
    };
    private createUniformBuffer(device:GPUDevice){
        this.uniformsDataBuffer=new Float32Array(16);
        this.uniforms=[
            new UniformMat4("modelMatrix",this.uniformsDataBuffer,0,()=>{
                return this.modelMatrix;
            }),
        ]
        this.uniformBuffer=Buffer.createUniformBuffer(device,64)
    }
    private createBindGroupAndLayout(device:GPUDevice){
        this.createUniformBuffer(device);
        const {groupLayout,bindGroup}= Material.createBindGroupAndLayout(device,this.uniforms,this.uniformBuffer,'axes',0);
        this.groupLayouts.push(groupLayout);
        this.bindGroups.push(bindGroup);
      }
}
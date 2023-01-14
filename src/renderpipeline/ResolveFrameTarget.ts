/*
 * @Author: junwei.gu junwei.gu@jiduauto.com
 * @Date: 2022-11-13 16:53:24
 * @LastEditors: junwei.gu junwei.gu@jiduauto.com
 * @LastEditTime: 2023-01-14 13:37:42
 * @FilePath: \GEngine\src\renderpipeline\ResolveFrameTarget.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { VertextBuffers } from "../core/VertextBuffers";
import { InputStepMode, VertexFormat } from "../core/WebGPUConstant";
import {Attribute} from "../render/Attribute";
import Context from "../render/Context";
import DrawCommand from "../render/DrawCommand";
import Pass from "../pass/Pass";
import Buffer from '../render/Buffer';

export default class ResolveFrameTarget extends Pass{
    private drawCommand:DrawCommand;
    indexBuffer: any;
    count: any;
    constructor(context:Context){
        super(context);
    }
    createVertBuffer(device:GPUDevice){
        const position =new Float32Array([
            0,0,0,0,
            1,0,1,0,
            0,1,0,1,
            1,1,1,1
        ]);
        const indices=new Uint16Array([
            0,1,2,2,3,1
        ]);
        //attribute
        const pat=new Attribute('position',VertexFormat.Float32x3,0,0);
        const uat=new Attribute('uv',VertexFormat.Float32x2,3*Float32Array.BYTES_PER_ELEMENT,2);   
        //buffer
        const buffer=Buffer.createVertexBuffer(device,position);
        // vertBuffer
        const vertBuffers=new VertextBuffers([
            {   
                index:0,
                arrayStride: 32,
                stepMode: InputStepMode.Vertex,
                buffer,
                attributes:[pat,uat],
            }
        ]);
        this.indexBuffer=Buffer.createIndexBuffer(device,indices);
        this.count=indices.length;
    }
}
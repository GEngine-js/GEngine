import { FrameState } from "./core/FrameState";
import Geometry from "./geometry/Geometry";
import { Material } from "./material/Material";
import Matrix4 from "./math/Matrix4";
import DrawCommand from "./render/DrawCommand";
import { RenderPipelineCache } from "./render/RenderPipelineCache";
export class Primitive{
    modelMatrix: Matrix4;
    geometry: Geometry;
    material: Material;
    constructor(options:{modelMatrix,geometry,material}){
       this.modelMatrix=options.modelMatrix;
       this.geometry=options.geometry;
       this.material=options.material;
    }
    update(frameState:FrameState){
        //create 
        this.geometry.update(frameState);
        this.material.update(frameState);
        this.createCommand(frameState)

    }
    private createCommand(frameState:FrameState){
        //create renderPipeline
        const pipeline=frameState.context.renderPipelineCache.getRenderPipelineFromCache(this.geometry,this.material)
        const drawCommond=new DrawCommand({
            pipeline,

            vertexBuffers:this.geometry.vertexBuffers;
            indexBuffer: this.geometry.in;
            indexFormat:this.geometry.stripIndexFormat,
            bindGroups:this.material.bindGroups,
          
            // public count?: number;
            // public instances?: number
        }) 

    }
    private createRenderPipeline(frameState:FrameState){
       
    }
}
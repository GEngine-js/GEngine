import { FrameState } from "../core/FrameState";
import RenderObject from "../core/RenderObject";
import Geometry from "../geometry/Geometry";
import { Material } from "../material/Material";
import DrawCommand from "../render/DrawCommand";
export class Primitive extends RenderObject{
    geometry: Geometry;
    material: Material;
    instances?: number;
    drawCommand:DrawCommand;
    constructor(geometry, material ) {
        super();
        this.geometry = geometry;
        this.material = material;
    }   
    update(frameState: FrameState) {
        //create 
        this.geometry.update(frameState);
        this.material.update(frameState);
        //重新创建的条件
        if(!this.drawCommand)this.createCommand(frameState);
    }
    private createCommand(frameState: FrameState) {
        //create renderPipeline
        const pipeline = frameState.context.renderPipelineCache.getRenderPipelineFromCache(this.geometry, this.material);
        const drawCommond = new DrawCommand({
            pipeline:pipeline,
            vertexBuffers: this.geometry.vertexBuffers,
            indexBuffer: this.geometry.indexBuffer,
            indexFormat: this.geometry.stripIndexFormat,
            bindGroups: this.material.bindGroups,
            instances: this.instances,
            count: this.geometry.count
        });
        if (this.material.transparent) {
            frameState.commandList.transparent.push(drawCommond);
        } else {
            frameState.commandList.opaque.push(drawCommond);
        }
        this.drawCommand=drawCommond;     
    }

    destory(){

    }
}

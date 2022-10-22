import { FrameState } from "./core/FrameState";
import Geometry from "./geometry/Geometry";
import { Material } from "./material/Material";
import Matrix4 from "./math/Matrix4";
import DrawCommand from "./render/DrawCommand";
export class Primitive {
    modelMatrix: Matrix4;
    geometry: Geometry;
    material: Material;
    instances?: number;
    drawCommand:DrawCommand
    constructor(options: { modelMatrix, geometry, material }) {
        this.modelMatrix = options.modelMatrix;
        this.geometry = options.geometry;
        this.material = options.material;
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
            pipeline,
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
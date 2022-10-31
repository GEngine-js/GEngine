import { FrameState } from "../core/FrameState";
import Intersect from "../core/Intersect";
import RenderObject from "../core/RenderObject";
import Geometry from "../geometry/Geometry";
import { Material } from "../material/Material";
import DrawCommand from "../render/DrawCommand";
export class Primitive extends RenderObject {
    [x: string]: any;
    geometry: Geometry;
    material: Material;
    instances?: number;
    drawCommand: DrawCommand;
    distanceToCamera:number;
    constructor(geometry, material) {
        super();
        this.geometry = geometry;
        this.material = material;
        this.type = 'primitive';
    }
    update(frameState: FrameState) {
        //update matrix
        this.updateMatrix();

        this.updateNormalMatrix(frameState.camera)
        //create 
        this.geometry.update(frameState);

        this.material.update(frameState,this);

        // update boundingSphere
        //this.geometry.boundingSphere.update(this.modelMatrix);

        this.distanceToCamera=this.geometry.boundingSphere.distanceToCamera(frameState);

        const visibility = frameState.cullingVolume.computeVisibility(this.geometry.boundingSphere);
        debugger
        //视锥剔除
        if (visibility === Intersect.INTERSECTING) {
            //重新创建的条件
            if (!this.drawCommand) this.createCommand(frameState);
            if (this.material.transparent) {
                frameState.commandList.transparent.push(this.drawCommand);
            } else {
                frameState.commandList.opaque.push(this.drawCommand);
            }
        }
    }
    private createCommand(frameState: FrameState) {
        const drawCommand = new DrawCommand({
            //pipeline: pipeline,
            vertexBuffers: this.geometry.vertexBuffers,
            indexBuffer: this.geometry.indexBuffer,
            indexFormat: this.geometry.stripIndexFormat,
            bindGroups: this.material.bindGroups,
            instances: this.instances,
            count: this.geometry.count,
            renderState:this.material.renderState,
            topology:this.geometry.topology as GPUPrimitiveTopology,
            shaderSource:this.material.shaderSource,
            groupLayouts:this.materialgroupLayouts,
            uuid:this.material.type,
            type:'render'      
        });
        this.drawCommand = drawCommand;
    }
    destory() {
        this.geometry.destory();
        this.material.destory();
    }
}

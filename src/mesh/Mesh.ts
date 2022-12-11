import { FrameState } from "../core/FrameState";
import Intersect from "../core/Intersect";
import RenderObject from "../core/RenderObject";
import Geometry from "../geometry/Geometry";
import { Material } from "../material/Material";
import DrawCommand from "../render/DrawCommand";
import Pipeline from "../render/Pipeline";
export class Mesh extends RenderObject {
    [x: string]: any;
    geometry?: Geometry;
    material?: Material;
    instances?: number;
    priority?:number;
    drawCommand?: DrawCommand;
    distanceToCamera?:number;
    constructor(geometry?:Geometry, material?: Material) {
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

        this.geometry.boundingSphere.update(this.modelMatrix);

        this.distanceToCamera=this.geometry.boundingSphere.distanceToCamera(frameState);

        const visibility = frameState.cullingVolume.computeVisibility(this.geometry.boundingSphere);
        //视锥剔除
        if (visibility === Intersect.INTERSECTING||visibility===Intersect.INSIDE) {
            //重新创建的条件
            if (!this.drawCommand||this.material.dirty) this.createCommand(frameState);
            if (this.material.transparent) {
                frameState.commandList.transparent.push(this.drawCommand);
            } else {
                frameState.commandList.opaque.push(this.drawCommand);
            }
            this.drawCommand.distanceToCamera=this.distanceToCamera;
        }
        
    }
    private createCommand(frameState: FrameState) {
        const {context,pass}=frameState;
        const {device,systemRenderResource}=context;
        if (this.material.dirty) this.material.dirty=false;
        const drawCommand = new DrawCommand({
            vertexBuffers: this.geometry.vertexBuffers,
            indexBuffer: this.geometry.indexBuffer,
            indexFormat: this.geometry.stripIndexFormat,
            bindGroups: this.material.bindGroups,
            instances: this.instances,
            count: this.geometry.count,
            renderState:this.material.renderState,
            topology:this.geometry.topology as GPUPrimitiveTopology,
            shaderSource:this.material.shaderSource,
            groupLayouts:this.material.groupLayouts,
            uuid:this.material.type+this.material.shaderSource.uid,
            type:'render',
            onwer:this       
        });
        drawCommand.pipeline=Pipeline.getRenderPipelineFromCache(device,drawCommand,systemRenderResource.layouts);
        this.drawCommand = drawCommand;
    }
    destroy() {
        this.geometry.destroy();
        this.material.destroy();
    }
}

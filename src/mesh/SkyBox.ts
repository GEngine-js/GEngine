import { FrameState } from "../core/FrameState";
import { PrimitiveTopology} from "../core/WebGPUConstant";
import SkyBoxGeometry from "../geometry/SkyBoxGeometry";
import SkyBoxMaterial from "../material/SkyBoxMaterial";
import DrawCommand from "../render/DrawCommand";
import Pipeline from "../render/Pipeline";
import { Mesh } from "./Mesh";
export default class SkyBox extends Mesh {
    type:string;
    material: SkyBoxMaterial;
    isSkyBox:boolean
    constructor(urls?:Array<string>) {
        super();
        this.distanceToCamera=10;
        this.material=new SkyBoxMaterial();
        if(urls) this.material.loadTexture(urls);
        this.geometry=new SkyBoxGeometry();
        this.isSkyBox=true;
    }

    update(frameState: FrameState){
        this.updateMatrix();
        this.geometry.update(frameState);
        this.material.update(frameState,this);
        if(!this.drawCommand) this.createDrawComand(frameState);
        frameState.commandList.opaque.push(this.drawCommand);
    }
    private createDrawComand(frameState: FrameState) {
        const {device,systemRenderResource}=frameState.context
        this.drawCommand = new DrawCommand({
            vertexBuffers: this.geometry.vertexBuffers,
            indexBuffer: this.geometry.indexBuffer,
            indexFormat: this.geometry.stripIndexFormat,
            bindGroups: this.material.bindGroups,
            instances: 1,
            count: this.geometry.count,
            renderState:this.material.renderState,
            topology:PrimitiveTopology.TriangleList,
            shaderSource:this.material.shaderSource,
            groupLayouts:this.material.groupLayouts,
            uuid:this.material.type+this.material.shaderSource.uid,
            type:'render',
            onwer:this      
        });
        this.drawCommand.pipeline=Pipeline.getRenderPipelineFromCache(device,this.drawCommand,systemRenderResource.layouts);
    };
}
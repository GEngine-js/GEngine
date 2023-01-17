import Camera from "../camera/Camera";
import OrthographicCamera from "../camera/OrthographicCamera";
import { Target } from "../core/WebGPUTypes";
import Geometry from "../geometry/Geometry";
import { Mesh } from "../mesh/Mesh";
import { Float32Attribute } from "../render/Attribute";
import Context from "../render/Context";
import RenderTarget from "../render/RenderTarget";

export default class PostProcessStage{
    public enabled:boolean;
    public fullScreenQuad:Mesh;
    public camera:Camera; 
    public geometry:Geometry;
    public quadMesh:Mesh;
    public id:string|number;
    constructor(id?:number|string){
        this.enabled=true;
        this.id=id;
        this.geometry=new Geometry();
        this.geometry.setAttribute( new Float32Attribute( 'position', [-1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0],2 ) );
        this.geometry.count=6;
        this.quadMesh=new Mesh(this.geometry);
    }
    setSize(){

    }
    destroy(){

    }
    render(context:Context){

    }
    protected renderMesh(context:Context,renderTarget:RenderTarget,targets?:Array<Target>){
        this.quadMesh.beforeRender();
        const drawComand=this.quadMesh.getDrawCommand();
        const preTargets=drawComand.renderState.targets;
        if(targets) drawComand.renderState.targets=targets;
        const currentRenderPassEncoder=renderTarget.getRenderPassEncoder(context);
        context.render(drawComand,currentRenderPassEncoder);
        renderTarget.endRenderPassEncoder();
        this.quadMesh.afterRender();
        if(targets) drawComand.renderState.targets=preTargets;
    }
}
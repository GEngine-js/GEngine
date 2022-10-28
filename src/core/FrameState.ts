import PerspectiveCamera from "../camera/PerspectiveCamera";
import Vector4 from "../math/Vector4";
import BindGroupLayout from "../render/BindGroupLayout";
import Context from "../render/Context";
import Pass from "../render/Pass";
import CommandList from "./CommandList";
import CullingVolume from "./CullingVolume";
export class FrameState{
    public pass:Pass;
    public camera:PerspectiveCamera;
    public commandList:CommandList;
    public drawCallnums:number;
    public geometryMemory:number;
    public textureMemory:number;
    public frameNumber:number;
    cullingVolume:CullingVolume;
    viewport:Vector4;
    constructor(public context:Context){
       this.commandList=new CommandList();
       this.geometryMemory=0;
       this.textureMemory=0;
       this.frameNumber=0;
    }
    update(camera:PerspectiveCamera){
        this.camera=camera;
        this.commandList.reset();
        this.cullingVolume=this.camera.computeCullingVolume(this.camera.position,this.camera.cameraDirection,this.camera.cameraUp);
        this.frameNumber+=1
    }
}
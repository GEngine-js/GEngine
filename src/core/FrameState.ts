import PerspectiveCamera from "../camera/PerspectiveCamera";
import Context from "../render/Context";
import Pass from "../pass/Pass";
import combine from "../utils/combine";
import CommandList from "./CommandList";
import CullingVolume from "./CullingVolume";
import Texture from "../render/Texture";
export class FrameState{
    public pass:Pass;
    public camera:PerspectiveCamera;
    public commandList:CommandList;
    public drawCallnums:number;
    public geometryMemory:number;
    public textureMemory:number;
    public frameNumber:number;
    public cullingVolume:CullingVolume;
    public definesDirty:boolean;
    public viewport:{ x: number; y: number; width: number; height: number; };
    public environment:Texture;
    private _defines:{};
    constructor(public context:Context){
       this.commandList=new CommandList();
       this.geometryMemory=0;
       this.textureMemory=0;
       this.frameNumber=0;
       this._defines={};
       this.definesDirty=true;
       this.environment=undefined;
    }
    get defines(){
        return this._defines;
    }
    set defines(value){
        this.definesDirty=true;
        this._defines=combine(value,this._defines,false)
    }
    update(camera:PerspectiveCamera){
        this.camera=camera;
        this.commandList.reset();
        this.cullingVolume=this.camera.getCullingVolume();
        this.frameNumber+=1
    }
}
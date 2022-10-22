import Context from "../render/Context";
import Pass from "../render/Pass";
import CommandList from "./CommandList";

export class FrameState{
    public pass:Pass;
    public camera:any;
    public commandList:CommandList;
    public drawCallnums:number;
    public geometryMemory:number;
    public textureMemory:number;
    public frameNumber:number;
    constructor(public context:Context){
       this.commandList=new CommandList();
       this.geometryMemory=0;
       this.textureMemory=0;
       this.frameNumber=0;
    }
}
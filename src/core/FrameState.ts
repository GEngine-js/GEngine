import Context from "../render/Context";
import Pass from "../render/Pass";

export class FrameState{
    public pass:Pass;
    public camera:any
    constructor(public context:Context){

    }
}
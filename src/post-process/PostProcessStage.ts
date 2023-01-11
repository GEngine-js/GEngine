import { Mesh } from "../mesh/Mesh";

export default class PostProcessStage{
    public enabled:boolean;
    public fullScreenQuad:Mesh; 
    constructor(){
        this.enabled=true;
    }
    setSize(){}
    destroy(){}
    render(){}
}
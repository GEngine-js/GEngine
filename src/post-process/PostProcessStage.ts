import Camera from "../camera/Camera";
import OrthographicCamera from "../camera/OrthographicCamera";
import { Mesh } from "../mesh/Mesh";

export default class PostProcessStage{
    public enabled:boolean;
    public fullScreenQuad:Mesh;
    public camera:Camera; 
    constructor(){
        this.enabled=true;
        this.camera=new OrthographicCamera(- 1, 1, 1, - 1, 0, 1);
        
    }
    setSize(){}
    destroy(){}
    render(){}
}
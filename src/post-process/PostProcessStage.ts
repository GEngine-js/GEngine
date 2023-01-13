import Camera from "../camera/Camera";
import OrthographicCamera from "../camera/OrthographicCamera";
import Geometry from "../geometry/Geometry";
import { Mesh } from "../mesh/Mesh";
import { Float32Attribute } from "../render/Attribute";

export default class PostProcessStage{
    public enabled:boolean;
    public fullScreenQuad:Mesh;
    public camera:Camera; 
    public geometry:Geometry;
    constructor(){
        this.enabled=true;
        this.camera=new OrthographicCamera(- 1, 1, 1, - 1, 0, 1);
        this.geometry=new Geometry();
        this.geometry.setAttribute( new Float32Attribute( 'position', [ - 1, 3, 0, - 1, - 1, 0, 3, - 1, 0 ], 3 ) );
        this.geometry.setAttribute( new Float32Attribute( 'uv', [ 0, 2, 0, 0, 2, 0 ], 2 ) );
        this.geometry.count=3;

    }
    setSize(){}
    destroy(){}
    render(){}
}
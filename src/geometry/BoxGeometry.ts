
import Geometry from "./Geometry";
import {Float32Attribute} from "../render/Attribute";
import {createBox} from "../utils/GeometryUtils";
export default class BoxGeometry extends Geometry{
    normal: number[];
    uv:  number[];
    position: number[];
    indices: number[];
    constructor(public width:number=10,public height:number=10,public depth:number=10){
        super({});
        this.type='box'; 
        this.init();
    }
    private init(){  
        //generate pos uv normal so on
        const {positions,normals,uvs}=createBox({dimensions:[this.depth,this.width,this.height]});
        this.position=positions;
        this.normal=normals;
        this.uv=uvs;
        this.computeBoundingSphere(this.position);
        this.setAttribute(new Float32Attribute('position',this.position,3));
        this.setAttribute(new Float32Attribute('normal',this.normal,3));
        this.setAttribute(new Float32Attribute('uv',this.uv,2));
        this.count=36
    }
    public update(frameState){
    }
    destroy(){
        
    }
}
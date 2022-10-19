import Matrix4 from "./math/Matrix4";
import DrawCommand from "./render/DrawCommand";
export class Primitive{
    modelMatrix: any;
    geometry: any;
    material: any;
    constructor(options:{modelMatrix,geometry,material}){
       this.modelMatrix=options.modelMatrix;
       this.geometry=options.geometry;
       this.material=options.material;
    }
    update(frameState){
        //create 
    }
    private createIndexBuffer(){

    }
    private createBindGroup(){

    }
    private createBindGroupLayout(){

    }
    private createVertBuffers(){

    }
    private createRenderPipeline(){

    }
    private createBindGroupEntity(){
        const mat=this.material;
        

    }
    private createBindGroupLayoutEntry(){

    }
}
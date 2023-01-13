/*
 * @Author: junwei.gu junwei.gu@jiduauto.com
 * @Date: 2022-10-19 13:17:05
 * @LastEditors: junwei.gu junwei.gu@jiduauto.com
 * @LastEditTime: 2023-01-13 10:29:02
 * @FilePath: \GEngine\src\geometry\BoxGeometry.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import Geometry from "./Geometry";
import {Float32Attribute} from "../render/Attribute";
import { createCube} from "../utils/GeometryUtils";
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
        const depthSegments=1;
        const heightSegments=1;
        const widthSegments=1;
        const geometry =createCube({sx:this.width, sy :this.height, sz :this.depth,nx:1,ny:1,nz:1});
        this.position=Array.from(geometry.positions);
        this.normal=Array.from(geometry.normals);
        this.uv=Array.from(geometry.uvs);
        this.indices=geometry.cells;
        this.computeBoundingSphere(this.position);
        this.setAttribute(new Float32Attribute('position',this.position,3));
        this.setAttribute(new Float32Attribute('normal',this.normal,3));
        this.setAttribute(new Float32Attribute('uv',this.uv,2));
        this.setIndice(this.indices);
        this.count=this.indices.length
    }
    public update(frameState){
    }
    destroy(){}
}
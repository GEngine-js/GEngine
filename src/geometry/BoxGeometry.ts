/*
 * @Author: junwei.gu junwei.gu@jiduauto.com
 * @Date: 2022-10-19 13:17:05
 * @LastEditors: junwei.gu junwei.gu@jiduauto.com
 * @LastEditTime: 2023-01-19 11:47:05
 * @FilePath: \GEngine\src\geometry\BoxGeometry.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import Geometry from "./Geometry";
import {Float32Attribute} from "../render/Attribute";
import { createCube,createBox} from "../utils/GeometryUtils";
import { PrimitiveTopology } from "../core/WebGPUConstant";
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
        const {positions,normals,uvs}=createBox({dimensions:[10,10,10]});
        this.position=positions;
        this.normal=normals;
        this.uv=uvs;
        this.computeBoundingSphere(this.position);
        this.setAttribute(new Float32Attribute('position',this.position,3));
        this.setAttribute(new Float32Attribute('normal',this.normal,3));
        this.setAttribute(new Float32Attribute('uv',this.uv,2));
        
        // this.setIndice(this.indices);
        // this.indexBuffer.topology=PrimitiveTopology.LineList;
        this.count=36
    }
    public update(frameState){
    }
    destroy(){}
}
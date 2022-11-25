import BoundingSphere from "../core/BoundingSphere";
import { FrameState } from "../core/FrameState";
import {VertextBuffers} from "../core/VertextBuffers";
import { IndexFormat,PrimitiveTopology } from "../core/WebGPUConstant";
import Vector3 from "../math/Vector3";
import Attribute from "../render/Attribute";
import Buffer from "../render/Buffer";
import combine from "../utils/combine";
export default class Geometry {
    
    public attributes: Attribute[];
    type: string;
    public vertexBuffers: VertextBuffers;
    dirty: boolean;
    stripIndexFormat: GPUIndexFormat;
    topology: string;
    indexBuffer?:Buffer;
    count:number;
    boundingSphere:BoundingSphere;
    shaderLocation:number;
    private  _defines:{[prop: string]: boolean|number};
    definesDirty: boolean;
    get defines(){
        return this._defines;
    }
    set defines(value){
        this.definesDirty=true;
        this._defines=combine(value,this._defines,false);
    }
    constructor(options?:any) {
        this.type = options.type||undefined;
        this.vertexBuffers = options.vertexBuffers||undefined;
        this.boundingSphere = undefined;
        this.topology=PrimitiveTopology.TriangleList;
        this.stripIndexFormat=IndexFormat.Uint32;
        this.dirty = false;
        this.definesDirty=true;
        this.shaderLocation=0;
        this._defines={};
    }
    update(frameState:FrameState){}
    /**
     * Interleave n typed arrays
     * @alias module:interleaveTypedArray
     * @param {TypedArray} ResultConstructor Returned typed array constructor
     * @param {Array} elements Number of elements to group for each typed array
     * @param {...TypedArray} arrays Arrays to interleave
     * @returns {TypedArray}
     */
    interleaveTypedArray(ResultConstructor, elements, ...arrays) {
        const totalLength = arrays.reduce((total, arr) => total + arr.length, 0);
        const result = new ResultConstructor(totalLength);
        const stride = elements.reduce((a, b) => a + b);

        for (let i = 0; i < totalLength; i++) {
            let offset = 0;
            for (let j = 0; j < elements.length; j++) {
                for (let k = 0; k < elements[j]; k++) {
                    result[i * stride + offset] = arrays[j][elements[j] * i + k];
                    offset++;
                }
            }
        }
        return result;
    }
    computeBoundingSphere(positions){
        this.boundingSphere=BoundingSphere.fromVertices(positions,new Vector3(0,0,0),3)
    }
    destroy(){}
}
import DataBuffer from "../core/DataBuffer";
import {VertextBuffers} from "../core/VertextBuffers";
import { IndexFormat } from "../core/WebGPUConstant";
import Attribute from "../render/Attribute";
import Buffer from "../render/Buffer";
export default class Geometry {
    public attributes: Attribute[];
    type: string;
    public vertexBuffers: VertextBuffers;
    dirty: boolean;
    boundingSphere: any;
    stripIndexFormat: string;
    topology: string;
    constructor(options?:any) {
        this.type = options.type||undefined;
        this.vertexBuffers = options.vertexBuffers||undefined;
        this.boundingSphere = undefined;
        this.topology="triangle-list";
        this.stripIndexFormat=IndexFormat.Uint16;
        this.dirty = false;
    }
    update(frameState){}
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
}
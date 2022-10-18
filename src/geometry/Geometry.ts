import DataBuffer from "../core/DataBuffer";
import Attribute from "../render/Attribute";
import Buffer from "../render/Buffer";
import GeometryHelper from "../utils/GeometryHelper";
export default class Geometry{
    public attributes:Attribute[];
    type: string;
    private _vertDataBuffer: DataBuffer;
    private _indiceDataBuffer: DataBuffer;
    private _vertBuffer: Buffer;
    private _indexBuffer: Buffer;
    dirty: boolean;
    constructor(){
        this.type='';
        this.attributes=undefined;
        this._vertBuffer=undefined;
        this._indexBuffer=undefined;
        this._vertDataBuffer=new DataBuffer();
        this._indiceDataBuffer=new DataBuffer();
        this.dirty=true;
    }
    update(){
        if (this.dirty) {
            this.dirty=false;
            //更新databuffer
            //更新Buffer
        }
    }
    private createBuffer(){
        //创建顶点buffer
        //创建索引buffer
    }
    private createAttributes(){
        this.attributes=GeometryHelper.getGeoMetryAttributes(this.type)
    }
}
import DataBuffer from '../core/DataBuffer';
class Uniform<T> {
    private _value: T;
    name: string;
    value: T;
    offset: number;
    dataBuffer: DataBuffer;
    size: number;

    constructor(uniformName:string, dataBuffer:DataBuffer, offset:number,cb:Function) {
        this.name = uniformName;
        this.value = undefined;
        this._value = new T();
        this.offset=offset;
        this.dataBuffer=dataBuffer;
        this.size=0;
    }

    set(){

    }
}
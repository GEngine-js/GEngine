export class SpotData{
    decay: Uint32Array;
    penumbraCos: Uint32Array;
    coneCos: Uint32Array;
    distance: Uint32Array;
    direction: Float32Array;
    position: Float32Array;
    color: Float32Array;
    static byteSize=52;
    constructor(buffer:Float32Array,byteOffset:number,spotLight){     
        this.color=new Float32Array(buffer.buffer, byteOffset, 3);//3
        this.position=new Float32Array(buffer.buffer, byteOffset+12, 3);//3
        this.direction=new Float32Array(buffer.buffer, byteOffset+24, 3);//3
        this.distance=new Uint32Array(buffer.buffer, byteOffset+36, 1);//1
        this.coneCos=new Uint32Array(buffer.buffer, byteOffset+40, 1);//1
        this.penumbraCos=new Uint32Array(buffer.buffer, byteOffset+44,1);//1
        this.decay=new Uint32Array(buffer.buffer, byteOffset+48, 1);//1
    }
    update(){

    }
}
export class PointData{
    color: Float32Array;
    position: Float32Array;
    decay: Uint32Array;
    distance: Uint32Array;
    static byteSize=32;
    constructor(buffer:Float32Array,byteOffset:number,pointLight){
        this.color=new Float32Array(buffer.buffer, byteOffset, 3);//3
        this.position=new Float32Array(buffer.buffer, byteOffset+12, 3);//3
        this.decay=new Uint32Array(buffer.buffer, byteOffset+24, 1);//1
        this.distance=new Uint32Array(buffer.buffer, byteOffset+28, 1);//1
    }
}
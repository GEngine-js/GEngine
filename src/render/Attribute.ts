import { VertexFormat } from "../core/WebGPUConstant";
import Vector2 from "../math/Vector2";
import Vector3 from "../math/Vector3";

export class Attribute {
  public offset: number;
  public shaderLocation: number;
  public type: string;
  public format: string;
  public attributeByteSize: number;
  public static v3 = new Vector3();
  public static v2 = new Vector2();
  constructor(
    public name: string,
    public value: Array<number>,
    public itemSize: number
  ) {
    this.name = name;
    this.offset = 0;
    this.shaderLocation = 0;
  }
  getGPUAttribute() {
    return {
      shaderLocation: this.shaderLocation,
      format: this.format,
      offset: this.offset,
    };
  }
  destroy(){
    this.value=[];
  }
  applyMatrix3(matrix3) {
    if (this.itemSize === 2) {
      for (let i = 0, l = this.value.length / this.itemSize; i < l; i++) {
        Attribute.v2.fromBufferAttribute(this, i);
        Attribute.v2.applyMatrix3(matrix3);
        this.setXY(i, Attribute.v2.x, Attribute.v2.y);
      }
    } else if (this.itemSize === 3) {
      for (let i = 0, l = this.value.length / this.itemSize; i < l; i++) {
        Attribute.v3.fromBufferAttribute(this, i);
        Attribute.v3.applyMatrix3(matrix3);
        this.setXYZ(i, Attribute.v3.x, Attribute.v3.y, Attribute.v3.z);
      }
    }
    return this;
  }
  applyMatrix4(matrix4) {
    for (let i = 0, l = this.value.length / this.itemSize; i < l; i++) {
      Attribute.v3.fromBufferAttribute(this, i);
      Attribute.v3.applyMatrix4(matrix4);
      this.setXYZ(i, Attribute.v3.x, Attribute.v3.y, Attribute.v3.z);
    }
    return this;
  }
  setX(index, x) {
    this.value[index * this.itemSize] = x;
    return this;
  }
  getX(index) {
    let x = this.value[index * this.itemSize];
    return x;
  }
  setY(index, y) {
    this.value[index * this.itemSize + 1] = y;
    return this;
  }
  getY(index) {
    let y = this.value[index * this.itemSize + 1];
    return y;
  }
  setZ(index, z) {
    this.value[index * this.itemSize + 2] = z;
    return this;
  }
  getZ(index) {
    let z = this.value[index * this.itemSize + 2];
    return z;
  }
  getW(index) {
    let w = this.value[index * this.itemSize + 3];
    return w;
  }
  setXY(index, x, y) {
    index *= this.itemSize;
    this.value[index + 0] = x;
    this.value[index + 1] = y;
    return this;
  }
  setXYZ(index, x, y, z) {
    index *= this.itemSize;
    this.value[index + 0] = x;
    this.value[index + 1] = y;
    this.value[index + 2] = z;
    return this;
  }
  setXYZW(index, x, y, z, w) {
    index *= this.itemSize;
    this.value[index + 0] = x;
    this.value[index + 1] = y;
    this.value[index + 2] = z;
    this.value[index + 3] = w;
    return this;
  }
}
export class Float32Attribute extends Attribute {
  constructor(name: string, value: Array<number>, itemSize: number) {
    super(name, value, itemSize);
    this.format = getAttributeFormat('float32', itemSize);
    this.attributeByteSize = Float32Array.BYTES_PER_ELEMENT * itemSize;
  }
}
function getAttributeFormat(type: string, itemSize: number) {
  const key = `${type}x${itemSize}`;
  let format;
  switch (key) {
    case "float32":
      format = VertexFormat.Float32;
      break;
    case "float32x2":
      format = VertexFormat.Float32x2;
      break;
    case "float32x3":
      format = VertexFormat.Float32x3;
      break;
    case "float32x4":
      format = VertexFormat.Float32x4;
      break;
    default:
      break;
  }
  return format;
}

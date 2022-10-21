// @ts-nocheck
import Cartesian2 from "../math/Cartesian2";
import Cartesian3 from "../math/Cartesian3";
import Cartesian4 from "../math/Cartesian4";
import Color from "../math/Color";
import defined from "../utils/defined";
import Matrix2 from "../math/Matrix2";
import Matrix3 from "../math/Matrix3";
import Matrix4 from "../math/Matrix4";
import DataBuffer from '../core/DataBuffer';

/**
 * @private
 * @constructor
 */
 export function UniformFloat(uniformName, dataBuffer, offset,cb) {
  this.name = uniformName;
  this.offset=offset;
  this.dataBuffer=dataBuffer;
  this.value = undefined;
  this._value = 0.0;
  this.size=4;
  this.cb
}

UniformFloat.prototype.set = function () {
  if (this.value !== this._value) {
    this._value = this.value;
    this.dataBuffer.setData(this);
  }
};

///////////////////////////////////////////////////////////////////////////

/**
 * @private
 * @constructor
 */
 export function UniformFloatVec2(uniformName, dataBuffer, offset,cb) {
  /**
   * @type {String}
   * @readonly
   */
  this.name = uniformName;

  this.value = undefined;
  this._value = new Cartesian2();
  this.offset=offset;
  this.dataBuffer=dataBuffer;
  this.size=4*2;
}

UniformFloatVec2.prototype.set = function () {
  const v = this.value;
  if (!Cartesian2.equals(v, this._value)) {
    Cartesian2.clone(v, this._value);
    this.dataBuffer.setData(this);
  }
};

///////////////////////////////////////////////////////////////////////////

/**
 * @private
 * @constructor
 */
 export function UniformFloatVec3(uniformName, dataBuffer, offset,cb) {
  /**
   * @type {String}
   * @readonly
   */
  this.name = uniformName;

  this.value = undefined;
  this._value = undefined;

  this.offset=offset;
  this.dataBuffer=dataBuffer;
  this.size=4*3;
}

UniformFloatVec3.prototype.set = function () {
  const v = this.value;

  if (defined(v.red)) {
    if (!Color.equals(v, this._value)) {
      this._value = Color.clone(v, this._value);
      this.dataBuffer.setData(this);
    }
  } else if (defined(v.x)) {
    if (!Cartesian3.equals(v, this._value)) {
      this._value = Cartesian3.clone(v, this._value);
      this.dataBuffer.setData(this);
    }
  } else {
    //>>includeStart('debug', pragmas.debug);
    throw new Error(`Invalid vec3 value for uniform "${this.name}".`);
    //>>includeEnd('debug');
  }
};

///////////////////////////////////////////////////////////////////////////

/**
 * @private
 * @constructor
 */
 export function UniformFloatVec4(uniformName, dataBuffer, offset,cb) {
  /**
   * @type {String}
   * @readonly
   */
  this.name = uniformName;

  this.value = undefined;
  this._value = undefined;

  this.offset=offset;
  this.dataBuffer=dataBuffer;
  this.size=4*4;
}

UniformFloatVec4.prototype.set = function () {
  const v = this.value;

  if (defined(v.red)) {
    if (!Color.equals(v, this._value)) {
      this._value = Color.clone(v, this._value);
      this.dataBuffer.setData(this);
    }
  } else if (defined(v.x)) {
    if (!Cartesian4.equals(v, this._value)) {
      this._value = Cartesian4.clone(v, this._value);
      this.dataBuffer.setData(this);
    }
  } else {
    //>>includeStart('debug', pragmas.debug);
    throw new Error(`Invalid vec4 value for uniform "${this.name}".`);
    //>>includeEnd('debug');
  }
};
const scratchUniformArray = new Float32Array(4);
/**
 * @private
 * @constructor
 */
 export function UniformMat2(uniformName, dataBuffer, offset,cb) {
  /**
   * @type {String}
   * @readonly
   */
  this.name = uniformName;

  this.value = undefined;
  this._value = new Matrix2();

  this.offset=offset;
  this.dataBuffer=dataBuffer;
  this.size=4*4;
}

UniformMat2.prototype.set = function () {
  if (!Matrix2.equalsArray(this.value, this._value, 0)) {
    Matrix2.clone(this.value, this._value);

    const array = Matrix2.toArray(this.value, scratchUniformArray);
    this.dataBuffer.setData(this);
  }
};

///////////////////////////////////////////////////////////////////////////

const scratchMat3Array = new Float32Array(9);
/**
 * @private
 * @constructor
 */
 export function UniformMat3(uniformName, dataBuffer, offset,cb) {
  /**
   * @type {String}
   * @readonly
   */
  this.name = uniformName;

  this.value = undefined;
  this._value = new Matrix3();

  this.offset=offset;
  this.dataBuffer=dataBuffer;
  this.size=4*9;
}

UniformMat3.prototype.set = function () {
  if (!Matrix3.equalsArray(this.value, this._value, 0)) {
    Matrix3.clone(this.value, this._value);

    const array = Matrix3.toArray(this.value, scratchMat3Array);
    this.dataBuffer.setData(this);
  }
};

///////////////////////////////////////////////////////////////////////////

const scratchMat4Array = new Float32Array(16);
/**
 * @private
 * @constructor
 */
export function UniformMat4(uniformName, dataBuffer, offset,cb) {
  /**
   * @type {String}
   * @readonly
   */
  this.name = uniformName;

  this.value = undefined;
  this._value = new Matrix4();
  this.offset=offset;
  this.dataBuffer=dataBuffer;
  this.size=4*16;
}

UniformMat4.prototype.set = function () {
  if (!Matrix4.equalsArray(this.value, this._value, 0)) {
    Matrix4.clone(this.value, this._value);

    const array = Matrix4.toArray(this.value, scratchMat4Array);
    this.dataBuffer.setData(this);
  }
};
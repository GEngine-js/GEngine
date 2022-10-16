import Cartesian2 from "../math/Cartesian2.js";
import Cartesian3 from "../math/Cartesian3.js";
import Cartesian4 from "../math/Cartesian4.js";
import Color from "../math/Color.js";
import defined from "../Core/defined.js";
import DeveloperError from "../Core/DeveloperError.js";
import Matrix2 from "../math/Matrix2.js";
import Matrix3 from "../math/Matrix3.js";
import Matrix4 from "../math/Matrix4.js";
import RuntimeError from "../Core/RuntimeError.js";
import DataBuffer from '../core/DataBuffer';

/**
 * @private
 * @constructor
 */
function createUniform(uniformName, dataBuffer, offset, type) {
  switch (type) {
    case 'float':
      return new UniformFloat(uniformName, dataBuffer, offset, type);
    case 'vec2':
      return new UniformFloatVec2(uniformName, dataBuffer, offset, type);
    case 'vec3':
      return new UniformFloatVec3(uniformName, dataBuffer, offset, type);
    case 'vec4':
      return new UniformFloatVec4(uniformName, dataBuffer, offset, type);
    case 'mat2':
      return new UniformMat2(uniformName, dataBuffer, offset, type);
    case 'mat3':
      return new UniformMat3(uniformName, dataBuffer, offset, type);
    case 'mat4':
      return new UniformMat4(uniformName, dataBuffer, offset, type);
    default:
      throw new RuntimeError(
        `Unrecognized uniform type: ${type} for uniform "${uniformName}".`
      );
  }
}

/**
 * @private
 * @constructor
 */
function UniformFloat(uniformName, dataBuffer, offset, type) {
  /**
   * @type {String}
   * @readonly
   */
  this.name = uniformName;
  this.offset=offset;
  this.dataBuffer=dataBuffer;

  this.value = undefined;
  this._value = 0.0;
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
function UniformFloatVec2(uniformName, dataBuffer, offset, type) {
  /**
   * @type {String}
   * @readonly
   */
  this.name = uniformName;

  this.value = undefined;
  this._value = new Cartesian2();
  this.offset=offset;
  this.dataBuffer=dataBuffer;
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
function UniformFloatVec3(uniformName, dataBuffer, offset, type) {
  /**
   * @type {String}
   * @readonly
   */
  this.name = uniformName;

  this.value = undefined;
  this._value = undefined;

  this.offset=offset;
  this.dataBuffer=dataBuffer;
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
    throw new DeveloperError(`Invalid vec3 value for uniform "${this.name}".`);
    //>>includeEnd('debug');
  }
};

///////////////////////////////////////////////////////////////////////////

/**
 * @private
 * @constructor
 */
function UniformFloatVec4(uniformName, dataBuffer, offset, type) {
  /**
   * @type {String}
   * @readonly
   */
  this.name = uniformName;

  this.value = undefined;
  this._value = undefined;

  this.offset=offset;
  this.dataBuffer=dataBuffer;
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
    throw new DeveloperError(`Invalid vec4 value for uniform "${this.name}".`);
    //>>includeEnd('debug');
  }
};
const scratchUniformArray = new Float32Array(4);
/**
 * @private
 * @constructor
 */
function UniformMat2(uniformName, dataBuffer, offset, type) {
  /**
   * @type {String}
   * @readonly
   */
  this.name = uniformName;

  this.value = undefined;
  this._value = new Matrix2();

  this.offset=offset;
  this.dataBuffer=dataBuffer;
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
function UniformMat3(uniformName, dataBuffer, offset, type) {
  /**
   * @type {String}
   * @readonly
   */
  this.name = uniformName;

  this.value = undefined;
  this._value = new Matrix3();

  this.offset=offset;
  this.dataBuffer=dataBuffer;
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
function UniformMat4(uniformName, dataBuffer, offset, type) {
  /**
   * @type {String}
   * @readonly
   */
  this.name = uniformName;

  this.value = undefined;
  this._value = new Matrix4();
  this.offset=offset;
  this.dataBuffer=dataBuffer;
}

UniformMat4.prototype.set = function () {
  if (!Matrix4.equalsArray(this.value, this._value, 0)) {
    Matrix4.clone(this.value, this._value);

    const array = Matrix4.toArray(this.value, scratchMat4Array);
    this.dataBuffer.setData(this);
  }
};
export default createUniform;
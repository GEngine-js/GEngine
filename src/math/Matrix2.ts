import Vector2 from "./Vector2";
import defaultValue from "../utils/defaultValue";
import defined from "../utils/defined";

/**
 * A 2x2 matrix, indexable as a column-major order array.
 * Constructor parameters are in row-major order for code readability.
 * @alias Matrix2
 * @constructor
 * @implements {ArrayLike<number>}
 *
 * @param {Number} [column0Row0=0.0] The value for column 0, row 0.
 * @param {Number} [column1Row0=0.0] The value for column 1, row 0.
 * @param {Number} [column0Row1=0.0] The value for column 0, row 1.
 * @param {Number} [column1Row1=0.0] The value for column 1, row 1.
 *
 * @see Matrix2.fromArray
 * @see Matrix2.fromColumnMajorArray
 * @see Matrix2.fromRowMajorArray
 * @see Matrix2.fromScale
 * @see Matrix2.fromUniformScale
 * @see Matrix2.fromRotation
 * @see Matrix3
 * @see Matrix4
 */
class Matrix2 {
  /**
 * The number of elements used to pack the object into an array.
 * @type {Number}
 */
  public static packedLength = 4;
  constructor(column0Row0=0, column1Row0=0, column0Row1=0, column1Row1=0) {
    this[0] = column0Row0;
    this[1] = column0Row1;
    this[2] = column1Row0;
    this[3] = column1Row1;
  }
  /**
   * Duplicates a Matrix2 instance.
   *
   * @param {Matrix2} matrix The matrix to duplicate.
   * @param {Matrix2} [result] The object onto which to store the result.
   * @returns {Matrix2} The modified result parameter or a new Matrix2 instance if one was not provided. (Returns undefined if matrix is undefined)
   */
  static clone(matrix, result) {
    if (!defined(matrix)) {
      return undefined;
    }
    if (!defined(result)) {
      return new Matrix2(matrix[0], matrix[2], matrix[1], matrix[3]);
    }
    result[0] = matrix[0];
    result[1] = matrix[1];
    result[2] = matrix[2];
    result[3] = matrix[3];
    return result;
  };


  /**
   * Creates a Matrix2 instance from a column-major order array.
   *
   * @param {Number[]} values The column-major order array.
   * @param {Matrix2} [result] The object in which the result will be stored, if undefined a new instance will be created.
   * @returns {Matrix2} The modified result parameter, or a new Matrix2 instance if one was not provided.
   */
  static fromColumnMajorArray(values, result) {

    return Matrix2.clone(values, result);
  };

  /**
   * Creates a Matrix2 instance from a row-major order array.
   * The resulting matrix will be in column-major order.
   *
   * @param {Number[]} values The row-major order array.
   * @param {Matrix2} [result] The object in which the result will be stored, if undefined a new instance will be created.
   * @returns {Matrix2} The modified result parameter, or a new Matrix2 instance if one was not provided.
   */
  static fromRowMajorArray(values, result) {

    if (!defined(result)) {
      return new Matrix2(values[0], values[1], values[2], values[3]);
    }
    result[0] = values[0];
    result[1] = values[2];
    result[2] = values[1];
    result[3] = values[3];
    return result;
  };

  /**
   * Computes a Matrix2 instance representing a non-uniform scale.
   *
   * @param {Vector2} scale The x and y scale factors.
   * @param {Matrix2} [result] The object in which the result will be stored, if undefined a new instance will be created.
   * @returns {Matrix2} The modified result parameter, or a new Matrix2 instance if one was not provided.
   *
   * @example
   * // Creates
   * //   [7.0, 0.0]
   * //   [0.0, 8.0]
   * const m = Cesium.Matrix2.fromScale(new Cesium.Vector2(7.0, 8.0));
   */
  static fromScale(scale, result) {

    if (!defined(result)) {
      return new Matrix2(scale.x, 0.0, 0.0, scale.y);
    }

    result[0] = scale.x;
    result[1] = 0.0;
    result[2] = 0.0;
    result[3] = scale.y;
    return result;
  };

  /**
   * Computes a Matrix2 instance representing a uniform scale.
   *
   * @param {Number} scale The uniform scale factor.
   * @param {Matrix2} [result] The object in which the result will be stored, if undefined a new instance will be created.
   * @returns {Matrix2} The modified result parameter, or a new Matrix2 instance if one was not provided.
   *
   * @example
   * // Creates
   * //   [2.0, 0.0]
   * //   [0.0, 2.0]
   * const m = Cesium.Matrix2.fromUniformScale(2.0);
   */
  static fromUniformScale(scale, result) {

    if (!defined(result)) {
      return new Matrix2(scale, 0.0, 0.0, scale);
    }

    result[0] = scale;
    result[1] = 0.0;
    result[2] = 0.0;
    result[3] = scale;
    return result;
  };

  /**
   * Creates a rotation matrix.
   *
   * @param {Number} angle The angle, in radians, of the rotation.  Positive angles are counterclockwise.
   * @param {Matrix2} [result] The object in which the result will be stored, if undefined a new instance will be created.
   * @returns {Matrix2} The modified result parameter, or a new Matrix2 instance if one was not provided.
   *
   * @example
   * // Rotate a point 45 degrees counterclockwise.
   * const p = new Cesium.Vector2(5, 6);
   * const m = Cesium.Matrix2.fromRotation(Cesium.Math.toRadians(45.0));
   * const rotated = Cesium.Matrix2.multiplyByVector(m, p, new Cesium.Vector2());
   */
  static fromRotation(angle, result) {

    const cosAngle = Math.cos(angle);
    const sinAngle = Math.sin(angle);

    if (!defined(result)) {
      return new Matrix2(cosAngle, -sinAngle, sinAngle, cosAngle);
    }
    result[0] = cosAngle;
    result[1] = sinAngle;
    result[2] = -sinAngle;
    result[3] = cosAngle;
    return result;
  };
  toArray(){
    const result=[];
    Matrix2.toArray(this,result)
    return result;
  }
  /**
   * Creates an Array from the provided Matrix2 instance.
   * The array will be in column-major order.
   *
   * @param {Matrix2} matrix The matrix to use..
   * @param {Number[]} [result] The Array onto which to store the result.
   * @returns {Number[]} The modified Array parameter or a new Array instance if one was not provided.
   */
  static toArray(matrix, result) {

    if (!defined(result)) {
      return [matrix[0], matrix[1], matrix[2], matrix[3]];
    }
    result[0] = matrix[0];
    result[1] = matrix[1];
    result[2] = matrix[2];
    result[3] = matrix[3];
    return result;
  };

  /**
   * Computes the array index of the element at the provided row and column.
   *
   * @param {Number} row The zero-based index of the row.
   * @param {Number} column The zero-based index of the column.
   * @returns {Number} The index of the element at the provided row and column.
   *
   * @exception {Error} row must be 0 or 1.
   * @exception {Error} column must be 0 or 1.
   *
   * @example
   * const myMatrix = new Cesium.Matrix2();
   * const column1Row0Index = Cesium.Matrix2.getElementIndex(1, 0);
   * const column1Row0 = myMatrix[column1Row0Index]
   * myMatrix[column1Row0Index] = 10.0;
   */
  static getElementIndex(column, row) {

    return column * 2 + row;
  };

  /**
   * Retrieves a copy of the matrix column at the provided index as a Vector2 instance.
   *
   * @param {Matrix2} matrix The matrix to use.
   * @param {Number} index The zero-based index of the column to retrieve.
   * @param {Vector2} result The object onto which to store the result.
   * @returns {Vector2} The modified result parameter.
   *
   * @exception {Error} index must be 0 or 1.
   */
  static getColumn(matrix, index, result) {

    const startIndex = index * 2;
    const x = matrix[startIndex];
    const y = matrix[startIndex + 1];

    result.x = x;
    result.y = y;
    return result;
  };

  /**
   * Computes a new matrix that replaces the specified column in the provided matrix with the provided Vector2 instance.
   *
   * @param {Matrix2} matrix The matrix to use.
   * @param {Number} index The zero-based index of the column to set.
   * @param {Vector2} cartesian The Cartesian whose values will be assigned to the specified column.
   * @param {Vector2} result The object onto which to store the result.
   * @returns {Matrix2} The modified result parameter.
   *
   * @exception {Error} index must be 0 or 1.
   */
  static setColumn(matrix, index, cartesian, result) {

    result = Matrix2.clone(matrix, result);
    const startIndex = index * 2;
    result[startIndex] = cartesian.x;
    result[startIndex + 1] = cartesian.y;
    return result;
  };

  /**
   * Retrieves a copy of the matrix row at the provided index as a Vector2 instance.
   *
   * @param {Matrix2} matrix The matrix to use.
   * @param {Number} index The zero-based index of the row to retrieve.
   * @param {Vector2} result The object onto which to store the result.
   * @returns {Vector2} The modified result parameter.
   *
   * @exception {Error} index must be 0 or 1.
   */
  static getRow(matrix, index, result) {

    const x = matrix[index];
    const y = matrix[index + 2];

    result.x = x;
    result.y = y;
    return result;
  };

  /**
   * Computes a new matrix that replaces the specified row in the provided matrix with the provided Vector2 instance.
   *
   * @param {Matrix2} matrix The matrix to use.
   * @param {Number} index The zero-based index of the row to set.
   * @param {Vector2} cartesian The Cartesian whose values will be assigned to the specified row.
   * @param {Matrix2} result The object onto which to store the result.
   * @returns {Matrix2} The modified result parameter.
   *
   * @exception {Error} index must be 0 or 1.
   */
  static setRow(matrix, index, cartesian, result) {
    result = Matrix2.clone(matrix, result);
    result[index] = cartesian.x;
    result[index + 2] = cartesian.y;
    return result;
  };
  /**
   * Computes a new matrix that replaces the scale with the provided scale.
   * This assumes the matrix is an affine transformation.
   *
   * @param {Matrix2} matrix The matrix to use.
   * @param {Vector2} scale The scale that replaces the scale of the provided matrix.
   * @param {Matrix2} result The object onto which to store the result.
   * @returns {Matrix2} The modified result parameter.
   *
   * @see Matrix2.setUniformScale
   * @see Matrix2.fromScale
   * @see Matrix2.fromUniformScale
   * @see Matrix2.multiplyByScale
   * @see Matrix2.multiplyByUniformScale
   * @see Matrix2.getScale
   */
  static setScale(matrix, scale, result) {

    const existingScale = Matrix2.getScale(matrix, scaleScratch1);
    const scaleRatioX = scale.x / existingScale.x;
    const scaleRatioY = scale.y / existingScale.y;

    result[0] = matrix[0] * scaleRatioX;
    result[1] = matrix[1] * scaleRatioX;
    result[2] = matrix[2] * scaleRatioY;
    result[3] = matrix[3] * scaleRatioY;

    return result;
  };
  /**
   * Computes a new matrix that replaces the scale with the provided uniform scale.
   * This assumes the matrix is an affine transformation.
   *
   * @param {Matrix2} matrix The matrix to use.
   * @param {Number} scale The uniform scale that replaces the scale of the provided matrix.
   * @param {Matrix2} result The object onto which to store the result.
   * @returns {Matrix2} The modified result parameter.
   *
   * @see Matrix2.setScale
   * @see Matrix2.fromScale
   * @see Matrix2.fromUniformScale
   * @see Matrix2.multiplyByScale
   * @see Matrix2.multiplyByUniformScale
   * @see Matrix2.getScale
   */
  static setUniformScale(matrix, scale, result) {

    const existingScale = Matrix2.getScale(matrix, scaleScratch2);
    const scaleRatioX = scale / existingScale.x;
    const scaleRatioY = scale / existingScale.y;

    result[0] = matrix[0] * scaleRatioX;
    result[1] = matrix[1] * scaleRatioX;
    result[2] = matrix[2] * scaleRatioY;
    result[3] = matrix[3] * scaleRatioY;

    return result;
  };



  /**
   * Extracts the non-uniform scale assuming the matrix is an affine transformation.
   *
   * @param {Matrix2} matrix The matrix.
   * @param {Vector2} result The object onto which to store the result.
   * @returns {Vector2} The modified result parameter.
   *
   * @see Matrix2.multiplyByScale
   * @see Matrix2.multiplyByUniformScale
   * @see Matrix2.fromScale
   * @see Matrix2.fromUniformScale
   * @see Matrix2.setScale
   * @see Matrix2.setUniformScale
   */
  static getScale(matrix, result) {

    result.x = Vector2.magnitude(
      Vector2.fromElements(matrix[0], matrix[1], scratchColumn)
    );
    result.y = Vector2.magnitude(
      Vector2.fromElements(matrix[2], matrix[3], scratchColumn)
    );
    return result;
  };
  /**
   * Computes the maximum scale assuming the matrix is an affine transformation.
   * The maximum scale is the maximum length of the column vectors.
   *
   * @param {Matrix2} matrix The matrix.
   * @returns {Number} The maximum scale.
   */
  static getMaximumScale(matrix) {
    Matrix2.getScale(matrix, scaleScratch3);
    return Vector2.maximumComponent(scaleScratch3);
  };
  /**
   * Sets the rotation assuming the matrix is an affine transformation.
   *
   * @param {Matrix2} matrix The matrix.
   * @param {Matrix2} rotation The rotation matrix.
   * @returns {Matrix2} The modified result parameter.
   *
   * @see Matrix2.fromRotation
   * @see Matrix2.getRotation
   */
  static setRotation(matrix, rotation, result) {

    const scale = Matrix2.getScale(matrix, scaleScratch4);

    result[0] = rotation[0] * scale.x;
    result[1] = rotation[1] * scale.x;
    result[2] = rotation[2] * scale.y;
    result[3] = rotation[3] * scale.y;

    return result;
  };



  /**
   * Extracts the rotation matrix assuming the matrix is an affine transformation.
   *
   * @param {Matrix2} matrix The matrix.
   * @param {Matrix2} result The object onto which to store the result.
   * @returns {Matrix2} The modified result parameter.
   *
   * @see Matrix2.setRotation
   * @see Matrix2.fromRotation
   */
  static getRotation(matrix, result) {

    const scale = Matrix2.getScale(matrix, scaleScratch5);

    result[0] = matrix[0] / scale.x;
    result[1] = matrix[1] / scale.x;
    result[2] = matrix[2] / scale.y;
    result[3] = matrix[3] / scale.y;

    return result;
  };

  /**
   * Computes the product of two matrices.
   *
   * @param {Matrix2} left The first matrix.
   * @param {Matrix2} right The second matrix.
   * @param {Matrix2} result The object onto which to store the result.
   * @returns {Matrix2} The modified result parameter.
   */
  static multiply(left, right, result) {

    const column0Row0 = left[0] * right[0] + left[2] * right[1];
    const column1Row0 = left[0] * right[2] + left[2] * right[3];
    const column0Row1 = left[1] * right[0] + left[3] * right[1];
    const column1Row1 = left[1] * right[2] + left[3] * right[3];

    result[0] = column0Row0;
    result[1] = column0Row1;
    result[2] = column1Row0;
    result[3] = column1Row1;
    return result;
  };

  /**
   * Computes the sum of two matrices.
   *
   * @param {Matrix2} left The first matrix.
   * @param {Matrix2} right The second matrix.
   * @param {Matrix2} result The object onto which to store the result.
   * @returns {Matrix2} The modified result parameter.
   */
  static add(left, right, result) {

    result[0] = left[0] + right[0];
    result[1] = left[1] + right[1];
    result[2] = left[2] + right[2];
    result[3] = left[3] + right[3];
    return result;
  };

  /**
   * Computes the difference of two matrices.
   *
   * @param {Matrix2} left The first matrix.
   * @param {Matrix2} right The second matrix.
   * @param {Matrix2} result The object onto which to store the result.
   * @returns {Matrix2} The modified result parameter.
   */
  static subtract(left, right, result) {

    result[0] = left[0] - right[0];
    result[1] = left[1] - right[1];
    result[2] = left[2] - right[2];
    result[3] = left[3] - right[3];
    return result;
  };

  /**
   * Computes the product of a matrix and a column vector.
   *
   * @param {Matrix2} matrix The matrix.
   * @param {Vector2} cartesian The column.
   * @param {Vector2} result The object onto which to store the result.
   * @returns {Vector2} The modified result parameter.
   */
  static multiplyByVector(matrix, cartesian, result) {

    const x = matrix[0] * cartesian.x + matrix[2] * cartesian.y;
    const y = matrix[1] * cartesian.x + matrix[3] * cartesian.y;

    result.x = x;
    result.y = y;
    return result;
  };

  /**
   * Computes the product of a matrix and a scalar.
   *
   * @param {Matrix2} matrix The matrix.
   * @param {Number} scalar The number to multiply by.
   * @param {Matrix2} result The object onto which to store the result.
   * @returns {Matrix2} The modified result parameter.
   */
  static multiplyByScalar(matrix, scalar, result) {

    result[0] = matrix[0] * scalar;
    result[1] = matrix[1] * scalar;
    result[2] = matrix[2] * scalar;
    result[3] = matrix[3] * scalar;
    return result;
  };

  /**
   * Computes the product of a matrix times a (non-uniform) scale, as if the scale were a scale matrix.
   *
   * @param {Matrix2} matrix The matrix on the left-hand side.
   * @param {Number} scale The non-uniform scale on the right-hand side.
   * @param {Matrix2} result The object onto which to store the result.
   * @returns {Matrix2} The modified result parameter.
   *
   *
   * @example
   * // Instead of Cesium.Matrix2.multiply(m, Cesium.Matrix2.fromScale(scale), m);
   * Cesium.Matrix2.multiplyByScale(m, scale, m);
   *
   * @see Matrix2.multiplyByUniformScale
   * @see Matrix2.fromScale
   * @see Matrix2.fromUniformScale
   * @see Matrix2.setScale
   * @see Matrix2.setUniformScale
   * @see Matrix2.getScale
   */
  static multiplyByScale(matrix, scale, result) {

    result[0] = matrix[0] * scale.x;
    result[1] = matrix[1] * scale.x;
    result[2] = matrix[2] * scale.y;
    result[3] = matrix[3] * scale.y;

    return result;
  };

  /**
   * Computes the product of a matrix times a uniform scale, as if the scale were a scale matrix.
   *
   * @param {Matrix2} matrix The matrix on the left-hand side.
   * @param {Number} scale The uniform scale on the right-hand side.
   * @param {Matrix2} result The object onto which to store the result.
   * @returns {Matrix2} The modified result parameter.
   *
   * @example
   * // Instead of Cesium.Matrix2.multiply(m, Cesium.Matrix2.fromUniformScale(scale), m);
   * Cesium.Matrix2.multiplyByUniformScale(m, scale, m);
   *
   * @see Matrix2.multiplyByScale
   * @see Matrix2.fromScale
   * @see Matrix2.fromUniformScale
   * @see Matrix2.setScale
   * @see Matrix2.setUniformScale
   * @see Matrix2.getScale
   */
  static multiplyByUniformScale(matrix, scale, result) {

    result[0] = matrix[0] * scale;
    result[1] = matrix[1] * scale;
    result[2] = matrix[2] * scale;
    result[3] = matrix[3] * scale;

    return result;
  };

  /**
   * Creates a negated copy of the provided matrix.
   *
   * @param {Matrix2} matrix The matrix to negate.
   * @param {Matrix2} result The object onto which to store the result.
   * @returns {Matrix2} The modified result parameter.
   */
  static negate(matrix, result) {

    result[0] = -matrix[0];
    result[1] = -matrix[1];
    result[2] = -matrix[2];
    result[3] = -matrix[3];
    return result;
  };

  /**
   * Computes the transpose of the provided matrix.
   *
   * @param {Matrix2} matrix The matrix to transpose.
   * @param {Matrix2} result The object onto which to store the result.
   * @returns {Matrix2} The modified result parameter.
   */
  static transpose(matrix, result) {

    const column0Row0 = matrix[0];
    const column0Row1 = matrix[2];
    const column1Row0 = matrix[1];
    const column1Row1 = matrix[3];

    result[0] = column0Row0;
    result[1] = column0Row1;
    result[2] = column1Row0;
    result[3] = column1Row1;
    return result;
  };

  /**
   * Computes a matrix, which contains the absolute (unsigned) values of the provided matrix's elements.
   *
   * @param {Matrix2} matrix The matrix with signed elements.
   * @param {Matrix2} result The object onto which to store the result.
   * @returns {Matrix2} The modified result parameter.
   */
  static abs(matrix, result) {

    result[0] = Math.abs(matrix[0]);
    result[1] = Math.abs(matrix[1]);
    result[2] = Math.abs(matrix[2]);
    result[3] = Math.abs(matrix[3]);

    return result;
  };

  /**
   * Compares the provided matrices componentwise and returns
   * <code>true</code> if they are equal, <code>false</code> otherwise.
   *
   * @param {Matrix2} [left] The first matrix.
   * @param {Matrix2} [right] The second matrix.
   * @returns {Boolean} <code>true</code> if left and right are equal, <code>false</code> otherwise.
   */
  static equals(left, right) {
    return (
      left === right ||
      (defined(left) &&
        defined(right) &&
        left[0] === right[0] &&
        left[1] === right[1] &&
        left[2] === right[2] &&
        left[3] === right[3])
    );
  };

  /**
   * @private
   */
  static equalsArray(matrix, array, offset) {
    return (
      matrix[0] === array[offset] &&
      matrix[1] === array[offset + 1] &&
      matrix[2] === array[offset + 2] &&
      matrix[3] === array[offset + 3]
    );
  };

  /**
   * Compares the provided matrices componentwise and returns
   * <code>true</code> if they are within the provided epsilon,
   * <code>false</code> otherwise.
   *
   * @param {Matrix2} [left] The first matrix.
   * @param {Matrix2} [right] The second matrix.
   * @param {Number} [epsilon=0] The epsilon to use for equality testing.
   * @returns {Boolean} <code>true</code> if left and right are within the provided epsilon, <code>false</code> otherwise.
   */
  static equalsEpsilon(left, right, epsilon) {
    epsilon = defaultValue(epsilon, 0);
    return (
      left === right ||
      (defined(left) &&
        defined(right) &&
        Math.abs(left[0] - right[0]) <= epsilon &&
        Math.abs(left[1] - right[1]) <= epsilon &&
        Math.abs(left[2] - right[2]) <= epsilon &&
        Math.abs(left[3] - right[3]) <= epsilon)
    );
  };

  /**
   * An immutable Matrix2 instance initialized to the identity matrix.
   *
   * @type {Matrix2}
   * @constant
   */
  public static IDENTITY = Object.freeze(new Matrix2(1.0, 0.0, 0.0, 1.0));

  /**
   * An immutable Matrix2 instance initialized to the zero matrix.
   *
   * @type {Matrix2}
   * @constant
   */
  public static ZERO = Object.freeze(new Matrix2(0.0, 0.0, 0.0, 0.0));

  /**
   * The index into Matrix2 for column 0, row 0.
   *
   * @type {Number}
   * @constant
   *
   * @example
   * const matrix = new Cesium.Matrix2();
   * matrix[Cesium.Matrix2.COLUMN0ROW0] = 5.0; // set column 0, row 0 to 5.0
   */
  public static COLUMN0ROW0 = 0;

  /**
   * The index into Matrix2 for column 0, row 1.
   *
   * @type {Number}
   * @constant
   *
   * @example
   * const matrix = new Cesium.Matrix2();
   * matrix[Cesium.Matrix2.COLUMN0ROW1] = 5.0; // set column 0, row 1 to 5.0
   */
  public static COLUMN0ROW1 = 1;

  /**
   * The index into Matrix2 for column 1, row 0.
   *
   * @type {Number}
   * @constant
   *
   * @example
   * const matrix = new Cesium.Matrix2();
   * matrix[Cesium.Matrix2.COLUMN1ROW0] = 5.0; // set column 1, row 0 to 5.0
   */
  public static COLUMN1ROW0 = 2;

  /**
   * The index into Matrix2 for column 1, row 1.
   *
   * @type {Number}
   * @constant
   *
   * @example
   * const matrix = new Cesium.Matrix2();
   * matrix[Cesium.Matrix2.COLUMN1ROW1] = 5.0; // set column 1, row 1 to 5.0
   */
  public static COLUMN1ROW1 = 3;


  /**
   * Duplicates the provided Matrix2 instance.
   *
   * @param {Matrix2} [result] The object onto which to store the result.
   * @returns {Matrix2} The modified result parameter or a new Matrix2 instance if one was not provided.
   */
  clone(result) {
    return Matrix2.clone(this, result);
  };

  /**
   * Compares this matrix to the provided matrix componentwise and returns
   * <code>true</code> if they are equal, <code>false</code> otherwise.
   *
   * @param {Matrix2} [right] The right hand side matrix.
   * @returns {Boolean} <code>true</code> if they are equal, <code>false</code> otherwise.
   */
  equals(right) {
    return Matrix2.equals(this, right);
  };

  /**
   * Compares this matrix to the provided matrix componentwise and returns
   * <code>true</code> if they are within the provided epsilon,
   * <code>false</code> otherwise.
   *
   * @param {Matrix2} [right] The right hand side matrix.
   * @param {Number} [epsilon=0] The epsilon to use for equality testing.
   * @returns {Boolean} <code>true</code> if they are within the provided epsilon, <code>false</code> otherwise.
   */
  equalsEpsilon(right, epsilon) {
    return Matrix2.equalsEpsilon(this, right, epsilon);
  };

  /**
   * Creates a string representing this Matrix with each row being
   * on a separate line and in the format '(column0, column1)'.
   *
   * @returns {String} A string representing the provided Matrix with each row being on a separate line and in the format '(column0, column1)'.
   */
  toString() {
    return `(${this[0]}, ${this[2]})\n` + `(${this[1]}, ${this[3]})`;
  };
}
const scaleScratch1 = new Vector2();
const scaleScratch2 = new Vector2();
const scaleScratch3 = new Vector2();
const scaleScratch4 = new Vector2();
const scratchColumn = new Vector2();
const scaleScratch5 = new Vector2();
export default Matrix2;

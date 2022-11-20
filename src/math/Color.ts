import defaultValue from "../utils/defaultValue";
import defined from "../utils/defined";
import GMath from "./Math";
let scratchArrayBuffer = new ArrayBuffer(4);
let scratchUint32Array = new Uint32Array(scratchArrayBuffer);
let scratchUint8Array = new Uint8Array(scratchArrayBuffer);

//#rgba
const rgbaMatcher = /^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i;
//#rrggbbaa
const rrggbbaaMatcher = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i;
//rgb(), rgba(), or rgb%()
const rgbParenthesesMatcher = /^rgba?\(\s*([0-9.]+%?)\s*,\s*([0-9.]+%?)\s*,\s*([0-9.]+%?)(?:\s*,\s*([0-9.]+))?\s*\)$/i;
//hsl() or hsla()
const hslParenthesesMatcher = /^hsla?\(\s*([0-9.]+)\s*,\s*([0-9.]+%)\s*,\s*([0-9.]+%)(?:\s*,\s*([0-9.]+))?\s*\)$/i;
function hue2rgb(m1, m2, h) {
  if (h < 0) {
    h += 1;
  }
  if (h > 1) {
    h -= 1;
  }
  if (h * 6 < 1) {
    return m1 + (m2 - m1) * 6 * h;
  }
  if (h * 2 < 1) {
    return m2;
  }
  if (h * 3 < 2) {
    return m1 + (m2 - m1) * (2 / 3 - h) * 6;
  }
  return m1;
}

/**
 * A color, specified using red, green, blue, and alpha values,
 * which range from <code>0</code> (no intensity) to <code>1.0</code> (full intensity).
 * @param {Number} [red=1.0] The red component.
 * @param {Number} [green=1.0] The green component.
 * @param {Number} [blue=1.0] The blue component.
 * @param {Number} [alpha=1.0] The alpha component.
 *
 * @constructor
 * @alias Color
 *
 * @see Packable
 */
class Color {
  /**
 * The number of elements used to pack the object into an array.
 * @type {Number}
 */
  public static packedLength = 4;
  /**
   * An immutable Color instance initialized to CSS color #F0F8FF
   * <span class="colorSwath" style="background: #F0F8FF;"></span>
   *
   * @constant
   * @type {Color}
   */
  public static ALICEBLUE = Object.freeze(Color.fromCssColorString("#F0F8FF"));

  /**
   * An immutable Color instance initialized to CSS color #FAEBD7
   * <span class="colorSwath" style="background: #FAEBD7;"></span>
   *
   * @constant
   * @type {Color}
   */
  public static ANTIQUEWHITE = Object.freeze(Color.fromCssColorString("#FAEBD7"));

  /**
   * An immutable Color instance initialized to CSS color #00FFFF
   * <span class="colorSwath" style="background: #00FFFF;"></span>
   *
   * @constant
   * @type {Color}
   */
  public static AQUA = Object.freeze(Color.fromCssColorString("#00FFFF"));

  /**
   * An immutable Color instance initialized to CSS color #7FFFD4
   * <span class="colorSwath" style="background: #7FFFD4;"></span>
   *
   * @constant
   * @type {Color}
   */
  public static AQUAMARINE = Object.freeze(Color.fromCssColorString("#7FFFD4"));

  /**
   * An immutable Color instance initialized to CSS color #F0FFFF
   * <span class="colorSwath" style="background: #F0FFFF;"></span>
   *
   * @constant
   * @type {Color}
   */
  public static AZURE = Object.freeze(Color.fromCssColorString("#F0FFFF"));

  /**
   * An immutable Color instance initialized to CSS color #F5F5DC
   * <span class="colorSwath" style="background: #F5F5DC;"></span>
   *
   * @constant
   * @type {Color}
   */
  public static BEIGE = Object.freeze(Color.fromCssColorString("#F5F5DC"));

  /**
   * An immutable Color instance initialized to CSS color #FFE4C4
   * <span class="colorSwath" style="background: #FFE4C4;"></span>
   *
   * @constant
   * @type {Color}
   */
  public static BISQUE = Object.freeze(Color.fromCssColorString("#FFE4C4"));

  /**
   * An immutable Color instance initialized to CSS color #000000
   * <span class="colorSwath" style="background: #000000;"></span>
   *
   * @constant
   * @type {Color}
   */
  public static BLACK = Object.freeze(Color.fromCssColorString("#000000"));

  /**
   * An immutable Color instance initialized to CSS color #FFEBCD
   * <span class="colorSwath" style="background: #FFEBCD;"></span>
   *
   * @constant
   * @type {Color}
   */
  public static BLANCHEDALMOND = Object.freeze(Color.fromCssColorString("#FFEBCD"));

  /**
   * An immutable Color instance initialized to CSS color #0000FF
   * <span class="colorSwath" style="background: #0000FF;"></span>
   *
   * @constant
   * @type {Color}
   */
  public static BLUE = Object.freeze(Color.fromCssColorString("#0000FF"));

  /**
   * An immutable Color instance initialized to CSS color #8A2BE2
   * <span class="colorSwath" style="background: #8A2BE2;"></span>
   *
   * @constant
   * @type {Color}
   */
  public static BLUEVIOLET = Object.freeze(Color.fromCssColorString("#8A2BE2"));

  /**
   * An immutable Color instance initialized to CSS color #A52A2A
   * <span class="colorSwath" style="background: #A52A2A;"></span>
   *
   * @constant
   * @type {Color}
   */
  public static BROWN = Object.freeze(Color.fromCssColorString("#A52A2A"));

  /**
   * An immutable Color instance initialized to CSS color #DEB887
   * <span class="colorSwath" style="background: #DEB887;"></span>
   *
   * @constant
   * @type {Color}
   */
  public static BURLYWOOD = Object.freeze(Color.fromCssColorString("#DEB887"));

  /**
   * An immutable Color instance initialized to CSS color #5F9EA0
   * <span class="colorSwath" style="background: #5F9EA0;"></span>
   *
   * @constant
   * @type {Color}
   */
  public static CADETBLUE = Object.freeze(Color.fromCssColorString("#5F9EA0"));
  /**
   * An immutable Color instance initialized to CSS color #7FFF00
   * <span class="colorSwath" style="background: #7FFF00;"></span>
   *
   * @constant
   * @type {Color}
   */
  public static CHARTREUSE = Object.freeze(Color.fromCssColorString("#7FFF00"));

  /**
   * An immutable Color instance initialized to CSS color #D2691E
   * <span class="colorSwath" style="background: #D2691E;"></span>
   *
   * @constant
   * @type {Color}
   */
  public static CHOCOLATE = Object.freeze(Color.fromCssColorString("#D2691E"));

  /**
   * An immutable Color instance initialized to CSS color #FF7F50
   * <span class="colorSwath" style="background: #FF7F50;"></span>
   *
   * @constant
   * @type {Color}
   */
  public static CORAL = Object.freeze(Color.fromCssColorString("#FF7F50"));

  /**
   * An immutable Color instance initialized to CSS color #6495ED
   * <span class="colorSwath" style="background: #6495ED;"></span>
   *
   * @constant
   * @type {Color}
   */
  public static CORNFLOWERBLUE = Object.freeze(Color.fromCssColorString("#6495ED"));

  /**
   * An immutable Color instance initialized to CSS color #FFF8DC
   * <span class="colorSwath" style="background: #FFF8DC;"></span>
   *
   * @constant
   * @type {Color}
   */
  public static CORNSILK = Object.freeze(Color.fromCssColorString("#FFF8DC"));

  /**
   * An immutable Color instance initialized to CSS color #DC143C
   * <span class="colorSwath" style="background: #DC143C;"></span>
   *
   * @constant
   * @type {Color}
   */
  public static CRIMSON = Object.freeze(Color.fromCssColorString("#DC143C"));

  /**
   * An immutable Color instance initialized to CSS color #00FFFF
   * <span class="colorSwath" style="background: #00FFFF;"></span>
   *
   * @constant
   * @type {Color}
   */
  public static CYAN = Object.freeze(Color.fromCssColorString("#00FFFF"));

  /**
   * An immutable Color instance initialized to CSS color #00008B
   * <span class="colorSwath" style="background: #00008B;"></span>
   *
   * @constant
   * @type {Color}
   */
  public static DARKBLUE = Object.freeze(Color.fromCssColorString("#00008B"));

  /**
   * An immutable Color instance initialized to CSS color #008B8B
   * <span class="colorSwath" style="background: #008B8B;"></span>
   *
   * @constant
   * @type {Color}
   */
  public static DARKCYAN = Object.freeze(Color.fromCssColorString("#008B8B"));
  green: number;
  red: number;
  blue: number;
  alpha: number;

  constructor(red=1.0, green=1.0, blue=1.0, alpha=1.0) {
    /**
     * The red component.
     * @type {Number}
     * @default 1.0
     */
    this.red = red;
    /**
     * The green component.
     * @type {Number}
     * @default 1.0
     */
    this.green = green;
    /**
     * The blue component.
     * @type {Number}
     * @default 1.0
     */
    this.blue =blue;
    /**
     * The alpha component.
     * @type {Number}
     * @default 1.0
     */
    this.alpha =alpha;
  }
  set(value){
      if (typeof value==='string') {
        Color.fromCssColorString(value,this);
      }
      return this;
  }
  toArray(){
    return [this.red,this.green,this.blue,this.alpha]
  }
  /**
 * Returns a duplicate of a Color instance.
 *
 * @param {Color} [result] The object to store the result in, if undefined a new instance will be created.
 * @returns {Color} The modified result parameter or a new instance if result was undefined.
 */
  clone(result) {
    return Color.clone(this, result);
  };

  /**
   * Returns true if this Color equals other.
   *
   * @param {Color} other The Color to compare for equality.
   * @returns {Boolean} <code>true</code> if the Colors are equal; otherwise, <code>false</code>.
   */
  equals(other) {
    return Color.equals(this, other);
  };

  /**
   * Returns <code>true</code> if this Color equals other componentwise within the specified epsilon.
   *
   * @param {Color} other The Color to compare for equality.
   * @param {Number} [epsilon=0.0] The epsilon to use for equality testing.
   * @returns {Boolean} <code>true</code> if the Colors are equal within the specified epsilon; otherwise, <code>false</code>.
   */
  equalsEpsilon(other, epsilon) {
    return (
      this === other || //
      (defined(other) && //
        Math.abs(this.red - other.red) <= epsilon && //
        Math.abs(this.green - other.green) <= epsilon && //
        Math.abs(this.blue - other.blue) <= epsilon && //
        Math.abs(this.alpha - other.alpha) <= epsilon)
    );
  };

  /**
   * Creates a string representing this Color in the format '(red, green, blue, alpha)'.
   *
   * @returns {String} A string representing this Color in the format '(red, green, blue, alpha)'.
   */
  toString() {
    return `(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
  };

  /**
   * Creates a string containing the CSS color value for this color.
   *
   * @returns {String} The CSS equivalent of this color.
   *
   * @see {@link http://www.w3.org/TR/css3-color/#rgba-color|CSS RGB or RGBA color values}
   */
  toCssColorString() {
    const red = Color.floatToByte(this.red);
    const green = Color.floatToByte(this.green);
    const blue = Color.floatToByte(this.blue);
    if (this.alpha === 1) {
      return `rgb(${red},${green},${blue})`;
    }
    return `rgba(${red},${green},${blue},${this.alpha})`;
  };

  /**
   * Creates a string containing CSS hex string color value for this color.
   *
   * @returns {String} The CSS hex string equivalent of this color.
   */
  toCssHexString() {
    let r = Color.floatToByte(this.red).toString(16);
    if (r.length < 2) {
      r = `0${r}`;
    }
    let g = Color.floatToByte(this.green).toString(16);
    if (g.length < 2) {
      g = `0${g}`;
    }
    let b = Color.floatToByte(this.blue).toString(16);
    if (b.length < 2) {
      b = `0${b}`;
    }
    if (this.alpha < 1) {
      let hexAlpha = Color.floatToByte(this.alpha).toString(16);
      if (hexAlpha.length < 2) {
        hexAlpha = `0${hexAlpha}`;
      }
      return `#${r}${g}${b}${hexAlpha}`;
    }
    return `#${r}${g}${b}`;
  };

  /**
   * Converts this color to an array of red, green, blue, and alpha values
   * that are in the range of 0 to 255.
   *
   * @param {Number[]} [result] The array to store the result in, if undefined a new instance will be created.
   * @returns {Number[]} The modified result parameter or a new instance if result was undefined.
   */
  toBytes(result) {
    const red = Color.floatToByte(this.red);
    const green = Color.floatToByte(this.green);
    const blue = Color.floatToByte(this.blue);
    const alpha = Color.floatToByte(this.alpha);

    if (!defined(result)) {
      return [red, green, blue, alpha];
    }
    result[0] = red;
    result[1] = green;
    result[2] = blue;
    result[3] = alpha;
    return result;
  };

  /**
   * Converts this color to a single numeric unsigned 32-bit RGBA value, using the endianness
   * of the system.
   *
   * @returns {Number} A single numeric unsigned 32-bit RGBA value.
   *
   *
   * @example
   * const rgba = Cesium.Color.BLUE.toRgba();
   *
   * @see Color.fromRgba
   */
  toRgba() {
    // scratchUint32Array and scratchUint8Array share an underlying array buffer
    scratchUint8Array[0] = Color.floatToByte(this.red);
    scratchUint8Array[1] = Color.floatToByte(this.green);
    scratchUint8Array[2] = Color.floatToByte(this.blue);
    scratchUint8Array[3] = Color.floatToByte(this.alpha);
    return scratchUint32Array[0];
  };

  /**
   * Brightens this color by the provided magnitude.
   *
   * @param {Number} magnitude A positive number indicating the amount to brighten.
   * @param {Color} result The object onto which to store the result.
   * @returns {Color} The modified result parameter.
   *
   * @example
   * const brightBlue = Cesium.Color.BLUE.brighten(0.5, new Cesium.Color());
   */
  brighten(magnitude, result) {

    magnitude = 1.0 - magnitude;
    result.red = 1.0 - (1.0 - this.red) * magnitude;
    result.green = 1.0 - (1.0 - this.green) * magnitude;
    result.blue = 1.0 - (1.0 - this.blue) * magnitude;
    result.alpha = this.alpha;
    return result;
  };

  /**
   * Darkens this color by the provided magnitude.
   *
   * @param {Number} magnitude A positive number indicating the amount to darken.
   * @param {Color} result The object onto which to store the result.
   * @returns {Color} The modified result parameter.
   *
   * @example
   * const darkBlue = Cesium.Color.BLUE.darken(0.5, new Cesium.Color());
   */
  darken(magnitude, result) {

    magnitude = 1.0 - magnitude;
    result.red = this.red * magnitude;
    result.green = this.green * magnitude;
    result.blue = this.blue * magnitude;
    result.alpha = this.alpha;
    return result;
  };

  /**
   * Creates a new Color that has the same red, green, and blue components
   * as this Color, but with the specified alpha value.
   *
   * @param {Number} alpha The new alpha component.
   * @param {Color} [result] The object onto which to store the result.
   * @returns {Color} The modified result parameter or a new Color instance if one was not provided.
   *
   * @example const translucentRed = Cesium.Color.RED.withAlpha(0.9);
   */
  withAlpha(alpha, result) {
    return Color.fromAlpha(this, alpha, result);
  };
  /**
   * Creates a Color instance from a {@link Cartesian4}. <code>x</code>, <code>y</code>, <code>z</code>,
   * and <code>w</code> map to <code>red</code>, <code>green</code>, <code>blue</code>, and <code>alpha</code>, respectively.
   *
   * @param {Cartesian4} cartesian The source cartesian.
   * @param {Color} [result] The object onto which to store the result.
   * @returns {Color} The modified result parameter or a new Color instance if one was not provided.
   */
  static fromCartesian4(cartesian, result) {

    if (!defined(result)) {
      return new Color(cartesian.x, cartesian.y, cartesian.z, cartesian.w);
    }

    result.red = cartesian.x;
    result.green = cartesian.y;
    result.blue = cartesian.z;
    result.alpha = cartesian.w;
    return result;
  };

  /**
   * Creates a new Color specified using red, green, blue, and alpha values
   * that are in the range of 0 to 255, converting them internally to a range of 0.0 to 1.0.
   *
   * @param {Number} [red=255] The red component.
   * @param {Number} [green=255] The green component.
   * @param {Number} [blue=255] The blue component.
   * @param {Number} [alpha=255] The alpha component.
   * @param {Color} [result] The object onto which to store the result.
   * @returns {Color} The modified result parameter or a new Color instance if one was not provided.
   */
  static fromBytes(red, green, blue, alpha, result) {
    red = Color.byteToFloat(defaultValue(red, 255.0));
    green = Color.byteToFloat(defaultValue(green, 255.0));
    blue = Color.byteToFloat(defaultValue(blue, 255.0));
    alpha = Color.byteToFloat(defaultValue(alpha, 255.0));

    if (!defined(result)) {
      return new Color(red, green, blue, alpha);
    }

    result.red = red;
    result.green = green;
    result.blue = blue;
    result.alpha = alpha;
    return result;
  };

  /**
   * Creates a new Color that has the same red, green, and blue components
   * of the specified color, but with the specified alpha value.
   *
   * @param {Color} color The base color
   * @param {Number} alpha The new alpha component.
   * @param {Color} [result] The object onto which to store the result.
   * @returns {Color} The modified result parameter or a new Color instance if one was not provided.
   *
   * @example const translucentRed = Cesium.Color.fromAlpha(Cesium.Color.RED, 0.9);
   */
  static fromAlpha(color, alpha, result) {

    if (!defined(result)) {
      return new Color(color.red, color.green, color.blue, alpha);
    }

    result.red = color.red;
    result.green = color.green;
    result.blue = color.blue;
    result.alpha = alpha;
    return result;
  };




  /**
   * Creates a new Color from a single numeric unsigned 32-bit RGBA value, using the endianness
   * of the system.
   *
   * @param {Number} rgba A single numeric unsigned 32-bit RGBA value.
   * @param {Color} [result] The object to store the result in, if undefined a new instance will be created.
   * @returns {Color} The color object.
   *
   * @example
   * const color = Cesium.Color.fromRgba(0x67ADDFFF);
   *
   * @see Color#toRgba
   */
  static fromRgba(rgba, result) {
    // scratchUint32Array and scratchUint8Array share an underlying array buffer
    scratchUint32Array[0] = rgba;
    return Color.fromBytes(
      scratchUint8Array[0],
      scratchUint8Array[1],
      scratchUint8Array[2],
      scratchUint8Array[3],
      result
    );
  };

  /**
   * Creates a Color instance from hue, saturation, and lightness.
   *
   * @param {Number} [hue=0] The hue angle 0...1
   * @param {Number} [saturation=0] The saturation value 0...1
   * @param {Number} [lightness=0] The lightness value 0...1
   * @param {Number} [alpha=1.0] The alpha component 0...1
   * @param {Color} [result] The object to store the result in, if undefined a new instance will be created.
   * @returns {Color} The color object.
   *
   * @see {@link http://www.w3.org/TR/css3-color/#hsl-color|CSS color values}
   */
  static fromHsl(hue, saturation, lightness, alpha, result) {
    hue = defaultValue(hue, 0.0) % 1.0;
    saturation = defaultValue(saturation, 0.0);
    lightness = defaultValue(lightness, 0.0);
    alpha = defaultValue(alpha, 1.0);

    let red = lightness;
    let green = lightness;
    let blue = lightness;

    if (saturation !== 0) {
      let m2;
      if (lightness < 0.5) {
        m2 = lightness * (1 + saturation);
      } else {
        m2 = lightness + saturation - lightness * saturation;
      }

      const m1 = 2.0 * lightness - m2;
      red = hue2rgb(m1, m2, hue + 1 / 3);
      green = hue2rgb(m1, m2, hue);
      blue = hue2rgb(m1, m2, hue - 1 / 3);
    }

    if (!defined(result)) {
      return new Color(red, green, blue, alpha);
    }

    result.red = red;
    result.green = green;
    result.blue = blue;
    result.alpha = alpha;
    return result;
  };

  /**
   * Creates a random color using the provided options. For reproducible random colors, you should
   * call {@link GMath#setRandomNumberSeed} once at the beginning of your application.
   *
   * @param {Object} [options] Object with the following properties:
   * @param {Number} [options.red] If specified, the red component to use instead of a randomized value.
   * @param {Number} [options.minimumRed=0.0] The maximum red value to generate if none was specified.
   * @param {Number} [options.maximumRed=1.0] The minimum red value to generate if none was specified.
   * @param {Number} [options.green] If specified, the green component to use instead of a randomized value.
   * @param {Number} [options.minimumGreen=0.0] The maximum green value to generate if none was specified.
   * @param {Number} [options.maximumGreen=1.0] The minimum green value to generate if none was specified.
   * @param {Number} [options.blue] If specified, the blue component to use instead of a randomized value.
   * @param {Number} [options.minimumBlue=0.0] The maximum blue value to generate if none was specified.
   * @param {Number} [options.maximumBlue=1.0] The minimum blue value to generate if none was specified.
   * @param {Number} [options.alpha] If specified, the alpha component to use instead of a randomized value.
   * @param {Number} [options.minimumAlpha=0.0] The maximum alpha value to generate if none was specified.
   * @param {Number} [options.maximumAlpha=1.0] The minimum alpha value to generate if none was specified.
   * @param {Color} [result] The object to store the result in, if undefined a new instance will be created.
   * @returns {Color} The modified result parameter or a new instance if result was undefined.
   *
   * @exception {DeveloperError} minimumRed must be less than or equal to maximumRed.
   * @exception {DeveloperError} minimumGreen must be less than or equal to maximumGreen.
   * @exception {DeveloperError} minimumBlue must be less than or equal to maximumBlue.
   * @exception {DeveloperError} minimumAlpha must be less than or equal to maximumAlpha.
   *
   * @example
   * //Create a completely random color
   * const color = Cesium.Color.fromRandom();
   *
   * //Create a random shade of yellow.
   * const color1 = Cesium.Color.fromRandom({
   *     red : 1.0,
   *     green : 1.0,
   *     alpha : 1.0
   * });
   *
   * //Create a random bright color.
   * const color2 = Cesium.Color.fromRandom({
   *     minimumRed : 0.75,
   *     minimumGreen : 0.75,
   *     minimumBlue : 0.75,
   *     alpha : 1.0
   * });
   */
  static fromRandom(options, result) {
    options = defaultValue(options, defaultValue.EMPTY_OBJECT);

    let red = options.red;
    if (!defined(red)) {
      const minimumRed = defaultValue(options.minimumRed, 0);
      const maximumRed = defaultValue(options.maximumRed, 1.0);

      red =
        minimumRed + GMath.nextRandomNumber() * (maximumRed - minimumRed);
    }

    let green = options.green;
    if (!defined(green)) {
      const minimumGreen = defaultValue(options.minimumGreen, 0);
      const maximumGreen = defaultValue(options.maximumGreen, 1.0);

      green =
        minimumGreen +
        GMath.nextRandomNumber() * (maximumGreen - minimumGreen);
    }

    let blue = options.blue;
    if (!defined(blue)) {
      const minimumBlue = defaultValue(options.minimumBlue, 0);
      const maximumBlue = defaultValue(options.maximumBlue, 1.0);

      blue =
        minimumBlue + GMath.nextRandomNumber() * (maximumBlue - minimumBlue);
    }

    let alpha = options.alpha;
    if (!defined(alpha)) {
      const minimumAlpha = defaultValue(options.minimumAlpha, 0);
      const maximumAlpha = defaultValue(options.maximumAlpha, 1.0);

      alpha =
        minimumAlpha +
        GMath.nextRandomNumber() * (maximumAlpha - minimumAlpha);
    }

    if (!defined(result)) {
      return new Color(red, green, blue, alpha);
    }

    result.red = red;
    result.green = green;
    result.blue = blue;
    result.alpha = alpha;
    return result;
  };

  /**
   * Creates a Color instance from a CSS color value.
   *
   * @param {String} color The CSS color value in #rgb, #rgba, #rrggbb, #rrggbbaa, rgb(), rgba(), hsl(), or hsla() format.
   * @param {Color} [result] The object to store the result in, if undefined a new instance will be created.
   * @returns {Color} The color object, or undefined if the string was not a valid CSS color.
   *
   *
   * @example
   * const cesiumBlue = Cesium.Color.fromCssColorString('#67ADDF');
   * const green = Cesium.Color.fromCssColorString('green');
   *
   * @see {@link http://www.w3.org/TR/css3-color|CSS color values}
   */
  static fromCssColorString(color, result=new Color()) {
    // Remove all whitespaces from the color string
    color = color.replace(/\s/g, "");

    const namedColor = Color[color.toUpperCase()];
    if (defined(namedColor)) {
      Color.clone(namedColor, result);
      return result;
    }

    let matches = rgbaMatcher.exec(color);
    if (matches !== null) {
      result.red = parseInt(matches[1], 16) / 15;
      result.green = parseInt(matches[2], 16) / 15.0;
      result.blue = parseInt(matches[3], 16) / 15.0;
      result.alpha = parseInt(defaultValue(matches[4], "f"), 16) / 15.0;
      return result;
    }

    matches = rrggbbaaMatcher.exec(color);
    if (matches !== null) {
      result.red = parseInt(matches[1], 16) / 255.0;
      result.green = parseInt(matches[2], 16) / 255.0;
      result.blue = parseInt(matches[3], 16) / 255.0;
      result.alpha = parseInt(defaultValue(matches[4], "ff"), 16) / 255.0;
      return result;
    }

    matches = rgbParenthesesMatcher.exec(color);
    if (matches !== null) {
      result.red =
        parseFloat(matches[1]) / ("%" === matches[1].substr(-1) ? 100.0 : 255.0);
      result.green =
        parseFloat(matches[2]) / ("%" === matches[2].substr(-1) ? 100.0 : 255.0);
      result.blue =
        parseFloat(matches[3]) / ("%" === matches[3].substr(-1) ? 100.0 : 255.0);
      result.alpha = parseFloat(defaultValue(matches[4], "1.0"));
      return result;
    }

    matches = hslParenthesesMatcher.exec(color);
    if (matches !== null) {
      return Color.fromHsl(
        parseFloat(matches[1]) / 360.0,
        parseFloat(matches[2]) / 100.0,
        parseFloat(matches[3]) / 100.0,
        parseFloat(defaultValue(matches[4], "1.0")),
        result
      );
    }

    result = undefined;
    return result;
  };

  /**
   * Stores the provided instance into the provided array.
   *
   * @param {Color} value The value to pack.
   * @param {Number[]} array The array to pack into.
   * @param {Number} [startingIndex=0] The index into the array at which to start packing the elements.
   *
   * @returns {Number[]} The array that was packed into
   */
  static pack(value, array, startingIndex) {

    startingIndex = defaultValue(startingIndex, 0);
    array[startingIndex++] = value.red;
    array[startingIndex++] = value.green;
    array[startingIndex++] = value.blue;
    array[startingIndex] = value.alpha;

    return array;
  };

  /**
   * Retrieves an instance from a packed array.
   *
   * @param {Number[]} array The packed array.
   * @param {Number} [startingIndex=0] The starting index of the element to be unpacked.
   * @param {Color} [result] The object into which to store the result.
   * @returns {Color} The modified result parameter or a new Color instance if one was not provided.
   */
  static unpack(array, startingIndex, result) {

    startingIndex = defaultValue(startingIndex, 0);
    if (!defined(result)) {
      result = new Color();
    }
    result.red = array[startingIndex++];
    result.green = array[startingIndex++];
    result.blue = array[startingIndex++];
    result.alpha = array[startingIndex];
    return result;
  };

  /**
   * Converts a 'byte' color component in the range of 0 to 255 into
   * a 'float' color component in the range of 0 to 1.0.
   *
   * @param {Number} number The number to be converted.
   * @returns {Number} The converted number.
   */
  static byteToFloat(number) {
    return number / 255.0;
  };

  /**
   * Converts a 'float' color component in the range of 0 to 1.0 into
   * a 'byte' color component in the range of 0 to 255.
   *
   * @param {Number} number The number to be converted.
   * @returns {Number} The converted number.
   */
  static floatToByte(number) {
    return number === 1.0 ? 255.0 : (number * 256.0) | 0;
  };

  /**
   * Duplicates a Color.
   *
   * @param {Color} color The Color to duplicate.
   * @param {Color} [result] The object to store the result in, if undefined a new instance will be created.
   * @returns {Color} The modified result parameter or a new instance if result was undefined. (Returns undefined if color is undefined)
   */
  static clone(color, result) {
    if (!defined(color)) {
      return undefined;
    }
    if (!defined(result)) {
      return new Color(color.red, color.green, color.blue, color.alpha);
    }
    result.red = color.red;
    result.green = color.green;
    result.blue = color.blue;
    result.alpha = color.alpha;
    return result;
  };

  /**
   * Returns true if the first Color equals the second color.
   *
   * @param {Color} left The first Color to compare for equality.
   * @param {Color} right The second Color to compare for equality.
   * @returns {Boolean} <code>true</code> if the Colors are equal; otherwise, <code>false</code>.
   */
  static equals(left, right) {
    return (
      left === right || //
      (defined(left) && //
        defined(right) && //
        left.red === right.red && //
        left.green === right.green && //
        left.blue === right.blue && //
        left.alpha === right.alpha)
    );
  };

  /**
   * @private
   */
  static equalsArray(color, array, offset) {
    return (
      color.red === array[offset] &&
      color.green === array[offset + 1] &&
      color.blue === array[offset + 2] &&
      color.alpha === array[offset + 3]
    );
  };

  /**
   * Computes the componentwise sum of two Colors.
   *
   * @param {Color} left The first Color.
   * @param {Color} right The second Color.
   * @param {Color} result The object onto which to store the result.
   * @returns {Color} The modified result parameter.
   */
  static add(left, right, result) {

    result.red = left.red + right.red;
    result.green = left.green + right.green;
    result.blue = left.blue + right.blue;
    result.alpha = left.alpha + right.alpha;
    return result;
  };

  /**
   * Computes the componentwise difference of two Colors.
   *
   * @param {Color} left The first Color.
   * @param {Color} right The second Color.
   * @param {Color} result The object onto which to store the result.
   * @returns {Color} The modified result parameter.
   */
  static subtract(left, right, result) {

    result.red = left.red - right.red;
    result.green = left.green - right.green;
    result.blue = left.blue - right.blue;
    result.alpha = left.alpha - right.alpha;
    return result;
  };

  /**
   * Computes the componentwise product of two Colors.
   *
   * @param {Color} left The first Color.
   * @param {Color} right The second Color.
   * @param {Color} result The object onto which to store the result.
   * @returns {Color} The modified result parameter.
   */
  static multiply(left, right, result) {

    result.red = left.red * right.red;
    result.green = left.green * right.green;
    result.blue = left.blue * right.blue;
    result.alpha = left.alpha * right.alpha;
    return result;
  };

  /**
   * Computes the componentwise quotient of two Colors.
   *
   * @param {Color} left The first Color.
   * @param {Color} right The second Color.
   * @param {Color} result The object onto which to store the result.
   * @returns {Color} The modified result parameter.
   */
  static divide(left, right, result) {

    result.red = left.red / right.red;
    result.green = left.green / right.green;
    result.blue = left.blue / right.blue;
    result.alpha = left.alpha / right.alpha;
    return result;
  };

  /**
   * Computes the componentwise modulus of two Colors.
   *
   * @param {Color} left The first Color.
   * @param {Color} right The second Color.
   * @param {Color} result The object onto which to store the result.
   * @returns {Color} The modified result parameter.
   */
  static mod(left, right, result) {

    result.red = left.red % right.red;
    result.green = left.green % right.green;
    result.blue = left.blue % right.blue;
    result.alpha = left.alpha % right.alpha;
    return result;
  };

  /**
   * Computes the linear interpolation or extrapolation at t between the provided colors.
   *
   * @param {Color} start The color corresponding to t at 0.0.
   * @param {Color} end The color corresponding to t at 1.0.
   * @param {Number} t The point along t at which to interpolate.
   * @param {Color} result The object onto which to store the result.
   * @returns {Color} The modified result parameter.
   */
  static lerp(start, end, t, result) {

    result.red = GMath.lerp(start.red, end.red, t);
    result.green = GMath.lerp(start.green, end.green, t);
    result.blue = GMath.lerp(start.blue, end.blue, t);
    result.alpha = GMath.lerp(start.alpha, end.alpha, t);
    return result;
  };

  /**
   * Multiplies the provided Color componentwise by the provided scalar.
   *
   * @param {Color} color The Color to be scaled.
   * @param {Number} scalar The scalar to multiply with.
   * @param {Color} result The object onto which to store the result.
   * @returns {Color} The modified result parameter.
   */
  static multiplyByScalar(color, scalar, result) {

    result.red = color.red * scalar;
    result.green = color.green * scalar;
    result.blue = color.blue * scalar;
    result.alpha = color.alpha * scalar;
    return result;
  };

  /**
   * Divides the provided Color componentwise by the provided scalar.
   *
   * @param {Color} color The Color to be divided.
   * @param {Number} scalar The scalar to divide with.
   * @param {Color} result The object onto which to store the result.
   * @returns {Color} The modified result parameter.
   */
  static divideByScalar(color, scalar, result) {

    result.red = color.red / scalar;
    result.green = color.green / scalar;
    result.blue = color.blue / scalar;
    result.alpha = color.alpha / scalar;
    return result;
  };

}
export default Color;

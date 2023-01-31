import defaultValue from "../utils/defaultValue";
import defined from "../utils/defined";
import GMath from "./Math";
let scratchArrayBuffer = new ArrayBuffer(4);

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
 * A color, specified using red, green, blue,
 * which range from <code>0</code> (no intensity) to <code>1.0</code> (full intensity).
 * @param {Number} [red=1.0] The red component.
 * @param {Number} [green=1.0] The green component.
 * @param {Number} [blue=1.0] The blue component.
 *
 * @constructor
 * @alias Color
 *
 * @see Packable
 */
class Color {
  green: number;
  red: number;
  blue: number;
  constructor(red=1.0, green=1.0, blue=1.0) {
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
  }
  set(value){
      if (typeof value==='string') {
        Color.fromCssColorString(value,this);
      }
      return this;
  }
  toArray(){
    return [this.red,this.green,this.blue]
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
    return `#${r}${g}${b}`;
  };

  /**
   * Converts this color to an array of red, green, blue
   * that are in the range of 0 to 255.
   *
   * @param {Number[]} [result] The array to store the result in, if undefined a new instance will be created.
   * @returns {Number[]} The modified result parameter or a new instance if result was undefined.
   */
  toBytes(result) {
    const red = Color.floatToByte(this.red);
    const green = Color.floatToByte(this.green);
    const blue = Color.floatToByte(this.blue);

    if (!defined(result)) {
      return [red, green, blue];
    }
    result[0] = red;
    result[1] = green;
    result[2] = blue;
    return result;
  };
  /**
   * Creates a new Color specified using red, green, blue
   * that are in the range of 0 to 255, converting them internally to a range of 0.0 to 1.0.
   *
   * @param {Number} [red=255] The red component.
   * @param {Number} [green=255] The green component.
   * @param {Number} [blue=255] The blue component.
   * @param {Color} [result] The object onto which to store the result.
   * @returns {Color} The modified result parameter or a new Color instance if one was not provided.
   */
  static fromBytes(red, green, blue,  result) {
    red = Color.byteToFloat(defaultValue(red, 255.0));
    green = Color.byteToFloat(defaultValue(green, 255.0));
    blue = Color.byteToFloat(defaultValue(blue, 255.0));

    if (!defined(result)) {
      return new Color(red, green, blue);
    }

    result.red = red;
    result.green = green;
    result.blue = blue;
    return result;
  };

  /**
   * Creates a Color instance from hue, saturation, and lightness.
   *
   * @param {Number} [hue=0] The hue angle 0...1
   * @param {Number} [saturation=0] The saturation value 0...1
   * @param {Number} [lightness=0] The lightness value 0...1
   * @param {Color} [result] The object to store the result in, if undefined a new instance will be created.
   * @returns {Color} The color object.
   *
   * @see {@link http://www.w3.org/TR/css3-color/#hsl-color|CSS color values}
   */
  static fromHsl(hue, saturation, lightness, result) {
    hue = defaultValue(hue, 0.0) % 1.0;
    saturation = defaultValue(saturation, 0.0);
    lightness = defaultValue(lightness, 0.0);
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
      return new Color(red, green, blue,);
    }

    result.red = red;
    result.green = green;
    result.blue = blue;
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
   * const color = Color.fromRandom();
   *
   * //Create a random shade of yellow.
   * const color1 = Color.fromRandom({
   *     red : 1.0,
   *     green : 1.0,
   * });
   *
   * //Create a random bright color.
   * const color2 = Color.fromRandom({
   *     minimumRed : 0.75,
   *     minimumGreen : 0.75,
   *     minimumBlue : 0.75,
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
    if (!defined(result)) {
      return new Color(red, green, blue);
    }

    result.red = red;
    result.green = green;
    result.blue = blue;
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
   * const blue = Color.fromCssColorString('#67ADDF');
   * const green = Color.fromCssColorString('green');
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
      return result;
    }

    matches = rrggbbaaMatcher.exec(color);
    if (matches !== null) {
      result.red = parseInt(matches[1], 16) / 255.0;
      result.green = parseInt(matches[2], 16) / 255.0;
      result.blue = parseInt(matches[3], 16) / 255.0;
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
      return result;
    }

    matches = hslParenthesesMatcher.exec(color);
    if (matches !== null) {
      return Color.fromHsl(
        parseFloat(matches[1]) / 360.0,
        parseFloat(matches[2]) / 100.0,
        parseFloat(matches[3]) / 100.0,
        result
      );
    }

    result = undefined;
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
      return new Color(color.red, color.green, color.blue);
    }
    result.red = color.red;
    result.green = color.green;
    result.blue = color.blue;
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
        left.blue === right.blue)
    );
  };

  /**
   * @private
   */
  static equalsArray(color, array, offset) {
    return (
      color.red === array[offset] &&
      color.green === array[offset + 1] &&
      color.blue === array[offset + 2]
    );
  };
}
export default Color;

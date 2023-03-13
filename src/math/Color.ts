import defaultValue from "../utils/defaultValue";
import defined from "../utils/defined";
import GMath from "./Math";
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

class Color {
	green: number;
	red: number;
	blue: number;
	constructor(red: number = 1.0, green: number = 1.0, blue: number = 1.0) {
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
		this.blue = blue;
	}
	set(value: string): Color {
		if (typeof value === "string") {
			Color.fromCssColorString(value, this);
		}
		return this;
	}
	toArray(): number[] {
		return [this.red, this.green, this.blue];
	}

	clone(result: Color): Color {
		return Color.clone(this, result);
	}

	equals(other: Color): boolean {
		return Color.equals(this, other);
	}

	toCssHexString(): string {
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
	}

	toBytes(result: number[]): number[] {
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
	}

	static fromBytes(red: number, green: number, blue: number, result: Color): Color {
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
	}

	static fromHsl(hue: number, saturation: number, lightness: number, result: Color): Color {
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
			return new Color(red, green, blue);
		}

		result.red = red;
		result.green = green;
		result.blue = blue;
		return result;
	}

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
	static fromRandom(options, result: Color): Color {
		options = defaultValue(options, defaultValue.EMPTY_OBJECT);

		let red = options.red;
		if (!defined(red)) {
			const minimumRed = defaultValue(options.minimumRed, 0);
			const maximumRed = defaultValue(options.maximumRed, 1.0);

			red = minimumRed + GMath.nextRandomNumber() * (maximumRed - minimumRed);
		}

		let green = options.green;
		if (!defined(green)) {
			const minimumGreen = defaultValue(options.minimumGreen, 0);
			const maximumGreen = defaultValue(options.maximumGreen, 1.0);

			green = minimumGreen + GMath.nextRandomNumber() * (maximumGreen - minimumGreen);
		}

		let blue = options.blue;
		if (!defined(blue)) {
			const minimumBlue = defaultValue(options.minimumBlue, 0);
			const maximumBlue = defaultValue(options.maximumBlue, 1.0);

			blue = minimumBlue + GMath.nextRandomNumber() * (maximumBlue - minimumBlue);
		}
		if (!defined(result)) {
			return new Color(red, green, blue);
		}

		result.red = red;
		result.green = green;
		result.blue = blue;
		return result;
	}

	static fromCssColorString(color: string, result: Color = new Color()): Color {
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
			result.red = parseFloat(matches[1]) / ("%" === matches[1].substr(-1) ? 100.0 : 255.0);
			result.green = parseFloat(matches[2]) / ("%" === matches[2].substr(-1) ? 100.0 : 255.0);
			result.blue = parseFloat(matches[3]) / ("%" === matches[3].substr(-1) ? 100.0 : 255.0);
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
	}

	static byteToFloat(value: number): number {
		return value / 255.0;
	}

	static floatToByte(value: number): number {
		return value === 1.0 ? 255.0 : (value * 256.0) | 0;
	}

	static clone(color: Color, result: Color): Color {
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
	}

	static equals(left: Color, right: Color): boolean {
		return (
			left === right || //
			(defined(left) && //
				defined(right) && //
				left.red === right.red && //
				left.green === right.green && //
				left.blue === right.blue)
		);
	}

	/**
	 * @private
	 */
	static equalsArray(color: Color, array: number[], offset: number): boolean {
		return color.red === array[offset] && color.green === array[offset + 1] && color.blue === array[offset + 2];
	}
}
export default Color;

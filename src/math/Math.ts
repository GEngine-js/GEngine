import MersenneTwister from "mersenne-twister";
import defaultValue from "../utils/defaultValue";
import defined from "../utils/defined";

class GMath {
  public static EPSILON1 = 0.1;

  public static EPSILON2 = 0.01;

  public static EPSILON3 = 0.001;
  public static EPSILON4 = 0.0001;

  public static EPSILON5 = 0.00001;

  public static EPSILON6 = 0.000001;

  public static EPSILON7 = 0.0000001;

  public static EPSILON8 = 0.00000001;

  public static EPSILON9 = 0.000000001;

  public static EPSILON10 = 0.0000000001;

  public static EPSILON11 = 0.00000000001;

  public static EPSILON12 = 0.000000000001;

  public static EPSILON13 = 0.0000000000001;

  public static EPSILON14 = 0.00000000000001;

  public static EPSILON15 = 0.000000000000001;

  public static EPSILON16 = 0.0000000000000001;

  public static EPSILON17 = 0.00000000000000001;

  public static EPSILON18 = 0.000000000000000001;

  public static EPSILON19 = 0.0000000000000000001;

  public static EPSILON20 = 0.00000000000000000001;

  public static EPSILON21 = 0.000000000000000000001;

  public static GRAVITATIONALPARAMETER = 3.986004418e14;

  public static SIXTY_FOUR_KILOBYTES = 64 * 1024;

  public static FOUR_GIGABYTES = 4 * 1024 * 1024 * 1024;

  // eslint-disable-next-line es/no-math-sign
  static sign = defaultValue(Math.sign, function sign(value) {
    value = +value; // coerce to number
    if (value === 0 || value !== value) {
      // zero or NaN
      return value;
    }
    return value > 0 ? 1 : -1;
  });

  static signNotZero(value) {
    return value < 0.0 ? -1.0 : 1.0;
  }

  static toSNorm(value: number, rangeMaximum: number): number {
    rangeMaximum = defaultValue(rangeMaximum, 255);
    return Math.round(
      (GMath.clamp(value, -1.0, 1.0) * 0.5 + 0.5) * rangeMaximum
    );
  }

  static fromSNorm(value: number, rangeMaximum: number): number {
    rangeMaximum = defaultValue(rangeMaximum, 255);
    return (GMath.clamp(value, 0.0, rangeMaximum) / rangeMaximum) * 2.0 - 1.0;
  }

  static normalize(
    value: number,
    rangeMinimum: number,
    rangeMaximum: number
  ): number {
    rangeMaximum = Math.max(rangeMaximum - rangeMinimum, 0.0);
    return rangeMaximum === 0.0
      ? 0.0
      : GMath.clamp((value - rangeMinimum) / rangeMaximum, 0.0, 1.0);
  }

  // eslint-disable-next-line es/no-math-sinh
  static sinh = defaultValue(Math.sinh, function sinh(value) {
    return (Math.exp(value) - Math.exp(-value)) / 2.0;
  });

  // eslint-disable-next-line es/no-math-cosh
  static cosh = defaultValue(Math.cosh, function cosh(value) {
    return (Math.exp(value) + Math.exp(-value)) / 2.0;
  });

  static lerp(p: number, q: number, time: number): number {
    return (1.0 - time) * p + time * q;
  }

  static PI = Math.PI;

  static ONE_OVER_PI = 1.0 / Math.PI;

  static PI_OVER_TWO = Math.PI / 2.0;

  static PI_OVER_THREE = Math.PI / 3.0;

  static PI_OVER_FOUR = Math.PI / 4.0;

  static PI_OVER_SIX = Math.PI / 6.0;

  static THREE_PI_OVER_TWO = (3.0 * Math.PI) / 2.0;

  static TWO_PI = 2.0 * Math.PI;

  static ONE_OVER_TWO_PI = 1.0 / (2.0 * Math.PI);

  static RADIANS_PER_DEGREE = Math.PI / 180.0;

  static DEGREES_PER_RADIAN = 180.0 / Math.PI;

  static RADIANS_PER_ARCSECOND = GMath.RADIANS_PER_DEGREE / 3600.0;

  static toRadians(degrees: number): number {
    //>>includeStart('debug', pragmas.debug);
    if (!defined(degrees)) {
      throw new Error("degrees is required.");
    }
    //>>includeEnd('debug');
    return degrees * GMath.RADIANS_PER_DEGREE;
  }

  static toDegrees(radians: number): number {
    //>>includeStart('debug', pragmas.debug);
    if (!defined(radians)) {
      throw new Error("radians is required.");
    }
    //>>includeEnd('debug');
    return radians * GMath.DEGREES_PER_RADIAN;
  }

  static negativePiToPi(angle: number): number {
    //>>includeStart('debug', pragmas.debug);
    if (!defined(angle)) {
      throw new Error("angle is required.");
    }
    //>>includeEnd('debug');
    if (angle >= -GMath.PI && angle <= GMath.PI) {
      // Early exit if the input is already inside the range. This avoids
      // unnecessary math which could introduce floating point error.
      return angle;
    }
    return GMath.zeroToTwoPi(angle + GMath.PI) - GMath.PI;
  }

  static zeroToTwoPi(angle: number): number {
    //>>includeStart('debug', pragmas.debug);
    if (!defined(angle)) {
      throw new Error("angle is required.");
    }
    //>>includeEnd('debug');
    if (angle >= 0 && angle <= GMath.TWO_PI) {
      // Early exit if the input is already inside the range. This avoids
      // unnecessary math which could introduce floating point error.
      return angle;
    }
    const mod = GMath.mod(angle, GMath.TWO_PI);
    if (Math.abs(mod) < GMath.EPSILON14 && Math.abs(angle) > GMath.EPSILON14) {
      return GMath.TWO_PI;
    }
    return mod;
  }

  static mod(m: number, n: number): number {
    //>>includeStart('debug', pragmas.debug);
    if (!defined(m)) {
      throw new Error("m is required.");
    }
    if (!defined(n)) {
      throw new Error("n is required.");
    }
    if (n === 0.0) {
      throw new Error("divisor cannot be 0.");
    }
    //>>includeEnd('debug');
    if (GMath.sign(m) === GMath.sign(n) && Math.abs(m) < Math.abs(n)) {
      // Early exit if the input does not need to be modded. This avoids
      // unnecessary math which could introduce floating point error.
      return m;
    }

    return ((m % n) + n) % n;
  }

  static equalsEpsilon(
    left: number,
    right: number,
    relativeEpsilon: number,
    absoluteEpsilon: number = relativeEpsilon
  ): boolean {
    //>>includeStart('debug', pragmas.debug);
    if (!defined(left)) {
      throw new Error("left is required.");
    }
    if (!defined(right)) {
      throw new Error("right is required.");
    }
    //>>includeEnd('debug');

    relativeEpsilon = defaultValue(relativeEpsilon, 0.0);
    absoluteEpsilon = defaultValue(absoluteEpsilon, relativeEpsilon);
    const absDiff = Math.abs(left - right);
    return (
      absDiff <= absoluteEpsilon ||
      absDiff <= relativeEpsilon * Math.max(Math.abs(left), Math.abs(right))
    );
  }

  static lessThan(
    left: number,
    right: number,
    absoluteEpsilon: number = 0
  ): boolean {
    //>>includeStart('debug', pragmas.debug);
    if (!defined(left)) {
      throw new Error("first is required.");
    }
    if (!defined(right)) {
      throw new Error("second is required.");
    }
    if (!defined(absoluteEpsilon)) {
      throw new Error("absoluteEpsilon is required.");
    }
    //>>includeEnd('debug');
    return left - right < -absoluteEpsilon;
  }

  static lessThanOrEquals(
    left: number,
    right: number,
    absoluteEpsilon: number = 0
  ): boolean {
    //>>includeStart('debug', pragmas.debug);
    if (!defined(left)) {
      throw new Error("first is required.");
    }
    if (!defined(right)) {
      throw new Error("second is required.");
    }
    if (!defined(absoluteEpsilon)) {
      throw new Error("absoluteEpsilon is required.");
    }
    //>>includeEnd('debug');
    return left - right < absoluteEpsilon;
  }

  static greaterThan(
    left: number,
    right: number,
    absoluteEpsilon: number = 0
  ): boolean {
    //>>includeStart('debug', pragmas.debug);
    if (!defined(left)) {
      throw new Error("first is required.");
    }
    if (!defined(right)) {
      throw new Error("second is required.");
    }
    if (!defined(absoluteEpsilon)) {
      throw new Error("absoluteEpsilon is required.");
    }
    //>>includeEnd('debug');
    return left - right > absoluteEpsilon;
  }

  static greaterThanOrEquals(
    left: number,
    right: number,
    absoluteEpsilon: number = 0
  ): boolean {
    //>>includeStart('debug', pragmas.debug);
    if (!defined(left)) {
      throw new Error("first is required.");
    }
    if (!defined(right)) {
      throw new Error("second is required.");
    }
    if (!defined(absoluteEpsilon)) {
      throw new Error("absoluteEpsilon is required.");
    }
    //>>includeEnd('debug');
    return left - right > -absoluteEpsilon;
  }

  static isPowerOfTwo(n: number): boolean {
    //>>includeStart('debug', pragmas.debug);
    if (typeof n !== "number" || n < 0 || n > 4294967295) {
      throw new Error("A number between 0 and (2^32)-1 is required.");
    }
    //>>includeEnd('debug');

    return n !== 0 && (n & (n - 1)) === 0;
  }

  static nextPowerOfTwo(n: number): number {
    //>>includeStart('debug', pragmas.debug);
    if (typeof n !== "number" || n < 0 || n > 2147483648) {
      throw new Error("A number between 0 and 2^31 is required.");
    }
    //>>includeEnd('debug');

    // From http://graphics.stanford.edu/~seander/bithacks.html#RoundUpPowerOf2
    --n;
    n |= n >> 1;
    n |= n >> 2;
    n |= n >> 4;
    n |= n >> 8;
    n |= n >> 16;
    ++n;

    return n;
  }

  static previousPowerOfTwo(n: number): number {
    //>>includeStart('debug', pragmas.debug);
    if (typeof n !== "number" || n < 0 || n > 4294967295) {
      throw new Error("A number between 0 and (2^32)-1 is required.");
    }
    //>>includeEnd('debug');

    n |= n >> 1;
    n |= n >> 2;
    n |= n >> 4;
    n |= n >> 8;
    n |= n >> 16;
    n |= n >> 32;

    // The previous bitwise operations implicitly convert to signed 32-bit. Use `>>>` to convert to unsigned
    n = (n >>> 0) - (n >>> 1);

    return n;
  }

  static clamp(value: number, min: number, max: number): number {
    return value < min ? min : value > max ? max : value;
  }

  static nextRandomNumber = function (): number {
    return randomNumberGenerator.random();
  };

  static randomBetween = function (min: number, max: number): number {
    return GMath.nextRandomNumber() * (max - min) + min;
  };

  static acosClamped = function (value: number): number {
    //>>includeStart('debug', pragmas.debug);
    if (!defined(value)) {
      throw new Error("value is required.");
    }
    //>>includeEnd('debug');
    return Math.acos(GMath.clamp(value, -1.0, 1.0));
  };

  static asinClamped = function (value: number): number {
    //>>includeStart('debug', pragmas.debug);
    if (!defined(value)) {
      throw new Error("value is required.");
    }
    //>>includeEnd('debug');
    return Math.asin(GMath.clamp(value, -1.0, 1.0));
  };

  static chordLength = function (angle: number, radius: number): number {
    //>>includeStart('debug', pragmas.debug);
    if (!defined(angle)) {
      throw new Error("angle is required.");
    }
    if (!defined(radius)) {
      throw new Error("radius is required.");
    }
    //>>includeEnd('debug');
    return 2.0 * radius * Math.sin(angle * 0.5);
  };

  static logBase = function (number: number, base: number): number {
    //>>includeStart('debug', pragmas.debug);
    if (!defined(number)) {
      throw new Error("number is required.");
    }
    if (!defined(base)) {
      throw new Error("base is required.");
    }
    //>>includeEnd('debug');
    return Math.log(number) / Math.log(base);
  };

  // eslint-disable-next-line es/no-math-cbrt
  static cbrt = defaultValue(Math.cbrt, function cbrt(number) {
    const result = Math.pow(Math.abs(number), 1.0 / 3.0);
    return number < 0.0 ? -result : result;
  });
  // eslint-disable-next-line es/no-math-log2
  static log2 = defaultValue(Math.log2, function log2(number) {
    return Math.log(number) * Math.LOG2E;
  });

  /**
   * @private
   */
  static fog(distanceToCamera: number, density: number): number {
    const scalar = distanceToCamera * density;
    return 1.0 - Math.exp(-(scalar * scalar));
  }
}
let randomNumberGenerator = new MersenneTwister();
const factorials = [1];
export default GMath;

function defaultValue(a, b) {
	if (a !== undefined && a !== null) {
		return a;
	}
	return b;
}

/**
 * A frozen empty object that can be used as the default value for options passed as
 * an object literal.
 * @type {Object}
 * @memberof defaultValue
 */
defaultValue.EMPTY_OBJECT = Object.freeze({});

export default defaultValue;

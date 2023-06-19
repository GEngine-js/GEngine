import { Attribute, AttributeType, InterleavedAttribute } from "./Attribute";
export default class Attributes {
	public interleave: boolean;
	private _attributes: Map<string, Attribute | InterleavedAttribute>;
	private shaderLocation: number;
	private offset: number;
	constructor() {
		this._attributes = new Map();
		this.shaderLocation = 0;
		this.offset = 0;
		this.interleave = false;
	}
	getAttribute(name): Attribute | InterleavedAttribute {
		return this._attributes.get(name);
	}
	setAttribute(attribute: Attribute | InterleavedAttribute) {
		if (attribute.attributeType === AttributeType.attribute) {
			this.setNotInterleavedAttribute(attribute as Attribute);
		} else {
			this.setInterleavedAttribute(attribute as InterleavedAttribute);
		}
	}
	private setNotInterleavedAttribute(attribute: Attribute) {
		if (this._attributes.has(attribute.name)) return;
		attribute.shaderLocation = this.shaderLocation;
		this.shaderLocation += 1;
		attribute.offset = this.offset;
		this.offset += attribute.attributeByteSize;
		this._attributes.set(attribute.name, attribute);
	}
	private setInterleavedAttribute(attribute: InterleavedAttribute) {
		if (this._attributes.has(attribute.names.toString())) return;
		this._attributes.set(attribute.names.toString(), attribute);
	}
	getGPUAttributes() {
		const result = [];
		this._attributes.forEach((attribute) => {
			result.push(...attribute.getGPUAttribute());
		});
		return result;
	}
	getAtrributeValues(): {
		arrayStride: number;
		typeArray: Float32Array;
	} {
		const arrayStrides = [];
		let arrayStride = 0;
		let values = null;
		const arrays = [];
		this._attributes.forEach((attribute: Attribute | InterleavedAttribute) => {
			if (attribute.attributeType === AttributeType.attribute) {
				arrayStrides.push((attribute as Attribute).itemSize);
				arrays.push(attribute.value);
				arrayStride += (attribute as Attribute).itemSize;
			} else {
				if (!this.interleave) this.interleave = true;
				values = values ?? attribute.value;
				arrayStride = (attribute as InterleavedAttribute).itemSizes.reduce(
					(total, current) => (total += current),
					0
				);
			}
		});

		const typeArray = this.interleave
			? new Float32Array(values)
			: this.interleaveTypedArray(Float32Array, arrayStrides, ...arrays);
		return {
			arrayStride: arrayStride * typeArray.BYTES_PER_ELEMENT,
			typeArray
		};
	}
	destroy() {
		this._attributes.forEach((attribute) => {
			attribute.destroy();
		});
	}
	/**
	 * Interleave n typed arrays
	 * @alias module:interleaveTypedArray
	 * @param {TypedArray} ResultConstructor Returned typed array constructor
	 * @param {Array} elements Number of elements to group for each typed array
	 * @param {...TypedArray} arrays Arrays to interleave
	 * @returns {TypedArray}
	 */
	interleaveTypedArray(ResultConstructor, elements, ...arrays) {
		const totalLength = arrays.reduce((total, arr) => total + arr.length, 0);
		const result = new ResultConstructor(totalLength);
		const stride = elements.reduce((a, b) => a + b);

		for (let i = 0; i < totalLength; i++) {
			let offset = 0;
			for (let j = 0; j < elements.length; j++) {
				for (let k = 0; k < elements[j]; k++) {
					result[i * stride + offset] = arrays[j][elements[j] * i + k];
					offset++;
				}
			}
		}
		return result;
	}
}

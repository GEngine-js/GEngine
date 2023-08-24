import { TypedArray } from "../core/WebGPUTypes";

export function isTypeArray(array): array is TypedArray {
	return array.buffer != undefined;
}

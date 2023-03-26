export class AnimationSampler {
	input: any;
	interpolation: "LINEAR" | "STEP" | "CUBICSPLINE";
	output: any;
	extensions: any;
	extras: any;
	keyFrameIndices: Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array;
	keyFrameRaw: Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array;
	keyFrames: {
		src: Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array;
		dst: Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array;
	};
	currentIndex: number;
	startTime: number;
	endTime: number;
	duration: number;
	constructor() {}
	updateKeyFrames(time: number): void {
		// while (this.currentIndex < this.keyFrameIndices.length - 2 && time >= this.keyFrameIndices[this.currentIndex + 1]) {
		// 	this.currentIndex++;
		// }
		// const byteLength = glTFLoaderBasic.accessorTypeToNumComponents(this.output.type);
		// this.keyFrames.src = this.keyFrameRaw.slice(this.currentIndex * byteLength, (this.currentIndex + 1) * byteLength);
		// this.keyFrames.dst = this.keyFrameRaw.slice((this.currentIndex + 1) * byteLength, (this.currentIndex + 2) * byteLength);
		// if (time >= this.endTime) {
		// 	this.currentIndex = 0;
		// }
	}
}

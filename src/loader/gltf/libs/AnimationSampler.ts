import { Quaternion } from "../../../math/Quaternion";
import Vector4 from "../../../math/Vector4";
import { GLTF, Type2NumOfComponent } from "../../GLTFLoader";

export class AnimationSampler {
	input: any;
	interpolation: "LINEAR" | "STEP" | "CUBICSPLINE";
	output: any;
	currentIndex: number;
	startTime: number;
	endTime: number;
	currentValue: Vector4 | Quaternion;
	duration: number;
	inputMax: number;
	private inputType: string;
	private outputType: string;
	constructor() {}
	formGltf(gltf: GLTF, sampler) {
		this.input = gltf.accessors[sampler.input].values; //required, accessor object
		this.output = gltf.accessors[sampler.output].values; //required, accessor object
		this.interpolation = sampler.interpolation !== undefined ? sampler.interpolation : "LINEAR";
		this.currentIndex = 0;
		// this.currentValue=new Vector4();
		this.endTime = this.input[this.input.length - 1];
		this.inputMax = this.endTime - this.input[0];
		this.inputType = gltf?.json?.accessors[sampler.input]?.type;
		this.outputType = gltf?.json?.accessors[sampler.output]?.type;
	}
	getValue(time: number): void {
		if (time > this.endTime) {
			time -= this.inputMax * Math.ceil((time - this.endTime) / this.inputMax);
			this.currentIndex = 0;
		}

		const len = this.input.length;
		while (this.currentIndex <= len - 2 && time >= this.input[this.currentIndex + 1]) {
			this.currentIndex++;
		}

		if (this.currentIndex >= len - 1) {
			// loop
			time -= this.inputMax;
			this.currentIndex = 0;
		}

		// @tmp: assume no stride
		const count = Type2NumOfComponent[this.outputType];

		const animationOutputValueVec4a = count === 4 ? new Quaternion() : new Vector4();
		const animationOutputValueVec4b = count === 4 ? new Quaternion() : new Vector4();
		if (!this.currentValue) this.currentValue = count === 4 ? new Quaternion() : new Vector4();
		const i = this.currentIndex;
		const o = i * count;
		const on = o + count;

		const u = Math.max(0, time - this.input[i]) / (this.input[i + 1] - this.input[i]);
		animationOutputValueVec4a.set(this.output[o + 0], this.output[o + 1], this.output[o + 2], this.output[o + 3]);
		animationOutputValueVec4b.set(
			this.output[on + 0],
			this.output[on + 1],
			this.output[on + 2],
			this.output[on + 3]
		);
		switch (this.interpolation) {
			case "LINEAR":
				count === 4
					? Quaternion.slerp(
							<Quaternion>animationOutputValueVec4a,
							<Quaternion>animationOutputValueVec4b,
							u,
							<Quaternion>this.currentValue
					  )
					: Vector4.lerp(
							<Vector4>animationOutputValueVec4a,
							<Vector4>animationOutputValueVec4b,
							u,
							<Vector4>this.currentValue
					  );
				break;
			default:
				break;
		}
	}
}

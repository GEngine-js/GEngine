import { Light } from "./Light";

export class SpotLight extends Light{
    distance: number;
    angle: number;
    penumbra: number;
    decay: number;
    constructor(color, intensity, distance = 0, angle = Math.PI / 3, penumbra = 0, decay = 1){
        super(color, intensity);
        this.distance=distance;
        this.angle=angle;
        this.penumbra=penumbra;
        this.decay=decay;
    }
}
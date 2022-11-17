import Color from "../math/Color";
import Vector3 from "../math/Vector3";
import Texture from "../render/Texture";
import { Material } from "./Material";

export default class PbrMaterial extends Material{

    public baseTexture:Texture;

    public normalTexture:Texture;

    public aoTexture:Texture;

    public specularTexture:Texture;

    public alphaTexture:Texture;

    public envTexture:Texture;

    public emissiveTexture:Texture;

    public roughnessMap:Texture;

    roughness: number;

    metalness: number;

    diffuse:Color;

    emissive:Color;

    constructor(){
        super();
        this.roughness = 1.0;
		this.metalness = 0.0;
    }
    update(){

    }
    destroy(){}
}
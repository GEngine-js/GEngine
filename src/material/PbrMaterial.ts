import Color from "../math/Color";
import Vector2 from "../math/Vector2";
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

    public roughnessTexture:Texture;

    public boneTexture:Texture;

    public displacementTexture:Texture;

    public morphTargetsTexture:Texture;

    public transmissionTexture:Texture;

    public thicknessTexture:Texture;

    public transmissionSamplerMapTexture:Texture;

    public clearcoatTexture:Texture;

    public clearcoatRoughnessTexture:Texture;

    public clearcoatNormalTexture:Texture;

    public iridescenceTexture:Texture;

    public iridescenceThicknessTexture:Texture;

    public metalnessTexture:Texture;

    public specularIntensityTexture:Texture;

    public specularColorTexture:Texture;

    public sheenColorTexture:Texture;

    public sheenRoughnessTexture:Texture;

    public lightTexture:Texture;

    private _roughness: number;

    private _metalness: number;

    private _diffuse:Color;

    private _emissive:Color;

    private _lightTextureIntensity: number;

    private _emissiveIntensity: number;

    private _aoTextureIntensity: number;

    private _bumpScale: number;

    private _normalScale: Vector2;

    private _displacementScale: number;

    private _displacementBias: number;

    private _envTextureIntensity: number;

    private _flatShading: boolean;

    private _clearcoatRoughness: number;

    private _clearcoatNormalScale: Vector2;

    private _ior: number;

    private _iridescenceIOR: number;

    private _iridescenceThicknessRange: number[];

    private _sheenColor: Color;

    private _thickness: number;

    private _sheenRoughness: number;

    private _attenuationDistance: number;

    private _attenuationColor: Color;

    private _specularIntensity: number;

    private _specularColor: Color;

    private _sheen: number;

    private _clearcoat: number;

    private _iridescence: number;

    private _transmission: number;

    constructor(){

        super();

        this._roughness = 1.0;

		this._metalness = 0.0;

        this._lightTextureIntensity = 1.0;

        this._aoTextureIntensity=1.0;

        this._emissiveIntensity = 1.0;

        this._bumpScale = 1;

        this._normalScale = new Vector2( 1, 1 );

        this._displacementScale = 1;

		this._displacementBias = 0;

        this._envTextureIntensity = 1.0;

        this._flatShading = false;

		this._clearcoatRoughness = 0.0;

		this._clearcoatNormalScale = new Vector2( 1, 1 );

        this._ior = 1.5;
 
		this._iridescenceIOR = 1.3;

		this._iridescenceThicknessRange = [ 100, 400 ];

		this._sheenColor = new Color( 0x000000 );

		this._sheenRoughness = 1.0;

		this._thickness = 0;
        
		this._attenuationDistance = 0.0;

		this._attenuationColor = new Color( 1, 1, 1 );

		this._specularIntensity = 1.0;

		this._specularColor = new Color( 1, 1, 1 );

		this._sheen = 0.0;

		this._clearcoat = 0;

		this._iridescence = 0;

		this._transmission = 0;

    }
    update(){

    }
    destroy(){

    }
}
import { FrameState } from "../core/FrameState";
import Color from "../math/Color";
import Vector2 from "../math/Vector2";
import Vector3 from "../math/Vector3";
import { Mesh } from "../mesh/Mesh";
import Texture from "../render/Texture";
import { UniformColor, UniformFloat, UniformMat4, UniformTexture } from "../render/Uniforms";
import { Material } from "./Material";

export default class PbrMaterial extends Material{


    public boneTexture:Texture;

    public morphTargetsTexture:Texture;

    public transmissionTexture:Texture;

    public thicknessTexture:Texture;

    public transmissionSamplerMapTexture:Texture;

    public clearcoatTexture:Texture;

    public clearcoatRoughnessTexture:Texture;

    public clearcoatNormalTexture:Texture;

    public iridescenceTexture:Texture;

    public iridescenceThicknessTexture:Texture;

    public specularIntensityTexture:Texture;

    public specularColorTexture:Texture;

    public sheenColorTexture:Texture;

    public sheenRoughnessTexture:Texture;

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
    uniformTotalByte: number;
    textureBindingCount: number;

    
    public get clearcoatRoughness() : number {
        return this._clearcoatRoughness
    }
    
    public set clearcoatRoughness(v : number) {
        this._clearcoatRoughness = v;
    }
    
    public get clearcoatNormalScale() : Vector2 {
        return this._clearcoatNormalScale
    }
    
    public set clearcoatNormalScale(v : Vector2) {
        this._clearcoatNormalScale = v;
    }
    
    public get ior() : number {
        return this._ior
    }
    
    public set ior(v : number) {
        this._ior = v;
    }
    
    public get iridescenceIOR() : number {
        return this._iridescenceIOR
    }
    
    public set iridescenceIOR(v : number) {
        this._iridescenceIOR = v;
    }
    
    public get iridescenceThicknessRange() : number[] {
        return this._iridescenceThicknessRange
    }
    
    public set iridescenceThicknessRange(v : number[]) {
        this._iridescenceThicknessRange = v;
    }
    
    public get sheenColor() : Color {
        return this._sheenColor
    }
    
    public set sheenColor(v : Color) {
        this._sheenColor = v;
    }
    
    public get thickness() : number {
        return this._thickness
    }
    
    public set thickness(v : number) {
        this._thickness = v;
    }
    
    public get sheenRoughness() : number {
        return this._sheenRoughness
    }
    
    public set sheenRoughness(v : number) {
        this._sheenRoughness = v;
    }
    
    public get attenuationDistance() : number {
        return this._attenuationDistance
    }
    
    public set attenuationDistance(v : number) {
        this._attenuationDistance = v;
    }
    
    public get attenuationColor() : Color {
        return this._attenuationColor
    }
    
    public set attenuationColor(v : Color) {
        this._attenuationColor = v;
    }
    
    public get specularIntensity() : number {
        return this._specularIntensity;
    }
    
    public set specularIntensity(v : number) {
        this._specularIntensity = v;
    }
    
    public get specularColor() : Color {
        return this._specularColor
    }
    
    public set specularColor(v : Color) {
        this._specularColor = v;
    }
    
    public get sheen() : number {
        return this._sheen
    }
    
    public set sheen(v : number) {
        this._sheen = v;
    }
    
    public get clearcoat() : number {
        return this._clearcoat
    }
    
    public set clearcoat(v : number) {
        this._clearcoat = v;
    }
    
    public get iridescence() : number {
        return this._iridescence
    }
    
    public set iridescence(v : number) {
        this._iridescence = v;
    }
    
    public get transmission() : number {
        return this._transmission
    }
    
    public set transmission(v : number) {
        this._transmission = v;
    }
    
    
    constructor(){

        super();

		this._specularIntensity = 1.0;

		this._specularColor = new Color( 1, 1, 1 );

/*****************************clearcoat*********************************/
		this._clearcoat = 0;

        this._clearcoatRoughness = 0.0;

		this._clearcoatNormalScale = new Vector2( 1, 1 );

        this.clearcoatTexture=undefined;

        this.clearcoatRoughnessTexture=undefined;

        this.clearcoatNormalTexture=undefined;
/**************************************************************/

/*****************************iridescence*********************************/
		this._iridescence = 0;

        this._ior = 1.5;
 
		this._iridescenceIOR = 1.3;

		this._iridescenceThicknessRange = [ 100, 400 ];

        this.iridescenceTexture=undefined;

        this.iridescenceThicknessTexture=undefined;
/**************************************************************/


/*****************************sheen*********************************/
		this._sheenColor = new Color( 0x000000 );

		this._sheenRoughness = 1.0;

		this._sheen = 0.0;

        this.sheenColorTexture=undefined;

        this.sheenRoughnessTexture=undefined;
/**************************************************************/

		this._transmission = 0;

        this._thickness = 0;
        
		this._attenuationDistance = 0.0;

		this._attenuationColor = new Color( 1, 1, 1 );

        this.transmissionTexture=undefined;

        this.transmissionSamplerMapTexture=undefined;

    }
    update(frameState:FrameState,mesh:Mesh){

    }
    private createUniforms(mesh:Mesh){
        let totalUniformSize=this.getUniformSize();
        this.uniformsDataBuffer=new Float32Array(totalUniformSize);
        let byteOffset=0;
        if (this.sheenRoughnessTexture) {
            this.uniforms.push(new UniformTexture('sheenRoughnessTexture',this.textureBindingCount,this));
            this.defines.sheenRoughnessTextureBinding=this.textureBindingCount;
            this.textureBindingCount+=1;
        }

        if (this.sheenColorTexture) {
            this.uniforms.push(new UniformTexture('sheenColorTexture',this.textureBindingCount,this));
            this.defines.sheenColorTextureBinding=this.textureBindingCount;
            this.textureBindingCount+=1;
        }
        if (this.thicknessTexture) {
            this.uniforms.push(new UniformTexture('thicknessTexture',this.textureBindingCount,this));
            this.defines.thicknessTextureBinding=this.textureBindingCount;
            this.textureBindingCount+=1;
        }
        if(this.transmissionSamplerMapTexture){
            this.uniforms.push(new UniformTexture('transmissionSamplerMapTexture',this.textureBindingCount,this));
            this.defines.transmissionSamplerMapTextureBinding=this.textureBindingCount;
            this.textureBindingCount+=1;
        }
        if (this.clearcoatTexture) {
            this.uniforms.push(new UniformTexture('clearcoatTexture',this.textureBindingCount,this));
            this.defines.clearcoatTextureBinding=this.textureBindingCount;
            this.textureBindingCount+=1;
        }
        if ( this.clearcoatRoughnessTexture) {
           this.uniforms.push(new UniformTexture('clearcoatRoughnessTexture',this.textureBindingCount,this));
           this.defines.clearcoatRoughnessTextureBinding=this.textureBindingCount;
           this.textureBindingCount+=1;
		}
        if ( this.clearcoatNormalTexture ) {
            this.uniforms.push(new UniformTexture('clearcoatNormalTexture',this.textureBindingCount,this));
            this.defines.clearcoatNormalTextureBinding=this.textureBindingCount;
            this.textureBindingCount+=1;
		}
        if ( this.iridescenceTexture ) {
            this.uniforms.push(new UniformTexture('iridescenceTexture',this.textureBindingCount,this));
            this.defines.iridescenceTextureBinding=this.textureBindingCount;
            this.textureBindingCount+=1
		}
        if ( this.iridescenceThicknessTexture ) {
             this.uniforms.push(new UniformTexture('iridescenceThicknessTexture',this.textureBindingCount,this));
             this.defines.iridescenceThicknessTextureBinding=this.textureBindingCount;
             this.textureBindingCount+=1;
		}
        if ( this.specularIntensityTexture ) {
            this.uniforms.push(new UniformTexture('specularIntensityTexture',this.textureBindingCount,this));
            this.defines.specularIntensityTextureBinding=this.textureBindingCount;
            this.textureBindingCount+=1;
		}
        if (this.specularColorTexture ) {
            this.uniforms.push(new UniformTexture('specularColorTexture',this.textureBindingCount,this));
            this.defines.specularColorTextureBinding=this.textureBindingCount;
            this.textureBindingCount+=1;
		}
        this.uniformTotalByte=Math.ceil(byteOffset/64)*64;
    }
    destory(){

    }

}
// {
//     clearcoat: { value: 0 },
//     clearcoatRoughness: { value: 0 },
//     clearcoatNormalScale: { value: /*@__PURE__*/ new Vector2( 1, 1 ) },
//     iridescence: { value: 0 },
//     iridescenceIOR: { value: 1.3 },
//     iridescenceThicknessMinimum: { value: 100 },
//     iridescenceThicknessMaximum: { value: 400 },
//     sheen: { value: 0 },
//     sheenColor: { value: /*@__PURE__*/ new Color( 0x000000 ) },
//     sheenRoughness: { value: 1 },
//     transmission: { value: 0 },
//     transmissionSamplerSize: { value: /*@__PURE__*/ new Vector2() },
//     thickness: { value: 0 },
//     attenuationDistance: { value: 0 },
//     attenuationColor: { value: /*@__PURE__*/ new Color( 0x000000 ) },
//     specularIntensity: { value: 1 },
//     specularColor: { value: /*@__PURE__*/ new Color( 1, 1, 1 ) },
// }
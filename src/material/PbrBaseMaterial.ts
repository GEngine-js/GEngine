import { FrameState } from "../core/FrameState";
import Color from "../math/Color";
import GMath from "../math/Math";
import Vector2 from "../math/Vector2";
import { Mesh } from "../mesh/Mesh";
import Context from "../render/Context";
import Texture from "../render/Texture";
import { Material } from "./Material";
import { ShaderSource } from "../shader/ShaderSource";
import { CullMode } from "../core/WebGPUConstant";

export default class PbrBaseMaterial extends Material {

    public bumpTexture: Texture;

    public normalTexture: Texture;

    public aoTexture: Texture;

    public specularTexture: Texture;

    public alphaTexture: Texture;

    public envTexture: Texture;

    public emissiveTexture: Texture;

    public roughnessTexture: Texture;

    public displacementTexture: Texture;

    public metalnessTexture: Texture;

    public lightTexture: Texture;

    private _roughness: number;

    private _metalness: number;

    private _lightTextureIntensity: number;

    private _aoTextureIntensity: number;

    private _bumpScale: number;

    private _normalScale: Vector2;

    private _displacementScale: number;

    private _displacementBias: number;

    private _envTextureIntensity: number;

    private _flatShading: boolean;

    private _ior: number;

    private _flipEnvTexture: number;

    public get roughness(): number {
        return this._roughness
    }
    public set roughness(value) {
        this._roughness = value;
    }
    public get metalness(): number {
        return this._metalness
    }
    public set metalness(v: number) {
        this._metalness = v;
    }
    public get lightTextureIntensity(): number {
        return this._lightTextureIntensity
    }
    public set lightTextureIntensity(v: number) {
        this._lightTextureIntensity = v;
    }
    public get aoTextureIntensity(): number {
        return this._aoTextureIntensity
    }
    public set aoTextureIntensity(v: number) {
        this._aoTextureIntensity = v;
    }
    public get bumpScale(): number {
        if (this.renderState && this.renderState.primitive) {
            if (this.renderState.primitive.cullMode == CullMode.Back) return this._bumpScale * -1;
        }
        return this._bumpScale;
    }
    public set bumpScale(v: number) {
        this._bumpScale = v;
    }
    public get normalScale(): Vector2 {
        if (this.renderState && this.renderState.primitive) {
            if (this.renderState.primitive.cullMode == CullMode.Back) {
                return Vector2.negate(this._normalScale, new Vector2());
            };
        }
        return this._normalScale
    }
    public set normalScale(v: Vector2) {
        this._normalScale = v;
    }
    public get displacementScale(): number {
        return this._displacementScale
    }
    public set displacementScale(v: number) {
        this._displacementScale = v;
    }
    public get displacementBias(): number {
        return this._displacementBias
    }
    public set displacementBias(v: number) {
        this._displacementBias = v;
    }
    public get envTextureIntensity(): number {
        return this._envTextureIntensity
    }
    public set envTextureIntensity(v: number) {
        this._envTextureIntensity = v;
    }
    public get flatShading(): boolean {
        return this._flatShading
    }
    public set flatShading(v: boolean) {
        this._flatShading = v;
    }
    public get ior(): number {
        return this._ior
    }
    public set ior(v: number) {
        this._ior = v;
    }
    public get reflectivity(): number {
        return (GMath.clamp(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1));
    }
    public set reflectivity(v: number) {
        this.ior = (1 + 0.4 * v) / (1 - 0.4 * v);
    }
    public get flipEnvTexture(): number {
        return this._flipEnvTexture
    }
    public set flipEnvTexture(v: number) {
        this._flipEnvTexture = v;
    }

    constructor() {
        super();
        this.type = 'pbr';

        this._roughness = 0.1;

        this._metalness = 0.1;

        this._lightTextureIntensity = 1.0;

        this._aoTextureIntensity = 1.0;

        this._bumpScale = 1;

        this._normalScale = new Vector2(1, 1);

        this._displacementScale = 1;

        this._displacementBias = 0;

        this._envTextureIntensity = 1.0;

        this._flatShading = false;

        this._ior = 1.5;

        // uniforms.flipEnvMap.value = ( envMap.isCubeTexture && envMap.isRenderTargetTexture === false ) ? - 1 : 1;
        this._flipEnvTexture = -1;

        this.shaderSource = new ShaderSource({
            type: this.type,
            render: true,
            defines: {
                materialPbr: true
            }
        });
        //this.shaderData.setDefine('materialPbr',true);
        // uniforms.reflectivity.value = material.reflectivity;
        // uniforms.ior.value = material.ior;
        // uniforms.refractionRatio.value = material.refractionRatio;
    }
    update(frameState: FrameState, mesh: Mesh) {
        if (!this.shaderData) {
            this.createShaderData(mesh, frameState);
        }
        this.updateShaderAndRenderState(frameState, mesh);
    }
    protected createShaderData( mesh: Mesh, frameState?: FrameState) {

        super.createShaderData(mesh);

        this.shaderData.setFloat("roughness", this);
        this.shaderData.setFloat("metalness", this);

        if (this.baseTexture) {
            this.shaderData.setDefine('USE_TEXTURE', true);
            this.shaderData.setTexture('baseTexture', this);
            this.shaderData.setSampler('baseSampler', this);
        }
        if (this.metalnessTexture) {
            this.shaderData.setDefine('USE_METALNESSTEXTURE', true);
            this.shaderData.setTexture('metalnessTexture', this);
        }
        if (this.roughnessTexture) {
            this.shaderData.setDefine('USE_ROUGHNESSTEXTURE', true);
            this.shaderData.setTexture('roughnessTexture', this);
        }
        if (this.bumpTexture) {
            //if ( material.side === BackSide ) uniforms.bumpScale.value *= - 1;
            this.shaderData.setFloat("bumpScale", this);
            this.shaderData.setDefine('USE_BUMPTEXTURE', true);
            this.shaderData.setTexture('bumpTexture', this);
        }
        if (this.aoTexture) {
            this.shaderData.setDefine('USE_AOTEXTURE', true);
            this.shaderData.setDefine('vUv2OutLocation', 4);
            this.shaderData.setFloat("aoMapIntensity", this);
            this.shaderData.setTexture('aoTexture', this);
        }
        if (this.lightTexture) {
            // artist-friendly light intensity scaling factor
            //const scaleFactor = ( renderer.physicallyCorrectLights !== true ) ? Math.PI : 1;
            //uniforms.lightMapIntensity.value = material.lightMapIntensity * scaleFactor;
            this.shaderData.setFloat("lightMapIntensity", this);
            this.shaderData.setDefine('USE_LIGHTTEXTURE', true);
            this.shaderData.setDefine('vUv2OutLocation', 4);
            this.shaderData.setTexture('lightTexture', this);
        }
        if (this.displacementTexture) {
            this.shaderData.setFloat("displacementBias", this);

            this.shaderData.setFloat("displacementScale", this);
            this.shaderData.setDefine('USE_DISPLACEMENTTEXTURE', true);
            this.shaderData.setTexture('displacementTexture', this);
        }
        if (this.normalTexture) {
            // uniforms.normalScale.value.copy( material.normalScale );
            // if ( material.side === BackSide ) uniforms.normalScale.value.negate();
            this.shaderData.setFloatVec2("normalScale", this);
            this.shaderData.setDefine('USE_NORMALTEXTURE', true);
            this.shaderData.setTexture('normalTexture', this);
        }
        if (frameState.environment) {
            // uniforms.flipEnvMap.value = ( envMap.isCubeTexture && envMap.isRenderTargetTexture === false ) ? - 1 : 1;
            // uniforms.refractionRatio.value = material.refractionRatio;
            this.shaderData.setFloat("flipEnvTexture", this);
            this.shaderData.setDefine('USE_ENVTEXTURE', true);

            this.shaderData.setDefine('ENVTEXTURE_TYPE_CUBE_UV', true);
            this.shaderData.setFloat("ior", this);

            this.shaderData.setFloat("reflectivity", this);
            this.shaderData.setTexture('envTexture', () => {
                return frameState.environment;
            });
        }
        if (this.emissiveTexture) {
            this.shaderData.setDefine('USE_EMISSIVETEXTURE', true);
            this.shaderData.setTexture('emissiveTexture', this)
        }
    }
    destory() {

    }
}
// const defines={
//     USE_COLOR_ALPHA:false,
//     USE_COLOR:false,
//     USE_INSTANCING_COLOR:false,
//     USE_SKINNING:false,
//     USE_DISPLACEMENTMAP:false,
//     USE_MORPHTARGETS:false,
//     MORPHTARGETS_TEXTURE:false,
//     USE_INSTANCING:false,
//     USE_TANGENT:false,
//     USE_MORPHNORMALS:false,
//     USE_UV:false,
//     USE_MORPHCOLORS:false,
//     FLIP_SIDED:false,
//     FLAT_SHADED:false,
//     USE_ENVMAP:false,
//     DISTANCE:false,
//     USE_TRANSMISSION:false,
//     SPECULAR:false,////////
//     USE_SHEEN:false,
//     USE_CLEARCOAT_NORMALMAP:false,
//     USE_NORMALMAP:false,
//     IOR:false,
//     USE_CLEARCOAT:false,
//     USE_IRIDESCENCE:false,
//     OBJECTSPACE_NORMALMAP:false,
//     USE_ALPHATEST:false,
//     STANDARD:false,
//     DITHERING:false,
//     ENVMAP_TYPE_CUBE_UV:false,
//     ENVMAP_TYPE_CUBE:false,
//     USE_BUMPMAP:false,
//     TANGENTSPACE_NORMALMAP:false,
//     USE_MAP:false,
//     DECODE_VIDEO_TEXTURE:false,
//     USE_ROUGHNESSMAP:false,
//     USE_METALNESSMAP:false,
//     DOUBLE_SIDED:false,
//     USE_EMISSIVEMAP:false,
//     USE_SPECULARINTENSITYMAP:false,
//     USE_SPECULARCOLORMAP:false,
//     USE_CLEARCOATMAP:false,
//     USE_CLEARCOAT_ROUGHNESSMAP:false,
//     USE_IRIDESCENCEMAP:false,
//     USE_IRIDESCENCE_THICKNESSMAP:false,
//     USE_SHEENCOLORMAP:false,
//     USE_SHEENROUGHNESSMAP:false,
//     USE_TRANSMISSIONMAP:false,
//     USE_THICKNESSMAP:false,
//     TONE_MAPPING:false,
//     PREMULTIPLIED_ALPHA:false,

//     USE_LIGHTMAP:false,
//     USE_AOMAP:false,
//     uv2Location:0,
//     instanceMatrixLocation:1,
//     instanceColorLocation:2,
//     tangentLocation:3,
//     colorLocation:4,
//     morphTarget0Location:5,
//     morphTarget1Location:6,
//     morphTarget2Location:7,
//     morphTarget3Location:8,
//     morphNormal0Location:9,
//     morphNormal1Location:10,
//     morphNormal2Location:11,
//     morphNormal3Location:12,
//     morphTarget4Location:13,
//     morphTarget5Location:14,
//     morphTarget6Location:15,
//     morphTarget7Location:16,
//     skinIndexLocation:17,
//     skinWeightLocation:18,
//     //vert
//     samplerBinding:0,
//     boneTextureBinding:1,
//     displacementMapBinding:2,
//     morphTargetsTextureBinding:3,

//     //frag
//     transmissionMapBinding:0,
//     thicknessMapBinding:1,
//     transmissionSamplerMapBinding:2,
//     envMapBinding:3,
//     normalMapBinding:4,
//     clearcoatMapBinding:5,
//     clearcoatRoughnessMapBinding:6,
//     clearcoatNormalMapBinding:7,
//     iridescenceMapBinding:8,
//     iridescenceThicknessMapBinding:9,
//     roughnessMapBinding:10,
//     metalnessMapBinding:11,
//     specularIntensityMapBinding:12,
//     specularColorMapBinding:13,
//     sheenColorMapBinding:14,
//     sheenRoughnessMapBinding:15,
//     baseTextureBinding:16,
//     alphaMapBinding:17,
//     aoMapBinding:18,
//     lightMapBinding:19,
//     emissiveMapBinding:20,
// }
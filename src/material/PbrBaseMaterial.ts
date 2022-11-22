import { FrameState } from "../core/FrameState";
import Color from "../math/Color";
import GMath from "../math/Math";
import Vector2 from "../math/Vector2";
import { Mesh } from "../mesh/Mesh";
import Context from "../render/Context";
import Texture from "../render/Texture";
import { UniformColor, UniformFloatVec3, UniformMat4, UniformFloat, UniformTexture } from "../render/Uniforms";
import { Material } from "./Material";
import Buffer from '../render/Buffer';

export default class PbrBaseMaterial extends Material{
    public baseTexture:Texture;

    public bumpTexture:Texture;

    public normalTexture:Texture;

    public aoTexture:Texture;

    public specularTexture:Texture;

    public alphaTexture:Texture;

    public envTexture:Texture;

    public emissiveTexture:Texture;

    public roughnessTexture:Texture;

    public displacementTexture:Texture;

    public metalnessTexture:Texture;

    public specularIntensityTexture:Texture;

    public specularColorTexture:Texture;

    public lightTexture:Texture;
    private uniformTotalByte: number;
    private _roughness: number;
    private _metalness: number;
    private _lightTextureIntensity: number;
    private _aoTextureIntensity: number;
    private _emissiveIntensity: number;
    private _bumpScale: number;
    private _normalScale: Vector2;
    private _displacementScale: number;
    private _displacementBias: number;
    private _envTextureIntensity: number;
    private _flatShading: boolean;
    private _diffuse:Color;
    private _emissive:Color;
    private _ior: number;
    private _flipEnvTexture: number;
    textureBindingCount: number;
    public get roughness():number{
        return this._roughness
    }
    public set roughness(value){
        this._roughness=value;
    }
    public get metalness() : number {
        return this._metalness
    }
    public set metalness(v : number) {
        this._metalness = v;
    } 
    public get diffuse() : Color {
        return this._diffuse
    }  
    public set diffuse(v : Color) {
        this._diffuse = v;
    }
    public get emissive() : Color {
        return this._emissive
    }
    public set emissive(v : Color) {
        this._emissive = v;
    }
    public get lightTextureIntensity() : number {
        return this._lightTextureIntensity
    }
    public set lightTextureIntensity(v : number) {
        this._lightTextureIntensity = v;
    }
    public get emissiveIntensity() : number {
        return this._emissiveIntensity
    }
    public set emissiveIntensity(v : number) {
        this._emissiveIntensity = v;
    }
    public get aoTextureIntensity() : number {
        return this._aoTextureIntensity
    }
    public set aoTextureIntensity(v : number) {
        this._aoTextureIntensity = v;
    }
    public get bumpScale() : number {
        return this._bumpScale
    }
    public set bumpScale(v : number) {
        this._bumpScale = v;
    }
    public get normalScale() : Vector2 {
        return this._normalScale
    }
    public set normalScale(v : Vector2) {
        this._normalScale = v;
    }
    public get displacementScale() : number {
        return this._displacementScale
    }
    public set displacementScale(v : number) {
        this._displacementScale = v;
    }
    public get displacementBias() : number {
        return this._displacementBias
    }
    public set displacementBias(v : number) {
        this._displacementBias = v;
    }
    public get envTextureIntensity() : number {
        return this._envTextureIntensity
    }
    public set envTextureIntensity(v : number) {
        this._envTextureIntensity = v;
    }
    public get flatShading() : boolean {
        return this._flatShading
    }
    public set flatShading(v : boolean) {
        this._flatShading = v;
    }
    public get ior() : number {
        return this._ior
    }
    public set ior(v : number) {
        this._ior = v;
    }
    public get reflectivity() : number {
        return ( GMath.clamp( 2.5 * ( this.ior - 1 ) / ( this.ior + 1 ), 0, 1 ) );
    }
    public set reflectivity(v : number) {
        this.ior = ( 1 + 0.4 * v ) / ( 1 - 0.4 * v );
    }
    public get flipEnvTexture() : number {
        return this._flipEnvTexture
    }
    public set flipEnvTexture(v : number) {
        this._flipEnvTexture = v;
    }
    
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

        this._ior = 1.5;

        // uniforms.flipEnvMap.value = ( envMap.isCubeTexture && envMap.isRenderTargetTexture === false ) ? - 1 : 1;
        this._flipEnvTexture=-1;

        this.textureBindingCount=1;

        // uniforms.reflectivity.value = material.reflectivity;
        // uniforms.ior.value = material.ior;
        // uniforms.refractionRatio.value = material.refractionRatio;
    }
    update(frameState:FrameState,mesh:Mesh){
       const {context}=frameState; 
       this.updateTexture(context);
       if(!this.uniforms) this.createUniforms(mesh);
       super.update(frameState,mesh)
       if(this.groupLayouts.length==0)this.createBindGroupAndLayout(context.device);
       this.setUniforms();   
    }
    private createBindGroupAndLayout(device:GPUDevice){
        this.createUniformBuffer(device);
        const {groupLayout,bindGroup}= Material.createBindGroupAndLayout(device,this.uniforms,this.uniformBuffer,this.type,0);
        this.groupLayouts.push(groupLayout);
        this.bindGroups.push(bindGroup);
      }
    private createUniformBuffer(device:GPUDevice){
         this.uniformBuffer=Buffer.createUniformBuffer(device,this.uniformTotalByte)
     }
    private createUniforms(mesh:Mesh){
        let totalUniformSize=this.getUniformSize();
        this.uniformsDataBuffer=new Float32Array(totalUniformSize);
        let byteOffset=0;
        this.uniforms.push(new UniformMat4("modelMatrix",this.uniformsDataBuffer,byteOffset,mesh));
        byteOffset+=64;

        this.uniforms.push(new UniformMat4("normalMtrix",this.uniformsDataBuffer,byteOffset,mesh));
        byteOffset+=64;

        this.uniforms.push(new UniformColor("color",this.uniformsDataBuffer,byteOffset,this));
        byteOffset+=12;

        this.uniforms.push(new UniformFloat("opacity",this.uniformsDataBuffer,byteOffset,this))
        byteOffset+=4;

        this.uniforms.push(new UniformColor("emissive",this.uniformsDataBuffer,byteOffset,this));
        byteOffset+=12;

        this.uniforms.push(new UniformFloat("metalness",this.uniformsDataBuffer,byteOffset,this));
        byteOffset+=4;

        this.uniforms.push(new UniformFloat("roughness",this.uniformsDataBuffer,byteOffset,this));
        byteOffset+=4;

        if (this.baseTexture) {
            this.uniforms.push(new UniformTexture('baseTexture',this.textureBindingCount,this));
            this.defines.baseTextureBinding=this.textureBindingCount;
            this.textureBindingCount+=1;
        }
        if(this.metalnessTexture){
            this.uniforms.push(new UniformTexture('metalnessTexture',this.textureBindingCount,this));
            this.defines.metalnessTextureBinding=this.textureBindingCount;
            this.textureBindingCount+=1;
        }
        if (this.roughnessTexture) {
            this.uniforms.push(new UniformTexture('roughnessTexture',this.textureBindingCount,this));
            this.defines.roughnessTextureBinding=this.textureBindingCount;
            this.textureBindingCount+=1;
        }
        if ( this.bumpTexture) {
            //if ( material.side === BackSide ) uniforms.bumpScale.value *= - 1;
           this.uniforms.push(new UniformFloat("bumpScale",this.uniformsDataBuffer,byteOffset,this));
           byteOffset+=4;

           this.uniforms.push(new UniformTexture('bumpTexture',this.textureBindingCount,this));
           this.defines.bumpTextureBinding=this.textureBindingCount;
           this.textureBindingCount+=1;
		}
        if (this.aoTexture ) {
            this.uniforms.push(new UniformFloat("aoMapIntensity",this.uniformsDataBuffer,byteOffset,this));
            byteOffset+=4;

            this.uniforms.push(new UniformTexture('aoTexture',this.textureBindingCount,this));
            this.defines.aoTextureBinding=this.textureBindingCount;
            this.textureBindingCount+=1;
		}
        if (this.lightTexture ) {
			// artist-friendly light intensity scaling factor
			//const scaleFactor = ( renderer.physicallyCorrectLights !== true ) ? Math.PI : 1;
			//uniforms.lightMapIntensity.value = material.lightMapIntensity * scaleFactor;
            this.uniforms.push(new UniformFloat("lightMapIntensity",this.uniformsDataBuffer,byteOffset,this));
            byteOffset+=4;

            this.uniforms.push(new UniformTexture('lightTexture',this.textureBindingCount,this));
            this.defines.lightTextureBinding=this.textureBindingCount;
            this.textureBindingCount+=1
		}
        if (this.displacementTexture ) {
            this.uniforms.push( new UniformFloat("displacementBias",this.uniformsDataBuffer,byteOffset,this));
             byteOffset+=4;

             this.uniforms.push(new UniformFloat("displacementScale",this.uniformsDataBuffer,byteOffset,this));
             byteOffset+=4;

             this.uniforms.push(new UniformTexture('displacementTexture',this.textureBindingCount,this));
             this.defines.displacementTextureBinding=this.textureBindingCount;
             this.textureBindingCount+=1;
		}
        if (this.normalTexture ) {
			// uniforms.normalScale.value.copy( material.normalScale );
			// if ( material.side === BackSide ) uniforms.normalScale.value.negate();
            this.uniforms.push(new UniformFloat("normalScale",this.uniformsDataBuffer,byteOffset,this));
            byteOffset+=4;

            this.uniforms.push(new UniformTexture('normalTexture',this.textureBindingCount,this));
            this.defines.normalTextureBinding=this.textureBindingCount;
            this.textureBindingCount+=1;
		}
        if (this.envTexture ) {
			// uniforms.flipEnvMap.value = ( envMap.isCubeTexture && envMap.isRenderTargetTexture === false ) ? - 1 : 1;
			// uniforms.refractionRatio.value = material.refractionRatio;
            this.uniforms.push(new UniformFloat("flipEnvTexture",this.uniformsDataBuffer,byteOffset,this));
            byteOffset+=4;

            this.uniforms.push(new UniformFloat("ior",this.uniformsDataBuffer,byteOffset,this));
            byteOffset+=4;

            this.uniforms.push(new UniformFloat("reflectivity",this.uniformsDataBuffer,byteOffset,this));
            byteOffset+=4;

            this.uniforms.push(new UniformTexture('envTexture',this.textureBindingCount,this));
            this.defines.envTextureBinding=this.textureBindingCount;
            this.textureBindingCount+=1;
		}
        this.uniformTotalByte=Math.ceil(byteOffset/64)*64;
    }
    private updateTexture(context:Context){

        if(this.baseTexture) {
            this.defines.USE_MAP=true;
            this.baseTexture.update(context);
        }
        if(this.bumpTexture) {
            this.defines.USE_BUMPMAP=true;
            this.bumpTexture.update(context);
        }
        if(this.normalTexture) {
            this.defines.USE_NORMALMAP=true;
            this.normalTexture.update(context);
        }
 
        if(this.aoTexture) {
            this.defines.USE_AOMAP=true;
            this.aoTexture.update(context);
        }

        if(this.specularTexture) {
            this.defines.USE_SPECULARMAP=true;
            this.specularTexture.update(context);
        }
  
        if(this.alphaTexture){
            this.defines.USE_ALPHAMAP=true;
            this.alphaTexture.update(context);
        }
 
        if(this.envTexture){
            this.defines.USE_ENVMAP=true;
            this.envTexture.update(context);
        }

        if(this.emissiveTexture){
            this.defines.USE_EMISSIVEMAP=true;
            this.emissiveTexture.update(context);
        }

        if(this.roughnessTexture){
            this.defines.USE_ROUGHNESSMAP=true;
            this.roughnessTexture.update(context);
 
        }
        if(this.displacementTexture){
            this.defines.USE_DISPLACEMENTMAP=true;
            this.displacementTexture.update(context);
        }
  
        if(this.metalnessTexture) {
            this.defines.USE_METALNESSMAP=true;
            this.metalnessTexture.update(context);
        }
 
        if(this.specularIntensityTexture){
            this.defines.USE_SPECULARINTENSITYMAP=true;
            this.specularIntensityTexture.update(context);
        }
        if(this.specularColorTexture){
            this.defines.USE_SPECULARCOLORMAP=true;
            this.specularColorTexture.update(context);
        }
        if(this.lightTexture) {
            this.defines.USE_LIGHTMAP=true;
            this.lightTexture.update(context);
        }
    }
    private getUniformSize(){
        let byteSize= 16+16+3+1+3+1+1;
        if (this.bumpTexture) byteSize+=1;
        if (this.aoTexture) byteSize+=1;
        if (this.lightTexture ) byteSize+=1;
        if (this.normalTexture )  byteSize+=1;
        if (this.displacementTexture ) {
             byteSize+=1;
             byteSize+=1;
		}
        if (this.envTexture ) {
            byteSize+=1;
            byteSize+=1;
            byteSize+=1;
		}
       return Math.ceil(byteSize/64)*64;
    }
    destory(){

    }
}
const defines={
    USE_COLOR_ALPHA:false,
    USE_COLOR:false,
    USE_INSTANCING_COLOR:false,
    USE_SKINNING:false,
    USE_DISPLACEMENTMAP:false,
    USE_MORPHTARGETS:false,
    MORPHTARGETS_TEXTURE:false,
    USE_INSTANCING:false,
    USE_TANGENT:false,
    USE_MORPHNORMALS:false,
    USE_UV:false,
    USE_MORPHCOLORS:false,
    FLIP_SIDED:false,
    FLAT_SHADED:false,
    USE_ENVMAP:false,
    DISTANCE:false,
    USE_TRANSMISSION:false,
    SPECULAR:false,////////
    USE_SHEEN:false,
    USE_CLEARCOAT_NORMALMAP:false,
    USE_NORMALMAP:false,
    IOR:false,
    USE_CLEARCOAT:false,
    USE_IRIDESCENCE:false,
    OBJECTSPACE_NORMALMAP:false,
    USE_ALPHATEST:false,
    STANDARD:false,
    DITHERING:false,
    ENVMAP_TYPE_CUBE_UV:false,
    ENVMAP_TYPE_CUBE:false,
    USE_BUMPMAP:false,
    TANGENTSPACE_NORMALMAP:false,
    USE_MAP:false,
    DECODE_VIDEO_TEXTURE:false,
    USE_ROUGHNESSMAP:false,
    USE_METALNESSMAP:false,
    DOUBLE_SIDED:false,
    USE_EMISSIVEMAP:false,
    USE_SPECULARINTENSITYMAP:false,
    USE_SPECULARCOLORMAP:false,
    USE_CLEARCOATMAP:false,
    USE_CLEARCOAT_ROUGHNESSMAP:false,
    USE_IRIDESCENCEMAP:false,
    USE_IRIDESCENCE_THICKNESSMAP:false,
    USE_SHEENCOLORMAP:false,
    USE_SHEENROUGHNESSMAP:false,
    USE_TRANSMISSIONMAP:false,
    USE_THICKNESSMAP:false,
    TONE_MAPPING:false,
    PREMULTIPLIED_ALPHA:false,

    USE_LIGHTMAP:false,
    USE_AOMAP:false,
    uv2Location:0,
    instanceMatrixLocation:1,
    instanceColorLocation:2,
    tangentLocation:3,
    colorLocation:4,
    morphTarget0Location:5,
    morphTarget1Location:6,
    morphTarget2Location:7,
    morphTarget3Location:8,
    morphNormal0Location:9,
    morphNormal1Location:10,
    morphNormal2Location:11,
    morphNormal3Location:12,
    morphTarget4Location:13,
    morphTarget5Location:14,
    morphTarget6Location:15,
    morphTarget7Location:16,
    skinIndexLocation:17,
    skinWeightLocation:18,
    //vert
    samplerBinding:0,
    boneTextureBinding:1,
    displacementMapBinding:2,
    morphTargetsTextureBinding:3,

    //frag
    transmissionMapBinding:0,
    thicknessMapBinding:1,
    transmissionSamplerMapBinding:2,
    envMapBinding:3,
    normalMapBinding:4,
    clearcoatMapBinding:5,
    clearcoatRoughnessMapBinding:6,
    clearcoatNormalMapBinding:7,
    iridescenceMapBinding:8,
    iridescenceThicknessMapBinding:9,
    roughnessMapBinding:10,
    metalnessMapBinding:11,
    specularIntensityMapBinding:12,
    specularColorMapBinding:13,
    sheenColorMapBinding:14,
    sheenRoughnessMapBinding:15,
    baseTextureBinding:16,
    alphaMapBinding:17,
    aoMapBinding:18,
    lightMapBinding:19,
    emissiveMapBinding:20,
}
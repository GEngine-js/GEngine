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

    public lightTexture:Texture;

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
    currentBinding: number;
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
        if(this.renderState&&this.renderState.primitive){
            if(this.renderState.primitive.cullMode==CullMode.Back) return this._bumpScale*-1;
        }
        return this._bumpScale;
        
        
    }
    public set bumpScale(v : number) {
        this._bumpScale = v;
    }
    public get normalScale() : Vector2 {
        if(this.renderState&&this.renderState.primitive){
            if(this.renderState.primitive.cullMode==CullMode.Back){
                return Vector2.negate(this._normalScale,new Vector2());
            };
        }
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
        this.type='pbr';

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

        this.currentBinding=1;
;
        this.defines.materialPbr=true;

        this.shaderSource=new ShaderSource({
            type:this.type,
            render:true,
            defines:this.defines
        });
        // uniforms.reflectivity.value = material.reflectivity;
        // uniforms.ior.value = material.ior;
        // uniforms.refractionRatio.value = material.refractionRatio;
    }
    update(frameState:FrameState,mesh:Mesh){
       const {context}=frameState; 
       this.updateTexture(context);
       this.updateShaderAndRenderState(frameState,mesh)
       if(this.groupLayouts.length==0)this.createBindGroupAndLayout(context.device,mesh);
       this.setUniforms(context.device);   
    }
    private createBindGroupAndLayout(device:GPUDevice,mesh:Mesh){

        this.totalUniformCount=this.getUniformSize();
        this.createUniformBuffer(this.totalUniformCount,mesh);
        this.uniformBuffer.update(device);

        const {groupLayout,bindGroup}= this.uniformBuffer.createBindGroupAndLayout(device,this.type,0);
        this.groupLayouts.push(groupLayout);
        this.bindGroups.push(bindGroup);
    }
    protected createUniformBuffer(size:number,mesh:Mesh){
        // let totalUniformSize=this.getUniformSize();
        
        super.createUniformBuffer(size,mesh);
        
        this.uniformBuffer.setColor("emissive",this)

        this.uniformBuffer.setFloat("metalness",this);

        this.uniformBuffer.setFloat("roughness",this);

        if (this.baseTexture) {
            this.uniformBuffer.setTexture('baseTexture',this,this.currentBinding)
            this.defines.baseTextureBinding=this.currentBinding;
            this.currentBinding+=1;

            this.uniformBuffer.setSampler('sampler',this.baseTexture,this.currentBinding)
            this.defines.baseSamplerBinding=this.currentBinding;
            this.currentBinding+=1;     
        }
        if(this.metalnessTexture){
            this.uniformBuffer.setTexture('metalnessTexture',this,this.currentBinding)
            this.defines.metalnessTextureBinding=this.currentBinding;
            this.currentBinding+=1;
        }
        if (this.roughnessTexture) {
            this.uniformBuffer.setTexture('roughnessTexture',this,this.currentBinding)
            this.defines.roughnessTextureBinding=this.currentBinding;
            this.currentBinding+=1;
        }
        if ( this.bumpTexture) {
            //if ( material.side === BackSide ) uniforms.bumpScale.value *= - 1;
            this.uniformBuffer.setFloat("bumpScale",this);

            this.uniformBuffer.setTexture('bumpTexture',this,this.currentBinding)
           this.defines.bumpTextureBinding=this.currentBinding;
           this.currentBinding+=1;
		}
        if (this.aoTexture ) {
            this.uniformBuffer.setFloat("aoMapIntensity",this);
            this.byteOffset+=4;

            this.uniformBuffer.setTexture('aoTexture',this,this.currentBinding)
            this.defines.aoTextureBinding=this.currentBinding;
            this.currentBinding+=1;
		}
        if (this.lightTexture ) {
			// artist-friendly light intensity scaling factor
			//const scaleFactor = ( renderer.physicallyCorrectLights !== true ) ? Math.PI : 1;
			//uniforms.lightMapIntensity.value = material.lightMapIntensity * scaleFactor;
            this.uniformBuffer.setFloat("lightMapIntensity",this);

            this.uniformBuffer.setTexture('lightTexture',this,this.currentBinding)
            this.defines.lightTextureBinding=this.currentBinding;
            this.currentBinding+=1
		}
        if (this.displacementTexture ) {
            this.uniformBuffer.setFloat("displacementBias",this);
             
            this.uniformBuffer.setFloat("displacementScale",this);

             this.uniformBuffer.setTexture('displacementTexture',this,this.currentBinding)
             this.defines.displacementTextureBinding=this.currentBinding;
             this.currentBinding+=1;
		}
        if (this.normalTexture ) {
			// uniforms.normalScale.value.copy( material.normalScale );
			// if ( material.side === BackSide ) uniforms.normalScale.value.negate();
            this.uniformBuffer.setFloatVec2("normalScale",this);

            this.uniformBuffer.setTexture('normalTexture',this,this.currentBinding)
            this.defines.normalTextureBinding=this.currentBinding;
            this.currentBinding+=1;
		}
        if (this.envTexture ) {
			// uniforms.flipEnvMap.value = ( envMap.isCubeTexture && envMap.isRenderTargetTexture === false ) ? - 1 : 1;
			// uniforms.refractionRatio.value = material.refractionRatio;
            this.uniformBuffer.setFloat("flipEnvTexture",this);

            this.uniformBuffer.setFloat("ior",this);

            this.uniformBuffer.setFloat("reflectivity",this);
            this.uniformBuffer.setTexture('envTexture',this,this.currentBinding);
            this.defines.envTextureBinding=this.currentBinding;
            this.currentBinding+=1;
		}
    }
    private updateTexture(context:Context){
        if(this.baseTexture) {
            this.defines.USE_TEXTURE=true;
            this.baseTexture.update(context);
        }
        if(this.bumpTexture) {
            this.defines.USE_BUMPTEXTURE=true;
            this.bumpTexture.update(context);
        }
        if(this.normalTexture) {
            this.defines.USE_NORMALTEXTURE=true;
            this.normalTexture.update(context);
        }
 
        if(this.aoTexture) {
            this.defines.USE_AOTEXTURE=true;
            this.defines.vUv2OutLocation=4;
            this.aoTexture.update(context);
        }

        if(this.specularTexture) {
            this.defines.USE_SPECULARTEXTURE=true;
            this.specularTexture.update(context);
        }
  
        if(this.alphaTexture){
            this.defines.USE_ALPHATEXTURE=true;
            this.alphaTexture.update(context);
        }
 
        if(this.envTexture){
            this.defines.USE_ENVTEXTURE=true;
            this.envTexture.update(context);
        }

        if(this.emissiveTexture){
            this.defines.USE_EMISSIVETEXTURE=true;
            this.emissiveTexture.update(context);
        }

        if(this.roughnessTexture){
            this.defines.USE_ROUGHNESSTEXTURE=true;
            this.roughnessTexture.update(context);
 
        }
        if(this.displacementTexture){
            this.defines.USE_DISPLACEMENTTEXTURE=true;
            this.displacementTexture.update(context);
        }
  
        if(this.metalnessTexture) {
            this.defines.USE_METALNESSTEXTURE=true;
            this.metalnessTexture.update(context);
        }
 
        if(this.lightTexture) {
            this.defines.USE_LIGHTTEXTURE=true;
            this.defines.vUv2OutLocation=4;
            this.lightTexture.update(context);
        }
    }
    protected getUniformSize(){
        let parentByteSize=super.getUniformSize()
        let byteSize=parentByteSize+3+1+1;
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
       return Math.ceil(byteSize/4)*4;
    }
    destory(){

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
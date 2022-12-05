import { FrameState } from "../core/FrameState";
import Color from "../math/Color";
import Vector2 from "../math/Vector2";
import Vector3 from "../math/Vector3";
import { Mesh } from "../mesh/Mesh";
import Texture from "../render/Texture";
import { UniformColor, UniformFloat, UniformFloatVec2, UniformMat4, UniformTexture } from "../render/Uniforms";
import { Material } from "./Material";
import Buffer from '../render/Buffer';
import Context from "../render/Context";
import { CullMode } from "../core/WebGPUConstant";
import PbrBaseMaterial from "./PbrBaseMaterial";
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

    textureBindingCount: number;

    
    public get clearcoatRoughness() : number {
        return this._clearcoatRoughness
    }
    
    public set clearcoatRoughness(v : number) {
        this._clearcoatRoughness = v;
    }
    
    public get clearcoatNormalScale() : Vector2 {
        if(this.renderState.primitive.cullMode==CullMode.Back){
            return Vector2.negate(this._clearcoatNormalScale,new Vector2());
        }
        return this._clearcoatNormalScale
    }
    
    public set clearcoatNormalScale(v : Vector2) {
        this._clearcoatNormalScale = v;
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

 
		this._iridescenceIOR = 1.3;

		this._iridescenceThicknessRange = [ 100, 400 ];

        this.iridescenceTexture=undefined;

        this.iridescenceThicknessTexture=undefined;
/**************************************************************/


/*****************************sheen*********************************/
		this._sheenColor = new Color( 1,1,1,0 );

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
        const {context}=frameState; 
        this.updateTexture(context);
        // if(this.uniforms.length==0) this.createUniforms(mesh);
        super.update(frameState,mesh)
        //if(this.groupLayouts.length==0)this.createBindGroupAndLayout(context.device);
        this.setUniforms(context.device); 
    }
    // private createBindGroupAndLayout(device:GPUDevice){
    //     this.createUniformBuffer(device);
    //     const {groupLayout,bindGroup}= Material.createBindGroupAndLayout(device,this.uniforms,this.uniformBuffer,this.type,0);
    //     this.groupLayouts.push(groupLayout);
    //     this.bindGroups.push(bindGroup);
    // }
    // private createUniformBuffer(device:GPUDevice){
    //      this.uniformBuffer=Buffer.createUniformBuffer(device,this.totalUniformCount*4);
    //}
    protected createUniformBuffer(size:number,mesh:Mesh){
        // this.totalUniformCount=this.getUniformSize();
        super.createUniformBuffer(size,mesh);
        this.defines.IOR=true;
        this.defines.SPECULAR=true;
        this.uniformBuffer.setFloat('specularIntensity',this);
        this.uniformBuffer.setFloat('specularColor',this);
        if ( this.sheen > 0 ) {
            this.defines.USE_SHEEN=true;
           // uniforms.sheenColor.value.copy( material.sheenColor ).multiplyScalar( material.sheen );
            
            this.uniformBuffer.setColor('sheenColor',this);
            //uniforms.sheenRoughness.value = material.sheenRoughness;
            this.uniformBuffer.setFloat('sheenRoughness',this);

            if (this.sheenRoughnessTexture) {
                this.uniformBuffer.setTexture('sheenRoughnessTexture',this,this.textureBindingCount);
                this.defines.sheenRoughnessTextureBinding=this.textureBindingCount;
                this.textureBindingCount+=1;
            }
    
            if (this.sheenColorTexture) {
                this.uniformBuffer.setTexture('sheenColorTexture',this,this.textureBindingCount);
                this.defines.sheenColorTextureBinding=this.textureBindingCount;
                this.textureBindingCount+=1;
            }
        }
        if (this.transmission > 0) {
            this.defines.USE_TRANSMISSION=true;
            // uniforms.transmission.value = material.transmission;
            this.uniformBuffer.setFloat('transmission',this);
			//uniforms.transmissionSamplerMap.value = transmissionRenderTarget.texture;
			//uniforms.transmissionSamplerSize.value.set( transmissionRenderTarget.width, transmissionRenderTarget.height );
            // if(this.transmissionSamplerMapTexture){
            //     this.uniforms.push(new UniformTexture('transmissionSamplerMapTexture',this.textureBindingCount,this));
            //     this.defines.transmissionSamplerMapTextureBinding=this.textureBindingCount;
            //     this.textureBindingCount+=1;
            // }
            // this.uniforms.push(new UniformFloatVec2('transmissionSamplerSize',this.uniformsDataBuffer,this.byteOffset,()=>{

            // }));
            // this.byteOffset+=8;
            if (this.thicknessTexture) {
                this.uniformBuffer.setTexture('thicknessTexture',this,this.textureBindingCount);
                this.defines.thicknessTextureBinding=this.textureBindingCount;
                this.textureBindingCount+=1;
            }
            if(this.transmissionTexture){
                this.uniformBuffer.setTexture('transmissionTexture',this,this.textureBindingCount);
                this.defines.transmissionTextureBinding=this.textureBindingCount;
                this.textureBindingCount+=1;
            }
            // uniforms.attenuationDistance.value = material.attenuationDistance;
            this.uniformBuffer.setFloat('attenuationDistance',this);
			// uniforms.attenuationColor.value.copy( material.attenuationColor );
            this.uniformBuffer.setColor('attenuationColor',this);

        }
        if (this.clearcoat > 0 ) {
            this.defines.USE_CLEARCOAT=true;
            // uniforms.clearcoat.value = material.clearcoat;
            this.uniformBuffer.setFloat('clearcoat',this);

			// uniforms.clearcoatRoughness.value = material.clearcoatRoughness;
            this.uniformBuffer.setFloat('clearcoatRoughness',this);

            if (this.clearcoatTexture) {
                this.uniformBuffer.setTexture('clearcoatTexture',this,this.textureBindingCount)
                this.defines.clearcoatTextureBinding=this.textureBindingCount;
                this.textureBindingCount+=1;
            }
            if (this.clearcoatRoughnessTexture) {
                this.uniformBuffer.setTexture('clearcoatRoughnessTexture',this,this.textureBindingCount);
               this.defines.clearcoatRoughnessTextureBinding=this.textureBindingCount;
               this.textureBindingCount+=1;
            }
            if (this.clearcoatNormalTexture ) {
                this.uniformBuffer.setFloatVec2('clearcoatNormalScale',this);
                this.uniformBuffer.setTexture('clearcoatNormalTexture',this,this.textureBindingCount)
                this.defines.clearcoatNormalTextureBinding=this.textureBindingCount;
                this.textureBindingCount+=1;
            }
        }
        if (this.iridescence > 0) {
            this.defines.USE_IRIDESCENCE=true;
            // uniforms.iridescence.value = material.iridescence;
            this.uniforms.push(new UniformFloat('iridescence',this.uniformsDataBuffer,this.byteOffset,this));
            this.byteOffset+=4;
			// uniforms.iridescenceIOR.value = material.iridescenceIOR;
            this.uniforms.push(new UniformFloat('iridescenceIOR',this.uniformsDataBuffer,this.byteOffset,this));
            this.byteOffset+=4;
			// uniforms.iridescenceThicknessMinimum.value = material.iridescenceThicknessRange[ 0 ];
            this.uniforms.push(new UniformFloat('iridescenceThicknessMinimum',this.uniformsDataBuffer,this.byteOffset,()=>{
                return this.iridescenceThicknessRange[0];
            }));
            this.byteOffset+=4;
			// uniforms.iridescenceThicknessMaximum.value = material.iridescenceThicknessRange[ 1 ];
            this.uniforms.push(new UniformFloat('iridescenceThicknessMaximum',this.uniformsDataBuffer,this.byteOffset,()=>{
                return this.iridescenceThicknessRange[1];
            }));
            this.byteOffset+=4;
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
        }
        if (this.specularIntensityTexture) {
            this.uniforms.push(new UniformTexture('specularIntensityTexture',this.textureBindingCount,this));
            this.defines.specularIntensityTextureBinding=this.textureBindingCount;
            this.textureBindingCount+=1;
		}
        if (this.specularColorTexture ) {
            this.uniforms.push(new UniformTexture('specularColorTexture',this.textureBindingCount,this));
            this.defines.specularColorTextureBinding=this.textureBindingCount;
            this.textureBindingCount+=1;
		}
    }
    private updateTexture(context:Context){
        if (this.sheenRoughnessTexture) {
            this.defines.USE_SHEENROUGHNESSTEXTURE=true;
            this.sheenRoughnessTexture.update(context);
        }
        if (this.sheenColorTexture) {
            this.sheenColorTexture.update(context);
            this.defines.USE_SHEENCOLORTEXTURE=true;
        }
        if (this.thicknessTexture) {
            this.thicknessTexture.update(context);
            this.defines.USE_THICKNESSTEXTURE=true;
        }
        if(this.transmissionTexture){
            this.transmissionTexture.update(context);
            this.defines.USE_TRANSMISSIONTEXTURE=true;
        }
        if (this.clearcoatTexture) {
            this.clearcoatTexture.update(context);
            this.defines.USE_CLEARCOATTEXTURE=true;
        }
        if (this.clearcoatRoughnessTexture) {
            this.clearcoatRoughnessTexture.update(context);
            this.defines.USE_CLEARCOAT_ROUGHNESSTEXTURE=true;
        }
        if (this.clearcoatNormalTexture) {
            this.clearcoatNormalTexture.update(context);
            this.defines.USE_CLEARCOAT_NORMALTEXTURE=true;
        }
        if (this.iridescenceTexture ) {
            this.iridescenceTexture.update(context);
            this.defines.USE_IRIDESCENCETEXTURE=true;
        }
        if (this.iridescenceThicknessTexture) {
            this.iridescenceThicknessTexture.update(context);
            this.defines.USE_IRIDESCENCE_THICKNESSTEXTURE=true;
        }
        if (this.specularIntensityTexture){
            this.specularIntensityTexture.update(context);
            this.defines.USE_SPECULARINTENSITYTEXTURE=true;
        }
        if (this.specularColorTexture) {
            this.specularColorTexture.update(context);
            this.defines.USE_SPECULARCOLORTEXTURE=true;
        }
    }
    protected getUniformSize():number{
       let parentByteSize=super.getUniformSize();
       let byteSize=parentByteSize;
       return Math.ceil(byteSize/16)*16;
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
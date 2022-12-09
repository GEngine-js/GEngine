import { FrameState } from "../core/FrameState";
import Color from "../math/Color";
import Vector2 from "../math/Vector2";
import { Mesh } from "../mesh/Mesh";
import Texture from "../render/Texture";
import Context from "../render/Context";
import { CullMode } from "../core/WebGPUConstant";
import PbrBaseMaterial from "./PbrBaseMaterial";
export default class PbrMaterial extends PbrBaseMaterial {

    public boneTexture: Texture;

    public morphTargetsTexture: Texture;

    public transmissionTexture: Texture;

    public thicknessTexture: Texture;

    public transmissionSamplerMapTexture: Texture;

    public clearcoatTexture: Texture;

    public clearcoatRoughnessTexture: Texture;

    public clearcoatNormalTexture: Texture;

    public iridescenceTexture: Texture;

    public iridescenceThicknessTexture: Texture;

    public specularIntensityTexture: Texture;

    public specularColorTexture: Texture;

    public sheenColorTexture: Texture;

    public sheenRoughnessTexture: Texture;

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


    public get clearcoatRoughness(): number {
        return this._clearcoatRoughness
    }

    public set clearcoatRoughness(v: number) {
        this._clearcoatRoughness = v;
    }

    public get clearcoatNormalScale(): Vector2 {
        if (this.renderState.primitive.cullMode == CullMode.Back) {
            return Vector2.negate(this._clearcoatNormalScale, new Vector2());
        }
        return this._clearcoatNormalScale
    }

    public set clearcoatNormalScale(v: Vector2) {
        this._clearcoatNormalScale = v;
    }


    public get iridescenceIOR(): number {
        return this._iridescenceIOR
    }

    public set iridescenceIOR(v: number) {
        this._iridescenceIOR = v;
    }

    public get iridescenceThicknessRange(): number[] {
        return this._iridescenceThicknessRange
    }

    public set iridescenceThicknessRange(v: number[]) {
        this._iridescenceThicknessRange = v;
    }

    public get sheenColor(): Color {
        return this._sheenColor
    }

    public set sheenColor(v: Color) {
        this._sheenColor = v;
    }

    public get thickness(): number {
        return this._thickness
    }

    public set thickness(v: number) {
        this._thickness = v;
    }

    public get sheenRoughness(): number {
        return this._sheenRoughness
    }

    public set sheenRoughness(v: number) {
        this._sheenRoughness = v;
    }

    public get attenuationDistance(): number {
        return this._attenuationDistance
    }

    public set attenuationDistance(v: number) {
        this._attenuationDistance = v;
    }

    public get attenuationColor(): Color {
        return this._attenuationColor
    }

    public set attenuationColor(v: Color) {
        this._attenuationColor = v;
    }

    public get specularIntensity(): number {
        return this._specularIntensity;
    }

    public set specularIntensity(v: number) {
        this._specularIntensity = v;
    }

    public get specularColor(): Color {
        return this._specularColor
    }

    public set specularColor(v: Color) {
        this._specularColor = v;
    }

    public get sheen(): number {
        return this._sheen
    }

    public set sheen(v: number) {
        this._sheen = v;
    }

    public get clearcoat(): number {
        return this._clearcoat
    }

    public set clearcoat(v: number) {
        this._clearcoat = v;
    }

    public get iridescence(): number {
        return this._iridescence
    }

    public set iridescence(v: number) {
        this._iridescence = v;
    }

    public get transmission(): number {
        return this._transmission
    }

    public set transmission(v: number) {
        this._transmission = v;
    }

    constructor() {

        super();

        this._specularIntensity = 1.0;

        this._specularColor = new Color(1, 1, 1);

        /*****************************clearcoat*********************************/
        this._clearcoat = 0;

        this._clearcoatRoughness = 0.0;

        this._clearcoatNormalScale = new Vector2(1, 1);

        this.clearcoatTexture = undefined;

        this.clearcoatRoughnessTexture = undefined;

        this.clearcoatNormalTexture = undefined;
        /**************************************************************/

        /*****************************iridescence*********************************/
        this._iridescence = 0;


        this._iridescenceIOR = 1.3;

        this._iridescenceThicknessRange = [100, 400];

        this.iridescenceTexture = undefined;

        this.iridescenceThicknessTexture = undefined;
        /**************************************************************/


        /*****************************sheen*********************************/
        this._sheenColor = new Color(1, 1, 1, 0);

        this._sheenRoughness = 1.0;

        this._sheen = 0.0;

        this.sheenColorTexture = undefined;

        this.sheenRoughnessTexture = undefined;
        /**************************************************************/

        this._transmission = 0;

        this._thickness = 0;

        this._attenuationDistance = 0.0;

        this._attenuationColor = new Color(1, 1, 1);

        this.transmissionTexture = undefined;

        this.transmissionSamplerMapTexture = undefined;

    }
    update(frameState: FrameState, mesh: Mesh) {
        const { context } = frameState;
        this.updateTexture(context);
        // if(this.uniforms.length==0) this.createUniforms(mesh);
        super.update(frameState, mesh)
        //if(this.groupLayouts.length==0)this.createBindGroupAndLayout(context.device);
        this.setShaderData(context.device);
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
    protected createShaderData(size: number, mesh: Mesh) {
        // this.totalUniformCount=this.getUniformSize();
        super.createShaderData(size, mesh);
        this.shaderData.setDefine('IOR', true);
        this.shaderData.setDefine('SPECULAR', true);
        this.shaderData.setFloat('specularIntensity', this);
        this.shaderData.setFloat('ior',this);
        this.shaderData.setFloat('specularColor', this);
        if (this.sheen > 0) {
            this.shaderData.setDefine('USE_SHEEN', true);
            // uniforms.sheenColor.value.copy( material.sheenColor ).multiplyScalar( material.sheen );

            this.shaderData.setColor('sheenColor', this);
            //uniforms.sheenRoughness.value = material.sheenRoughness;
            this.shaderData.setFloat('sheenRoughness', this);

            if (this.sheenRoughnessTexture) {
                this.shaderData.setDefine('USE_SHEENROUGHNESSTEXTURE', true);
                this.shaderData.setTexture('sheenRoughnessTexture', this);
            }
            if (this.sheenColorTexture) {
                this.shaderData.setDefine('USE_SHEENCOLORTEXTURE', true);
                this.shaderData.setTexture('sheenColorTexture', this);
            }
        }
        if (this.transmission > 0) {
            this.shaderData.setDefine('USE_TRANSMISSION', true);
            // uniforms.transmission.value = material.transmission;
            this.shaderData.setFloat('transmission', this);
            // uniforms.transmissionSamplerMap.value = transmissionRenderTarget.texture;
            // uniforms.transmissionSamplerSize.value.set( transmissionRenderTarget.width, transmissionRenderTarget.height );
            //if(this.transmissionSamplerMapTexture)this.shaderData.setTexture('transmissionSamplerMapTexture',this)
            //this.shaderData.setFloatVec2('transmissionSamplerSize',()=>{transmissionRenderTarget.width, transmissionRenderTarget.height})
            if (this.thicknessTexture) {
                this.shaderData.setDefine('USE_THICKNESSTEXTURE', true);
                this.shaderData.setTexture('thicknessTexture', this);
            }
            if (this.transmissionTexture) {
                this.shaderData.setDefine('USE_TRANSMISSIONTEXTURE', true);
                this.shaderData.setTexture('transmissionTexture', this);
            }
            // uniforms.attenuationDistance.value = material.attenuationDistance;
            this.shaderData.setFloat('attenuationDistance', this);
            // uniforms.attenuationColor.value.copy( material.attenuationColor );
            this.shaderData.setColor('attenuationColor', this);
        }
        if (this.clearcoat > 0) {
            this.shaderData.setDefine('USE_CLEARCOAT', true);
            this.shaderData.setFloat('clearcoat', this);

            this.shaderData.setFloat('clearcoatRoughness', this);

            if (this.clearcoatTexture) {
                this.shaderData.setDefine('USE_CLEARCOATTEXTURE', true);
                this.shaderData.setTexture('clearcoatTexture', this);
            }
            if (this.clearcoatRoughnessTexture) {
                this.shaderData.setDefine('USE_CLEARCOAT_ROUGHNESSTEXTURE', true);
                this.shaderData.setTexture('clearcoatRoughnessTexture', this);
            }
            if (this.clearcoatNormalTexture) {
                this.shaderData.setDefine('USE_CLEARCOAT_NORMALTEXTURE', true);
                this.shaderData.setFloatVec2('clearcoatNormalScale', this);
                this.shaderData.setTexture('clearcoatNormalTexture', this);
            }
        }
        if (this.iridescence > 0) {
            this.shaderData.setDefine('USE_IRIDESCENCE', true);
            // uniforms.iridescence.value = material.iridescence;
            this.shaderData.setFloat('iridescence', this);
            // uniforms.iridescenceIOR.value = material.iridescenceIOR;
            this.shaderData.setFloat('iridescenceIOR', this);;
            // uniforms.iridescenceThicknessMinimum.value = material.iridescenceThicknessRange[ 0 ];
            this.shaderData.setFloat('iridescenceThicknessMinimum', () => {
                return this.iridescenceThicknessRange[0];
            })
            // uniforms.iridescenceThicknessMaximum.value = material.iridescenceThicknessRange[ 1 ];
            this.shaderData.setFloat('iridescenceThicknessMaximum', () => {
                return this.iridescenceThicknessRange[1];
            })
            if (this.iridescenceTexture) {
                this.shaderData.setDefine('USE_IRIDESCENCETEXTURE', true);
                this.shaderData.setTexture('iridescenceTexture', this);
            }
            if (this.iridescenceThicknessTexture) {
                this.shaderData.setDefine('USE_IRIDESCENCE_THICKNESSTEXTURE', true);
                this.shaderData.setTexture('iridescenceThicknessTexture', this);
            }
        }
        if (this.specularIntensityTexture) {
            this.shaderData.setDefine('USE_SPECULARINTENSITYTEXTURE', true);
            this.shaderData.setTexture('specularIntensityTexture', this);
        }
        if (this.specularColorTexture) {
            this.shaderData.setDefine('USE_SPECULARCOLORTEXTURE', true);
            this.shaderData.setTexture('specularColorTexture', this);
        }
    }
    protected updateTexture(context: Context):void {
        if (this.sheenRoughnessTexture) this.sheenRoughnessTexture.update(context);
        if (this.sheenColorTexture) this.sheenColorTexture.update(context);
        if (this.thicknessTexture) this.thicknessTexture.update(context);
        if (this.transmissionTexture) this.transmissionTexture.update(context);
        if (this.clearcoatTexture) this.clearcoatTexture.update(context);
        if (this.clearcoatRoughnessTexture) this.clearcoatRoughnessTexture.update(context);
        if (this.clearcoatNormalTexture) this.clearcoatNormalTexture.update(context);
        if (this.iridescenceTexture) this.iridescenceTexture.update(context);
        if (this.iridescenceThicknessTexture) this.iridescenceThicknessTexture.update(context);
        if (this.specularIntensityTexture) this.specularIntensityTexture.update(context);
        if (this.specularColorTexture) this.specularColorTexture.update(context);
    }
    protected getUniformSize(): number {
        let parentSize = super.getUniformSize();
        let size = parentSize + 1 + 1;
        if (this.sheen > 0) size += 4;
        if (this.transmission > 0) size += 5;
        if (this.clearcoat > 0) {
            size += 2;
            if (this.clearcoatNormalTexture) size += 2;
        }
        if (this.iridescence > 0) size += 4;
        return Math.ceil(size / 16) * 16;
    }
    destory() {

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
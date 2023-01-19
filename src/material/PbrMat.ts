import { FrameState } from "../core/FrameState";
import Vector2 from "../math/Vector2";
import { Mesh } from "../mesh/Mesh";
import Texture from "../render/Texture";
import { Material } from "./Material";
import { ShaderSource } from "../shader/ShaderSource";
import { CullMode } from "../core/WebGPUConstant";

export default class PbrMat extends Material {

    public diffuseEnvTexture: Texture;

    public specularEnvTexture: Texture;

    public brdfTexture: Texture;

    public normalTexture: Texture;

    public aoTexture: Texture;

    public emissiveTexture: Texture;

    public metalnessRoughnessTexture: Texture;

    private _roughness: number;

    private _metalness: number;

    private _aoTextureIntensity: number;

    private _normalScale: Vector2;

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
    public get aoTextureIntensity(): number {
        return this._aoTextureIntensity
    }
    public set aoTextureIntensity(v: number) {
        this._aoTextureIntensity = v;
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
    constructor() {
        super();
        this.type = 'pbr_mat';

        this._roughness = 0.1;

        this._metalness = 0.1;

        this._aoTextureIntensity = 1.0;

        this._normalScale = new Vector2(1, 1);

        this.shaderSource = new ShaderSource({
            type: this.type,
            render: true,
            defines: {
                materialPbr: true
            }
        });
    }
    update(frameState: FrameState, mesh: Mesh) {
        if (!this.shaderData) {
            this.createShaderData(mesh, frameState);
        }
    }
    protected createShaderData( mesh: Mesh, frameState?: FrameState) {

        super.createShaderData(mesh);
        this.shaderData.setFloat("metalness", this);
        this.shaderData.setFloat("roughness", this);
        if (this.baseTexture) {
            this.shaderData.setDefine('USE_TEXTURE', true);
            this.shaderData.setTexture('baseTexture', this);
            this.shaderData.setSampler('baseSampler', this);
        }
        if (this.metalnessRoughnessTexture) {
            this.shaderData.setDefine('USE_METALNESSTEXTURE', true);
            this.shaderData.setTexture('metalnessRoughnessTexture', this);
        }
        if (this.aoTexture) {
            this.shaderData.setDefine('USE_AOTEXTURE', true);
            this.shaderData.setTexture('aoTexture', this);
        }
        if (this.normalTexture) {
            this.shaderData.setFloatVec2("normalScale", this);
            this.shaderData.setDefine('USE_NORMALTEXTURE', true);
            this.shaderData.setTexture('normalTexture', this);
        }
        if (this.emissiveTexture) {
            this.shaderData.setDefine('USE_EMISSIVETEXTURE', true);
            this.shaderData.setTexture('emissiveTexture', this)
        }
        if (this.specularEnvTexture) {
            this.shaderData.setTexture('specularEnvTexture', this);
        }
        if (this.diffuseEnvTexture) {
            this.shaderData.setTexture('diffuseEnvTexture', this)
        }
        if (this.brdfTexture) {
            this.shaderData.setTexture('brdfTexture', this)
        }
    }
    destroy() {

    }
}
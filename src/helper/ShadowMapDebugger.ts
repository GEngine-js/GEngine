import Geometry from "../geometry/Geometry";
import PlaneGeometry from "../geometry/PlaneGeometry";
import { Light } from "../light/Light";
import ShaderMaterial from "../material/ShaderMaterial";
import { Mesh } from "../mesh/Mesh";
import Sampler from "../render/Sampler";
import { Scene } from "../Scene";
import getVertFrag from "../shader/Shaders";
import { ViewPort } from "../render/RenderState";
import { RenderObjectType } from "../core/WebGPUTypes";

export class ShadowMapDebugger {
	private mesh: Mesh;
	private debuggerSize: { width: number; height: number };
	public light: Light;
	private geometry: Geometry;
	private material: ShaderMaterial;
	private scene: Scene;

	constructor(light: Light, scene: Scene) {
		if (!light || !(light instanceof Light)) throw new Error("The parameter must be Light instance");

		this.light = light;
		this.scene = scene;
		this.debuggerSize = {
			width: 256,
			height: 256
		};

		this.mesh = this._createShadowMapMesh();
		const shadowMap = this.light.shadow.getShadowMapTexture();
		this.material.uniforms.texture.value = shadowMap;
		this.mesh.type = RenderObjectType.Debug;
		this.scene.add(this.mesh);
	}

	_createShadowMapMesh() {
		const shader = getVertFrag("shadowMapDebugger", {
			positionLocation: 0
		});
		this.geometry = new PlaneGeometry(2, 2);
		this.material = new ShaderMaterial({
			type: "shadowMapDebugger",
			frag: shader.frag,
			vert: shader.vert,
			uniforms: {
				texture: {
					type: "texture",
					value: undefined
				},
				sampler: {
					type: "sampler",
					value: new Sampler({
						magFilter: "linear",
						minFilter: "linear"
					})
				}
			}
		});
		this.material.renderState.viewport = new ViewPort(0, 0, this.debuggerSize.width, this.debuggerSize.height);
		return new Mesh(this.geometry, this.material);
	}

	setSize(width: number, height: number) {
		if (!width || !height) return;
		this.debuggerSize.width = width;
		this.debuggerSize.height = height;
		this.update();
	}

	update() {
		this.material.renderState.viewport = new ViewPort(0, 0, this.debuggerSize.width, this.debuggerSize.height);
	}
}

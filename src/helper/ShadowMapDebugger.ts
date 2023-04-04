import OrthographicCamera from "../camera/OrthographicCamera";
import OrbitControl from "../control/OrbitControl";
import Geometry from "../geometry/Geometry";
import PlaneGeometry from "../geometry/PlaneGeometry";
import { AmbientLight } from "../light/AmbientLight";
import { Light } from "../light/Light";
import ShaderMaterial from "../material/ShaderMaterial";
import Vector3 from "../math/Vector3";
import { Mesh } from "../mesh/Mesh";
import { Float32Attribute } from "../render/Attribute";
import Sampler from "../render/Sampler";
import { Scene } from "../Scene";
import getVertFrag from "../shader/Shaders";
import { loadTexture } from "../utils/utils";

export class ShadowMapDebugger {
	private _container: HTMLElement;
	private _mesh: Mesh;
	private debuggerSize: { width: number; height: number };
	public light: Light;
	private geometry: Geometry;
	private material: ShaderMaterial;
	private scene: Scene;
	private camera: OrthographicCamera;

	constructor(light: Light, scene: Scene) {
		if (!light || !(light instanceof Light)) throw new Error("The parameter must be Light instance");

		this.light = light;
		this.scene = scene;
		this.debuggerSize = {
			width: 256,
			height: 256
		};
		this.camera = new OrthographicCamera(
			this.debuggerSize.width / -2,
			this.debuggerSize.width / 2,
			this.debuggerSize.height / 2,
			this.debuggerSize.height / -2,
			1,
			10
		);
		this.camera.position.set(0, 2, 0);

		const ambientLight = new AmbientLight(new Vector3(1.0, 1.0, 1.0), 1.0);
		this._mesh = this._createShadowMapMesh();
		this.scene.add(this._mesh);
		this.scene.add(ambientLight);
		this.scene.setCamera(this.camera);
		const control = new OrbitControl(this.camera, this.scene.container);
		control.zoomSpeed = 2.0;
		control.maxPolarAngle = Math.PI / 2;
	}

	_createShadowMapMesh() {
		const shader = getVertFrag("shadowMapDebugger", { positionLocation: 0 });
		this.geometry = new PlaneGeometry(this.debuggerSize.width, this.debuggerSize.height);
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
		return new Mesh(this.geometry, this.material);
	}

	async _initTexture() {
		const baseTexture = await loadTexture("../../example/brick_diffuse.jpg");
		this.material.uniforms.texture.value = baseTexture;
	}

	setSize(width: number, height: number) {
		if (!width || !height) return;
		this.debuggerSize.width = width;
		this.debuggerSize.height = height;
		this.update();
	}

	update() {
		this.camera.left = this.debuggerSize.width / -2;
		this.camera.right = this.debuggerSize.width / 2;
		this.camera.top = this.debuggerSize.height / 2;
		this.camera.bottom = this.debuggerSize.height / -2;
		this.camera.updateProjectionMatrix();
	}

	render() {
		if (this.light.shadow) {
			const shadowMap = this.light.shadow.getShadowMapTexture();
			if (shadowMap.dirty === true) return;
			this.material.uniforms.texture.value = shadowMap;
			this.scene.render();
		}
	}
}

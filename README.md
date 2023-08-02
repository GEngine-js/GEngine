# GEngine.js

WebGPU Engine

## install

```shell
$ yarn add @gengine-js/gengine
```

## develop

```shell
# install
$ yarn

# dev
$ yarn dev

# build
$ yarn build
```

## Usage

```html
<script type="module">
	import {
		Mesh,
		PerspectiveCamera,
		Scene,
		PhongMaterial,
		Vector3,
		Color,
		SpotLight,
		PointLight,
		SphereGeometry,
		OrbitControl
	} from "../dist/index.js";
	const init = async () => {
		const geometry = new SphereGeometry(10);

		const phongMaterial = new PhongMaterial();
		phongMaterial.color = new Color(1.0, 0.0, 0.0);

		const primitive = new Mesh(geometry, phongMaterial);

		primitive.rotateX(-Math.PI / 2);

		const camera = new PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.01, 1000);

		camera.position.set(0, 20, 0);

		camera.lookAt(0, 0, 0);

		const spotLight = new SpotLight(new Vector3(1.0, 1.0, 1.0), 1.0, 15, 6, 1);
		spotLight.position = new Vector3(0, 20, 0);

		const scene = new Scene({ container: "app" });

		axes.scale.set(10, 10, 10);

		const control = new OrbitControl(camera, document.getElementById("app"));

		scene.add(primitive);

		scene.setCamera(camera);

		scene.add(pointLight);

		window.addEventListener("resize", onWindowResize);

		function onWindowResize() {
			camera.aspect = window.innerWidth / window.innerHeight;
			scene.resize(window.innerWidth, window.innerHeight);
		}
		function animate() {
			control.update();
			requestAnimationFrame(animate);
			scene.render();
		}
		animate();
	};
	init();
</script>
```

## Native

```html
<script type="module">
	import { Model, Context, Texture, RenderTarget, Attachment } from "webgpu-gengine-js";
	import { mat4, vec3 } from "gl-matrix";
	const init = async () => {
		//init context
		const context = new Context({
			canvas: null,
			container: document.getElementById("app"),
			pixelRatio: 1
		});
		const { canvas, presentationFormat } = context;
		await context.init();
		const { width, height, depth } = context.presentationSize;
		const colorAttachment = new Attachment(
			{ r: 0.0, g: 0.0, b: 0.0, a: 0 },
			{
				textureView: () => {
					return context.context.getCurrentTexture().createView();
				}
			}
		);
		const depthTexture = new Texture({
			label: "resolveDepth",
			size: { width, height, depth },
			format: "depth24plus",
			usage: GPUTextureUsage.RENDER_ATTACHMENT
		});
		const depthAttachment = new Attachment(1.0, { texture: depthTexture });
		//fbo
		const canvasRenderTarget = new RenderTarget("render", [colorAttachment], depthAttachment);
		const aspect = canvas.width / canvas.height;
		const projectionMatrix = mat4.perspective([], (2 * Math.PI) / 5, aspect, 1, 100.0);
		const modelViewProjectionMatrix = mat4.create();
		const model = new Model({
			shaderId: "model",
			frag: `
                            @fragment
                            fn main(@location(0) fragPosition: vec4<f32>) -> @location(0) vec4<f32> {
                                 return fragPosition;
                            }
                        `,
			vert: `
                            struct Uniforms {
                                modelViewProjectionMatrix : mat4x4<f32>,
                            }
                            @binding(0) @group(0) var<uniform> uniforms : Uniforms;
                            struct VertexOutput {
                                @builtin(position) Position : vec4<f32>,
                                @location(0) fragPosition: vec4<f32>,
                            }
                            @vertex
                            fn main(@location(0) position : vec4<f32>,@location(1) color : vec4<f32>) -> VertexOutput {
                                var output : VertexOutput;
                                output.Position = uniforms.modelViewProjectionMatrix * position;
                                output.fragPosition = 0.5 * (position + vec4(1.0, 1.0, 1.0, 1.0));
                                return output;
                            }
                        `,
			vertexBuffers: [
				{
					stepMode: "vertex", //optional
					uid: "vertAttr", //must
					attributes: {
						position: { size: 4, value: positions },
						color: { size: 4, value: colors }
					}
				}
			],
			uniformBuffers: [
				{
					type: "uniform",
					uid: "systemMatrix",
					uniforms: {
						modelViewProjectionMatrix: {
							type: "mat4",
							value: () => {
								let viewMatrix = mat4.identity([]);
								mat4.translate(viewMatrix, viewMatrix, vec3.fromValues(0, 0, -4));
								const now = Date.now() / 1000;
								mat4.rotate(
									viewMatrix,
									viewMatrix,
									1,
									vec3.fromValues(Math.sin(now), Math.cos(now), 0)
								);
								mat4.multiply(modelViewProjectionMatrix, projectionMatrix, viewMatrix);
								return modelViewProjectionMatrix;
							}
						}
					}
				}
			],
			renderState: {
				targets: [
					{
						format: presentationFormat
					}
				],
				primitive: {
					topology: "triangle-list",
					cullMode: "back"
				},
				depthStencil: {
					depthWriteEnabled: true,
					depthCompare: "less",
					format: "depth24plus"
				}
			},
			draw: {
				count: 36,
				instanceCount: 1
			}
		});

		function animate() {
			requestAnimationFrame(animate);
			const passEncoder = canvasRenderTarget.beginRenderPass(context.device);
			model.render({ device: context.device, passEncoder });
			canvasRenderTarget.endRenderPass();
		}
		animate();
	};
	init();
</script>
```

## feature

-   [✔] Camera
    -   [✔] PerspectiveCamera
    -   [✔] OrthographicCamera
-   [✔] Math
-   [✔] control
    -   [✔] OrbitControl
-   [✔] Light
    -   [✔] AmbientLight
    -   [✔] DirectionalLight
    -   [✔] PointLight
    -   [✔] SpotLight
-   [✔] Loader
    -   [✔] GLTFLoader
    -   [✔] CubeTextureLoader
-   [✔] Materials
    -   [✔] ColorMaterial
    -   [✔] Material
    -   [✔] PbrMaterial(IBL/Light Render)
    -   [✔] BlinPhongMaterial
    -   [✔] ShaderMaterial
    -   [✔] SkyBoxMaterial
-   [✔] Post-Effect
    -   [✔] BloomPostEffect
-   [✔] Shadow
    -   [✔] DirectionalLightShadow
    -   [✔] PointLightShadow
    -   [✔] SpotLightShadow

## Next

1. Complete animation
2. Complete core glTF 2.0
3. Text and Sprite
4. Pick

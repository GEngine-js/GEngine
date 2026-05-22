# GEngine.js

<p align="center">
  <strong>A modern 3D rendering engine built on WebGPU</strong>
</p>

<p align="center">
  <strong>English</strong> | <a href="./README.zh-CN.md">中文</a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@gengine-js/gengine">
    <img src="https://img.shields.io/npm/v/@gengine-js/gengine.svg" alt="npm version" />
  </a>
  <a href="https://github.com/hpugis/GEngine/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/hpugis/GEngine" alt="license" />
  </a>
  <img src="https://img.shields.io/badge/WebGPU-required-blue" alt="WebGPU required" />
  <img src="https://img.shields.io/badge/TypeScript-5+-3178c6?logo=typescript&logoColor=white" alt="TypeScript" />
</p>

---

## Features

- 🎨 **Forward Rendering Pipeline** — shadow pass + color pass + post-process chain
- 💡 **4 Light Types** — Ambient, Directional, Point, Spot, all with shadow support
- 🌊 **Cascaded Shadow Maps** — high-quality directional light shadows over large scenes
- 🔮 **3 Built-in Materials** — Blinn-Phong, PBR (with IBL), and fully custom ShaderMaterial
- 🧊 **Geometry Library** — Box, Plane, Sphere, TorusKnot, Point cloud, SkyBox
- 🚀 **Instance Rendering** — `InstanceMesh` for large numbers of identical objects
- ✨ **Bloom Post-Effect** — threshold-based bloom with multi-level blur
- 📦 **GLTF Loader** — meshes, materials, textures, skeletal animation
- ✂️ **Frustum Culling** — BoundingSphere / BoundingBox based culling
- ⚡ **Compute Shaders** — WebGPU compute pipeline support
- 🔧 **WGSL Preprocessor** — `#ifdef` / `#if` conditional shader compilation

## Requirements

| Requirement | Version |
|-------------|---------|
| Browser | Chrome ≥ 113 / Edge ≥ 113 |
| Node.js | ≥ 16 (for building) |

> WebGPU is enabled by default in Chrome 113+ and Edge 113+. Firefox and Safari require experimental flags.

## Installation

```shell
npm install @gengine-js/gengine
# or
yarn add @gengine-js/gengine
```

## Quick Start

```html
<!DOCTYPE html>
<html>
<body>
  <div id="app" style="width:100vw;height:100vh;"></div>
  <script type="module">
    import {
      Scene, Mesh, PerspectiveCamera,
      BlinnPhongMaterial, SphereGeometry,
      PointLight, AmbientLight,
      Vector3, Color, OrbitControl
    } from "@gengine-js/gengine";

    // 1. Create scene (initializes WebGPU automatically)
    const scene = new Scene({ container: "app" });

    // 2. Camera
    const camera = new PerspectiveCamera(
      60, window.innerWidth / window.innerHeight, 0.01, 1000
    );
    camera.position.set(0, 20, 30);
    camera.lookAt(0, 0, 0);
    scene.setCamera(camera);

    // 3. Mesh
    const geometry = new SphereGeometry(10);
    const material = new BlinnPhongMaterial();
    material.color = new Color(1.0, 0.5, 0.0);
    const mesh = new Mesh(geometry, material);
    scene.add(mesh);

    // 4. Lights
    const light = new PointLight(new Vector3(1, 1, 1), 1.0, 100, 1.0);
    light.position = new Vector3(0, 30, 0);
    scene.add(light);
    scene.add(new AmbientLight(new Vector3(0.2, 0.2, 0.2), 1.0));

    // 5. Controls
    const control = new OrbitControl(camera, document.getElementById("app"));

    // 6. Render loop
    function animate() {
      requestAnimationFrame(animate);
      control.update();
      scene.render();
    }
    animate();

    // 7. Handle resize
    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      scene.resize(window.innerWidth, window.innerHeight);
    });
  </script>
</body>
</html>
```

## Development

```shell
# Clone
git clone https://github.com/hpugis/GEngine.git
cd GEngine

# Install dependencies
yarn install

# Start dev server with watch
yarn dev

# Production build
yarn build

# Lint
yarn lint
```

Serve the `example/` directory with any static file server to preview examples:

```shell
npx serve .
# then open http://localhost:3000/example/mesh/mesh.html
```

## Documentation

| Doc | Description |
|-----|-------------|
| [Architecture](./ai-docs/ARCHITECTURE.md) | Render pipeline, data flow, class hierarchy |
| [API Reference](./ai-docs/API.md) | Full public API — Scene, Mesh, Material, Light, Camera, Math… |
| [Development Guide](./ai-docs/DEVELOPMENT.md) | Setup, adding new features, debugging tips |
| [Deployment](./ai-docs/DEPLOYMENT.md) | Build output, npm publishing |
| [Contributing](./ai-docs/CONTRIBUTING.md) | Branch naming, commit conventions, PR checklist |

## Examples

Browse the [`example/`](./example/) directory for runnable demos:

| Category | Examples |
|----------|----------|
| Geometry | Box, Plane, Sphere, TorusKnot |
| Materials | Blinn-Phong, PBR, ShaderMaterial |
| Lights | Ambient, Directional, Point, Spot |
| Shadows | Directional, Cascaded, Point, Spot |
| Mesh | Instance, Points, SkyBox, Sprite |
| Loaders | GLTF models, GLTF skinning |
| Effects | Bloom post-process |

## Contributing

Contributions are welcome! Please read the [Contributing Guide](./ai-docs/CONTRIBUTING.md) before submitting a pull request.

1. Fork the repository
2. Create your branch: `git checkout -b feat/your-feature`
3. Commit with conventional commits: `yarn commit`
4. Push and open a Pull Request

## License

[MIT](./LICENSE)

---

## Native WebGPU Usage

For advanced use cases requiring direct WebGPU access:

```html
<script type="module">
	import { Model, Context, Texture, RenderTarget, Attachment } from "@gengine-js/gengine";
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

		// ... build pipeline, draw loop, etc.
	};
	init();
</script>
```


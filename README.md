## Note:

-   WebGPU Engine

## install

-   `npm install`

## build

-   `npm run dev`

## Usage

       <script type="module">
            import {
                BoxGeometry,
                Mesh,
                PerspectiveCamera,
                Scene,
                PhongMaterial,
                Vector3,
                Color,
                SpotLight,
                PointLight,
                Sampler,
                Texture,
                Axes,
                PlaneGeometry,
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

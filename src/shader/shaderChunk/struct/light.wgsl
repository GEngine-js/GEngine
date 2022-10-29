struct IncidentLight {
    color: vec3<f32>;
    direction: vec3<f32>;
    visible: bool;
};
struct GeometricContext {
    position: vec3<f32>;
    normal: vec3<f32>;
    viewDir: vec3<f32>;
    // #ifdef USE_CLEARCOAT
    //     vec3 clearcoatNormal;
    // #endif
};
struct SpotLight {
    position: vec3<f32>;
    direction: vec3<f32>;
    color: vec3<f32>;
    distance: f32;
    decay: f32;
    coneCos: f32;
    penumbraCos: f32;
};
struct PointLight {
    position: vec3<f32>;
    color: vec3<f32>;
    distance: f32;
    decay: f32;
};
struct DirectionalLight {
    direction: vec3<f32>;
    color: vec3<f32>;
};
struct LightCount{
    spotCount:f32;
    pointCount:f32;
    directionCount:f32;
    ambientLightCount:f32
}
struct AmbientLight{
     color: vec3<f32>;
}
struct BlinnPhongMaterial {
	diffuseColor:vec3<f32>;
	specularColor:vec3<f32>;
	specularShininess:f32;
	fspecularStrength:f32;
};
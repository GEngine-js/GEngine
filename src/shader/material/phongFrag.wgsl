struct MaterialUniform {
    modelMatrix : mat4x4 <f32>,
    color : vec3 <f32>,
    opacity : f32,
    normalMatrix : mat4x4 <f32>,
    emissive : vec3 <f32>,
    shininess : f32,
    specular : vec3 <f32>,
}

#include <FragInput>
#include <SystemUniform>
#include <TextureAndSamplerDefine>
#include <light>
@binding(phongBinding) @group(0) var<uniform> materialUniform : MaterialUniform;
@binding(cameraBinding) @group(1) var<uniform> systemUniform : SystemUniform;
@fragment
fn main(input : FragInput) -> @location(0) vec4 <f32> {
    var totalEmissiveRadiance : vec3 <f32> = materialUniform.emissive;
    var color : vec4 <f32>;
    #if USE_COLORTEXTURE
        color = vec4 <f32> (textureSample(baseColorTexture, baseColorSampler, input.uv).rgb + materialUniform.color, materialUniform.opacity);
    #else
        color = vec4 <f32> (materialUniform.color, materialUniform.opacity);
    #endif
    let v : vec3 <f32> = normalize(systemUniform.cameraPosition - input.worldPos);
    #if USE_NORMALTEXTURE
        let n : vec3 <f32> = getNormalByNormalTexture(input);
    #else
        let n : vec3 <f32> = getNormal(input);
    #endif
    var geometry : Geometry;
    geometry.normal = n;
    geometry.viewDir = v;
    geometry.position = input.worldPos;
    geometry.viewPosition = input.viewPosition.xyz;
    let lightColor : ReflectedLight = parseLights(geometry, materialUniform.shininess);
        //var finnalColor:vec3<f32>=color.xyz + (lightColor.directDiffuse + lightColor.directSpecular + lightColor.ambient);
    var finnalColor : vec3 <f32>= color.xyz * (lightColor.directDiffuse + lightColor.directSpecular + lightColor.ambient);

    // finnalColor = lightColor.testColor.xyz;

    return vec4 <f32> (finnalColor, color.a);
}

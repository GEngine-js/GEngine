// reference: https://github.com/KhronosGroup/glTF-WebGL-PBR/blob/master/shaders/pbr-frag.glsl
#include <pbrUtils>
#include <light>
#include <brdf>
#include <PbrMaterialStruct>
#include <SystemUniform> 
#include <FragInput>   
struct PhysicalMaterial {
    diffuseColor:vec3<f32>,
    roughness:f32,
    specularColor:vec3<f32>,
    #if USE_CLEARCOAT
        clearcoat:f32,
        clearcoatRoughness:f32,
        clearcoatF0:vec3<f32>,
        clearcoatF90:f32,
    #endif

    #if USE_IRIDESCENCE
        iridescence:f32,
        iridescenceIOR:f32,
        iridescenceThickness:f32,
        iridescenceFresnel:vec3<f32>,
        iridescenceF0:vec3<f32>,
    #endif

    #if USE_SHEEN
        sheenColor:vec3<f32>,
        sheenRoughness:f32,
    #endif

    #if IOR
        ior:f32,
    #endif

    #if USE_TRANSMISSION
        transmission:f32,
        transmissionAlpha:f32,
        thickness:f32,
        attenuationDistance:f32,
        attenuationColor:vec3<f32>,
    #endif
};
const M_PI:f32 = 3.141592653589793;
const c_MinRoughness:f32 = 0.04;
#include <TextureAndSamplerDefine>
#if USE_IBL
    #include <ibl>
#endif
@binding(pbrBinding) @group(0) var<uniform> materialUniform : MaterialUniform;
@binding(cameraBinding) @group(1) var<uniform> systemUniform : SystemUniform;
@fragment
fn main(input:FragInput) -> @location(0) vec4<f32> 
{
    var perceptualRoughness:f32 = materialUniform.roughness;
    var metallic:f32 = materialUniform.metallic;

    #if USE_METALNESSTEXTURE
        let mrSample:vec4<f32> = textureSample(metalnessRoughnessTexture,metalnessRoughnessSampler, input.uv);
        perceptualRoughness = mrSample.g * perceptualRoughness;
        metallic = mrSample.b * metallic;
    #endif
    perceptualRoughness = clamp(perceptualRoughness, c_MinRoughness, 1.0);
    metallic = clamp(metallic, 0.0, 1.0);
    let alphaRoughness:f32 = perceptualRoughness * perceptualRoughness;


    // The albedo may be defined from a base texture or a flat color
    #if USE_TEXTURE
        let baseColor:vec4<f32> = textureSample(baseColorTexture,baseColorSampler, input.uv) ;
    #else
        let baseColor:vec4<f32> = vec4<f32>(materialUniform.color,1.0);
    #endif

    #if USE_NORMALTEXTURE
        let n:vec3<f32> = getNormalByNormalTexture(input);  
    #else
        let n:vec3<f32> = getNormal(input);
    #endif
    var material:PhysicalMaterial;
    material.diffuseColor=baseColor.rgb*( 1.0 - metallic );
    material.roughness=perceptualRoughness;
    material.specularColor=mix( vec3<f32>( 0.04), baseColor.rgb, metallic );
    var geometry:Geometry;
    geometry.normal=n;
    geometry.viewDir=normalize(systemUniform.cameraPosition - input.worldPos);
    geometry.position=input.worldPos;
    geometry.dotNV = saturate(dot(geometry.normal, geometry.viewDir) );
    //light shading
    var reflectedLight=parseLights(geometry,material);
    var color=reflectedLight.directDiffuse+reflectedLight.directSpecular;
    //ibl
    #if USE_IBL&&HAS_UV
        var reflectedLightDiffuse=indirectDiffuse_Physical(geometry,material);
        var reflectedLightSpecular=indirectSpecular_Physical(geometry,material);
        color+=reflectedLightDiffuse.indirectDiffuse;
        color+=reflectedLightSpecular.indirectSpecular;
    #endif
    #if USE_AOTEXTURE
        let ao:f32 = textureSample(aoTexture,aoSampler, input.uv).r;
        color = mix(color, color * ao, materialUniform.occlusionStrength);
    #endif

    #if USE_EMISSIVETEXTURE
        let emissive:vec3<f32> = textureSample(emissiveTexture, emissiveSampler,input.uv).rgb ;
        color += emissive;
    #endif
    return vec4<f32>(color, baseColor.a);
}

export default function pbr_vs(defines){
   return   `
   struct MaterialUniform {
    modelMatrix: mat4x4<f32>,
    color: vec3<f32>,
    opacity:f32,
    normalMatrix: mat3x3<f32>,
    emissive:vec3<f32>,
    metallic:f32,
    roughness:f32,
    #if ${defines.HAS_NORMALMAP}
        normalTextureScale:f32,
    #endif
    #if ${defines.HAS_OCCLUSIONMAP}
        occlusionStrength:f32,
    #endif
    #if ${defines.HAS_SKIN} 
        jointMatrixCount:f32,
        jointMatrixs:array<mat4x4>,
    #endif
   }

   struct SystemUniform {
    projectionMatrix: mat4x4<f32>,
    viewMatrix: mat4x4<f32>,
    inverseViewMatrix: mat4x4<f32>,
    cameraPosition: vec3<f32>,
   }; 
   
   struct VertexInput {
        @location(0) position: vec3<f32>,       
        @location(1) normal: vec3<f32>,
        @location(2) uv: vec2<f32>,
   }
//    ifdef HAS_SKIN
//    layout(location = JOINTS_0_LOCATION) in vec4 joint0;
//    layout(location = WEIGHTS_0_LOCATION) in vec4 weight0;
//    ifdef SKIN_VEC8
//    layout(location = JOINTS_1_LOCATION) in vec4 joint1;
//    layout(location = WEIGHTS_1_LOCATION) in vec4 weight1;
//    endif
//    endif
   
   
    struct VertOutput {
        @builtin(position) position:vec4<f32>,
        @location(0) worldPos:vec3<f32>,
        @location(1) normal:vec3<f32>,
        @location(2) uv:vec2<f32>
    }  

    @binding(0) @group(0) var<uniform> materialUniform : MaterialUniform;
    @binding(0) @group(1) var<uniform> systemUniform : SystemUniform;
   fn main(input: VertexInput) -> VertexOutput
   {
       #if ${defines.HAS_SKIN} 
            mat4 skinMatrix = 
                   weight0.x * u_jointMatrix.matrix[int(joint0.x)] +
                   weight0.y * u_jointMatrix.matrix[int(joint0.y)] +
                   weight0.z * u_jointMatrix.matrix[int(joint0.z)] +
                   weight0.w * u_jointMatrix.matrix[int(joint0.w)];
           #if ${defines.SKIN_VEC8} 
               skinMatrix +=
                   weight1.x * u_jointMatrix.matrix[int(joint1.x)] +
                   weight1.y * u_jointMatrix.matrix[int(joint1.y)] +
                   weight1.z * u_jointMatrix.matrix[int(joint1.z)] +
                   weight1.w * u_jointMatrix.matrix[int(joint1.w)];
           #endif
        #endif
        var output: VertexOutput;
        output.uv = uv;
   
        #if ${defines.HAS_SKIN} 
            output.normal = normalize((materialUniform.normalMatrix * transpose(inverse(skinMatrix)) * vec4<f32>(input.normal, 0.0)).xyz);
            let pos:vec4<f32> = systemUniform.projectionMatrix * systemUniform.viewMatrix * skinMatrix * vec4<f32>(input.position, 1.0);
            output.position = systemUniform.projectionMatrix * systemUniform.viewMatrix*materialUniform.modelMatrix * skinMatrix * vec4<f32>(input.position,1.0);
        #else
            output.normal = normalize((materialUniform.normalMatrix * vec4<f32>(input.normal,0.0)).xyz);
            let pos:vec4<f32>= systemUniform.projectionMatrix * systemUniform.viewMatrix * vec4<F32>(input.position, 1.0);
            output.position = systemUniform.projectionMatrix * systemUniform.viewMatrix *materialUniform.modelMatrix* vec4<f32>(input.position, 1.0);
        #endif      
        output.worldPos = vec3(pos.xyz) / pos.w; 
        return output;   
   }
   `
}
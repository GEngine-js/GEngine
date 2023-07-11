import { wgslParseDefines } from "../../WgslPreprocessor";

export function VertexInput(defines) {
	return wgslParseDefines`
        struct VertexInput {
            @location(${defines.positionLocation}) position: vec3<f32>,   
            #if${defines.HAS_NORMAL}  
                @location(${defines.normalLocation}) normal: vec3<f32>,
            #endif
            #if${defines.HAS_COLOR} 
                @location(${defines.colorLocation}) color: vec3<f32>,
            #endif
            #if ${defines.HAS_UV}
                @location(${defines.uvLocation}) uv: vec2<f32>,
            #endif
            #if${defines.HAS_SKIN} 
                @location(${defines.joint0Location}) joint0:vec4<f32>,
                @location(${defines.weight0Location}) weight0:vec4<f32>,
            #endif
            #if ${defines.USE_INSTANCE}
                @builtin(instance_index) instanceIdx : u32
            #endif
        }
   `;
}

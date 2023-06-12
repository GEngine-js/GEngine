import { wgslParseDefines } from "../../WgslPreprocessor";

export function VertexOutput(defines) {
	return wgslParseDefines`
    struct VertexOutput {
        @builtin(position) position:vec4<f32>,
        @location(0) worldPos:vec3<f32>,
        @location(1) normal:vec3<f32>,
        #if ${defines.HAS_UV}
            @location(2) uv:vec2<f32>
        #endif
    } 
    `;
}

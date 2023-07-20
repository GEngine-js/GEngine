export const VertexInput = `
        struct VertexInput {
            @location(positionLocation) position: vec3<f32>,   
            #if HAS_NORMAL  
                @location(normalLocation) normal: vec3<f32>,
            #endif
            #if HAS_COLOR 
                @location(colorLocation) color: vec3<f32>,
            #endif
            #if HAS_UV
                @location(uvLocation) uv: vec2<f32>,
            #endif
            #if HAS_SKIN
                @location(joint0Location) joint0:vec4<f32>,
                @location(weight0Location) weight0:vec4<f32>,
            #endif
            #if USE_INSTANCE
                @builtin(instance_index) instanceIdx : u32
            #endif
        }
   `;

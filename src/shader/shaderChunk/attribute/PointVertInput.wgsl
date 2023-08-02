struct PointVertInput {
    @location(vertexPointLocation) vertexPoint : vec3 <f32>,
    @location(positionLocation) position : vec3 <f32>,
    @location(uvLocation) uv : vec2 <f32>,
    #if HAS_COLOR
        @location(colorLocation) color : vec3 <f32>,
    #endif
    #if VERTEX_SIZE
        @location(sizeLocation) size : f32,
    #endif
    #if USE_INSTANCE
        @builtin(instance_index) instanceIdx : u32
    #endif
}

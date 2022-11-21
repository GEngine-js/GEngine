export default function pbrVert(defines){
    return  `

    struct VertexOutput {
        @builtin(position) position: vec4<f32>,
        @location(0) vUv: vec2<f32>,
        @location(1) vViewPosition: vec3<f32>, // Vector from vertex to camera.
        @location(2) vWorldPosition: vec3<f32>,
        // 可选
        @location(3) vUv2: vec2<f32>,
        #if ${defines.USE_COLOR_ALPHA}
            @location(4) vColor: vec4<f32>,
        #elif ${defines.USE_COLOR||defines.USE_INSTANCING_COLOR}
            @location(4) vColor: vec3<f32>,
        #endif
        @location(4) vColor: vec3<f32>,
        @location(5) vNormal: vec3<f32>,
        @location(6) vTangent: vec3<f32>,
        @location(7) vBitangent: vec3<f32>,
    };
    struct GlobalUniform {
        projectionMatrix: mat4x4<f32>,
        viewMatrix: mat4x4<f32>,
        inverseViewMatrix: mat4x4<f32>,
        cameraPosition: vec3<f32>,
    };
    struct VertUniform{

        modelMatrix: mat4x4<f32>,

        normalMatrix: mat3x3<f32>,

        #if ${defines.USE_SKINNING}

            bindMatrix:mat4x4<f32>,

            bindMatrixInverse:mat4x4<f32>,

            boneTextureSize:u32,
        #endif

        #if ${defines.USE_DISPLACEMENTMAP}
            displacementScale:f32,

            displacementBias:f32,
        #endif
        #if ${defines.USE_MORPHTARGETS}

            morphTargetBaseInfluence:f32,

            #if ${defines.MORPHTARGETS_TEXTURE} 

                morphTargetsTextureSize:vec2<u32>,

                MORPHTARGETS_COUNT:u32,

            #endif

            morphTargetInfluences:array<f32>,
            
        #endif
    }
    //texture and sampler
    @group(0) @binding(${defines.samplerBinding}) var baseSampler: sampler;
    #if ${defines.USE_SKINNING}
        //uniform highp sampler2D boneTexture;
        @group(0) @binding(${defines.boneTextureBinding}) var boneTexture: texture_2d<f32>;
    #endif

    #if ${defines.USE_DISPLACEMENTMAP}
        //uniform sampler2D displacementMap;
        @group(0) @binding(${defines.displacementMapBinding}) var displacementMap: texture_2d<f32>;
    #endif

    #if ${defines.MORPHTARGETS_TEXTURE}
        //uniform sampler2DArray morphTargetsTexture;
        @group(0) @binding(${defines.morphTargetsTextureBinding}) var morphTargetsTexture: texture_2d_array<f32>;
    #endif

    struct VertexInput {
        @location(0) position: vec3<f32>,  

        @location(1) normal: vec3<f32>,

        @location(2) uv: vec2<f32>,
        #if ${defines.USE_LIGHTMAP||defines.USE_AOMAP}
            @location(${defines.uv2Location}) uv2:vec2<f32>,
        #endif
        #if ${defines.USE_INSTANCING}
            @location(${defines.instanceMatrixLocation}) instanceMatrix:mat4x4<f32>,
        #endif
        #if ${defines.USE_INSTANCING_COLOR}
            @location(${defines.instanceColorLocation}) instanceColor:vec3<f32>,
        #endif
        
        #if ${defines.USE_TANGENT}
            @location(${defines.tangentLocation}) tangent:vec4<f32>,
        #endif
        #if ${defines.USE_COLOR_ALPHA}
            @location(${defines.colorLocation}) color:vec4<f32>,
        #elif ${defines.USE_COLOR}
            @location(${defines.colorLocation}) color:vec3<f32>,
        #endif

        #if ${defines.USE_MORPHTARGETS&&!defines.MORPHTARGETS_TEXTURE}
            @location(${defines.morphTarget0Location}) morphTarget0:vec3<f32>,

            @location(${defines.morphTarget1Location}) morphTarget1:vec3<f32>,

            @location(${defines.morphTarget2Location}) morphTarget2:vec3<f32>,

            @location(${defines.morphTarget3Location}) morphTarget3:vec3<f32>,
            #if ${defines.USE_MORPHNORMALS}
                @location(${defines.morphNormal0Location}) morphNormal0:vec3<f32>,

                @location(${defines.morphNormal1Location}) morphNormal1:vec3<f32>,

                @location(${defines.morphNormal2Location}) morphNormal2:vec3<f32>,

                @location(${defines.morphNormal3Location}) morphNormal3:vec3<f32>,
            #else
                @location(${defines.morphTarget4Location}) morphTarget4:vec3<f32>,

                @location(${defines.morphTarget5Location}) morphTarget5:vec3<f32>,

                @location(${defines.morphTarget6Location}) morphTarget6:vec3<f32>,

                @location(${defines.morphTarget7Location}) morphTarget7:vec3<f32>,
            #endif
        #endif
        #if ${defines.USE_SKINNING}
            @location(${defines.skinIndexLocation}) skinIndex:vec4<f32>,
            @location(${defines.skinWeightLocation}) skinWeight:vec4<f32>,
        #endif
  }

    #if ${defines.MORPHTARGETS_TEXTURE}
        fn getMorph( vertexIndex:u32, morphTargetIndex:u32,offset:u32 )->vec4<f32> {
            let texelIndex:u32 = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
            let y:u32 = texelIndex / vertUniform.morphTargetsTextureSize.x;
            let x:u32 = texelIndex - y * vertUniform.morphTargetsTextureSize.x;
            let morphUV:vec3<u32> = vec3<u32>( x, y, morphTargetIndex );
            //textureLoad
            //return texelFetch( morphTargetsTexture, morphUV, 0 );
            return textureLoad( morphTargetsTexture, morphUV, 0 );
        }
    #endif
    #if ${defines.USE_SKINNING}
        fn getBoneMatrix( i:f32 )->mat4x4<f32> {
            let j:f32 = i * 4.0;
            let x:f32 = mod( j, f32( vertUniform.boneTextureSize ) );
            let y:f32 = floor( j / f32( vertUniform.boneTextureSize ) );
            let dx:f32 = 1.0 / f32( vertUniform.boneTextureSize );
            let dy:f32 = 1.0 / f32( vertUniform.boneTextureSize );
            y = dy * ( y + 0.5 );
            
            let v1:vec4<f32> = textureSample(boneTexture, baseSampler, vec2<f32>( dx * ( x + 0.5 ), y ) );
            let v2:vec4<f32> = textureSample(boneTexture, baseSampler, vec2<f32>( dx * ( x + 1.5 ), y ) );
            let v3:vec4<f32> = textureSample(boneTexture, baseSampler, vec2<f32>( dx * ( x + 2.5 ), y ) );
            let v4:vec4<f32> = textureSample(boneTexture, baseSampler, vec2<f32>( dx * ( x + 3.5 ), y ) );
            let bone:mat4x4<f32> = mat4x4<f32>( v1, v2, v3, v4 );
            return bone;
        }
    #endif

    @binding(0) @group(0) var<uniform> vertUniform : VertUniform;
    @binding(0) @group(1) var<uniform> globalUniform : GlobalUniform;

    void main(input:VertexInput)->VertexOutput {
        var vertexOutput:VertexOutput;
        #if ${defines.USE_UV}
            vertexOutput.vUv = ( uvTransform * vec3(input.uv, 1 ) ).xy;
        #endif
        #if ${defines.USE_LIGHTMAP||defines.USE_AOMAP}
            vertexOutput.vUv2 = ( uv2Transform * vec3(input.uv2, 1 ) ).xy;
        #endif
        #if ${defines.USE_COLOR_ALPHA}
            vertexOutput.vColor = vec4( 1.0 );
            #elif ${defines.USE_COLOR||defines.USE_INSTANCING_COLOR}
            vertexOutput.vColor = vec3( 1.0 );
        #endif
        #if ${defines.USE_COLOR}
            vertexOutput.vColor *= input.color;
        #endif
        #if ${defines.USE_INSTANCING_COLOR}
            vertexOutput.vColor.xyz *= input.instanceColor.xyz;
        #endif
        #if ${defines.USE_MORPHCOLORS&&defines.MORPHTARGETS_TEXTURE}
            vertexOutput.vColor *= vertUniform.morphTargetBaseInfluence;
            for ( int i = 0; i < vertUniform.MORPHTARGETS_COUNT; i ++ ) {
                #if ${defines.USE_COLOR_ALPHA}
                    if ( vertUniform.morphTargetInfluences[ i ] ! = 0.0 ) vertexOutput.vColor += getMorph( gl_VertexID, i, 2 ) * vertUniform.morphTargetInfluences[ i ];
                    #elif ${defines.USE_COLOR}
                    if ( vertUniform.morphTargetInfluences[ i ] ! = 0.0 ) vertexOutput.vColor += getMorph( gl_VertexID, i, 2 ).rgb * vertUniform.morphTargetInfluences[ i ];
                #endif
            }
        #endif
        let objectNormal:vec3<f32> = vec3<f32>( input.normal );
        #if ${defines.USE_TANGENT}
            let objectTangent:vec3<f32> = vec3<f32>( input.tangent.xyz );
        #endif
        #if ${defines.USE_MORPHNORMALS}
            objectNormal *= vertUniform.morphTargetBaseInfluence;
            #if ${defines.MORPHTARGETS_TEXTURE}
                for ( int i = 0; i < vertUniform.MORPHTARGETS_COUNT; i ++ ) {
                    if ( vertUniform.morphTargetInfluences[ i ] ! = 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * vertUniform.morphTargetInfluences[ i ];
                }
            #else
                objectNormal += morphNormal0 * vertUniform.morphTargetInfluences[ 0 ];
                objectNormal += morphNormal1 * vertUniform.morphTargetInfluences[ 1 ];
                objectNormal += morphNormal2 * vertUniform.morphTargetInfluences[ 2 ];
                objectNormal += morphNormal3 * vertUniform.morphTargetInfluences[ 3 ];
            #endif
        #endif
        #if ${defines.USE_SKINNING}
            let boneMatX:mat4x4<f32> = getBoneMatrix( input.skinIndex.x );
            let boneMatY:mat4x4<f32> = getBoneMatrix( input.skinIndex.y );
            let boneMatZ:mat4x4<f32> = getBoneMatrix( input.skinIndex.z );
            let boneMatW:mat4x4<f32> = getBoneMatrix( input.skinIndex.w );
        #endif
        #if ${defines.USE_SKINNING}
            let skinMatrix:mat4x4<f32> = mat4x4<f32>( 0.0 );
            skinMatrix += input.skinWeight.x * boneMatX;
            skinMatrix += input.skinWeight.y * boneMatY;
            skinMatrix += input.skinWeight.z * boneMatZ;
            skinMatrix += input.skinWeight.w * boneMatW;
            skinMatrix = vertUniform.bindMatrixInverse * skinMatrix * vertUniform.bindMatrix;
            objectNormal = vec4<f32>( skinMatrix * vec4<f32>( objectNormal, 0.0 ) ).xyz;
            #if ${defines.USE_TANGENT}
                objectTangent = vec4<f32>( skinMatrix * vec4<f32>( objectTangent, 0.0 ) ).xyz;
            #endif
        #endif
        let transformedNormal:vec3<f32> = objectNormal;
        #if ${defines.USE_INSTANCING}
            let m:mat3x3<f32> = mat3x3<f32>( input.instanceMatrix );
            transformedNormal /= vec3<f32>( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
            transformedNormal = m * transformedNormal;
        #endif
        transformedNormal = vertUniform.normalMatrix * transformedNormal;
        #if ${defines.FLIP_SIDED}
            transformedNormal = - transformedNormal;
        #endif
        #if ${defines.USE_TANGENT}
           
            let transformedTangent:vec3<f32> = (globalUniform.viewMatrix*vertUniform.modelMatrix * vec4<f32>( objectTangent, 0.0 ) ).xyz;
            #if ${defines.FLIP_SIDED}
                transformedTangent = - transformedTangent;
            #endif
        #endif
        #if ${defines.FLAT_SHADED}
            vertexOutput.vNormal = normalize( transformedNormal );
            #if ${defines.USE_TANGENT}
                vTangent = normalize( transformedTangent );
                vBitangent = normalize( cross( vNormal, vTangent ) * input.tangent.w );
            #endif
        #endif
        let transformed:vec3<f32> = vec3<f32>( input.position );
        #if ${defines.USE_MORPHTARGETS}
            transformed *= vertUniform.morphTargetBaseInfluence;
            #if ${defines.MORPHTARGETS_TEXTURE}
                for ( int i = 0; i < vertUniform.MORPHTARGETS_COUNT; i ++ ) {
                    if ( vertUniform.morphTargetInfluences[ i ] ! = 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
                }
            #else
                transformed += input.morphTarget0 * vertUniform.morphTargetInfluences[ 0 ];
                transformed += input.morphTarget1 * vertUniform.morphTargetInfluences[ 1 ];
                transformed += input.morphTarget2 * vertUniform.morphTargetInfluences[ 2 ];
                transformed += input.morphTarget3 * vertUniform.morphTargetInfluences[ 3 ];
                #if ${defines.USE_MORPHNORMALS}
                    transformed += input.morphTarget4 * vertUniform.morphTargetInfluences[ 4 ];
                    transformed += input.morphTarget5 * vertUniform.morphTargetInfluences[ 5 ];
                    transformed += input.morphTarget6 * vertUniform.morphTargetInfluences[ 6 ];
                    transformed += input.morphTarget7 * vertUniform.morphTargetInfluences[ 7 ];
                #endif
            #endif
        #endif
        #if ${defines.USE_SKINNING}
            let skinVertex:vec4<f32> = vertUniform.bindMatrix * vec4<f32>( transformed, 1.0 );
            let skinned:vec4<f32> = vec4<f32>( 0.0 );
            skinned += boneMatX * skinVertex * input.skinWeight.x;
            skinned += boneMatY * skinVertex * input.skinWeight.y;
            skinned += boneMatZ * skinVertex * input.skinWeight.z;
            skinned += boneMatW * skinVertex * input.skinWeight.w;
            transformed = ( vertUniform.bindMatrixInverse * skinned ).xyz;
        #endif
        #if ${defines.USE_DISPLACEMENTMAP} 
            transformed += normalize( objectNormal ) * (textureSample(displacementMap, baseSampler, vUv).x * vertUniform.displacementScale + vertUniform.displacementBias );
        #endif
        let mvPosition:vec4<f32> = vec4<f32>( transformed, 1.0 );
        #if ${defines.USE_INSTANCING}
            mvPosition = input.instanceMatrix * mvPosition;
        #endif
        mvPosition = globalUniform.viewMatrix*vertUniform.modelMatrix * mvPosition;
        vertexOutput.position = globalUniform.projectionMatrix * mvPosition;
        vertexOutput.vViewPosition = - mvPosition.xyz;
        #if ${defines.USE_ENVMAP||defines.DISTANCE||defines.USE_TRANSMISSION} 
            vec4 worldPosition = vec4( transformed, 1.0 );
            #if ${defines.USE_INSTANCING}
                worldPosition = input.instanceMatrix * worldPosition;
            #endif
            worldPosition = vertUniform.modelMatrix * worldPosition;
        #endif
        #if ${defines.USE_TRANSMISSION}
            vertexOutput.vWorldPosition = worldPosition.xyz;
        #endif
        return vertexOutput;
    }
    `

}
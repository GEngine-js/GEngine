export default function pbrVert(defines){
    return  `

    // uniform mat4 modelMatrix;
    // uniform mat4 modelViewMatrix;
    // uniform mat4 projectionMatrix;
    // uniform mat4 viewMatrix;
    // uniform mat3 normalMatrix;
    // uniform vec3 cameraPosition;
    struct SelfUniform {
        modelMatrix: mat4x4<f32>,
        normalMatrix: mat3x3<f32>,
        color: vec3<f32>
    }
    struct SystemUniform {
        projectionMatrix: mat4x4<f32>,
        viewMatrix: mat4x4<f32>,
        inverseViewMatrix: mat4x4<f32>,
        cameraPosition: vec3<f32>,
    };
    struct VertexOutput {
        @builtin(position) position: vec4<f32>,
        @location(0) vUv: vec2<f32>,
        @location(1) vViewPosition: vec3<f32>, // Vector from vertex to camera.
        @location(2) vWorldPosition: vec3<f32>,
        // 可选
        @location(3) vUv2: vec4<f32>,
        @location(4) vColor: vec3<f32>,
        @location(5) vNormal: vec3<f32>,
        @location(6) vTangent: vec3<f32>,
        @location(7) vBitangent: vec3<f32>,
    };
    struct VertexInput {
        @location(0) position: vec3<f32>,  

        @location(1) normal: vec3<f32>,

        @location(2) uv: vec2<f32>,

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
        #if ${defines.USE_LIGHTMAP||defines.USE_AOMAP} 
            @location(${defines.uv2Location}) skinWeight:vec2<f32>,
        #endif
  }

    #define PI 3.141592653589793
    #define PI2 6.283185307179586
    #define PI_HALF 1.5707963267948966
    #define RECIPROCAL_PI 0.3183098861837907
    #define RECIPROCAL_PI2 0.15915494309189535
    #define EPSILON 1e-6

    #if ${defines.USE_DISPLACEMENTMAP}
        uniform sampler2D displacementMap;
        uniform float displacementScale;
        uniform float displacementBias;
    #endif
    #if ${defines.USE_MORPHTARGETS}
        uniform float morphTargetBaseInfluence;
        #if ${defines.MORPHTARGETS_TEXTURE}
            uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
            uniform sampler2DArray morphTargetsTexture;
            uniform ivec2 morphTargetsTextureSize;
            vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
                int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
                int y = texelIndex / morphTargetsTextureSize.x;
                int x = texelIndex - y * morphTargetsTextureSize.x;
                ivec3 morphUV = ivec3( x, y, morphTargetIndex );
                return texelFetch( morphTargetsTexture, morphUV, 0 );
            }
        #else
            #if ${defines.USE_MORPHNORMALS}
                uniform float morphTargetInfluences[ 8 ];
            #else
                uniform float morphTargetInfluences[ 4 ];
            #endif
        #endif
    #endif
    #if ${defines.USE_SKINNING}
        uniform mat4 bindMatrix;
        uniform mat4 bindMatrixInverse;
        uniform highp sampler2D boneTexture;
        uniform int boneTextureSize;
        mat4 getBoneMatrix( const in float i ) {
            float j = i * 4.0;
            float x = mod( j, float( boneTextureSize ) );
            float y = floor( j / float( boneTextureSize ) );
            float dx = 1.0 / float( boneTextureSize );
            float dy = 1.0 / float( boneTextureSize );
            y = dy * ( y + 0.5 );
            vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
            vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
            vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
            vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
            mat4 bone = mat4( v1, v2, v3, v4 );
            return bone;
        }
    #endif

    void main() {
        #if ${defines.USE_UV}
            vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
        #endif
        #if ${defines.USE_LIGHTMAP||defines.USE_AOMAP}
            vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
        #endif
        #if ${defines.USE_COLOR_ALPHA}
            vColor = vec4( 1.0 );
            #elif ${defines.USE_COLOR||defines.USE_INSTANCING_COLOR}
            vColor = vec3( 1.0 );
        #endif
        #if ${defines.USE_COLOR}
            vColor *= color;
        #endif
        #if ${defines.USE_INSTANCING_COLOR}
            vColor.xyz *= instanceColor.xyz;
        #endif
        #if ${defines.USE_MORPHCOLORS&&defines.MORPHTARGETS_TEXTURE}
            vColor *= morphTargetBaseInfluence;
            for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
                #if ${defines.USE_COLOR_ALPHA}
                    if ( morphTargetInfluences[ i ] ! = 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
                    #elif ${defines.USE_COLOR}
                    if ( morphTargetInfluences[ i ] ! = 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
                #endif
            }
        #endif
        vec3 objectNormal = vec3( normal );
        #if ${defines.USE_TANGENT}
            vec3 objectTangent = vec3( tangent.xyz );
        #endif
        #if ${defines.USE_MORPHNORMALS}
            objectNormal *= morphTargetBaseInfluence;
            #if ${defines.MORPHTARGETS_TEXTURE}
                for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
                    if ( morphTargetInfluences[ i ] ! = 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
                }
            #else
                objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
                objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
                objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
                objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
            #endif
        #endif
        #if ${defines.USE_SKINNING}
            mat4 boneMatX = getBoneMatrix( skinIndex.x );
            mat4 boneMatY = getBoneMatrix( skinIndex.y );
            mat4 boneMatZ = getBoneMatrix( skinIndex.z );
            mat4 boneMatW = getBoneMatrix( skinIndex.w );
        #endif
        #if ${defines.USE_SKINNING}
            mat4 skinMatrix = mat4( 0.0 );
            skinMatrix += skinWeight.x * boneMatX;
            skinMatrix += skinWeight.y * boneMatY;
            skinMatrix += skinWeight.z * boneMatZ;
            skinMatrix += skinWeight.w * boneMatW;
            skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
            objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
            #if ${defines.USE_TANGENT}
                objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
            #endif
        #endif
        vec3 transformedNormal = objectNormal;
        #if ${defines.USE_INSTANCING}
            mat3 m = mat3( instanceMatrix );
            transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
            transformedNormal = m * transformedNormal;
        #endif
        transformedNormal = normalMatrix * transformedNormal;
        #if ${defines.FLIP_SIDED}
            transformedNormal = - transformedNormal;
        #endif
        #if ${defines.USE_TANGENT}
            vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
            #if ${defines.FLIP_SIDED}
                transformedTangent = - transformedTangent;
            #endif
        #endif
        #if ${defines.FLAT_SHADED}
            vNormal = normalize( transformedNormal );
            #if ${defines.USE_TANGENT}
                vTangent = normalize( transformedTangent );
                vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
            #endif
        #endif
        vec3 transformed = vec3( position );
        #if ${defines.USE_MORPHTARGETS}
            transformed *= morphTargetBaseInfluence;
            #if ${defines.MORPHTARGETS_TEXTURE}
                for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
                    if ( morphTargetInfluences[ i ] ! = 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
                }
            #else
                transformed += morphTarget0 * morphTargetInfluences[ 0 ];
                transformed += morphTarget1 * morphTargetInfluences[ 1 ];
                transformed += morphTarget2 * morphTargetInfluences[ 2 ];
                transformed += morphTarget3 * morphTargetInfluences[ 3 ];
                #if ${defines.USE_MORPHNORMALS}
                    transformed += morphTarget4 * morphTargetInfluences[ 4 ];
                    transformed += morphTarget5 * morphTargetInfluences[ 5 ];
                    transformed += morphTarget6 * morphTargetInfluences[ 6 ];
                    transformed += morphTarget7 * morphTargetInfluences[ 7 ];
                #endif
            #endif
        #endif
        #if ${defines.USE_SKINNING}
            vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
            vec4 skinned = vec4( 0.0 );
            skinned += boneMatX * skinVertex * skinWeight.x;
            skinned += boneMatY * skinVertex * skinWeight.y;
            skinned += boneMatZ * skinVertex * skinWeight.z;
            skinned += boneMatW * skinVertex * skinWeight.w;
            transformed = ( bindMatrixInverse * skinned ).xyz;
        #endif
        #if ${defines.USE_DISPLACEMENTMAP}
            transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
        #endif
        vec4 mvPosition = vec4( transformed, 1.0 );
        #if ${defines.USE_INSTANCING}
            mvPosition = instanceMatrix * mvPosition;
        #endif
        mvPosition = modelViewMatrix * mvPosition;
        gl_Position = projectionMatrix * mvPosition;
        vViewPosition = - mvPosition.xyz;
        #if ${defines.USE_ENVMAP||defines.DISTANCE||defines.USE_TRANSMISSION} 
            vec4 worldPosition = vec4( transformed, 1.0 );
            #if ${defines.USE_INSTANCING}
                worldPosition = instanceMatrix * worldPosition;
            #endif
            worldPosition = modelMatrix * worldPosition;
        #endif
        #if ${defines.USE_TRANSMISSION}
            vWorldPosition = worldPosition.xyz;
        #endif
    }
    `

}
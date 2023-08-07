import { wgslParseDefines } from "../WgslPreprocessor";

export default function pbrVert(defines) {
	return wgslParseDefines`
    #include <pbrStruct>
    struct VertexOutput {
        @builtin(position) position: vec4<f32>,
        @location(0) vUv: vec2<f32>,
        @location(1) vViewPosition: vec3<f32>, // Vector from vertex to camera.
        @location(2) vWorldPosition: vec3<f32>,
        @location(3) vNormal: vec3<f32>,
        // 可选
        #if ${defines.USE_LIGHTTEXTURE || defines.USE_AOTEXTURE}
            @location(${defines.vUv2OutLocation}) vUv2: vec2<f32>,
        #endif

        #if ${defines.USE_COLOR_ALPHA}
            @location(${defines.vColorOutLocation}) vColor: vec4<f32>,
        #elif ${defines.USE_COLOR || defines.USE_INSTANCING_COLOR}
            @location(${defines.vColorOutLocation}) vColor: vec3<f32>,
        #endif

        #if ${defines.USE_TANGENT}
            @location(${defines.vTangentOutLocation}) vTangent: vec3<f32>,
            @location(${defines.vBitangentOutLocation}) vBitangent: vec3<f32>,
        #endif
    };
    struct GlobalUniform {
        projectionMatrix: mat4x4<f32>,
        viewMatrix: mat4x4<f32>,
        inverseViewMatrix: mat4x4<f32>,
        cameraPosition: vec3<f32>,
    };

    //texture and sampler
    // @group(0) @binding(${defines.samplerBinding}) var baseSampler: sampler;
    #if ${defines.USE_SKINNING}
        //uniform highp sampler2D boneTexture;
        @group(0) @binding(${defines.boneTextureBinding}) var boneTexture: texture_2d<f32>;
    #endif

    #if ${defines.USE_DISPLACEMENTTEXTURE}
        //uniform sampler2D displacementMap;
        @group(0) @binding(${defines.displacementTextureBinding}) var displacementMap: texture_2d<f32>;
    #endif

    #if ${defines.MORPHTARGETS_TEXTURE}
        //uniform sampler2DArray morphTargetsTexture;
        @group(0) @binding(${defines.morphTargetsTextureBinding}) var morphTargetsTexture: texture_2d_array<f32>;
    #endif

    struct VertexInput {
        @location(0) position: vec3<f32>,  

        @location(1) normal: vec3<f32>,

        @location(2) uv: vec2<f32>,
        #if ${defines.USE_LIGHTTEXTURE || defines.USE_AOTEXTURE}
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

        #if ${defines.USE_MORPHTARGETS && !defines.MORPHTARGETS_TEXTURE}
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
            let y:u32 = texelIndex / materialUniform.morphTargetsTextureSize.x;
            let x:u32 = texelIndex - y * materialUniform.morphTargetsTextureSize.x;
            let morphUV:vec3<u32> = vec3<u32>( x, y, morphTargetIndex );
            //textureLoad
            //return texelFetch( morphTargetsTexture, morphUV, 0 );
            return textureLoad( morphTargetsTexture, morphUV, 0 );
        }
    #endif
    #if ${defines.USE_SKINNING}
        fn getBoneMatrix( i:f32 )->mat4x4<f32> {
            let j:f32 = i * 4.0;
            let x:f32 = j%f32( materialUniform.boneTextureSize );
            let y:f32 = floor( j / f32( materialUniform.boneTextureSize ) );
            let dx:f32 = 1.0 / f32( materialUniform.boneTextureSize );
            let dy:f32 = 1.0 / f32( materialUniform.boneTextureSize );
            y = dy * ( y + 0.5 );
            
            let v1:vec4<f32> = textureSample(boneTexture, baseSampler, vec2<f32>( dx * ( x + 0.5 ), y ) );
            let v2:vec4<f32> = textureSample(boneTexture, baseSampler, vec2<f32>( dx * ( x + 1.5 ), y ) );
            let v3:vec4<f32> = textureSample(boneTexture, baseSampler, vec2<f32>( dx * ( x + 2.5 ), y ) );
            let v4:vec4<f32> = textureSample(boneTexture, baseSampler, vec2<f32>( dx * ( x + 3.5 ), y ) );
            let bone:mat4x4<f32> = mat4x4<f32>( v1, v2, v3, v4 );
            return bone;
        }
    #endif

    @binding(0) @group(0) var<uniform> materialUniform : MaterialUniform;
    @binding(0) @group(1) var<uniform> globalUniform : GlobalUniform;
    @vertex
    fn main(input:VertexInput)->VertexOutput {
        var vertexOutput:VertexOutput;
        #if ${defines.USE_TEXTURE}
            vertexOutput.vUv = input.uv;
        #endif
        #if ${defines.USE_LIGHTTEXTURE || defines.USE_AOTEXTURE}
            vertexOutput.vUv2 input.uv2;
        #endif
        #if ${defines.USE_COLOR_ALPHA}
            vertexOutput.vColor = vec4( 1.0 );
            #elif ${defines.USE_COLOR || defines.USE_INSTANCING_COLOR}
            vertexOutput.vColor = vec3( 1.0 );
        #endif
        #if ${defines.USE_COLOR}
            vertexOutput.vColor *= input.color;
        #endif
        #if ${defines.USE_INSTANCING_COLOR}
            vertexOutput.vColor.xyz *= input.instanceColor.xyz;
        #endif
        #if ${defines.USE_MORPHCOLORS && defines.MORPHTARGETS_TEXTURE}
            vertexOutput.vColor *= materialUniform.morphTargetBaseInfluence;
            for (let i : u32 = 0u; i < materialUniform.MORPHTARGETS_COUNT; i = i + 1u ) {
                #if ${defines.USE_COLOR_ALPHA}
                    if ( materialUniform.morphTargetInfluences[ i ] ! = 0.0 ) vertexOutput.vColor += getMorph( gl_VertexID, i, 2 ) * materialUniform.morphTargetInfluences[ i ];
                    #elif ${defines.USE_COLOR}
                    if ( materialUniform.morphTargetInfluences[ i ] ! = 0.0 ) vertexOutput.vColor += getMorph( gl_VertexID, i, 2 ).rgb * materialUniform.morphTargetInfluences[ i ];
                #endif
            }
        #endif
        var objectNormal:vec3<f32> = vec3<f32>(input.normal);
        #if ${defines.USE_TANGENT}
            let objectTangent:vec3<f32> = vec3<f32>( input.tangent.xyz );
        #endif
        #if ${defines.USE_MORPHNORMALS}
            objectNormal *= materialUniform.morphTargetBaseInfluence;
            #if ${defines.MORPHTARGETS_TEXTURE}
                for ( let i : u32 = 0u; i < materialUniform.MORPHTARGETS_COUNT; i = i + 1u) {
                    if ( materialUniform.morphTargetInfluences[ i ] ! = 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * materialUniform.morphTargetInfluences[ i ];
                }
            #else
                objectNormal += morphNormal0 * materialUniform.morphTargetInfluences[ 0 ];
                objectNormal += morphNormal1 * materialUniform.morphTargetInfluences[ 1 ];
                objectNormal += morphNormal2 * materialUniform.morphTargetInfluences[ 2 ];
                objectNormal += morphNormal3 * materialUniform.morphTargetInfluences[ 3 ];
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
            skinMatrix = materialUniform.bindMatrixInverse * skinMatrix * materialUniform.bindMatrix;
            objectNormal = vec4<f32>( skinMatrix * vec4<f32>( objectNormal, 0.0 ) ).xyz;
            #if ${defines.USE_TANGENT}
                objectTangent = vec4<f32>( skinMatrix * vec4<f32>( objectTangent, 0.0 ) ).xyz;
            #endif
        #endif
        var transformedNormal:vec3<f32> = objectNormal;
        // transformedNormal+=vec3<f32>(0.0);
        #if ${defines.USE_INSTANCING}
            let m:mat3x3<f32> = mat3x3<f32>( input.instanceMatrix );
            transformedNormal /= vec3<f32>( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
            transformedNormal = m * transformedNormal;
        #endif
        transformedNormal = materialUniform.normalMatrix * transformedNormal;
        #if ${defines.FLIP_SIDED}
            transformedNormal = - transformedNormal;
        #endif
        #if ${defines.USE_TANGENT}
            let transformedTangent:vec3<f32> = (globalUniform.viewMatrix*materialUniform.modelMatrix * vec4<f32>( objectTangent, 0.0 ) ).xyz;
            #if ${defines.FLIP_SIDED}
                transformedTangent = - transformedTangent;
            #endif
        #endif
        vertexOutput.vNormal = normalize( transformedNormal );
        #if ${defines.FLAT_SHADED}
            #if ${defines.USE_TANGENT}
                vTangent = normalize( transformedTangent );
                vBitangent = normalize( cross( vNormal, vTangent ) * input.tangent.w );
            #endif
        #endif
        let transformed:vec3<f32> = vec3<f32>( input.position );
        #if ${defines.USE_MORPHTARGETS}
            transformed *= materialUniform.morphTargetBaseInfluence;
            #if ${defines.MORPHTARGETS_TEXTURE}
                for ( let i : u32 = 0u; i < materialUniform.MORPHTARGETS_COUNT; i = i + 1u ) {
                    if ( materialUniform.morphTargetInfluences[ i ] ! = 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
                }
            #else
                transformed += input.morphTarget0 * materialUniform.morphTargetInfluences[ 0 ];
                transformed += input.morphTarget1 * materialUniform.morphTargetInfluences[ 1 ];
                transformed += input.morphTarget2 * materialUniform.morphTargetInfluences[ 2 ];
                transformed += input.morphTarget3 * materialUniform.morphTargetInfluences[ 3 ];
                #if ${defines.USE_MORPHNORMALS}
                    transformed += input.morphTarget4 * materialUniform.morphTargetInfluences[ 4 ];
                    transformed += input.morphTarget5 * materialUniform.morphTargetInfluences[ 5 ];
                    transformed += input.morphTarget6 * materialUniform.morphTargetInfluences[ 6 ];
                    transformed += input.morphTarget7 * materialUniform.morphTargetInfluences[ 7 ];
                #endif
            #endif
        #endif
        #if ${defines.USE_SKINNING}
            let skinVertex:vec4<f32> = materialUniform.bindMatrix * vec4<f32>( transformed, 1.0 );
            let skinned:vec4<f32> = vec4<f32>( 0.0 );
            skinned += boneMatX * skinVertex * input.skinWeight.x;
            skinned += boneMatY * skinVertex * input.skinWeight.y;
            skinned += boneMatZ * skinVertex * input.skinWeight.z;
            skinned += boneMatW * skinVertex * input.skinWeight.w;
            transformed = ( materialUniform.bindMatrixInverse * skinned ).xyz;
        #endif
        #if ${defines.USE_DISPLACEMENTTEXTURE} 
            transformed += normalize( objectNormal ) * (textureSample(displacementMap, baseSampler, vUv).x * materialUniform.displacementScale + materialUniform.displacementBias );
        #endif
        var mvPosition:vec4<f32> = vec4<f32>( transformed, 1.0 );
        #if ${defines.USE_INSTANCING}
            mvPosition = input.instanceMatrix * mvPosition;
        #endif
        mvPosition = globalUniform.viewMatrix*materialUniform.modelMatrix * mvPosition;
        vertexOutput.position = globalUniform.projectionMatrix * mvPosition;
        vertexOutput.vViewPosition = - mvPosition.xyz/mvPosition.w;
        #if ${defines.USE_ENVTEXTURE || defines.DISTANCE || defines.USE_TRANSMISSION} 
            var worldPosition:vec4<f32> = vec4<f32>( transformed, 1.0 );
            #if ${defines.USE_INSTANCING}
                worldPosition = input.instanceMatrix * worldPosition;
            #endif
            worldPosition = materialUniform.modelMatrix * worldPosition;
        #endif
        #if ${defines.USE_TRANSMISSION}
            vertexOutput.vWorldPosition = worldPosition.xyz;
        #endif
        return vertexOutput;
    }
    `;
}

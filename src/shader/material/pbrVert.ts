export default function pbrVert(defines){
    return  `
    #version 300 es
    precision mediump sampler2DArray;
    #define attribute in
    #define varying out
    #define texture2D texture
    precision highp float;
    precision highp int;
    #define HIGH_PRECISION
    #define SHADER_NAME MeshStandardMaterial
    #define STANDARD 
    #define VERTEX_TEXTURES
    #define USE_MAP
    #define USE_ENVMAP
    #define ENVMAP_MODE_REFLECTION
    #define USE_NORMALMAP
    #define TANGENTSPACE_NORMALMAP
    #define USE_ROUGHNESSMAP
    #define USE_METALNESSMAP
    #define USE_UV
    uniform mat4 modelMatrix;
    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;
    uniform mat4 viewMatrix;
    uniform mat3 normalMatrix;
    uniform vec3 cameraPosition;
    uniform bool isOrthographic;
    #ifdef USE_INSTANCING
        attribute mat4 instanceMatrix;
    #endif
    #ifdef USE_INSTANCING_COLOR
        attribute vec3 instanceColor;
    #endif
    attribute vec3 position;
    attribute vec3 normal;
    attribute vec2 uv;
    #ifdef USE_TANGENT
        attribute vec4 tangent;
    #endif
    #if defined( USE_COLOR_ALPHA )
        attribute vec4 color;
        #elif defined( USE_COLOR )
        attribute vec3 color;
    #endif
    #if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )
        attribute vec3 morphTarget0;
        attribute vec3 morphTarget1;
        attribute vec3 morphTarget2;
        attribute vec3 morphTarget3;
        #ifdef USE_MORPHNORMALS
            attribute vec3 morphNormal0;
            attribute vec3 morphNormal1;
            attribute vec3 morphNormal2;
            attribute vec3 morphNormal3;
        #else
            attribute vec3 morphTarget4;
            attribute vec3 morphTarget5;
            attribute vec3 morphTarget6;
            attribute vec3 morphTarget7;
        #endif
    #endif
    #ifdef USE_SKINNING
        attribute vec4 skinIndex;
        attribute vec4 skinWeight;
    #endif
    
    #define STANDARD
    varying vec3 vViewPosition;
    #ifdef USE_TRANSMISSION
        varying vec3 vWorldPosition;
    #endif
    #define PI 3.141592653589793
    #define PI2 6.283185307179586
    #define PI_HALF 1.5707963267948966
    #define RECIPROCAL_PI 0.3183098861837907
    #define RECIPROCAL_PI2 0.15915494309189535
    #define EPSILON 1e-6
    #ifndef saturate
        #define saturate( a ) clamp( a, 0.0, 1.0 )
    #endif
    #define whiteComplement( a ) ( 1.0 - saturate( a ) )
    float pow2( const in float x ) {
        return x*x;
    }
    vec3 pow2( const in vec3 x ) {
        return x*x;
    }
    float pow3( const in float x ) {
        return x*x*x;
    }
    float pow4( const in float x ) {
        float x2 = x*x;
        return x2*x2;
    }
    float max3( const in vec3 v ) {
        return max( max( v.x, v.y ), v.z );
    }
    float average( const in vec3 v ) {
        return dot( v, vec3( 0.3333333 ) );
    }
    highp float rand( const in vec2 uv ) {
        const highp float a = 12.9898, b = 78.233, c = 43758.5453;
        highp float dt = dot( uv.xy, vec2( a, b ) ), sn = mod( dt, PI );
        return fract( sin( sn ) * c );
    }
    #ifdef HIGH_PRECISION
        float precisionSafeLength( vec3 v ) {
            return length( v );
        }
    #else
        float precisionSafeLength( vec3 v ) {
            float maxComponent = max3( abs( v ) );
            return length( v / maxComponent ) * maxComponent;
        }
    #endif
    struct IncidentLight {
        vec3 color;
        vec3 direction;
        bool visible;
    };
    struct ReflectedLight {
        vec3 directDiffuse;
        vec3 directSpecular;
        vec3 indirectDiffuse;
        vec3 indirectSpecular;
    };
    struct GeometricContext {
        vec3 position;
        vec3 normal;
        vec3 viewDir;
        #ifdef USE_CLEARCOAT
            vec3 clearcoatNormal;
        #endif
    };
    vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
        return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
    }
    vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
        return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
    }
    mat3 transposeMat3( const in mat3 m ) {
        mat3 tmp;
        tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
        tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
        tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
        return tmp;
    }
    float luminance( const in vec3 rgb ) {
        const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
        return dot( weights, rgb );
    }
    bool isPerspectiveMatrix( mat4 m ) {
        return m[ 2 ][ 3 ] == - 1.0;
    }
    vec2 equirectUv( in vec3 dir ) {
        float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
        float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
        return vec2( u, v );
    }
    #ifdef USE_UV
        #ifdef UVS_VERTEX_ONLY
            vec2 vUv;
        #else
            varying vec2 vUv;
        #endif
        uniform mat3 uvTransform;
    #endif
    #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
        attribute vec2 uv2;
        varying vec2 vUv2;
        uniform mat3 uv2Transform;
    #endif
    #ifdef USE_DISPLACEMENTMAP
        uniform sampler2D displacementMap;
        uniform float displacementScale;
        uniform float displacementBias;
    #endif
    #if defined( USE_COLOR_ALPHA )
        varying vec4 vColor;
        #elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
        varying vec3 vColor;
    #endif
    #if ${defines.FLAT_SHADED}
        varying vec3 vNormal;
        #if ${defines.USE_TANGENT}
            varying vec3 vTangent;
            varying vec3 vBitangent;
        #endif
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
        #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
            vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
        #endif
        #if defined( USE_COLOR_ALPHA )
            vColor = vec4( 1.0 );
            #elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
            vColor = vec3( 1.0 );
        #endif
        #if ${defines.USE_COLOR}
            vColor *= color;
        #endif
        #if ${defines.USE_INSTANCING_COLOR}
            vColor.xyz *= instanceColor.xyz;
        #endif
        #if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
            vColor *= morphTargetBaseInfluence;
            for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
                #if defined( USE_COLOR_ALPHA )
                    if ( morphTargetInfluences[ i ] ! = 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
                    #elif defined( USE_COLOR )
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
            #ifdef USE_TANGENT
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
        #if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || 0 > 0
            vec4 worldPosition = vec4( transformed, 1.0 );
            #ifdef USE_INSTANCING
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
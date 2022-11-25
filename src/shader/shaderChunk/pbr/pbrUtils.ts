import { wgslParseDefines } from "../../WgslPreprocessor";

export default function pbrUtils(defines){
    return  wgslParseDefines`
    const PI:f32= 3.141592653589793;
    const PI2:f32= 6.283185307179586;
    const PI_HALF:f32= 1.5707963267948966;
    const RECIPROCAL_PI:f32= 0.3183098861837907;
    const RECIPROCAL_PI2:f32= 0.15915494309189535;
    const EPSILON:f32= 1e-6

    fn pow2(x:f32 )->f32 {
        return x*x;
    }
    fn pow2(x:vec3<f32> )->vec3<f32> {
        return x*x;
    }
    fn pow3( x:f32 )->f32 {
        return x*x*x;
    }
    fn pow4( x:f32 )->f32 {
        let x2:f32 = x*x;
        return x2*x2;
    }
    fn max3( const in vec3 v )->f32 {
        return max( max( v.x, v.y ), v.z );
    }
    fn average(v:vec3<f32> )->f32 {
        return dot( v, vec3<f32>( 0.3333333 ) );
    }
    highp float rand( const in vec2 uv ) {
        const highp float a = 12.9898, b = 78.233, c = 43758.5453;
        highp float dt = dot( uv.xy, vec2( a, b ) ), sn = mod( dt, PI );
        return fract( sin( sn ) * c );
    }
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
        #if ${defines.USE_CLEARCOAT}
            vec3 clearcoatNormal;
        #endif
    };
    fn transformDirection( dir:vec3<f32>, matrix:mat4x4<f32> )->vec3<f32> {
        return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
    }
    fn inverseTransformDirection( dir:vec3<f32>, matrix:mat4x4<f32> )->vec3<f32> {
        return normalize( ( vec4<f32>( dir, 0.0 ) * matrix ).xyz );
    }
    mat3 transposeMat3( const in mat3 m ) {
        mat3 tmp;
        tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
        tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
        tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
        return tmp;
    }
    fn luminance( rgb:vec3<f32> )->f32 {
        let weights:vec3<f32> = vec3<f32>(0.2126729, 0.7151522, 0.0721750 );
        return dot( weights, rgb );
    }
    fn LinearToneMapping( color:vec3<f32> )->vec3<f32> {
        return toneMappingExposure * color;
    }

    fn ReinhardToneMapping( color:vec3<f32> )->vec3<f32> {
        color *= toneMappingExposure;
        return saturate( color / ( vec3<f32>( 1.0 ) + color ) );
    }
    fn CustomToneMapping( color:vec3<f32> )->vec3<f32> {
        return color;
    }
    fn toneMapping( color:vec3<f32> )->vec3<f32> {
        return ReinhardToneMapping( color );
    }

    fn LinearToLinear( value:vec4<f32> )->vec4<f32> {
        return value;
    }
    fn LinearTosRGB( value:vec4<f32> )->vec4<f32> {
        return vec4<f32>( mix( pow( value.rgb, vec3<f32>( 0.41666 ) ) * 1.055 - vec3<f32>( 0.055 ), value.rgb * 12.92, vec3<f32>( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
    }
    fn linearToOutputTexel(value:vec4<f32> )->vec4<f32> {
        return LinearTosRGB( value );
    }
    `
}
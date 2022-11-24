struct IncidentLight {
    color: vec3<f32>;
    direction: vec3<f32>;
    visible: bool;
};
struct GeometricContext {
    position: vec3<f32>;
    normal: vec3<f32>;
    viewDir: vec3<f32>;
    // #ifdef USE_CLEARCOAT
    //     vec3 clearcoatNormal;
    // #endif
};
struct SpotLight {
    position: vec3<f32>;
    direction: vec3<f32>;
    color: vec3<f32>;
    distance: f32;
    decay: f32;
    coneCos: f32;
    penumbraCos: f32;
};
struct PointLight {
    position: vec3<f32>;
    color: vec3<f32>;
    distance: f32;
    decay: f32;
};
struct DirectionalLight {
    direction: vec3<f32>;
    color: vec3<f32>;
};
struct LightCount{
    spotCount:f32;
    pointCount:f32;
    directionCount:f32;
    ambientLightCount:f32
}
struct AmbientLight{
     color: vec3<f32>;
}
struct BlinnPhongMaterial {
	diffuseColor:vec3<f32>;
	specularColor:vec3<f32>;
	specularShininess:f32;
	fspecularStrength:f32;
};

    // fn LTC_Uv( N:vec3<f32>, V:vec3<f32>,roughness:f32 )->vec2<f32> {
    //     let LUT_SIZE:f32 = 64.0;
    //     let LUT_SCALE:f32 = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
    //     let LUT_BIAS:f32 = 0.5 / LUT_SIZE;
    //     let dotNV:f32 = saturate( dot( N, V ) );
    //     let uv:vec2<f32> = vec2<f32>( roughness, sqrt( 1.0 - dotNV ) );
    //     uv = uv * LUT_SCALE + LUT_BIAS;
    //     return uv;
    // }
    // fn LTC_ClippedSphereFormFactor( f:vec3<f32> )->f32 {
    //     let l:f32 = length( f );
    //     return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
    // }
    // fn LTC_EdgeVectorFormFactor( v1:vec3<f32>,v2:vec3<f32> )->vec3<f32> {
    //     let x:f32 = dot( v1, v2 );
    //     let y:f32 = abs( x );
    //     let a:f32 = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
    //     let b:f32 = 3.4175940 + ( 4.1616724 + y ) * y;
    //     let v:f32 = a / b;
    //     let theta_sintheta:f32 = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
    //     return cross( v1, v2 ) * theta_sintheta;
    // }
    // fn LTC_Evaluate(N :vec3<f32>,  V:vec3<f32>,  P:vec3<f32>, mInv:mat3x3<f32>, rectCoords:array<f32,4>)->vec3<f32> {
    //     let v1:vec3<f32> = rectCoords[1] - rectCoords[0];
    //     let v2:vec3<f32> = rectCoords[3] - rectCoords[0];
    //     let lightNormal:vec3<f32> = cross( v1, v2 );
    //     if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3<f32>( 0.0 );
    //     var T1:vec3<f32>, T2:vec3<f32>;
    //     T1 = normalize( V - N * dot( V, N ) );
    //     T2 = - cross( N, T1 );
    //     let mat:mat3x3<f32> = mInv * transposeMat3( mat3x3<f32>( T1, T2, N ) );
    //     ///////////////////////////////数组
    //     var coords:array<f32,4>;
    //     coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
    //     coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
    //     coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
    //     coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
    //     coords[ 0 ] = normalize( coords[ 0 ] );
    //     coords[ 1 ] = normalize( coords[ 1 ] );
    //     coords[ 2 ] = normalize( coords[ 2 ] );
    //     coords[ 3 ] = normalize( coords[ 3 ] );
    //     let vectorFormFactor:vec3<f32> = vec3<f32>( 0.0 );
    //     vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
    //     vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
    //     vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
    //     vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
    //     float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
    //     return vec3<f32>( result );
    // }
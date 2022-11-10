// define Struct InputData
`
#version 300 es
#define varying in
layout(location = 0) out highp vec4 pc_fragColor;
#define gl_FragColor pc_fragColor
#define gl_FragDepthEXT gl_FragDepth
#define texture2D texture
#define textureCube texture
#define texture2DProj textureProj
#define texture2DLodEXT textureLod
#define texture2DProjLodEXT textureProjLod
#define textureCubeLodEXT textureLod
#define texture2DGradEXT textureGrad
#define texture2DProjGradEXT textureProjGrad
#define textureCubeGradEXT textureGrad
precision highp float;
precision highp int;
#define HIGH_PRECISION
#define SHADER_NAME MeshPhongMaterial
uniform mat4 viewMatrix;
uniform vec3 cameraPosition;
uniform bool isOrthographic;
#define OPAQUE
vec4 LinearToLinear( in vec4 value ) {
    return value;
}
vec4 LinearTosRGB( in vec4 value ) {
    return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 linearToOutputTexel( vec4 value ) {
    return LinearTosRGB( value );
}
#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
vec3 packNormalToRGB( const in vec3 normal ) {
    return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
    return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;
const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
    vec4 r = vec4( fract( v * PackFactors ), v );
    r.yzw -= r.xyz * ShiftRight8;
    return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
    return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
    return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
    return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
    vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
    return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
    return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
    return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
    return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
    return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
    return ( near * far ) / ( ( far - near ) * invClipZ - far );
}
#ifdef DITHERING
    vec3 dithering( vec3 color ) {
        float grid_position = rand( gl_FragCoord.xy );
        vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
        dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
        return color + dither_shift_RGB;
    }
#endif
#if defined( USE_COLOR_ALPHA )
    varying vec4 vColor;
    #elif defined( USE_COLOR )
    varying vec3 vColor;
#endif
#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
    varying vec2 vUv;
#endif
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
    varying vec2 vUv2;
#endif
#ifdef USE_MAP
    uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
    uniform sampler2D alphaMap;
#endif
#ifdef USE_ALPHATEST
    uniform float alphaTest;
#endif
#ifdef USE_AOMAP
    uniform sampler2D aoMap;
    uniform float aoMapIntensity;
#endif
#ifdef USE_LIGHTMAP
    uniform sampler2D lightMap;
    uniform float lightMapIntensity;
#endif
#ifdef USE_EMISSIVEMAP
    uniform sampler2D emissiveMap;
#endif
#ifdef USE_ENVMAP
    uniform float envMapIntensity;
    uniform float flipEnvMap;
    #ifdef ENVMAP_TYPE_CUBE
        uniform samplerCube envMap;
    #else
        uniform sampler2D envMap;
    #endif
    
#endif
#ifdef USE_ENVMAP
    uniform float reflectivity;
    #if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
        #define ENV_WORLDPOS
    #endif
    #ifdef ENV_WORLDPOS
        varying vec3 vWorldPosition;
        uniform float refractionRatio;
    #else
        varying vec3 vReflect;
    #endif
#endif
#ifdef USE_FOG
    uniform vec3 fogColor;
    varying float vFogDepth;
    #ifdef FOG_EXP2
        uniform float fogDensity;
    #else
        uniform float fogNear;
        uniform float fogFar;
    #endif
#endif
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
    return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
    float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
    return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
    float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
    return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
    float a2 = pow2( alpha );
    float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
    float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
    return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
    float a2 = pow2( alpha );
    float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
    return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
    float alpha = pow2( roughness );
    vec3 halfDir = normalize( lightDir + viewDir );
    float dotNL = saturate( dot( normal, lightDir ) );
    float dotNV = saturate( dot( normal, viewDir ) );
    float dotNH = saturate( dot( normal, halfDir ) );
    float dotVH = saturate( dot( viewDir, halfDir ) );
    vec3 F = F_Schlick( f0, f90, dotVH );
    float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
    float D = D_GGX( alpha, dotNH );
    return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
    vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
        float alpha = pow2( roughness );
        vec3 halfDir = normalize( lightDir + viewDir );
        float dotNL = saturate( dot( normal, lightDir ) );
        float dotNV = saturate( dot( normal, viewDir ) );
        float dotNH = saturate( dot( normal, halfDir ) );
        float dotVH = saturate( dot( viewDir, halfDir ) );
        vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
        float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
        float D = D_GGX( alpha, dotNH );
        return F * ( V * D );
    }
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
    const float LUT_SIZE = 64.0;
    const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
    const float LUT_BIAS = 0.5 / LUT_SIZE;
    float dotNV = saturate( dot( N, V ) );
    vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
    uv = uv * LUT_SCALE + LUT_BIAS;
    return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
    float l = length( f );
    return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
    float x = dot( v1, v2 );
    float y = abs( x );
    float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
    float b = 3.4175940 + ( 4.1616724 + y ) * y;
    float v = a / b;
    float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
    return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
    vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
    vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
    vec3 lightNormal = cross( v1, v2 );
    if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
    vec3 T1, T2;
    T1 = normalize( V - N * dot( V, N ) );
    T2 = - cross( N, T1 );
    mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
    vec3 coords[ 4 ];
    coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
    coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
    coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
    coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
    coords[ 0 ] = normalize( coords[ 0 ] );
    coords[ 1 ] = normalize( coords[ 1 ] );
    coords[ 2 ] = normalize( coords[ 2 ] );
    coords[ 3 ] = normalize( coords[ 3 ] );
    vec3 vectorFormFactor = vec3( 0.0 );
    vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
    vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
    vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
    vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
    float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
    return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
    return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
    return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
    vec3 halfDir = normalize( lightDir + viewDir );
    float dotNH = saturate( dot( normal, halfDir ) );
    float dotVH = saturate( dot( viewDir, halfDir ) );
    vec3 F = F_Schlick( specularColor, 1.0, dotVH );
    float G = G_BlinnPhong_Implicit( );
    float D = D_BlinnPhong( shininess, dotNH );
    return F * ( G * D );
}
#if defined( USE_SHEEN )
    float D_Charlie( float roughness, float dotNH ) {
        float alpha = pow2( roughness );
        float invAlpha = 1.0 / alpha;
        float cos2h = dotNH * dotNH;
        float sin2h = max( 1.0 - cos2h, 0.0078125 );
        return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
    }
    float V_Neubelt( float dotNV, float dotNL ) {
        return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
    }
    vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
        vec3 halfDir = normalize( lightDir + viewDir );
        float dotNL = saturate( dot( normal, lightDir ) );
        float dotNV = saturate( dot( normal, viewDir ) );
        float dotNH = saturate( dot( normal, halfDir ) );
        float D = D_Charlie( sheenRoughness, dotNH );
        float V = V_Neubelt( dotNV, dotNL );
        return sheenColor * ( D * V );
    }
#endif
uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
    float x = normal.x, y = normal.y, z = normal.z;
    vec3 result = shCoefficients[ 0 ] * 0.886227;
    result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
    result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
    result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
    result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
    result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
    result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
    result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
    result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
    return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
    vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
    vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
    return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
    vec3 irradiance = ambientLightColor;
    return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
    #if defined ( PHYSICALLY_CORRECT_LIGHTS )
        float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
        if ( cutoffDistance > 0.0 ) {
            distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
        }
        return distanceFalloff;
    #else
        if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
            return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
        }
        return 1.0;
    #endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
    return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if 0 > 0
    struct DirectionalLight {
        vec3 direction;
        vec3 color;
    };
    uniform DirectionalLight directionalLights[ 0 ];
    void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
        light.color = directionalLight.color;
        light.direction = directionalLight.direction;
        light.visible = true;
    }
#endif
#if 3 > 0
    struct PointLight {
        vec3 position;
        vec3 color;
        float distance;
        float decay;
    };
    uniform PointLight pointLights[ 3 ];
    void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
        vec3 lVector = pointLight.position - geometry.position;
        light.direction = normalize( lVector );
        float lightDistance = length( lVector );
        light.color = pointLight.color;
        light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
        light.visible = ( light.color ! = vec3( 0.0 ) );
    }
#endif
#if 0 > 0
    struct SpotLight {
        vec3 position;
        vec3 direction;
        vec3 color;
        float distance;
        float decay;
        float coneCos;
        float penumbraCos;
    };
    uniform SpotLight spotLights[ 0 ];
    void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
        vec3 lVector = spotLight.position - geometry.position;
        light.direction = normalize( lVector );
        float angleCos = dot( light.direction, spotLight.direction );
        float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
        if ( spotAttenuation > 0.0 ) {
            float lightDistance = length( lVector );
            light.color = spotLight.color * spotAttenuation;
            light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
            light.visible = ( light.color ! = vec3( 0.0 ) );
        }
        else {
            light.color = vec3( 0.0 );
            light.visible = false;
        }
    
    }
#endif
#if 0 > 0
    struct RectAreaLight {
        vec3 color;
        vec3 position;
        vec3 halfWidth;
        vec3 halfHeight;
    };
    uniform sampler2D ltc_1;
    uniform sampler2D ltc_2;
    uniform RectAreaLight rectAreaLights[ 0 ];
#endif
#if 0 > 0
    struct HemisphereLight {
        vec3 direction;
        vec3 skyColor;
        vec3 groundColor;
    };
    uniform HemisphereLight hemisphereLights[ 0 ];
    vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
        float dotNL = dot( normal, hemiLight.direction );
        float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
        vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
        return irradiance;
    }
#endif
#ifndef FLAT_SHADED
    varying vec3 vNormal;
    #ifdef USE_TANGENT
        varying vec3 vTangent;
        varying vec3 vBitangent;
    #endif
#endif
varying vec3 vViewPosition;
struct BlinnPhongMaterial {
    vec3 diffuseColor;
    vec3 specularColor;
    float specularShininess;
    float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
    float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
    vec3 irradiance = dotNL * directLight.color;
    reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
    reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
    reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)
#if 0 > 0
    varying vec4 vSpotLightCoord[ 0 ];
#endif
#if 0 > 0
    uniform sampler2D spotLightMap[ 0 ];
#endif
#ifdef USE_SHADOWMAP
    #if 0 > 0
        uniform sampler2D directionalShadowMap[ 0 ];
        varying vec4 vDirectionalShadowCoord[ 0 ];
        struct DirectionalLightShadow {
            float shadowBias;
            float shadowNormalBias;
            float shadowRadius;
            vec2 shadowMapSize;
        };
        uniform DirectionalLightShadow directionalLightShadows[ 0 ];
    #endif
    #if 0 > 0
        uniform sampler2D spotShadowMap[ 0 ];
        struct SpotLightShadow {
            float shadowBias;
            float shadowNormalBias;
            float shadowRadius;
            vec2 shadowMapSize;
        };
        uniform SpotLightShadow spotLightShadows[ 0 ];
    #endif
    #if 0 > 0
        uniform sampler2D pointShadowMap[ 0 ];
        varying vec4 vPointShadowCoord[ 0 ];
        struct PointLightShadow {
            float shadowBias;
            float shadowNormalBias;
            float shadowRadius;
            vec2 shadowMapSize;
            float shadowCameraNear;
            float shadowCameraFar;
        };
        uniform PointLightShadow pointLightShadows[ 0 ];
    #endif
    float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
        return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
    }
    vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
        return unpackRGBATo2Half( texture2D( shadow, uv ) );
    }
    float VSMShadow (sampler2D shadow, vec2 uv, float compare ) {
        float occlusion = 1.0;
        vec2 distribution = texture2DDistribution( shadow, uv );
        float hard_shadow = step( compare, distribution.x );
        if (hard_shadow ! = 1.0 ) {
            float distance = compare - distribution.x ;
            float variance = max( 0.00000, distribution.y * distribution.y );
            float softness_probability = variance / (variance + distance * distance );
            softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );
            occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
        }
        return occlusion;
    }
    float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
        float shadow = 1.0;
        shadowCoord.xyz /= shadowCoord.w;
        shadowCoord.z += shadowBias;
        bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
        bool inFrustum = all( inFrustumVec );
        bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
        bool frustumTest = all( frustumTestVec );
        if ( frustumTest ) {
            #if defined( SHADOWMAP_TYPE_PCF )
                vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
                float dx0 = - texelSize.x * shadowRadius;
                float dy0 = - texelSize.y * shadowRadius;
                float dx1 = + texelSize.x * shadowRadius;
                float dy1 = + texelSize.y * shadowRadius;
                float dx2 = dx0 / 2.0;
                float dy2 = dy0 / 2.0;
                float dx3 = dx1 / 2.0;
                float dy3 = dy1 / 2.0;
                shadow = (
                texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
                texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
                texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
                texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
                texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
                texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
                texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
                texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
                texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
                texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
                texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
                texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
                texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
                texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
                texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
                texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
                texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
                ) * ( 1.0 / 17.0 );
                #elif defined( SHADOWMAP_TYPE_PCF_SOFT )
                vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
                float dx = texelSize.x;
                float dy = texelSize.y;
                vec2 uv = shadowCoord.xy;
                vec2 f = fract( uv * shadowMapSize + 0.5 );
                uv -= f * texelSize;
                shadow = (
                texture2DCompare( shadowMap, uv, shadowCoord.z ) +
                texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
                texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
                texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
                mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ), f.x ) +
                mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ), f.x ) +
                mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ), f.y ) +
                mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ), f.y ) +
                mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ), f.x ), mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ), f.x ), f.y )
                ) * ( 1.0 / 9.0 );
                #elif defined( SHADOWMAP_TYPE_VSM )
                shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
            #else
                shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
            #endif
        }
        return shadow;
    }
    vec2 cubeToUV( vec3 v, float texelSizeY ) {
        vec3 absV = abs( v );
        float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
        absV *= scaleToCube;
        v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
        vec2 planar = v.xy;
        float almostATexel = 1.5 * texelSizeY;
        float almostOne = 1.0 - almostATexel;
        if ( absV.z >= almostOne ) {
            if ( v.z > 0.0 )
            planar.x = 4.0 - v.x;
        }
        else if ( absV.x >= almostOne ) {
            float signX = sign( v.x );
            planar.x = v.z * signX + 2.0 * signX;
        }
        else if ( absV.y >= almostOne ) {
            float signY = sign( v.y );
            planar.x = v.x + 2.0 * signY + 2.0;
            planar.y = v.z * signY - 2.0;
        }
        return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
    }
    float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
        vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
        vec3 lightToPosition = shadowCoord.xyz;
        float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );
        dp += shadowBias;
        vec3 bd3D = normalize( lightToPosition );
        #if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
            vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
            return (
            texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
            texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
            texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
            texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
            texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
            texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
            texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
            texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
            texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
            ) * ( 1.0 / 9.0 );
        #else
            return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
        #endif
    }
#endif
#ifdef USE_BUMPMAP
    uniform sampler2D bumpMap;
    uniform float bumpScale;
    vec2 dHdxy_fwd() {
        vec2 dSTdx = dFdx( vUv );
        vec2 dSTdy = dFdy( vUv );
        float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
        float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
        float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
        return vec2( dBx, dBy );
    }
    vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
        vec3 vSigmaX = dFdx( surf_pos.xyz );
        vec3 vSigmaY = dFdy( surf_pos.xyz );
        vec3 vN = surf_norm;
        vec3 R1 = cross( vSigmaY, vN );
        vec3 R2 = cross( vN, vSigmaX );
        float fDet = dot( vSigmaX, R1 ) * faceDirection;
        vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
        return normalize( abs( fDet ) * surf_norm - vGrad );
    }
#endif
#ifdef USE_NORMALMAP
    uniform sampler2D normalMap;
    uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
    uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
    vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
        vec3 q0 = dFdx( eye_pos.xyz );
        vec3 q1 = dFdy( eye_pos.xyz );
        vec2 st0 = dFdx( vUv.st );
        vec2 st1 = dFdy( vUv.st );
        vec3 N = surf_norm;
        vec3 q1perp = cross( q1, N );
        vec3 q0perp = cross( N, q0 );
        vec3 T = q1perp * st0.x + q0perp * st1.x;
        vec3 B = q1perp * st0.y + q0perp * st1.y;
        float det = max( dot( T, T ), dot( B, B ) );
        float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
        return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
    }
#endif
#ifdef USE_SPECULARMAP
    uniform sampler2D specularMap;
#endif
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
    uniform float logDepthBufFC;
    varying float vFragDepth;
    varying float vIsPerspective;
#endif
#if 0 > 0
    varying vec3 vClipPosition;
    uniform vec4 clippingPlanes[ 0 ];
#endif
void main() {
    #if 0 > 0
        vec4 plane;
        #if 0 < 0
            bool clipped = true;
            if ( clipped ) discard;
        #endif
    #endif
    vec4 diffuseColor = vec4( diffuse, opacity );
    ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
    vec3 totalEmissiveRadiance = emissive;
    #if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
        gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
    #endif
    #ifdef USE_MAP
        vec4 sampledDiffuseColor = texture2D( map, vUv );
        #ifdef DECODE_VIDEO_TEXTURE
            sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
        #endif
        diffuseColor *= sampledDiffuseColor;
    #endif
    #if defined( USE_COLOR_ALPHA )
        diffuseColor *= vColor;
        #elif defined( USE_COLOR )
        diffuseColor.rgb *= vColor;
    #endif
    #ifdef USE_ALPHAMAP
        diffuseColor.a *= texture2D( alphaMap, vUv ).g;
    #endif
    #ifdef USE_ALPHATEST
        if ( diffuseColor.a < alphaTest ) discard;
    #endif
    float specularStrength;
    #ifdef USE_SPECULARMAP
        vec4 texelSpecular = texture2D( specularMap, vUv );
        specularStrength = texelSpecular.r;
    #else
        specularStrength = 1.0;
    #endif
    float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
    #ifdef FLAT_SHADED
        vec3 fdx = dFdx( vViewPosition );
        vec3 fdy = dFdy( vViewPosition );
        vec3 normal = normalize( cross( fdx, fdy ) );
    #else
        vec3 normal = normalize( vNormal );
        #ifdef DOUBLE_SIDED
            normal = normal * faceDirection;
        #endif
        #ifdef USE_TANGENT
            vec3 tangent = normalize( vTangent );
            vec3 bitangent = normalize( vBitangent );
            #ifdef DOUBLE_SIDED
                tangent = tangent * faceDirection;
                bitangent = bitangent * faceDirection;
            #endif
            #if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
                mat3 vTBN = mat3( tangent, bitangent, normal );
            #endif
        #endif
    #endif
    vec3 geometryNormal = normal;
    #ifdef OBJECTSPACE_NORMALMAP
        normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
        #ifdef FLIP_SIDED
            normal = - normal;
        #endif
        #ifdef DOUBLE_SIDED
            normal = normal * faceDirection;
        #endif
        normal = normalize( normalMatrix * normal );
        #elif defined( TANGENTSPACE_NORMALMAP )
        vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
        mapN.xy *= normalScale;
        #ifdef USE_TANGENT
            normal = normalize( vTBN * mapN );
        #else
            normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
        #endif
        #elif defined( USE_BUMPMAP )
        normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
    #endif
    #ifdef USE_EMISSIVEMAP
        vec4 emissiveColor = texture2D( emissiveMap, vUv );
        totalEmissiveRadiance *= emissiveColor.rgb;
    #endif
    BlinnPhongMaterial material;
    material.diffuseColor = diffuseColor.rgb;
    material.specularColor = specular;
    material.specularShininess = shininess;
    material.specularStrength = specularStrength;
    GeometricContext geometry;
    geometry.position = - vViewPosition;
    geometry.normal = normal;
    geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
    #ifdef USE_CLEARCOAT
        geometry.clearcoatNormal = clearcoatNormal;
    #endif
    #ifdef USE_IRIDESCENCE
        float dotNVi = saturate( dot( normal, geometry.viewDir ) );
        if ( material.iridescenceThickness == 0.0 ) {
            material.iridescence = 0.0;
        }
        else {
            material.iridescence = saturate( material.iridescence );
        }
        if ( material.iridescence > 0.0 ) {
            material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
            material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
        }
    #endif
    IncidentLight directLight;
    #if ( 3 > 0 ) && defined( RE_Direct )
        PointLight pointLight;
        #if defined( USE_SHADOWMAP ) && 0 > 0
            PointLightShadow pointLightShadow;
        #endif
        
        pointLight = pointLights[ 0 ];
        getPointLightInfo( pointLight, geometry, directLight );
        #if defined( USE_SHADOWMAP ) && ( 0 < 0 )
            pointLightShadow = pointLightShadows[ 0 ];
            directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ 0 ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ 0 ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
        #endif
        RE_Direct( directLight, geometry, material, reflectedLight );
        pointLight = pointLights[ 1 ];
        getPointLightInfo( pointLight, geometry, directLight );
        #if defined( USE_SHADOWMAP ) && ( 1 < 0 )
            pointLightShadow = pointLightShadows[ 1 ];
            directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ 1 ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ 1 ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
        #endif
        RE_Direct( directLight, geometry, material, reflectedLight );
        pointLight = pointLights[ 2 ];
        getPointLightInfo( pointLight, geometry, directLight );
        #if defined( USE_SHADOWMAP ) && ( 2 < 0 )
            pointLightShadow = pointLightShadows[ 2 ];
            directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ 2 ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ 2 ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
        #endif
        RE_Direct( directLight, geometry, material, reflectedLight );
    #endif
    #if ( 0 > 0 ) && defined( RE_Direct )
        SpotLight spotLight;
        vec4 spotColor;
        vec3 spotLightCoord;
        bool inSpotLightMap;
        #if defined( USE_SHADOWMAP ) && 0 > 0
            SpotLightShadow spotLightShadow;
        #endif
        
    #endif
    #if ( 0 > 0 ) && defined( RE_Direct )
        DirectionalLight directionalLight;
        #if defined( USE_SHADOWMAP ) && 0 > 0
            DirectionalLightShadow directionalLightShadow;
        #endif
        
    #endif
    #if ( 0 > 0 ) && defined( RE_Direct_RectArea )
        RectAreaLight rectAreaLight;
    #endif
    #if defined( RE_IndirectDiffuse )
        vec3 iblIrradiance = vec3( 0.0 );
        vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
        irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
        #if ( 0 > 0 )
            
        #endif
    #endif
    #if defined( RE_IndirectSpecular )
        vec3 radiance = vec3( 0.0 );
        vec3 clearcoatRadiance = vec3( 0.0 );
    #endif
    #if defined( RE_IndirectDiffuse )
        #ifdef USE_LIGHTMAP
            vec4 lightMapTexel = texture2D( lightMap, vUv2 );
            vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
            irradiance += lightMapIrradiance;
        #endif
        #if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
            iblIrradiance += getIBLIrradiance( geometry.normal );
        #endif
    #endif
    #if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
        radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
        #ifdef USE_CLEARCOAT
            clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
        #endif
    #endif
    #if defined( RE_IndirectDiffuse )
        RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
    #endif
    #if defined( RE_IndirectSpecular )
        RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
    #endif
    #ifdef USE_AOMAP
        float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
        reflectedLight.indirectDiffuse *= ambientOcclusion;
        #if defined( USE_ENVMAP ) && defined( STANDARD )
            float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
            reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
        #endif
    #endif
    vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
    #ifdef USE_ENVMAP
        #ifdef ENV_WORLDPOS
            vec3 cameraToFrag;
            if ( isOrthographic ) {
                cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
            }
            else {
                cameraToFrag = normalize( vWorldPosition - cameraPosition );
            }
            vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
            #ifdef ENVMAP_MODE_REFLECTION
                vec3 reflectVec = reflect( cameraToFrag, worldNormal );
            #else
                vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
            #endif
        #else
            vec3 reflectVec = vReflect;
        #endif
        #ifdef ENVMAP_TYPE_CUBE
            vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
        #else
            vec4 envColor = vec4( 0.0 );
        #endif
        #ifdef ENVMAP_BLENDING_MULTIPLY
            outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
            #elif defined( ENVMAP_BLENDING_MIX )
            outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
            #elif defined( ENVMAP_BLENDING_ADD )
            outgoingLight += envColor.xyz * specularStrength * reflectivity;
        #endif
    #endif
    #ifdef OPAQUE
        diffuseColor.a = 1.0;
    #endif
    #ifdef USE_TRANSMISSION
        diffuseColor.a *= material.transmissionAlpha + 0.1;
    #endif
    gl_FragColor = vec4( outgoingLight, diffuseColor.a );
    #if defined( TONE_MAPPING )
        gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
    #endif
    gl_FragColor = linearToOutputTexel( gl_FragColor );
    #ifdef USE_FOG
        #ifdef FOG_EXP2
            float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
        #else
            float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
        #endif
        gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
    #endif
    #ifdef PREMULTIPLIED_ALPHA
        gl_FragColor.rgb *= gl_FragColor.a;
    #endif
    #ifdef DITHERING
        gl_FragColor.rgb = dithering( gl_FragColor.rgb );
    #endif
}

`
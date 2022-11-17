export default function pbrFrag(defines){
    return  `
    uniform float toneMappingExposure;
    uniform vec3 diffuse;
    uniform vec3 emissive;
    uniform float roughness;
    uniform float metalness;
    uniform float opacity;

    #ifndef saturate
        #define saturate( a ) clamp( a, 0.0, 1.0 )
    #endif

    vec3 LinearToneMapping( vec3 color ) {
        return toneMappingExposure * color;
    }

    vec3 ReinhardToneMapping( vec3 color ) {
        color *= toneMappingExposure;
        return saturate( color / ( vec3( 1.0 ) + color ) );
    }
    vec3 CustomToneMapping( vec3 color ) {
        return color;
    }
    vec3 toneMapping( vec3 color ) {
        return ReinhardToneMapping( color );
    }

    vec4 LinearToLinear( in vec4 value ) {
        return value;
    }
    vec4 LinearTosRGB( in vec4 value ) {
        return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
    }
    vec4 linearToOutputTexel( vec4 value ) {
        return LinearTosRGB( value );
    }
    #define STANDARD

    #ifdef PHYSICAL
        #define IOR
        #define SPECULAR
    #endif
    #ifdef IOR
        uniform float ior;
    #endif
    #ifdef SPECULAR
        uniform float specularIntensity;
        uniform vec3 specularColor;
        #ifdef USE_SPECULARINTENSITYMAP
            uniform sampler2D specularIntensityMap;
        #endif
        #ifdef USE_SPECULARCOLORMAP
            uniform sampler2D specularColorMap;
        #endif
    #endif
    #if ${defines.USE_CLEARCOAT}
        uniform float clearcoat;
        uniform float clearcoatRoughness;
    #endif
    #if ${defines.USE_IRIDESCENCE}
        uniform float iridescence;
        uniform float iridescenceIOR;
        uniform float iridescenceThicknessMinimum;
        uniform float iridescenceThicknessMaximum;
    #endif
    #if ${defines.USE_SHEEN}
        uniform vec3 sheenColor;
        uniform float sheenRoughness;
        #if ${defines.USE_SHEENCOLORMAP}
            uniform sampler2D sheenColorMap;
        #endif
        #if ${defines.USE_SHEENROUGHNESSMAP}
            uniform sampler2D sheenRoughnessMap;
        #endif
    #endif
    varying vec3 vViewPosition;
    #define PI 3.141592653589793
    #define PI2 6.283185307179586
    #define PI_HALF 1.5707963267948966
    #define RECIPROCAL_PI 0.3183098861837907
    #define RECIPROCAL_PI2 0.15915494309189535
    #define EPSILON 1e-6
    #ifndef saturate
        #define saturate( a ) clamp( a, 0.0, 1.0 )
    #endif
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
    #ifdef DITHERING
        vec3 dithering( vec3 color ) {
            float grid_position = rand( gl_FragCoord.xy );
            vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
            dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
            return color + dither_shift_RGB;
        }
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
    #if ${defines.USE_ALPHAMAP}
        uniform sampler2D alphaMap;
    #endif
    #if ${defines.USE_ALPHATEST}
        uniform float alphaTest;
    #endif
    #if ${defines.USE_AOMAP}
        uniform sampler2D aoMap;
        uniform float aoMapIntensity;
    #endif
    #if ${defines.USE_LIGHTMAP}
        uniform sampler2D lightMap;
        uniform float lightMapIntensity;
    #endif

    #if ${defines.USE_EMISSIVEMAP}
        uniform sampler2D emissiveMap;
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
    #if ${defines.USE_SHEEN}
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
    #if ${defines.USE_IRIDESCENCE}
        const mat3 XYZ_TO_REC709 = mat3(
        3.2404542, -0.9692660, 0.0556434, -1.5371385, 1.8760108, -0.2040259, -0.4985314, 0.0415560, 1.0572252
        );
        vec3 Fresnel0ToIor( vec3 fresnel0 ) {
            vec3 sqrtF0 = sqrt( fresnel0 );
            return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
        }
        vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
            return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
        }
        float IorToFresnel0( float transmittedIor, float incidentIor ) {
            return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
        }
        vec3 evalSensitivity( float OPD, vec3 shift ) {
            float phase = 2.0 * PI * OPD * 1.0e-9;
            vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
            vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
            vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
            vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
            xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
            xyz /= 1.0685e-7;
            vec3 rgb = XYZ_TO_REC709 * xyz;
            return rgb;
        }
        vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
            vec3 I;
            float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
            float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
            float cosTheta2Sq = 1.0 - sinTheta2Sq;
            if ( cosTheta2Sq < 0.0 ) {
                return vec3( 1.0 );
            }
            float cosTheta2 = sqrt( cosTheta2Sq );
            float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
            float R12 = F_Schlick( R0, 1.0, cosTheta1 );
            float R21 = R12;
            float T121 = 1.0 - R12;
            float phi12 = 0.0;
            if ( iridescenceIOR < outsideIOR ) phi12 = PI;
            float phi21 = PI - phi12;
            vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );
            vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
            vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
            vec3 phi23 = vec3( 0.0 );
            if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
            if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
            if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
            float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
            vec3 phi = vec3( phi21 ) + phi23;
            vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
            vec3 r123 = sqrt( R123 );
            vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
            vec3 C0 = R12 + Rs;
            I = C0;
            vec3 Cm = Rs - T121;
            for ( int m = 1; m <= 2; ++ m ) {
                Cm *= r123;
                vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
                I += Cm * Sm;
            }
            return max( I, vec3( 0.0 ) );
        }
    #endif
    #if ${defines.ENVMAP_TYPE_CUBE_UV}
        #define cubeUV_minMipLevel 4.0
        #define cubeUV_minTileSize 16.0
        float getFace( vec3 direction ) {
            vec3 absDirection = abs( direction );
            float face = - 1.0;
            if ( absDirection.x > absDirection.z ) {
                if ( absDirection.x > absDirection.y )
                face = direction.x > 0.0 ? 0.0 : 3.0;
                else
                face = direction.y > 0.0 ? 1.0 : 4.0;
            }
            else {
                if ( absDirection.z > absDirection.y )
                face = direction.z > 0.0 ? 2.0 : 5.0;
                else
                face = direction.y > 0.0 ? 1.0 : 4.0;
            }
            return face;
        }
        vec2 getUV( vec3 direction, float face ) {
            vec2 uv;
            if ( face == 0.0 ) {
                uv = vec2( direction.z, direction.y ) / abs( direction.x );
            }
            else if ( face == 1.0 ) {
                uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
            }
            else if ( face == 2.0 ) {
                uv = vec2( - direction.x, direction.y ) / abs( direction.z );
            }
            else if ( face == 3.0 ) {
                uv = vec2( - direction.z, direction.y ) / abs( direction.x );
            }
            else if ( face == 4.0 ) {
                uv = vec2( - direction.x, direction.z ) / abs( direction.y );
            }
            else {
                uv = vec2( direction.x, direction.y ) / abs( direction.z );
            }
            return 0.5 * ( uv + 1.0 );
        }
        vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
            float face = getFace( direction );
            float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
            mipInt = max( mipInt, cubeUV_minMipLevel );
            float faceSize = exp2( mipInt );
            vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
            if ( face > 2.0 ) {
                uv.y += faceSize;
                face -= 3.0;
            }
            uv.x += face * faceSize;
            uv.x += filterInt * 3.0 * cubeUV_minTileSize;
            uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
            uv.x *= CUBEUV_TEXEL_WIDTH;
            uv.y *= CUBEUV_TEXEL_HEIGHT;
            #ifdef texture2DGradEXT
                return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
            #else
                return texture2D( envMap, uv ).rgb;
            #endif
        }
        #define cubeUV_r0 1.0
        #define cubeUV_v0 0.339
        #define cubeUV_m0 - 2.0
        #define cubeUV_r1 0.8
        #define cubeUV_v1 0.276
        #define cubeUV_m1 - 1.0
        #define cubeUV_r4 0.4
        #define cubeUV_v4 0.046
        #define cubeUV_m4 2.0
        #define cubeUV_r5 0.305
        #define cubeUV_v5 0.016
        #define cubeUV_m5 3.0
        #define cubeUV_r6 0.21
        #define cubeUV_v6 0.0038
        #define cubeUV_m6 4.0
        float roughnessToMip( float roughness ) {
            float mip = 0.0;
            if ( roughness >= cubeUV_r1 ) {
                mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
            }
            else if ( roughness >= cubeUV_r4 ) {
                mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
            }
            else if ( roughness >= cubeUV_r5 ) {
                mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
            }
            else if ( roughness >= cubeUV_r6 ) {
                mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
            }
            else {
                mip = - 2.0 * log2( 1.16 * roughness );
            }
            return mip;
        }
        vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
            float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
            float mipF = fract( mip );
            float mipInt = floor( mip );
            vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
            if ( mipF == 0.0 ) {
                return vec4( color0, 1.0 );
            }
            else {
                vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
                return vec4( mix( color0, color1, mipF ), 1.0 );
            }
        
        }
    #endif
    #ifdef USE_ENVMAP
        uniform float envMapIntensity;
        uniform float flipEnvMap;
        #if ${defines.ENVMAP_TYPE_CUBE}
            uniform samplerCube envMap;
        #else
            uniform sampler2D envMap;
        #endif
        
    #endif
    #if ${defines.USE_ENVMAP}
        vec3 getIBLIrradiance( const in vec3 normal ) {
            #if ${defines.ENVMAP_TYPE_CUBE_UV}
                vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
                vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
                return PI * envMapColor.rgb * envMapIntensity;
            #else
                return vec3( 0.0 );
            #endif
        }
        vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
            #if ${defines.ENVMAP_TYPE_CUBE_UV}
                vec3 reflectVec = reflect( - viewDir, normal );
                reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
                reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
                vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
                return envMapColor.rgb * envMapIntensity;
            #else
                return vec3( 0.0 );
            #endif
        }
    #endif
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
    vec3 getLightProbeIrradiance( const in vec3 lightProbe[9], const in vec3 normal ) {
        vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
        vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
        return irradiance;
    }
    vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
        vec3 irradiance = ambientLightColor;
        return irradiance;
    }
    /////////////////////直接灯光接入
    #if ${defines.FLAT_SHADED}
        varying vec3 vNormal;
        #if ${defines.USE_TANGENT}
            varying vec3 vTangent;
            varying vec3 vBitangent;
        #endif
    #endif
    struct PhysicalMaterial {
        vec3 diffuseColor;
        float roughness;
        vec3 specularColor;
        float specularF90;
        #if ${defines.USE_CLEARCOAT}
            float clearcoat;
            float clearcoatRoughness;
            vec3 clearcoatF0;
            float clearcoatF90;
        #endif
        #if ${defines.USE_IRIDESCENCE}
            float iridescence;
            float iridescenceIOR;
            float iridescenceThickness;
            vec3 iridescenceFresnel;
            vec3 iridescenceF0;
        #endif
        #if ${defines.USE_SHEEN}
            vec3 sheenColor;
            float sheenRoughness;
        #endif
        #if ${defines.IOR}
            float ior;
        #endif
        #if ${defines.USE_TRANSMISSION}
            float transmission;
            float transmissionAlpha;
            float thickness;
            float attenuationDistance;
            vec3 attenuationColor;
        #endif
    };
    vec3 clearcoatSpecular = vec3( 0.0 );
    vec3 sheenSpecular = vec3( 0.0 );
    float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
        float dotNV = saturate( dot( normal, viewDir ) );
        float r2 = roughness * roughness;
        float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
        float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
        float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
        return saturate( DG * RECIPROCAL_PI );
    }
    vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
        float dotNV = saturate( dot( normal, viewDir ) );
        const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
        const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
        vec4 r = roughness * c0 + c1;
        float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
        vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
        return fab;
    }
    vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
        vec2 fab = DFGApprox( normal, viewDir, roughness );
        return specularColor * fab.x + specularF90 * fab.y;
    }
    #if ${defines.USE_IRIDESCENCE}
        void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
    #else
        void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
    #endif
    vec2 fab = DFGApprox( normal, viewDir, roughness );
    #if ${defines.USE_IRIDESCENCE}
        vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
    #else
        vec3 Fr = specularColor;
    #endif
    vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
    float Ess = fab.x + fab.y;
    float Ems = 1.0 - Ess;
    vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;
    vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
    singleScatter += FssEss;
    multiScatter += Fms * Ems;
    }
    void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
        float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
        vec3 irradiance = dotNL * directLight.color;
        #if ${defines.USE_CLEARCOAT}
            float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
            vec3 ccIrradiance = dotNLcc * directLight.color;
            clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
        #endif
        #if ${defines.USE_SHEEN}
            sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
        #endif

        #if ${defines.USE_IRIDESCENCE}
            reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
        #else
            reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
        #endif
        reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
    }
    void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
        reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
    }
    void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
        #if ${defines.USE_CLEARCOAT}
            clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
        #endif
        #if ${defines.USE_SHEEN}
            sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
        #endif
        vec3 singleScattering = vec3( 0.0 );
        vec3 multiScattering = vec3( 0.0 );
        vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
        #if ${defines.USE_IRIDESCENCE}
            computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
        #else
            computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
        #endif
        vec3 totalScattering = singleScattering + multiScattering;
        vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
        reflectedLight.indirectSpecular += radiance * singleScattering;
        reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
        reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
    }
    #define RE_Direct				RE_Direct_Physical
    #define RE_Direct_RectArea		RE_Direct_RectArea_Physical
    #define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
    #define RE_IndirectSpecular		RE_IndirectSpecular_Physical
    float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
        return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
    }
    #if ${defines.USE_TRANSMISSION}
        uniform float transmission;
        uniform float thickness;
        uniform float attenuationDistance;
        uniform vec3 attenuationColor;
        #ifdef USE_TRANSMISSIONMAP
            uniform sampler2D transmissionMap;
        #endif
        #ifdef USE_THICKNESSMAP
            uniform sampler2D thicknessMap;
        #endif
        uniform vec2 transmissionSamplerSize;
        uniform sampler2D transmissionSamplerMap;
        uniform mat4 modelMatrix;
        uniform mat4 projectionMatrix;
        varying vec3 vWorldPosition;
        vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
            vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
            vec3 modelScale;
            modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
            modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
            modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
            return normalize( refractionVector ) * thickness * modelScale;
        }
        float applyIorToRoughness( const in float roughness, const in float ior ) {
            return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
        }
        vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
            float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
            #ifdef texture2DLodEXT
                return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
            #else
                return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
            #endif
        }
        vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
            if ( isinf( attenuationDistance ) ) {
                return radiance;
            }
            else {
                vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
                vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );
                return transmittance * radiance;
            }
        
        }
        vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor, const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix, const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness, const in vec3 attenuationColor, const in float attenuationDistance ) {
            vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
            vec3 refractedRayExit = position + transmissionRay;
            vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
            vec2 refractionCoords = ndcPos.xy / ndcPos.w;
            refractionCoords += 1.0;
            refractionCoords /= 2.0;
            vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
            vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
            vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
            return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
        }
    #endif
    #if 0 > 0
        varying vec4 vSpotLightCoord[ 0 ];
    #endif
    #if 0 > 0
        uniform sampler2D spotLightMap[ 0 ];
    #endif
    
    #if ${defines.USE_BUMPMAP}
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
    #if ${defines.USE_NORMALMAP}
        uniform sampler2D normalMap;
        uniform vec2 normalScale;
    #endif

    #if ${defines.OBJECTSPACE_NORMALMAP}
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
    
    #if ${defines.USE_CLEARCOATMAP}
        uniform sampler2D clearcoatMap;
    #endif
    
    #if ${defines.USE_CLEARCOAT_ROUGHNESSMAP}
        uniform sampler2D clearcoatRoughnessMap;
    #endif
    
    #if ${defines.USE_CLEARCOAT_NORMALMAP}
        uniform sampler2D clearcoatNormalMap;
        uniform vec2 clearcoatNormalScale;
    #endif
    
    #if ${defines.USE_IRIDESCENCEMAP}
        uniform sampler2D iridescenceMap;
    #endif
    
    #if ${defines.USE_IRIDESCENCE_THICKNESSMAP}
        uniform sampler2D iridescenceThicknessMap;
    #endif
    
    #if ${defines.USE_ROUGHNESSMAP}
        uniform sampler2D roughnessMap;
    #endif
    
    #if ${defines.USE_METALNESSMAP}
        uniform sampler2D metalnessMap;
    #endif
    
    void main() {
        vec4 diffuseColor = vec4( diffuse, opacity );

        ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
        vec3 totalEmissiveRadiance = emissive;

        #if ${defines.USE_MAP}
            vec4 sampledDiffuseColor = texture2D( map, vUv );
            #if ${defines.DECODE_VIDEO_TEXTURE}
                sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
            #endif
            diffuseColor *= sampledDiffuseColor;
        #endif

        float roughnessFactor = roughness;
    
        #if ${defines.USE_ROUGHNESSMAP}
            vec4 texelRoughness = texture2D( roughnessMap, vUv );
            roughnessFactor *= texelRoughness.g;
        #endif

        float metalnessFactor = metalness;
    
        #ifdef ${defines.USE_METALNESSMAP}
            vec4 texelMetalness = texture2D( metalnessMap, vUv );
            metalnessFactor *= texelMetalness.b;
        #endif

        float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
    
        #if ${defines.FLAT_SHADED}
            vec3 fdx = dFdx( vViewPosition );
            vec3 fdy = dFdy( vViewPosition );
            vec3 normal = normalize( cross( fdx, fdy ) );
        #else
            vec3 normal = normalize( vNormal );
            #if ${defines.DOUBLE_SIDED}
                normal = normal * faceDirection;
            #endif
            #if ${defines.USE_TANGENT}
                vec3 tangent = normalize( vTangent );
                vec3 bitangent = normalize( vBitangent );
                #if ${defines.DOUBLE_SIDED}
                    tangent = tangent * faceDirection;
                    bitangent = bitangent * faceDirection;
                #endif
                #if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
                    mat3 vTBN = mat3( tangent, bitangent, normal );
                #endif

            #endif
        #endif
    
        vec3 geometryNormal = normal;

        #if ${defines.OBJECTSPACE_NORMALMAP}
            normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
            #ifdef FLIP_SIDED
                normal = - normal;
            #endif
            #ifdef DOUBLE_SIDED
                normal = normal * faceDirection;
            #endif

            normal = normalize( normalMatrix * normal );

            #elif ${defines.TANGENTSPACE_NORMALMAP}
            vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
            mapN.xy *= normalScale;
            #if ${defines.USE_TANGENT}
                normal = normalize( vTBN * mapN );
            #else
                normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
            #endif

            #elif ${defines.USE_BUMPMAP}

            normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
        #endif

        #if ${defines.USE_CLEARCOAT}
            vec3 clearcoatNormal = geometryNormal;
        #endif
        #if ${defines.USE_CLEARCOAT_NORMALMAP}
            vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
            clearcoatMapN.xy *= clearcoatNormalScale;
            #if ${defines.USE_TANGENT}
                clearcoatNormal = normalize( vTBN * clearcoatMapN );
            #else
                clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
            #endif
        #endif
        #if ${defines.USE_EMISSIVEMAP}
            vec4 emissiveColor = texture2D(emissiveMap, vUv );
            totalEmissiveRadiance *= emissiveColor.rgb;
        #endif

        PhysicalMaterial material;
        material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
        vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
        float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
        material.roughness = max( roughnessFactor, 0.0525 );
        material.roughness += geometryRoughness;
        material.roughness = min( material.roughness, 1.0 );

        #if ${defines.IOR}
            material.ior = ior;
            #if ${defines.SPECULAR}
                float specularIntensityFactor = specularIntensity;
                vec3 specularColorFactor = specularColor;
                #if ${defines.USE_SPECULARINTENSITYMAP}
                    specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
                #endif

                #if ${defines.USE_SPECULARCOLORMAP}
                    specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
                #endif

                material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
            #else
                float specularIntensityFactor = 1.0;
                vec3 specularColorFactor = vec3( 1.0 );
                material.specularF90 = 1.0;
            #endif
            material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
        #else
            material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
            material.specularF90 = 1.0;
        #endif
        #if ${defines.USE_CLEARCOAT}
            material.clearcoat = clearcoat;
            material.clearcoatRoughness = clearcoatRoughness;
            material.clearcoatF0 = vec3( 0.04 );
            material.clearcoatF90 = 1.0;
            #if ${defines.USE_CLEARCOATMAP}
                material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
            #endif
            #if ${defines.USE_CLEARCOAT_ROUGHNESSMAP}
                material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
            #endif
            material.clearcoat = saturate( material.clearcoat );
            material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
            material.clearcoatRoughness += geometryRoughness;
            material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
        #endif
        #if ${defines.USE_IRIDESCENCE}
            material.iridescence = iridescence;
            material.iridescenceIOR = iridescenceIOR;
            #if ${defines.USE_IRIDESCENCEMAP}
                material.iridescence *= texture2D( iridescenceMap, vUv ).r;
            #endif
            #if ${defines.USE_IRIDESCENCE_THICKNESSMAP}
                material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
            #else
                material.iridescenceThickness = iridescenceThicknessMaximum;
            #endif
        #endif
        #if ${defines.USE_SHEEN}
            material.sheenColor = sheenColor;
            #if ${defines.USE_SHEENCOLORMAP}
                material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
            #endif
            material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
            #if ${defines.USE_SHEENROUGHNESSMAP}
                material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
            #endif
        #endif
        
        GeometricContext geometry;
        geometry.position = - vViewPosition;
        geometry.normal = normal;
       // geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
       geometry.viewDir = normalize( vViewPosition 

        #if ${defines.USE_CLEARCOAT}
            geometry.clearcoatNormal = clearcoatNormal;
        #endif

        #if ${defines.USE_IRIDESCENCE}
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
    
        //#if defined( RE_IndirectDiffuse )
            vec3 iblIrradiance = vec3( 0.0 );
            vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
            irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
        //#endif
        //#if defined( RE_IndirectSpecular )
            vec3 radiance = vec3( 0.0 );
            vec3 clearcoatRadiance = vec3( 0.0 );
        //#endif
        //#if defined( RE_IndirectDiffuse )
            #if ${defines.USE_LIGHTMAP}
                vec4 lightMapTexel = texture2D( lightMap, vUv2 );
                vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
                irradiance += lightMapIrradiance;
            #endif
//////////////////////////////////////////////////////////////////
            #if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
                iblIrradiance += getIBLIrradiance( geometry.normal );
            #endif
////////////////////////////////////////////////////////////////////
        //#endif
        #if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
            radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
            #ifdef USE_CLEARCOAT
                clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
            #endif
        #endif
        //间接漫反射
       // #if defined( RE_IndirectDiffuse )
            RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
        //#endif
        //间接高光
       // #if defined( RE_IndirectSpecular )
            RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
        //#endif
        //环境光遮蔽
        #if ${defines.USE_AOMAP}
            float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
            reflectedLight.indirectDiffuse *= ambientOcclusion;
            #if defined( USE_ENVMAP ) && defined( STANDARD )
                float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
                reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
            #endif
        #endif

        vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
        vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
        //透射
        #if ${defines.USE_TRANSMISSION}
            material.transmission = transmission;
            material.transmissionAlpha = 1.0;
            material.thickness = thickness;
            material.attenuationDistance = attenuationDistance;
            material.attenuationColor = attenuationColor;
            #ifdef USE_TRANSMISSIONMAP
                material.transmission *= texture2D( transmissionMap, vUv ).r;
            #endif
            #ifdef USE_THICKNESSMAP
                material.thickness *= texture2D( thicknessMap, vUv ).g;
            #endif
            vec3 pos = vWorldPosition;
            vec3 v = normalize( cameraPosition - pos );
            vec3 n = inverseTransformDirection( normal, viewMatrix );
            vec4 transmission = getIBLVolumeRefraction(
            n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90, pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness, material.attenuationColor, material.attenuationDistance );
            material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
            totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
        #endif

        vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;

        #if ${defines.USE_SHEEN}
            float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
            outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
        #endif

        #if ${defines.USE_CLEARCOAT}
            float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
            vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
            outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
        #endif

        #if ${defines.USE_TRANSMISSION}
            diffuseColor.a *= material.transmissionAlpha + 0.1;
        #endif

        gl_FragColor = vec4( outgoingLight, diffuseColor.a );

        #if ${defines.TONE_MAPPING}
            gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
        #endif

        gl_FragColor = linearToOutputTexel( gl_FragColor );

        // #ifdef PREMULTIPLIED_ALPHA
        //     gl_FragColor.rgb *= gl_FragColor.a;
        // #endif
        // #ifdef DITHERING
        //     gl_FragColor.rgb = dithering( gl_FragColor.rgb );
        // #endif
    }
    
    `
}
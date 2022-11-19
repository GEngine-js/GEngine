export default function pbrFrag(defines){
    return  `
    const  PI:f32= 3.141592653589793;
    const PI2:f32= 6.283185307179586;
    const PI_HALF:f32= 1.5707963267948966;
    const RECIPROCAL_PI:f32= 0.3183098861837907;
    const RECIPROCAL_PI2:f32= 0.15915494309189535;
    const EPSILON:f32= 1e-6



    struct PbrData{
        diffuse:vec3<f32>,
        roughness:f32,
        emissive:vec3<f32>, 
        metalness:f32,
        opacity:f32,
        toneMappingExposure:f32,

        #if ${defines.IOR}
             ior:f32;
        #endif

        #if ${defines.SPECULAR}
             specularIntensity:f32;
             specularColor:vec3<f32>;
        #endif

        #if ${defines.USE_CLEARCOAT}
             clearcoat:f32;
             clearcoatRoughness:f32;
        #endif

        #if ${defines.USE_IRIDESCENCE}
            iridescence:f32;
            iridescenceIOR:f32;
            iridescenceThicknessMinimum:f32;
            iridescenceThicknessMaximum:f32;
        #endif

        #if ${defines.USE_SHEEN}
            sheenColor:vec3<f32>;
            sheenRoughness:f32;
        #endif
        #if ${defines.USE_AOMAP}
          aoMapIntensity:f32;
        #endif
        #if ${defines.USE_LIGHTMAP}
             lightMapIntensity:f32;
        #endif
        #if ${defines.USE_CLEARCOAT_NORMALMAP}
             clearcoatNormalScale:vec2<f32>;
        #endif

        #if ${defines.USE_NORMALMAP}
             normalScale:vec2<f32>;
        #endif
    }

    
    uniform vec3 ambientLightColor;
    uniform vec3 lightProbe[ 9 ];
////////////////////////////////////

        #if ${defines.FLAT_SHADED}
        varying vec3 vNormal;
        #if ${defines.USE_TANGENT}
            varying vec3 vTangent;
            varying vec3 vBitangent;
        #endif
        #endif
        struct PhysicalMaterial {
             diffuseColor:vec3<f32>;
             roughness:f32;
             specularColor:vec3<f32>;
             specularF90:f32;
            #if ${defines.USE_CLEARCOAT}
                clearcoat:f32;
                clearcoatRoughness:f32;
                clearcoatF0:vec3<f32>;
                clearcoatF90:f32;
            #endif
            #if ${defines.USE_IRIDESCENCE}
                iridescence:f32;
                iridescenceIOR:f32;
                iridescenceThickness:f32;
                iridescenceFresnel:vec3<f32>;
                iridescenceF0:vec3<f32>;
            #endif
            #if ${defines.USE_SHEEN}
                sheenColor:vec3<f32>;
                sheenRoughness:f32;
            #endif
            #if ${defines.IOR}
                 ior:f32;
            #endif
            #if ${defines.USE_TRANSMISSION}
                transmission:f32;
                transmissionAlpha:f32;
                thickness:f32;
                attenuationDistance:f32;
                attenuationColor:vec3<f32>;
            #endif
        };


        #if ${defines.OBJECTSPACE_NORMALMAP}
        uniform mat3 normalMatrix;
    #endif
    #if ${defines.USE_ALPHATEST}
    uniform float alphaTest;
#endif

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
#endif


    // #ifndef saturate
    //     #define saturate( a ) clamp( a, 0.0, 1.0 )
    // #endif

    #define STANDARD

    #ifdef PHYSICAL
        #define IOR
        #define SPECULAR
    #endif

    varying vec3 vViewPosition;

    #ifdef DITHERING
        fn dithering(color:vec3<f32> )->vec3<f32> {
            let grid_position:f32 = rand( gl_FragCoord.xy );
            let dither_shift_RGB:vec3<f32> = vec3<f32>( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
            dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
            return color + dither_shift_RGB;
        }
    #endif
    #if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
        varying vec2 vUv;
    #endif
    #if ${defines.USE_LIGHTMAP||defines.USE_AOMAP}
        varying vec2 vUv2;
    #endif

    #ifdef USE_IRIDESCENCE
        fn BRDF_GGX_Iridescence( lightDir:vec3<f32>, viewDir:vec3<f32>,normal:vec3<f32>, f0:vec3<f32>, f90:f32,iridescence:f32, iridescenceFresnel:vec3<f32>,roughness:f32 )->vec3<f32> {
            let alpha:f32 = pow2( roughness );
            let halfDir:vec3<f32> = normalize( lightDir + viewDir );
            let dotNL:f32 = saturate( dot( normal, lightDir ) );
            let dotNV:f32 = saturate( dot( normal, viewDir ) );
            let dotNH:f32 = saturate( dot( normal, halfDir ) );
            let dotVH:f32 = saturate( dot( viewDir, halfDir ) );
            let F:vec3<f32> = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
            let V:f32 = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
            let D:f32 = D_GGX( alpha, dotNH );
            return F * ( V * D );
        }
    #endif
    fn LTC_Uv( N:vec3<f32>, V:vec3<f32>,roughness:f32 )->vec2<f32> {
        let LUT_SIZE:f32 = 64.0;
        let LUT_SCALE:f32 = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
        let LUT_BIAS:f32 = 0.5 / LUT_SIZE;
        let dotNV:f32 = saturate( dot( N, V ) );
        let uv:vec2<f32> = vec2<f32>( roughness, sqrt( 1.0 - dotNV ) );
        uv = uv * LUT_SCALE + LUT_BIAS;
        return uv;
    }
    fn LTC_ClippedSphereFormFactor( f:vec3<f32> )->f32 {
        let l:f32 = length( f );
        return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
    }
    fn LTC_EdgeVectorFormFactor( v1:vec3<f32>,v2:vec3<f32> )->vec3<f32> {
        let x:f32 = dot( v1, v2 );
        let y:f32 = abs( x );
        let a:f32 = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
        let b:f32 = 3.4175940 + ( 4.1616724 + y ) * y;
        let v:f32 = a / b;
        let theta_sintheta:f32 = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
        return cross( v1, v2 ) * theta_sintheta;
    }
    fn LTC_Evaluate(N :vec3<f32>,  V:vec3<f32>,  P:vec3<f32>, mInv:mat3x3<f32>, rectCoords:array<f32,4>)->vec3<f32> {
        let v1:vec3<f32> = rectCoords[1] - rectCoords[0];
        let v2:vec3<f32> = rectCoords[3] - rectCoords[0];
        let lightNormal:vec3<f32> = cross( v1, v2 );
        if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3<f32>( 0.0 );
        var T1:vec3<f32>, T2:vec3<f32>;
        T1 = normalize( V - N * dot( V, N ) );
        T2 = - cross( N, T1 );
        let mat:mat3x3<f32> = mInv * transposeMat3( mat3x3<f32>( T1, T2, N ) );
        ///////////////////////////////数组
        var coords:array<f32,4>;
        coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
        coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
        coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
        coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
        coords[ 0 ] = normalize( coords[ 0 ] );
        coords[ 1 ] = normalize( coords[ 1 ] );
        coords[ 2 ] = normalize( coords[ 2 ] );
        coords[ 3 ] = normalize( coords[ 3 ] );
        let vectorFormFactor:vec3<f32> = vec3<f32>( 0.0 );
        vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
        vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
        vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
        vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
        float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
        return vec3<f32>( result );
    }
    #if ${defines.USE_SHEEN}
        fn D_Charlie( roughness:f32,dotNH:f32 )->f32 {
            let alpha:f32 = pow2( roughness );
            let invAlpha:f32 = 1.0 / alpha;
            let cos2h:f32 = dotNH * dotNH;
            let sin2h:f32 = max( 1.0 - cos2h, 0.0078125 );
            return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
        }
        fn V_Neubelt( dotNV:f32, dotNL:f32 )->f32 {
            return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
        }
        fn BRDF_Sheen(lightDir:vec3<f32>, viewDir:vec3<f32>, normal:vec3<f32>,sheenColor:vec3<f32>,sheenRoughness:f32 )->vec3<f32> {
            let halfDir:vec3<f32> = normalize( lightDir + viewDir );
            let dotNL:f32 = saturate( dot( normal, lightDir ) );
            let dotNV:f32 = saturate( dot( normal, viewDir ) );
            let dotNH:f32 = saturate( dot( normal, halfDir ) );
            let D:f32 = D_Charlie( sheenRoughness, dotNH );
            let V:f32 = V_Neubelt( dotNV, dotNL );
            return sheenColor * ( D * V );
        }
    #endif
    #if ${defines.USE_IRIDESCENCE}
        let XYZ_TO_REC709: mat3x3<f32> = mat3x3<f32>(
        3.2404542, -0.9692660, 0.0556434, -1.5371385, 1.8760108, -0.2040259, -0.4985314, 0.0415560, 1.0572252
        );
        fn Fresnel0ToIor( fresnel0:vec3<f32> )->vec3<f32> {
            let sqrtF0:vec3<f32> = sqrt( fresnel0 );
            return ( vec3<f32>( 1.0 ) + sqrtF0 ) / ( vec3<f32>( 1.0 ) - sqrtF0 );
        }
        fn IorToFresnel0(transmittedIor:vec3<f32>,incidentIor:f32 )->vec3<f32> {
            return pow2( ( transmittedIor - vec3<f32>( incidentIor ) ) / ( transmittedIor + vec3<f32>( incidentIor ) ) );
        }
        fn IorToFresnel0(transmittedIor:f32, incidentIor:f32 )->f32 {
            return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
        }
        fn evalSensitivity(OPD:f32,shift:vec3<f32> )->vec3<f32> {
            let phase:f32 = 2.0 * PI * OPD * 1.0e-9;
            let val:vec3<f32> = vec3<f32>( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
            let pos:vec3<f32> = vec3<f32>( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
            let vart:vec3<f32> = vec3<f32>( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
            let xyz:vec3<f32> = val * sqrt( 2.0 * PI * vart ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * vart );
            xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
            xyz /= 1.0685e-7;
            let rgb:vec3<f32> = XYZ_TO_REC709 * xyz;
            return rgb;
        }
        fn evalIridescence(outsideIOR:f32, eta2:f32,cosTheta1:f32,thinFilmThickness:f32,baseF0:vec3<f32> )->vec3<f32> {
            var I:vec3<f32>;
            let iridescenceIOR:f32 = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
            let sinTheta2Sq:f32 = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
            let cosTheta2Sq:f32 = 1.0 - sinTheta2Sq;
            if ( cosTheta2Sq < 0.0 ) {
                return vec3<f32>( 1.0 );
            }
            let cosTheta2:f32 = sqrt( cosTheta2Sq );
            let R0:f32 = IorToFresnel0( iridescenceIOR, outsideIOR );
            let R12:f32 = F_Schlick( R0, 1.0, cosTheta1 );
            let R21:f32 = R12;
            let T121:f32 = 1.0 - R12;
            let phi12:f32 = 0.0;
            if ( iridescenceIOR < outsideIOR ) phi12 = PI;
            let phi21:f32 = PI - phi12;
            let baseIOR:vec3<f32> = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );
            let R1:vec3<f32> = IorToFresnel0( baseIOR, iridescenceIOR );
            let R23:vec3<f32> = F_Schlick( R1, 1.0, cosTheta2 );
            let phi23:vec3<f32> = vec3<f32>( 0.0 );
            if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
            if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
            if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
            let OPD:f32 = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
            let phi:vec3<f32> = vec3<f32>( phi21 ) + phi23;
            let R123:vec3<f32> = clamp( R12 * R23, 1e-5, 0.9999 );
            let r123:vec3<f32> = sqrt( R123 );
            let Rs:vec3<f32> = pow2( T121 ) * R23 / ( vec3<f32>( 1.0 ) - R123 );
            let C0:vec3<f32> = R12 + Rs;
            I = C0;
            let Cm:vec3<f32> = Rs - T121;
            for ( int m = 1; m <= 2; ++ m ) {
                Cm *= r123;
                Sm:vec3<f32> = 2.0 * evalSensitivity( f32( m ) * OPD, f32( m ) * phi );
                I += Cm * Sm;
            }
            return max( I, vec3<f32>( 0.0 ) );
        }
    #endif
    #if ${defines.ENVMAP_TYPE_CUBE_UV}
        const cubeUV_minMipLevel:f32= 4.0;
        const cubeUV_minTileSize:f32= 16.0;
        fn getFace(direction:vec3<f32> )->f32 {
            let absDirection:vec3<f32> = abs( direction );
            let face:f32 = - 1.0;
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
        fn getUV( direction:vec3<f32>, face:f32 )->vec2<f32> {
            var uv:vec2<f32>;
            if ( face == 0.0 ) {
                uv = vec2<f32>( direction.z, direction.y ) / abs( direction.x );
            }
            else if ( face == 1.0 ) {
                uv = vec2<f32>( - direction.x, - direction.z ) / abs( direction.y );
            }
            else if ( face == 2.0 ) {
                uv = vec2<f32>( - direction.x, direction.y ) / abs( direction.z );
            }
            else if ( face == 3.0 ) {
                uv = vec2<f32>( - direction.z, direction.y ) / abs( direction.x );
            }
            else if ( face == 4.0 ) {
                uv = vec2<f32>( - direction.x, direction.z ) / abs( direction.y );
            }
            else {
                uv = vec2<f32>( direction.x, direction.y ) / abs( direction.z );
            }
            return 0.5 * ( uv + 1.0 );
        }
        fn bilinearCubeUV(envMap:texture_2d<f32>,direction:vec3<f32>, mipInt:f32 )->vec3<f32> {
            float face = getFace( direction );
            float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
            mipInt = max( mipInt, cubeUV_minMipLevel );
            let faceSize:f32 = exp2( mipInt );
            let uv:vec2<f32> = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
                return texture2DGradEXT( envMap, uv, vec2<f32>( 0.0 ), vec2<f32>( 0.0 ) ).rgb;
            #else
               // return texture2D( envMap, uv ).rgb;
                return textureSample(envMap, baseSampler, uv).rgb;
            #endif
        }
        const cubeUV_r0:f32= 1.0;
        const cubeUV_v0:f32= 0.339;
        const cubeUV_m0:f32= - 2.0;
        const cubeUV_r1:f32= 0.8;
        const cubeUV_v1:f32= 0.276;
        const cubeUV_m1:f32= - 1.0;
        const cubeUV_r4:f32= 0.4;
        const cubeUV_v4:f32= 0.046;
        const cubeUV_m4:f32= 2.0;
        const cubeUV_r5:f32= 0.305;
        const cubeUV_v5:f32= 0.016;
        const cubeUV_m5:f32= 3.0;
        const cubeUV_r6:f32= 0.21;
        const cubeUV_v6:f32= 0.0038;
        const cubeUV_m6:f32= 4.0;
        fn roughnessToMip( roughness:f32)->f32 {
            let mip:f32 = 0.0;
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
        fn textureCubeUV(envMap:texture_2d<f32>, sampleDir:vec3<f32>,roughness:f32 )->vec4<f32> {
            let mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
            let mipF = fract( mip );
            let mipInt = floor( mip );
            let color0:vec3<f32> = bilinearCubeUV( envMap, sampleDir, mipInt );
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
        fn getIBLIrradiance( normal:vec<f32> )->vec3 {
            #if ${defines.ENVMAP_TYPE_CUBE_UV}
                let worldNormal:vec3<f32> = inverseTransformDirection( normal, viewMatrix );
                let envMapColor:vec4<f32> = textureCubeUV( envMap, worldNormal, 1.0 );
                return PI * envMapColor.rgb * envMapIntensity;
            #else
                return vec3( 0.0 );
            #endif
        }
        fn getIBLRadiance( viewDir:vec3<f32>, normal:vec3<f32>, roughness:f32 )->vec3<f32> {
            #if ${defines.ENVMAP_TYPE_CUBE_UV}
                let reflectVec:vec3<f32> = reflect( - viewDir, normal );
                reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
                reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
                let envMapColor:vec4<f32> = textureCubeUV( envMap, reflectVec, roughness );
                return envMapColor.rgb * envMapIntensity;
            #else
                return vec3( 0.0 );
            #endif
        }
    #endif

    fn shGetIrradianceAt( normal:vec3<f32>, shCoefficients:array<vec3<f32>,9>)->vec3<f32> {
        let x:f32 = normal.x, y:f32 = normal.y, z:f32 = normal.z;
        let result:vec3<f32> = shCoefficients[ 0 ] * 0.886227;
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
    fn getLightProbeIrradiance( lightProbe:array<vec3<f32>,9>, normal:vec3<f32> )->vec3<f32> {
        let worldNormal:vec3<f32> = inverseTransformDirection( normal, viewMatrix );
        let irradiance:vec3<f32> = shGetIrradianceAt( worldNormal, lightProbe );
        return irradiance;
    }
    fn getAmbientLightIrradiance( ambientLightColor:vec3<f32> )->vec3<f32> {
        let irradiance:vec3<f32> = ambientLightColor;
        return irradiance;
    }
    /////////////////////直接灯光接入


    let clearcoatSpecular:vec3<f32> = vec3<f32>( 0.0 );
    let sheenSpecular:vec3<f32> = vec3<f32>( 0.0 );

    fn IBLSheenBRDF( normal:vec3<f32>, viewDir:vec3<f32>, roughness:f32 )->f32 {
        let dotNV:f32 = saturate( dot( normal, viewDir ) );
        let r2:f32 = roughness * roughness;
        let a:f32 = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
        let b:f32 = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
        let DG:f32 = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
        return saturate( DG * RECIPROCAL_PI );
    }
    fn DFGApprox( normal:vec3<f32>, viewDir:vec3<f32>,roughness:f32 )->vec2<f32> {
        let dotNV:f32 = saturate( dot( normal, viewDir ) );
        const c0:vec4<f32> = vec4<f32>( - 1, - 0.0275, - 0.572, 0.022 );
        let c1:vec4<f32> = vec4<f32>( 1, 0.0425, 1.04, - 0.04 );
        let r:vec4<f32> = roughness * c0 + c1;
        let a004:f32 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
        let fab:vec2<f32> = vec2<f32>( - 1.04, 1.04 ) * a004 + r.zw;
        return fab;
    }
    fn EnvironmentBRDF( normal:vec3<f32>,viewDir:vec3<f32>,specularColor:vec3<f32>, specularF90:f32,roughness:f32 )->vec3<f32> {
        let fab:vec2<f32> = DFGApprox( normal, viewDir, roughness );
        return specularColor * fab.x + specularF90 * fab.y;
    }


    fn computeSpecularOcclusion( dotNV:f32, ambientOcclusion:f32, roughness:f32 )->f32 {
        return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
    }
    #if ${defines.USE_TRANSMISSION}
        // uniform float transmission;
        // uniform float thickness;
        // uniform float attenuationDistance;
        // uniform vec3 attenuationColor;
        // #ifdef USE_TRANSMISSIONMAP
        //     uniform sampler2D transmissionMap;
        // #endif
        // #ifdef USE_THICKNESSMAP
        //     uniform sampler2D thicknessMap;
        // #endif

        // uniform vec2 transmissionSamplerSize;
        // uniform sampler2D transmissionSamplerMap;
        // uniform mat4 modelMatrix;
        // uniform mat4 projectionMatrix;
        // varying vec3 vWorldPosition;

        fn getVolumeTransmissionRay( n:vec3<f32>, v:vec3<f32>, thickness:f32, ior:f32, modelMatrix:mat4x4:f32)->vec3<f32> {
            var refractionVector:vec3<f32> = refract( - v, normalize( n ), 1.0 / ior );
            var modelScale:vec3<f32>;
            modelScale.x = length( vec3<f32>( modelMatrix[0].xyz ) );
            modelScale.y = length( vec3<f32>( modelMatrix[1].xyz ) );
            modelScale.z = length( vec3<f32>( modelMatrix[2].xyz ) );
            return normalize( refractionVector ) * thickness * modelScale;
        }
        fn applyIorToRoughness(roughness:f32, ior:f32 )->f32 {
            return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
        }
        fn getTransmissionSample( fragCoord:vec2<f32>, roughness:f32,ior:f32 )->vec4<f32> {
            let framebufferLod = log2:f32( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
            // #ifdef texture2DLodEXT
            //     return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
            // #else
            //     return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
            // #endif
            return textureSampleLevel(transmissionSamplerMap,baseSampler,fragCoord.xy, framebufferLod);

        }
        fn applyVolumeAttenuation( radiance:vec3<vec3>, transmissionDistance:f32,attenuationColor:vec3<f32>,attenuationDistance:f32 )->vec3<f32> {
            if ( isinf( attenuationDistance ) ) {
                return radiance;
            }
            else {
                let attenuationCoefficient:vec3<f32> = -log( attenuationColor ) / attenuationDistance;
                let transmittance:vec3<f32> = exp( - attenuationCoefficient * transmissionDistance );
                return transmittance * radiance;
            }
        
        }
        fn getIBLVolumeRefraction( n:vec3<f32>,v:vec3<f32>, roughness:f32, diffuseColor:vec3<f32>,specularColor:vec3<f32>, specularF90:f32,position:vec3<f32>, modelMatrix:mat4x4<f32>, viewMatrix:mat4x4<f32>,projMatrix:mat4x4<f32>,ior:f32, thickness:f32,attenuationColor:vec3<f32>,attenuationDistance:f32 )->vec4<f32> {
            let transmissionRay:vec3<f32> = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
            let refractedRayExit:vec3<f32> = position + transmissionRay;
            let ndcPos:vec4<f32> = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
            let refractionCoords:vec2<f32> = ndcPos.xy / ndcPos.w;
            refractionCoords += 1.0;
            refractionCoords /= 2.0;
            let transmittedLight:vec4<f32> = getTransmissionSample( refractionCoords, roughness, ior );
            let attenuatedColor:vec3<f32> = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
            let F:vec3<f32> = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
            return vec4<f32>( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
        }
    #endif
 
    #if ${defines.USE_BUMPMAP}
        uniform sampler2D bumpMap;
        uniform float bumpScale;
        fn dHdxy_fwd()->vec2<f32> {
            let dSTdx:vec2<f32> = dpdx( vUv );
            let dSTdy:vec2<f32> = dpdy( vUv );
            //textureSample(bumpMap, baseSampler, vUv).rgb
            // let Hll:f32 = bumpScale * texture2D( bumpMap, vUv ).x;
            // let dBx:f32 = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
            // let dBy:f32 = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;

            let Hll:f32 = bumpScale * textureSample(bumpMap, baseSampler, vUv).x;
            let dBx:f32 = bumpScale * textureSample(bumpMap, baseSampler, vUv + dSTdx).x - Hll;
            let dBy:f32 = bumpScale * textureSample(bumpMap, baseSampler, vUv + dSTdy).x - Hll;
            return vec2<f32>( dBx, dBy );
        }
        fn perturbNormalArb( surf_pos:vec3<f32>, surf_norm:vec3<f32>, dHdxy:vec2<f32>, faceDirection:f32 )->vec3<f32> {
            let vSigmaX:vec3<f32> = dpdx( surf_pos.xyz );
            let vSigmaY:vec3<f32> = dpdy( surf_pos.xyz );
            let vN:vec3<f32> = surf_norm;
            let R1:vec3<f32> = cross( vSigmaY, vN );
            let R2:vec3<f32> = cross( vN, vSigmaX );
            let fDet:f32 = dot( vSigmaX, R1 ) * faceDirection;
            let vGrad:vec3<f32> = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
            return normalize( abs( fDet ) * surf_norm - vGrad );
        }
    #endif

    //! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
    #if ${!defines.USE_TANGENT&&defines.TANGENTSPACE_NORMALMAP||defines.USE_CLEARCOAT_NORMALMAP}
        fn perturbNormal2Arb( eye_pos:vec3<f32>, surf_norm:vec3<f32>, mapN:vec3<f32>, faceDirection:f32 )->vec3<f32> {
            let q0:vec3<f32> = dpdx( eye_pos.xyz );
            let q1:vec3<f32> = dpdy( eye_pos.xyz );
            let st0:vec2<f32> = dpdx( vUv.st );
            let st1:vec2<f32> = dpdy( vUv.st );
            let N:vec3<f32> = surf_norm;
            let q1perp:vec3<f32> = cross( q1, N );
            let q0perp:vec3<f32> = cross( N, q0 );
            let T:vec3<f32> = q1perp * st0.x + q0perp * st1.x;
            let B:vec3<f32> = q1perp * st0.y + q0perp * st1.y;
            let det:f32 = max( dot( T, T ), dot( B, B ) );
            let scale:f32 = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
            return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
        }
    #endif

    void main(@builtin(front_facing) is_front: bool) {
        let diffuseColor:vec4<f32> = vec4( diffuse, opacity );

        ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
        let totalEmissiveRadiance:vec3<f32> = emissive;

        #if ${defines.USE_MAP}
            //let sampledDiffuseColor:vec4<f32> = texture2D( map, vUv );
            let sampledDiffuseColor:vec4<f32> =textureSample(map, baseSampler, vUv);
            #if ${defines.DECODE_VIDEO_TEXTURE}
                sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
            #endif
            diffuseColor *= sampledDiffuseColor;
        #endif

        let roughnessFactor:f32 = roughness;
    
        #if ${defines.USE_ROUGHNESSMAP}
            //let texelRoughness:vec4<f32> = texture2D( roughnessMap, vUv );
            let texelRoughness:vec4<f32>=textureSample(roughnessMap, baseSampler, vUv);
            roughnessFactor *= texelRoughness.g;
        #endif

        let metalnessFactor:vec3<f32> = metalness;
    
        #ifdef ${defines.USE_METALNESSMAP}
            //let texelMetalness:vec4<f32> = texture2D( metalnessMap, vUv );
            let texelMetalness:vec4<f32> =textureSample(metalnessMap, baseSampler, vUv);
            metalnessFactor *= texelMetalness.b;
        #endif

        let faceDirection:f32 = is_front ? 1.0 : - 1.0;
    
        #if ${defines.FLAT_SHADED}
            let fdx:vec3<f32> = dpdx( vViewPosition );
            let fdy:vec3<f32> = dpdy( vViewPosition );
            let normal:vec3<f32> = normalize( cross( fdx, fdy ) );
        #else
            let normal:vec3<f32> = normalize( vNormal );
            #if ${defines.DOUBLE_SIDED}
                normal = normal * faceDirection;
            #endif
            #if ${defines.USE_TANGENT}
                let tangent:vec3<f32> = normalize( vTangent );
                let bitangent:vec3<f32> = normalize( vBitangent );
                #if ${defines.DOUBLE_SIDED}
                    tangent = tangent * faceDirection;
                    bitangent = bitangent * faceDirection;
                #endif
                #if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
                    let vTBN:mat3x3<f32> = mat3x3<f32>( tangent, bitangent, normal );
                #endif

            #endif
        #endif
    
        let geometryNormal:vec3<f32> = normal;

        #if ${defines.OBJECTSPACE_NORMALMAP}
            //normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
            normal =textureSample(normalMap, baseSampler, vUv).xyz * 2.0 - 1.0;
            #ifdef FLIP_SIDED
                normal = - normal;
            #endif
            #ifdef DOUBLE_SIDED
                normal = normal * faceDirection;
            #endif

            normal = normalize( normalMatrix * normal );

            #elif ${defines.TANGENTSPACE_NORMALMAP}
            //let mapN:vec3<f32> = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
            let mapN:vec3<f32> =textureSample(normalMap, baseSampler, vUv).xyz * 2.0 - 1.0;
            let mapN:vec3<f32> =mapN.xy *= normalScale;
            #if ${defines.USE_TANGENT}
                normal = normalize( vTBN * mapN );
            #else
                normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
            #endif

            #elif ${defines.USE_BUMPMAP}

            normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
        #endif

        #if ${defines.USE_CLEARCOAT}
            let clearcoatNormal:vec3<f32> = geometryNormal;
        #endif
        #if ${defines.USE_CLEARCOAT_NORMALMAP}
            //let clearcoatMapN:vec3<f32> = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
            let clearcoatMapN:vec3<f32> =textureSample(clearcoatNormalMap, baseSampler, vUv).xyz * 2.0 - 1.0;
            clearcoatMapN.xy *= clearcoatNormalScale;
            #if ${defines.USE_TANGENT}
                clearcoatNormal = normalize( vTBN * clearcoatMapN );
            #else
                clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
            #endif
        #endif
        #if ${defines.USE_EMISSIVEMAP}
            //let emissiveColor:vec4<f32> = texture2D(emissiveMap, vUv );
            let emissiveColor:vec4<f32> =textureSample(clearcoatNormalMap, baseSampler, vUv);
            totalEmissiveRadiance *= emissiveColor.rgb;
        #endif

        PhysicalMaterial material;
        material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
        let dxy:vec3<f32> = max( abs( dpdx( geometryNormal ) ), abs( dpdy( geometryNormal ) ) );
        let geometryRoughness:f32 = max( max( dxy.x, dxy.y ), dxy.z );
        material.roughness = max( roughnessFactor, 0.0525 );
        material.roughness += geometryRoughness;
        material.roughness = min( material.roughness, 1.0 );

        #if ${defines.IOR}
            material.ior = ior;
            #if ${defines.SPECULAR}
                let specularIntensityFactor:f32 = specularIntensity;
                let specularColorFactor:vec3<f32> = specularColor;
                #if ${defines.USE_SPECULARINTENSITYMAP}
                    //specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
                    specularIntensityFactor *=textureSample(specularIntensityMap, baseSampler, vUv).a;
                #endif

                #if ${defines.USE_SPECULARCOLORMAP}
                    //specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
                    specularColorFactor *=textureSample(specularColorMap, baseSampler, vUv).rgb;
                #endif

                material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
            #else
                let specularIntensityFactor:f32 = 1.0;
                let specularColorFactor:vec3<f32> = vec3<f32>( 1.0 );
                material.specularF90 = 1.0;
            #endif
            material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
        #else
            material.specularColor = mix( vec3<f32>( 0.04 ), diffuseColor.rgb, metalnessFactor );
            material.specularF90 = 1.0;
        #endif
        #if ${defines.USE_CLEARCOAT}
            material.clearcoat = clearcoat;
            material.clearcoatRoughness = clearcoatRoughness;
            material.clearcoatF0 = vec3<f32>( 0.04 );
            material.clearcoatF90 = 1.0;
            #if ${defines.USE_CLEARCOATMAP}
                //material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
                material.clearcoat *=textureSample(clearcoatMap, baseSampler, vUv).x;
            #endif
            #if ${defines.USE_CLEARCOAT_ROUGHNESSMAP}
                //material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
                material.clearcoatRoughness *=textureSample(clearcoatRoughnessMap, baseSampler, vUv).y;
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
                //material.iridescence *= texture2D( iridescenceMap, vUv ).r;
                material.iridescence *=textureSample(iridescenceMap, baseSampler, vUv).r;
            #endif
            #if ${defines.USE_IRIDESCENCE_THICKNESSMAP}
                //material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
                material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * textureSample(iridescenceThicknessMap, baseSampler, vUv).g + iridescenceThicknessMinimum;
            #else
                material.iridescenceThickness = iridescenceThicknessMaximum;
            #endif
        #endif
        #if ${defines.USE_SHEEN}
            material.sheenColor = sheenColor;
            #if ${defines.USE_SHEENCOLORMAP}
                //material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
                material.sheenColor *=textureSample(sheenColorMap, baseSampler, vUv).rgb;
            #endif
            material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
            #if ${defines.USE_SHEENROUGHNESSMAP}
                //material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
                material.sheenRoughness *=textureSample(sheenRoughnessMap, baseSampler, vUv).a;
            #endif
        #endif
        
        GeometricContext geometry;
        geometry.position = - vViewPosition;
        geometry.normal = normal;
       // geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
       geometry.viewDir = normalize( vViewPosition); 

        #if ${defines.USE_CLEARCOAT}
            geometry.clearcoatNormal = clearcoatNormal;
        #endif

        #if ${defines.USE_IRIDESCENCE}
            let dotNVi:f32 = saturate( dot( normal, geometry.viewDir ) );
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
            let iblIrradiance::vec3<f32> = vec3<f32>( 0.0 );
            let irradiance::vec3<f32> = getAmbientLightIrradiance( ambientLightColor );
            irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
        //#endif
        //#if defined( RE_IndirectSpecular )
            let radiance:vec3<f32> = vec3<f32>( 0.0 );
            let clearcoatRadiance:vec3<f32> = vec3<f32>( 0.0 );
        //#endif
        //#if defined( RE_IndirectDiffuse )
            #if ${defines.USE_LIGHTMAP}
                //let lightMapTexel:vec4<f32> = texture2D( lightMap, vUv2 );
                let lightMapTexel:vec4<f32> =textureSample(lightMap, baseSampler, vUv2);
                let lightMapIrradiance:vec3<f32> = lightMapTexel.rgb * lightMapIntensity;
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
            //let ambientOcclusion:f32 = (texture2D(aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
            let ambientOcclusion:f32 = (textureSample(aoMap, baseSampler, vUv2).r - 1.0 ) * aoMapIntensity + 1.0;

            reflectedLight.indirectDiffuse *= ambientOcclusion;
            #if defined( USE_ENVMAP ) && defined( STANDARD )
                let dotNV:f32 = saturate( dot( geometry.normal, geometry.viewDir ) );
                reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
            #endif
        #endif

        let totalDiffuse:vec3<f32> = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
        let totalSpecular:vec3<f32> = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
        //透射
        #if ${defines.USE_TRANSMISSION}
            material.transmission = transmission;
            material.transmissionAlpha = 1.0;
            material.thickness = thickness;
            material.attenuationDistance = attenuationDistance;
            material.attenuationColor = attenuationColor;
            #ifdef USE_TRANSMISSIONMAP
                //material.transmission *= texture2D( transmissionMap, vUv).r;
                material.transmission *=textureSample(transmissionMap, baseSampler, vUv).r;
            #endif
            #ifdef USE_THICKNESSMAP
                //material.thickness *= texture2D( thicknessMap, vUv).g;
                material.thickness *=textureSample(thicknessMap, baseSampler, vUv).g;
            #endif
            let pos:vec3<f32> = vWorldPosition;
            let v:vec3<f32> = normalize( cameraPosition - pos );
            let n:vec3<f32> = inverseTransformDirection( normal, viewMatrix );
            let transmission:vec4<f32> = getIBLVolumeRefraction(
            n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90, pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness, material.attenuationColor, material.attenuationDistance );
            material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
            totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
        #endif

        let outgoingLight:vec3<f32> = totalDiffuse + totalSpecular + totalEmissiveRadiance;

        #if ${defines.USE_SHEEN}
            let sheenEnergyComp:f32 = 1.0 - 0.157 * max3( material.sheenColor );
            outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
        #endif

        #if ${defines.USE_CLEARCOAT}
            let dotNVcc:f32 = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
            let Fcc:vec3<f32> = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
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
    }`
}
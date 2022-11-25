import { wgslParseDefines } from "../../WgslPreprocessor";

export default function pbrFunction(defines){
   return wgslParseDefines `

    #if ${defines.DITHERING}
    fn dithering(color:vec3<f32> )->vec3<f32> {
        let grid_position:f32 = rand( gl_FragCoord.xy );
        let dither_shift_RGB:vec3<f32> = vec3<f32>( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
        dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
        return color + dither_shift_RGB;
    }
    #endif

    #if ${defines.USE_IRIDESCENCE}
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
        for ( let m : u32 = 1;m <= 2; ++ m ) {
            Cm *= r123;
            Sm:vec3<f32> = 2.0 * evalSensitivity( f32( m ) * OPD, f32( m ) * phi );
            I += Cm * Sm;
        }
        return max( I, vec3<f32>( 0.0 ) );
    }
    #endif
    #if ${defines.ENVTEXTURE_TYPE_CUBE_UV}
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
    fn bilinearCubeUV(envTexture:texture_2d<f32>,direction:vec3<f32>, mipInt:f32 )->vec3<f32> {
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
        // #ifdef texture2DGradEXT
        //     return texture2DGradEXT( envTexture, uv, vec2<f32>( 0.0 ), vec2<f32>( 0.0 ) ).rgb;
        // #else
            
        // #endif
        return textureSample(envTexture, baseSampler, uv).rgb;
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
    fn textureCubeUV(envTexture:texture_2d<f32>, sampleDir:vec3<f32>,roughness:f32 )->vec4<f32> {
        let mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
        let mipF = fract( mip );
        let mipInt = floor( mip );
        let color0:vec3<f32> = bilinearCubeUV( envTexture, sampleDir, mipInt );
        if ( mipF == 0.0 ) {
            return vec4<f32>(color0, 1.0 );
        }
        else {
            let color1:vec3<f32> = bilinearCubeUV( envTexture, sampleDir, mipInt + 1.0 );
            return vec4<f32>(mix( color0, color1, mipF ), 1.0 );
        }
    
    }
    #endif

    #if ${defines.USE_ENVTEXTURE}
    fn getIBLIrradiance( normal:vec<f32> )->vec3 {
        #if ${defines.ENVTEXTURE_TYPE_CUBE_UV}
            let worldNormal:vec3<f32> = inverseTransformDirection( normal, viewMatrix );
            let envTextureColor:vec4<f32> = textureCubeUV( envTexture, worldNormal, 1.0 );
            return PI * envTextureColor.rgb * materialUniform.envTextureIntensity;
        #else
            return vec3<f32>( 0.0 );
        #endif
    }
    fn getIBLRadiance( viewDir:vec3<f32>, normal:vec3<f32>, roughness:f32 )->vec3<f32> {
        #if ${defines.ENVTEXTURE_TYPE_CUBE_UV}
            let reflectVec:vec3<f32> = reflect( - viewDir, normal );
            reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
            reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
            let envTextureColor:vec4<f32> = textureCubeUV( envTexture, reflectVec, roughness );
            return envTextureColor.rgb * materialUniform.envTextureIntensity;
        #else
            return vec3<f32>( 0.0 );
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
        let framebufferLod:f32 = log2( materialUniform.transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
        return textureSampleLevel(transmissionSamplerTexture,baseSampler,fragCoord.xy, framebufferLod);

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

    #if ${defines.USE_BUMPTEXTURE}
    fn dHdxy_fwd()->vec2<f32> {
        let dSTdx:vec2<f32> = dpdx( vUv );
        let dSTdy:vec2<f32> = dpdy( vUv );

        let Hll:f32 = materialUniform.bumpScale * textureSample(bumpTexture, baseSampler, vUv).x;
        let dBx:f32 = materialUniform.bumpScale * textureSample(bumpTexture, baseSampler, vUv + dSTdx).x - Hll;
        let dBy:f32 = materialUniform.bumpScale * textureSample(bumpTexture, baseSampler, vUv + dSTdy).x - Hll;
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

    //! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALTEXTURE ) || defined ( USE_CLEARCOAT_NORMALTEXTURE ) )
    #if ${!defines.USE_TANGENT&&defines.TANGENTSPACE_NORMALTEXTURE||defines.USE_CLEARCOAT_NORMALTEXTURE}
    fn perturbNormal2Arb( eye_pos:vec3<f32>, surf_norm:vec3<f32>, textureN:vec3<f32>, faceDirection:f32 )->vec3<f32> {
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
        return normalize( T * ( textureN.x * scale ) + B * ( textureN.y * scale ) + N * textureN.z );
    }
    #endif

   #if ${defines.USE_IRIDESCENCE}
   ////////inout vec3 singleScatter, inout vec3 multiScatter
       fn computeMultiscatteringIridescence( normal:vec3<f32>, viewDir:vec3<f32>, specularColor:vec3<f32>, specularF90:f32, iridescence:f32,iridescenceF0:vec3<f32>, roughness:f32, singleScatter:vec3<f32>, multiScatter:vec3<f32> ) {
   #else
   ////////inout vec3 singleScatter, inout vec3 multiScatter
       fn computeMultiscattering( normal:vec3<f32>,viewDir:vec3<f32>, specularColor:vec3<f32>, specularF90:f32, roughness:f32, singleScatter:vec3<f32>, multiScatter:vec3<f32> ) {
   #endif
   let fab:vec2<f32> = DFGApprox( normal, viewDir, roughness );
   #if ${defines.USE_IRIDESCENCE}
       let Fr:vec3<f32> = mix( specularColor, iridescenceF0, iridescence );
   #else
       let Fr:vec3<f32> = specularColor;
   #endif
       let FssEss:vec3<f32> = Fr * fab.x + specularF90 * fab.y;
       let Ess:f32 = fab.x + fab.y;
       let Ems:f32 = 1.0 - Ess;
       let Favg:vec3<f32> = Fr + ( 1.0 - Fr ) * 0.047619;
       let Fms:vec3<f32> = FssEss * Favg / ( 1.0 - Ems * Favg );
       singleScatter += FssEss;
       multiScatter += Fms * Ems;
   }
   //直接光照
   fn RE_Direct_Physical( directLight:IncidentLight, geometry:GeometricContext,  material:PhysicalMaterial)->ReflectedLight {
       var reflectedLight:ReflectedLight;
       let dotNL:f32 = saturate( dot( geometry.normal, directLight.direction ) );
       let irradiance:vec3<f32> = dotNL * directLight.color;
       #if ${defines.USE_CLEARCOAT}
           let dotNLcc:f32 = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
           let ccIrradiance:vec3<f32> = dotNLcc * directLight.color;
           clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
       #endif
       #if ${defines.USE_SHEEN}
           sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
       #endif

       #if ${defines.USE_IRIDESCENCE}
           reflectedLight.directSpecular = irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
       #else
           reflectedLight.directSpecular = irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
       #endif
       reflectedLight.directDiffuse = irradiance * BRDF_Lambert( material.diffuseColor );
       return reflectedLight;
   }
   //间接光照
   fn RE_IndirectDiffuse_Physical( irradiance:vec3, geometry:GeometricContext, material:PhysicalMaterial )->ReflectedLight {
       var reflectedLight:ReflectedLight;
       reflectedLight.indirectDiffuse = irradiance * BRDF_Lambert( material.diffuseColor );
       return reflectedLight;
   }
   //间接高光
   fn RE_IndirectSpecular_Physical( radiance:vec3<f32>, irradiance:vec3<f32>, clearcoatRadiance:vec3<f32>, geometry:GeometricContext, material:PhysicalMaterial)->ReflectedLight {
       var reflectedLight:ReflectedLight;
       #if ${defines.USE_CLEARCOAT}
           clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
       #endif
       #if ${defines.USE_SHEEN}
           sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
       #endif
       let singleScattering:vec3<f32> = vec3<f32>( 0.0 );
       let multiScattering:vec3<f32> = vec3<f32>( 0.0 );
       let cosineWeightedIrradiance:vec3<f32> = irradiance * RECIPROCAL_PI;
       #if ${defines.USE_IRIDESCENCE}
           computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
       #else
           computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
       #endif
       let totalScattering:vec3<f32> = singleScattering + multiScattering;
       let diffuse:vec3<f32> = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
       reflectedLight.indirectSpecular = radiance * singleScattering;
       reflectedLight.indirectSpecular = multiScattering * cosineWeightedIrradiance;
       reflectedLight.indirectDiffuse = diffuse * cosineWeightedIrradiance;
       return reflectedLight;
   }

   #define RE_Direct				RE_Direct_Physical
   #define RE_Direct_RectArea		RE_Direct_RectArea_Physical
   #define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
   #define RE_IndirectSpecular		RE_IndirectSpecular_Physical

   `
}
import { wgslParseDefines } from "../../WgslPreprocessor";
export default function environment(defines){
   return  wgslParseDefines `
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
   `
}
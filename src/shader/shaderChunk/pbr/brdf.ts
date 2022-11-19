export default function brdf(defines){
  return `
        fn BRDF_Lambert(diffuseColor:vec3<f32>)->vec3<f32> {

            return RECIPROCAL_PI * diffuseColor;

        } // validated

        fn F_Schlick( f0:vec3<f32>, f90:f32, dotVH:f32 )->vec3<f32> {

            // Original approximation by Christophe Schlick '94
            // float fresnel = pow( 1.0 - dotVH, 5.0 );

            // Optimized variant (presented by Epic at SIGGRAPH '13)
            // https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
            let fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

            return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

        } // validated

        fn Schlick_to_F0(f:vec3<f32>, f90:f32, dotVH:f32 )->vec3<f32> {
            let x:f32 = clamp( 1.0 - dotVH, 0.0, 1.0 );
            let x2:f32 = x * x;
            let x5:f32 = clamp( x * x2 * x2, 0.0, 0.9999 );

            return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
        }
        fn V_GGX_SmithCorrelated( alpha:f32, dotNL:f32,dotNV:f32 )->f32 {

            let a2 :f32= pow2( alpha );

            let gv:f32 = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
            let gl:f32 = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );

            return 0.5 / max((gv + gl), 0.000000001 );

        }
        fn D_GGX( alpha:f32, dotNH:f32 )->f32 {

            let a2:f32 = pow2( alpha );

            let denom:f32 = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1

            return RECIPROCAL_PI * a2 / pow2( denom );

        }
        fn BRDF_GGX( lightDir:vec3<f32>, viewDir:vec3<f32>, normal:vec3<f32>, f0:vec3<f32>, f90:f32, roughness:f32 )->vec3<f32> {

            let alpha:f32 = pow2( roughness ); // UE4's roughness

            let halfDir = normalize( lightDir + viewDir );

            let dotNL:f32 = saturate( dot( normal, lightDir ) );
            let dotNV:f32 = saturate( dot( normal, viewDir ) );
            let dotNH:f32 = saturate( dot( normal, halfDir ) );
            let dotVH:f32 = saturate( dot( viewDir, halfDir ) );

            let F = F_Schlick( f0, f90, dotVH );

            let V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );

            let D = D_GGX( alpha, dotNH );

            return F * ( V * D );

        }

  `
}
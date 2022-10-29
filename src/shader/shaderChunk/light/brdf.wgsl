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

fn F_Schlick( f0:f32, f90:f32, dotVH:f32 )->f32 {

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

// Moving Frostbite to Physically Based Rendering 3.0 - page 12, listing 2
// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
fn V_GGX_SmithCorrelated( alpha:f32, dotNL:f32,dotNV:f32 )->f32 {

	let a2 :f32= pow2( alpha );

	let gv:f32 = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	let gl:f32 = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );

	return 0.5 / max( gv + gl, EPSILON );

}

// Microfacet Models for Refraction through Rough Surfaces - equation (33)
// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html
// alpha is "roughness squared" in Disney’s reparameterization
fn D_GGX( alpha:f32, dotNH:f32 )->f32 {

	let a2:f32 = pow2( alpha );

	let denom:f32 = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1

	return RECIPROCAL_PI * a2 / pow2( denom );

}
// GGX Distribution, Schlick Fresnel, GGX_SmithCorrelated Visibility
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

// End Rect Area Light


fn G_BlinnPhong_Implicit( )->f32 {

	// geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)
	return 0.25;

}

fn D_BlinnPhong( shininess:f32, dotNH:f32 )->f32 {

	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );

}

fn BRDF_BlinnPhong( lightDir:vec3<f32>, viewDir:vec3<f32>, normal:vec3<f32>, specularColor:vec3<f32>, shininess:f32 )->vec3<f32> {

	let  halfDir = normalize( lightDir + viewDir );

	let  dotNH:f32 = saturate( dot( normal, halfDir ) );
	let dotVH:f32 = saturate( dot( viewDir, halfDir ) );

	let F = F_Schlick( specularColor, 1.0, dotVH );

	let G:f32 = G_BlinnPhong_Implicit( );

	let D = D_BlinnPhong( shininess, dotNH );

	return F * ( G * D );

} // validated

// #if defined( USE_SHEEN )

// // https://github.com/google/filament/blob/master/shaders/src/brdf.fs
// float D_Charlie( float roughness, float dotNH ) {

// 	float alpha = pow2( roughness );

// 	// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF"
// 	float invAlpha = 1.0 / alpha;
// 	float cos2h = dotNH * dotNH;
// 	float sin2h = max( 1.0 - cos2h, 0.0078125 ); // 2^(-14/2), so sin2h^2 > 0 in fp16

// 	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );

// }

// // https://github.com/google/filament/blob/master/shaders/src/brdf.fs
// float V_Neubelt( float dotNV, float dotNL ) {

// 	// Neubelt and Pettineo 2013, "Crafting a Next-gen Material Pipeline for The Order: 1886"
// 	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );

// }

// vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {

// 	vec3 halfDir = normalize( lightDir + viewDir );

// 	float dotNL = saturate( dot( normal, lightDir ) );
// 	float dotNV = saturate( dot( normal, viewDir ) );
// 	float dotNH = saturate( dot( normal, halfDir ) );

// 	float D = D_Charlie( sheenRoughness, dotNH );
// 	float V = V_Neubelt( dotNV, dotNL );

// 	return sheenColor * ( D * V );

// }

// #endif
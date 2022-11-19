export default function pbrFunction(defines){
   return  `
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

   fn RE_Direct_Physical( directLight:IncidentLight, geometry:GeometricContext,  material:PhysicalMaterial, reflectedLight:ReflectedLight ) {
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
           reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
       #else
           reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
       #endif
       reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
   }
   fn RE_IndirectDiffuse_Physical( irradiance:vec3, geometry:GeometricContext, material:PhysicalMaterial,reflectedLight:ReflectedLight ) {
       reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
   }
   //////// inout ReflectedLight reflectedLight
   fn RE_IndirectSpecular_Physical( radiance:vec3<f32>, irradiance:vec3<f32>, clearcoatRadiance:vec3<f32>, geometry:GeometricContext, material:PhysicalMaterial, reflectedLight:ReflectedLight) {
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
       reflectedLight.indirectSpecular += radiance * singleScattering;
       reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
       reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
   }

   #define RE_Direct				RE_Direct_Physical
   #define RE_Direct_RectArea		RE_Direct_RectArea_Physical
   #define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
   #define RE_IndirectSpecular		RE_IndirectSpecular_Physical

   `
}
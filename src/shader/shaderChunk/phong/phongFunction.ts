export default function phongFunction(defines){
    return  `
    fn G_BlinnPhong_Implicit( )->f32 {

        // geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)
        return 0.25;

    }
    fn D_BlinnPhong( shininess:f32, dotNH:f32 )->f32 {

        return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow(dotNH, shininess );

    }
    fn BRDF_BlinnPhong( lightDir:vec3<f32>, viewDir:vec3<f32>, normal:vec3<f32>, specularColor:vec3<f32>, shininess:f32 )->vec3<f32> {

        let  halfDir = normalize( lightDir + viewDir );

        let  dotNH:f32 = saturate( dot( normal, halfDir ) );
        let dotVH:f32 = saturate( dot( viewDir, halfDir ) );

        let F = F_Schlick( specularColor, 1.0, dotVH );

        let G:f32 = G_BlinnPhong_Implicit( );

        let D = D_BlinnPhong( shininess, dotNH );

        return F * ( G * D );

    } 
    fn RE_Direct_BlinnPhong(  directLight:IncidentLight,geometry:GeometricContext, material:BlinnPhongMaterial )->ReflectedLight{
        var reflectedLight:ReflectedLight; 
        let dotNL:f32 = saturate(dot(geometry.normal, directLight.direction));
        let irradiance:vec3<f32> = dotNL*directLight.color;

        reflectedLight.directDiffuse= irradiance * BRDF_Lambert( material.diffuseColor );

        reflectedLight.directSpecular= irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
        return reflectedLight;
    }
    fn RE_IndirectDiffuse_BlinnPhong( irradiance:vec3<f32>, geometry:GeometricContext, material:BlinnPhongMaterial)->ReflectedLight {
        var reflectedLight:ReflectedLight; 
        reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
        return reflectedLight;
    }
    `
}
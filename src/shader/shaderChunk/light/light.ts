
export default`    struct ReflectedLight {
        directDiffuse:vec3<f32>;
        directSpecular:vec3<f32>;
        indirectDiffuse:vec3<f32>;
        indirectSpecular:vec3<f32>;
    };
    struct BlinnPhongMaterial {
        diffuseColor:vec3<f32>;
        specularColor:vec3<f32>;
        specularShininess:f32;
        fspecularStrength:f32;
    };
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
    struct DirtectLight {
        direction: vec3<f32>;
        color: vec3<f32>;
    };
    struct LightCount{
        spotCount:u32;
        pointCount:u32;
        directionCount:u32;
        ambientLightCount:u32
    }
    struct AmbientLight{
        color: vec3<f32>;
    }
    struct SpotLightBuffer {
    lights: array<SpotLight>,
    }
    struct PointLightBuffer {
    lights: array<PointLight>,
    }
    struct DirtectLightBuffer {
    lights: array<DirtectLight>,
    }
    let RECIPROCAL_PI:f32= 0.3183098861837907;
    fn pow2( x:f32 )->f32 { return x*x; }
    fn pow2(x:vec3<f32> )->vec3<f32> { return x*x; }
    fn pow3( x:f32 )->f32 { return x*x*x; }
    fn pow4(x:f32 )->f32 { let x2 = x*x; return x2*x2; }
    fn max3( v:vec3<f32> )->f32 { return max( max( v.x, v.y ), v.z ); }
    fn average(v:vec3<f32> )->f32 { 
        let result=vec3<f32>( 0.3333333,  0.3333333, 0.3333333);
        return dot( v,result ); 
    }
    @group(2) @binding(0) var<uniform> pointLights: PointLightBuffer;
    @group(2) @binding(1) var<uniform> spotLights: SpotLightBuffer;
    @group(2) @binding(2) var<uniform> directionalLights: DirtectLightBuffer;
    @group(2) @binding(3) var<uniform> ambientLight: AmbientLight;
    @group(2) @binding(4) var<uniform> lightCount: LightCount;
    fn getAmbientLightIrradiance(ambientLightColor: vec3<f32>) -> vec3<f32> {

        let irradiance = ambientLightColor;

        return irradiance;
    }
    fn getDistanceAttenuation(lightDistance: f32, cutoffDistance: f32, decayExponent: f32) -> f32 {

        // #if defined ( PHYSICALLY_CORRECT_LIGHTS )

            // based upon Frostbite 3 Moving to Physically-based Rendering
            // page 32, equation 26: E[window1]
            // https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
            // let distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );

            // if ( cutoffDistance > 0.0 ) {

            // 	distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );

            // }

            // return distanceFalloff;

        // #else

        if (cutoffDistance > 0.0 && decayExponent > 0.0) {
            let x:f32 = saturate(- lightDistance / cutoffDistance + 1.0);
            return pow(x, decayExponent);
        }
        return 1.0;

        // #endif
    }
    fn getSpotAttenuation(coneCosine: f32, penumbraCosine: f32, angleCosine: f32) -> f32 {

        return smoothstep(coneCosine, penumbraCosine, angleCosine);
    }
    fn getDirtectLightInfo(directionalLight: DirtectLight, geometry: GeometricContext) -> IncidentLight {
        let light:IncidentLight;
        light.color = directionalLight.color;
        light.direction = directionalLight.direction;
        light.visible = true;
        return light;
    }
    fn getPointLightInfo(pointLight: PointLight, geometry: GeometricContext) -> IncidentLight {
        let light:IncidentLight;
        let lVector:vec3<f32> = pointLight.position - geometry.position;

        light.direction = normalize(lVector);

        let lightDistance = length(lVector);

        light.color = pointLight.color;
        light.color *= getDistanceAttenuation(lightDistance, pointLight.distance, pointLight.decay);
        light.visible = ( light.color != vec3(0.0) );
        return light;
    }
    fn getSpotLightInfo(spotLight: SpotLight, geometry: GeometricContext) -> IncidentLight {
        let light:IncidentLight;
        let lVector = spotLight.position - geometry.position;

        light.direction = normalize(lVector);

        let angleCos = dot(light.direction, spotLight.direction);

        let spotAttenuation = getSpotAttenuation(spotLight.coneCos, spotLight.penumbraCos, angleCos);

        if (spotAttenuation > 0.0) {

            let lightDistance = length(lVector);

            light.color = spotLight.color * spotAttenuation;
            light.color *= getDistanceAttenuation(lightDistance, spotLight.distance, spotLight.decay);
            light.visible = ( light.color != vec3(0.0) );
        } else {

            light.color = vec3(0.0);
            light.visible = false;
        }
        return light
    }
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

    } 
    fn RE_Direct_BlinnPhong(  directLight:IncidentLight,geometry:GeometricContext, material:BlinnPhongMaterial, reflectedLight:ReflectedLight ){

        let  dotNL:f32 = saturate( dot( geometry.normal, directLight.direction ) );
        let irradiance:vec3<f32> = dotNL * directLight.color;

        reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

        reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;

    }
    fn parseLights(geometry:GeometricContext,material:BlinnPhongMaterial)->ReflectedLight{
        var  incidentLight:IncidentLight;
        var reflectedLight:ReflectedLight;
        //处理方向光
        var dirtectLight:DirtectLight;
        for (var i : u32 = 0u; i < lightCount.directionCount; i = i + 1u) {
            dirtectLight = directionalLights.lights[i];
            incidentLight=getDirtectLightInfo(dirtectLight, geometry);
            RE_Direct_BlinnPhong(incidentLight, geometry, material, reflectedLight );
        }
        //处理点光源
        var pointLight:PointLight;
        for (var i : u32 = 0u; i < lightCount.pointCount;i = i + 1u) {
            pointLight = pointLights.lights[ i ];
            incidentLight =getPointLightInfo( pointLight, geometry);
            RE_Direct_BlinnPhong(incidentLight, geometry, material, reflectedLight );
        }
        //处理聚光灯
        var spotLight:SpotLight;
        for (var i : u32 = 0u; i < lightCount.spotCount; i = i + 1u) {
            spotLight = spotLights.lights[ i ];
            incidentLight =getSpotLightInfo( spotLight, geometry);
            RE_Direct_BlinnPhong(incidentLight, geometry, material, reflectedLight );
        }
        return reflectedLight;
    }`

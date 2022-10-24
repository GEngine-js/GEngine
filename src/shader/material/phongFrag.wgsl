struct Material {
    ambientColor: vec3<f32>,
    diffuseColor: vec3<f32>,
    specularColor: vec3<f32>,
    shininess: f32,
    roughness: f32,
    albedo: f32,
    fresnel: f32,
  }; 
  struct Light {
    position: vec3<f32>,
    color: vec4<f32>,
    attenuation: f32,
    direction: vec3<f32>,
    innerAngle: f32,
    angle: f32,
    range: f32,
  }; 
  struct SystemUniform {
    projectionMatrix: mat4x4<f32>,
    viewMatrix: mat4x4<f32>,
    inverseViewMatrix: mat4x4<f32>,
    cameraPosition: vec3<f32>,
    time: f32,
  }; 
  @group(0) @binding(0) var<uniform> system: SystemUniform;   
  const PI: f32 = 3.14159265359;
  const EPSILON: f32 = 0.00000000001;  
  // #define DIFFUSE_OREN_NAYAR
  fn Diffuse(
    lightDirection: vec3<f32>,
    viewDirection: vec3<f32>,
    surfaceNormal: vec3<f32>,
    material: Material
  ) -> f32 {
    let LdotV = dot(lightDirection, viewDirection);
    let NdotL = dot(lightDirection, surfaceNormal);
    let NdotV = dot(surfaceNormal, viewDirection);
  
    let s = LdotV - NdotL * NdotV;
    let t = mix(1.0, max(NdotL, NdotV), step(0.0, s));
  
    let sigma2 = material.roughness * material.roughness;
    let A = 1.0 + sigma2 * (material.albedo / (sigma2 + 0.13) + 0.5 / (sigma2 + 0.33));
    let B = 0.45 * sigma2 / (sigma2 + 0.09);
  
    return material.albedo * max(0.0, NdotL) * (A + B * s / t) / PI;
  } 
  // #define SPECULAR_PHONG
  fn Specular(lightDirection: vec3<f32>, viewDirection: vec3<f32>, surfaceNormal: vec3<f32>, material: Material) -> f32 {
    let reflectDirection = -reflect(lightDirection, surfaceNormal);
  
    return pow(max(0.0, dot(viewDirection, reflectDirection)), material.shininess);
  }  
  fn getDirectShading(
    material: Material,
    light: Light,
    surfaceNormal: vec3<f32>,
    viewDirection: vec3<f32>,
    positionToLight: vec3<f32>,
    distanceAttenuation: bool,
    angleAttenuation: bool
  ) -> vec3<f32> {
    let lightDirection = normalize(positionToLight); 
    // Diffuse reflection (Lambertial reflectance)
    // #ifdef DIFFUSE_LAMBERT
    // let diff = Diffuse(lightDirection, surfaceNormal);
    // #elif defined(DIFFUSE_OREN_NAYAR)
    let diff = Diffuse(
      lightDirection,
      viewDirection,
      surfaceNormal,
      material
    );
    // #endif 
    if (diff <= 0.0) {
      return vec3<f32>(0.0);
    } 
    // Specular relection
    // #ifdef WARD
    // float spec = Specular(lightDirection, viewDirection, surfaceNormal, material, fiberParallel, fiberPerpendicular, shinyParallel, shinyPerpendicular);
    // #elif defined(HEIDRICH_SEIDEL)
    // float spec = Specular(lightDirection, viewDirection, surfaceNormal, material, anisoRoughness, specDirection);
    // #else
    let spec = Specular(lightDirection, viewDirection, surfaceNormal, material);
    // #endif 
    // Combine results
    let diffuse = material.diffuseColor * diff;
    let specular = material.specularColor * spec; 
    // Attenuation
    var attenuation = 1.0;
    if (distanceAttenuation) {
          attenuation = attenuation * pow(saturate(1.0 - length(positionToLight) / light.range), 2.0);
    }
  
    if (angleAttenuation) {
      let theta = dot(lightDirection, normalize(-light.direction));
  
      if (theta > light.innerAngle) {
        let epsilon = light.innerAngle - light.angle;
        attenuation = attenuation * clamp((theta - light.angle) / epsilon, 0.0, 1.0);
      }
    }
  
    return attenuation * (light.color.xyz * (material.ambientColor + diffuse + specular)) * light.color.a;
  }
   
  @fragment
  fn main(
    @builtin(front_facing) front_facing: bool,
    @location(0) vPositionWorld: vec3<f32>,
    @location(1) vPositionView: vec3<f32>,
    @location(2) vNormalView: vec3<f32>,
    @location(3) vNormalWorld: vec3<f32>
  ) -> @location(0) vec4<f32> {
    var color = vec3<f32>(0.0);
  
    // Renormalize
    var normalWorld = normalize(vNormalWorld);
    normalWorld = normalWorld * (f32(front_facing) * 2.0 - 1.0);
  
    var normalView = normalize(vNormalView);
    normalView = normalView * (f32(front_facing) * 2.0 - 1.0);
  
    var material: Material;
    material.ambientColor = vec3<f32>(0.05, 0.05, 0.05);
    material.diffuseColor = vec3<f32>(1.0, 1.0, 1.0);
    material.diffuseColor = normalWorld * 0.5 + 0.5;
    material.specularColor = vec3<f32>(0.9, 0.9, 0.9);
    material.shininess = 20.0;
    material.roughness = 0.2;
    // #ifdef DIFFUSE_OREN_NAYAR
    material.albedo = 2.0;
    // #endif
    // #ifdef SPECULAR_GAUSSIAN
    // material.shininess = 0.2;
    // #endif
    // #ifdef SPECULAR_COOK_TORRANCE
    // material.fresnel = 0.1;
    // #endif
  
    let viewDirectionWorld = normalize(system.cameraPosition - vPositionWorld);
    let viewDirectionView = normalize(-vPositionView);
  
    // Directional
    var directionnalLight: Light;
    directionnalLight.position = vec3<f32>(-1.0, 0.0, -1.0);
    // directionnalLight.position.x = 2.0 * cos(system.time);
    // directionnalLight.position.z = 2.0 * sin(system.time);
    directionnalLight.color = vec4<f32>(0.2, 0.1, 0.1, 1.0);
    let positionToLight = -directionnalLight.position;
    color = color + getDirectShading(material, directionnalLight, normalWorld, viewDirectionWorld, positionToLight, false, false);
  
    // View space
    // let lightPositionView = (system.viewMatrix * vec4(directionnalLight.position, 1.0)).xyz;
    // directionnalLight.position = lightPositionView - vPositionView;
    // let positionToLight = -directionnalLight.position;
    // color += getDirectShading(material, light, normalView, viewDirectionView, positionToLight, false, false);
  
    // Point
    var pointLight: Light;
    pointLight.position = vec3<f32>(0.0, 0.0, 0.0);
    // pointLight.position.x = 2.0 * cos(system.time);
    // pointLight.position.z = 2.0 * sin(system.time);
    pointLight.color = vec4<f32>(0.1, 0.1, 0.2, 2.5);
    pointLight.range = 2.5;
    let positionToPointLight = pointLight.position - vPositionWorld;
    color = color + getDirectShading(
      material,
      pointLight,
      normalWorld,
      viewDirectionWorld,
      positionToPointLight,
      true,
      false
    ); 
    // Spot
    var spotLight: Light;
    spotLight.position = vec3<f32>(0.0, 1.0, 0.0);
    spotLight.direction = vec3<f32>(0.0, -1.0, 0.0);
    spotLight.color = vec4<f32>(0.1, 0.2, 0.1, 2.5);
    spotLight.range = 2.5;
    spotLight.angle = PI / 4.0;
    spotLight.innerAngle = PI / 5.0;
    let positionToSpotLight = spotLight.position - vPositionWorld;
    color = color + getDirectShading(
      material,
      spotLight,
      normalWorld,
      viewDirectionWorld,
      positionToSpotLight,
      true,
      true
    );
    return vec4<f32>(color, 1.0);
  }
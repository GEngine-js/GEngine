/* wgsl */ `
${Shaders.CONSTANTS.PI}
${Shaders.CONSTANTS.EPSILON}

${Shaders.DIFFUSE.OREN_NAYAR}
${Shaders.SPECULAR.PHONG}
${Shaders.DIRECT.PHONG}
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
`
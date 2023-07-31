fn getPointLightInfo(pointLight : PointLight, worldPos : vec3 <f32>, shininess : f32, N : vec3 <f32>, V : vec3 <f32>) -> vec3 <f32>{
  var color = vec3 <f32> (0.0, 0.0, 0.0);
  var direction : vec3 <f32> = worldPos - pointLight.position;
  let dist : f32 = length(direction);
  direction = normalize(direction);
  let decay = clamp(1.0 - pow(dist / pointLight.distance, 4.0), 0.0, 1.0);

  let d = max(dot(N, -direction), 0.0) * decay;
  color += pointLight.color * d;

  let halfDir : vec3 <f32> = normalize(V - direction);
  let s : f32 = pow(clamp(dot(N, halfDir), 0.0, 1.0), shininess) * decay;
  color += pointLight.color * s;
  return color;
}
fn getSpotLightInfo(spotLight : SpotLight, worldPos : vec3 <f32>, shininess : f32, N : vec3 <f32>, V : vec3 <f32>) -> vec3 <f32>{
  var color = vec3 <f32> (0.0, 0.0, 0.0);
  var direction : vec3 <f32> = spotLight.position - worldPos;
  let lightDistance : f32 = length(direction);
  direction = normalize(direction);
  let angleCos : f32 = dot(direction, -spotLight.direction);
  let decay : f32 = clamp(1.0 - pow(lightDistance / spotLight.distance, 4.0), 0.0, 1.0);
  let spotEffect : f32 = smoothstep(spotLight.penumbraCos, spotLight.coneCos, angleCos);
  let decayTotal : f32 = decay * spotEffect;
  let d : f32 = max(dot(N, direction), 0.0) * decayTotal;
  color += spotLight.color * d;
  let halfDir : vec3 <f32> = normalize(V + direction);
  let s : f32 = pow(clamp(dot(N, halfDir), 0.0, 1.0), shininess) * decayTotal;
  color += spotLight.color * s;
  return color;
}
struct DirectionalLight {
  direction : vec3 <f32>,
  color : vec3 <f32>,
};
fn getDirectLightInfo(directionalLight : DirectionalLight, shininess : f32, N : vec3 <f32>, V : vec3 <f32>) -> vec3 <f32>{
  var color = vec3 <f32> (0.0, 0.0, 0.0);
  let d : f32 = max(dot(N, -directionalLight.direction), 0.0);
  color += directionalLight.color * d;

  let halfDir : vec3 <f32> = normalize(V - directionalLight.direction);
  let s : f32 = pow(clamp(dot(N, halfDir), 0.0, 1.0), shininess);
  color += directionalLight.color * s;
  return color;
}

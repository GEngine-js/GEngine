`
@stage(vertex)

fn main(inputData : InputData) -> OutData {
  var outData : OutData;
  outData.position = uniforms.modelMatrix * vec4<f32>(inputData.position,1.0);
  outData.uv = inputData.uv;
  outData.normal = inputData.normal;
  return outData;
}
`
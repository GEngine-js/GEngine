export default function skyBoxFrag(defines){
    return `
    fn lessThanEqual(a:vec3<f32>,b:vec3<f32>)->vec3<f32>{
        let xValue:f32=select(b.x,a.x,a.x<=b.x);
        let yValue:f32=select(b.y,a.y,a.y<=b.y);
        let zValue:f32=select(b.z,a.z,a.z<=b.z);
        return vec3<f32>(xValue,yValue,zValue);    
     }
    fn LinearTosRGB( value:vec4<f32> )->vec4<f32> {
        return vec4<f32>( mix( pow( value.rgb, vec3<f32>( 0.41666 ) ) * 1.055 - vec3<f32>( 0.055 ), value.rgb * 12.92, vec3<f32>( lessThanEqual( value.rgb, vec3<f32>( 0.0031308 ) ) ) ), value.a );
    }
  struct FragmentInput {
    @location(0) texCoord : vec3<f32>
  };
  @group(0) @binding(2) var defaultSampler: sampler;
  @group(0) @binding(1) var skyboxTexture: texture_cube<f32>;
  @fragment
  fn main(input : FragmentInput) -> @location(0) vec4<f32> {
    let color = textureSample(skyboxTexture, defaultSampler, input.texCoord);
    return LinearTosRGB(color);
  }
`;
}
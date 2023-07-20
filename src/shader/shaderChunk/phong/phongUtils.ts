export default `
   struct BlinnPhongMaterial {
        diffuseColor:vec3<f32>,
        specularColor:vec3<f32>,
        specularShininess:f32,
        specularStrength:f32,
    };
    const reciprocal_pi:f32= 0.3183098861837907;
   fn pow2( x:f32 )->f32 { return x*x; }
   fn pow3( x:f32 )->f32 { return x*x*x; }
   fn pow4(x:f32 )->f32 { let x2 = x*x; return x2*x2; }
   fn max3( v:vec3<f32> )->f32 { return max( max( v.x, v.y ), v.z ); }
   fn average(v:vec3<f32> )->f32 { 
       let result=vec3<f32>( 0.3333333,  0.3333333, 0.3333333);
       return dot( v,result ); 
   }
   `;

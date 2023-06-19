// uniform sampler2D u_BaseColorSampler;
// uniform vec4 u_color;
// varying vec2 v_TexCoord;
// void main() {
//      #if defined(M_USE_BILLBOARDTEXTURE)
//           gl_FragColor=texture2D(u_BaseColorSampler,vec2(v_TexCoord.x,1.0-v_TexCoord.y));
//      #else
//           gl_FragColor = u_color;
//      #endif
// }

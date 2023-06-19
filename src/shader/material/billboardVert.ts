// attribute vec3 a_POSITION;
// attribute vec2 a_TEXCOORD_0;
// uniform float u_rotation;
// uniform vec2 u_center;
// uniform mat4 u_modelMatrix;
// uniform mat4 u_modelViewMatrix;
// uniform mat4 u_projectionMatrix;
// varying vec2 v_TexCoord;

// void main() {
//     v_TexCoord= a_TEXCOORD_0;
//     vec4 mvPosition = u_modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
// 	vec2 scale;
// 	scale.x = length( vec3( u_modelMatrix[ 0 ].x, u_modelMatrix[ 0 ].y, u_modelMatrix[ 0 ].z ) );
// 	scale.y = length( vec3( u_modelMatrix[ 1 ].x, u_modelMatrix[ 1 ].y, u_modelMatrix[ 1 ].z ) );
//     #if defined(M_SIZEATTENUATION)
// 	// 	bool isPerspective = isPerspectiveMatrix( u_projectionMatrix );
// 	    scale *= - mvPosition.z;
// 	#endif
// 	vec2 alignedPosition = ( a_POSITION.xy - ( u_center - vec2( 0.5 ) ) ) * scale;
// 	vec2 rotatedPosition;
// 	rotatedPosition.x = cos( u_rotation ) * alignedPosition.x - sin( u_rotation ) * alignedPosition.y;
// 	rotatedPosition.y = sin( u_rotation ) * alignedPosition.x + cos( u_rotation ) * alignedPosition.y;
// 	mvPosition.xy += rotatedPosition;
// 	gl_Position = u_projectionMatrix * mvPosition;
// }

import { wgslParseDefines } from "../../WgslPreprocessor";

export function SystemUniform(defines) {
	return wgslParseDefines`
      struct SystemUniform {
          projectionMatrix: mat4x4<f32>,
          viewMatrix: mat4x4<f32>,
          inverseViewMatrix: mat4x4<f32>,
          cameraPosition: vec3<f32>,
      }; 
  `;
}

import {GLTF} from '../types/gltf-types';
// GLTF 1.0 extensions (decode only)
// import * as KHR_binary_gltf from './KHR_draco_mesh_compression';

// GLTF 2.0 Khronos extensions (decode/encode)
import * as EXT_meshopt_compression from './ExtMeshoptCompression';
import * as EXT_texture_webp from './ExtTextureWebp';
import * as KHR_texture_basisu from './KhrTextureBasisu';
// import * as KHR_draco_mesh_compression from './KhrDracoMeshCompression';
import * as KHR_texture_transform from './KhrTextureTransform';

// Deprecated. These should be handled by rendering library (e.g. luma.gl), not the loader.
import * as KHR_lights_punctual from './KhrLightsPunctual';
import * as KHR_materials_unlit from './KhrMaterialsUnlit';
import * as KHR_techniques_webgl from './KhrTechniquesWebgl';
import * as EXT_feature_metadata from './ExtFeatureMetadata';

// Vendor extensions

type GLTFExtensionPlugin = {
  name: string;
  preprocess?: (gltfData: {json: GLTF}, options: {}) => void;
  decode?: (
    gltfData: {
      json: GLTF;
      buffers: {arrayBuffer: ArrayBuffer; byteOffset: number; byteLength: number}[];
    },
    options: {},
  ) => Promise<void>;
};

/**
 * List of extensions processed by the GLTFLoader
 * Note that may extensions can only be handled on the rendering stage and are left out here
 * These are just extensions that can be handled fully or partially during loading.
 */
export const EXTENSIONS: GLTFExtensionPlugin[] = [
  // 1.0
  // KHR_binary_gltf is handled separately - must be processed before other parsing starts
  // KHR_binary_gltf,

  // 2.0
  EXT_meshopt_compression,
  EXT_texture_webp,
  // Basisu should come after webp, we want basisu to be preferred if both are provided
  KHR_texture_basisu,
  // KHR_draco_mesh_compression,
  KHR_lights_punctual,
  KHR_materials_unlit,
  KHR_techniques_webgl,
  KHR_texture_transform,
  EXT_feature_metadata
];

/** Call before any resource loading starts */
export function preprocessExtensions(gltf, options: {},) {
  const extensions = EXTENSIONS.filter((extension) => useExtension(extension.name, options));
  for (const extension of extensions) {
    extension.preprocess?.(gltf, options,);
  }
}

/** Call after resource loading */
export async function decodeExtensions(gltf, options:{}) {
  const extensions = EXTENSIONS.filter((extension) => useExtension(extension.name, options));
  for (const extension of extensions) {
    // Note: We decode async extensions sequentially, this might not be necessary
    // Currently we only have Draco, but when we add Basis we may revisit
    await extension.decode?.(gltf, options);
  }
}

function useExtension(extensionName: string, options:{}) {
  //const excludes = options?.gltf?.excludeExtensions || {};
  const excludes ={};
  const exclude = extensionName in excludes && !excludes[extensionName];
  return !exclude;
}
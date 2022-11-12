// GLTF EXTENSION: KHR_materials_unlit
// https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_unlit

import type {GLTF} from '../types/gltf-types';

import GLTFScenegraph from '../lib/GltfScenegraph';

const KHR_MATERIALS_UNLIT = 'KHR_materials_unlit';

export const name = KHR_MATERIALS_UNLIT;

export async function decode(gltfData: {json: GLTF}): Promise<void> {
  const gltfScenegraph = new GLTFScenegraph(gltfData);
  const {json} = gltfScenegraph;

  // Remove the top-level extension
  gltfScenegraph.removeExtension(KHR_MATERIALS_UNLIT);

  // Any nodes that have the extension, add lights field pointing to light object
  // and remove the extension
  for (const material of json.materials || []) {
    const extension = material.extensions && material.extensions.KHR_materials_unlit;
    if (extension) {
      // @ts-ignore TODO
      material.unlit = true;
    }
    gltfScenegraph.removeObjectExtension(material, KHR_MATERIALS_UNLIT);
  }
}

import defaultValue from "../../utils/defaultValue";
import defined from "../../utils/defined";

export function GLTFLoader(url,callback){
    const ext = url.split('.').pop();
    if (ext === 'gltf') {
      const json = await fetch(url).then((response) => response.json());
      return loadGLTFObject(json, url);
    }
    const glb = await fetch(url).then((response) => response.arrayBuffer());
}

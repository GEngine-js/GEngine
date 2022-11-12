import type {GLTFAccessor} from '../types/gltf-types';
// Returns a fresh attributes object with glTF-standardized attributes names
// Attributes that cannot be identified will not be included
// Removes `indices` if present, as it should be stored separately from the attributes
export function getGLTFAccessors(attributes): {[key: string]: GLTFAccessor} {
    const accessors = {};
    for (const name in attributes) {
      const attribute = attributes[name];
      if (name !== 'indices') {
        const glTFAccessor = getGLTFAccessor(attribute);
        accessors[name] = glTFAccessor;
      }
    }
    return accessors;
  }

  // accepts buffer view index or buffer view object
// returns a `Uint8Array`
export function getTypedArrayForBufferView(json, buffers, bufferViewIndex) {
    const bufferView = json.bufferViews[bufferViewIndex];
    // Get hold of the arrayBuffer
    const bufferIndex = bufferView.buffer;
    const binChunk = buffers[bufferIndex];
    // assert(binChunk);
  
    const byteOffset = (bufferView.byteOffset || 0) + binChunk.byteOffset;
    return new Uint8Array(binChunk.arrayBuffer, byteOffset, bufferView.byteLength);
  }
  
  // accepts accessor index or accessor object
  // returns a `Uint8Array`
  export function getTypedArrayForImageData(json, buffers, imageIndex) {
    const image = json.images[imageIndex];
    const bufferViewIndex = json.bufferViews[image.bufferView];
    return getTypedArrayForBufferView(json, buffers, bufferViewIndex);
  }

// Fix up a single accessor.
// Input: typed array or a partial accessor object
// Return: accessor object
export function getGLTFAccessor(attribute) {
  const {buffer, size, count} = getAccessorData(attribute);

  const glTFAccessor: GLTFAccessor = {
    // glTF Accessor values
    // TODO: Instead of a bufferView index we could have an actual buffer (typed array)
    // bufferView: null,
    // TODO: Deprecate `value` in favor of bufferView?
    // @ts-ignore
    value: buffer,
    size, // Decoded `type` (e.g. SCALAR)

    byteOffset: 0,
    count,
    type: getAccessorTypeFromSize(size),
    componentType: getComponentTypeFromArray(buffer)
  };

  return glTFAccessor;
}

// export function getGLTFAttribute(data, gltfAttributeName): GLTFAccessor {
//   return data.attributes[data.glTFAttributeMap[gltfAttributeName]];
// }

function getAccessorData(attribute) {
  let buffer = attribute;
  let size = 1;
  let count = 0;

  if (attribute && attribute.value) {
    buffer = attribute.value;
    size = attribute.size || 1;
  }

  if (buffer) {
    if (!ArrayBuffer.isView(buffer)) {
      buffer = toTypedArray(buffer, Float32Array);
    }
    count = buffer.length / size;
  }

  return {buffer, size, count};
}

// Convert non-typed arrays to arrays of specified format
function toTypedArray(array, ArrayType, convertTypedArrays = false) {
  if (!array) {
    return null;
  }
  if (Array.isArray(array)) {
    return new ArrayType(array);
  }
  if (convertTypedArrays && !(array instanceof ArrayType)) {
    return new ArrayType(array);
  }
  return array;
}

export const COMPONENTS = {
    SCALAR: 1,
    VEC2: 2,
    VEC3: 3,
    VEC4: 4,
    MAT2: 4,
    MAT3: 9,
    MAT4: 16
  };
  
  export const BYTES = {
    5120: 1, // BYTE
    5121: 1, // UNSIGNED_BYTE
    5122: 2, // SHORT
    5123: 2, // UNSIGNED_SHORT
    5125: 4, // UNSIGNED_INT
    5126: 4 // FLOAT
  };
  
  // ENUM LOOKUP
  
  export function getBytesFromComponentType(componentType) {
    return BYTES[componentType];
  }
  
  export function getSizeFromAccessorType(type) {
    return COMPONENTS[type];
  }
  
  export function getGLEnumFromSamplerParameter(parameter) {
    const GL_TEXTURE_MAG_FILTER = 0x2800;
    const GL_TEXTURE_MIN_FILTER = 0x2801;
    const GL_TEXTURE_WRAP_S = 0x2802;
    const GL_TEXTURE_WRAP_T = 0x2803;
  
    const PARAMETER_MAP = {
      magFilter: GL_TEXTURE_MAG_FILTER,
      minFilter: GL_TEXTURE_MIN_FILTER,
      wrapS: GL_TEXTURE_WRAP_S,
      wrapT: GL_TEXTURE_WRAP_T
    };
  
    return PARAMETER_MAP[parameter];
  }
  export function resolveUrl(url, options) {
    // TODO: Use better logic to handle all protocols plus not delay on data
    const absolute = url.startsWith('data:') || url.startsWith('http:') || url.startsWith('https:');
    if (absolute) {
      return url;
    }
    const baseUrl = options.baseUri || options.uri;
    if (!baseUrl) {
      throw new Error(`'baseUri' must be provided to resolve relative url ${url}`);
    }
    return baseUrl.substr(0, baseUrl.lastIndexOf('/') + 1) + url;
  }

  const TYPES = ['SCALAR', 'VEC2', 'VEC3', 'VEC4'];

type TypedArrayConstructor =
  | Int8ArrayConstructor
  | Uint8ArrayConstructor
  | Int16ArrayConstructor
  | Uint16ArrayConstructor
  | Int32ArrayConstructor
  | Uint32ArrayConstructor
  | Int32ArrayConstructor
  | Uint32ArrayConstructor
  | Float32ArrayConstructor
  | Float64ArrayConstructor;

const ARRAY_CONSTRUCTOR_TO_WEBGL_CONSTANT: [TypedArrayConstructor, number][] = [
  [Int8Array, 5120],
  [Uint8Array, 5121],
  [Int16Array, 5122],
  [Uint16Array, 5123],
  [Uint32Array, 5125],
  [Float32Array, 5126],
  [Float64Array, 5130]
];
const ARRAY_TO_COMPONENT_TYPE = new Map<TypedArrayConstructor, number>(
  ARRAY_CONSTRUCTOR_TO_WEBGL_CONSTANT
);

const ATTRIBUTE_TYPE_TO_COMPONENTS = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
};

const ATTRIBUTE_COMPONENT_TYPE_TO_BYTE_SIZE = {
  5120: 1,
  5121: 1,
  5122: 2,
  5123: 2,
  5125: 4,
  5126: 4
};

const ATTRIBUTE_COMPONENT_TYPE_TO_ARRAY = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
};

export function getAccessorTypeFromSize(size) {
  const type = TYPES[size - 1];
  return type || TYPES[0];
}

export function getComponentTypeFromArray(typedArray) {
  const componentType = ARRAY_TO_COMPONENT_TYPE.get(typedArray.constructor);
  if (!componentType) {
    throw new Error('Illegal typed array');
  }
  return componentType;
}

export function getAccessorArrayTypeAndLength(accessor, bufferView) {
  const ArrayType = ATTRIBUTE_COMPONENT_TYPE_TO_ARRAY[accessor.componentType];
  const components = ATTRIBUTE_TYPE_TO_COMPONENTS[accessor.type];
  const bytesPerComponent = ATTRIBUTE_COMPONENT_TYPE_TO_BYTE_SIZE[accessor.componentType];
  const length = accessor.count * components;
  const byteLength = accessor.count * components * bytesPerComponent;
  assert(byteLength >= 0 && byteLength <= bufferView.byteLength);
  return {ArrayType, length, byteLength};
}

export function padToNBytes(byteLength: number, padding: number): number {
    return (byteLength + (padding - 1)) & ~(padding - 1);
}
/**
 * Copy from source to target at the targetOffset
 *
 * @param source - The data to copy
 * @param target - The destination to copy data into
 * @param targetOffset - The start offset into target to place the copied data
 * @returns the new offset taking into account proper padding
 */
 export function copyToArray(source: ArrayBuffer | any, target: any, targetOffset: number): number {
    let sourceArray;
  
    if (source instanceof ArrayBuffer) {
      sourceArray = new Uint8Array(source);
    } else {
      // Pack buffer onto the big target array
      //
      // 'source.data.buffer' could be a view onto a larger buffer.
      // We MUST use this constructor to ensure the byteOffset and byteLength is
      // set to correct values from 'source.data' and not the underlying
      // buffer for target.set() to work properly.
      const srcByteOffset = source.byteOffset;
      const srcByteLength = source.byteLength;
      // In gltf parser it is set as "arrayBuffer" instead of "buffer"
      // https://github.com/visgl/loaders.gl/blob/1e3a82a0a65d7b6a67b1e60633453e5edda2960a/modules/gltf/src/lib/parse-gltf.js#L85
      sourceArray = new Uint8Array(source.buffer || source.arrayBuffer, srcByteOffset, srcByteLength);
    }
  
    // Pack buffer onto the big target array
    target.set(sourceArray, targetOffset);
  
    return targetOffset + padToNBytes(sourceArray.byteLength, 4);
  }
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
  // assert(byteLength >= 0 && byteLength <= bufferView.byteLength);
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
  /**
 * Copy a view of an ArrayBuffer into new ArrayBuffer with byteOffset = 0
 * @param arrayBuffer
 * @param byteOffset
 * @param byteLength
 */
 export function sliceArrayBuffer(
  arrayBuffer: ArrayBuffer,
  byteOffset: number,
  byteLength?: number
): ArrayBuffer {
  const subArray =
    byteLength !== undefined
      ? new Uint8Array(arrayBuffer).subarray(byteOffset, byteOffset + byteLength)
      : new Uint8Array(arrayBuffer).subarray(byteOffset);
  const arrayCopy = new Uint8Array(subArray);
  return arrayCopy.buffer;
}


function toDataView(data) {
  if (data instanceof DataView) {
    return data;
  }
  if (ArrayBuffer.isView(data)) {
    return new DataView(data.buffer);
  }

  // TODO: make these functions work for Node.js buffers?
  // if (bufferToArrayBuffer) {
  //   data = bufferToArrayBuffer(data);
  // }

  // Careful - Node Buffers will look like ArrayBuffers (keep after isBuffer)
  if (data instanceof ArrayBuffer) {
    return new DataView(data);
  }
  throw new Error('toDataView');
}
export type BinaryImageMetadata = {
  mimeType: string;
  width: number;
  height: number;
};
/**
 * Extracts `{mimeType, width and height}` from a memory buffer containing a known image format
 * Currently supports `image/png`, `image/jpeg`, `image/bmp` and `image/gif`.
 * @param binaryData image file memory to parse
 * @returns metadata or null if memory is not a valid image file format layout.
 */
 export function getBinaryImageMetadata(
  binaryData: DataView | ArrayBuffer
): BinaryImageMetadata | null {
  const dataView = toDataView(binaryData);
  return (
    getPngMetadata(dataView) ||
    getJpegMetadata(dataView) ||
  );
}
const BIG_ENDIAN = false;
function getPngMetadata(binaryData) {
  const dataView = toDataView(binaryData);
  // Check file contains the first 4 bytes of the PNG signature.
  const isPng = dataView.byteLength >= 24 && dataView.getUint32(0, BIG_ENDIAN) === 0x89504e47;
  if (!isPng) {
    return null;
  }

  // Extract size from a binary PNG file
  return {
    mimeType: 'image/png',
    width: dataView.getUint32(16, BIG_ENDIAN),
    height: dataView.getUint32(20, BIG_ENDIAN)
  };
}
// JPEG

// Extract width and height from a binary JPEG file
function getJpegMetadata(binaryData) {
  const dataView = toDataView(binaryData);
  // Check file contains the JPEG "start of image" (SOI) marker
  // followed by another marker.
  const isJpeg =
    dataView.byteLength >= 3 &&
    dataView.getUint16(0, BIG_ENDIAN) === 0xffd8 &&
    dataView.getUint8(2) === 0xff;

  if (!isJpeg) {
    return null;
  }

  const {tableMarkers, sofMarkers} = getJpegMarkers();

  // Exclude the two byte SOI marker.
  let i = 2;
  while (i + 9 < dataView.byteLength) {
    const marker = dataView.getUint16(i, BIG_ENDIAN);

    // The frame that contains the width and height of the JPEG image.
    if (sofMarkers.has(marker)) {
      return {
        mimeType: 'image/jpeg',
        height: dataView.getUint16(i + 5, BIG_ENDIAN), // Number of lines
        width: dataView.getUint16(i + 7, BIG_ENDIAN) // Number of pixels per line
      };
    }

    // Miscellaneous tables/data preceding the frame header.
    if (!tableMarkers.has(marker)) {
      return null;
    }

    // Length includes size of length parameter but not the two byte header.
    i += 2;
    i += dataView.getUint16(i, BIG_ENDIAN);
  }

  return null;
}
function getJpegMarkers() {
  // Tables/misc header markers.
  // DQT, DHT, DAC, DRI, COM, APP_n
  const tableMarkers = new Set([0xffdb, 0xffc4, 0xffcc, 0xffdd, 0xfffe]);
  for (let i = 0xffe0; i < 0xfff0; ++i) {
    tableMarkers.add(i);
  }

  // SOF markers and DHP marker.
  // These markers are after tables/misc data.
  const sofMarkers = new Set([
    0xffc0, 0xffc1, 0xffc2, 0xffc3, 0xffc5, 0xffc6, 0xffc7, 0xffc9, 0xffca, 0xffcb, 0xffcd, 0xffce,
    0xffcf, 0xffde
  ]);

  return {tableMarkers, sofMarkers};
}
import { VertexFormat } from '../core/WebGPUConstants';
import Attribute from '../render/Attribute';
export const positionNormalUv = [
    //position
    new Attribute('position', VertexFormat.Float32x4, 0, 0),
    //normal
    new Attribute('normal', VertexFormat.Float32x4, 4 * 4, 1),
    //uv
    new Attribute('uv', VertexFormat.Float32x4, 8 * 4, 2),
]
export const positionCorlorUv = [
    //position
    new Attribute('position', VertexFormat.Float32x4, 0, 0),
    //corlor
    new Attribute('corlor', VertexFormat.Float32x4, 4 * 4, 1),
    //uv
    new Attribute('uv', VertexFormat.Float32x4, 8 * 4, 2),
]
export const PositionNormalCorlorUv = [
    new Attribute('position', VertexFormat.Float32x4, 0, 0),
    //normal
    new Attribute('normal', VertexFormat.Float32x4, 4 * 4, 1),
    //corlor
    new Attribute('corlor', VertexFormat.Float32x4, 8 * 4, 2),
    //uv
    new Attribute('uv', VertexFormat.Float32x4, 12 * 4, 3),
]
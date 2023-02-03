import Sampler from "../render/Sampler";
import Texture from "../render/Texture";
import defined from "../utils/defined";
import { destroyObject } from "../utils/destroyObject";
type TextureCacheProp = {
  texture: Texture;
  count: number;
};
class TextureCache {
  public defaultSampler:Sampler;
  private _numberOfTextures: number;
  private _textures: Map<string, TextureCacheProp>;
  private _texturesToRelease: Map<string, TextureCacheProp>;
  constructor() {
    this._numberOfTextures = 0;
    this._textures = new Map();
    this._numberOfTextures = 0;
    this._texturesToRelease = new Map();
    this.defaultSampler=new Sampler({
        magFilter: 'linear',
        minFilter: 'linear',
        addressModeU: "repeat",
        addressModeV: "repeat",
    });
  }
  get numberOfTextures(): number {
    return this._numberOfTextures;
  }
  getTexture(keyword) {
    const cachedTexture = this._textures.get(keyword);
    if (!defined(cachedTexture)) {
      return undefined;
    }
    // No longer want to release this if it was previously released.
    delete this._texturesToRelease[keyword];

    ++cachedTexture.count;
    return cachedTexture.texture;
  }
  addTexture(keyword, texture) {
    const cachedTexture = {
      texture: texture,
      count: 1,
    };

    texture.finalDestroy = texture.destroy;

    const that = this;
    texture.destroy = function () {
      if (--cachedTexture.count === 0) {
        that._texturesToRelease.set(keyword, cachedTexture);
      }
    };

    this._textures.set(keyword, cachedTexture);
    ++this._numberOfTextures;
  }
  releasedTextures() {
    this._texturesToRelease.forEach((cacheTexture) => {
      cacheTexture.texture?.finalDestroy();
      --this._numberOfTextures;
    });

    this._texturesToRelease.clear();
  }
  destroy() {
    this._textures.forEach((cachedTexture) => {
      cachedTexture.texture?.finalDestroy();
    });
    return destroyObject(this);
  }
}
const textureCache = new TextureCache();
export default textureCache;

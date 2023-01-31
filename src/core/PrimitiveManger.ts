/*
 * @Author: junwei.gu junwei.gu@jiduauto.com
 * @Date: 2022-10-25 19:21:57
 * @LastEditors: junwei.gu junwei.gu@jiduauto.com
 * @LastEditTime: 2023-01-30 10:28:38
 * @FilePath: \GEngine\src\core\PrimitiveManger.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Mesh } from "../mesh/Mesh";
import createGuid from "../utils/createGuid";
import defined from "../utils/defined";
import { FrameState } from "./FrameState";
export default class PrimitiveManger{
    private _list: any[];
    private _guid: any;
    constructor() {
        this._list = [];
        this._guid = createGuid();
    }
    get length() {
        return this._list.length;
    }
    update(frameState:FrameState){
        this._list.forEach((primitive)=>{
            primitive.update(frameState);
        });
    }
    add(instance:Mesh, index?:number) {
        const hasIndex = defined(index);
        if (!defined(instance)) {
            throw new Error("instance is required.");
        }
        if (hasIndex) {
            if (index < 0) {
                throw new Error("index must be greater than or equal to zero.");
            } else if (index > this._list.length) {
                throw new Error(
                    "index must be less than or equal to the number of primitives."
                );
            }
        };
        const external = (instance._external = instance._external || {});
        const composites = (external._composites = external._composites || {});
        composites[this._guid] = {
            collection: this,
        };
        if (!hasIndex) {
            this._list.push(instance);
        } else {
            this._list.splice(index, 0, instance);
        }

        return instance;
    }
    remove(instance) {
        if (this.contains(instance)) {
          const index = this._list.indexOf(instance);
          if (index !== -1) {
            this._list.splice(index, 1);
      
            delete instance._external._composites[this._guid];
            instance.destroy();
            return true;
          }
        }     
        return false;
    }
    contains(instance) {
        return !!(
          defined(instance) &&
          instance._external &&
          instance._external._composites &&
          instance._external._composites[this._guid]
        );
    };
}
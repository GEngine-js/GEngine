import createGuid from "../utils/createGuid";
import defined from "../utils/defined";

export default  class Manger {
    constructor(){}
    // private _list: any[];
    // private _guid: any;
    // constructor() {
    //     this._list = [];
    //     this._guid = createGuid();
    // }
    // get length() {
    //     return this._list.length;
    // }
    // add(instance, index) {
    //     const hasIndex = defined(index);

    //     //>>includeStart('debug', pragmas.debug);
    //     if (!defined(instance)) {
    //         throw new Error("instance is required.");
    //     }
    //     if (hasIndex) {
    //         if (index < 0) {
    //             throw new Error("index must be greater than or equal to zero.");
    //         } else if (index > this._list.length) {
    //             throw new Error(
    //                 "index must be less than or equal to the number of primitives."
    //             );
    //         }
    //         const external = (instance._external = instance._external || {});
    //         const composites = (external._composites = external._composites || {});
    //         composites[this._guid] = {
    //             collection: this,
    //         };

    //         if (!hasIndex) {
    //             this._list.push(instance);
    //         } else {
    //             this._list.splice(index, 0, instance);
    //         }

    //         return instance;
    //     };
    // }
    // remove(instance) {
    //     // PERFORMANCE_IDEA:  We can obviously make this a lot faster.
    //     if (this.contains(instance)) {
    //       const index = this._list.indexOf(instance);
    //       if (index !== -1) {
    //         this._list.splice(index, 1);
      
    //         delete instance._external._composites[this._guid];
      
    //         // if (this.destroyPrimitives) {
    //         //     instance.destroy();
    //         // }
      
    //         return true;
    //       }
    //     }     
    //     return false;
    // }
    // contains(instance) {
    //     return !!(
    //       defined(instance) &&
    //       instance._external &&
    //       instance._external._composites &&
    //       instance._external._composites[this._guid]
    //     );
    // };
}
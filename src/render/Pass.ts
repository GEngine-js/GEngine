import RenderTarget from "./RenderTarget.js";
import { Material } from "../material/Material.js";
class Pass {
  constructor(
    public renderTarget: RenderTarget,
    public overrideMaterial:Material
  ) {

  }
  beforRender(){
    
  }
  render(){

  }
  afterRender(){

  }
}

export default Pass;

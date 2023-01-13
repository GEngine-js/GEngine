/*
 * @Author: junwei.gu junwei.gu@jiduauto.com
 * @Date: 2022-10-15 16:59:45
 * @LastEditors: junwei.gu junwei.gu@jiduauto.com
 * @LastEditTime: 2023-01-12 19:36:37
 * @FilePath: \GEngine\src\render\DrawCommand.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ShaderSource } from "../shader/ShaderSource";
import RenderTarget from "./RenderTarget";
import ShaderData from "./ShaderData";
import VertextBuffer from "./VertextBuffer";
import IndexBuffer from "./IndexBuffer";

class DrawCommand {

  public type?: string;

  public shaderData?:ShaderData;

  public renderTarget?:RenderTarget;

  public vertexBuffer?: VertextBuffer;

  public indexBuffer?: IndexBuffer;

  public renderState?:{};

  public queryIndex?:number;

  public count?: number;

  public instances?: number;

  public dispatch?: number | [number, number?, number?];

  public shaderSource?:ShaderSource;

  public dirty?:boolean;

  public distanceToCamera?:number;

  public onwer?:Object;

  public materialType?:string

  constructor(options: DrawCommand) {
    Object.assign(this, options);
  }
}

export default DrawCommand;

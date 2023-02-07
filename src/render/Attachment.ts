/*
 * @Author: junwei.gu junwei.gu@jiduauto.com
 * @Date: 2022-10-18 19:31:36
 * @LastEditors: junwei.gu junwei.gu@jiduauto.com
 * @LastEditTime: 2023-01-17 11:27:29
 * @FilePath: \GEngine\src\render\Attachment.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { AttachmentOptions } from "../core/WebGPUTypes";
import Texture from "./Texture";

class Attachment {
  public op: GPULoadOp = "clear";
  public storeOp: GPUStoreOp = "store";

  public texture?: Texture;
  public resolveTarget?: Texture;

  constructor(
    public value: GPUColorDict | GPUColor | number,
    options?: AttachmentOptions
  ) {
    Object.assign(this, options);
  }
}

export default Attachment;

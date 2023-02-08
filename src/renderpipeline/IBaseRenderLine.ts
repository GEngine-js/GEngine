/*
 * @Author: junwei.gu junwei.gu@jiduauto.com
 * @Date: 2022-10-26 19:06:24
 * @LastEditors: junwei.gu junwei.gu@jiduauto.com
 * @LastEditTime: 2023-02-08 11:04:51
 * @FilePath: \GEngine\src\renderpipeline\IBaseRenderLine.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Camera from "../camera/Camera";
import { FrameState } from "../core/FrameState";
export default interface IBaseRenderLine {
  render(frameState: FrameState, camera?: Camera): void;
}

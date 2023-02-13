/*
 * @Author: junwei.gu junwei.gu@jiduauto.com
 * @Date: 2022-10-26 19:08:43
 * @LastEditors: junwei.gu junwei.gu@jiduauto.com
 * @LastEditTime: 2023-02-08 11:05:14
 * @FilePath: \GEngine\src\renderpipeline\ForwardRenderLine.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Context from "../render/Context";
import { BasicPass } from "../pass/BasicPass";
import IBaseRenderLine from "./IBaseRenderLine";
import { FrameState } from "../core/FrameState";
import ResolveFrame from "../post-process/ResolveFrame";
import Camera from "../camera/Camera";
import { ShadowPass } from "../pass/ShadowPass";

export default class ForwardRenderLine implements IBaseRenderLine {
	private basicPass: BasicPass;
	private resolveFrame: ResolveFrame;
	protected shadowPass: ShadowPass;
	constructor(public context: Context) {
		this.basicPass = new BasicPass(context);
		this.shadowPass = new ShadowPass(context);
		this.resolveFrame = new ResolveFrame();
	}
	render(frameState: FrameState, camera?: Camera) {
		this.shadowPass.beforeRender();
		this.shadowPass.render(frameState.renderQueue, camera);

		this.basicPass.beforeRender();
		this.basicPass.render(frameState.renderQueue, camera);
		this.basicPass.afterRender();
		this.resolveFrame.render(frameState.context, this.basicPass.getColorTexture(0));
	}
	destroy() {
		this.basicPass = undefined;
	}
}

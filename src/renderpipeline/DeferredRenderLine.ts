import IBaseRenderLine from "./IBaseRenderLine";
export default class DeferredRenderLine implements IBaseRenderLine{
    setRenderList(): void {
        throw new Error("Method not implemented.");
    }
    render() {
        throw new Error("Method not implemented.");
    }

}
import {shaders} from './Shaders'
export class ShaderSource{
    vertEntryPoint?: string;
    fragEntryPoint?: string;
    vert?: string;
    frag?: string;
    compute?: string;
    computeMain?: string;
    constructor(options){
        if (options.render) {
            this.vertEntryPoint=options.vertMain||'main';
            this.fragEntryPoint=options.fragMain||'main';
            const source=shaders[options.type]
            this.vert=options.vert|| source.vert;
            this.frag=options.frag|| source.frag;
        } else {
            const source=shaders[options.type]
            this.compute=options.compute|| source.compute;
            this.computeMain=options.computeMain|| 'main';
        }
    }
    static replaceMain(source:string, renamedMain:string) {
		renamedMain = `void ${renamedMain}()`;
		return source.replace(/void\s+main\s*\(\s*(?:void)?\s*\)/g, renamedMain);
	}
}
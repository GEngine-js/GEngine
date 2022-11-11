import combine from '../utils/combine';
import getVertFrag from './Shaders';
export interface GPUShaderModuleObject{
    vert:GPUShaderModule;
    frag:GPUShaderModule;
}
export class ShaderSource{
    vertEntryPoint?: string;
    fragEntryPoint?: string;
    vert?: string;
    frag?: string;
    compute?: string;
    computeMain?: string;
    defines?:{};
    uid?:string;
    dirty:boolean
    render: boolean;
    type: string;
    constructor(options){
        this.type=options.type;
        this.defines=options.defines;
        this.uid='';
        if (options.render) {
            this.render=true;
            this.vertEntryPoint=options.vertMain||'main';
            this.fragEntryPoint=options.fragMain||'main';
            this.vert=options.vert||undefined;
            this.frag=options.frag||undefined;
        } else {
            this.compute=options.compute|| undefined;
            this.computeMain=options.computeMain|| 'main';
        }
    }
    update(globalDefines,materialDefiens){
        const combineDefines=combine(globalDefines,materialDefiens,false);
        this.defines=combine(combineDefines,this.defines,false);
        this.generateUid();
        if(this.dirty){
            this.updateShaderStr();
            this.dirty=false;
        }
    }
    private updateShaderStr(){
        if (this.render) {
            const source=getVertFrag(this.type,this.defines);    
            console.log(source.frag);
                          
            this.vert=source.vert;
            this.frag=source.frag; 
        }
    }
    private generateUid(){
        const newUid=JSON.stringify(this.defines);
        if(this.uid!=newUid){
            this.uid=newUid;
            this.dirty=true;
        }
    }
   createShaderModule(device:GPUDevice):{vert:GPUShaderModule,frag:GPUShaderModule}|GPUShaderModule{
        if (this.vert) {
            const vert=device.createShaderModule({
                code:this.vert
            });
            const frag=device.createShaderModule({
                code:this.frag
            });
            return {vert,frag} 
        } else {
            const compute=device.createShaderModule({
                code:this.compute
            });
            return compute
        }
    }
    static replaceMain(source:string, renamedMain:string) {
		renamedMain = `void ${renamedMain}()`;
		return source.replace(/void\s+main\s*\(\s*(?:void)?\s*\)/g, renamedMain);
	}
}
import CullingVolume from "../core/CullingVolume";
import Matrix4 from "../math/Matrix4";
import Vector3 from "../math/Vector3";
import Camera from "./Camera";
const tempPerspectiveMatrix = new Matrix4()
export default class PerspectiveCamera extends Camera {
    xOffset: number;
    yOffset: number;
    cullingVolume: any;
    private _aspect: number;
    private _fov: number;
    private _projectionMatrix: Matrix4;
    private _viewMatrix: Matrix4;
    private _inverseViewMatrix: Matrix4;
    height: number;
    width: number;
    constructor(fov: number = 50, aspect: number = 1, near: number = 0.1, far: number = 2000) {
        super()
        this.aspect = aspect;
        this.fov = fov;
        this.near = near;
        this.far = far;
        this.xOffset = 0;
        this.yOffset = 0;
        this._projectionMatrix=new Matrix4();
        this._inverseViewMatrix=new Matrix4();
        this._viewMatrix=new Matrix4();
        this.updateCameraParms()
        this.cullingVolume = new CullingVolume();
    }

    get projectionMatrix(): Matrix4 {
        this.updateProjectionMatrix();
        return this._projectionMatrix;
    }

    set projectionMatrix(v: Matrix4) {
        this._projectionMatrix = v;
    }
    
    get inverseViewMatrix() : Matrix4 {
        this.updateInverseViewMatrix();
        return this._inverseViewMatrix
    }
    
    // set inverseViewMatrix (v : Matrix4) {
    //     this._inverseViewMatrix = v;
    // }
    
    get viewMatrix(): Matrix4 {
        this.updateViewMatrix();
        return this._viewMatrix;
    }

    set viewMatrix(v: Matrix4) {
        this._viewMatrix = v;
    }
    get aspect(): number {
        return this._aspect;
    }

    set aspect(v: number) {
        this.projectMatrixDirty = true;
        this._aspect = v;
    }
    get fov(): number {
        return this._fov
    }

    set fov(v: number) {
        this.projectMatrixDirty = true;
        this._fov = v;
    }
    private updateDirUpRight() {
        //暂时这么写
            Vector3.subtract(this.position,this.target,this.direction);

            Vector3.normalize(this.direction, this.direction);
    
            Vector3.cross(this.up, this.direction, this.right);
    
            Vector3.normalize(this.right, this.right);
    
            Vector3.cross(this.direction, this.right, this.up);
    }
    p
    private updateInverseViewMatrix(){
        this.updateViewMatrix();
        Matrix4.inverseTransformation(this._viewMatrix, this._inverseViewMatrix);
    }
    private updateCameraParms() {
        this.top=this.near*Math.tan(0.5 * this.fov);
        this.height=2*this.top;
        this.width=this.aspect*this.height;
        this.left=0.5*this.width;
    }
    private updateProjectionMatrix() {
        if(this.projectMatrixDirty) {
            this.updateCameraParms();
            this.projectionMatrix=Matrix4.makePerspective(this.left, this.left + this.width, this.top, this.top - this.height, this.near, this.far )
            this.projectMatrixDirty=false;
        }
    }
    private updateViewMatrix() {
        if (this.targetDirty){
            this.targetDirty=false;
            this.updateDirUpRight();
            Matrix4.computeView(this.position, this.direction,this.up, this.right,  this.viewMatrix);
        }
    }
    /**
     * get a culling volume for this frustum.
     */
    getCullingVolume(){
        const vpMatrix=new Matrix4().clone(this.viewMatrix).multiply(this.projectionMatrix)
        const planes = this.cullingVolume.planes;
		const me = vpMatrix;
		const me0 = me[ 0 ], me1 = me[ 1 ], me2 = me[ 2 ], me3 = me[ 3 ];
		const me4 = me[ 4 ], me5 = me[ 5 ], me6 = me[ 6 ], me7 = me[ 7 ];
		const me8 = me[ 8 ], me9 = me[ 9 ], me10 = me[ 10 ], me11 = me[ 11 ];
		const me12 = me[ 12 ], me13 = me[ 13 ], me14 = me[ 14 ], me15 = me[ 15 ];
        
		planes[0].normal=Vector3.normalize(new Vector3(me3 - me0, me7 - me4, me11 - me8),new Vector3());
        planes[0].distance=me15 - me12;

        planes[1].normal=Vector3.normalize(new Vector3(me3 + me0, me7 + me4, me11 + me8),new Vector3());
        planes[1].distance=me15 + me12 

        planes[2].normal=Vector3.normalize(new Vector3(me3 + me1, me7 + me5, me11 + me9),new Vector3());
        planes[2].distance=me15 + me13;

        planes[3].normal=Vector3.normalize(new Vector3(me3 - me1, me7 - me5, me11 - me9),new Vector3());
        planes[3].distance=me15 - me13;

        planes[4].normal=Vector3.normalize(new Vector3(me3 - me2, me7 - me6, me11 - me10),new Vector3());
        planes[4].distance=me15 - me14;

        planes[5].normal=Vector3.normalize(new Vector3(me3 + me2, me7 + me6, me11 + me10),new Vector3());
        planes[5].distance=me15 + me14;
        return this.cullingVolume;
    }
}

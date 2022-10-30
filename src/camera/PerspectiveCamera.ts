import CullingVolume from "../core/CullingVolume";
import Matrix4 from "../math/Matrix4";
import Vector3 from "../math/Vector3";
import Vector4 from "../math/Vector4";
import defined from "../utils/defined";
import Camera from "./Camera";
const tempPerspectiveMatrix = new Matrix4()
export default class PerspectiveCamera extends Camera {
    xOffset: number;
    fovy: number;
    yOffset: number;
    cullingVolume: any;
    private _aspect: number;
    private _fov: number;
    private _projectionMatrix: Matrix4;
    private _viewMatrix: Matrix4;
    private _inverseViewMatrix: Matrix4;
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
    lookAt(target: Vector3) {
        //暂时这么写
        this.dirUpRightDirty=true;
        this.target=target

        Vector3.subtract(this.position, target, this.cameraDirection);

        Vector3.normalize(this.cameraDirection, this.cameraDirection);

        Vector3.cross(this.cameraUp, this.cameraDirection, this.cameraRight);

        Vector3.normalize(this.cameraRight, this.cameraRight);

        Vector3.cross(this.cameraDirection, this.cameraRight, this.cameraUp);
    }
    private updateInverseViewMatrix(){
        this.updateViewMatrix();
        Matrix4.inverseTransformation(this._viewMatrix, this._inverseViewMatrix);
    }
    private updateCameraParms() {
        this.fovy = this.aspect <= 1
            ? this.fov
            : Math.atan(Math.tan(this.fov * 0.5) / this.aspect) * 2.0;
        //+this.yOffset
        this.top = this.near * Math.tan(0.5 * this.fovy);
        //+this.yOffset
        this.bottom = -this.top + this.yOffset;
        //this.xOffset;
        this.right = this.aspect * this.top + this.xOffset;
        //this.xOffset;
        this.left = -this.right + this.xOffset;
    }
    private updateProjectionMatrix() {
        if(this.projectMatrixDirty) {
            this.updateCameraParms();
            this.projectionMatrix = Matrix4.computePerspectiveOffCenter(
                this.left,
                this.right,
                this.bottom,
                this.top,
                this.near,
                this.far,
                tempPerspectiveMatrix
            );
            this.projectMatrixDirty=false;
        }
    }
    private updateViewMatrix() {
        if (this.dirUpRightDirty){
            this.dirUpRightDirty=false
            Matrix4.computeView(this.position, this.cameraDirection, this.cameraRight, this.cameraUp, this.viewMatrix);

        }
    }
    /**
     * Creates a culling volume for this frustum.
     *
     * @param {Vector3} position The eye position.
     * @param {Vector3} direction The view direction.
     * @param {Vector3} up The up direction.
     * @returns {CullingVolume} A culling volume at the given position and orientation.
     *
     * @example
     * // Check if a bounding volume intersects the frustum.
     * const cullingVolume = frustum.computeCullingVolume(cameraPosition, cameraDirection, cameraUp);
     * const intersect = cullingVolume.computeVisibility(boundingVolume);
     */
    computeCullingVolume(position, direction, up) {
        const planes = this.cullingVolume.planes;

        const t = this.top;
        const b = this.bottom;
        const r = this.right;
        const l = this.left;
        const n = this.near;
        const f = this.far;

        const right = Vector3.cross(direction, up, getPlanesRight);

        const nearCenter = getPlanesNearCenter;
        Vector3.multiplyByScalar(direction, n, nearCenter);
        Vector3.add(position, nearCenter, nearCenter);

        const farCenter = getPlanesFarCenter;
        Vector3.multiplyByScalar(direction, f, farCenter);
        Vector3.add(position, farCenter, farCenter);

        const normal = getPlanesNormal;

        //Left plane computation
        Vector3.multiplyByScalar(right, l, normal);
        Vector3.add(nearCenter, normal, normal);
        Vector3.subtract(normal, position, normal);
        Vector3.normalize(normal, normal);
        Vector3.cross(normal, up, normal);
        Vector3.normalize(normal, normal);

        let plane = planes[0];
        if (!defined(plane)) {
            plane = planes[0] = new Vector4();
        }
        plane.x = normal.x;
        plane.y = normal.y;
        plane.z = normal.z;
        plane.w = -Vector3.dot(normal, position);

        //Right plane computation
        Vector3.multiplyByScalar(right, r, normal);
        Vector3.add(nearCenter, normal, normal);
        Vector3.subtract(normal, position, normal);
        Vector3.cross(up, normal, normal);
        Vector3.normalize(normal, normal);

        plane = planes[1];
        if (!defined(plane)) {
            plane = planes[1] = new Vector4();
        }
        plane.x = normal.x;
        plane.y = normal.y;
        plane.z = normal.z;
        plane.w = -Vector3.dot(normal, position);

        //Bottom plane computation
        Vector3.multiplyByScalar(up, b, normal);
        Vector3.add(nearCenter, normal, normal);
        Vector3.subtract(normal, position, normal);
        Vector3.cross(right, normal, normal);
        Vector3.normalize(normal, normal);

        plane = planes[2];
        if (!defined(plane)) {
            plane = planes[2] = new Vector4();
        }
        plane.x = normal.x;
        plane.y = normal.y;
        plane.z = normal.z;
        plane.w = -Vector3.dot(normal, position);

        //Top plane computation
        Vector3.multiplyByScalar(up, t, normal);
        Vector3.add(nearCenter, normal, normal);
        Vector3.subtract(normal, position, normal);
        Vector3.cross(normal, right, normal);
        Vector3.normalize(normal, normal);

        plane = planes[3];
        if (!defined(plane)) {
            plane = planes[3] = new Vector4();
        }
        plane.x = normal.x;
        plane.y = normal.y;
        plane.z = normal.z;
        plane.w = -Vector3.dot(normal, position);

        //Near plane computation
        plane = planes[4];
        if (!defined(plane)) {
            plane = planes[4] = new Vector4();
        }
        plane.x = direction.x;
        plane.y = direction.y;
        plane.z = direction.z;
        plane.w = -Vector3.dot(direction, nearCenter);

        //Far plane computation
        Vector3.negate(direction, normal);

        plane = planes[5];
        if (!defined(plane)) {
            plane = planes[5] = new Vector4();
        }
        plane.x = normal.x;
        plane.y = normal.y;
        plane.z = normal.z;
        plane.w = -Vector3.dot(normal, farCenter);

        return this.cullingVolume;
    }
}
const getPlanesRight = new Vector3();
const getPlanesNearCenter = new Vector3();
const getPlanesFarCenter = new Vector3();
const getPlanesNormal = new Vector3();
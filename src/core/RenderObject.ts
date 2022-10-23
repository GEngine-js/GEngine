import Matrix4 from "../math/Matrix4";
import { Quaternion } from "../math/Quaternion";
import Vector3 from "../math/Vector3";

export default class RenderObject{
    private _position:Vector3;
    private _sacle:Vector3;
    private _quaternion:Quaternion;
    modelMatrix: Matrix4;
    constructor(){
        this._position=new Vector3();
        this._sacle=new Vector3();
        this._quaternion=new Quaternion();
        this.modelMatrix=new Matrix4();
    }    
    public get position() : Vector3 {
        return this._position
    }
    public get sacle() : Vector3 {
        return this._sacle
    }
    public get quaternion():Quaternion{
        return this._quaternion
    }
    updateMatrix(){
        Matrix4.fromTranslationQuaternionRotationScale(this.position,this.quaternion,this.sacle,this.modelMatrix);
    }
    rotateOnAxis( axis, angle ) {
        const quat=Quaternion.fromAxisAngle(axis,angle);
        Quaternion.multiply(this.quaternion,quat,this.quaternion)
	}
    rotateX( angle ) {
		return this.rotateOnAxis( _xAxis, angle );
	}
	rotateY( angle ) {
		return this.rotateOnAxis( _yAxis, angle );
	}
	rotateZ( angle ) {
		return this.rotateOnAxis( _zAxis, angle );
	}
}
const _xAxis = new Vector3( 1, 0, 0 );
const _yAxis = new Vector3( 0, 1, 0 );
const _zAxis = new Vector3( 0, 0, 1 );
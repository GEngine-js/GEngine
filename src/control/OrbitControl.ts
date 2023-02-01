import { EventDispatcher } from "../core/EventDispatcher";
import { Quaternion } from "../math/Quaternion";
import { Spherical } from "../math/Spherical";
import Vector2 from "../math/Vector2";
import Vector3 from "../math/Vector3";
//from three.js

const _changeEvent = { type: "change" };
const _startEvent = { type: "start" };
const _endEvent = { type: "end" };

export default class OrbitControl extends EventDispatcher {
  domElement: any;
  object: any;
  enabled: boolean;
  target: any;
  minDistance: number;
  maxDistance: number;
  minZoom: number;
  maxZoom: number;
  minPolarAngle: number;
  maxPolarAngle: number;
  minAzimuthAngle: number;
  maxAzimuthAngle: number;
  enableDamping: boolean;
  dampingFactor: number;
  enableZoom: boolean;
  zoomSpeed: number;
  enableRotate: boolean;
  rotateSpeed: number;
  enablePan: boolean;
  panSpeed: number;
  screenSpacePanning: boolean;
  keyPanSpeed: number;
  autoRotate: boolean;
  autoRotateSpeed: number;
  keys: { LEFT: string; UP: string; RIGHT: string; BOTTOM: string };
  mouseButtons: { LEFT: any; MIDDLE: any; RIGHT: any };
  touches: { ONE: any; TWO: any };
  target0: any;
  position0: any;
  zoom0: any;
  private _domElementKeyEvents: any;
  spherical: any;
  onPointerMove: (event: any) => void;
  onPointerUp: (event: any) => void;
  onContextMenu: (event: any) => void;
  onPointerDown: (event: any) => void;
  onMouseWheel: (event: any) => void;
  onKeyDown: (event: any) => void;
  getAutoRotationAngle: () => number;
    update: () => boolean;
  constructor(object, domElement) {
    super();

    if (domElement === undefined)
      console.warn(
        'OrbitControls: The second parameter "domElement" is now mandatory.'
      );
    if (domElement === document)
      console.error(
        'OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'
      );

    this.object = object;
    this.domElement = domElement;
    this.domElement.style.touchAction = "none"; // disable touch scroll

    // Set to false to disable this control
    this.enabled = true;

    // "target" sets the location of focus, where the object orbits around
    this.target = new Vector3();

    // How far you can dolly in and out ( PerspectiveCamera only )
    this.minDistance = 0;
    this.maxDistance = Infinity;

    // How far you can zoom in and out ( OrthographicCamera only )
    this.minZoom = 0;
    this.maxZoom = Infinity;

    // How far you can orbit vertically, upper and lower limits.
    // Range is 0 to Math.PI radians.
    this.minPolarAngle = 0; // radians
    this.maxPolarAngle = Math.PI; // radians

    // How far you can orbit horizontally, upper and lower limits.
    // If set, the interval [ min, max ] must be a sub-interval of [ - 2 PI, 2 PI ], with ( max - min < 2 PI )
    this.minAzimuthAngle = -Infinity; // radians
    this.maxAzimuthAngle = Infinity; // radians

    // Set to true to enable damping (inertia)
    // If damping is enabled, you must call controls.update() in your animation loop
    this.enableDamping = false;
    this.dampingFactor = 0.05;

    // This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
    // Set to false to disable zooming
    this.enableZoom = true;
    this.zoomSpeed = 1.0;

    // Set to false to disable rotating
    this.enableRotate = true;
    this.rotateSpeed = 1.0;

    // Set to false to disable panning
    this.enablePan = true;
    this.panSpeed = 1.0;
    this.screenSpacePanning = false; // if false, pan orthogonal to world-space direction camera.up
    this.keyPanSpeed = 7.0; // pixels moved per arrow key push

    // Set to true to automatically rotate around the target
    // If auto-rotate is enabled, you must call controls.update() in your animation loop
    this.autoRotate = false;
    this.autoRotateSpeed = 2.0; // 30 seconds per orbit when fps is 60

    // The four arrow keys
    this.keys = {
      LEFT: "ArrowLeft",
      UP: "ArrowUp",
      RIGHT: "ArrowRight",
      BOTTOM: "ArrowDown",
    };

    // Mouse buttons
    this.mouseButtons = {
      LEFT: MOUSE.ROTATE,
      MIDDLE: MOUSE.DOLLY,
      RIGHT: MOUSE.PAN,
    };

    // Touch fingers
    this.touches = { ONE: TOUCH.ROTATE, TWO: TOUCH.DOLLY_PAN };

    // for reset
    this.target0 = this.target.clone();
    this.position0 = this.object.position.clone();
    this.zoom0 = this.object.zoom;

    // the target DOM element for key events
    this._domElementKeyEvents = null;

    //
    // public methods
    //
    this.init();
      // this method is exposed, but perhaps it would be better if we can make it private...
      const that=this;
  this.update = (function () {
    const offset = new Vector3();

    // so camera.up is the orbit axis
    const quat = new Quaternion().setFromUnitVectors(
        that.object.up,
      new Vector3(0, 1, 0)
    );
    const quatInverse = quat.clone().invert();

    const lastPosition = new Vector3();
    const lastQuaternion = new Quaternion();

    const twoPI = 2 * Math.PI;
    return function update() {
    const position = that.object.position;

    offset.copy(position).subtract(that.target);

    // rotate offset to "y-axis-is-up" space
    offset.applyQuaternion(quat);

    // angle from z-axis around y-axis
    spherical.setFromVector3(offset);

    if (that.autoRotate && state === STATE.NONE) {
      rotateLeft(that.getAutoRotationAngle());
    }

    if (that.enableDamping) {
      spherical.theta += sphericalDelta.theta * that.dampingFactor;
      spherical.phi += sphericalDelta.phi * that.dampingFactor;
    } else {
      spherical.theta += sphericalDelta.theta;
      spherical.phi += sphericalDelta.phi;
    }

    // restrict theta to be between desired limits

    let min = that.minAzimuthAngle;
    let max = that.maxAzimuthAngle;

    if (isFinite(min) && isFinite(max)) {
      if (min < -Math.PI) min += twoPI;
      else if (min > Math.PI) min -= twoPI;

      if (max < -Math.PI) max += twoPI;
      else if (max > Math.PI) max -= twoPI;

      if (min <= max) {
        spherical.theta = Math.max(min, Math.min(max, spherical.theta));
      } else {
        spherical.theta =
          spherical.theta > (min + max) / 2
            ? Math.max(min, spherical.theta)
            : Math.min(max, spherical.theta);
      }
    }

    // restrict phi to be between desired limits
    spherical.phi = Math.max(
        that.minPolarAngle,
      Math.min(that.maxPolarAngle, spherical.phi)
    );

    spherical.makeSafe();

    spherical.radius *= scale;

    // restrict radius to be between desired limits
    spherical.radius = Math.max(
        that.minDistance,
      Math.min(that.maxDistance, spherical.radius)
    );

    // move target to panned location

    if (that.enableDamping === true) {
        that.target.addScaledVector(panOffset, that.dampingFactor);
    } else {
        that.target.add(panOffset);
    }
    Vector3.fromSpherical(spherical, offset);
    // rotate offset back to "camera-up-vector-is-up" space
    offset.applyQuaternion(quatInverse);

    position.copy(that.target).add(offset);

    that.object.target = that.target;

    if (that.enableDamping === true) {
      sphericalDelta.theta *= 1 - that.dampingFactor;
      sphericalDelta.phi *= 1 - that.dampingFactor;

      Vector3.multiplyByScalar(panOffset, 1 - that.dampingFactor, panOffset);
      // panOffset.multiplyScalar( 1 - this.dampingFactor );
    } else {
      sphericalDelta.set(0, 0, 0);

      panOffset.set(0, 0, 0);
    }

    scale = 1;

    // update condition is:
    // min(camera displacement, camera rotation in radians)^2 > EPS
    // using small-angle approximation cos(x/2) = 1 - x^2 / 8

    // if (
    //   zoomChanged ||
    //   Vector3.distanceSquared(lastPosition, that.object.position) > EPS ||
    //   8 * (1 - lastQuaternion.dot(that.object.quaternion)) > EPS
    // ) {
    //     that.dispatchEvent(_changeEvent);

    //   //lastPosition.copy( this.object.position );
    //   Vector3.clone(that.object.position, lastPosition);
    //   Quaternion.clone(that.object.quaternion, lastQuaternion);
    //   //lastQuaternion.copy( this.object.quaternion );
    //   zoomChanged = false;

    //   return true;
    // }

    return false;
}
})()
  }
  getPolarAngle() {
    return this.spherical.phi;
  }

  getAzimuthalAngle() {
    return this.spherical.theta;
  }

  getDistance() {
    return this.object.position.distanceTo(this.target);
  }

  listenToKeyEvents(domElement) {
    domElement.addEventListener("keydown", this.onKeyDown);
    this._domElementKeyEvents = domElement;
  }

  saveState() {
    Vector3.clone(this.target, this.target0);
    //this.target0.copy( this.target );
    Vector3.clone(this.object.position, this.position0);
    //this.position0.copy( this.object.position );
    this.zoom0 = this.object.zoom;
  }

  reset() {
    Vector3.clone(this.target0, this.target);
    //this.target.copy( this.target0 );
    Vector3.clone(this.position0, this.object.position);
    //this.object.position.copy( this.position0 );
    this.object.zoom = this.zoom0;

    this.object.updateProjectionMatrix();
    this.dispatchEvent(_changeEvent);

    this.update();

    state = STATE.NONE;
  }

  private init() {
    const that = this;
    const panLeft = (function () {
        const v = new Vector3();
      
        return function panLeft(distance, objectMatrix) {
          v.setFromMatrixColumn(objectMatrix, 0); // get X column of objectMatrix
          v.multiplyByScalar(-distance);
      
          panOffset.add(v);
        };
      })();
      const panUp = function (a: any, b: any) {
        const panUpV = new Vector3();
      
        return function panUp(distance, objectMatrix) {
          if (that.screenSpacePanning === true) {
            panUpV.setFromMatrixColumn(objectMatrix, 1);
          } else {
            panUpV.setFromMatrixColumn(objectMatrix, 0);
            //panUpV.crossVectors( this.object.up, panUpV );
            Vector3.cross(that.object.up, panUpV, panUpV);
          }
      
          panUpV.multiplyByScalar(distance);
      
          panOffset.add(panUpV);
        };
      };
      // deltaX and deltaY are in pixels; right and down are positive
      const pan = function () {
        const offset = new Vector3();
        return function pan(deltaX, deltaY) {
          const element = that.domElement;
          if (that.object.isPerspectiveCamera) {
            // perspective
            const position = that.object.position;
            offset.copy(position).subtract(that.target);
            let targetDistance = offset.length();
      
            // half of the fov is center to top of screen
            targetDistance *= Math.tan(((that.object.fov / 2) * Math.PI) / 180.0);
      
            // we use only clientHeight here so aspect ratio does not distort speed
            panLeft(
              (2 * deltaX * targetDistance) / element.clientHeight,
              that.object.matrix
            );
            panUp(
              (2 * deltaY * targetDistance) / element.clientHeight,
              that.object.matrix
            );
          } else if (that.object.isOrthographicCamera) {
            // orthographic
            panLeft(
              (deltaX * (that.object.right - that.object.left)) /
                that.object.zoom /
                element.clientWidth,
              that.object.matrix
            );
            panUp(
              (deltaY * (that.object.top - that.object.bottom)) /
                that.object.zoom /
                element.clientHeight,
              that.object.matrix
            );
          } else {
            // camera neither orthographic nor perspective
            console.warn(
              "WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."
            );
            that.enablePan = false;
          }
        };
      }();
    const dollyOut = (dollyScale) => {
      if (this.object.isPerspectiveCamera) {
        scale /= dollyScale;
      } else if (this.object.isOrthographicCamera) {
        this.object.zoom = Math.max(
          this.minZoom,
          Math.min(this.maxZoom, this.object.zoom * dollyScale)
        );
        this.object.updateProjectionMatrix();
        zoomChanged = true;
      } else {
        console.warn(
          "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
        );
        this.enableZoom = false;
      }
    };

    const dollyIn = (dollyScale) => {
      if (this.object.isPerspectiveCamera) {
        scale *= dollyScale;
      } else if (this.object.isOrthographicCamera) {
        this.object.zoom = Math.max(
          this.minZoom,
          Math.min(this.maxZoom, this.object.zoom / dollyScale)
        );
        this.object.updateProjectionMatrix();
        zoomChanged = true;
      } else {
        console.warn(
          "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
        );
        this.enableZoom = false;
      }
    };
    const handleMouseMoveRotate = (event) => {
      rotateEnd.set(event.clientX, event.clientY);

      Vector2.subtract(rotateEnd, rotateStart, rotateDelta);
      Vector2.multiplyByScalar(rotateDelta, this.rotateSpeed, rotateDelta);
      //rotateDelta.subVectors( rotateEnd, rotateStart ).multiplyScalar( this.rotateSpeed );

      const element = this.domElement;

      rotateLeft((2 * Math.PI * rotateDelta.x) / element.clientHeight); // yes, height

      rotateUp((2 * Math.PI * rotateDelta.y) / element.clientHeight);

      Vector2.clone(rotateEnd, rotateStart);
      //rotateStart.copy( rotateEnd );

      this.update();
    };

    const handleMouseMoveDolly = (event) => {
      dollyEnd.set(event.clientX, event.clientY);

      Vector2.subtract(dollyEnd, dollyStart, dollyDelta);
      // dollyDelta.subVectors( dollyEnd, dollyStart );

      if (dollyDelta.y > 0) {
        dollyOut(getZoomScale());
      } else if (dollyDelta.y < 0) {
        dollyIn(getZoomScale());
      }

      Vector2.clone(dollyEnd, dollyStart);
      // dollyStart.copy( dollyEnd );

      this.update();
    };

    const handleMouseMovePan = (event) => {
      panEnd.set(event.clientX, event.clientY);

      Vector2.subtract(panEnd, panStart, panDelta);
      Vector2.multiplyByScalar(panDelta, this.panSpeed, panDelta);
      //panDelta.subVectors( panEnd, panStart ).multiplyScalar( this.panSpeed );

      pan(panDelta.x, panDelta.y);

      Vector2.clone(panEnd, panStart);
      //panStart.copy( panEnd );

      this.update();
    };

    const handleMouseWheel = (event) => {
      if (event.deltaY < 0) {
        dollyIn(getZoomScale());
      } else if (event.deltaY > 0) {
        dollyOut(getZoomScale());
      }

      this.update();
    };

    const handleKeyDown = (event) => {
      let needsUpdate = false;

      switch (event.code) {
        case this.keys.UP:
          pan(0, this.keyPanSpeed);
          needsUpdate = true;
          break;

        case this.keys.BOTTOM:
          pan(0, -this.keyPanSpeed);
          needsUpdate = true;
          break;

        case this.keys.LEFT:
          pan(this.keyPanSpeed, 0);
          needsUpdate = true;
          break;

        case this.keys.RIGHT:
          pan(-this.keyPanSpeed, 0);
          needsUpdate = true;
          break;
      }

      if (needsUpdate) {
        // prevent the browser from scrolling on cursor keys
        event.preventDefault();

        this.update();
      }
    };

    const handleTouchStartDollyPan = () => {
      if (this.enableZoom) handleTouchStartDolly();

      if (this.enablePan) handleTouchStartPan();
    };
    const handleTouchStartDollyRotate = () => {
      if (this.enableZoom) handleTouchStartDolly();

      if (this.enableRotate) handleTouchStartRotate();
    };

    const handleTouchMoveRotate = (event) => {
      if (pointers.length == 1) {
        rotateEnd.set(event.pageX, event.pageY);
      } else {
        const position = getSecondPointerPosition(event);

        const x = 0.5 * (event.pageX + position.x);
        const y = 0.5 * (event.pageY + position.y);

        rotateEnd.set(x, y);
      }

      Vector2.subtract(rotateEnd, rotateStart, rotateDelta);
      Vector2.multiplyByScalar(rotateDelta, this.rotateSpeed, rotateDelta);
      //rotateDelta.subVectors( rotateEnd, rotateStart ).multiplyScalar( this.rotateSpeed );

      const element = this.domElement;

      rotateLeft((2 * Math.PI * rotateDelta.x) / element.clientHeight); // yes, height

      rotateUp((2 * Math.PI * rotateDelta.y) / element.clientHeight);
      Vector2.clone(rotateEnd, rotateStart);
      //rotateStart.copy( rotateEnd );
    };

    const handleTouchMovePan = (event) => {
      if (pointers.length === 1) {
        panEnd.set(event.pageX, event.pageY);
      } else {
        const position = getSecondPointerPosition(event);

        const x = 0.5 * (event.pageX + position.x);
        const y = 0.5 * (event.pageY + position.y);

        panEnd.set(x, y);
      }
      Vector2.subtract(panEnd, panStart, panDelta);
      Vector2.multiplyByScalar(panDelta, this.panSpeed, panDelta);

      //panDelta.subVectors( panEnd, panStart ).multiplyScalar( this.panSpeed );

      pan(panDelta.x, panDelta.y);

      Vector2.clone(panEnd, panStart);
      // panStart.copy( panEnd );
    };

    const handleTouchMoveDolly = (event) => {
      const position = getSecondPointerPosition(event);

      const dx = event.pageX - position.x;
      const dy = event.pageY - position.y;

      const distance = Math.sqrt(dx * dx + dy * dy);

      dollyEnd.set(0, distance);

      dollyDelta.set(0, Math.pow(dollyEnd.y / dollyStart.y, this.zoomSpeed));

      dollyOut(dollyDelta.y);

      Vector2.clone(dollyEnd, dollyStart);
      //dollyStart.copy( dollyEnd );
    };

    const handleTouchMoveDollyPan = (event) => {
      if (this.enableZoom) handleTouchMoveDolly(event);

      if (this.enablePan) handleTouchMovePan(event);
    };

    const handleTouchMoveDollyRotate = (event) => {
      if (this.enableZoom) handleTouchMoveDolly(event);

      if (this.enableRotate) handleTouchMoveRotate(event);
    };

    //
    // event handlers - FSM: listen for events and reset state
    //

    this.onPointerDown = (event) => {
      if (this.enabled === false) return;

      if (pointers.length === 0) {
        this.domElement.setPointerCapture(event.pointerId);

        this.domElement.addEventListener("pointermove", this.onPointerMove);
        this.domElement.addEventListener("pointerup", this.onPointerUp);
      }

      //

      addPointer(event);

      if (event.pointerType === "touch") {
        onTouchStart(event);
      } else {
        onMouseDown(event);
      }
    };

    this.onPointerMove = (event) => {
      if (this.enabled === false) return;

      if (event.pointerType === "touch") {
        onTouchMove(event);
      } else {
        onMouseMove(event);
      }
    };

    this.onPointerUp = (event) => {
      removePointer(event);

      if (pointers.length === 0) {
        this.domElement.releasePointerCapture(event.pointerId);

        this.domElement.removeEventListener("pointermove", this.onPointerMove);
        this.domElement.removeEventListener("pointerup", this.onPointerUp);
      }

      this.dispatchEvent(_endEvent);

      state = STATE.NONE;
    };

    const onMouseDown = (event) => {
      let mouseAction;

      switch (event.button) {
        case 0:
          mouseAction = this.mouseButtons.LEFT;
          break;

        case 1:
          mouseAction = this.mouseButtons.MIDDLE;
          break;

        case 2:
          mouseAction = this.mouseButtons.RIGHT;
          break;

        default:
          mouseAction = -1;
      }

      switch (mouseAction) {
        case MOUSE.DOLLY:
          if (this.enableZoom === false) return;

          handleMouseDownDolly(event);

          state = STATE.DOLLY;

          break;

        case MOUSE.ROTATE:
          if (event.ctrlKey || event.metaKey || event.shiftKey) {
            if (this.enablePan === false) return;

            handleMouseDownPan(event);

            state = STATE.PAN;
          } else {
            if (this.enableRotate === false) return;

            handleMouseDownRotate(event);

            state = STATE.ROTATE;
          }

          break;

        case MOUSE.PAN:
          if (event.ctrlKey || event.metaKey || event.shiftKey) {
            if (this.enableRotate === false) return;

            handleMouseDownRotate(event);

            state = STATE.ROTATE;
          } else {
            if (this.enablePan === false) return;

            handleMouseDownPan(event);

            state = STATE.PAN;
          }

          break;

        default:
          state = STATE.NONE;
      }

      if (state !== STATE.NONE) {
        this.dispatchEvent(_startEvent);
      }
    };

    const onMouseMove = (event) => {
      switch (state) {
        case STATE.ROTATE:
          if (this.enableRotate === false) return;

          handleMouseMoveRotate(event);

          break;

        case STATE.DOLLY:
          if (this.enableZoom === false) return;

          handleMouseMoveDolly(event);

          break;

        case STATE.PAN:
          if (this.enablePan === false) return;

          handleMouseMovePan(event);

          break;
      }
    };

    this.onMouseWheel = (event) => {
      if (
        this.enabled === false ||
        this.enableZoom === false ||
        state !== STATE.NONE
      )
        return;

      event.preventDefault();

      this.dispatchEvent(_startEvent);

      handleMouseWheel(event);

      this.dispatchEvent(_endEvent);
    };

    this.onKeyDown = (event) => {
      if (this.enabled === false || this.enablePan === false) return;

      handleKeyDown(event);
    };

    const onTouchStart = (event) => {
      trackPointer(event);

      switch (pointers.length) {
        case 1:
          switch (this.touches.ONE) {
            case TOUCH.ROTATE:
              if (this.enableRotate === false) return;

              handleTouchStartRotate();

              state = STATE.TOUCH_ROTATE;

              break;

            case TOUCH.PAN:
              if (this.enablePan === false) return;

              handleTouchStartPan();

              state = STATE.TOUCH_PAN;

              break;

            default:
              state = STATE.NONE;
          }

          break;

        case 2:
          switch (this.touches.TWO) {
            case TOUCH.DOLLY_PAN:
              if (this.enableZoom === false && this.enablePan === false) return;

              handleTouchStartDollyPan();

              state = STATE.TOUCH_DOLLY_PAN;

              break;

            case TOUCH.DOLLY_ROTATE:
              if (this.enableZoom === false && this.enableRotate === false)
                return;

              handleTouchStartDollyRotate();

              state = STATE.TOUCH_DOLLY_ROTATE;

              break;

            default:
              state = STATE.NONE;
          }

          break;

        default:
          state = STATE.NONE;
      }

      if (state !== STATE.NONE) {
        this.dispatchEvent(_startEvent);
      }
    };

    const onTouchMove = (event) => {
      trackPointer(event);

      switch (state) {
        case STATE.TOUCH_ROTATE:
          if (this.enableRotate === false) return;

          handleTouchMoveRotate(event);

          this.update();

          break;

        case STATE.TOUCH_PAN:
          if (this.enablePan === false) return;

          handleTouchMovePan(event);

          this.update();

          break;

        case STATE.TOUCH_DOLLY_PAN:
          if (this.enableZoom === false && this.enablePan === false) return;

          handleTouchMoveDollyPan(event);

          this.update();

          break;

        case STATE.TOUCH_DOLLY_ROTATE:
          if (this.enableZoom === false && this.enableRotate === false) return;

          handleTouchMoveDollyRotate(event);

          this.update();

          break;

        default:
          state = STATE.NONE;
      }
    };

    this.onContextMenu = (event) => {
      if (this.enabled === false) return;

      event.preventDefault();
    };
    this.getAutoRotationAngle = () => {
      return ((2 * Math.PI) / 60 / 60) * this.autoRotateSpeed;
    };

    const getZoomScale = () => {
      return Math.pow(0.95, this.zoomSpeed);
    };
    this.domElement.addEventListener("contextmenu", this.onContextMenu);

    this.domElement.addEventListener("pointerdown", this.onPointerDown);
    this.domElement.addEventListener("pointercancel", onPointerCancel);
    this.domElement.addEventListener("wheel", this.onMouseWheel, {
      passive: false,
    });
  }
  dispose() {
    this.domElement.removeEventListener("contextmenu", this.onContextMenu);

    this.domElement.removeEventListener("pointerdown", this.onPointerDown);
    this.domElement.removeEventListener("pointercancel", onPointerCancel);
    this.domElement.removeEventListener("wheel", this.onMouseWheel);

    this.domElement.removeEventListener("pointermove", this.onPointerMove);
    this.domElement.removeEventListener("pointerup", this.onPointerUp);

    if (this._domElementKeyEvents !== null) {
      this._domElementKeyEvents.removeEventListener("keydown", this.onKeyDown);
    }

    //this.dispatchEvent( { type: 'dispose' } ); // should this be added here?
  }
}
const STATE = {
  NONE: -1,
  ROTATE: 0,
  DOLLY: 1,
  PAN: 2,
  TOUCH_ROTATE: 3,
  TOUCH_PAN: 4,
  TOUCH_DOLLY_PAN: 5,
  TOUCH_DOLLY_ROTATE: 6,
};

let state = STATE.NONE;

const EPS = 0.000001;

// current position in spherical coordinates
const spherical = new Spherical();
const sphericalDelta = new Spherical();

let scale = 1;
const panOffset = new Vector3();
let zoomChanged = false;

const rotateStart = new Vector2();
const rotateEnd = new Vector2();
const rotateDelta = new Vector2();

const panStart = new Vector2();
const panEnd = new Vector2();
const panDelta = new Vector2();

const dollyStart = new Vector2();
const dollyEnd = new Vector2();
const dollyDelta = new Vector2();

const pointers = [];
const pointerPositions = {};
export enum MOUSE {
  LEFT = 0,
  MIDDLE = 1,
  RIGHT = 2,
  ROTATE = 0,
  DOLLY = 1,
  PAN = 2,
}

export enum TOUCH {
  ROTATE,
  PAN,
  DOLLY_PAN,
  DOLLY_ROTATE,
}
function rotateLeft(angle) {
  sphericalDelta.theta -= angle;
}

function rotateUp(angle) {
  sphericalDelta.phi -= angle;
}

function addPointer(event) {
  pointers.push(event);
}

function removePointer(event) {
  delete pointerPositions[event.pointerId];

  for (let i = 0; i < pointers.length; i++) {
    if (pointers[i].pointerId == event.pointerId) {
      pointers.splice(i, 1);
      return;
    }
  }
}

function trackPointer(event) {
  let position = pointerPositions[event.pointerId];

  if (position === undefined) {
    position = new Vector2();
    pointerPositions[event.pointerId] = position;
  }

  position.set(event.pageX, event.pageY);
}

function getSecondPointerPosition(event) {
  const pointer =
    event.pointerId === pointers[0].pointerId ? pointers[1] : pointers[0];

  return pointerPositions[pointer.pointerId];
}
//
// event callbacks - update the object state
//

function handleMouseDownRotate(event) {
  rotateStart.set(event.clientX, event.clientY);
}

function handleMouseDownDolly(event) {
  dollyStart.set(event.clientX, event.clientY);
}

function handleMouseDownPan(event) {
  panStart.set(event.clientX, event.clientY);
}
function onPointerCancel(event) {
  removePointer(event);
}
function handleTouchStartRotate() {
  if (pointers.length === 1) {
    rotateStart.set(pointers[0].pageX, pointers[0].pageY);
  } else {
    const x = 0.5 * (pointers[0].pageX + pointers[1].pageX);
    const y = 0.5 * (pointers[0].pageY + pointers[1].pageY);

    rotateStart.set(x, y);
  }
}

function handleTouchStartPan() {
  if (pointers.length === 1) {
    panStart.set(pointers[0].pageX, pointers[0].pageY);
  } else {
    const x = 0.5 * (pointers[0].pageX + pointers[1].pageX);
    const y = 0.5 * (pointers[0].pageY + pointers[1].pageY);

    panStart.set(x, y);
  }
}

function handleTouchStartDolly() {
  const dx = pointers[0].pageX - pointers[1].pageX;
  const dy = pointers[0].pageY - pointers[1].pageY;

  const distance = Math.sqrt(dx * dx + dy * dy);

  dollyStart.set(0, distance);
}
//

import GMath from "./Math.js";
import Vector3 from "./Vector3.js";
//from three.js
class Spherical {
  radius: number;
  phi: number;
  theta: number;

  constructor(radius = 1, phi = 0, theta = 0) {
    this.radius = radius;
    this.phi = phi; // polar angle
    this.theta = theta; // azimuthal angle

    return this;
  }
  set(radius: number, phi: number, theta: number): Spherical {
    this.radius = radius;
    this.phi = phi;
    this.theta = theta;

    return this;
  }
  copy(other: Spherical): Spherical {
    this.radius = other.radius;
    this.phi = other.phi;
    this.theta = other.theta;

    return this;
  }
  // restrict phi to be between EPS and PI-EPS
  makeSafe(): Spherical {
    const EPS = 0.000001;
    this.phi = Math.max(EPS, Math.min(Math.PI - EPS, this.phi));

    return this;
  }

  setFromVector3(v: Vector3): Spherical {
    return this.setFromCartesianCoords(v.x, v.y, v.z);
  }
  setFromCartesianCoords(x: number, y: number, z: number): Spherical {
    this.radius = Math.sqrt(x * x + y * y + z * z);

    if (this.radius === 0) {
      this.theta = 0;
      this.phi = 0;
    } else {
      this.theta = Math.atan2(x, z);
      this.phi = Math.acos(GMath.clamp(y / this.radius, -1, 1));
    }

    return this;
  }

  clone(): Spherical {
    return new Spherical(this.radius, this.phi, this.theta);
  }
}

export { Spherical };

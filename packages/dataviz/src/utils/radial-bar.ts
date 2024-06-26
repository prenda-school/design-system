import { Coordinates } from './coordinates';
import { withEpsilon } from './epsilon';

export type RadialBarParams = {
  /**
   * The corner radius of any sweep located on this radial bar.
   */
  cornerRadius?: number | string;
  /**
   * The primary radius (outer radius) of the radial bar.
   */
  radius: number;
  /**
   * The ratio of the secondary radius (inner radius) of the radial bar to primary radius.
   */
  ratio: number;
};

/**
 * Calculate the coordinates of a point on an radial bar (drawn by this library) given an angle and radius.
 * @param angle The angle (in radians) subtended by the center of the radial bar.
 * @param radius The distance from the center of the radial bar.
 */
export const calcCoordinatesOnRadialBar = (params: {
  angle: number;
  radius: number;
}): Coordinates => {
  // Usually, the formula according to usual mathematical convention is x = r * cos(θ), y = r * sin(θ) where the starting point at θ = 0 is (r, 0) and the direction of travel is counter-clockwise.
  // We need adjust for factors affecting this library, (1) the SVG coordinate system has a flipped y-axis (counter-clockwise travel appears clockwise), and (2) the arcs within this library (i.e. drawn by D3) **appear** to have the starting point at the top of the circle (i.e. θ = 0 is (0, -r) (flipped y-axis) or the bottom of the circle in the underlying coordinate system) and **appear** to travel clockwise (really counter-clockwise in underlying coordinate system).
  // The result is simply subtracting π/2 from the angle:
  //    x = r * cos(θ - π/2) = r * cos(π/2 - θ) = r * sin(θ)
  //    y = r * sin(θ - π/2) = r * -sin(π/2 - θ) = r * -cos(θ)

  const x = params.radius * Math.sin(params.angle);
  const y = params.radius * -Math.cos(params.angle);

  const coordinates: Coordinates = {
    x: withEpsilon(x),
    y: withEpsilon(y),
  };

  return coordinates;
};

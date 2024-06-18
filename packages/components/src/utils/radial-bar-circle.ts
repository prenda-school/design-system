import { Angle } from './angle';
import { RadialBarParams, calcCoordinatesOnRadialBar } from './radial-bar';
import { RadialBarScaleParams } from './radial-bar-scale';
import { inverseGeometricChord } from './circle';
import { getValueAngleScale } from './scale';

/**
 * Calculate the absolute (or magnitude) angle offset from the angle range maximum and minimum for a circle located on the radial bar.
 * @param rc The radius of the circle, that is located on the radial bar.
 * @param ra The radius of the radial bar.
 */
export const calcAbsAngleOffsetOfRadialBarCircle = (
  rc: number,
  ra: number
): Angle => {
  const angleOffset = inverseGeometricChord(rc, ra);

  return angleOffset;
};

export type RadialBarCircleParams = {
  /**
   * The value at which the circle is located.
   */
  at: number;
  /**
   * The ratio of the radius of the circle to the width of the radial bar.
   */
  radiusRatio?: number;
};

export type DrawRadialBarCircleParams = {
  /**
   * The radial bar on which the circle is located.
   */
  bar: RadialBarParams;
  /**
   * The properties of the circle.
   */
  circle: RadialBarCircleParams;
  /**
   * The scale of the radial bar.
   */
  scale: RadialBarScaleParams;
};

export type DrawRadialBarCircleResult = {
  cx: number;
  cy: number;
  r: number;
};

export function drawRadialBarCircle(
  params: DrawRadialBarCircleParams
): DrawRadialBarCircleResult {
  const arcWidth = params.bar.radius - params.bar.radius * params.bar.ratio;
  const defaultRadius = arcWidth / 2;
  const radiusRatio = params.circle.radiusRatio ?? DEFAULT_RADIUS_RATIO;
  const radius = defaultRadius * radiusRatio;

  // center line of the arc
  const radialOffset = params.bar.radius - arcWidth / 2;

  const absAngleOffset = calcAbsAngleOffsetOfRadialBarCircle(
    radius,
    radialOffset
  );

  const angleScale = getValueAngleScale({
    value: {
      min: params.scale.valueMin,
      max: params.scale.valueMax,
    },
    angle: {
      min: params.scale.angleMin + absAngleOffset,
      max: params.scale.angleMax - absAngleOffset,
    },
  });

  const angle = angleScale(params.circle.at);

  const coordinates = calcCoordinatesOnRadialBar({
    angle,
    radius: radialOffset,
  });

  return {
    cx: coordinates.x,
    cy: coordinates.y,
    r: radius,
  };
}

const DEFAULT_RADIUS_RATIO = 1;

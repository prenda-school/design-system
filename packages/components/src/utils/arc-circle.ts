import { ArcOut } from '../Arc';
import { Angle } from './angle';
import { calcCoordinatesOnArc } from './arc';
import { inverseGeometricChord } from './circle';
import { getValueAngleScale } from './scale';

/**
 * Calculate the absolute (or magnitude) angle offset from the angle range maximum and minimum for a circle located on the arc.
 * @param rc The radius of the circle, that is located on the arc.
 * @param ra The radius of the arc.
 */
export const calcAbsAngleOffsetOfArcCircle = (
  rc: number,
  ra: number
): Angle => {
  const angleOffset = inverseGeometricChord(rc, ra);

  return angleOffset;
};

export type ArcCircleParams = {
  /**
   * The value at which the circle is located.
   */
  at: number;
  /**
   * The ratio of the radius of the circle to the width of the arc.
   */
  radiusRatio?: number;
};

export type ArcCircleIn = {
  /**
   * The value at which the circle is located.
   */
  at: number;
  /**
   * The ratio of the radius of the circle to the width of the arc.
   */
  radiusRatio?: number;
  /**
   * The arc on which the circle is located.
   */
  arc: ArcOut;
};

export type ArcCircleOut = {
  r: number;
  cx: number;
  cy: number;
};

export function drawArcCircle(params: ArcCircleIn): ArcCircleOut {
  const arcWidth = params.arc.radius - params.arc.radius * params.arc.ratio;
  const defaultRadius = arcWidth / 2;
  const radiusRatio = params.radiusRatio ?? DEFAULT_RADIUS_RATIO;
  const radius = defaultRadius * radiusRatio;

  // center line of the arc
  const radialOffset = params.arc.radius - arcWidth / 2;

  const absAngleOffset = calcAbsAngleOffsetOfArcCircle(radius, radialOffset);

  const angleScale = getValueAngleScale({
    value: {
      min: params.arc.value.min,
      max: params.arc.value.max,
    },
    angle: {
      min: params.arc.angle.min + absAngleOffset,
      max: params.arc.angle.max - absAngleOffset,
    },
  });

  const angle = angleScale(params.at);

  const coordinates = calcCoordinatesOnArc({ angle, radius: radialOffset });

  return {
    cx: coordinates.x,
    cy: coordinates.y,
    r: radius,
  };
}

const DEFAULT_RADIUS_RATIO = 1;

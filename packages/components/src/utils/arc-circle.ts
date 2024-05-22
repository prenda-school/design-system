import { Angle } from './angle';
import { inverseGeometricChord } from './circle';

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

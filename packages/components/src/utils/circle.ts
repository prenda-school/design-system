/**
 * Calculate the central angle of a circle chord, using the inverse geometric chord function.
 * @param c The chord length.
 * @param r The circle radius.
 * @see https://en.wikipedia.org/wiki/Chord_(geometry)
 */
export function inverseGeometricChord(c: number, r: number) {
  // use the inverse of the sine-based, angle identity form of the chord function: θ = 2 * arcsin(c / 2r)
  const angle = 2 * Math.asin(c / (2 * r));

  return angle;
}

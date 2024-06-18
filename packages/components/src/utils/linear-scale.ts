export type LinearScaleParams = {
  /**
   * The minimum value of the data.
   */
  valueMin: number;
  /**
   * The maximum value of the data.
   */
  valueMax: number;
  /**
   * The minimum distance, in pixels, between the start and end of the line. Defaults to 0.
   */
  lengthMin?: number;
  /**
   * The maximum distance, in pixels, between the start and end of the line.
   */
  lengthMax: number;
};

export function evalLinearScaleLengthMin(
  param: LinearScaleParams['lengthMin']
) {
  return param ?? DEFAULT_LINEAR_SCALE_LENGTH_MIN;
}

export const DEFAULT_LINEAR_SCALE_LENGTH_MIN = 0;

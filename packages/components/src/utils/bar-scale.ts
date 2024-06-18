export type BarScaleParams = {
  /**
   * The minimum value of the data.
   */
  valueMin: number;
  /**
   * The maximum value of the data.
   */
  valueMax: number;
  /**
   * The minimum distance, in pixels, between the start and end edges of the bar. Defaults to 0.
   */
  lengthMin?: number;
  /**
   * The maximum distance, in pixels, between the start and end edges of the bar.
   */
  lengthMax: number;
};

export function evalBarScaleLengthMin(param: BarScaleParams['lengthMin']) {
  return param ?? DEFAULT_BAR_SCALE_LENGTH_MIN;
}

export const DEFAULT_BAR_SCALE_LENGTH_MIN = 0;

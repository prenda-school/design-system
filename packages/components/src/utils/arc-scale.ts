export type ArcScaleParams = {
  /**
   * The minimum value of the data.
   */
  valueMin: number;
  /**
   * The maximum value of the data.
   */
  valueMax: number;
  /**
   * The minimum angle, in radians, of the arc.
   */
  angleMin: number;
  /**
   * The maximum angle, in radians, of the arc.
   */
  angleMax: number;
};

export type CtxWithArcScale = { arcScale: ArcScaleParams };

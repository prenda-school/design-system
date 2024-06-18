import { RadialBarParams } from './radial-bar';
import { RadialBarScaleParams } from './radial-bar-scale';
import { RadialBarSegmentsParams } from './radial-bar-segments';
import { RadialBarUnitsParams } from './radial-bar-units';

export type RadialBarCtx = {
  /**
   * The parameters of the radial bar.
   */
  radialBar: RadialBarParams;
  /**
   * The parameters of the radial bar scale.
   */
  radialBarScale: RadialBarScaleParams;
  /**
   * The parameters of the radial bar segments.
   */
  radialBarSegments: RadialBarSegmentsParams;
  /**
   * The parameters of the radial bar units.
   */
  radialBarUnits: RadialBarUnitsParams;
};

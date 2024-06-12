import { ArcParams } from './arc';
import { ArcScaleParams } from './arc-scale';
import { ArcSegmentsParams } from './arc-segments';
import { ArcUnitsParams } from './arc-units';

export type ArcCtx = {
  /**
   * The parameters of the arc.
   */
  arc: ArcParams;
  /**
   * The parameters of the arc scale.
   */
  arcScale: ArcScaleParams;
  /**
   * The parameters of the arc segments.
   */
  arcSegments: ArcSegmentsParams;
  /**
   * The parameters of the arc units.
   */
  arcUnits: ArcUnitsParams;
};

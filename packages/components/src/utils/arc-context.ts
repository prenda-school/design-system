import { ArcParams } from './arc';
import { ArcScaleParams } from './arc-scale';
import { ArcSegmentsParams } from './arc-segments';
import { ArcUnitsParams } from './arc-units';

export type ArcCtx = {
  arcScale: ArcScaleParams;
  arc: ArcParams;
  arcSegments: ArcSegmentsParams;
  arcUnits: ArcUnitsParams;
};

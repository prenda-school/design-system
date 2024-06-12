import { ReactNode } from 'react';
import { ArcParams, ArcScaleParams, ArcSegmentsParams } from '../utils';

export interface ArcSegmentsProps extends ArcSegmentsParams {
  children?: ReactNode;
  /**
   * The context of the component. This is typically provided by the expected parent component(s) and marked as optional as a result. If not provided, an error is thrown. To render this component without the expected parent component(s), specify `ctx` explicitly.
   */
  ctx?: {
    /**
     * The scale of the arc on which the segments are located.
     */
    arcScale: ArcScaleParams;
    /**
     * The arc on which the segments are located.
     */
    arc: ArcParams;
  };
}

export type ArcSegmentsChildProps = {
  ctx: {
    arc: ArcParams;
    arcScale: ArcScaleParams;
    arcSegments: ArcSegmentsParams;
  };
};

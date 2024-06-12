import React from 'react';
import {
  ArcScaleParams,
  ArcSegmentsParams,
  ArcSegmentsSweepParams,
  ArcParams,
} from '../utils';

export interface ArcSegmentsSweepProps extends ArcSegmentsSweepParams {
  renderProps?:
    | React.SVGProps<SVGPathElement>
    | ((props: { d: string }, index: number) => React.SVGProps<SVGPathElement>);

  /**
   * The context of the component. This is typically provided by the expected parent component(s) and marked as optional as a result. If not provided, an error is thrown. To render this component without the expected parent component(s), specify `ctx` explicitly.
   */
  ctx?: {
    /**
     * The arc on which the segments sweep is located.
     */
    arc: ArcParams;
    /**
     * The scale of the arc on which the segments sweep is located.
     */
    arcScale: ArcScaleParams;
    /**
     * The segments of the arc.
     */
    arcSegments: ArcSegmentsParams;
  };
}

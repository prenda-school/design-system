import React from 'react';
import { ArcOut } from '../Arc/generateArc';
import { ArcSegmentsOut } from '../ArcSegments/generateArcSegments';

export interface ArcSegmentsSweepProps {
  /**
   * The value from which the arc sweep starts. Defaults to the minimum value.
   */
  from?: number;
  /**
   * The value from which the arc sweep ends. Defaults to the maximum value.
   */
  to?: number;
  /**
   * The corner radius of the arc sweep. Defaults to 0. Overrides the corner radius set on the `arc`.
   */
  cornerRadius?: number | string;
  renderProps?:
    | React.SVGProps<SVGPathElement>
    | ((props: { d: string }, index: number) => React.SVGProps<SVGPathElement>);

  /**
   * The context of the component. This is typically provided by the expected parent component(s) and marked as optional as a result. If not provided, an error is thrown. To render this component without the expected parent component(s), specify `ctx` explicitly.
   */
  ctx?: {
    /**
     * The arc on which the segments are located.
     */
    arc: ArcOut;
    /**
     * The segments on which the sweep is located.
     */
    arcSegments: ArcSegmentsOut;
  };
}

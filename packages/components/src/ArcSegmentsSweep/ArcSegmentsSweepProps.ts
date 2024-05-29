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
  /**
   * The arc on which the sweep is located.
   */
  arc?: ArcOut & {
    segments: ArcSegmentsOut;
  };
  renderProps?:
    | React.SVGProps<SVGPathElement>
    | ((props: { d: string }, index: number) => React.SVGProps<SVGPathElement>);
}

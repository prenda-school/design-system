import React from 'react';
import { ArcOut } from '../Arc/generateArc';

export interface ArcCircleProps extends React.SVGProps<SVGPathElement> {
  /**
   * The value at which the point is located.
   */
  at: number;
  /**
   * The ratio of the circle's radius to default radius (half of the arc's width). Defaults to `1`.
   */
  radiusRatio?: number;
  /**
   * The arc on which the circle is located.
   */
  arc?: ArcOut;
}

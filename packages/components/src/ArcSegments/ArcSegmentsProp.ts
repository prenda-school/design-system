import { ReactNode } from 'react';
import { ArcOut } from '../Arc/generateArc';

export interface ArcSegmentsProps {
  /**
   * The number of segments in the arc.
   */
  count: number;
  /**
   * The angular separation in radians between adjacent segments.
   */
  padAngle: number;
  /**
   * The default corner radius of any segment located on this arc.
   */
  cornerRadius?: number | string;
  /**
   * The arc on which the segments are located.
   */
  arc?: ArcOut;
  children: ReactNode;
}

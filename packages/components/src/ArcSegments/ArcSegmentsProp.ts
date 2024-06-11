import { ReactNode } from 'react';
import { ArcOut } from '../Arc/generateArc';
import { ArcSegmentsParams } from '../utils';

export interface ArcSegmentsProps extends ArcSegmentsParams {
  /**
   * The arc on which the segments are located.
   */
  arc?: ArcOut;
  children: ReactNode;
}

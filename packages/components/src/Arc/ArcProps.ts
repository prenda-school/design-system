import { ReactNode } from 'react';
import { ArcScaleParams } from '../utils';

export interface ArcProps extends Partial<ArcScaleParams> {
  /**
   * The default corner radius of any sweep located on this arc.
   */
  cornerRadius?: number | string;
  /**
   * The primary radius (outer radius) of the arc.
   */
  radius: number;
  /**
   * The ratio of the secondary radius (inner radius) of the arc to primary radius.
   */
  ratio: number;
  children: ReactNode;
}

import { ReactNode } from 'react';

export interface ArcProps {
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
  arcs?: {
    valueMax: number;
    valueMin: number;
    angleMax: number;
    angleMin: number;
  };
  children: ReactNode;
}

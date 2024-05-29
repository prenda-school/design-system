import { BarCornerRadiusParam, BarScaleParams } from '../utils';

export interface BarProps
  extends Partial<BarScaleParams>,
    React.SVGTextElementAttributes<SVGPathElement> {
  /**
   * The value of the datum.
   */
  value: number;
  /**
   * The distance between the parallel, lengthwise edges of the bar, in pixels.
   */
  thickness: number;
  /**
   * The direction in which the bar is oriented.
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * The direction in which the bar grows along its orientation.
   */
  direction?: 'forward' | 'backward';
  /**
   * The corner radius (or radii) of the bar.
   */
  cornerRadius?: BarCornerRadiusParam;
}

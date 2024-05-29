import { BarCornerRadiusParam } from './bar';

export type BarFillParams = {
  /**
   * The value from which the bar fill ends. Defaults to the maximum value.
   */
  to?: number;
  /**
   * The corner radius of the bar fill.
   */
  cornerRadius?: BarCornerRadiusParam;
};

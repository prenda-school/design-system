import { BarParams } from './bar';
import { BarScaleParams } from './bar-scale';
import { BarUnitsParams } from './bar-units';

export type BarCtx = {
  /**
   * The parameters of the bar.
   */
  bar: BarParams;
  /**
   * The parameters of the bar scale.
   */
  barScale: BarScaleParams;
  /**
   * The parameters of the bar units.
   */
  barUnits: BarUnitsParams;
};

import { LinearScaleParams } from './linear-scale';
import { LinearUnitsParams } from './linear-units';

export type LinearCtx = {
  /**
   * The parameters of the linear scale.
   */
  linearScale: LinearScaleParams;
  /**
   * The parameters of the linear units.
   */
  linearUnits: LinearUnitsParams;
};

import React from 'react';
import { BarParams, BarScaleParams, BarUnitsParams } from '../utils';

export interface BarUnitsProps extends BarUnitsParams {
  children?: React.ReactNode;
  /**
   * The context of the component. This is typically provided by the expected parent component(s) and marked as optional as a result. If not provided, an error is thrown. To render this component without the expected parent component(s), specify `ctx` explicitly.
   */
  ctx?: {
    /**
     * The bar on which the units are located.
     */
    bar: BarParams;
    /**
     * The scale of the bar.
     */
    barScale: BarScaleParams;
  };
}

export type BarUnitsChildProps = {
  ctx: {
    bar: BarParams;
    barScale: BarScaleParams;
    barUnits: BarUnitsParams;
  };
};

import React from 'react';
import {
  BarParams,
  BarScaleParams,
  BarUnitLabelParams,
  BarUnitsParams,
} from '../utils';

export interface BarUnitLabelProps
  extends BarUnitLabelParams,
    Omit<React.SVGTextElementAttributes<SVGTextElement>, 'offset'> {
  children?: React.ReactNode;
  /**
   * The context of the component. This is typically provided by the expected parent component(s) and marked as optional as a result. If not provided, an error is thrown. To render this component without the expected parent component(s), specify `ctx` explicitly.
   */
  ctx?: {
    /**
     * The bar on which the label is located.
     */
    bar: BarParams;
    /**
     * The scale of the bar.
     */
    barScale: BarScaleParams;
    /**
     * The units of the bar.
     */
    barUnits: BarUnitsParams;
  };
}

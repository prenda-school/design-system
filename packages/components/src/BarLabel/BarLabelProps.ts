import React from 'react';
import { BarLabelParams, BarParams, BarScaleParams } from '../utils';

export interface BarLabelProps
  extends BarLabelParams,
    Omit<React.SVGTextElementAttributes<SVGTextElement>, 'offset' | 'dy'> {
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
  };
}

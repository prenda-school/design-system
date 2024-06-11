import React from 'react';
import { ArcOut } from '../Arc/generateArc';

export interface ArcUnitLabelProps
  extends React.SVGTextElementAttributes<SVGTextElement> {
  /**
   * The value at which the unit label is located.
   */
  at: number;
  /**
   * The offset of the unit label from the position.
   */
  offset?: number;
  /**
   * The position of the unit label relative to the arc's radii.
   */
  position?: 'outside' | 'inside';

  /**
   * The context of the component. This is typically provided by the expected parent component(s) and marked as optional as a result. If not provided, an error is thrown. To render this component without the expected parent component(s), specify `ctx` explicitly.
   */
  ctx?: {
    /**
     * The arc on which the unit label is located.
     */
    arc: ArcOut;
  };
}

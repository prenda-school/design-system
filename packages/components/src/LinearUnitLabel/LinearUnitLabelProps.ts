import React from 'react';
import { LinearCtx, LinearUnitLabelParams } from '../utils';

export interface LinearUnitLabelProps
  extends LinearUnitLabelParams,
    Omit<React.SVGTextElementAttributes<SVGTextElement>, 'offset'> {
  children?: React.ReactNode;
  /**
   * The context of the component. This is typically provided by the expected parent component(s) and marked as optional as a result. If not provided, an error is thrown. To render this component without the expected parent component(s), specify `ctx` explicitly.
   */
  ctx?: Pick<LinearCtx, 'linearScale' | 'linearUnits'>;
}

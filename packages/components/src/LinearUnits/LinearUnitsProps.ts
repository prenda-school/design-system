import React from 'react';
import { LinearCtx, LinearUnitsParams } from '../utils';

export interface LinearUnitsProps extends LinearUnitsParams {
  children?: React.ReactNode;
  /**
   * The context of the component. This is typically provided by the expected parent component(s) and marked as optional as a result. If not provided, an error is thrown. To render this component without the expected parent component(s), specify `ctx` explicitly.
   */
  ctx?: Pick<LinearCtx, 'linearScale'>;
}

export type LinearUnitsChildProps = {
  ctx: Pick<LinearCtx, 'linearScale' | 'linearUnits'>;
};

import React from 'react';
import { BarCtx, BarUnitsParams } from '../utils';

export interface BarUnitsProps extends BarUnitsParams {
  children?: React.ReactNode;
  /**
   * The context of the component. This is typically provided by the expected parent component(s) and marked as optional as a result. If not provided, an error is thrown. To render this component without the expected parent component(s), specify `ctx` explicitly.
   */
  ctx?: Pick<BarCtx, 'bar' | 'barScale'>;
}

export type BarUnitsChildProps = {
  ctx: Pick<BarCtx, 'bar' | 'barScale' | 'barUnits'>;
};

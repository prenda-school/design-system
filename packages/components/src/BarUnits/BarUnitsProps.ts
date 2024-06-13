import React from 'react';
import { BarCtx, BarUnitsParams, WithCtx, WithOverridableCtx } from '../utils';

export interface BarUnitsProps
  extends BarUnitsParams,
    WithOverridableCtx<Pick<BarCtx, 'bar' | 'barScale'>> {
  children?: React.ReactNode;
}

export type BarUnitsChildProps = WithCtx<
  Pick<BarCtx, 'bar' | 'barScale' | 'barUnits'>
>;

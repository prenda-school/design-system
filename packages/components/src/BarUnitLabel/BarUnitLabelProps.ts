import React from 'react';
import { BarCtx, BarUnitLabelParams, WithOverridableCtx } from '../utils';

export interface BarUnitLabelProps
  extends BarUnitLabelParams,
    WithOverridableCtx<Pick<BarCtx, 'bar' | 'barScale' | 'barUnits'>>,
    Omit<React.SVGTextElementAttributes<SVGTextElement>, 'offset'> {
  children?: React.ReactNode;
}

import React from 'react';
import { BarCtx, BarUnitLabelParams, WithOverridableCtx } from '../utils';

export interface BarUnitLabelElement extends SVGTextElement {}

export interface BarUnitLabelProps
  extends BarUnitLabelParams,
    WithOverridableCtx<Pick<BarCtx, 'bar' | 'barScale' | 'barUnits'>>,
    Omit<React.SVGTextElementAttributes<BarUnitLabelElement>, 'offset'> {
  children?: React.ReactNode;
}

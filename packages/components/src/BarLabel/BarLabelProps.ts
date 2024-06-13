import React from 'react';
import { BarCtx, BarLabelParams, WithOverridableCtx } from '../utils';

export interface BarLabelProps
  extends BarLabelParams,
    WithOverridableCtx<Pick<BarCtx, 'bar' | 'barScale'>>,
    Omit<React.SVGTextElementAttributes<SVGTextElement>, 'offset' | 'dy'> {
  children?: React.ReactNode;
}

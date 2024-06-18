import React from 'react';
import { BarCtx, BarLabelParams, WithOverridableCtx } from '../utils';

export interface BarLabelElement extends SVGTextElement {}

export interface BarLabelProps
  extends BarLabelParams,
    WithOverridableCtx<Pick<BarCtx, 'bar' | 'barScale'>>,
    Omit<React.SVGTextElementAttributes<BarLabelElement>, 'offset' | 'dy'> {
  children?: React.ReactNode;
}

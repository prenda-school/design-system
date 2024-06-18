import React from 'react';
import { LinearCtx, LinearUnitLabelParams, WithOverridableCtx } from '../utils';

export interface LinearUnitLabelElement extends SVGTextElement {}

export interface LinearUnitLabelProps
  extends LinearUnitLabelParams,
    WithOverridableCtx<Pick<LinearCtx, 'linearScale' | 'linearUnits'>>,
    Omit<
      React.SVGTextElementAttributes<LinearUnitLabelElement>,
      'offset' | 'dominantBaseline'
    > {
  children?: React.ReactNode;
}

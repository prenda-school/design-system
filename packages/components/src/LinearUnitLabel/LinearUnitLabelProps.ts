import React from 'react';
import { LinearCtx, LinearUnitLabelParams, WithOverridableCtx } from '../utils';

export interface LinearUnitLabelProps
  extends LinearUnitLabelParams,
    WithOverridableCtx<Pick<LinearCtx, 'linearScale' | 'linearUnits'>>,
    Omit<React.SVGTextElementAttributes<SVGTextElement>, 'offset'> {
  children?: React.ReactNode;
}

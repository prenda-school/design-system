import React from 'react';
import {
  RadialBarCtx,
  RadialBarUnitLabelParams,
  WithOverridableCtx,
} from '../utils';

export interface RadialBarUnitLabelProps
  extends RadialBarUnitLabelParams,
    WithOverridableCtx<
      Pick<RadialBarCtx, 'radialBar' | 'radialBarScale' | 'radialBarUnits'>
    >,
    Omit<React.SVGTextElementAttributes<SVGTextElement>, 'offset'> {}

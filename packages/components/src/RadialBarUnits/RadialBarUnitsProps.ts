import React from 'react';
import {
  RadialBarCtx,
  RadialBarUnitsParams,
  WithCtx,
  WithOverridableCtx,
} from '../utils';

export interface RadialBarUnitsProps
  extends RadialBarUnitsParams,
    WithOverridableCtx<Pick<RadialBarCtx, 'radialBar' | 'radialBarScale'>> {
  children?: React.ReactNode;
}

export type RadialBarUnitsChildProps = WithCtx<
  Pick<RadialBarCtx, 'radialBar' | 'radialBarScale' | 'radialBarUnits'>
>;

import React from 'react';
import {
  RadialBarCtx,
  RadialBarSweepParams,
  WithOverridableCtx,
} from '../utils';

export interface RadialBarSweepProps
  extends RadialBarSweepParams,
    WithOverridableCtx<Pick<RadialBarCtx, 'radialBar' | 'radialBarScale'>>,
    Omit<React.SVGProps<SVGPathElement>, 'from' | 'to' | 'radius'> {}

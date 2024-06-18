import React from 'react';
import {
  RadialBarCircleParams,
  RadialBarCtx,
  WithOverridableCtx,
} from '../utils';

export interface RadialBarCircleProps
  extends RadialBarCircleParams,
    WithOverridableCtx<Pick<RadialBarCtx, 'radialBar' | 'radialBarScale'>>,
    Omit<React.SVGProps<SVGCircleElement>, 'radius'> {}

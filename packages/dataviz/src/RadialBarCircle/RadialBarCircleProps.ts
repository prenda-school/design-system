import React from 'react';
import {
  RadialBarCircleParams,
  RadialBarCtx,
  WithOverridableCtx,
} from '../utils';

export interface RadialBarCircleElement extends SVGCircleElement {}

export interface RadialBarCircleProps
  extends RadialBarCircleParams,
    WithOverridableCtx<Pick<RadialBarCtx, 'radialBar' | 'radialBarScale'>>,
    Omit<React.SVGProps<RadialBarCircleElement>, 'radius'> {}

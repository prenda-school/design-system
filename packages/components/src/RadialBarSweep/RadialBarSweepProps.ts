import React from 'react';
import {
  RadialBarCtx,
  RadialBarSweepParams,
  WithOverridableCtx,
} from '../utils';

export interface RadialBarSweepElement extends SVGPathElement {}

export interface RadialBarSweepProps
  extends RadialBarSweepParams,
    WithOverridableCtx<Pick<RadialBarCtx, 'radialBar' | 'radialBarScale'>>,
    Omit<React.SVGProps<RadialBarSweepElement>, 'from' | 'to' | 'radius'> {}

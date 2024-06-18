import React from 'react';
import {
  RadialBarCtx,
  RadialBarSegmentsSweepParams,
  WithOverridableCtx,
} from '../utils';

export interface RadialBarSegmentsSweepElement extends SVGPathElement {}

export interface RadialBarSegmentsSweepProps
  extends RadialBarSegmentsSweepParams,
    WithOverridableCtx<
      Pick<RadialBarCtx, 'radialBar' | 'radialBarScale' | 'radialBarSegments'>
    >,
    Omit<React.SVGProps<RadialBarSegmentsSweepElement>, 'from' | 'to'> {}

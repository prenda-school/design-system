import React from 'react';
import { ChartParams } from './useChart';

export interface ChartElement extends SVGSVGElement {}

export interface ChartProps
  extends ChartParams,
    Omit<React.SVGProps<ChartElement>, 'width' | 'height'> {}

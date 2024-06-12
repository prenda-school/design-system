import React from 'react';
import { BarLabelParams, BarParams, BarScaleParams } from '../utils';

export interface BarLabelProps
  extends Omit<
      React.SVGTextElementAttributes<SVGTextElement>,
      'offset' | 'dy' | 'dx' | 'orientation' | 'direction'
    >,
    Partial<BarScaleParams>,
    Partial<BarParams>,
    BarLabelParams {
  children?: React.ReactNode;
}

import React from 'react';
import { BarScaleParams, BarUnitLabelParams } from '../utils';

export interface BarUnitLabelProps
  extends Omit<React.SVGTextElementAttributes<SVGTextElement>, 'offset'>,
    Partial<BarScaleParams>,
    BarUnitLabelParams {
  children: React.ReactNode;
}

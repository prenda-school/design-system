import React from 'react';
import { BarParams, BarScaleParams, BarUnitLabelParams } from '../utils';

export interface BarUnitLabelProps
  extends Omit<React.SVGTextElementAttributes<SVGTextElement>, 'offset'>,
    Partial<BarScaleParams>,
    Partial<Pick<BarParams, 'thickness'>>,
    BarUnitLabelParams {
  children: React.ReactNode;
}

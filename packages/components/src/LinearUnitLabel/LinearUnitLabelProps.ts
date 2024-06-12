import React from 'react';
import { LinearScaleParams, LinearUnitLabelParams } from '../utils';

export interface LinearUnitLabelProps
  extends Omit<React.SVGTextElementAttributes<SVGTextElement>, 'offset'>,
    Partial<LinearScaleParams>,
    LinearUnitLabelParams {
  children?: React.ReactNode;
}

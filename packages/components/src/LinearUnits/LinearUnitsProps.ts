import React from 'react';
import { LinearScaleParams, LinearUnitsParams } from '../utils';

export interface LinearUnitsProps
  extends Partial<LinearScaleParams>,
    LinearUnitsParams {
  children: React.ReactNode;
}

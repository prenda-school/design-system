import React from 'react';
import { BarParams, BarScaleParams, BarUnitsParams } from '../utils';

export interface BarUnitsProps
  extends Partial<BarScaleParams>,
    Partial<Pick<BarParams, 'thickness'>>,
    BarUnitsParams {
  children?: React.ReactNode;
}

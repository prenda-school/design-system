import React from 'react';
import {
  LinearCtx,
  LinearUnitsParams,
  WithCtx,
  WithOverridableCtx,
} from '../utils';

export interface LinearUnitsProps
  extends LinearUnitsParams,
    WithOverridableCtx<Pick<LinearCtx, 'linearScale'>> {
  children?: React.ReactNode;
}

export type LinearUnitsChildProps = WithCtx<
  Pick<LinearCtx, 'linearScale' | 'linearUnits'>
>;

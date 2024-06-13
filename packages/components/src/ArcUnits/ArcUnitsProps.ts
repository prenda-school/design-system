import React from 'react';
import { ArcCtx, ArcUnitsParams, WithCtx, WithOverridableCtx } from '../utils';

export interface ArcUnitsProps
  extends ArcUnitsParams,
    WithOverridableCtx<Pick<ArcCtx, 'arc' | 'arcScale'>> {
  children?: React.ReactNode;
}

export type ArcUnitsChildProps = WithCtx<
  Pick<ArcCtx, 'arc' | 'arcScale' | 'arcUnits'>
>;

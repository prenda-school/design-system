import React from 'react';
import { ArcCtx, ArcUnitLabelParams, WithOverridableCtx } from '../utils';

export interface ArcUnitLabelProps
  extends ArcUnitLabelParams,
    WithOverridableCtx<Pick<ArcCtx, 'arc' | 'arcScale' | 'arcUnits'>>,
    Omit<React.SVGTextElementAttributes<SVGTextElement>, 'offset'> {}

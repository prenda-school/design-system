import React from 'react';
import { ArcCircleParams, ArcCtx, WithOverridableCtx } from '../utils';

export interface ArcCircleProps
  extends ArcCircleParams,
    WithOverridableCtx<Pick<ArcCtx, 'arc' | 'arcScale'>>,
    Omit<React.SVGProps<SVGCircleElement>, 'radius'> {}

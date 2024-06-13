import React from 'react';
import { ArcCtx, ArcSweepParams, WithOverridableCtx } from '../utils';

export interface ArcSweepProps
  extends ArcSweepParams,
    WithOverridableCtx<Pick<ArcCtx, 'arc' | 'arcScale'>>,
    Omit<React.SVGProps<SVGPathElement>, 'from' | 'to' | 'radius'> {}

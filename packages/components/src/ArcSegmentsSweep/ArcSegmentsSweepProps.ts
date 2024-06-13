import React from 'react';
import { ArcCtx, ArcSegmentsSweepParams, WithOverridableCtx } from '../utils';

export interface ArcSegmentsSweepProps
  extends ArcSegmentsSweepParams,
    WithOverridableCtx<Pick<ArcCtx, 'arc' | 'arcScale' | 'arcSegments'>>,
    Omit<React.SVGProps<SVGPathElement>, 'from' | 'to'> {}

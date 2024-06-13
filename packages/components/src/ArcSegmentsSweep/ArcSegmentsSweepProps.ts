import React from 'react';
import { ArcCtx, ArcSegmentsSweepParams, WithOverridableCtx } from '../utils';

export interface ArcSegmentsSweepProps
  extends ArcSegmentsSweepParams,
    WithOverridableCtx<Pick<ArcCtx, 'arc' | 'arcScale' | 'arcSegments'>> {
  renderProps?:
    | React.SVGProps<SVGPathElement>
    | ((props: { d: string }, index: number) => React.SVGProps<SVGPathElement>);
}

import { ReactNode } from 'react';
import {
  RadialBarCtx,
  RadialBarSegmentsParams,
  WithCtx,
  WithOverridableCtx,
} from '../utils';

export interface RadialBarSegmentsProps
  extends RadialBarSegmentsParams,
    WithOverridableCtx<Pick<RadialBarCtx, 'radialBar' | 'radialBarScale'>> {
  children?: ReactNode;
}

export type RadialBarSegmentsChildProps = WithCtx<
  Pick<RadialBarCtx, 'radialBar' | 'radialBarScale' | 'radialBarSegments'>
>;

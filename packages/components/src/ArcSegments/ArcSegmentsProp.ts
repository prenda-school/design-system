import { ReactNode } from 'react';
import {
  ArcCtx,
  ArcSegmentsParams,
  WithCtx,
  WithOverridableCtx,
} from '../utils';

export interface ArcSegmentsProps
  extends ArcSegmentsParams,
    WithOverridableCtx<Pick<ArcCtx, 'arc' | 'arcScale'>> {
  children?: ReactNode;
}

export type ArcSegmentsChildProps = WithCtx<
  Pick<ArcCtx, 'arc' | 'arcScale' | 'arcSegments'>
>;

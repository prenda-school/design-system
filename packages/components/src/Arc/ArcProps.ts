import { ReactNode } from 'react';
import { ArcCtx, ArcParams, WithCtx, WithOverridableCtx } from '../utils';

export interface ArcProps
  extends ArcParams,
    WithOverridableCtx<Pick<ArcCtx, 'arcScale'>> {
  children?: ReactNode;
}

export type ArcChildProps = WithCtx<Pick<ArcCtx, 'arc' | 'arcScale'>>;

import { ReactNode } from 'react';
import { BarCtx, BarParams, WithCtx, WithOverridableCtx } from '../utils';

export interface BarProps
  extends BarParams,
    WithOverridableCtx<Pick<BarCtx, 'barScale'>> {
  children?: ReactNode;
}

export type BarChildProps = WithCtx<Pick<BarCtx, 'bar' | 'barScale'>>;

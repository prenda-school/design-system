import { ReactNode } from 'react';
import {
  RadialBarCtx,
  RadialBarParams,
  WithCtx,
  WithOverridableCtx,
} from '../utils';

export interface RadialBarProps
  extends RadialBarParams,
    WithOverridableCtx<Pick<RadialBarCtx, 'radialBarScale'>> {
  children?: ReactNode;
}

export type RadialBarChildProps = WithCtx<
  Pick<RadialBarCtx, 'radialBar' | 'radialBarScale'>
>;

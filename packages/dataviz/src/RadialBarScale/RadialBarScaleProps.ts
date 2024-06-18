import { ReactNode } from 'react';
import { RadialBarCtx, RadialBarScaleParams, WithCtx } from '../utils';

export interface RadialBarScaleProps extends RadialBarScaleParams {
  children?: ReactNode;
}

export type RadialBarScaleChildProps = WithCtx<
  Pick<RadialBarCtx, 'radialBarScale'>
>;

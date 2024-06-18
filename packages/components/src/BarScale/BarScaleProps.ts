import React from 'react';
import { BarCtx, BarScaleParams, WithCtx } from '../utils';

export interface BarScaleProps extends BarScaleParams {
  children?: React.ReactNode;
}

export type BarScaleChildProps = WithCtx<Pick<BarCtx, 'barScale'>>;

import { ReactNode } from 'react';
import { ArcCtx, ArcScaleParams, WithCtx } from '../utils';

export interface ArcScaleProps extends ArcScaleParams {
  children?: ReactNode;
}

export type ArcScaleChildProps = WithCtx<Pick<ArcCtx, 'arcScale'>>;

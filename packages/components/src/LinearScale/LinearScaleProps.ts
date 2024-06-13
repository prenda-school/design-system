import React from 'react';
import { LinearScaleParams } from '../utils/linear-scale';
import { LinearCtx, WithCtx } from '../utils';

export interface LinearScaleProps extends LinearScaleParams {
  children?: React.ReactNode;
}

export type LinearScaleChildProps = WithCtx<Pick<LinearCtx, 'linearScale'>>;

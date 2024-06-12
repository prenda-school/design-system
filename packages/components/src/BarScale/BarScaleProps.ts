import React from 'react';
import { BarScaleParams } from '../utils';

export interface BarScaleProps extends BarScaleParams {
  children?: React.ReactNode;
}

export type BarScaleChildProps = {
  ctx: {
    barScale: BarScaleParams;
  };
};

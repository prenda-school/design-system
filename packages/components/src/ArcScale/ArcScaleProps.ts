import { ReactNode } from 'react';
import { ArcScaleParams } from '../utils';

export interface ArcScaleProps extends ArcScaleParams {
  children?: ReactNode;
}

export type ArcScaleChildProps = {
  ctx: {
    arcScale: ArcScaleParams;
  };
};

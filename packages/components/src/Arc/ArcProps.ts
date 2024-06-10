import { ReactNode } from 'react';
import { ArcParams, ArcScaleParams } from '../utils';

export interface ArcProps extends Partial<ArcScaleParams>, ArcParams {
  children?: ReactNode;
}

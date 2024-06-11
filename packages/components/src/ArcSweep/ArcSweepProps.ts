import React from 'react';
import { ArcParams, ArcScaleParams, ArcSweepParams } from '../utils';

export interface ArcSweepProps
  extends Partial<ArcScaleParams>,
    Partial<Omit<ArcParams, 'cornerRadius'>>,
    ArcSweepParams,
    Omit<React.SVGProps<SVGPathElement>, 'from' | 'to' | 'radius'> {}

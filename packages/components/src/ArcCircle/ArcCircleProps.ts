import React from 'react';
import { ArcCircleParams, ArcParams, ArcScaleParams } from '../utils';

export interface ArcCircleProps
  extends Partial<ArcScaleParams>,
    Partial<ArcParams>,
    ArcCircleParams,
    Omit<React.SVGProps<SVGCircleElement>, 'radius'> {}

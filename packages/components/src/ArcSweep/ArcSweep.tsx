import React from 'react';
import { ArcSweepProps } from './ArcSweepProps';
import { generateArcSweep } from '../utils';

export type ArcSweepRef = SVGPathElement;

export const ArcSweep = React.forwardRef<ArcSweepRef, ArcSweepProps>(
  (props, ref) => {
    const { from, to, cornerRadius, arc, ...other } = props;

    if (arc === undefined) {
      throw Error(
        'Oops! `ArcSweep` received `arc: undefined`. Did you mean to either (1) render as a child of `Arc`? or (2) pass `arc` from `generateArc`?'
      );
    }

    const { d } = generateArcSweep({
      from,
      to,
      cornerRadius,
      arc,
    });

    return <path ref={ref} d={d} {...other} />;
  }
);

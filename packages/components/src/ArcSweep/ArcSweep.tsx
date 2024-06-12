import React from 'react';
import { ArcSweepProps } from './ArcSweepProps';
import { drawArcSweep } from '../utils';

export type ArcSweepRef = SVGPathElement;

export const ArcSweep = React.forwardRef<ArcSweepRef, ArcSweepProps>(
  (props, ref) => {
    const { from, to, cornerRadius, ctx, ...other } = props;

    if (ctx === undefined) {
      throw Error(
        'Oops! `ArcSweep` received `ctx: undefined`. Did you mean to either (1) render as a child of `Arc`? or (2) set `ctx`?'
      );
    }

    const { d } = drawArcSweep({
      from,
      to,
      cornerRadius,
      arc: ctx.arc,
      arcScale: ctx.arcScale,
    });

    return <path ref={ref} d={d} {...other} />;
  }
);

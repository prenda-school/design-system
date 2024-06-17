import React from 'react';
import { ArcSweepProps } from './ArcSweepProps';
import { drawArcSweep, mergeCtxOverrides } from '../utils';

export type ArcSweepElement = SVGPathElement;

export const ArcSweep = React.forwardRef<ArcSweepElement, ArcSweepProps>(
  function ArcSweep(props, ref) {
    const { from, to, cornerRadius, ctx: ctxProp, overrides, ...other } = props;

    if (ctxProp === undefined) {
      throw Error(
        'Oops! `ArcSweep` received `ctx: undefined`. Did you mean to either (1) render as a child of `Arc`? or (2) set `ctx`?'
      );
    }

    const ctx = mergeCtxOverrides(ctxProp, overrides);

    const { d } = drawArcSweep({
      arc: ctx.arc,
      scale: ctx.arcScale,
      sweep: {
        from,
        to,
        cornerRadius,
      },
    });

    return <path ref={ref} d={d} {...other} />;
  }
);

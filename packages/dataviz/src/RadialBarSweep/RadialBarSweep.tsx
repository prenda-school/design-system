import React from 'react';
import {
  RadialBarSweepElement,
  RadialBarSweepProps,
} from './RadialBarSweepProps';
import { drawRadialBarSweep, mergeCtxOverrides } from '../utils';

export const RadialBarSweep = React.forwardRef<
  RadialBarSweepElement,
  RadialBarSweepProps
>(function RadialBarSweep(props, ref) {
  const { from, to, cornerRadius, ctx: ctxProp, overrides, ...other } = props;

  if (ctxProp === undefined) {
    throw Error(
      'Oops! `RadialBarSweep` received `ctx: undefined`. Did you mean to either (1) render as a child of `RadialBar`? or (2) set `ctx`?'
    );
  }

  const ctx = mergeCtxOverrides(ctxProp, overrides);

  const { d } = drawRadialBarSweep({
    bar: ctx.radialBar,
    scale: ctx.radialBarScale,
    sweep: {
      from,
      to,
      cornerRadius,
    },
  });

  return <path ref={ref} d={d} {...other} />;
});

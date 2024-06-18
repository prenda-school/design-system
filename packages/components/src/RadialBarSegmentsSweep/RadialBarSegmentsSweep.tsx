import React from 'react';
import { RadialBarSegmentsSweepProps } from './RadialBarSegmentsSweepProps';
import { drawRadialBarSegmentsSweep, mergeCtxOverrides } from '../utils';

export interface RadialBarSegmentsSweepElement extends SVGPathElement {}

export const RadialBarSegmentsSweep = React.forwardRef<
  RadialBarSegmentsSweepElement,
  RadialBarSegmentsSweepProps
>(function RadialBarSegmentsSweep(props, ref) {
  const { from, to, cornerRadius, ctx: ctxProp, overrides, ...other } = props;

  if (ctxProp === undefined) {
    throw Error(
      'Oops! `RadialBarSegmentsSweep` received `ctx: undefined`. Did you mean to either (1) render as a child of `RadialBarSegments`? or (2) specify `ctx` explicitly?'
    );
  }

  const ctx = mergeCtxOverrides(ctxProp, overrides);

  const { d } = drawRadialBarSegmentsSweep({
    bar: ctx.radialBar,
    scale: ctx.radialBarScale,
    segments: ctx.radialBarSegments,
    sweep: {
      from,
      to,
      cornerRadius,
    },
  });

  return <path d={d} ref={ref} {...other} />;
});

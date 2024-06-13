import React from 'react';
import { ArcSegmentsSweepProps } from './ArcSegmentsSweepProps';
import { drawArcSegmentsSweep, mergeCtxOverrides } from '../utils';

export type ArcSegmentsSweepRef = SVGPathElement;

export const ArcSegmentsSweep = React.forwardRef<
  ArcSegmentsSweepRef,
  ArcSegmentsSweepProps
>((props, ref) => {
  const { from, to, cornerRadius, ctx: ctxProp, overrides, ...other } = props;

  if (ctxProp === undefined) {
    throw Error(
      'Oops! `ArcSegmentsSweep` received `ctx: undefined`. Did you mean to either (1) render as a child of `ArcSegments`? or (2) specify `ctx` explicitly?'
    );
  }

  const ctx = mergeCtxOverrides(ctxProp, overrides);

  const { d } = drawArcSegmentsSweep({
    arc: ctx.arc,
    scale: ctx.arcScale,
    segments: ctx.arcSegments,
    sweep: {
      from,
      to,
      cornerRadius,
    },
  });

  return <path d={d} ref={ref} {...other} />;
});

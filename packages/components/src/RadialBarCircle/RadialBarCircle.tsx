import React from 'react';
import { RadialBarCircleProps } from './RadialBarCircleProps';
import { drawRadialBarCircle, mergeCtxOverrides } from '../utils';

export interface RadialBarCircleElement extends SVGCircleElement {}

export const RadialBarCircle = React.forwardRef<
  RadialBarCircleElement,
  RadialBarCircleProps
>(function RadialBarCircle(props, ref) {
  const { at, radiusRatio, ctx: ctxProp, overrides, ...other } = props;

  if (ctxProp === undefined) {
    throw Error(
      'Oops! `RadialBarCircle` received `ctx: undefined`. Did you mean to either (1) render as a child of `RadialBar`? or (2) set `ctx`?'
    );
  }

  const ctx = mergeCtxOverrides(ctxProp, overrides);

  const { r, cx, cy } = drawRadialBarCircle({
    bar: ctx.radialBar,
    circle: {
      at,
      radiusRatio,
    },
    scale: ctx.radialBarScale,
  });

  return <circle ref={ref} r={r} cx={cx} cy={cy} {...other} />;
});

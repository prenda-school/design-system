import React from 'react';
import { RadialBarUnitLabelProps } from './RadialBarUnitLabelProps';
import { drawRadialBarUnitLabel, mergeCtxOverrides } from '../utils';

export interface RadialBarUnitLabelElement extends SVGTextElement {}

export const RadialBarUnitLabel = React.forwardRef<
  RadialBarUnitLabelElement,
  RadialBarUnitLabelProps
>(function RadialBarUnitLabel(props, ref) {
  const { at, ctx: ctxProp, offset, overrides, position, ...other } = props;

  if (ctxProp === undefined) {
    throw Error(
      'Oops! `RadialBarUnitLabel` received `ctx: undefined`. Did you mean to either (1) render as a child of `RadialBar`? or (2) specify `ctx` explicitly?'
    );
  }

  const ctx = mergeCtxOverrides(ctxProp, overrides);

  const { x, y, textAnchor, dominantBaseline } = drawRadialBarUnitLabel({
    radialBar: ctx.radialBar,
    scale: ctx.radialBarScale,
    unitLabel: {
      at,
      offset,
      position,
    },
    units: ctx.radialBarUnits,
  });

  return (
    <text
      ref={ref}
      x={x}
      y={y}
      textAnchor={textAnchor}
      dominantBaseline={dominantBaseline}
      {...other}
    />
  );
});

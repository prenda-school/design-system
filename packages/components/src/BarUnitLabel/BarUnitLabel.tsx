import React from 'react';
import { BarUnitLabelProps } from './BarUnitLabelProps';
import { drawBarUnitLabel, mergeCtxOverrides } from '../utils';

export type BarUnitLabelRef = SVGTextElement;

export const BarUnitLabel = React.forwardRef<
  BarUnitLabelRef,
  BarUnitLabelProps
>((props, ref) => {
  const { at, offset, position, ctx: ctxProp, overrides, ...other } = props;

  if (ctxProp === undefined) {
    throw Error(
      'Oops! `BarUnitLabel` received `ctx: undefined`. Did you mean to either (1) render as a child of `BarUnits`? or (2) specify `ctx` explicitly?'
    );
  }

  const ctx = mergeCtxOverrides(ctxProp, overrides);

  const { x, y, textAnchor, dominantBaseline } = drawBarUnitLabel({
    bar: {
      thickness: ctx.bar.thickness,
    },
    scale: ctx.barScale,
    units: ctx.barUnits,
    unitLabel: {
      at,
      offset,
      position,
    },
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

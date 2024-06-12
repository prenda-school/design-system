import React from 'react';
import { LinearUnitLabelProps } from './LinearUnitLabelProps';
import { drawLinearUnitLabel } from '../utils';

export type LinearUnitLabelRef = SVGTextElement;

export const LinearUnitLabel = React.forwardRef<
  LinearUnitLabelRef,
  LinearUnitLabelProps
>((props, ref) => {
  const { at, offset, ctx, ...other } = props;

  if (ctx === undefined) {
    throw Error(
      'Oops! `LinearUnits` received `ctx: undefined`. Did you mean to either (1) render as a child of `LinearScale`? or (2) specify `ctx` explicitly?'
    );
  }

  const { x, y, textAnchor, dominantBaseline } = drawLinearUnitLabel({
    scale: ctx.linearScale,
    units: ctx.linearUnits,
    unitLabel: {
      at,
      offset,
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

import React from 'react';
import { ArcUnitLabelProps } from './ArcUnitLabelProps';
import { drawArcUnitLabel } from '../utils';

export type ArcUnitLabelRef = SVGTextElement;

export const ArcUnitLabel = React.forwardRef<
  ArcUnitLabelRef,
  ArcUnitLabelProps
>((props, ref) => {
  const { at, ctx, offset, position, ...other } = props;

  if (ctx === undefined) {
    throw Error(
      'Oops! `ArcUnitLabel` received `ctx: undefined`. Did you mean to either (1) render as a child of `Arc`? or (2) specify `ctx` explicitly?'
    );
  }

  const { x, y, textAnchor, dominantBaseline } = drawArcUnitLabel({
    at,
    offset,
    position,
    arc: ctx.arc,
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

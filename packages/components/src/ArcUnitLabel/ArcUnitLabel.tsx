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
    offset: offset ?? ctx.arcUnits.offset,
    position: position ?? ctx.arcUnits.position,
    arc: {
      angle: {
        min: ctx.arcScale.angleMin,
        max: ctx.arcScale.angleMax,
      },
      value: {
        min: ctx.arcScale.valueMin,
        max: ctx.arcScale.valueMax,
      },
      radius: ctx.arc.radius,
      ratio: ctx.arc.ratio,
      cornerRadius: ctx.arc.cornerRadius,
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

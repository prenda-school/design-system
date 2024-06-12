import React from 'react';
import { BarUnitLabelProps } from './BarUnitLabelProps';
import { drawBarUnitLabel } from '../utils';

export type BarUnitLabelRef = SVGTextElement;

export const BarUnitLabel = React.forwardRef<
  BarUnitLabelRef,
  BarUnitLabelProps
>((props, ref) => {
  const { at, offset, position, ctx, ...other } = props;

  if (ctx === undefined) {
    throw Error(
      'Oops! `BarUnitLabel` received `ctx: undefined`. Did you mean to either (1) render as a child of `BarUnits`? or (2) specify `ctx` explicitly?'
    );
  }

  const { x, y, textAnchor, dominantBaseline } = drawBarUnitLabel({
    at,
    offset: offset ?? ctx.barUnits.offset,
    position: position ?? ctx.barUnits.position,
    valueMax: ctx.barScale.valueMax,
    valueMin: ctx.barScale.valueMin,
    lengthMax: ctx.barScale.lengthMax,
    lengthMin: ctx.barScale.lengthMin,
    thickness: ctx.bar.thickness,
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

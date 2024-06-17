import React from 'react';
import { ArcUnitLabelProps } from './ArcUnitLabelProps';
import { drawArcUnitLabel, mergeCtxOverrides } from '../utils';

export type ArcUnitLabelElement = SVGTextElement;

export const ArcUnitLabel = React.forwardRef<
  ArcUnitLabelElement,
  ArcUnitLabelProps
>(function ArcUnitLabel(props, ref) {
  const { at, ctx: ctxProp, offset, overrides, position, ...other } = props;

  if (ctxProp === undefined) {
    throw Error(
      'Oops! `ArcUnitLabel` received `ctx: undefined`. Did you mean to either (1) render as a child of `Arc`? or (2) specify `ctx` explicitly?'
    );
  }

  const ctx = mergeCtxOverrides(ctxProp, overrides);

  const { x, y, textAnchor, dominantBaseline } = drawArcUnitLabel({
    arc: ctx.arc,
    scale: ctx.arcScale,
    unitLabel: {
      at,
      offset,
      position,
    },
    units: ctx.arcUnits,
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

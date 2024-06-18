import React from 'react';
import { LinearUnitLabelProps } from './LinearUnitLabelProps';
import { drawLinearUnitLabel, mergeCtxOverrides } from '../utils';

export interface LinearUnitLabelElement extends SVGTextElement {}

export const LinearUnitLabel = React.forwardRef<
  LinearUnitLabelElement,
  LinearUnitLabelProps
>(function LinearUnitLabel(props, ref) {
  const {
    at,
    dominantBaseline: dominantBaselineProp,
    offset,
    ctx: ctxProp,
    overrides,
    ...other
  } = props;

  if (ctxProp === undefined) {
    throw Error(
      'Oops! `LinearUnits` received `ctx: undefined`. Did you mean to either (1) render as a child of `LinearScale`? or (2) specify `ctx` explicitly?'
    );
  }

  const ctx = mergeCtxOverrides(ctxProp, overrides);

  const { x, y, textAnchor, dominantBaseline } = drawLinearUnitLabel({
    scale: ctx.linearScale,
    units: ctx.linearUnits,
    unitLabel: {
      at,
      dominantBaseline: dominantBaselineProp,
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

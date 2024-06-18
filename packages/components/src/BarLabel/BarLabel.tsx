import React from 'react';
import { BarLabelProps } from './BarLabelProps';
import { drawBarLabel, mergeCtxOverrides } from '../utils';

export interface BarLabelElement extends SVGTextElement {}

export const BarLabel = React.forwardRef<BarLabelElement, BarLabelProps>(
  function BarLabel(props, ref) {
    const { dy, offset, position, ctx: ctxProp, overrides, ...other } = props;

    if (ctxProp === undefined) {
      throw Error(
        'Oops! `BarLabel` received `ctx: undefined`. Did you mean to either (1) render as a child of `Bar`? or (2) specify `ctx` explicitly?'
      );
    }

    const ctx = mergeCtxOverrides(ctxProp, overrides);

    const { y, textAnchor, dominantBaseline } = drawBarLabel({
      label: {
        dy,
        offset,
        position,
      },
      bar: ctx.bar,
    });

    return (
      <text
        dominantBaseline={dominantBaseline}
        ref={ref}
        textAnchor={textAnchor}
        y={y}
        {...other}
      />
    );
  }
);

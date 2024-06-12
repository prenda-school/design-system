import React from 'react';
import { BarLabelProps } from './BarLabelProps';
import { drawBarLabel } from '../utils';

export type BarLabelRef = SVGTextElement;

export const BarLabel = React.forwardRef<BarLabelRef, BarLabelProps>(
  (props, ref) => {
    const { dy, offset, position, ctx, ...other } = props;

    if (ctx === undefined) {
      throw Error(
        'Oops! `BarLabel` received `ctx: undefined`. Did you mean to either (1) render as a child of `Bar`? or (2) specify `ctx` explicitly?'
      );
    }

    const { y, textAnchor, dominantBaseline } = drawBarLabel({
      dy,
      offset,
      position,
      thickness: ctx.bar.thickness,
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

import React from 'react';
import { BarFillProps } from './BarFillProps';
import { drawBarFill } from '../utils';

export type BarFillRef = SVGPathElement;

export const BarFill = React.forwardRef<BarFillRef, BarFillProps>(
  (props, ref) => {
    const { to, cornerRadius, ctx, ...other } = props;

    if (ctx === undefined) {
      throw Error(
        'Oops! `BarFill` received `ctx: undefined`. Did you mean to either (1) render as a child of `Bar`? or (2) specify `ctx` explicitly?'
      );
    }

    const { d } = drawBarFill({
      bar: ctx.bar,
      scale: ctx.barScale,
      fill: {
        to,
        cornerRadius,
      },
    });

    return <path ref={ref} d={d} {...other} />;
  }
);

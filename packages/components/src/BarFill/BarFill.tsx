import React from 'react';
import { BarFillProps } from './BarFillProps';
import { drawBar } from '../utils';

export type BarFillRef = SVGPathElement;

export const BarFill = React.forwardRef<BarFillRef, BarFillProps>(
  (props, ref) => {
    const { to, cornerRadius, ctx, ...other } = props;

    if (ctx === undefined) {
      throw Error(
        'Oops! `BarFill` received `ctx: undefined`. Did you mean to either (1) render as a child of `Bar`? or (2) specify `ctx` explicitly?'
      );
    }

    const d = drawBar({
      valueMin: ctx.barScale.valueMin,
      valueMax: ctx.barScale.valueMax,
      to,
      lengthMin: ctx.barScale.lengthMin,
      lengthMax: ctx.barScale.lengthMax,
      thickness: ctx.bar.thickness,
      cornerRadius: cornerRadius ?? ctx.bar.cornerRadius,
      orientation: ctx.bar.orientation,
      direction: ctx.bar.direction,
      dx: ctx.bar.dx,
      dy: ctx.bar.dy,
      borderWidth: ctx.bar.borderWidth,
    });

    return <path ref={ref} d={d} {...other} />;
  }
);

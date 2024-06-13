import React from 'react';
import { BarFillProps } from './BarFillProps';
import { drawBarFill, mergeCtxOverrides } from '../utils';

export type BarFillRef = SVGPathElement;

export const BarFill = React.forwardRef<BarFillRef, BarFillProps>(
  (props, ref) => {
    const {
      to,
      cornerRadius,
      borderWidth,
      ctx: ctxProp,
      overrides,
      ...other
    } = props;

    if (ctxProp === undefined) {
      throw Error(
        'Oops! `BarFill` received `ctx: undefined`. Did you mean to either (1) render as a child of `Bar`? or (2) specify `ctx` explicitly?'
      );
    }

    const ctx = mergeCtxOverrides(ctxProp, overrides);

    const { d } = drawBarFill({
      bar: ctx.bar,
      scale: ctx.barScale,
      fill: {
        to,
        cornerRadius,
        borderWidth,
      },
    });

    return <path ref={ref} d={d} {...other} />;
  }
);

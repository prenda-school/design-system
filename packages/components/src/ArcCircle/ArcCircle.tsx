import React from 'react';
import { ArcCircleProps } from './ArcCircleProps';
import { drawArcCircle } from '../utils';

export type ArcCircleRef = SVGCircleElement;

export const ArcCircle = React.forwardRef<ArcCircleRef, ArcCircleProps>(
  (props, ref) => {
    const { at, radiusRatio, ctx, ...other } = props;

    if (ctx === undefined) {
      throw Error(
        'Oops! `ArcCircle` received `ctx: undefined`. Did you mean to either (1) render as a child of `Arc`? or (2) set `ctx`?'
      );
    }

    const { r, cx, cy } = drawArcCircle({
      arc: ctx.arc,
      circle: {
        at,
        radiusRatio,
      },
      scale: ctx.arcScale,
    });

    return <circle ref={ref} r={r} cx={cx} cy={cy} {...other} />;
  }
);

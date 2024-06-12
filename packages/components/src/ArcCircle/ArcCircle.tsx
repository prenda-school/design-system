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
      at,
      radiusRatio,
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

    return <circle ref={ref} r={r} cx={cx} cy={cy} {...other} />;
  }
);

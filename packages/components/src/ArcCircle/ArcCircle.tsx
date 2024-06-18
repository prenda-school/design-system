import React from 'react';
import { ArcCircleProps } from './ArcCircleProps';
import { drawArcCircle, mergeCtxOverrides } from '../utils';

export interface ArcCircleElement extends SVGCircleElement {}

export const ArcCircle = React.forwardRef<ArcCircleElement, ArcCircleProps>(
  function ArcCircle(props, ref) {
    const { at, radiusRatio, ctx: ctxProp, overrides, ...other } = props;

    if (ctxProp === undefined) {
      throw Error(
        'Oops! `ArcCircle` received `ctx: undefined`. Did you mean to either (1) render as a child of `Arc`? or (2) set `ctx`?'
      );
    }

    const ctx = mergeCtxOverrides(ctxProp, overrides);

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

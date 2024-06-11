import React from 'react';
import { ArcCircleProps } from './ArcCircleProps';
import { drawArcCircle } from '../utils';

export type ArcCircleRef = SVGCircleElement;

export const ArcCircle = React.forwardRef<ArcCircleRef, ArcCircleProps>(
  (props, ref) => {
    const { at, radiusRatio, arc, ...other } = props;

    if (arc === undefined) {
      throw Error(
        'Oops! `ArcCircle` received `arc: undefined`. Did you mean to either (1) render as a child of `Arc`? or (2) pass `arc` from `generateArc`?'
      );
    }

    const { r, cx, cy } = drawArcCircle({
      at,
      radiusRatio,
      arc,
    });

    return <circle ref={ref} r={r} cx={cx} cy={cy} {...other} />;
  }
);

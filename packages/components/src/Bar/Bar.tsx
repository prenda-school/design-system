import React from 'react';
import { BarProps } from '.';
import { drawBar } from '../utils';

export type BarRef = SVGPathElement;

export const Bar = React.forwardRef<BarRef, BarProps>((props, ref) => {
  const {
    valueMin,
    valueMax,
    value,
    lengthMin,
    lengthMax,
    thickness,
    cornerRadius,
    orientation,
    direction,
    ...other
  } = props;

  const d = drawBar({
    valueMin,
    valueMax,
    value,
    lengthMin,
    lengthMax,
    thickness,
    cornerRadius,
    orientation,
    direction,
  });

  return <path ref={ref} d={d} {...other} />;
});

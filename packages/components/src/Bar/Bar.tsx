import React from 'react';
import { BarProps } from './BarProps';
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

  if (valueMin === undefined) {
    throw Error(getMissingPropMessage('valueMin'));
  }

  if (valueMax === undefined) {
    throw Error(getMissingPropMessage('valueMax'));
  }

  if (lengthMin === undefined) {
    throw Error(getMissingPropMessage('lengthMin'));
  }

  if (lengthMax === undefined) {
    throw Error(getMissingPropMessage('lengthMax'));
  }

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

const getMissingPropMessage = (propName: string) => {
  return `Oops! \`Bar\` received \`${propName}: undefined\`. Did you mean to either (1) render as a child of \`BarScale\`? or (2) set \`${propName}\`?`;
};

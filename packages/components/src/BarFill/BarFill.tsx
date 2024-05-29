import React from 'react';
import { BarFillProps } from './BarFillProps';
import { drawBar } from '../utils';

export type BarFillRef = SVGPathElement;

export const BarFill = React.forwardRef<BarFillRef, BarFillProps>(
  (props, ref) => {
    const {
      valueMin,
      valueMax,
      to,
      lengthMin,
      lengthMax,
      thickness,
      cornerRadius,
      orientation,
      direction,
      dx,
      dy,
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

    if (thickness === undefined) {
      throw Error(getMissingPropMessage('thickness'));
    }

    const d = drawBar({
      valueMin,
      valueMax,
      to,
      lengthMin,
      lengthMax,
      thickness,
      cornerRadius,
      orientation,
      direction,
      dx,
      dy,
    });

    return <path ref={ref} d={d} {...other} />;
  }
);

const getMissingPropMessage = (propName: string) => {
  return `Oops! \`BarFill\` received \`${propName}: undefined\`. Did you mean to either (1) render as a child of \`Bar\`? or (2) set \`${propName}\`?`;
};

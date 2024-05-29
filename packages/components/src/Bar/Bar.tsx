import React from 'react';
import { BarProps } from './BarProps';

export type BarRef = SVGPathElement;

export const Bar = React.forwardRef<BarRef, BarProps>((props, ref) => {
  const {
    valueMin,
    valueMax,
    lengthMin,
    lengthMax,
    thickness,
    cornerRadius,
    orientation,
    direction,
    dx,
    dy,
    children,
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

  return React.Children.map(children, (child) => {
    // @ts-expect-error TODO
    return React.cloneElement(child, {
      valueMin,
      valueMax,
      lengthMin,
      lengthMax,
      thickness,
      cornerRadius,
      orientation,
      direction,
      dx,
      dy,
    });
  });
});

const getMissingPropMessage = (propName: string) => {
  return `Oops! \`Bar\` received \`${propName}: undefined\`. Did you mean to either (1) render as a child of \`BarScale\`? or (2) set \`${propName}\`?`;
};

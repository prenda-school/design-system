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
    borderWidth,
    children,
  } = props;

  if (valueMin === undefined) {
    throw Error(getMissingPropMessage('valueMin'));
  }

  if (valueMax === undefined) {
    throw Error(getMissingPropMessage('valueMax'));
  }

  if (lengthMax === undefined) {
    throw Error(getMissingPropMessage('lengthMax'));
  }

  return React.Children.map(children, (child) => {
    if (React.isValidElement<Omit<BarProps, 'children'>>(child)) {
      return React.cloneElement(child, {
        lengthMax: child.props.lengthMax ?? lengthMax,
        lengthMin: child.props.lengthMin ?? lengthMin,
        valueMax: child.props.valueMax ?? valueMax,
        valueMin: child.props.valueMin ?? valueMin,
        thickness: child.props.thickness ?? thickness,
        cornerRadius: child.props.cornerRadius ?? cornerRadius,
        orientation: child.props.orientation ?? orientation,
        direction: child.props.direction ?? direction,
        dx: child.props.dx ?? dx,
        dy: child.props.dy ?? dy,
        borderWidth: child.props.borderWidth ?? borderWidth,
      });
    }

    return child;
  });
});

const getMissingPropMessage = (propName: string) => {
  return `Oops! \`Bar\` received \`${propName}: undefined\`. Did you mean to either (1) render as a child of \`BarScale\`? or (2) set \`${propName}\`?`;
};

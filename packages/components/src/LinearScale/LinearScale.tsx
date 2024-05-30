import React from 'react';
import { LinearScaleProps } from './LinearScaleProps';

export const LinearScale = (props: LinearScaleProps) => {
  const { children, lengthMax, lengthMin, valueMax, valueMin } = props;

  return React.Children.map(children, (child) => {
    if (React.isValidElement<Omit<LinearScaleProps, 'children'>>(child)) {
      return React.cloneElement(child, {
        lengthMax: child.props.lengthMax ?? lengthMax,
        lengthMin: child.props.lengthMin ?? lengthMin,
        valueMax: child.props.valueMax ?? valueMax,
        valueMin: child.props.valueMin ?? valueMin,
      });
    }

    return child;
  });
};

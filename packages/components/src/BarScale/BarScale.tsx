import React from 'react';
import { BarScaleProps } from './BarScaleProps';

export const BarScale = (props: BarScaleProps) => {
  const { children, lengthMax, lengthMin, valueMax, valueMin } = props;

  return React.Children.map(children, (child) => {
    if (React.isValidElement<Omit<BarScaleProps, 'children'>>(child)) {
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

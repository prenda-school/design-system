import React from 'react';
import { BarUnitsProps } from './BarUnitsProps';

export const BarUnits = (props: BarUnitsProps) => {
  const { children, dy, offset, ...other } = props;

  return React.Children.map(children, (child) => {
    if (React.isValidElement<Omit<BarUnitsProps, 'children'>>(child)) {
      return React.cloneElement(child, {
        dy: child.props.dy ?? dy,
        offset: child.props.offset ?? offset,
        ...other,
      });
    }

    return child;
  });
};

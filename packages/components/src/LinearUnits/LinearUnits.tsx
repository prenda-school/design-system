import React from 'react';
import { LinearUnitsProps } from './LinearUnitsProps';

export const LinearUnits = (props: LinearUnitsProps) => {
  const { children, dy, dominantBaseline, offset, ...other } = props;

  return React.Children.map(children, (child) => {
    if (React.isValidElement<Omit<LinearUnitsProps, 'children'>>(child)) {
      return React.cloneElement(child, {
        dy: child.props.dy ?? dy,
        dominantBaseline: child.props.dominantBaseline ?? dominantBaseline,
        offset: child.props.offset ?? offset,
        ...other,
      });
    }

    return child;
  });
};

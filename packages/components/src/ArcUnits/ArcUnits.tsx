import React from 'react';
import { ArcUnitsProps } from './ArcUnitsProps';

export const ArcUnits = (props: ArcUnitsProps) => {
  const { children, offset, ...other } = props;

  return React.Children.map(children, (child) => {
    if (React.isValidElement<Omit<ArcUnitsProps, 'children'>>(child)) {
      return React.cloneElement(child, {
        offset: child.props.offset ?? offset,
        ...other,
      });
    }

    return child;
  });
};

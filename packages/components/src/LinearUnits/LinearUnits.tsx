import React from 'react';
import { LinearUnitsProps } from './LinearUnitsProps';

export const LinearUnits = (props: LinearUnitsProps) => {
  const {
    children,
    dy,
    dominantBaseline,
    offset,
    valueMin,
    valueMax,
    lengthMin,
    lengthMax,
  } = props;

  return React.Children.map(children, (child) => {
    if (React.isValidElement<Omit<LinearUnitsProps, 'children'>>(child)) {
      return React.cloneElement(child, {
        dy: child.props.dy ?? dy,
        dominantBaseline: child.props.dominantBaseline ?? dominantBaseline,
        offset: child.props.offset ?? offset,
        valueMin: child.props.valueMin ?? valueMin,
        valueMax: child.props.valueMax ?? valueMax,
        lengthMin: child.props.lengthMin ?? lengthMin,
        lengthMax: child.props.lengthMax ?? lengthMax,
      });
    }

    return child;
  });
};

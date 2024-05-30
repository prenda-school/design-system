import React from 'react';
import { BarUnitsProps } from './BarUnitsProps';

export const BarUnits = (props: BarUnitsProps) => {
  const {
    children,
    dy,
    offset,
    thickness,
    valueMin,
    valueMax,
    lengthMin,
    lengthMax,
  } = props;

  return React.Children.map(children, (child) => {
    if (React.isValidElement<Omit<BarUnitsProps, 'children'>>(child)) {
      return React.cloneElement(child, {
        dy: child.props.dy ?? dy,
        offset: child.props.offset ?? offset,
        thickness: child.props.thickness ?? thickness,
        valueMin: child.props.valueMin ?? valueMin,
        valueMax: child.props.valueMax ?? valueMax,
        lengthMin: child.props.lengthMin ?? lengthMin,
        lengthMax: child.props.lengthMax ?? lengthMax,
      });
    }

    return child;
  });
};

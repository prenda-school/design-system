import React from 'react';
import { ArcScaleProps } from './ArcScaleProps';

export const ArcScale = (props: ArcScaleProps) => {
  const { angleMax, angleMin, valueMax, valueMin, children } = props;

  return React.Children.map(children, (child) => {
    if (React.isValidElement<Omit<ArcScaleProps, 'children'>>(child)) {
      return React.cloneElement(child, {
        angleMax: child.props.angleMax ?? angleMax,
        angleMin: child.props.angleMin ?? angleMin,
        valueMax: child.props.valueMax ?? valueMax,
        valueMin: child.props.valueMin ?? valueMin,
      });
    }

    return child;
  });
};

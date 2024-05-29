import React from 'react';
import { BarScaleProps } from './BarScaleProps';

export const BarScale = (props: BarScaleProps) => {
  const { children, lengthMax, lengthMin, valueMax, valueMin } = props;

  return React.Children.map(children, (child) => {
    // @ts-expect-error TODO
    return React.cloneElement(child, {
      lengthMax,
      lengthMin,
      valueMax,
      valueMin,
    });
  });
};

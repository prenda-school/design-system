import React from 'react';
import { ArcScaleProps } from './ArcScaleProps';

export const ArcScale = (props: ArcScaleProps) => {
  const { angleMax, angleMin, valueMax, valueMin, children } = props;

  return React.Children.map(children, (child) => {
    // @ts-expect-error TODO
    return React.cloneElement(child, {
      angleMax,
      angleMin,
      valueMax,
      valueMin,
    });
  });
};

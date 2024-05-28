import React from 'react';
import { ArcScaleProps } from './ArcScaleProps';
import { generateArcScale } from './generateArcScale';

export const ArcScale = (props: ArcScaleProps) => {
  const { angleMax, angleMin, valueMax, valueMin, children } = props;

  const arcs = generateArcScale({
    angleMax,
    angleMin,
    valueMax,
    valueMin,
  });

  return React.Children.map(children, (child) => {
    // @ts-expect-error TODO
    return React.cloneElement(child, { arcs });
  });
};

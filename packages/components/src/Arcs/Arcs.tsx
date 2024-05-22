import React from 'react';
import { ArcsProps } from './ArcsProps';
import { generateArcs } from './generateArcs';

export const Arcs = (props: ArcsProps) => {
  const { angleMax, angleMin, valueMax, valueMin, children } = props;

  const arcs = generateArcs({
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

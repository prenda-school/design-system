import React from 'react';
import { ArcProps } from './ArcProps';
import { generateArc } from './generateArc';

export const Arc = (props: ArcProps) => {
  const { arcs, cornerRadius, radius, ratio, children } = props;

  if (arcs === undefined) {
    throw Error(
      'Oops! `Arc` received `arcs: undefined`. Did you mean to either (1) render as a child of `Arcs`? or (2) pass `arc` from `generateArc`?'
    );
  }

  const arc = generateArc({
    radius,
    ratio,
    cornerRadius, // maybe
    valueMax: arcs.valueMax,
    valueMin: arcs.valueMin,
    angleMax: arcs.angleMax,
    angleMin: arcs.angleMin,
  });

  return React.Children.map(children, (child) => {
    // @ts-expect-error TODO
    return React.cloneElement(child, { arc });
  });
};

import React from 'react';
import { ArcProps } from './ArcProps';
import { generateArc } from './generateArc';

export const Arc = (props: ArcProps) => {
  const {
    valueMin,
    valueMax,
    angleMax,
    angleMin,
    cornerRadius,
    radius,
    ratio,
    children,
  } = props;

  if (valueMin === undefined) {
    throw Error(getMissingPropMessage('valueMin'));
  }

  if (valueMax === undefined) {
    throw Error(getMissingPropMessage('valueMax'));
  }

  if (angleMin === undefined) {
    throw Error(getMissingPropMessage('angleMin'));
  }

  if (angleMax === undefined) {
    throw Error(getMissingPropMessage('angleMax'));
  }

  const arc = generateArc({
    radius,
    ratio,
    cornerRadius, // maybe
    valueMax,
    valueMin,
    angleMax,
    angleMin,
  });

  return React.Children.map(children, (child) => {
    // @ts-expect-error TODO
    return React.cloneElement(child, { arc });
  });
};

const getMissingPropMessage = (propName: string) => {
  return `Oops! \`Arc\` received \`${propName}: undefined\`. Did you mean to either (1) render as a child of \`ArcScale\`? or (2) set \`${propName}\`?`;
};

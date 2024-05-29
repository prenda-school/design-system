import React from 'react';
import { BarUnitLabelProps } from './BarUnitLabelProps';
import { drawBarUnitLabel } from '../utils';

export type BarUnitLabelRef = SVGTextElement;

export const BarUnitLabel = React.forwardRef<
  BarUnitLabelRef,
  BarUnitLabelProps
>((props, ref) => {
  const { at, offset, valueMin, valueMax, lengthMin, lengthMax, ...other } =
    props;

  if (valueMin === undefined) {
    throw Error(getMissingPropMessage('valueMin'));
  }

  if (valueMax === undefined) {
    throw Error(getMissingPropMessage('valueMax'));
  }

  if (lengthMax === undefined) {
    throw Error(getMissingPropMessage('lengthMax'));
  }

  const { x, y, textAnchor, dominantBaseline } = drawBarUnitLabel({
    at,
    offset,
    valueMax,
    valueMin,
    lengthMax,
    lengthMin,
  });

  return (
    <text
      ref={ref}
      x={x}
      y={y}
      textAnchor={textAnchor}
      dominantBaseline={dominantBaseline}
      {...other}
    />
  );
});

const getMissingPropMessage = (propName: string) => {
  return `Oops! \`BarUnitLabel\` received \`${propName}: undefined\`. Did you mean to either (1) render as a child of \`Bar\`? or (2) set \`${propName}\`?`;
};

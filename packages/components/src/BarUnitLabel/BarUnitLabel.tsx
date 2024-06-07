import React from 'react';
import { BarUnitLabelProps } from './BarUnitLabelProps';
import { drawBarUnitLabel } from '../utils';

export type BarUnitLabelRef = SVGTextElement;

export const BarUnitLabel = React.forwardRef<
  BarUnitLabelRef,
  BarUnitLabelProps
>((props, ref) => {
  const {
    at,
    offset,
    position,
    valueMin,
    valueMax,
    lengthMin,
    lengthMax,
    thickness,
    ...other
  } = props;

  if (valueMin === undefined) {
    throw Error(getMissingPropMessage('valueMin'));
  }

  if (valueMax === undefined) {
    throw Error(getMissingPropMessage('valueMax'));
  }

  if (lengthMax === undefined) {
    throw Error(getMissingPropMessage('lengthMax'));
  }

  if (thickness === undefined) {
    throw Error(getMissingPropMessage('thickness'));
  }

  const { x, y, textAnchor, dominantBaseline } = drawBarUnitLabel({
    at,
    offset,
    position,
    valueMax,
    valueMin,
    lengthMax,
    lengthMin,
    thickness,
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
  return `Oops! \`BarUnitLabel\` received \`${propName}: undefined\`. Did you mean to either (1) render as a child of \`BarScale\`, \`BarUnits\`? or (2) set \`${propName}\`?`;
};

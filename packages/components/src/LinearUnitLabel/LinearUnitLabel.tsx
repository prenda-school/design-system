import React from 'react';
import { LinearUnitLabelProps } from './LinearUnitLabelProps';
import { drawLinearUnitLabel } from '../utils';

export type LinearUnitLabelRef = SVGTextElement;

export const LinearUnitLabel = React.forwardRef<
  LinearUnitLabelRef,
  LinearUnitLabelProps
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

  const { x, y, textAnchor, dominantBaseline } = drawLinearUnitLabel({
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
  return `Oops! \`LinearUnitLabel\` received \`${propName}: undefined\`. Did you mean to either (1) render as a child of \`LinearScale\`? or (2) set \`${propName}\`?`;
};

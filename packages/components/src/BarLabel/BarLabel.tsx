import React from 'react';
import { BarLabelProps } from './BarLabelProps';
import { drawBarLabel } from '../utils';

export type BarLabelRef = SVGTextElement;

export const BarLabel = React.forwardRef<BarLabelRef, BarLabelProps>(
  (props, ref) => {
    const {
      dy,
      offset,
      position,
      thickness,
      // ignored
      valueMin,
      valueMax,
      lengthMin,
      lengthMax,
      cornerRadius,
      orientation,
      direction,
      dx,
      borderWidth,
      ...other
    } = props;

    if (thickness === undefined) {
      throw Error(getMissingPropMessage('thickness'));
    }

    const { y, textAnchor, dominantBaseline } = drawBarLabel({
      dy,
      offset,
      position,
      thickness,
    });

    return (
      <text
        dominantBaseline={dominantBaseline}
        ref={ref}
        textAnchor={textAnchor}
        y={y}
        {...other}
      />
    );
  }
);

const getMissingPropMessage = (propName: string) => {
  return `Oops! \`BarLabel\` received \`${propName}: undefined\`. Did you mean to either (1) render as a child of \`Bar\`? or (2) set \`${propName}\`?`;
};

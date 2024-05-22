import { SvgProperties } from 'csstype';
import React from 'react';
import { ArcUnitLabelProps } from './ArcUnitLabelProps';
import { generateArcUnitLabel } from './generateArcUnitLabel';

export type ArcUnitLabelRef = SVGTextElement;

export const ArcUnitLabel = React.forwardRef<
  ArcUnitLabelRef,
  ArcUnitLabelProps
>((props, ref) => {
  const { at, offset, arc, ...other } = props;

  if (arc === undefined) {
    throw Error(
      'Oops! `ArcUnitLabel` received `arc: undefined`. Did you mean to either (1) render as a child of `Arc`? or (2) pass `arc` from `generateArc`?'
    );
  }

  const { x, y } = generateArcUnitLabel({
    at,
    offset,
    arc,
  });

  const textAnchor: SvgProperties['textAnchor'] =
    x < 0 ? 'end' : x > 0 ? 'start' : 'middle';

  const dominantBaseline: SvgProperties['dominantBaseline'] =
    x === 0 ? 'alphabetic' : 'central';

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

import React from 'react';
import { ArcSegmentsProps } from './ArcSegmentsProp';
import { generateArcSegments } from './generateArcSegments';

export const ArcSegments = (props: ArcSegmentsProps) => {
  const { arc, children, cornerRadius, count, padAngle } = props;

  if (arc === undefined) {
    throw Error(
      'Oops! `ArcSegments` received `arc: undefined`. Did you mean to either (1) render as a child of `Arc`? or (2) pass `arc` from `generateArc`?'
    );
  }

  const arcSegments = generateArcSegments({
    count,
    padAngle,
    cornerRadius,
  });

  const extraProps = { arc: Object.assign(arc, { segments: arcSegments }) };

  return React.Children.map(children, (child) => {
    // @ts-expect-error TODO
    return React.cloneElement(child, extraProps);
  });
};

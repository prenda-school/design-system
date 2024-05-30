import React from 'react';
import { ArcSegmentsProps } from './ArcSegmentsProp';
import { generateArcSegments } from './generateArcSegments';
import { ArcOut } from '../Arc/generateArc';

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

  const arcWithSegments = Object.assign(arc, { segments: arcSegments });

  return React.Children.map(children, (child) => {
    if (React.isValidElement<Omit<{ arc: ArcOut }, 'children'>>(child)) {
      return React.cloneElement(child, {
        arc: child.props.arc ?? arcWithSegments,
      });
    }

    return child;
  });
};

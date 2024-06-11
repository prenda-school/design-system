import React from 'react';
import { ArcSegmentsProps } from './ArcSegmentsProp';
import { ArcSegmentsOut, generateArcSegments } from './generateArcSegments';
import { ArcOut } from '../Arc/generateArc';

export const ArcSegments = (props: ArcSegmentsProps) => {
  const { children, ctx, cornerRadius, count, padAngle } = props;

  if (ctx === undefined) {
    throw Error(
      'Oops! `ArcSegments` received `ctx: undefined`. Did you mean to either (1) render as a child of `Arc`? or (2) specify `ctx` explicitly?'
    );
  }

  const arcSegments = generateArcSegments({
    count,
    padAngle,
    cornerRadius,
  });

  return React.Children.map(children, (child) => {
    if (
      React.isValidElement<{
        ctx: { arc: ArcOut; arcSegments: ArcSegmentsOut };
      }>(child)
    ) {
      return React.cloneElement(child, {
        ctx: child.props.ctx ?? {
          arc: ctx.arc,
          arcSegments,
        },
      });
    }

    return child;
  });
};

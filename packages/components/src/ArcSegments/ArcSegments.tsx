import React from 'react';
import { ArcSegmentsChildProps, ArcSegmentsProps } from './ArcSegmentsProp';

export const ArcSegments = (props: ArcSegmentsProps) => {
  const { children, ctx, cornerRadius, count, padAngle } = props;

  if (ctx === undefined) {
    throw Error(
      'Oops! `ArcSegments` received `ctx: undefined`. Did you mean to either (1) render as a child of `Arc`? or (2) specify `ctx` explicitly?'
    );
  }

  return React.Children.map(children, (child) => {
    if (React.isValidElement<ArcSegmentsChildProps>(child)) {
      return React.cloneElement(child, {
        ctx: child.props.ctx ?? {
          ...ctx,
          arcSegments: {
            cornerRadius,
            count,
            padAngle,
          },
        },
      });
    }

    return child;
  });
};

import React from 'react';
import { ArcSegmentsChildProps, ArcSegmentsProps } from './ArcSegmentsProp';
import { mergeCtxOverrides } from '../utils';

export const ArcSegments = (props: ArcSegmentsProps) => {
  const {
    children,
    ctx: ctxProp,
    cornerRadius,
    count,
    padAngle,
    overrides,
  } = props;

  if (ctxProp === undefined) {
    throw Error(
      'Oops! `ArcSegments` received `ctx: undefined`. Did you mean to either (1) render as a child of `Arc`? or (2) specify `ctx` explicitly?'
    );
  }

  const ctxWithOverrides = mergeCtxOverrides(ctxProp, overrides);

  const ctx = {
    ...ctxWithOverrides,
    arcSegments: {
      cornerRadius,
      count,
      padAngle,
    },
  };

  return React.Children.map(children, (child) => {
    if (React.isValidElement<ArcSegmentsChildProps>(child)) {
      return React.cloneElement(child, {
        ctx: child.props.ctx ?? ctx,
      });
    }

    return child;
  });
};

import React from 'react';
import {
  RadialBarSegmentsChildProps,
  RadialBarSegmentsProps,
} from './RadialBarSegmentsProp';
import { mergeCtxOverrides } from '../utils';

export const RadialBarSegments = (props: RadialBarSegmentsProps) => {
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
      'Oops! `RadialBarSegments` received `ctx: undefined`. Did you mean to either (1) render as a child of `RadialBar`? or (2) specify `ctx` explicitly?'
    );
  }

  const ctxWithOverrides = mergeCtxOverrides(ctxProp, overrides);

  const ctx: RadialBarSegmentsChildProps['ctx'] = {
    ...ctxWithOverrides,
    radialBarSegments: {
      cornerRadius,
      count,
      padAngle,
    },
  };

  return React.Children.map(children, (child) => {
    if (React.isValidElement<RadialBarSegmentsChildProps>(child)) {
      return React.cloneElement(child, {
        ctx: child.props.ctx ?? ctx,
      });
    }

    return child;
  });
};

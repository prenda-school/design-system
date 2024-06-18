import React from 'react';
import { RadialBarChildProps, RadialBarProps } from './RadialBarProps';
import { mergeCtxOverrides } from '../utils';

export const RadialBar = (props: RadialBarProps) => {
  const {
    cornerRadius,
    radius,
    ratio,
    ctx: ctxProp,
    overrides,
    children,
  } = props;

  if (ctxProp === undefined) {
    throw Error(
      'Oops! `RadialBar` received `ctx: undefined`. Did you mean to either (1) render as a child of `RadialBarScale`? or (2) set `ctx`?'
    );
  }

  const ctxWithOverrides = mergeCtxOverrides(ctxProp, overrides);

  const ctx: RadialBarChildProps['ctx'] = {
    ...ctxWithOverrides,
    radialBar: {
      radius,
      ratio,
      cornerRadius,
    },
  };

  return React.Children.map(children, (child) => {
    if (React.isValidElement<RadialBarChildProps>(child)) {
      return React.cloneElement(child, {
        ctx: child.props.ctx ?? ctx,
      });
    }
    return child;
  });
};

import React from 'react';
import { BarChildProps, BarProps } from './BarProps';
import { mergeCtxOverrides } from '../utils';

export const Bar = (props: BarProps) => {
  const {
    thickness,
    cornerRadius,
    orientation,
    direction,
    dx,
    dy,
    borderWidth,
    children: childrenProp,
    ctx: ctxProp,
    overrides,
  } = props;

  if (ctxProp === undefined) {
    throw Error(
      'Oops! `Bar` received `ctx: undefined`. Did you mean to either (1) render as a child of `BarScale`? or (2) specify `ctx` explicitly?'
    );
  }

  const ctxWithOverrides = mergeCtxOverrides(ctxProp, overrides);

  const ctx = {
    ...ctxWithOverrides,
    bar: {
      thickness,
      cornerRadius,
      orientation,
      direction,
      dx,
      dy,
      borderWidth,
    },
  };

  const children = React.Children.map(childrenProp, (child) => {
    if (React.isValidElement<BarChildProps>(child)) {
      return React.cloneElement(child, {
        ctx: child.props.ctx ?? ctx,
      });
    }

    return child;
  });

  return <>{children}</>;
};

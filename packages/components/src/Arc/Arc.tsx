import React from 'react';
import { ArcChildProps, ArcProps } from './ArcProps';
import { mergeCtxOverrides } from '../utils';

export const Arc = (props: ArcProps) => {
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
      'Oops! `Arc` received `ctx: undefined`. Did you mean to either (1) render as a child of `ArcScale`? or (2) set `ctx`?'
    );
  }

  const ctxWithOverrides = mergeCtxOverrides(ctxProp, overrides);

  const ctx = {
    ...ctxWithOverrides,
    arc: {
      radius,
      ratio,
      cornerRadius,
    },
  };

  return React.Children.map(children, (child) => {
    if (React.isValidElement<ArcChildProps>(child)) {
      return React.cloneElement(child, {
        ctx: child.props.ctx ?? ctx,
      });
    }
    return child;
  });
};

import React from 'react';
import { ArcUnitsChildProps, ArcUnitsProps } from './ArcUnitsProps';
import { mergeCtxOverrides } from '../utils';

export const ArcUnits = (props: ArcUnitsProps) => {
  const { children, ctx: ctxProp, offset, overrides, position } = props;

  if (ctxProp === undefined) {
    throw Error(
      'Oops! `ArcUnits` received `ctx: undefined`. Did you mean to either (1) render as a child of `Arc`? or (2) specify `ctx` explicitly?'
    );
  }

  const ctxWithOverrides = mergeCtxOverrides(ctxProp, overrides);

  const ctx = {
    ...ctxWithOverrides,
    arcUnits: {
      offset,
      position,
    },
  };

  return React.Children.map(children, (child) => {
    if (React.isValidElement<ArcUnitsChildProps>(child)) {
      return React.cloneElement(child, {
        ctx: child.props.ctx ?? ctx,
      });
    }

    return child;
  });
};

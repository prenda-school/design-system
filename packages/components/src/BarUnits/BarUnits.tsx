import React from 'react';
import { BarUnitsChildProps, BarUnitsProps } from './BarUnitsProps';
import { mergeCtxOverrides } from '../utils';

export const BarUnits = (props: BarUnitsProps) => {
  const { offset, position, children, ctx: ctxProp, overrides } = props;

  if (ctxProp === undefined) {
    throw Error(
      'Oops! `BarUnits` received `ctx: undefined`. Did you mean to either (1) render as a child of `Bar`? or (2) specify `ctx` explicitly?'
    );
  }

  const ctxWithOverrides = mergeCtxOverrides(ctxProp, overrides);

  const ctx = {
    ...ctxWithOverrides,
    barUnits: {
      offset,
      position,
    },
  };

  return React.Children.map(children, (child) => {
    if (React.isValidElement<BarUnitsChildProps>(child)) {
      return React.cloneElement(child, {
        ctx: child.props.ctx ?? ctx,
      });
    }

    return child;
  });
};

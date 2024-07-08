import React from 'react';
import {
  RadialBarUnitsChildProps,
  RadialBarUnitsProps,
} from './RadialBarUnitsProps';
import { mergeCtxOverrides } from '../utils';

export const RadialBarUnits = (props: RadialBarUnitsProps) => {
  const {
    children: childrenProp,
    ctx: ctxProp,
    offset,
    overrides,
    position,
  } = props;

  if (ctxProp === undefined) {
    throw Error(
      'Oops! `RadialBarUnits` received `ctx: undefined`. Did you mean to either (1) render as a child of `RadialBar`? or (2) specify `ctx` explicitly?'
    );
  }

  const ctxWithOverrides = mergeCtxOverrides(ctxProp, overrides);

  const ctx: RadialBarUnitsChildProps['ctx'] = {
    ...ctxWithOverrides,
    radialBarUnits: {
      offset,
      position,
    },
  };

  const children = React.Children.map(childrenProp, (child) => {
    if (React.isValidElement<RadialBarUnitsChildProps>(child)) {
      return React.cloneElement(child, {
        ctx: child.props.ctx ?? ctx,
      });
    }

    return child;
  });

  return <>{childrenProp}</>;
};

import React from 'react';
import { LinearUnitsChildProps, LinearUnitsProps } from './LinearUnitsProps';
import { mergeCtxOverrides } from '../utils';

export const LinearUnits = (props: LinearUnitsProps) => {
  const {
    children: childrenProp,
    dy,
    dominantBaseline,
    offset,
    ctx: ctxProp,
    overrides,
  } = props;

  if (ctxProp === undefined) {
    throw Error(
      'Oops! `LinearUnits` received `ctx: undefined`. Did you mean to either (1) render as a child of `LinearScale`? or (2) specify `ctx` explicitly?'
    );
  }

  const ctxWithOverrides = mergeCtxOverrides(ctxProp, overrides);

  const ctx = {
    ...ctxWithOverrides,
    linearUnits: {
      dy,
      dominantBaseline,
      offset,
    },
  };

  const children = React.Children.map(childrenProp, (child) => {
    if (React.isValidElement<LinearUnitsChildProps>(child)) {
      return React.cloneElement(child, {
        ctx: child.props.ctx ?? ctx,
      });
    }

    return child;
  });

  return <>{childrenProp}</>;
};

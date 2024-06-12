import React from 'react';
import { LinearUnitsChildProps, LinearUnitsProps } from './LinearUnitsProps';

export const LinearUnits = (props: LinearUnitsProps) => {
  const { children, dy, dominantBaseline, offset, ctx } = props;

  if (ctx === undefined) {
    throw Error(
      'Oops! `LinearUnits` received `ctx: undefined`. Did you mean to either (1) render as a child of `LinearScale`? or (2) specify `ctx` explicitly?'
    );
  }

  return React.Children.map(children, (child) => {
    if (React.isValidElement<LinearUnitsChildProps>(child)) {
      return React.cloneElement(child, {
        ctx: {
          ...ctx,
          linearUnits: {
            dy,
            dominantBaseline,
            offset,
          },
        },
      });
    }

    return child;
  });
};

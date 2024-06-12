import React from 'react';
import { BarUnitsChildProps, BarUnitsProps } from './BarUnitsProps';

export const BarUnits = (props: BarUnitsProps) => {
  const { dy, offset, position, children, ctx } = props;

  if (ctx === undefined) {
    throw Error(
      'Oops! `BarUnits` received `ctx: undefined`. Did you mean to either (1) render as a child of `Bar`? or (2) specify `ctx` explicitly?'
    );
  }

  return React.Children.map(children, (child) => {
    if (React.isValidElement<BarUnitsChildProps>(child)) {
      return React.cloneElement(child, {
        ctx: child.props.ctx ?? {
          ...ctx,
          barUnits: {
            dy,
            offset,
            position,
          },
        },
      });
    }

    return child;
  });
};

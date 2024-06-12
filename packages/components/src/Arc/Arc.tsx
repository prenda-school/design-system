import React from 'react';
import { ArcChildProps, ArcProps } from './ArcProps';

export const Arc = (props: ArcProps) => {
  const { cornerRadius, radius, ratio, ctx, children } = props;

  if (ctx === undefined) {
    throw Error(
      'Oops! `Arc` received `ctx: undefined`. Did you mean to either (1) render as a child of `ArcScale`? or (2) set `ctx`?'
    );
  }

  return React.Children.map(children, (child) => {
    if (React.isValidElement<ArcChildProps>(child)) {
      return React.cloneElement(child, {
        ctx: child.props.ctx ?? {
          ...ctx,
          arc: {
            radius,
            ratio,
            cornerRadius,
          },
        },
      });
    }
    return child;
  });
};

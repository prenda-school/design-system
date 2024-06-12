import React from 'react';
import { BarChildProps, BarProps } from './BarProps';

export type BarRef = SVGPathElement;

export const Bar = React.forwardRef<BarRef, BarProps>((props, ref) => {
  const {
    thickness,
    cornerRadius,
    orientation,
    direction,
    dx,
    dy,
    borderWidth,
    children,
    ctx,
  } = props;

  if (ctx === undefined) {
    throw Error(
      'Oops! `Bar` received `ctx: undefined`. Did you mean to either (1) render as a child of `BarScale`? or (2) specify `ctx` explicitly?'
    );
  }

  return React.Children.map(children, (child) => {
    if (React.isValidElement<BarChildProps>(child)) {
      return React.cloneElement(child, {
        ctx: child.props.ctx ?? {
          ...ctx,
          bar: {
            thickness,
            cornerRadius,
            orientation,
            direction,
            dx,
            dy,
            borderWidth,
          },
        },
      });
    }

    return child;
  });
});

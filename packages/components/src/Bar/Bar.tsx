import React from 'react';
import { BarChildProps, BarProps } from './BarProps';
import { mergeCtxOverrides } from '../utils';

export interface BarElement extends SVGPathElement {}

export const Bar = React.forwardRef<BarElement, BarProps>(function Bar(
  props,
  ref
) {
  const {
    thickness,
    cornerRadius,
    orientation,
    direction,
    dx,
    dy,
    borderWidth,
    children,
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

  return React.Children.map(children, (child) => {
    if (React.isValidElement<BarChildProps>(child)) {
      return React.cloneElement(child, {
        ctx: child.props.ctx ?? ctx,
      });
    }

    return child;
  });
});

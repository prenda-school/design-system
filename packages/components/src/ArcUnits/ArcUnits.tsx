import React from 'react';
import { ArcUnitsProps } from './ArcUnitsProps';
import { CtxWithArc, CtxWithArcScale, CtxWithArcUnits } from '../utils';

export const ArcUnits = (props: ArcUnitsProps) => {
  const { children, ctx, offset, position, ...other } = props;

  return React.Children.map(children, (child) => {
    if (
      React.isValidElement<{
        ctx: CtxWithArcScale & CtxWithArc & CtxWithArcUnits;
      }>(child)
    ) {
      return React.cloneElement(child, {
        ctx: child.props.ctx ?? {
          ...ctx,
          arcUnits: {
            offset,
            position,
          },
        },
        ...other,
      });
    }

    return child;
  });
};

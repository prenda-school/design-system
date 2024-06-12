import React from 'react';
import { ArcUnitsChildProps, ArcUnitsProps } from './ArcUnitsProps';

export const ArcUnits = (props: ArcUnitsProps) => {
  const { children, ctx, offset, position, ...other } = props;

  return React.Children.map(children, (child) => {
    if (React.isValidElement<ArcUnitsChildProps>(child)) {
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

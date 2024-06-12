import React from 'react';
import { BarScaleChildProps, BarScaleProps } from './BarScaleProps';

export const BarScale = (props: BarScaleProps) => {
  const { children, lengthMax, lengthMin, valueMax, valueMin } = props;

  return React.Children.map(children, (child) => {
    if (React.isValidElement<BarScaleChildProps>(child)) {
      return React.cloneElement(child, {
        ctx: child.props.ctx ?? {
          barScale: {
            lengthMax,
            lengthMin,
            valueMax,
            valueMin,
          },
        },
      });
    }

    return child;
  });
};

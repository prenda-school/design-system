import React from 'react';
import { LinearScaleChildProps, LinearScaleProps } from './LinearScaleProps';

export const LinearScale = (props: LinearScaleProps) => {
  const { children, lengthMax, lengthMin, valueMax, valueMin } = props;

  return React.Children.map(children, (child) => {
    if (React.isValidElement<LinearScaleChildProps>(child)) {
      return React.cloneElement(child, {
        ctx: child.props.ctx ?? {
          linearScale: {
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

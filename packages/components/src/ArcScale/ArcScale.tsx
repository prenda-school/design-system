import React from 'react';
import { ArcScaleChildProps, ArcScaleProps } from './ArcScaleProps';

export const ArcScale = (props: ArcScaleProps) => {
  const { angleMax, angleMin, valueMax, valueMin, children } = props;

  return React.Children.map(children, (child) => {
    if (React.isValidElement<ArcScaleChildProps>(child)) {
      return React.cloneElement(child, {
        ctx: child.props.ctx ?? {
          arcScale: {
            angleMax,
            angleMin,
            valueMax,
            valueMin,
          },
        },
      });
    }

    return child;
  });
};

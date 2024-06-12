import React from 'react';
import { ArcScaleProps } from './ArcScaleProps';
import { CtxWithArcScale } from '../utils';

export const ArcScale = (props: ArcScaleProps) => {
  const { angleMax, angleMin, valueMax, valueMin, children } = props;

  return React.Children.map(children, (child) => {
    if (React.isValidElement<{ ctx: CtxWithArcScale }>(child)) {
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

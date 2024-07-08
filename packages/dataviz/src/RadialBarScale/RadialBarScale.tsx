import React from 'react';
import {
  RadialBarScaleChildProps,
  RadialBarScaleProps,
} from './RadialBarScaleProps';

export const RadialBarScale = (props: RadialBarScaleProps) => {
  const {
    angleMax,
    angleMin,
    valueMax,
    valueMin,
    children: childrenProp,
  } = props;

  const ctx: RadialBarScaleChildProps['ctx'] = {
    radialBarScale: {
      angleMax,
      angleMin,
      valueMax,
      valueMin,
    },
  };

  const children = React.Children.map(childrenProp, (child) => {
    if (React.isValidElement<RadialBarScaleChildProps>(child)) {
      return React.cloneElement(child, {
        ctx: child.props.ctx ?? ctx,
      });
    }

    return child;
  });

  return <>{childrenProp}</>;
};
